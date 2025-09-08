import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { HomeAssistant, isActive, isAvailable, LightEntity } from "../../../ha";
import "../../../shared/slider";
import { getBrightness, getRGBColor, isColorLight } from "../../light-card/utils";

type LightCardControl = "brightness_control" | "color_temp_control" | "color_control";

@customElement("mushroom-enhanced-light-control")
export class EnhancedLightControl extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @property({ attribute: false }) public entity!: LightEntity;

  @property({ attribute: false }) public activeControl!: LightCardControl;

  @state() private _isDragging = false;

  private getValue(): number {
    switch (this.activeControl) {
      case "brightness_control":
        return getBrightness(this.entity) || 0;
      case "color_temp_control":
        const colorTemp = this.entity.attributes.color_temp;
        if (colorTemp) {
          const min = this.entity.attributes.min_mireds || 153;
          const max = this.entity.attributes.max_mireds || 500;
          return Math.round(((colorTemp - min) / (max - min)) * 100);
        }
        return 50;
      case "color_control":
        const hsColor = this.entity.attributes.hs_color;
        if (hsColor && hsColor[1] !== undefined) {
          return Math.round(hsColor[1]); // Return saturation
        }
        return 100;
      default:
        return 0;
    }
  }

  private getSliderConfig() {
    switch (this.activeControl) {
      case "brightness_control":
        return { min: 1, max: 100, step: 1 };
      case "color_temp_control":
        return { min: 0, max: 100, step: 1 };
      case "color_control":
        return { min: 0, max: 100, step: 1 };
      default:
        return { min: 0, max: 100, step: 1 };
    }
  }

  private getSliderStyle() {
    const lightRgbColor = getRGBColor(this.entity);
    const sliderStyle: any = {};

    // Default styling
    if (lightRgbColor) {
      const color = lightRgbColor.join(",");
      sliderStyle["--slider-color"] = `rgb(${color})`;
      sliderStyle["--slider-bg-color"] = `rgba(${color}, 0.2)`;
      if (isColorLight(lightRgbColor) && !(this.hass.themes as any).darkMode) {
        sliderStyle["--slider-bg-color"] = `rgba(var(--rgb-primary-text-color), 0.05)`;
        sliderStyle["--slider-color"] = `rgba(var(--rgb-primary-text-color), 0.15)`;
      }
    }

    // Control-specific styling
    switch (this.activeControl) {
      case "color_temp_control":
        sliderStyle["--slider-color"] = "#FFC107";
        sliderStyle["--slider-bg-color"] = "rgba(255, 193, 7, 0.2)";
        break;
      case "color_control":
        sliderStyle["--slider-color"] = "var(--primary-color)";
        sliderStyle["--slider-bg-color"] = "rgba(var(--rgb-primary-color), 0.2)";
        break;
    }

    return sliderStyle;
  }

  // Only send commands on slider release (change event)
  onChange(e: CustomEvent<{ value: number }>): void {
    const value = e.detail.value;
    this._isDragging = false;

    switch (this.activeControl) {
      case "brightness_control":
        this.hass.callService("light", "turn_on", {
          entity_id: this.entity.entity_id,
          brightness_pct: value,
        });
        break;
      case "color_temp_control":
        const min = this.entity.attributes.min_mireds || 153;
        const max = this.entity.attributes.max_mireds || 500;
        const colorTemp = Math.round(min + (value / 100) * (max - min));
        this.hass.callService("light", "turn_on", {
          entity_id: this.entity.entity_id,
          color_temp: colorTemp,
        });
        break;
      case "color_control":
        const currentHs = this.entity.attributes.hs_color || [0, 100];
        this.hass.callService("light", "turn_on", {
          entity_id: this.entity.entity_id,
          hs_color: [currentHs[0], value],
        });
        break;
    }
  }

  // Track dragging state but don't send commands
  onCurrentChange(e: CustomEvent<{ value?: number }>): void {
    if (e.detail.value != null) {
      this._isDragging = true;
    } else {
      this._isDragging = false;
    }

    // Only dispatch brightness changes for display updates
    if (this.activeControl === "brightness_control") {
      this.dispatchEvent(
        new CustomEvent("current-change", {
          detail: e.detail,
        })
      );
    }
  }

  protected render(): TemplateResult {
    const value = this.getValue();
    const config = this.getSliderConfig();
    const sliderStyle = this.getSliderStyle();

    return html`
      <div class="enhanced-control" style=${styleMap(sliderStyle)}>
        <mushroom-slider
          .value=${value}
          .disabled=${!isAvailable(this.entity)}
          .inactive=${!isActive(this.entity)}
          .showActive=${true}
          .min=${config.min}
          .max=${config.max}
          .step=${config.step}
          @change=${this.onChange}
          @current-change=${this.onCurrentChange}
        />
      </div>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        --slider-color: rgb(var(--rgb-state-light));
        --slider-outline-color: transparent;
        --slider-bg-color: rgba(var(--rgb-state-light), 0.2);
        display: block;
        width: 100%;
      }
      .enhanced-control {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
      }
      mushroom-slider {
        --main-color: var(--slider-color);
        --bg-color: var(--slider-bg-color);
        --main-outline-color: var(--slider-outline-color);
        width: 100%;
        height: 100%;
      }
    `;
  }
}

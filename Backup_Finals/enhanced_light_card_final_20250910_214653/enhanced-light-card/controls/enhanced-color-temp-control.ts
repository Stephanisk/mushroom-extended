import { css, CSSResultGroup, html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { HomeAssistant, isActive, isAvailable, LightEntity } from "../../../ha";
import "../../../shared/slider";
import { getColorTemp } from "../../light-card/utils";

@customElement("mushroom-enhanced-color-temp-control")
export class EnhancedColorTempControl extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @property({ attribute: false }) public entity!: LightEntity;

  onChange(e: CustomEvent<{ value: number }>): void {
    const value = e.detail.value;

    this.hass.callService("light", "turn_on", {
      entity_id: this.entity.entity_id,
      color_temp: value,
    });
  }

  onCurrentChange(e: CustomEvent<{ value?: number }>): void {
    if (e.detail.value != null) {
      console.log(`🎚️ Color temp slider moving: ${e.detail.value}%`);
    } else {
      console.log(`🎚️ Color temp slider released`);
    }
  }

  protected render(): TemplateResult {
    const colorTemp = getColorTemp(this.entity);

    return html`
      <mushroom-slider
        .value=${colorTemp}
        .disabled=${!isAvailable(this.entity)}
        .inactive=${!isActive(this.entity)}
        .min=${this.entity.attributes.min_mireds ?? 0}
        .max=${this.entity.attributes.max_mireds ?? 100}
        .showIndicator=${true}
        @change=${this.onChange}
        @current-change=${this.onCurrentChange}
      />
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        --slider-color: #FFC107;
        --slider-outline-color: transparent;
        --slider-bg-color: transparent;
      }
      mushroom-slider {
        --gradient: -webkit-linear-gradient(
          left,
          rgba(166, 209, 255, 0.4) 0%,
          rgba(255, 212, 120, 0.4) 100%
        );
      }
    `;
  }
}

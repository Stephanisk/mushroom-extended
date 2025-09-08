import {
  css,
  CSSResultGroup,
  html,
  nothing,
  PropertyValues,
  TemplateResult,
} from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import {
  actionHandler,
  ActionHandlerEvent,
  computeRTL,
  handleAction,
  hasAction,
  HomeAssistant,
  isActive,
  LightEntity,
  LovelaceCard,
  LovelaceCardEditor,
} from "../../ha";
import "../../shared/badge-icon";
import "../../shared/button";
import "../../shared/card";
import "../../shared/shape-avatar";
import "../../shared/shape-icon";
import "../../shared/state-info";
import "../../shared/state-item";
import { computeAppearance } from "../../utils/appearance";
import { MushroomBaseCard } from "../../utils/base-card";
import { cardStyle } from "../../utils/card-styles";
import { computeRgbColor } from "../../utils/colors";
import { registerCustomCard } from "../../utils/custom-cards";
import { computeEntityPicture } from "../../utils/info";
import {
  LIGHT_CARD_EDITOR_NAME,
  LIGHT_ENTITY_DOMAINS,
} from "../light-card/const";
import "./controls/enhanced-brightness-control";
import "./controls/enhanced-color-temp-control";
import "./controls/enhanced-color-control";
import "../../shared/popup/enhanced-popup";
import { LightCardConfig } from "../light-card/light-card-config";

interface EnhancedLightCardConfig extends LightCardConfig {
  button_layout?: "inline" | "vertical-enhanced";
  font_size?: number;
  icon_offset_x?: number;
  show_brightness_percentage?: boolean;
  text_align?: "left" | "center" | "right";
  // Card styling options
  card_background_color?: string;
  card_background_image?: string;
  card_background_image_opacity?: number;
  card_background_image_position?: "center" | "left" | "right" | "top" | "bottom" | "left top" | "right top" | "left bottom" | "right bottom";
  card_border_color?: string;
  card_border_width?: string;
  card_border_radius?: string;
  card_box_shadow?: string;
  enhanced_popup?: {
    show_sub_entities?: boolean;
    show_effects?: boolean;
    show_scenes?: boolean;
    show_advanced_controls?: boolean;
    card_type?: "mushroom" | "standard" | "entity";
    title?: string;
    background_color?: string;
    sub_entities_text?: string;
    text_style?: {
      font_size?: string;
      font_weight?: string;
      color?: string;
      background_color?: string;
      text_align?: "left" | "center" | "right";
      padding?: string;
      border_radius?: string;
    };
  };
}
import {
  getRGBColor,
  isColorLight,
  isColorSuperLight,
  supportsBrightnessControl,
  supportsColorControl,
  supportsColorTempControl,
} from "../light-card/utils";

const ENHANCED_LIGHT_CARD_NAME = "mushroom-enhanced-light-card";
const ENHANCED_LIGHT_CARD_EDITOR_NAME = `${ENHANCED_LIGHT_CARD_NAME}-editor`;

type LightCardControl =
  | "brightness_control"
  | "color_temp_control"
  | "color_control";

const CONTROLS_ICONS: Record<LightCardControl, string> = {
  brightness_control: "mdi:brightness-4",
  color_temp_control: "mdi:thermometer",
  color_control: "mdi:palette",
};

registerCustomCard({
  type: ENHANCED_LIGHT_CARD_NAME,
  name: "Mushroom Enhanced Light Card",
  description: "Enhanced card for light entity with unified controls",
});

@customElement(ENHANCED_LIGHT_CARD_NAME)
export class EnhancedLightCard
  extends MushroomBaseCard<EnhancedLightCardConfig, LightEntity>
  implements LovelaceCard
{
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import("../light-card/light-card-editor");
    return document.createElement(LIGHT_CARD_EDITOR_NAME) as LovelaceCardEditor;
  }

  public static async getStubConfig(
    hass: HomeAssistant
  ): Promise<EnhancedLightCardConfig> {
    const entities = Object.keys(hass.states);
    const lights = entities.filter((e) =>
      LIGHT_ENTITY_DOMAINS.includes(e.split(".")[0])
    );
    return {
      type: `custom:${ENHANCED_LIGHT_CARD_NAME}`,
      entity: lights[0],
      button_layout: "inline",
      font_size: 14,
      icon_offset_x: 0,
      show_brightness_percentage: true,
      text_align: "left",
    };
  }

  @state() private _activeControl?: LightCardControl;

  @state() private brightness?: number;
  @state() private _showPopup = false;

  private get _controls(): LightCardControl[] {
    if (!this._config || !this._stateObj) return [];

    const stateObj = this._stateObj;
    const controls: LightCardControl[] = [];
    if (
      this._config.show_brightness_control &&
      supportsBrightnessControl(stateObj)
    ) {
      controls.push("brightness_control");
    }
    if (
      this._config.show_color_temp_control &&
      supportsColorTempControl(stateObj)
    ) {
      controls.push("color_temp_control");
    }
    if (this._config.show_color_control && supportsColorControl(stateObj)) {
      controls.push("color_control");
    }
    return controls;
  }

  protected get hasControls(): boolean {
    return this._controls.length > 0;
  }

  setConfig(config: EnhancedLightCardConfig): void {
    console.log("🎯 Enhanced light card config:", config);
    super.setConfig({
      tap_action: {
        action: "toggle",
      },
      hold_action: {
        action: "more-info",
      },
      double_tap_action: {
        action: "more-info",
      },
      button_layout: "inline",
      font_size: 14,
      icon_offset_x: 0,
      show_brightness_percentage: true,
      text_align: "left",
      // Card styling defaults
      card_background_image_opacity: 1,
      card_background_image_position: "center",
      card_border_width: "0px",
      card_border_radius: "12px",
      ...config,
    });
    console.log("🎯 Final config with actions:", this._config);
    console.log("🎯 Double tap action:", this._config?.double_tap_action);
    this.updateActiveControl();
    this.updateBrightness();
  }

  _onControlTap(ctrl: LightCardControl, e: Event): void {
    e.stopPropagation();
    this._activeControl = ctrl;
  }

  protected updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (this.hass && changedProperties.has("hass")) {
      this.updateActiveControl();
      this.updateBrightness();
    }
  }

  updateBrightness() {
    this.brightness = undefined;
    const stateObj = this._stateObj;

    if (!stateObj) return;
    this.brightness = stateObj.attributes.brightness;
  }

  private onCurrentBrightnessChange(e: CustomEvent<{ value?: number }>): void {
    if (e.detail.value != null) {
      this.brightness = (e.detail.value * 255) / 100;
    }
  }

  updateActiveControl() {
    const isActiveControlSupported = this._activeControl
      ? this._controls.includes(this._activeControl)
      : false;
    this._activeControl = isActiveControlSupported
      ? this._activeControl
      : this._controls[0];
  }

  private _handleAction(ev: ActionHandlerEvent) {
    const actionType = ev.detail.action!;
    
    console.log("🎯 Action type:", actionType);
    
    // Check if this is a double_tap and if it should open our enhanced popup
    // Using 'as any' to bypass TypeScript's action type checking since we're adding a custom action
    if (actionType === "double_tap" && (this._config?.double_tap_action as any)?.action === "enhanced-more-info") {
      console.log("🔥 Opening enhanced popup!");
      this._showPopup = true;
      return;
    }
    
    console.log("🎯 Passing to handleAction...");
    handleAction(this, this.hass!, this._config!, ev.detail.action!);
  }

  private _handlePopupClosed() {
    console.log("🎯 Popup closed event received");
    this._showPopup = false;
  }

  protected render() {
    if (!this._config || !this.hass || !this._config.entity) {
      return nothing;
    }

    const stateObj = this._stateObj;

    if (!stateObj) {
      return this.renderNotFound(this._config);
    }

    const name = this._config.name || stateObj.attributes.friendly_name || "";
    const icon = this._config.icon;
    const appearance = computeAppearance(this._config);
    const picture = computeEntityPicture(stateObj, appearance.icon_type);

    let stateDisplay = this.hass.formatEntityState(stateObj);
    if (this._config.button_layout === "vertical-enhanced") {
      // In vertical mode, don't show state - just keep name
      stateDisplay = "";
    } else if (this.brightness != null && this._config.show_brightness_percentage) {
      const brightness = this.hass.formatEntityAttributeValue(
        stateObj,
        "brightness",
        this.brightness
      );
      stateDisplay = brightness;
    }

    const rtl = computeRTL(this.hass);

    const isControlVisible =
      (!this._config.collapsible_controls || isActive(stateObj)) &&
      this._controls.length;

    // Build card styling for background color, font size, and icon offset
    const cardStyle: Record<string, string> = {
      "--enhanced-font-size": `${this._config.font_size || 14}px`,
      "--enhanced-icon-offset": `${this._config.icon_offset_x || 0}px`
    };
    if (this._config.card_background_color) {
      cardStyle["background-color"] = this._config.card_background_color;
    }
    if (this._config.card_background_image) {
      const opacity = this._config.card_background_image_opacity || 1;
      const position = this._config.card_background_image_position || "center";
      
      if (opacity === 1) {
        // Simple direct background image
        cardStyle["background-image"] = `url(${this._config.card_background_image})`;
      } else {
        // Use linear-gradient overlay for opacity control
        const overlayOpacity = 1 - opacity;
        cardStyle["background-image"] = `linear-gradient(rgba(255,255,255,${overlayOpacity}), rgba(255,255,255,${overlayOpacity})), url(${this._config.card_background_image})`;
      }
      
      cardStyle["background-size"] = "cover";
      cardStyle["background-position"] = position;
      cardStyle["background-repeat"] = "no-repeat";
    }
    if (this._config.card_border_color) {
      cardStyle["border-color"] = this._config.card_border_color;
      cardStyle["border-style"] = "solid";
    }
    if (this._config.card_border_width) {
      cardStyle["border-width"] = this._config.card_border_width;
      if (!this._config.card_border_color) {
        cardStyle["border-color"] = "var(--primary-color)";
        cardStyle["border-style"] = "solid";
      }
    }
    if (this._config.card_border_radius) {
      cardStyle["border-radius"] = this._config.card_border_radius;
    }
    if (this._config.card_box_shadow) {
      cardStyle["box-shadow"] = this._config.card_box_shadow;
    }

    return html`
      <ha-card
        class=${classMap({ 
          "fill-container": appearance.fill_container,
          "enhanced-font": true,
          "enhanced-icon-offset": this._config.icon_offset_x !== 0
        })}
        style=${styleMap(cardStyle)}
      >
        <mushroom-card .appearance=${appearance} ?rtl=${rtl}>
          <div class="enhanced-state-wrapper align-${this._config.text_align || "left"}" style=${styleMap({
            transform: `translateX(${this._config.icon_offset_x || 0}px)`
          })}>
            <mushroom-state-item
              ?rtl=${rtl}
              .appearance=${appearance}
              @action=${this._handleAction}
              .actionHandler=${actionHandler({
                hasHold: hasAction(this._config.hold_action),
                hasDoubleClick: hasAction(this._config.double_tap_action),
              })}
              @dblclick=${() => console.log("🔥 Double click detected!")}
              style=${styleMap({
                "--card-primary-font-size": `${this._config.font_size || 14}px`
              })}
            >
              ${picture
                ? this.renderPicture(picture)
                : this.renderIcon(stateObj)}
              ${this.renderBadge(stateObj)}
              ${this.renderStateInfo(stateObj, appearance, name, stateDisplay)};
            </mushroom-state-item>
          </div>
          ${isControlVisible
            ? html`
                <div class="actions ${this._config.button_layout === "vertical-enhanced" ? "enhanced-vertical" : ""}" ?rtl=${rtl}>
                  ${this.renderUnifiedControl(stateObj)}
                  <div class="button-container">
                    ${this.renderControlButtons()}
                  </div>
                </div>
              `
            : nothing}
        </mushroom-card>
        
        ${this._showPopup ? html`
          <mushroom-enhanced-popup
            .hass=${this.hass}
            .config=${{
              entity: this._config.entity,
              title: this._config.enhanced_popup?.title || this._config.name || this._stateObj?.attributes.friendly_name,
              show_sub_entities: this._config.enhanced_popup?.show_sub_entities ?? true,
              show_effects: this._config.enhanced_popup?.show_effects ?? true,
              show_scenes: this._config.enhanced_popup?.show_scenes ?? false,
              show_advanced_controls: this._config.enhanced_popup?.show_advanced_controls ?? true,
              card_type: this._config.enhanced_popup?.card_type ?? "mushroom",
              background_color: this._config.enhanced_popup?.background_color || "#f5f5f5",
              sub_entities_text: this._config.enhanced_popup?.sub_entities_text || "If a light didn't react properly, please click here the light that is still on.",
              text_style: this._config.enhanced_popup?.text_style || {
                font_size: "14px",
                font_weight: "normal",
                color: "var(--primary-text-color)",
                background_color: "#fff3cd",
                text_align: "center",
                padding: "12px 16px",
                border_radius: "8px"
              },
            }}
            @popup-closed=${this._handlePopupClosed}
          ></mushroom-enhanced-popup>
        ` : nothing}
      </ha-card>
    `;
  }

  protected renderIcon(stateObj: LightEntity): TemplateResult {
    const active = isActive(stateObj);
    const iconStyle = {};
    const iconColor = this._config?.icon_color;
    const offsetX = this._config?.icon_offset_x || 0;
    
    // Use power icon and set colors based on state
    const powerIcon = "mdi:power";
    if (active) {
      // Green when on
      iconStyle["--icon-color"] = "rgb(76, 175, 80)";
      iconStyle["--shape-color"] = "rgba(76, 175, 80, 0.2)";
    } else {
      // Grey when off
      iconStyle["--icon-color"] = "rgb(158, 158, 158)";
      iconStyle["--shape-color"] = "rgba(158, 158, 158, 0.1)";
    }
    
    return html`
      <mushroom-shape-icon
        slot="icon"
        .disabled=${!active}
        style=${styleMap(iconStyle)}
      >
        <ha-icon .icon=${powerIcon}></ha-icon>
      </mushroom-shape-icon>
    `;
  }

  private renderControlButtons(): TemplateResult {
    // Show all 3 control buttons, highlight the active one
    return html`
      ${this._controls.map(
        (ctrl) => html`
          <mushroom-button 
            @click=${(e: Event) => this._onControlTap(ctrl, e)}
            class=${classMap({ active: ctrl === this._activeControl })}
          >
            <ha-icon .icon=${CONTROLS_ICONS[ctrl]}></ha-icon>
          </mushroom-button>
        `
      )}
    `;
  }

  private renderUnifiedControl(entity: LightEntity) {
    const activeControl = this._activeControl || this._controls[0];
    if (!activeControl) return nothing;
    
    switch (activeControl) {
      case "brightness_control":
        const lightRgbColor = getRGBColor(entity);
        const sliderStyle = {};
        const iconColor = this._config?.icon_color;
        if (lightRgbColor && this._config?.use_light_color) {
          const color = lightRgbColor.join(",");
          sliderStyle["--slider-color"] = `rgb(${color})`;
          sliderStyle["--slider-bg-color"] = `rgba(${color}, 0.2)`;
          if (
            isColorLight(lightRgbColor) &&
            !(this.hass.themes as any).darkMode
          ) {
            sliderStyle["--slider-bg-color"] =
              `rgba(var(--rgb-primary-text-color), 0.05)`;
            sliderStyle["--slider-color"] =
              `rgba(var(--rgb-primary-text-color), 0.15)`;
          }
        } else if (iconColor) {
          const iconRgbColor = computeRgbColor(iconColor);
          sliderStyle["--slider-color"] = `rgb(${iconRgbColor})`;
          sliderStyle["--slider-bg-color"] = `rgba(${iconRgbColor}, 0.2)`;
        }
        return html`
          <mushroom-enhanced-brightness-control
            .hass=${this.hass}
            .entity=${entity}
            style=${styleMap(sliderStyle)}
            @current-change=${this.onCurrentBrightnessChange}
          />
        `;
      case "color_temp_control":
        return html`
          <mushroom-enhanced-color-temp-control
            .hass=${this.hass}
            .entity=${entity}
          />
        `;
      case "color_control":
        return html`
          <mushroom-enhanced-color-control .hass=${this.hass} .entity=${entity} />
        `;
      default:
        return nothing;
    }
  }

  static get styles(): CSSResultGroup {
    return [
      super.styles,
      cardStyle,
      css`
        mushroom-state-item {
          cursor: pointer;
        }
        mushroom-shape-icon {
          --icon-color: rgb(var(--rgb-state-light));
          --shape-color: rgba(var(--rgb-state-light), 0.2);
        }
        mushroom-enhanced-brightness-control,
        mushroom-enhanced-color-temp-control,
        mushroom-enhanced-color-control {
          flex: 1;
        }
        mushroom-button.active {
          --icon-color: var(--accent-color);
          --button-bg-color: rgba(var(--rgb-accent-color), 0.2);
        }
        /* Vertical enhanced layout - buttons below slider */
        .actions.enhanced-vertical {
          flex-direction: column !important;
          align-items: stretch !important;
        }
        .actions.enhanced-vertical > mushroom-enhanced-brightness-control,
        .actions.enhanced-vertical > mushroom-enhanced-color-temp-control,
        .actions.enhanced-vertical > mushroom-enhanced-color-control {
          margin: 0 var(--control-spacing);
          margin-bottom: var(--control-spacing);
        }
        /* Button container styling */
        .button-container {
          display: flex;
          gap: 8px;
        }
        .actions.enhanced-vertical .button-container {
          justify-content: center;
          margin-top: 4px;
          margin-bottom: 12px;
        }
        /* Custom font size for enhanced card */
        :host(.enhanced-font) mushroom-state-info .primary {
          font-size: var(--enhanced-font-size, 14px) !important;
        }
        /* Enhanced state wrapper for positioning */
        .enhanced-state-wrapper {
          width: 100%;
          display: flex;
        }
        .enhanced-state-wrapper.align-center {
          justify-content: center;
        }
        .enhanced-state-wrapper.align-right {
          justify-content: flex-end;
        }
        .enhanced-state-wrapper.align-left {
          justify-content: flex-start;
        }
        /* Enhanced card styling support */
        ha-card[style*="background-image"] {
          background-repeat: no-repeat;
        }
      `,
    ];
  }
}

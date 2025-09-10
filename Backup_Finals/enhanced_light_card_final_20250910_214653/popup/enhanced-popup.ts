import { css, CSSResultGroup, html, LitElement, nothing, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LightEntity } from "../../ha";

export interface EnhancedPopupConfig {
  entity: string;
  title?: string;
  show_sub_entities?: boolean;
  show_effects?: boolean;
  show_scenes?: boolean;
  show_advanced_controls?: boolean;
  card_type?: "mushroom" | "standard" | "entity";  // Choose card style
  background_color?: string;  // Background color for popup
  sub_entities_text?: string;  // Custom text above sub entities
  text_style?: {
    font_size?: string;
    font_weight?: string;
    color?: string;
    background_color?: string;
    text_align?: "left" | "center" | "right";
    padding?: string;
    border_radius?: string;
  };
}

@customElement("mushroom-enhanced-popup")
export class EnhancedPopup extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: EnhancedPopupConfig;
  @state() private _opened = true;  // Start opened

  public show(): void {
    this._opened = true;
  }

  public hide(): void {
    this._opened = false;
    this.dispatchEvent(new CustomEvent("popup-closed", { bubbles: true, composed: true }));
  }

  private get _entity(): LightEntity {
    return this.hass.states[this.config.entity] as LightEntity;
  }

  private get _subEntities(): LightEntity[] {
    if (!this.config.show_sub_entities) {
      return [];
    }
    
    // Check if this is a group/area with entity_id attribute
    const entityIds = (this._entity.attributes as any).entity_id;
    if (Array.isArray(entityIds)) {
      return entityIds
        .map((id: string) => this.hass.states[id] as LightEntity)
        .filter(Boolean);
    }
    
    // If not a group, just return the main entity for testing
    return [this._entity];
  }

  private _renderMainEntity(): TemplateResult {
    return html`
      <div class="main-entity">
        <mushroom-enhanced-light-card
          .hass=${this.hass}
          .config=${{
            type: "custom:mushroom-enhanced-light-card",
            entity: this.config.entity,
            name: this._entity.attributes.friendly_name,
            button_layout: "vertical-enhanced",
            font_size: 16,
            text_align: "center",
            show_brightness_control: true,
            show_color_temp_control: true,
            show_color_control: true,
            collapsible_controls: false,
            show_brightness_percentage: false,
          }}
        ></mushroom-enhanced-light-card>
      </div>
    `;
  }

  protected render(): TemplateResult {
    console.log("🎯 Popup render called. Opened:", this._opened, "Entity:", !!this._entity);
    
    if (!this._opened || !this._entity) {
      console.log("🎯 Popup not rendering - opened:", this._opened, "entity:", !!this._entity);
      return html``;
    }

    console.log("🎯 Popup rendering dialog...");
    return html`
      <ha-dialog
        open
        @closed=${this.hide}
        .heading=${this.config.title || this._entity.attributes.friendly_name}
      >
        <div class="popup-content" style="background-color: ${this.config.background_color || '#f5f5f5'}; padding: 16px; border-radius: 8px;">
          ${this._renderMainEntity()}
          ${this._renderSubEntities()}
        </div>
        
        <mwc-button slot="primaryAction" @click=${this.hide}>
          Close
        </mwc-button>
      </ha-dialog>
    `;
  }

  private _renderMainControls(): TemplateResult {
    const entity = this._entity;
    const brightness = entity.attributes.brightness
      ? Math.round((entity.attributes.brightness / 255) * 100)
      : 0;
    const colorTemp = entity.attributes.color_temp || 370;

    return html`
      <div class="main-controls">
        <div class="entity-header">
          <mushroom-shape-icon
            .disabled=${entity.state === "off"}
            .icon=${"mdi:power"}
          ></mushroom-shape-icon>
          <div class="entity-info">
            <div class="entity-name">${entity.attributes.friendly_name}</div>
            <div class="entity-state">${entity.state}</div>
          </div>
          <mushroom-button @click=${this._toggleEntity}>
            <ha-icon .icon=${entity.state === "on" ? "mdi:power" : "mdi:power-off"}></ha-icon>
          </mushroom-button>
        </div>

        ${entity.state === "on" ? html`
          <div class="controls">
            <div class="control-row">
              <label>Brightness</label>
              <input
                type="range"
                min="0"
                max="100"
                .value=${brightness}
                @change=${this._setBrightness}
              />
              <span class="value">${brightness}%</span>
            </div>

            ${entity.attributes.color_temp ? html`
              <div class="control-row">
                <label>Color Temperature</label>
                <input
                  type="range"
                  min=${entity.attributes.min_mireds || 153}
                  max=${entity.attributes.max_mireds || 500}
                  .value=${colorTemp}
                  @change=${this._setColorTemp}
                />
                <span class="value">${colorTemp}K</span>
              </div>
            ` : nothing}
          </div>
        ` : nothing}
      </div>
    `;
  }

  private _renderSubEntities(): TemplateResult {
    console.log("🎯 Sub entities count:", this._subEntities.length);
    console.log("🎯 Sub entities:", this._subEntities.map(e => e.entity_id));
    console.log("🎯 Show sub entities config:", this.config.show_sub_entities);
    
    if (!this.config.show_sub_entities) {
      return html`<p>Sub entities disabled in config</p>`;
    }
    
    if (this._subEntities.length === 0) {
      return html`<p>No sub entities found. This light is not a group.</p>`;
    }

    return html`
      <div class="sub-entities">
        ${this.config.sub_entities_text ? html`
          <div class="instructions-text" style="
            font-size: ${this.config.text_style?.font_size || '14px'};
            font-weight: ${this.config.text_style?.font_weight || 'normal'};
            color: ${this.config.text_style?.color || 'var(--primary-text-color)'};
            background-color: ${this.config.text_style?.background_color || 'transparent'};
            text-align: ${this.config.text_style?.text_align || 'left'};
            padding: ${this.config.text_style?.padding || '12px 16px'};
            border-radius: ${this.config.text_style?.border_radius || '8px'};
            margin: 16px 0 12px 0;
            border: 1px solid var(--divider-color);
          ">
            ${this.config.sub_entities_text}
          </div>
        ` : nothing}
        <div class="entity-grid">
          ${this._subEntities.map((entity, index) => {
            console.log(`🎯 Rendering entity ${index}:`, entity.entity_id, entity.attributes.friendly_name);
            
            if (this.config.card_type === "standard") {
              // Render standard HA light card (with 3 dots menu)
              return html`
                <div class="entity-card-wrapper">
                  <hui-card .config=${{
                    type: "light",
                    entity: entity.entity_id,
                    name: entity.attributes.friendly_name,
                  }} .hass=${this.hass}></hui-card>
                </div>
              `;
            } else if (this.config.card_type === "entity") {
              // Render simple HA entity card (no 3 dots, just toggle)
              return html`
                <div class="entity-card-wrapper">
                  <hui-card .config=${{
                    type: "entity",
                    entity: entity.entity_id,
                    name: entity.attributes.friendly_name,
                    tap_action: { action: "toggle" },
                  }} .hass=${this.hass}></hui-card>
                </div>
              `;
            } else {
              // Render Mushroom entity card using hui-card (cleanest, default)
              return html`
                <div class="entity-card-wrapper">
                  <hui-card .config=${{
                    type: "custom:mushroom-entity-card",
                    entity: entity.entity_id,
                    name: entity.attributes.friendly_name,
                    tap_action: { action: "toggle" },
                    icon_color: "blue",
                  }} .hass=${this.hass}></hui-card>
                </div>
              `;
            }
          })}
        </div>
      </div>
    `;
  }

  private _renderEffects(): TemplateResult {
    if (!this.config.show_effects || !this._entity.attributes.effect_list) {
      return html``;
    }

    return html`
      <div class="effects">
        <h4>Effects</h4>
        <select @change=${this._setEffect}>
          <option value="">None</option>
          ${this._entity.attributes.effect_list.map((effect: string) => html`
            <option 
              value=${effect}
              .selected=${this._entity.attributes.effect === effect}
            >
              ${effect}
            </option>
          `)}
        </select>
      </div>
    `;
  }

  private _renderAdvancedControls(): TemplateResult {
    if (!this.config.show_advanced_controls) {
      return html``;
    }

    return html`
      <div class="advanced-controls">
        <h4>Advanced</h4>
        <div class="advanced-buttons">
          <mushroom-button @click=${this._openMoreInfo}>
            <ha-icon icon="mdi:information"></ha-icon>
            More Info
          </mushroom-button>
          <mushroom-button @click=${this._openSettings}>
            <ha-icon icon="mdi:cog"></ha-icon>
            Settings
          </mushroom-button>
        </div>
      </div>
    `;
  }

  private _toggleEntity(): void {
    this.hass.callService("light", "toggle", {
      entity_id: this.config.entity,
    });
  }

  private _toggleSubEntity(entityId: string): void {
    this.hass.callService("light", "toggle", {
      entity_id: entityId,
    });
  }

  private _setBrightness(ev: Event): void {
    const target = ev.target as HTMLInputElement;
    this.hass.callService("light", "turn_on", {
      entity_id: this.config.entity,
      brightness_pct: Number(target.value),
    });
  }

  private _setColorTemp(ev: Event): void {
    const target = ev.target as HTMLInputElement;
    this.hass.callService("light", "turn_on", {
      entity_id: this.config.entity,
      color_temp: Number(target.value),
    });
  }

  private _setEffect(ev: Event): void {
    const target = ev.target as HTMLSelectElement;
    if (target.value) {
      this.hass.callService("light", "turn_on", {
        entity_id: this.config.entity,
        effect: target.value,
      });
    }
  }

  private _openMoreInfo(): void {
    this.dispatchEvent(new CustomEvent("hass-more-info", { 
      detail: { entityId: this.config.entity },
      bubbles: true, 
      composed: true 
    }));
  }

  private _openSettings(): void {
    // Could open device/entity settings page
    console.log("Open settings for", this.config.entity);
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: block;
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        z-index: 9999 !important;
        pointer-events: none !important;
      }
      
      :host > * {
        pointer-events: auto !important;
      }
      
      ha-dialog {
        --mdc-dialog-z-index: 9999;
        --mdc-dialog-scrim-z-index: 9998;
        z-index: 9999 !important;
        pointer-events: auto !important;
      }
      
      .popup-content {
        padding: 16px;
        max-width: 600px;
        min-width: 400px;
      }

      .main-entity {
        margin-bottom: 24px;
      }

      .entity-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 16px;
      }

      .entity-card-wrapper {
        background: var(--card-background-color);
        border-radius: 12px;
        padding: 8px;
        box-shadow: var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15));
      }

      .entity-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 16px;
        padding: 12px;
        background: var(--card-background-color);
        border-radius: 12px;
      }

      .entity-info {
        flex: 1;
      }

      .entity-name {
        font-weight: 500;
        font-size: 16px;
      }

      .entity-state {
        font-size: 14px;
        color: var(--secondary-text-color);
        text-transform: capitalize;
      }

      .controls {
        margin-bottom: 24px;
      }

      .control-row {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 12px;
      }

      .control-row label {
        min-width: 120px;
        font-weight: 500;
      }

      .control-row input[type="range"] {
        flex: 1;
      }

      .control-row .value {
        min-width: 50px;
        text-align: right;
        font-size: 14px;
        color: var(--secondary-text-color);
      }

      .sub-entities, .effects, .advanced-controls {
        margin-bottom: 24px;
      }

      .sub-entities h4, .effects h4, .advanced-controls h4 {
        margin: 0 0 12px 0;
        font-size: 14px;
        font-weight: 500;
        color: var(--secondary-text-color);
      }

      .sub-entity {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px;
        background: var(--card-background-color);
        border-radius: 8px;
        margin-bottom: 8px;
      }

      .sub-entity .name {
        flex: 1;
      }

      .effects select {
        width: 100%;
        padding: 8px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        background: var(--card-background-color);
        color: var(--primary-text-color);
      }

      .advanced-buttons {
        display: flex;
        gap: 8px;
      }

      .advanced-buttons mushroom-button {
        flex: 1;
      }
    `;
  }
}

import { html, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "../../ha";
import { SplitLayoutCardConfig } from "./split-layout-card-config";

@customElement("mushroom-split-layout-card-editor")
export class SplitLayoutCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: SplitLayoutCardConfig;

  public setConfig(config: SplitLayoutCardConfig): void {
    this._config = config;
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html``;
    }

    return html`
      <div class="card-config">
        <h3>Split Layout Card Configuration</h3>
        <p>Configure your 28%/72% split layout dashboard.</p>
        
        <ha-textfield
          label="Sidebar Width (%)"
          .value=${this._config.sidebar_width || 28}
          @input=${this._valueChanged}
          .configValue=${"sidebar_width"}
        ></ha-textfield>
        
        <ha-textfield
          label="Gap (px)"
          .value=${this._config.gap || 12}
          @input=${this._valueChanged}
          .configValue=${"gap"}
        ></ha-textfield>

        <h4>Sidebar Settings</h4>
        <ha-textfield
          label="Background Color"
          .value=${this._config.sidebar?.background_color || ""}
          @input=${this._sidebarValueChanged}
          .configValue=${"background_color"}
        ></ha-textfield>
        
        <ha-textfield
          label="Background Image URL"
          .value=${this._config.sidebar?.background_image || ""}
          @input=${this._sidebarValueChanged}
          .configValue=${"background_image"}
        ></ha-textfield>

        <h4>Main Section Settings</h4>
        <ha-textfield
          label="Background Color"
          .value=${this._config.main?.background_color || ""}
          @input=${this._mainValueChanged}
          .configValue=${"background_color"}
        ></ha-textfield>
        
        <ha-textfield
          label="Background Image URL"
          .value=${this._config.main?.background_image || ""}
          @input=${this._mainValueChanged}
          .configValue=${"background_image"}
        ></ha-textfield>

        <p><strong>Note:</strong> Add cards to sidebar and main sections via YAML configuration or dashboard UI.</p>
      </div>
    `;
  }

  private _valueChanged(ev): void {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;
    const configValue = target.configValue;
    const value = target.value;

    if (this._config[configValue] === value) {
      return;
    }

    const newConfig = { ...this._config };
    newConfig[configValue] = value;

    this._config = newConfig;
    this._fireChanged();
  }

  private _sidebarValueChanged(ev): void {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;
    const configValue = target.configValue;
    const value = target.value;

    const newConfig = { ...this._config };
    if (!newConfig.sidebar) {
      newConfig.sidebar = { cards: [] };
    }
    newConfig.sidebar[configValue] = value;

    this._config = newConfig;
    this._fireChanged();
  }

  private _mainValueChanged(ev): void {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;
    const configValue = target.configValue;
    const value = target.value;

    const newConfig = { ...this._config };
    if (!newConfig.main) {
      newConfig.main = { cards: [] };
    }
    newConfig.main[configValue] = value;

    this._config = newConfig;
    this._fireChanged();
  }

  private _fireChanged(): void {
    const event = new CustomEvent("config-changed", {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

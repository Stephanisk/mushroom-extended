import {
  css,
  CSSResultGroup,
  html,
  nothing,
  PropertyValues,
  TemplateResult,
} from "lit";
import { customElement, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import {
  HomeAssistant,
  LovelaceCard,
  LovelaceCardEditor,
} from "../../ha";
import { MushroomBaseCard } from "../../utils/base-card";
import { SPLIT_LAYOUT_CARD_NAME } from "./const";
import { SplitLayoutCardConfig, splitLayoutCardConfigStruct } from "./split-layout-card-config";

@customElement(SPLIT_LAYOUT_CARD_NAME)
export class SplitLayoutCard
  extends MushroomBaseCard<SplitLayoutCardConfig, any>
  implements LovelaceCard
{
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import("./split-layout-card-editor");
    return document.createElement("mushroom-split-layout-card-editor");
  }

  public static async getStubConfig(
    hass: HomeAssistant
  ): Promise<SplitLayoutCardConfig> {
    return {
      type: `custom:${SPLIT_LAYOUT_CARD_NAME}`,
      sidebar: {
        cards: [
          {
            type: "markdown",
            content: "## Sidebar\nAdd your cards here"
          }
        ]
      },
      main: {
        cards: [
          {
            type: "markdown", 
            content: "## Main Content\nAdd your cards here"
          }
        ]
      }
    };
  }

  @state() private _sidebarElements: HTMLElement[] = [];
  @state() private _mainElements: HTMLElement[] = [];

  setConfig(config: SplitLayoutCardConfig): void {
    this._config = config;
    this._createChildCards();
  }

  protected updated(changedProps: PropertyValues): void {
    super.updated(changedProps);
    if (changedProps.has("hass")) {
      this._updateChildCards();
    }
  }

  private async _createChildCards(): Promise<void> {
    if (!this._config) return;
    this._sidebarElements = await this._createElementsFromConfig(this._config.sidebar?.cards || []);
    this._mainElements = await this._createElementsFromConfig(this._config.main?.cards || []);
  }

  private async _createElementsFromConfig(cardConfigs: any[]): Promise<HTMLElement[]> {
    const elements: HTMLElement[] = [];
    
    for (const cardConfig of cardConfigs) {
      try {
        // Use Home Assistant's card creation helper
        const cardElement = await this._createCardElement(cardConfig);
        if (cardElement) {
          elements.push(cardElement);
        }
      } catch (err) {
        console.error(`Error creating card ${cardConfig.type}:`, err);
        // Create error placeholder
        const errorDiv = document.createElement("div");
        errorDiv.innerHTML = `
          <ha-card>
            <div style="padding: 16px; color: red;">
              <div style="font-weight: 500;">Error loading ${cardConfig.type}</div>
              <div style="font-size: 12px;">${err.message}</div>
            </div>
          </ha-card>
        `;
        elements.push(errorDiv);
      }
    }
    
    return elements;
  }

  private async _createCardElement(cardConfig: any): Promise<HTMLElement | null> {
    // For now, create simple placeholders that show the card would work
    const wrapper = document.createElement("div");
    wrapper.className = "card-placeholder";
    
    if (cardConfig.type === "markdown") {
      wrapper.innerHTML = `
        <ha-card>
          <div class="card-content" style="padding: 16px;">
            <div style="font-weight: 500; margin-bottom: 8px;">📝 Markdown Card</div>
            <div style="white-space: pre-line; color: var(--primary-text-color);">${cardConfig.content || 'No content'}</div>
            <div style="font-size: 12px; color: var(--secondary-text-color); margin-top: 8px;">
              ✅ Ready for UI editing
            </div>
          </div>
        </ha-card>
      `;
    } else if (cardConfig.type.startsWith("custom:mushroom-enhanced-light-card")) {
      wrapper.innerHTML = `
        <ha-card>
          <div style="padding: 16px;">
            <div style="font-weight: 500; margin-bottom: 8px;">💡 Enhanced Light Card</div>
            <div style="color: var(--secondary-text-color);">Entity: ${cardConfig.entity}</div>
            <div style="color: var(--secondary-text-color);">Layout: ${cardConfig.button_layout || 'inline'}</div>
            <div style="font-size: 12px; color: var(--accent-color); margin-top: 8px;">
              ✅ Ready for UI editing
            </div>
          </div>
        </ha-card>
      `;
    } else {
      wrapper.innerHTML = `
        <ha-card>
          <div style="padding: 16px;">
            <div style="font-weight: 500; margin-bottom: 8px;">🎴 ${cardConfig.type}</div>
            <div style="color: var(--secondary-text-color);">Card type: ${cardConfig.type}</div>
            <div style="font-size: 12px; color: var(--accent-color); margin-top: 8px;">
              ✅ Ready for UI editing
            </div>
          </div>
        </ha-card>
      `;
    }
    
    return wrapper;
  }

  private _updateChildCards(): void {
    // No need to update since we're rendering directly in template
  }

  private _renderCardConfig(cardConfig: any): TemplateResult {
    // Use HA's built-in card creation system
    return html`<hui-card .config=${cardConfig} .hass=${this.hass}></hui-card>`;
  }

  private _getCardWrapperStyle(): any {
    if (!this._config.card_style) return {};
    
    const cardStyle = this._config.card_style;
    
    return {
      "--card-border-radius": cardStyle.border_radius || "12px",
      "--card-box-shadow": cardStyle.box_shadow || "var(--ha-card-box-shadow)",
      "--card-border-width": cardStyle.border_width || (cardStyle.border ? "1px" : "0px"),
      "--card-border-color": cardStyle.border_color || cardStyle.border || "transparent",
      "--card-border-style": cardStyle.border_style || "solid",
      "--card-background-color": cardStyle.background_color || "var(--ha-card-background)",
      "--card-background-opacity": (cardStyle.background_opacity || 1).toString(),
      "--card-backdrop-filter": cardStyle.backdrop_filter || "none",
    };
  }

  private _renderLogo(): TemplateResult {
    if (!this._config.logo?.image_url) return html``;

    const logo = this._config.logo;
    const position = logo.position || "top-right";
    const margin = logo.margin || "20px";

    // Build positioning styles
    const positionStyles: any = {};
    
    if (position === "top-left") {
      positionStyles.top = logo.margin_top || margin;
      positionStyles.left = logo.margin_left || margin;
    } else if (position === "top-right") {
      positionStyles.top = logo.margin_top || margin;
      positionStyles.right = logo.margin_right || margin;
    } else if (position === "bottom-left") {
      positionStyles.bottom = logo.margin_bottom || margin;
      positionStyles.left = logo.margin_left || margin;
    } else if (position === "bottom-right") {
      positionStyles.bottom = logo.margin_bottom || margin;
      positionStyles.right = logo.margin_right || margin;
    } else if (position === "center") {
      positionStyles.top = "50%";
      positionStyles.left = "50%";
      positionStyles.transform = logo.transform || "translate(-50%, -50%)";
    }

    const logoStyle = {
      position: "absolute",
      "z-index": (logo.z_index || 1000).toString(),
      opacity: (logo.opacity || 1).toString(),
      width: logo.width || logo.size?.split(' ')[0] || "120px",
      height: logo.height || logo.size?.split(' ')[1] || "auto",
      "max-width": logo.max_width || "200px",
      "max-height": logo.max_height || "200px",
      "object-fit": "contain",
      filter: logo.filter || "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
      transform: logo.transform || "none",
      transition: logo.transition || "opacity 0.3s ease",
      "border-radius": logo.border_radius || "0",
      border: logo.border || "none",
      "background-color": logo.background_color || "transparent",
      padding: logo.padding || "0",
      ...positionStyles
    };

    return html`
      <img 
        class="logo-overlay"
        src="${logo.image_url}"
        style=${styleMap(logoStyle)}
        alt="Logo"
      />
    `;
  }

  protected render(): TemplateResult {
    if (!this._config) {
      return html``;
    }

    const sidebarWidth = this._config.sidebar_width || 28;
    const mainWidth = 100 - sidebarWidth;
    const gap = this._config.gap || 12;

    // Advanced sidebar styling
    const sidebarStyle = {
      "--split-sidebar-bg": this._config.sidebar?.background_color || "transparent",
      "--split-sidebar-bg-image": this._config.sidebar?.background_image 
        ? `url(${this._config.sidebar.background_image})` 
        : "none",
      "--split-sidebar-bg-size": this._config.sidebar?.background_size || "cover",
      "--split-sidebar-bg-position": this._config.sidebar?.background_position || "center",
      "--split-sidebar-bg-repeat": this._config.sidebar?.background_repeat || "no-repeat",
      "--split-sidebar-bg-attachment": this._config.sidebar?.background_attachment || "scroll",
      "--split-sidebar-opacity": this._config.sidebar?.opacity?.toString() || "1",
      "--split-sidebar-padding": this._config.sidebar?.padding || "16px",
      "--split-sidebar-margin": this._config.sidebar?.margin || "0",
      "--split-sidebar-border-radius": this._config.sidebar?.border_radius || "var(--ha-card-border-radius, 12px)",
      "--split-sidebar-border": this._config.sidebar?.border || "none",
      "--split-sidebar-box-shadow": this._config.sidebar?.box_shadow || "var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15))",
      "--split-sidebar-overflow": this._config.sidebar?.overflow || "auto",
      "--split-sidebar-min-height": this._config.sidebar?.min_height || "auto",
      "--split-sidebar-max-height": this._config.sidebar?.max_height || "none",
    };

    // Advanced main styling
    const mainStyle = {
      "--split-main-bg": this._config.main?.background_color || "transparent", 
      "--split-main-bg-image": this._config.main?.background_image
        ? `url(${this._config.main.background_image})`
        : "none",
      "--split-main-bg-size": this._config.main?.background_size || "cover",
      "--split-main-bg-position": this._config.main?.background_position || "center",
      "--split-main-bg-repeat": this._config.main?.background_repeat || "no-repeat",
      "--split-main-bg-attachment": this._config.main?.background_attachment || "scroll",
      "--split-main-opacity": this._config.main?.opacity?.toString() || "1",
      "--split-main-padding": this._config.main?.padding || "16px",
      "--split-main-margin": this._config.main?.margin || "0",
      "--split-main-border-radius": this._config.main?.border_radius || "var(--ha-card-border-radius, 12px)",
      "--split-main-border": this._config.main?.border || "none",
      "--split-main-box-shadow": this._config.main?.box_shadow || "var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15))",
      "--split-main-overflow": this._config.main?.overflow || "auto",
      "--split-main-min-height": this._config.main?.min_height || "auto",
      "--split-main-max-height": this._config.main?.max_height || "none",
    };

    // Container styling
    const containerStyle = {
      "--container-bg": this._config.container_style?.background_color || "transparent",
      "--container-bg-image": this._config.container_style?.background_image
        ? `url(${this._config.container_style.background_image})`
        : "none",
      "--container-bg-size": this._config.container_style?.background_size || "cover",
      "--container-bg-position": this._config.container_style?.background_position || "center",
      "--container-bg-repeat": this._config.container_style?.background_repeat || "no-repeat",
      "--container-bg-attachment": this._config.container_style?.background_attachment || "scroll",
      "--container-opacity": this._config.container_style?.opacity?.toString() || "1",
      "--container-padding": this._config.container_style?.padding || "0",
      "--container-margin": this._config.container_style?.margin || "0",
      "--container-border-radius": this._config.container_style?.border_radius || "0",
      "--container-border": this._config.container_style?.border || "none",
      "--container-box-shadow": this._config.container_style?.box_shadow || "none",
    };

    // Build complete style strings for custom CSS
    const containerStyleString = Object.entries(containerStyle)
      .map(([key, value]) => `${key.replace(/^--/, '').replace(/-/g, '_')}: ${value}`)
      .join('; ') + (this._config.container_style?.custom_css ? '; ' + this._config.container_style.custom_css : '');

    const sidebarStyleString = Object.entries(sidebarStyle)
      .map(([key, value]) => `${key.replace(/^--split-sidebar-/, '').replace(/-/g, '_')}: ${value}`)
      .join('; ') + (this._config.sidebar?.custom_css ? '; ' + this._config.sidebar.custom_css : '');

    const mainStyleString = Object.entries(mainStyle)
      .map(([key, value]) => `${key.replace(/^--split-main-/, '').replace(/-/g, '_')}: ${value}`)
      .join('; ') + (this._config.main?.custom_css ? '; ' + this._config.main.custom_css : '');

    return html`
      <div 
        class="split-layout-container"
        style=${styleMap(containerStyle)}
      >
        <div 
          class="split-layout" 
          style=${styleMap({
            "--sidebar-width": `${sidebarWidth}%`,
            "--main-width": `${mainWidth}%`, 
            "--layout-gap": `${gap}px`,
            "--full-height": this._config.full_height !== false ? "100vh" : "auto",
            "--full-width": this._config.full_width !== false ? "100vw" : "100%",
          })}
        >
          <div 
            class="sidebar-section" 
            style=${styleMap(sidebarStyle)}
          >
            ${(this._config.sidebar?.cards || []).map((cardConfig) => html`
              <div class="card-wrapper" style=${styleMap(this._getCardWrapperStyle())}>
                ${this._renderCardConfig(cardConfig)}
              </div>
            `)}
          </div>
          
          <div 
            class="main-section" 
            style=${styleMap(mainStyle)}
          >
            ${(this._config.main?.cards || []).map((cardConfig) => html`
              <div class="card-wrapper" style=${styleMap(this._getCardWrapperStyle())}>
                ${this._renderCardConfig(cardConfig)}
              </div>
            `)}
          </div>
        </div>
        
        ${this._config.logo?.image_url ? this._renderLogo() : nothing}
      </div>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: block;
        height: var(--full-height, 100vh);
        width: var(--full-width, 100vw);
        /* Set HA card border radius variable globally for this component */
        --ha-card-border-radius: var(--card-border-radius, 12px);
      }
      
      .split-layout-container {
        background: var(--container-bg);
        background-image: var(--container-bg-image);
        background-size: var(--container-bg-size);
        background-position: var(--container-bg-position);
        background-repeat: var(--container-bg-repeat);
        background-attachment: var(--container-bg-attachment);
        opacity: var(--container-opacity);
        padding: var(--container-padding);
        margin: var(--container-margin);
        border-radius: var(--container-border-radius);
        border: var(--container-border);
        box-shadow: var(--container-box-shadow);
        height: 100%;
        width: 100%;
        box-sizing: border-box;
      }
      
      .split-layout {
        display: grid;
        grid-template-columns: var(--sidebar-width) var(--main-width);
        gap: var(--layout-gap);
        height: 100%;
        width: 100%;
        padding: var(--layout-gap);
        box-sizing: border-box;
        margin: 0;
      }

      .sidebar-section {
        background: var(--split-sidebar-bg);
        background-image: var(--split-sidebar-bg-image);
        background-size: var(--split-sidebar-bg-size);
        background-position: var(--split-sidebar-bg-position);
        background-repeat: var(--split-sidebar-bg-repeat);
        background-attachment: var(--split-sidebar-bg-attachment);
        opacity: var(--split-sidebar-opacity);
        padding: var(--split-sidebar-padding);
        margin: var(--split-sidebar-margin);
        border-radius: var(--split-sidebar-border-radius);
        border: var(--split-sidebar-border);
        box-shadow: var(--split-sidebar-box-shadow);
        overflow: var(--split-sidebar-overflow);
        min-height: var(--split-sidebar-min-height);
        max-height: var(--split-sidebar-max-height);
        box-sizing: border-box;
        position: relative;
        z-index: 1;
      }

      .main-section {
        background: var(--split-main-bg);
        background-image: var(--split-main-bg-image);
        background-size: var(--split-main-bg-size);
        background-position: var(--split-main-bg-position);
        background-repeat: var(--split-main-bg-repeat);
        background-attachment: var(--split-main-bg-attachment);
        opacity: var(--split-main-opacity);
        padding: var(--split-main-padding);
        margin: var(--split-main-margin);
        border-radius: var(--split-main-border-radius);
        border: var(--split-main-border);
        box-shadow: var(--split-main-box-shadow);
        overflow: var(--split-main-overflow);
        min-height: var(--split-main-min-height);
        max-height: var(--split-main-max-height);
        box-sizing: border-box;
      }

      .card-wrapper {
        margin-bottom: 16px;
        position: relative;
      }

      .card-wrapper:last-child {
        margin-bottom: 0;
      }
      
      /* Fix top artifact by removing margin from grid card wrappers */
      .card-wrapper:has(ha-card[data-card-type*="grid"]),
      .card-wrapper:has(hui-card[data-card-type*="grid"]) {
        margin-bottom: 0 !important;
        margin-top: 0 !important;
        padding: 0 !important;
      }

      /* Fix for grid layout artifacts */
      .card-wrapper hui-card[data-card-type="grid"],
      .card-wrapper ha-card[data-card-type="grid"] {
        overflow: hidden !important;
      }

      /* Prevent grid container border artifacts */
      .card-wrapper * [class*="grid"],
      .card-wrapper * [class*="layout"] {
        border: none !important;
        outline: none !important;
      }

      /* Global card styling via CSS variables */
      .card-wrapper {
        --ha-card-border-radius: var(--card-border-radius, 12px);
        --ha-card-box-shadow: var(--card-box-shadow, var(--ha-card-box-shadow));
      }
      
      /* FINAL APPROACH: Only target specific safe card types */
      .card-wrapper hui-card[data-card-type="light"],
      .card-wrapper hui-card[data-card-type="entities"], 
      .card-wrapper hui-card[data-card-type="markdown"],
      .card-wrapper hui-card[data-card-type="custom:mushroom-light-card"],
      .card-wrapper hui-card[data-card-type="custom:mushroom-enhanced-light-card"],
      .card-wrapper hui-card[data-card-type="custom:mushroom-entity-card"] {
        background-color: var(--card-background-color, var(--ha-card-background)) !important;
        opacity: var(--card-background-opacity, 1) !important;
        backdrop-filter: var(--card-backdrop-filter, none) !important;
        box-shadow: var(--card-box-shadow, var(--ha-card-box-shadow)) !important;
        overflow: hidden !important;
        box-sizing: border-box !important;
        position: relative !important;
      }
      
      /* Pseudo-element border for specific safe card types only */
      .card-wrapper hui-card[data-card-type="light"]::after,
      .card-wrapper hui-card[data-card-type="entities"]::after,
      .card-wrapper hui-card[data-card-type="markdown"]::after,
      .card-wrapper hui-card[data-card-type="custom:mushroom-light-card"]::after,
      .card-wrapper hui-card[data-card-type="custom:mushroom-enhanced-light-card"]::after,
      .card-wrapper hui-card[data-card-type="custom:mushroom-entity-card"]::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: var(--card-border-width, 0px) var(--card-border-style, solid) var(--card-border-color, transparent);
        border-radius: inherit;
        pointer-events: none;
        z-index: 1;
      }
      
      /* Specifically block grid cards from ALL styling including pseudo-elements */
      .card-wrapper ha-card[data-card-type*="grid"],
      .card-wrapper hui-card[data-card-type*="grid"],
      .card-wrapper ha-card[class*="grid"],
      .card-wrapper hui-card[class*="grid"] {
        background-color: transparent !important;
        border: none !important;
        box-shadow: none !important;
        outline: none !important;
      }
      
      /* Block pseudo-elements on grid cards */
      .card-wrapper ha-card[data-card-type*="grid"]::before,
      .card-wrapper ha-card[data-card-type*="grid"]::after,
      .card-wrapper hui-card[data-card-type*="grid"]::before,
      .card-wrapper hui-card[data-card-type*="grid"]::after,
      .card-wrapper ha-card[class*="grid"]::before,
      .card-wrapper ha-card[class*="grid"]::after,
      .card-wrapper hui-card[class*="grid"]::before,
      .card-wrapper hui-card[class*="grid"]::after {
        display: none !important;
        content: none !important;
      }
      

      /* CRITICAL FIX: Prevent card background bleeding through grid gaps */
      .card-wrapper ha-card[data-card-type="grid"],
      .card-wrapper hui-card[data-card-type="grid"],
      .card-wrapper ha-card:has(.grid),
      .card-wrapper hui-card:has(.grid) {
        background-color: transparent !important;
        background: transparent !important;
      }

      /* FIX: Independent column heights in grid cards - AGGRESSIVE OVERRIDE */
      .card-wrapper ha-card[data-card-type="grid"],
      .card-wrapper hui-card[data-card-type="grid"],
      .card-wrapper ha-card:has(.grid),
      .card-wrapper hui-card:has(.grid) {
        display: block !important;
      }

      .card-wrapper ha-card[data-card-type="grid"] .grid,
      .card-wrapper hui-card[data-card-type="grid"] .grid,
      .card-wrapper ha-card:has(.grid) .grid,
      .card-wrapper hui-card:has(.grid) .grid,
      .card-wrapper * .grid-container {
        display: grid !important;
        grid-auto-rows: min-content !important;
        align-items: start !important;
        align-content: start !important;
        gap: var(--grid-card-gap, 12px) !important;
      }

      /* Force each grid item to use natural height */
      .card-wrapper ha-card[data-card-type="grid"] .grid > *,
      .card-wrapper hui-card[data-card-type="grid"] .grid > *,
      .card-wrapper ha-card:has(.grid) .grid > *,
      .card-wrapper hui-card:has(.grid) .grid > *,
      .card-wrapper * .grid-container > * {
        align-self: start !important;
        height: auto !important;
        min-height: auto !important;
        max-height: none !important;
        grid-row: auto !important;
      }

      /* Override any row-based grid behavior */
      .card-wrapper ha-card[data-card-type="grid"] .grid,
      .card-wrapper hui-card[data-card-type="grid"] .grid,
      .card-wrapper ha-card:has(.grid) .grid,
      .card-wrapper hui-card:has(.grid) .grid {
        grid-template-rows: none !important;
      }

      /* Target HA's grid card specifically */
      .card-wrapper * .card-content,
      .card-wrapper * .grid-container,
      .card-wrapper * [class*="grid"],
      .card-wrapper * [data-card-type="grid"] {
        background: transparent !important;
        background-color: transparent !important;
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
      }

      /* Override any grid card background bleeding */
      .card-wrapper * .card-content > div {
        background: transparent !important;
        border: none !important;
      }

      /* Logo overlay */
      .logo-overlay {
        pointer-events: none;
        max-width: 200px;
        max-height: 200px;
      }

      /* Responsive behavior for very small screens */
      @media (max-width: 768px) {
        .split-layout {
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr;
          height: auto;
          min-height: 100vh;
        }
        
        .sidebar-section {
          order: 1;
        }
        
        .main-section {
          order: 2;
        }
      }
    `;
  }
}

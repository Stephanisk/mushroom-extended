import{LitElement as t,html as i,css as o}from"lit";import{property as e,state as r,customElement as n}from"lit/decorators.js";import{styleMap as a}from"lit/directives/style-map.js";function c(t,i,o,e){var r,n=arguments.length,a=n<3?i:e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,i,o,e);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(n<3?r(a):n>3?r(i,o,a):r(i,o))||a);return n>3&&a&&Object.defineProperty(i,o,a),a}let s=class extends t{setConfig(t){if(!t.entity)throw new Error("You need to define an entity");this._config=t}render(){if(!this._config||!this.hass)return i``;const t=this.hass.states[this._config.entity];if(!t)return i`<ha-card>Entity not found: ${this._config.entity}</ha-card>`;const o=this._buildCardStyle();return i`
      <ha-card style=${a(o)}>
        <div class="card-content">
          <div class="header">
            <ha-icon .icon=${this._config.icon||"mdi:lightbulb"}></ha-icon>
            <div class="info">
              <div class="name">${this._config.name||t.attributes.friendly_name}</div>
              <div class="state">${t.state}</div>
            </div>
            <ha-switch
              .checked=${"on"===t.state}
              @change=${this._toggleLight}
            ></ha-switch>
          </div>
          
          ${this._config.show_brightness_control&&"on"===t.state?i`
              <div class="brightness-control">
                <ha-slider
                  .value=${t.attributes.brightness||0}
                  .min=${0}
                  .max=${255}
                  @change=${this._setBrightness}
                ></ha-slider>
              </div>
            `:""}
        </div>
      </ha-card>
    `}_buildCardStyle(){var t;const i={};if(this._config.card_background_color&&(i.backgroundColor=this._config.card_background_color),this._config.card_background_image){const o=null!==(t=this._config.card_background_image_opacity)&&void 0!==t?t:1;i.backgroundImage=o<1?`linear-gradient(rgba(0,0,0,${1-o}), rgba(0,0,0,${1-o})), url(${this._config.card_background_image})`:`url(${this._config.card_background_image})`,i.backgroundSize="cover",i.backgroundPosition="center"}return this._config.card_border_color&&this._config.card_border_width&&(i.border=`${this._config.card_border_width} solid ${this._config.card_border_color}`),this._config.card_border_radius&&(i.borderRadius=this._config.card_border_radius),this._config.card_box_shadow&&(i.boxShadow=this._config.card_box_shadow),i}_toggleLight(){this.hass.callService("light","toggle",{entity_id:this._config.entity})}_setBrightness(t){const i=t.target;this.hass.callService("light","turn_on",{entity_id:this._config.entity,brightness:i.value})}static get styles(){return o`
      ha-card {
        padding: 16px;
        cursor: pointer;
      }
      
      .card-content {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      
      .header {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      
      ha-icon {
        color: var(--primary-color);
        --mdc-icon-size: 24px;
      }
      
      .info {
        flex: 1;
      }
      
      .name {
        font-weight: 500;
        color: var(--primary-text-color);
      }
      
      .state {
        font-size: 0.9em;
        color: var(--secondary-text-color);
        text-transform: capitalize;
      }
      
      .brightness-control {
        margin-top: 8px;
      }
      
      ha-slider {
        width: 100%;
      }
    `}};c([e({attribute:!1})],s.prototype,"hass",void 0),c([r()],s.prototype,"_config",void 0),s=c([n("standalone-enhanced-light-card")],s),console.info("✅ Standalone Enhanced Light Card registered"),console.info("%c🔧 STANDALONE CUSTOM CARDS %c v1.0.0 ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),console.info("Loaded standalone cards:"),console.info("- standalone-enhanced-light-card");

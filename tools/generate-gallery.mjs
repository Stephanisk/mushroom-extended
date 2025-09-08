import { readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const www = resolve(".", "ha-config", "www", "mushroom-dev");
const out = resolve(".", "ha-config", "lovelace", "mushroom-gallery.yaml");

// Define all known Mushroom card types
const cardTypes = [
  "mushroom-enhanced-light-card-with-popup"
];

// Heuristic default configs per tag - properly indented for vertical-stack
const cfgFor = (tag) => {
  const base = (extra = "") => `          - type: custom:${tag}\n${extra}`;
  const e = (id) => `            entity: ${id}\n`;
  if (tag.includes("title")) return base(`            title: Mushroom Gallery\n`);
  if (tag.includes("template")) return base(`            primary: Boutique Rating\n            secondary: Tap the stars\n            icon: mdi:star\n            tap_action:\n              action: call-service\n              service: light.toggle\n              data:\n                entity_id: light.ceiling_lights\n`);
  if (tag.includes("chips")) return base(`            chips:\n              - type: action\n                icon: mdi:star\n                tap_action:\n                  action: call-service\n                  service: light.toggle\n                  data:\n                    entity_id: light.ceiling_lights\n              - type: icon\n                icon: mdi:star\n              - type: icon\n                icon: mdi:star\n              - type: icon\n                icon: mdi:star\n              - type: icon\n                icon: mdi:star-outline\n`);
  if (tag.includes("person")) return base(e("person.demo_person"));
  if (tag.includes("climate")) return base(e("climate.demo_climate"));
  if (tag.includes("media-player")) return base(e("media_player.demo_media_player"));
  if (tag.includes("cover")) return base(e("cover.demo_cover"));
  if (tag.includes("fan")) return base(e("fan.demo_fan"));
  if (tag.includes("vacuum")) return base(e("vacuum.demo_vacuum"));
  if (tag.includes("lock")) return base(e("lock.demo_lock"));
  if (tag.includes("alarm")) return base(e("alarm_control_panel.demo_alarm"));
  if (tag.includes("humidifier")) return base(e("humidifier.demo_humidifier"));
  if (tag.includes("number")) return base(e("number.demo_number"));
  if (tag.includes("select")) return base(e("select.demo_select"));
  if (tag.includes("update")) return base(e("update.demo_update"));
  // Enhanced light card variations
  if (tag === "mushroom-enhanced-light-card-basic") return base(`            type: custom:mushroom-enhanced-light-card\n            entity: light.ceiling_lights\n            show_brightness_control: true\n            show_color_temp_control: true\n            show_color_control: true\n            collapsible_controls: false\n`);
  
  if (tag === "mushroom-enhanced-light-card-vertical") return base(`            type: custom:mushroom-enhanced-light-card\n            entity: light.ceiling_lights\n            button_layout: vertical-enhanced\n            show_brightness_control: true\n            show_color_temp_control: true\n            show_color_control: true\n            collapsible_controls: false\n`);
  
  if (tag === "mushroom-enhanced-light-card-centered") return base(`            type: custom:mushroom-enhanced-light-card\n            entity: light.ceiling_lights\n            button_layout: vertical-enhanced\n            text_align: center\n            show_brightness_control: true\n            show_color_temp_control: true\n            show_color_control: true\n            collapsible_controls: false\n            show_brightness_percentage: false\n`);
  
  if (tag === "mushroom-enhanced-light-card-offset") return base(`            type: custom:mushroom-enhanced-light-card\n            entity: light.ceiling_lights\n            button_layout: vertical-enhanced\n            icon_offset_x: 40\n            show_brightness_control: true\n            show_color_temp_control: true\n            show_color_control: true\n            collapsible_controls: false\n            show_brightness_percentage: false\n`);
  
  if (tag === "mushroom-enhanced-light-card-right-aligned") return base(`            type: custom:mushroom-enhanced-light-card\n            entity: light.ceiling_lights\n            button_layout: vertical-enhanced\n            text_align: right\n            font_size: 18\n            show_brightness_control: true\n            show_color_temp_control: true\n            show_color_control: true\n            collapsible_controls: false\n            show_brightness_percentage: false\n`);
  
  if (tag === "mushroom-enhanced-light-card-large-font") return base(`            type: custom:mushroom-enhanced-light-card\n            entity: light.ceiling_lights\n            button_layout: vertical-enhanced\n            font_size: 22\n            text_align: center\n            icon_offset_x: 20\n            show_brightness_control: true\n            show_color_temp_control: true\n            show_color_control: true\n            collapsible_controls: false\n            show_brightness_percentage: false\n`);

  if (tag === "mushroom-enhanced-light-card-with-popup") return base(`            type: custom:mushroom-enhanced-light-card\n            entity: light.ceiling_lights\n            show_brightness_control: true\n            show_color_temp_control: true\n            show_color_control: true\n            collapsible_controls: false\n            button_layout: vertical-enhanced\n            font_size: 16\n            text_align: center\n            show_brightness_percentage: false\n            double_tap_action:\n              action: enhanced-more-info\n            enhanced_popup:\n              show_sub_entities: true\n              show_effects: true\n              show_advanced_controls: true\n`);

  if (tag === "mushroom-split-layout-card-demo") return base(`            type: custom:mushroom-split-layout-card\n            sidebar_width: 28\n            gap: 12\n            sidebar:\n              background_color: "#f5f5f5"\n              cards:\n                - type: markdown\n                  content: |\n                    ## Sidebar\n                    This is the 28% sidebar\n                - type: custom:mushroom-enhanced-light-card\n                  entity: light.ceiling_lights\n                  button_layout: vertical-enhanced\n                  font_size: 14\n            main:\n              background_color: "#ffffff"\n              cards:\n                - type: markdown\n                  content: |\n                    ## Main Content (72%)\n                    This is the main content area\n                - type: custom:mushroom-enhanced-light-card\n                  entity: light.ceiling_lights\n                  button_layout: inline\n                  font_size: 16\n`);
  if (tag.includes("light") && !tag.includes("enhanced")) return base(`            entity: light.ceiling_lights\n            show_brightness_control: true\n            show_color_temp_control: true\n            show_color_control: true\n            collapsible_controls: false\n`);
  if (tag.includes("empty")) return base();
  // Entity-like cards (light, entity, etc.)
  return base(e("light.ceiling_lights"));
};

// Build YAML
const timestamp = Date.now();
let yaml = "";
yaml += `title: Mushroom Gallery\n`;
yaml += `# Updated: ${new Date().toISOString()}\n`;
yaml += `views:\n`;
yaml += `  - title: Gallery\n`;
yaml += `    path: gallery\n`;
yaml += `    badges: []\n`;
yaml += `    cards:\n`;
yaml += `      - type: vertical-stack\n        cards:\n`;
yaml += `          - type: custom:mushroom-template-card\n            primary: ⭐ Boutique Rating\n            secondary: Tap the stars\n            icon: mdi:star\n            tap_action:\n              action: call-service\n              service: light.toggle\n              data:\n                entity_id: light.ceiling_lights\n`;

for (const tag of cardTypes) {
  yaml += cfgFor(tag);
}

await writeFile(out, yaml);
console.log(`Wrote gallery with ${cardTypes.length} cards to ${out}`);

import { assign, object, optional, string, array, any, number, boolean } from "superstruct";
import { LovelaceCardConfig } from "../../ha";

interface AdvancedStyling {
  cards: LovelaceCardConfig[];
  background_color?: string;
  background_image?: string;
  background_size?: string;      // cover, contain, auto, etc.
  background_position?: string;  // center, top left, etc.
  background_repeat?: string;    // no-repeat, repeat, etc.
  background_attachment?: string; // fixed, scroll, local
  opacity?: number;              // 0.0 to 1.0
  padding?: string;              // CSS padding
  margin?: string;               // CSS margin
  border_radius?: string;        // Border radius
  border?: string;               // Border style
  box_shadow?: string;           // Box shadow
  overflow?: string;             // hidden, auto, scroll
  min_height?: string;           // Minimum height
  max_height?: string;           // Maximum height
  custom_css?: string;           // Raw CSS for advanced styling
}

export interface SplitLayoutCardConfig extends LovelaceCardConfig {
  sidebar?: AdvancedStyling;
  main?: AdvancedStyling;
  sidebar_width?: number;          // Default 28
  gap?: number;                    // Default 12px
  full_height?: boolean;           // Use 100vh height (default: true)
  full_width?: boolean;            // Use 100vw width (default: true)
  container_style?: {              // Overall container styling
    background_color?: string;
    background_image?: string;
    background_size?: string;
    background_position?: string;
    background_repeat?: string;
    background_attachment?: string;
    opacity?: number;
    padding?: string;
    margin?: string;
    border_radius?: string;
    border?: string;
    box_shadow?: string;
    custom_css?: string;
  };
  logo?: {                         // Logo overlay
    image_url?: string;            // Logo image URL
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
    size?: string;                 // CSS size (e.g., "100px", "auto", "50% 30px")
    width?: string;                // Specific width
    height?: string;               // Specific height
    max_width?: string;            // Maximum width
    max_height?: string;           // Maximum height
    opacity?: number;              // Logo opacity
    margin?: string;               // Distance from edges
    margin_top?: string;           // Specific top margin
    margin_right?: string;         // Specific right margin
    margin_bottom?: string;        // Specific bottom margin
    margin_left?: string;          // Specific left margin
    z_index?: number;              // Stacking order
    filter?: string;               // CSS filters (drop-shadow, blur, etc.)
    transform?: string;            // CSS transforms (scale, rotate, etc.)
    transition?: string;           // CSS transitions
    border_radius?: string;        // Logo border radius
    border?: string;               // Logo border
    background_color?: string;     // Background behind logo
    padding?: string;              // Padding around logo
    custom_css?: string;           // Custom logo styling
  };
  card_style?: {                   // Global card styling
    border_radius?: string;        // Rounded corners for all cards ("0px" for rectangular, "20px" for rounded)
    box_shadow?: string;           // Shadow for all cards
    border?: string;               // Border for all cards
    background_color?: string;     // Card background color
    background_opacity?: number;   // Card background opacity (0.0 to 1.0)
    border_width?: string;         // Border width
    border_color?: string;         // Border color
    border_style?: string;         // Border style (solid, dashed, dotted)
    backdrop_filter?: string;      // Backdrop filter (blur, brightness, etc.)
    target_card_types?: string[];  // Specific card types to style (future-proof)
    exclude_grid_cards?: boolean;  // Skip styling grid cards to prevent artifacts
    custom_css?: string;           // Custom card CSS
  };
  responsive?: {                   // Responsive breakpoints
    mobile_breakpoint?: number;    // Default 768px
    mobile_layout?: "stack" | "hide-sidebar" | "tabs";
    tablet_breakpoint?: number;    // Default 1024px
  };
}

export const splitLayoutCardConfigStruct = object({
  type: string(),
  sidebar: optional(object({
    cards: array(any()),
    background_color: optional(string()),
    background_image: optional(string()),
    background_size: optional(string()),
    background_position: optional(string()),
    background_repeat: optional(string()),
    background_attachment: optional(string()),
    opacity: optional(number()),
    padding: optional(string()),
    margin: optional(string()),
    border_radius: optional(string()),
    border: optional(string()),
    box_shadow: optional(string()),
    overflow: optional(string()),
    min_height: optional(string()),
    max_height: optional(string()),
    custom_css: optional(string()),
  })),
  main: optional(object({
    cards: array(any()),
    background_color: optional(string()),
    background_image: optional(string()),
    background_size: optional(string()),
    background_position: optional(string()),
    background_repeat: optional(string()),
    background_attachment: optional(string()),
    opacity: optional(number()),
    padding: optional(string()),
    margin: optional(string()),
    border_radius: optional(string()),
    border: optional(string()),
    box_shadow: optional(string()),
    overflow: optional(string()),
    min_height: optional(string()),
    max_height: optional(string()),
    custom_css: optional(string()),
  })),
  sidebar_width: optional(number()),
  gap: optional(number()),
  full_height: optional(boolean()),
  full_width: optional(boolean()),
  container_style: optional(object({
    background_color: optional(string()),
    background_image: optional(string()),
    background_size: optional(string()),
    background_position: optional(string()),
    background_repeat: optional(string()),
    background_attachment: optional(string()),
    opacity: optional(number()),
    padding: optional(string()),
    margin: optional(string()),
    border_radius: optional(string()),
    border: optional(string()),
    box_shadow: optional(string()),
    custom_css: optional(string()),
  })),
  responsive: optional(object({
    mobile_breakpoint: optional(number()),
    mobile_layout: optional(string()),
    tablet_breakpoint: optional(number()),
  })),
});

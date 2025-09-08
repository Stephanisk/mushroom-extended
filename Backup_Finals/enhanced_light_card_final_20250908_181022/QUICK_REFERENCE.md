# Enhanced Light Card - Quick Reference

## Basic Usage
```yaml
type: custom:mushroom-enhanced-light-card
entity: light.my_light
name: "My Light"
```

## Essential Properties

### Layout & Appearance
```yaml
button_layout: "inline" | "vertical-enhanced"
text_align: "left" | "center" | "right"
font_size: 14                    # pixels
icon_offset_x: 0                 # pixels
```

### Light Controls
```yaml
show_brightness_control: true
show_color_temp_control: true
show_color_control: true
show_brightness_percentage: true
collapsible_controls: false
use_light_color: true
```

### Card Styling
```yaml
card_background_color: "#e3f2fd"
card_background_image: "/local/bg.jpg"
card_background_image_opacity: 0.3      # NEW: 0.0 - 1.0
card_background_image_position: "center" # NEW: positioning
card_border_color: "#2196f3"
card_border_width: "2px"
card_border_radius: "16px"
card_box_shadow: "0 4px 12px rgba(0,0,0,0.2)"
```

### Background Image Positioning (NEW)
```yaml
card_background_image_position:
  - "center"        # Default - center image
  - "left"          # Left edge
  - "right"         # Right edge
  - "top"           # Top edge
  - "bottom"        # Bottom edge
  - "left top"      # Top-left corner
  - "right top"     # Top-right corner
  - "left bottom"   # Bottom-left corner
  - "right bottom"  # Bottom-right corner
```

### Enhanced Popup
```yaml
hold_action:
  action: "enhanced-more-info"
enhanced_popup:
  show_sub_entities: true
  show_effects: true
  show_scenes: true
  title: "Light Control"
  background_color: "#1e1e1e"
```

## Common Patterns

### Glass Effect with Background Image
```yaml
card_background_image: "/local/logo.png"
card_background_image_opacity: 0.15
card_background_image_position: "center"
card_background_color: "rgba(255, 255, 255, 0.9)"
card_border_color: "rgba(255, 255, 255, 0.3)"
card_border_width: "2px"
card_border_radius: "25px"
card_box_shadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
```

### Modern Blue Theme
```yaml
card_background_color: "#e3f2fd"
card_border_color: "#2196f3"
card_border_width: "2px"
card_border_radius: "16px"
card_box_shadow: "0 4px 12px rgba(33,150,243,0.2)"
```

### Dark Theme with Subtle Background
```yaml
card_background_image: "/local/texture.jpg"
card_background_image_opacity: 0.08
card_background_image_position: "right bottom"
card_background_color: "#1a1a1a"
card_border_color: "#00ffff"
card_border_width: "3px"
card_border_radius: "15px"
card_box_shadow: "0 0 20px rgba(0, 255, 255, 0.3)"
```

### Minimalist with Watermark
```yaml
card_background_image: "/local/logo.png"
card_background_image_opacity: 0.05
card_background_image_position: "right"
card_background_color: "#fafafa"
card_border_width: "0px"
card_border_radius: "8px"
card_box_shadow: "0 1px 3px rgba(0,0,0,0.1)"
```

## Background Image Opacity Guide

### Opacity Values & Use Cases
- `1.0` - Full opacity (no transparency) - for main backgrounds
- `0.75` - Strong background - for themed cards
- `0.5` - Medium background - balanced visibility
- `0.3` - Light background - subtle theming
- `0.15` - Glass effect - very subtle
- `0.08` - Dark theme accent - barely visible
- `0.05` - Watermark style - ultra-subtle logo

### Performance Notes
- `1.0` opacity uses optimized direct CSS rendering
- `< 1.0` opacity uses linear-gradient overlay technique
- Both approaches maintain full visibility of card content

## Color Formats
- Hex: `#ff0000`, `#f00`
- RGB: `rgb(255, 0, 0)`
- RGBA: `rgba(255, 0, 0, 0.5)`
- Names: `red`, `blue`, `transparent`

## Size Units
- Pixels: `16px`, `2px`
- Em: `1.2em`
- Rem: `1rem`
- Percent: `100%`

## Actions
- `toggle` - Toggle light
- `enhanced-more-info` - Show popup
- `more-info` - Standard dialog
- `call-service` - Custom service
- `navigate` - Go to path
- `url` - Open URL

## Quick Tips
1. Use `vertical-enhanced` layout for best visual impact
2. Combine background images with subtle opacity (0.1-0.3) for professional look
3. Corner positioning (`left top`, `right bottom`) works great for logos
4. Glass effects use high opacity background color with low opacity image
5. Dark themes benefit from very low image opacity (0.05-0.15)

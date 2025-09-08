# Enhanced Light Card - Complete Documentation

**Version:** 2.1 - Background Image Enhancements  
**Updated:** January 8, 2025

## Overview

The Enhanced Light Card is an advanced version of the Mushroom Light Card with additional styling options, enhanced popup functionality, and improved user experience features. This card provides comprehensive control over light entities with extensive customization capabilities, including advanced background image opacity and positioning controls.

## Installation

1. Copy the enhanced light card files to your Home Assistant configuration
2. Add the card to your Lovelace resources
3. Use `type: custom:mushroom-enhanced-light-card` in your dashboard configuration

## Features

### ✨ Core Enhancements
- **Advanced Styling**: Background colors, images, borders, shadows, and more
- **Enhanced Popup**: Rich popup with sub-entities, effects, and scenes
- **Flexible Layout**: Multiple button layouts and text alignment options
- **Custom Actions**: Support for all Home Assistant action types
- **Responsive Design**: Adapts to different screen sizes and containers

### 🎨 Advanced Styling Capabilities
- Background colors and images
- **NEW:** Background image opacity control (0.0 - 1.0)
- **NEW:** Background image positioning (9 position options)
- Custom borders (color, width, radius)
- Box shadows for depth effects
- Font size and icon positioning control
- Text alignment options
- Smart rendering optimization for performance

### 🔧 Control Features
- Brightness control with percentage display
- Color temperature control
- Full color picker support
- Collapsible controls when light is off
- Smart light color integration

## Configuration Reference

### Basic Configuration

```yaml
type: custom:mushroom-enhanced-light-card
entity: light.living_room_lights
name: "Living Room"
```

### Complete Configuration

```yaml
type: custom:mushroom-enhanced-light-card
entity: light.bedroom_lights

# Entity Configuration
name: "Bedroom Lights"
icon: "mdi:lightbulb-group"

# Layout & Appearance
layout: "horizontal"                    # horizontal | vertical
fill_container: false                   # true | false
primary_info: "name"                    # name | state | last-changed | last-updated | none
secondary_info: "state"                 # name | state | last-changed | last-updated | none
icon_type: "icon"                       # icon | entity-picture | none

# Enhanced Layout
button_layout: "vertical-enhanced"      # inline | vertical-enhanced
text_align: "center"                    # left | center | right
font_size: 16                          # Number (pixels)
icon_offset_x: 5                       # Number (pixels)

# Light Controls
show_brightness_control: true           # true | false
show_color_temp_control: true           # true | false
show_color_control: true                # true | false
collapsible_controls: false             # true | false
use_light_color: true                   # true | false
icon_color: "#ff9800"                   # Color value
show_brightness_percentage: true        # true | false

# Card Styling
card_background_color: "#e3f2fd"        # Color value
card_background_image: "/local/bg.jpg"  # URL
card_background_image_opacity: 0.3      # NEW: Opacity (0.0 - 1.0)
card_background_image_position: "center" # NEW: Position (see options below)
card_border_color: "#2196f3"            # Color value
card_border_width: "2px"                # CSS size
card_border_radius: "20px"              # CSS size
card_box_shadow: "0 4px 12px rgba(33,150,243,0.3)"  # CSS shadow

# Actions
tap_action:
  action: "toggle"
hold_action:
  action: "enhanced-more-info"
double_tap_action:
  action: "more-info"

# Enhanced Popup
enhanced_popup:
  show_sub_entities: true
  show_effects: true
  show_scenes: true
  show_advanced_controls: true
  card_type: "mushroom"
  title: "Bedroom Lighting Control"
  background_color: "#1e1e1e"
  sub_entities_text: "Related Lights"
  text_style:
    font_size: "14px"
    font_weight: "500"
    color: "#ffffff"
    background_color: "#333333"
    text_align: "left"
    padding: "8px 12px"
    border_radius: "8px"
```

## Property Reference

### Inherited Properties (from base Light Card)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `entity` | string | **required** | Light entity ID |
| `name` | string | entity name | Display name |
| `icon` | string | entity icon | Custom icon |
| `layout` | string | `horizontal` | Card layout |
| `fill_container` | boolean | `false` | Fill container width |
| `primary_info` | string | `name` | Primary information display |
| `secondary_info` | string | `state` | Secondary information display |
| `icon_type` | string | `icon` | Icon display type |
| `icon_color` | string | auto | Custom icon color |
| `show_brightness_control` | boolean | `true` | Show brightness slider |
| `show_color_temp_control` | boolean | `true` | Show color temperature |
| `show_color_control` | boolean | `true` | Show color picker |
| `collapsible_controls` | boolean | `false` | Hide controls when off |
| `use_light_color` | boolean | `false` | Use light color for icon |
| `tap_action` | object | `toggle` | Tap action configuration |
| `hold_action` | object | `more-info` | Hold action configuration |
| `double_tap_action` | object | `more-info` | Double tap action |

### Enhanced Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `button_layout` | string | `inline` | Button arrangement |
| `font_size` | number | `14` | Font size in pixels |
| `icon_offset_x` | number | `0` | Icon horizontal offset |
| `show_brightness_percentage` | boolean | `true` | Show brightness % |
| `text_align` | string | `left` | Text alignment |

### Styling Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `card_background_color` | string | - | Background color |
| `card_background_image` | string | - | Background image URL |
| `card_background_image_opacity` | number | `1` | **NEW:** Background image opacity (0.0 - 1.0) |
| `card_background_image_position` | string | `center` | **NEW:** Background image position (see position options) |
| `card_border_color` | string | - | Border color |
| `card_border_width` | string | `0px` | Border width |
| `card_border_radius` | string | `12px` | Border radius |
| `card_box_shadow` | string | - | Box shadow effect |

### Background Image Position Options

The `card_background_image_position` property accepts the following values:

| Position | Description | Use Case |
|----------|-------------|----------|
| `center` | Center the image (default) | General purpose, balanced look |
| `left` | Align to left edge | Left-side branding, asymmetric design |
| `right` | Align to right edge | Right-side branding, balance with left content |
| `top` | Align to top edge | Header-style backgrounds |
| `bottom` | Align to bottom edge | Footer-style backgrounds |
| `left top` | Top-left corner | Corner logos, decorative elements |
| `right top` | Top-right corner | Status indicators, corner branding |
| `left bottom` | Bottom-left corner | Subtle watermarks |
| `right bottom` | Bottom-right corner | Signature elements, corner accents |

### Background Image Opacity Guide

The `card_background_image_opacity` property controls the transparency of the background image while keeping all card content fully visible:

| Opacity | Effect | Best For |
|---------|--------|----------|
| `1.0` | Full opacity (no transparency) | Main backgrounds, themed cards |
| `0.75` | Strong background | Prominent theming |
| `0.5` | Medium background | Balanced visibility |
| `0.3` | Light background | Subtle theming |
| `0.15` | Glass effect | Professional, subtle look |
| `0.08` | Dark theme accent | Barely visible texture |
| `0.05` | Watermark style | Ultra-subtle branding |

**Performance Note:** Full opacity (1.0) uses optimized direct CSS rendering, while values less than 1.0 use a linear-gradient overlay technique for precise opacity control without affecting card content visibility.

### Popup Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enhanced_popup.show_sub_entities` | boolean | `false` | Show related entities |
| `enhanced_popup.show_effects` | boolean | `false` | Show light effects |
| `enhanced_popup.show_scenes` | boolean | `false` | Show scenes |
| `enhanced_popup.show_advanced_controls` | boolean | `false` | Show advanced controls |
| `enhanced_popup.card_type` | string | `mushroom` | Popup card type |
| `enhanced_popup.title` | string | - | Custom popup title |
| `enhanced_popup.background_color` | string | - | Popup background |
| `enhanced_popup.sub_entities_text` | string | - | Sub-entities section title |

### Popup Text Style Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enhanced_popup.text_style.font_size` | string | - | Text font size |
| `enhanced_popup.text_style.font_weight` | string | - | Text font weight |
| `enhanced_popup.text_style.color` | string | - | Text color |
| `enhanced_popup.text_style.background_color` | string | - | Text background |
| `enhanced_popup.text_style.text_align` | string | - | Text alignment |
| `enhanced_popup.text_style.padding` | string | - | Text padding |
| `enhanced_popup.text_style.border_radius` | string | - | Text border radius |

## Value Options

### Layout Options
- `horizontal`: Icon and info side by side
- `vertical`: Icon above info

### Button Layout Options
- `inline`: Controls next to slider (compact)
- `vertical-enhanced`: Controls below slider (spacious)

### Text Alignment Options
- `left`: Left-aligned text
- `center`: Center-aligned text
- `right`: Right-aligned text

### Primary/Secondary Info Options
- `name`: Entity name
- `state`: Entity state
- `last-changed`: Last changed time
- `last-updated`: Last updated time
- `none`: No information

### Icon Type Options
- `icon`: Use icon
- `entity-picture`: Use entity picture
- `none`: No icon

### Action Types
- `toggle`: Toggle entity
- `turn-on`: Turn on entity
- `turn-off`: Turn off entity
- `call-service`: Call a service
- `navigate`: Navigate to path
- `url`: Open URL
- `more-info`: Show more info dialog
- `enhanced-more-info`: Show enhanced popup
- `none`: No action

### Popup Card Types
- `mushroom`: Mushroom-style popup
- `standard`: Standard HA card style
- `entity`: Entity card style

## Color Values

Colors can be specified in multiple formats:
- **Hex**: `#ff0000`, `#f00`
- **RGB**: `rgb(255, 0, 0)`
- **RGBA**: `rgba(255, 0, 0, 0.5)`
- **HSL**: `hsl(0, 100%, 50%)`
- **CSS Names**: `red`, `blue`, `transparent`

## Size Values

Sizes should include CSS units:
- **Pixels**: `16px`, `2px`
- **Em**: `1.2em`, `0.5em`
- **Rem**: `1rem`, `1.5rem`
- **Percent**: `100%`, `50%`

## Shadow Syntax

Box shadows use CSS syntax:
```
offset-x offset-y blur-radius spread-radius color
```

Examples:
- `0 2px 4px rgba(0,0,0,0.1)` - Subtle shadow
- `0 4px 12px rgba(33,150,243,0.3)` - Blue glow
- `inset 0 1px 3px rgba(0,0,0,0.2)` - Inset shadow

## Background Images

Background images can be:
- **Local files**: `/local/images/background.jpg`
- **External URLs**: `https://example.com/image.jpg`
- **Data URLs**: `data:image/svg+xml;base64,...`

Images are automatically set to:
- `background-size: cover` (fills container)
- `background-position: center` (centered)
- `background-repeat: no-repeat` (no tiling)

## Best Practices

### Performance
- Optimize background images for web (WebP, compressed JPEG)
- Use appropriate image sizes (avoid huge images)
- Consider loading impact on slower devices

### Accessibility
- Ensure sufficient color contrast (4.5:1 minimum)
- Test with different themes (light/dark)
- Provide meaningful names for screen readers

### Design
- Use consistent styling across similar cards
- Consider the overall dashboard theme
- Test on different screen sizes

### Functionality
- Only enable controls your light supports
- Use appropriate button layouts for your space
- Test popup functionality on mobile devices

## Troubleshooting

### Common Issues

**Card not appearing**
- Check entity ID is correct
- Verify card type spelling
- Ensure card files are properly installed

**Styling not working**
- Check CSS syntax in values
- Verify color format is valid
- Test with simpler values first

**Popup not showing**
- Ensure `hold_action` is set to `enhanced-more-info`
- Check popup configuration syntax
- Verify popup dependencies are loaded

**Controls not working**
- Check if light entity supports the feature
- Verify entity is available and responsive
- Test with basic configuration first

### Debug Tips

1. Check browser developer console for errors
2. Test with minimal configuration first
3. Add features incrementally
4. Verify entity capabilities in Developer Tools

## Examples by Use Case

### Living Room Main Lights
```yaml
type: custom:mushroom-enhanced-light-card
entity: light.living_room_main
name: "Living Room"
button_layout: "vertical-enhanced"
text_align: "center"
show_brightness_control: true
show_color_temp_control: true
card_background_color: "#f5f5f5"
card_border_radius: "16px"
card_box_shadow: "0 2px 8px rgba(0,0,0,0.1)"
```

### RGB Strip Lighting
```yaml
type: custom:mushroom-enhanced-light-card
entity: light.rgb_strip
name: "RGB Strip"
show_brightness_control: true
show_color_control: true
use_light_color: true
card_background_color: "#1a1a1a"
card_border_color: "#333"
card_border_width: "1px"
card_border_radius: "12px"
```

### Scene Controller
```yaml
type: custom:mushroom-enhanced-light-card
entity: light.scene_controller
name: "Scenes"
tap_action:
  action: "enhanced-more-info"
enhanced_popup:
  show_scenes: true
  show_sub_entities: true
  title: "Lighting Scenes"
  card_type: "mushroom"
```

## Version History

- **v1.0**: Initial release with basic enhancements
- **v1.1**: Added styling options
- **v1.2**: Enhanced popup functionality
- **v1.3**: Background image support
- **v1.4**: Advanced text styling
- **v2.0**: Complete feature set with comprehensive documentation

## Support

For issues, feature requests, or contributions, please refer to the project repository or documentation.

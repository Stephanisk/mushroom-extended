# Enhanced Mushroom Cards

This project extends the original Mushroom cards with three enhanced components that provide additional functionality and customization options.

## 🌟 Enhanced Light Card (`mushroom-enhanced-light-card`)

An enhanced version of the Mushroom light card with advanced controls and customization options.

### Features
- **All controls visible simultaneously** - brightness, color temperature, and color controls
- **One-shot sliders** - commands sent only on slider release for better performance
- **Customizable button layouts** - inline or vertical positioning
- **Enhanced styling** - custom fonts, icon positioning, text alignment
- **Custom popup support** - configurable enhanced popup on double-tap

### Configuration Options

```yaml
type: custom:mushroom-enhanced-light-card
entity: light.your_light
name: "Enhanced Light"

# Button Layout
button_layout: "vertical-enhanced"  # "inline" | "vertical-enhanced"

# Styling
font_size: 16                      # Font size in pixels
text_align: "center"               # "left" | "center" | "right"
icon_offset_x: 10                  # Icon horizontal offset in pixels

# Controls
show_brightness_control: true
show_color_temp_control: true
show_color_control: true
collapsible_controls: false
show_brightness_percentage: false

# Enhanced Popup
double_tap_action:
  action: enhanced-more-info
enhanced_popup:
  title: "Light Control Center"
  background_color: "#f0f0f0"
  card_type: "mushroom"           # "mushroom" | "standard" | "entity"
  show_sub_entities: true
  show_effects: true
  show_advanced_controls: true
  sub_entities_text: "If a light didn't react properly, please click the light that is still on."
  text_style:
    font_size: "16px"
    font_weight: "500"
    color: "#856404"
    background_color: "#fff3cd"
    text_align: "center"
    padding: "16px 20px"
    border_radius: "12px"
```

## 🔀 Split Layout Card (`mushroom-split-layout-card`)

A layout card that creates a fixed-width sidebar and main content area, perfect for panel views.

### Features
- **Fixed percentage split** - configurable sidebar width (default 28%)
- **Panel view support** - spans entire viewport when used in panel views
- **Background customization** - separate backgrounds for sidebar and main areas
- **Any card support** - works with all Lovelace cards (HA built-in, HACS, custom)
- **Responsive design** - maintains proportions across different screen sizes

### Configuration Options

```yaml
type: custom:mushroom-split-layout-card
sidebar_width: 28                  # Sidebar width percentage (default: 28)
gap: 16                           # Gap between sidebar and main in pixels

# Sidebar Configuration
sidebar:
  background_color: "#f8f9fa"     # Sidebar background color
  background_image: "url(...)"   # Optional background image
  cards:
    - type: markdown
      content: "## Sidebar Content"
    - type: custom:mushroom-enhanced-light-card
      entity: light.sidebar_light

# Main Area Configuration  
main:
  background_color: "#ffffff"     # Main area background color
  background_image: "url(...)"   # Optional background image
  cards:
    - type: markdown
      content: "# Main Dashboard"
    - type: grid
      columns: 3
      cards:
        - type: custom:mushroom-enhanced-light-card
          entity: light.main_light_1
        - type: custom:mushroom-enhanced-light-card
          entity: light.main_light_2
        - type: entities
          entities:
            - light.example
```

### Panel View Setup

For best results, use in a panel view:

```yaml
# In your lovelace dashboard YAML
views:
  - title: Split Dashboard
    path: split-dashboard
    panel: true                    # CRITICAL: Makes card span entire view
    cards:
      - type: custom:mushroom-split-layout-card
        # ... your configuration
```

## 🪟 Enhanced Popup (`mushroom-enhanced-popup`)

A customizable popup system that replaces the standard more-info dialog with enhanced functionality.

### Features
- **Custom styling** - configurable title, background, and text styling
- **Multiple card types** - choose between Mushroom, standard HA, or entity cards
- **Light group support** - shows individual lights for group entities
- **Flexible text container** - fully customizable instructions/help text
- **Clean interface** - no unwanted 3-dot menus or extra dialogs

### Configuration Options

The enhanced popup is configured through the `enhanced_popup` section of compatible cards:

```yaml
enhanced_popup:
  # Basic Configuration
  title: "Custom Popup Title"     # Popup window title
  background_color: "#f0f0f0"     # Popup background color
  
  # Sub-entities Display
  show_sub_entities: true         # Show individual lights for groups
  card_type: "mushroom"           # "mushroom" | "standard" | "entity"
  
  # Features (for future expansion)
  show_effects: true              # Show effect controls
  show_advanced_controls: true    # Show advanced options
  
  # Instructions Text
  sub_entities_text: "Custom instructions for users"
  
  # Text Styling Container
  text_style:
    font_size: "16px"             # Text size
    font_weight: "500"            # normal | 500 | bold | etc.
    color: "#856404"              # Text color
    background_color: "#fff3cd"   # Container background
    text_align: "center"          # left | center | right
    padding: "16px 20px"          # Container padding
    border_radius: "12px"         # Corner rounding
```

### Card Type Options

- **`mushroom`** (default): Clean Mushroom entity cards with toggle functionality
- **`standard`**: Full HA light cards with all controls (includes 3-dot menu)
- **`entity`**: Simple HA entity cards with just toggle (no 3-dot menu)

## 🚀 Usage Examples

### Basic Enhanced Light Card
```yaml
type: custom:mushroom-enhanced-light-card
entity: light.living_room
name: "Living Room"
button_layout: "vertical-enhanced"
font_size: 16
text_align: "center"
```

### Split Layout Dashboard
```yaml
type: custom:mushroom-split-layout-card
sidebar_width: 30
gap: 20
sidebar:
  background_color: "#f8f9fa"
  cards:
    - type: markdown
      content: "## Quick Controls"
main:
  background_color: "#ffffff"
  cards:
    - type: grid
      columns: 2
      cards:
        - type: custom:mushroom-enhanced-light-card
          entity: light.bedroom
        - type: custom:mushroom-enhanced-light-card
          entity: light.kitchen
```

### Enhanced Popup with Custom Styling
```yaml
type: custom:mushroom-enhanced-light-card
entity: light.group_lights
double_tap_action:
  action: enhanced-more-info
enhanced_popup:
  title: "Group Light Control"
  background_color: "#f5f5f5"
  card_type: "mushroom"
  sub_entities_text: "Individual light controls below"
  text_style:
    font_size: "14px"
    font_weight: "normal"
    color: "#333333"
    background_color: "#e3f2fd"
    text_align: "center"
    padding: "12px 16px"
    border_radius: "8px"
```

## 🔧 Installation

1. Copy the enhanced cards to your Home Assistant custom components
2. Add the JavaScript bundle to your Lovelace resources
3. Use the cards in your dashboards with the configurations above

## 📝 Notes

- All enhanced components work alongside existing Mushroom cards
- Enhanced popup only works with compatible cards (currently enhanced light card)
- Split layout card is designed for panel views but works in regular views
- All styling options support CSS values (colors, sizes, etc.)

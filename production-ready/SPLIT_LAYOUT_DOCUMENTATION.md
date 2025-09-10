# Split Layout Card - Final Release Backup

**Created:** January 8, 2025 - 19:17:24  
**Version:** Final Release v1.0  
**Status:** Production Ready

## Overview

The Split Layout Card provides flexible multi-column layouts for Home Assistant dashboards with independent column heights and full customization options.

## Features

### ✅ Layout System
- **Multi-column layouts** with independent heights
- **Sidebar and main content areas** for organized layouts
- **Responsive design** that adapts to different screen sizes
- **Custom card styling** with background colors, borders, and shadows

### ✅ Column Independence
- **Independent heights** - columns don't affect each other's height
- **Flexible content** - each column can contain different card types
- **No whitespace issues** - proper vertical alignment
- **Custom spacing** - control gaps between columns

### ✅ Customization
- **Background styling** - colors, images, borders
- **Logo support** - custom branding in layouts
- **CSS customization** - full styling control
- **Responsive breakpoints** - mobile-friendly layouts

## Installation

1. Copy the `split-layout-card/` directory to your `src/cards/` folder
2. Import the card in your main mushroom.ts file
3. Register the card with Home Assistant
4. Use `type: custom:mushroom-split-layout-card` in your dashboards

## Basic Usage

```yaml
type: custom:mushroom-split-layout-card
sidebar:
  cards:
    - type: entities
      title: "Quick Controls"
      entities:
        - light.living_room
        - switch.fan
main:
  cards:
    - type: horizontal-stack
      cards:
        - type: vertical-stack
          cards:
            - type: custom:mushroom-enhanced-light-card
              entity: light.bedroom
              name: "Bedroom"
        - type: vertical-stack
          cards:
            - type: entities
              title: "Sensors"
              entities:
                - sensor.temperature
```

## Advanced Configuration

```yaml
type: custom:mushroom-split-layout-card
# Logo configuration
logo:
  image_url: "/local/logo.png"
  
# Sidebar configuration
sidebar:
  cards:
    - type: entities
      title: "Controls"
      entities:
        - light.main_lights
  custom_css: "background-color: #f5f5f5; padding: 16px;"
  
# Main content area
main:
  cards:
    - type: horizontal-stack
      cards:
        # Column 1 - Independent height
        - type: vertical-stack
          cards:
            - type: custom:mushroom-enhanced-light-card
              entity: light.living_room
              button_layout: "vertical-enhanced"
              
        # Column 2 - Independent height  
        - type: vertical-stack
          cards:
            - type: entities
              title: "Climate"
              entities:
                - climate.thermostat
                
        # Column 3 - Independent height
        - type: vertical-stack
          cards:
            - type: custom:mushroom-light-card
              entity: light.kitchen
              
  custom_css: "gap: 16px;"
  
# Card styling
card_style:
  background_color: "#ffffff"
  border_radius: "12px"
  box_shadow: "0 2px 8px rgba(0,0,0,0.1)"
  
# Layout options
full_height: true
full_width: true
```

## Key Benefits

### Independent Column Heights
Unlike Home Assistant's built-in `type: grid`, the Split Layout Card ensures that:
- Each column maintains its own height
- No unwanted whitespace from other columns
- Perfect vertical alignment within each column
- Clean, professional layouts

### Flexible Content Organization
- **Sidebar:** Perfect for navigation, quick controls, or status information
- **Main Area:** Use horizontal-stack with vertical-stacks for independent columns
- **Logo Area:** Optional branding or header information
- **Custom Styling:** Full control over appearance

## Implementation Notes

### Column Independence Solution
The card uses `horizontal-stack` containing multiple `vertical-stack` cards instead of CSS Grid to achieve true column independence:

```yaml
# ✅ GOOD - Independent columns
- type: horizontal-stack
  cards:
    - type: vertical-stack  # Column 1
      cards: [...]
    - type: vertical-stack  # Column 2  
      cards: [...]
    - type: vertical-stack  # Column 3
      cards: [...]

# ❌ AVOID - Grid creates height dependencies
- type: grid
  columns: 3
  cards: [...]
```

### Responsive Design
- Automatically adapts to different screen sizes
- Mobile-friendly column stacking
- Flexible width and height options
- Proper spacing and alignment

## Files Included

- **`split-layout-card.ts`** - Main card implementation
- **`split-layout-card-config.ts`** - Configuration interface
- **`split-layout-card-editor.ts`** - Visual editor (if needed)
- **`const.ts`** - Constants and card name
- **`README.md`** - This documentation

## Development Status

- ✅ Core functionality implemented
- ✅ Independent column heights working
- ✅ Responsive design completed
- ✅ Custom styling system
- ✅ Production ready

This backup represents the stable version of the Split Layout Card with all features implemented and tested for production use.

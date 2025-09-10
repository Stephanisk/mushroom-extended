# Mushroom Enhanced Cards - Production Installation Guide

**Version:** Complete Build v2.1  
**Updated:** September 10, 2025  
**Build:** mushroom-complete.js (942KB)

## Overview

This production-ready build contains ALL official Mushroom cards PLUS our custom enhanced cards:
- **Enhanced Light Card** - Advanced light control with background images, opacity controls, and enhanced popup
- **Split Layout Card** - Flexible multi-column layouts with independent heights and advanced styling

## Features Included

### ✅ All Official Mushroom Cards
- Light, Entity, Fan, Cover, Climate, Lock, etc.
- All original functionality preserved

### ✅ Enhanced Light Card Features
- **Background Images** with opacity control
- **Advanced Popup** with sub-entities and effects
- **Vertical Enhanced Layout** with inline controls
- **Custom Styling** - borders, shadows, colors
- **Brightness Percentage** display
- **Icon Positioning** controls

### ✅ Split Layout Card Features
- **Independent Column Heights** - no whitespace issues
- **Background Images & Gradients** with opacity
- **Logo Overlay** with proper z-index
- **Responsive Design** for mobile
- **Advanced Styling** for all sections
- **Grid Card Compatibility** fixes

## Installation Instructions

### 1. Upload the Build File

Copy `mushroom-complete.js` to your Home Assistant:
```bash
# Upload to HA www directory
scp mushroom-complete.js root@YOUR_HA_IP:/var/lib/homeassistant/homeassistant/www/
```

### 2. Update Configuration

Add to your `configuration.yaml`:
```yaml
lovelace:
  mode: storage
  resources:
    - url: /local/mushroom-complete.js
      type: module
```

### 3. Remove HACS Mushroom (Optional)

To avoid conflicts, remove the HACS version:
1. Go to HACS → Frontend
2. Find "Mushroom" and remove it
3. Restart Home Assistant

### 4. Restart Home Assistant

```bash
# Restart HA to load new resources
ha core restart
```

## Usage Examples

### Enhanced Light Card
```yaml
type: custom:mushroom-enhanced-light-card
entity: light.living_room
button_layout: vertical-enhanced
show_brightness_percentage: true
card_background_image: "/local/images/background.jpg"
card_background_image_opacity: 0.3
card_background_image_position: center
enhanced_popup:
  show_sub_entities: true
  show_effects: true
```

### Split Layout Card
```yaml
type: custom:mushroom-split-layout-card
sidebar:
  background_color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  cards:
    - type: custom:mushroom-light-card
      entity: light.main
main:
  background_image: "https://example.com/bg.jpg"
  background_color: "rgba(255, 255, 255, 0.9)"
  cards:
    - type: horizontal-stack
      cards:
        - type: custom:mushroom-light-card
          entity: light.1
```

## Documentation Files

- `ENHANCED_LIGHT_CARD_DOCUMENTATION.md` - Complete enhanced light card guide
- `ENHANCED_LIGHT_CARD_COMPLETE_EXAMPLES.yaml` - All enhanced light card examples
- `SPLIT_LAYOUT_DOCUMENTATION.md` - Complete split layout card guide  
- `SPLIT_LAYOUT_EXAMPLES.yaml` - All split layout card examples
- `INSTALLATION_COMMANDS.md` - Command reference
- `configuration-snippet.yaml` - Configuration template
- `dashboard-example.yaml` - Dashboard example

## Troubleshooting

### Cards Not Showing
1. Check browser console for errors
2. Verify `/local/mushroom-complete.js` is accessible
3. Ensure configuration.yaml syntax is correct
4. Restart Home Assistant

### Duplicate Registration Errors
1. Remove HACS Mushroom installation
2. Clear browser cache
3. Use only `/local/mushroom-complete.js`

### Background Images Not Working
1. Ensure image URLs are accessible
2. Check CORS settings for external images
3. Use `/local/` for local images

## Support

For issues or questions:
1. Check the documentation files included
2. Verify all configuration examples
3. Test in demo environment first

**This build is self-contained and includes everything needed for production use.**

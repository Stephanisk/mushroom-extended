# Mushroom Custom Cards - Development Environment

This is a development environment for custom Mushroom cards with enhanced functionality.

## 🎯 What's Available

### Enhanced Light Card v2.1
Advanced light card with background image opacity, positioning, and enhanced popup functionality.

### Split Layout Card v1.0  
Flexible multi-column layout system with independent column heights.

## 🚀 Quick Start

### Development Mode
```bash
# Start Home Assistant development environment
docker-compose up -d

# Build and sync cards to HA
npm run ha:rebuild

# Access HA at http://localhost:8123
```

### Production Installation
All production-ready files are in `Backup_Finals/`:

- **Enhanced Light Card:** `Backup_Finals/enhanced_light_card_final_20250908_181022/`
- **Split Layout Card:** `Backup_Finals/split_layout_card_final_20250908_191724/`

Each backup contains:
- ✅ Source code
- ✅ Complete documentation  
- ✅ Installation instructions
- ✅ Configuration examples
- ✅ Quick reference guides

## 📁 Project Structure

```
├── src/cards/
│   ├── enhanced-light-card/     # Enhanced light card source
│   └── split-layout-card/       # Split layout card source
├── src/shared/popup/            # Enhanced popup system
├── Backup_Finals/               # Production-ready backups
│   ├── enhanced_light_card_final_20250908_181022/
│   └── split_layout_card_final_20250908_191724/
├── ha-config/                   # Home Assistant config
└── tools/                       # Build and sync tools
```

## 🔧 Development Commands

```bash
npm run build          # Build cards
npm run ha:sync        # Sync to Home Assistant  
npm run ha:rebuild     # Build + sync + gallery
npm run ha:gallery     # Generate gallery
```

## 📚 Documentation

Complete documentation is available in each backup directory:

- **README.md** - Overview and installation
- **EXAMPLES.yaml** - Configuration examples
- **DOCUMENTATION.md** - Complete technical reference
- **QUICK_REFERENCE.md** - Developer quick reference

## 🎨 Features

### Enhanced Light Card
- Background image opacity control (0.0 - 1.0)
- 9 positioning options for background images
- Glass effects and watermark styles
- Enhanced popup with sub-entities and effects
- Vertical-enhanced layout option
- Custom styling (borders, shadows, colors)

### Split Layout Card
- Independent column heights
- Flexible sidebar and main content areas
- Responsive design
- Custom styling and branding
- No whitespace issues from grid layouts

## 🏠 Home Assistant Integration

The development environment includes:
- Docker Compose setup
- Auto-sync build artifacts
- Live reload during development
- Gallery dashboard with examples
- Complete HA configuration

Ready for both development and production use!
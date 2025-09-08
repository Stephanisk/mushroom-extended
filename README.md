# Mushroom Development Environment

This is a complete development environment for the Mushroom Lovelace cards with Home Assistant integration.

## Setup Complete ✅

The environment has been automatically configured with:

- ✅ Cloned lovelace-mushroom repository
- ✅ Configured workspace with npm scripts  
- ✅ Docker Compose setup for Home Assistant
- ✅ Auto-sync tools for build artifacts
- ✅ Auto-generated gallery dashboard with all 18 Mushroom cards
- ✅ Home Assistant running on http://localhost:8123

## Quick Start

1. **First time setup**: Open http://localhost:8123 and complete the Home Assistant onboarding
2. **View gallery**: After onboarding, click "Mushroom Gallery" in the left sidebar
3. **See all cards**: The gallery shows all 18 Mushroom card types with working configurations

## Development Workflow

### Hot Reload Development
```bash
# Edit code in src/
# Then rebuild and sync:
npm run ha:rebuild

# Hard refresh browser (Ctrl/Cmd+Shift+R) to see changes
```

### Available Commands
```bash
npm run build:mushroom    # Build Mushroom cards
npm run ha:sync          # Sync build to HA /www/mushroom-dev/
npm run ha:gallery       # Generate gallery dashboard
npm run ha:rebuild       # Build + sync + gallery
npm run ha:up           # Full startup (build + sync + gallery + docker up)
npm run ha:down         # Stop Home Assistant
npm run ha:logs         # View HA logs
```

### Continuous Development
```bash
# Terminal 1: Keep HA running
docker compose up

# Terminal 2: Watch for changes and auto-rebuild
npx chokidar "src/**/*" --command "npm run ha:rebuild" --initial
```

## Architecture

- **Build Output**: `dist/mushroom.js` (single bundle)
- **HA Integration**: Synced to `/www/mushroom-dev/` with auto-generated `loader.js`
- **Gallery**: Auto-generates YAML dashboard with all card types
- **Entities**: Uses demo entities + custom light.lobby entity for testing

## Gallery Features

The Mushroom Gallery dashboard includes:
- ⭐ Interactive "Boutique Rating" template card at the top
- All 18 original Mushroom card types with appropriate demo entities
- **NEW**: `mushroom-enhanced-light-card` with unified controls
- Safe default configurations for each card type

## Enhanced Light Card

The new `mushroom-enhanced-light-card` provides:
- **Unified Controls**: All 3 control buttons (brightness, color temp, color) visible simultaneously
- **Single Slider**: One adaptive slider that changes behavior based on active control
- **Command on Release**: Only sends service calls when slider is released (no command flooding)
- **Separate from Original**: Won't conflict with existing Mushroom installations

## Troubleshooting

- **Cards not loading**: Check browser console for errors, ensure loader.js is accessible
- **Gallery not updating**: Run `npm run ha:gallery` and hard refresh browser
- **Build issues**: Check `npm run build:mushroom` output for errors
- **HA not starting**: Check `docker compose logs homeassistant`

## Next Steps

1. Fork the original repository: https://github.com/piitaya/lovelace-mushroom
2. Update the git remote to point to your fork
3. Start customizing cards in `src/cards/`
4. Use `npm run ha:rebuild` after each change
5. Deploy final builds with versioned URLs for production

Happy coding! 🍄
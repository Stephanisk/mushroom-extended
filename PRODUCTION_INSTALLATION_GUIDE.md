# Production Installation Guide - Custom Mushroom Cards

## 🎯 **Recommended Installation Method**

### **Option 1: Manual Installation (Recommended)**

This is the **safest** approach that keeps your custom cards completely separate from the official Mushroom cards.

#### **Step 1: Install Official Mushroom Cards**
1. Install Mushroom Cards via HACS (if not already installed)
2. Keep it updated normally - your custom cards won't be affected

#### **Step 2: Install Custom Cards**
1. **Copy source files** from `Backup_Finals/` to your HA installation:

```bash
# Enhanced Light Card
/config/www/community/mushroom-custom-cards/enhanced-light-card.js
/config/www/community/mushroom-custom-cards/enhanced-popup.js

# Split Layout Card  
/config/www/community/mushroom-custom-cards/split-layout-card.js
```

2. **Add to Lovelace resources** in your `configuration.yaml`:

```yaml
lovelace:
  resources:
    # Official Mushroom (via HACS)
    - url: /hacsfiles/lovelace-mushroom/mushroom.js
      type: module
    
    # Your Custom Cards (separate files)
    - url: /local/mushroom-custom-cards/enhanced-light-card.js
      type: module
    - url: /local/mushroom-custom-cards/enhanced-popup.js
      type: module  
    - url: /local/mushroom-custom-cards/split-layout-card.js
      type: module
```

#### **Step 3: Use in Dashboards**
```yaml
# Enhanced Light Card
- type: custom:mushroom-enhanced-light-card
  entity: light.living_room
  # ... your config

# Split Layout Card
- type: custom:mushroom-split-layout-card
  # ... your config
```

---

## 🔧 **Alternative: Single Bundle File**

If you prefer a single file approach, I can create a standalone bundle:

### **Benefits:**
- ✅ **Update-safe** - Won't be overwritten by Mushroom updates
- ✅ **Separate from official** - No conflicts with HACS updates
- ✅ **Easy to manage** - Single file to maintain
- ✅ **Unique card names** - `mushroom-enhanced-light-card` vs `mushroom-light-card`

### **Installation:**
1. **Build standalone bundle:**
```bash
npm run build:standalone
# Creates: dist/mushroom-custom-cards.js
```

2. **Copy to HA:**
```bash
cp dist/mushroom-custom-cards.js /config/www/mushroom-custom-cards.js
```

3. **Add to resources:**
```yaml
lovelace:
  resources:
    - url: /hacsfiles/lovelace-mushroom/mushroom.js  # Official
      type: module
    - url: /local/mushroom-custom-cards.js           # Your custom cards
      type: module
```

---

## 🚫 **What NOT to Do**

### **❌ Don't modify mushroom.js directly**
- HACS updates will overwrite your changes
- Difficult to maintain
- Breaks official support

### **❌ Don't replace official Mushroom**
- You'll lose official updates and bug fixes
- Compatibility issues with other integrations

---

## 🎨 **Card Names & Conflicts**

Your custom cards have **unique names** to avoid conflicts:

| Official Card | Your Custom Card |
|---------------|------------------|
| `mushroom-light-card` | `mushroom-enhanced-light-card` |
| N/A | `mushroom-split-layout-card` |

This means:
- ✅ **No conflicts** with official cards
- ✅ **Both can coexist** on the same dashboard
- ✅ **Safe updates** - official updates won't affect your cards

---

## 📁 **File Structure for Production**

### **Recommended Structure:**
```
/config/
├── www/
│   └── mushroom-custom-cards/
│       ├── enhanced-light-card.js
│       ├── enhanced-popup.js
│       └── split-layout-card.js
└── configuration.yaml
```

### **Alternative Single File:**
```
/config/
├── www/
│   └── mushroom-custom-cards.js
└── configuration.yaml
```

---

## 🔄 **Updates & Maintenance**

### **Official Mushroom Updates:**
- ✅ **Update normally via HACS** - won't affect your custom cards
- ✅ **No conflicts** - your cards are completely separate

### **Custom Card Updates:**
- 📥 **Get updates from your repository** - `https://github.com/Stephanisk/mushroom-extended`
- 🔄 **Replace files** in `/config/www/mushroom-custom-cards/`
- 🔃 **Restart HA** and refresh browser

---

## 🛠️ **Development vs Production**

### **Development (Current Setup):**
- Uses `npm run ha:rebuild` for live development
- Integrated build system
- Docker compose environment

### **Production (Your HA Installation):**
- Manual file copying
- Separate resource loading
- Standard HA configuration

---

## 🎯 **Recommendation**

For your use case, I recommend:

1. **Keep official Mushroom via HACS** - for updates and compatibility
2. **Install custom cards as separate files** - for safety and flexibility
3. **Use unique card names** - already implemented (`mushroom-enhanced-light-card`)
4. **Manual updates** - copy new versions when needed

This approach gives you:
- ✅ **Maximum safety** from updates
- ✅ **Easy maintenance** 
- ✅ **No conflicts**
- ✅ **Best of both worlds**

Would you like me to prepare the production-ready files for manual installation?


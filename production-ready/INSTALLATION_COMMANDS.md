# 🚀 Production Installation Commands

## **SSH Connection & File Transfer**

### **Step 1: Connect to Your HA Instance**
```bash
ssh root@10.50.50.101
# Password: orangepi
```

### **Step 2: Create Directory Structure**
```bash
mkdir -p /config/www/mushroom-custom-cards
```

### **Step 3: Upload Files**

**From your local machine, run these commands:**

```bash
# Copy the main bundle file
scp /home/hostel/projects/Mushroom-Custom/production-ready/mushroom-custom-cards.js root@10.50.50.101:/config/www/mushroom-custom-cards.js

# Copy configuration snippets
scp /home/hostel/projects/Mushroom-Custom/production-ready/configuration-snippet.yaml root@10.50.50.101:/config/configuration-snippet.yaml

# Copy example dashboard
scp /home/hostel/projects/Mushroom-Custom/production-ready/dashboard-example.yaml root@10.50.50.101:/config/dashboard-example.yaml
```

### **Step 4: Update Configuration**

**On your HA instance (via SSH):**

```bash
# Backup your current configuration
cp /config/configuration.yaml /config/configuration.yaml.backup

# Add the resource to your configuration.yaml
cat >> /config/configuration.yaml << 'EOF'

# Custom Mushroom Cards
lovelace:
  resources:
    - url: /local/mushroom-custom-cards.js
      type: module
EOF
```

### **Step 5: Restart Home Assistant**
```bash
# Restart HA to load the new cards
ha core restart
```

### **Step 6: Test Installation**

1. **Open Home Assistant** in your browser: `http://10.50.50.101:8123`
2. **Go to Settings → Dashboards**
3. **Create a new dashboard** or edit an existing one
4. **Add a card** and look for:
   - `Custom: Mushroom Enhanced Light Card`
   - `Custom: Mushroom Split Layout Card`

---

## **Alternative: Manual File Upload via Web Interface**

If you prefer using the HA web interface:

1. **Open HA**: `http://10.50.50.101:8123`
2. **Go to**: Settings → Add-ons → File editor (install if needed)
3. **Navigate to**: `/config/www/`
4. **Create folder**: `mushroom-custom-cards`
5. **Upload**: `mushroom-custom-cards.js`
6. **Edit**: `configuration.yaml` to add the resource

---

## **Verification Commands**

**Check if files are in place:**
```bash
ls -la /config/www/mushroom-custom-cards.js
ls -la /config/configuration.yaml
```

**Check HA logs for any errors:**
```bash
ha core logs
```

**Check if cards are loaded:**
- Open browser developer tools (F12)
- Look for console messages about "MUSHROOM CUSTOM CARDS"

---

## **Troubleshooting**

### **Cards not showing up:**
1. Check file permissions: `chmod 644 /config/www/mushroom-custom-cards.js`
2. Restart HA: `ha core restart`
3. Clear browser cache: Ctrl+F5

### **Configuration errors:**
1. Check YAML syntax: `ha core check`
2. View logs: `ha core logs`

### **File transfer issues:**
1. Check SSH connection: `ssh root@10.50.50.101`
2. Check directory exists: `ls -la /config/www/`
3. Check disk space: `df -h`

---

## **Success Indicators**

✅ **File uploaded successfully**
✅ **Configuration updated**
✅ **HA restarted without errors**
✅ **Custom cards appear in card picker**
✅ **Cards render correctly on dashboard**

Your custom cards are now ready to use! 🎉

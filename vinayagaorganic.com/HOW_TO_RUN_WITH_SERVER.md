# 🎯 IMPORTANT: Running the Website with Separate Navbar/Footer Components

## ⚠️ CRITICAL: You MUST Use a Web Server!

The new structure uses **separate HTML files** for navbar and footer (in `templates/` folder). 
These are loaded dynamically using JavaScript, which **REQUIRES a web server** to work.

**Double-clicking HTML files will NOT work** due to browser CORS security restrictions.

---

## 🚀 HOW TO RUN THE WEBSITE

### ✅ Method 1: Python HTTP Server (Recommended - Works on All Systems)

#### For Python 3.x:
```powershell
# Navigate to your project folder
cd "d:\Nattu Sakarai"

# Start Python HTTP server on port 8000
python -m http.server 8000
```

#### For Python 2.x (if you have older Python):
```powershell
# Navigate to your project folder
cd "d:\Nattu Sakarai"

# Start Python HTTP server on port 8000
python -m SimpleHTTPServer 8000
```

#### Then Open in Browser:
```
http://localhost:8000
```

The homepage will load automatically (index.html). Click any navigation link!

---

### ✅ Method 2: VS Code Live Server Extension

1. **Install Extension**: 
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Install "Live Server" by Ritwick Dey

2. **Run Website**:
   - Right-click on `index_new.html` (or `index.html` after conversion)
   - Select "Open with Live Server"
   - Website opens automatically in your browser!

3. **Bonus**: Live Server automatically refreshes when you make changes!

---

### ✅ Method 3: Node.js HTTP Server

If you have Node.js installed:

```powershell
# Install http-server globally (one-time)
npm install -g http-server

# Navigate to your project
cd "d:\Nattu Sakarai"

# Start server
http-server -p 8000
```

Then open: `http://localhost:8000`

---

### ✅ Method 4: PHP Built-in Server

If you have PHP installed:

```powershell
# Navigate to your project
cd "d:\Nattu Sakarai"

# Start PHP server
php -S localhost:8000
```

Then open: `http://localhost:8000`

---

## 📝 HOW TO EDIT NAVBAR & FOOTER

### 🎯 NOW IT'S SUPER EASY!

**To edit the Navbar:**
- Open: `templates/navbar.html`
- Edit menu items, logo, links
- Save file
- Refresh browser - ALL pages updated automatically!

**To edit the Footer:**
- Open: `templates/footer.html`
- Edit footer content, social links, contact info
- Save file
- Refresh browser - ALL pages updated automatically!

### Example: Changing Navigation Menu

Edit `templates/navbar.html`:

```html
<ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link" href="index.html">Home</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="about.html">About Us</a>
    </li>
    <!-- ADD NEW MENU ITEM -->
    <li class="nav-item">
        <a class="nav-link" href="services.html">Services</a>
    </li>
    <!-- existing items... -->
</ul>
```

**Save → Refresh Browser → Done!** All pages now have the new menu item!

---

## 📁 NEW PROJECT STRUCTURE

```
Nattu Sakarai/
│
├── 📄 index.html              ← Homepage (old version with embedded navbar/footer)
├── 📄 index_new.html          ← Homepage (NEW version with includes)
├── 📄 about.html              ← About page (old version)
├── 📄 products.html           ← Products page (old version)
├── 📄 gallery.html            ← Gallery page (old version)
├── 📄 contact.html            ← Contact page (old version)
│
├── 📁 templates/              ← EDIT THESE TO CHANGE NAVBAR/FOOTER ON ALL PAGES!
│   ├── navbar.html            ⭐ EDIT THIS to change navigation everywhere
│   ├── footer.html            ⭐ EDIT THIS to change footer everywhere
│   ├── header.html            (old component file)
│   └── (other old template files)
│
├── 📁 assets/
│   ├── 📁 css/
│   │   └── styles.css
│   ├── 📁 js/
│   │   ├── main.js            (main functionality)
│   │   └── includeHTML.js     ⭐ NEW! Loads navbar & footer
│   └── 📁 images/
│       ├── logo.svg
│       └── gallery/
│
└── 📁 Documentation files
```

---

## 🔄 CONVERTING OTHER PAGES

To convert `about.html`, `products.html`, `gallery.html`, `contact.html` to use the new include system:

### Step 1: Add includeHTML.js script in HEAD section

```html
<head>
    <!-- ... other head content ... -->
    
    <!-- Include HTML System - MUST be loaded BEFORE main.js -->
    <script src="assets/js/includeHTML.js"></script>
</head>
```

### Step 2: Replace Embedded Header

**Find this (lines ~24-70):**
```html
<!-- Header -->
<header class="site-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-cream">
        <!-- entire navbar HTML... -->
    </nav>
</header>
```

**Replace with:**
```html
<!-- Header/Navbar - Loaded from templates/navbar.html -->
<div data-include="templates/navbar.html"></div>
```

### Step 3: Replace Embedded Footer

**Find this (lines ~240-330):**
```html
<!-- Footer -->
<footer class="site-footer">
    <!-- entire footer HTML... -->
</footer>

<!-- Back to Top Button -->
<button id="backToTop" class="btn-back-to-top" aria-label="Back to top">
    <i class="fas fa-arrow-up"></i>
</button>
```

**Replace with:**
```html
<!-- Footer - Loaded from templates/footer.html -->
<div data-include="templates/footer.html"></div>
```

### Step 4: Test

```powershell
python -m http.server 8000
```

Open `http://localhost:8000/about.html` and verify navbar/footer load!

---

## ✅ WHAT'S FIXED

### 1. Navigation Fixed ✅
- All pages now link to `index.html` instead of `home.html`
- Clicking "Home" button goes to correct page

### 2. Navbar Isolated ✅
- File: `templates/navbar.html`
- Edit once → Updates all pages
- Easy to modify menu items, logo, branding

### 3. Footer Isolated ✅
- File: `templates/footer.html`
- Edit once → Updates all pages
- Easy to change contact info, social links

### 4. Include System Created ✅
- File: `assets/js/includeHTML.js`
- Automatically loads navbar and footer
- Works with any element: `<div data-include="path/to/file.html"></div>`

### 5. Active Page Highlighting ✅
- Updated `assets/js/main.js`
- Automatically highlights current page in navbar
- Works after dynamic content loads

---

## 🎨 CUSTOMIZATION EXAMPLES

### Example 1: Change Company Name

Edit `templates/navbar.html`:
```html
<h1 class="brand-name mb-0">Your Company Name</h1>
<p class="brand-tagline mb-0">Your Tagline Here</p>
```

### Example 2: Update Contact Information

Edit `templates/footer.html`:
```html
<li class="mb-2">
    <i class="fas fa-phone me-2"></i>
    <a href="tel:+919999999999">+91 99999 99999</a>
</li>
<li class="mb-2">
    <i class="fas fa-envelope me-2"></i>
    <a href="mailto:yourmail@example.com">yourmail@example.com</a>
</li>
```

### Example 3: Add New Social Media Link

Edit `templates/footer.html`:
```html
<div class="social-links mt-3">
    <!-- existing social links... -->
    
    <!-- ADD THIS: -->
    <a href="https://youtube.com/yourchannel" class="social-icon me-3" aria-label="YouTube">
        <i class="fab fa-youtube"></i>
    </a>
</div>
```

---

## 🐛 TROUBLESHOOTING

### Problem: Navbar/Footer Not Showing

**Cause**: Not using a web server
**Solution**: Start Python HTTP server as described above

### Problem: Navigation Not Highlighting Active Page

**Cause**: JavaScript not loaded after includes
**Solution**: Already fixed in `assets/js/main.js` - listens for `htmlIncludesLoaded` event

### Problem: Console Error "Failed to fetch"

**Cause**: File path incorrect or file doesn't exist
**Solution**: 
- Check path in `data-include` attribute
- Make sure `templates/navbar.html` and `templates/footer.html` exist
- Use relative paths from the HTML file location

---

## 📊 COMPARISON: Old vs New

### OLD STRUCTURE (Embedded):
- ❌ Edit navbar: Must edit ALL 5 HTML files
- ❌ Edit footer: Must edit ALL 5 HTML files
- ❌ Risk of inconsistencies between pages
- ✅ Works without server (double-click HTML)

### NEW STRUCTURE (Includes):
- ✅ Edit navbar: Edit ONE file (`templates/navbar.html`)
- ✅ Edit footer: Edit ONE file (`templates/footer.html`)
- ✅ Guaranteed consistency across all pages
- ✅ Professional development practice
- ⚠️ Requires web server to run

---

## 🎯 RECOMMENDATION

**For Development (Making Changes):**
- Use the NEW structure (includes)
- Run with Python HTTP server or VS Code Live Server
- Easy to edit and maintain

**For Simple Demo (No Server Available):**
- Use old structure (embedded)
- Can double-click HTML files
- But harder to maintain

**For Production (Real Website):**
- Use NEW structure
- Deploy to real web server
- Best practice and most maintainable

---

## 📝 NEXT STEPS

1. **Test index_new.html** with Python HTTP server
2. **If it works**, convert other pages (about, products, gallery, contact)
3. **Once all converted**, rename:
   - `index.html` → `index_old.html` (backup)
   - `index_new.html` → `index.html` (new version)
4. **Always run with web server** for development

---

## 💡 PRO TIP

Add this to your VS Code `settings.json` for Live Server:

```json
{
    "liveServer.settings.port": 8000,
    "liveServer.settings.root": "/",
    "liveServer.settings.CustomBrowser": "chrome"
}
```

Then right-click any HTML file → "Open with Live Server" → Instant preview!

---

**✨ Now you can easily modify navbar and footer in one place!**

Questions? Check the converted `index_new.html` as a reference example.

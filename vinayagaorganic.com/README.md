# Nattu Sakkarai - Traditional Jaggery Exporter Website

A professional, responsive static website for Nattu Sakkarai, a traditional jaggery exporter company.

## 🌟 Project Overview

This is a 5-page static website built with HTML5, CSS3, JavaScript, and Bootstrap 5. The website showcases traditional jaggery products with a focus on quality, authenticity, and export capabilities.

## 📁 Project Structure

```
Nattu Sakarai/
│
├── css/
│   └── styles.css              # Custom CSS with theme variables and responsive design
│
├── js/
│   └── main.js                 # JavaScript for interactive features
│
├── image/                      # Images folder (to be populated)
│   ├── logo.png               # Company logo
│   ├── hero-jaggery.jpg       # Hero section image
│   ├── product-*.jpg          # Product images
│   ├── gallery/               # Gallery images subfolder
│   └── ...
│
└── templates/
    ├── header.html            # Reusable header component
    ├── footer.html            # Reusable footer component
    ├── index.html             # Home page
    ├── about.html             # About Us page
    ├── product.html           # Products page
    ├── gallery.html           # Gallery page
    └── contact.html           # Contact page
```

## 🎨 Design Features

### Color Scheme
- **Primary Color**: Saddle Brown (#8B4513) - represents jaggery
- **Secondary Color**: Chocolate (#D2691E)
- **Accent Color**: Gold (#FFD700)
- **Background**: Cream (#F5E6D3) - matches the header screenshot

### Key Features
✅ Fully responsive design (mobile, tablet, desktop)
✅ Bootstrap 5 framework for consistency
✅ Reusable header and footer components
✅ Smooth scrolling and animations
✅ Back-to-top button
✅ Contact form with validation
✅ Gallery with filtering functionality
✅ SEO-friendly structure
✅ Font Awesome icons
✅ Professional UI/UX design

## 📄 Pages

### 1. Home (index.html)
- Hero section with CTA
- About preview
- Products showcase
- Health benefits section
- Call-to-action

### 2. About Us (about.html)
- Company story
- Mission & Vision
- Core values
- Why choose us
- Team section

### 3. Products (product.html)
- Pure Jaggery
- Organic Jaggery
- Palm Jaggery
- Jaggery Powder
- Jaggery Cubes
- Product features and specifications

### 4. Gallery (gallery.html)
- Production process images
- Product showcase
- Farm & fields
- Team photos
- Filter functionality
- Video section

### 5. Contact (contact.html)
- Contact information cards
- Contact form with validation
- Google Maps integration
- Business hours
- FAQ section

## 🚀 How to Run

1. **Open the website:**
   - Navigate to the `templates` folder
   - Open `index.html` in a web browser

2. **For local development with live server:**
   ```bash
   # If you have VS Code with Live Server extension
   # Right-click on index.html and select "Open with Live Server"
   ```

3. **For production deployment:**
   - Upload all files maintaining the folder structure
   - Ensure all file paths are correct
   - Update image paths with actual product images

## 📦 Dependencies

All dependencies are loaded via CDN:
- **Bootstrap 5.3.0** - CSS framework
- **Font Awesome 6.4.0** - Icons
- No additional npm packages required

## 🖼️ Image Requirements

To complete the website, add the following images to the `image/` folder:

### Main Images
- `logo.png` - Company logo (circular, 50x50px recommended)
- `hero-jaggery.jpg` - Hero section image
- `about-preview.jpg` - About section preview
- `our-story.jpg` - About page story image

### Product Images
- `product-pure-jaggery.jpg`
- `product-organic-jaggery.jpg`
- `product-palm-jaggery.jpg`
- `product-jaggery-powder.jpg`
- `product-jaggery-cubes.jpg`

### Gallery Images (in `image/gallery/` subfolder)
- `production-1.jpg` to `production-4.jpg`
- `product-1.jpg` to `product-4.jpg`
- `farm-1.jpg` to `farm-3.jpg`
- `team-1.jpg` to `team-3.jpg`

### Team Images
- `team-member-1.jpg` to `team-member-3.jpg`

## 🔧 Customization

### Update Contact Information
Edit these files with actual business details:
- `templates/footer.html` - Footer contact info
- `templates/contact.html` - Contact page details

### Update Colors
Modify CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #8B4513;
    --secondary-color: #D2691E;
    --accent-color: #FFD700;
    --cream-bg: #F5E6D3;
}
```

### Update Content
All content is in HTML files - simply edit the text in respective pages.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- Mobile: < 576px
- Tablet: 576px - 991px
- Desktop: > 992px

## ✨ Code Reusability

The website uses component-based architecture:
- **Header component** (`header.html`) - Loaded dynamically on all pages
- **Footer component** (`footer.html`) - Loaded dynamically on all pages
- **Shared CSS** - All pages use the same stylesheet
- **Shared JS** - Common functionality in `main.js`

## 🔄 Future Enhancements

Consider adding:
- [ ] Backend integration for contact form
- [ ] Blog/News section
- [ ] Shopping cart functionality
- [ ] Multi-language support
- [ ] Product search and filter
- [ ] Customer testimonials
- [ ] Live chat integration
- [ ] Newsletter subscription

## 📞 Support

For any issues or questions regarding this website:
- Email: info@nattusakkarai.com
- Phone: +91 98765 43210

## 📝 License

This website is proprietary to Nattu Sakkarai. All rights reserved.

---

**Developed by**: Professional Web Developer
**Tech Stack**: HTML5, CSS3, JavaScript, Bootstrap 5
**Date**: October 2025
**Version**: 1.0.0

# Kashi Chaudhary — Professional Portfolio

A modern, interactive, full-featured portfolio website showcasing professional work, skills, and expertise. Built with vanilla HTML, CSS, and JavaScript with smooth animations and a responsive design.

## 📋 About This Project

This is a professionally designed portfolio website for **Kashi Chaudhary**, a full-stack developer with expertise in web development, mobile applications, and cloud technologies. The site features:

- **Interactive Hero Section** — Welcome intro with animated multi-language greetings (30+ languages)
- **About Section** — Professional background and introduction
- **Skills Showcase** — Visual skill badges featuring:
  - Frontend: HTML5, CSS3, JavaScript, React, Angular, Tailwind CSS
  - Backend: Node.js, FastAPI, Python
  - Databases: MongoDB
  - Tools & DevOps: Docker, Git
- **Portfolio Projects** — Featured project cards including:
  - **SikshyaSetu** — Smart College Management System
  - **Twinkle Lady** — E-commerce Platform
  - **QR Attendance System** — Attendance tracking solution
- **Contact Form** — EmailJS-powered contact form with real-time validation
- **Social Links** — Connected profiles (GitHub, LinkedIn, Instagram, Facebook)
- **Smooth Animations** — Scroll-triggered animations using Intersection Observer
- **Particle Effects** — Canvas-based particle animations in contact and footer sections
- **Fully Responsive** — Mobile-first design optimized for all devices

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Animations** | Anime.js, Custom Canvas (Particles) |
| **Icons** | Iconify (30,000+ icon library) |
| **Fonts** | Google Fonts (Poppins, Roboto) |
| **Form Service** | EmailJS |
| **Responsive** | CSS Media Queries, Mobile-first |

## 📂 Project Structure

```
Portfolio/
├── index.html                    # Main portfolio page (2745 lines)
├── email-template-updated.html   # Email template
├── package.json                  # Project dependencies (anime.js)
├── package-lock.json
├── .gitignore                    # Git ignore rules
├── README.md                     # This file
├── assest/                       # Images and assets
│   ├── Back.jpg                  # Hero background
│   ├── footer.jpg                # Footer background
│   ├── logo.png                  # Logo
│   ├── Astra.png                 # Astronaut illustration
│   ├── avator.png                # Avatar image
│   └── ...other assets
└── .vscode/                      # VS Code settings
```

## 🚀 Get Started Locally

### Prerequisites
- Python 3+ OR Node.js

### Option A — Python (Recommended for quick preview)
```bash
cd "/Users/macbook/Desktop/untitled folder/Project/Portfolio"
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Option B — Node.js with `serve`
```bash
cd "/Users/macbook/Desktop/untitled folder/Project/Portfolio"
npm install
npx serve -s .
```

### Option C — Direct file open
```bash
open index.html
```
(Note: Some features work better when served over `http://` rather than opening the file directly.)

Press `Ctrl+C` to stop the server.

## ✨ Key Features

### 1. **Interactive Intro Animation**
- Displays 30+ greetings in different languages
- 10-second intro sequence before main content
- Skip button available

### 2. **Scroll-Triggered Animations**
- Fade-in-up effects for sections
- Intersection Observer for performance
- Smooth navigation with scroll behavior

### 3. **Sticky Navigation Bar**
- Fixed header with semi-transparent backdrop blur
- Scroll detection for dynamic styling
- Smooth scroll to anchor links

### 4. **Contact Form with Validation**
- Real-time field validation
- EmailJS integration for email delivery
- Success/error messaging
- Service selection dropdown
- Budget input field

### 5. **Responsive Design**
- Mobile-first approach
- Touch device optimizations
- Landscape mode support
- Accessible focus styles
- Min 44px tap targets

### 6. **Particle Effects**
- Custom canvas-based particle systems
- Contact section: floating particles
- Footer section: bottom-rising particles
- Performance-optimized animations

## 📧 Email Configuration

The contact form uses **EmailJS** to send messages directly to your inbox.

### Setup EmailJS:
1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with variables:
   - `{{to_email}}` → kashichaudhary2002@gmail.com
   - `{{name}}`, `{{email}}`, `{{service}}`, `{{budget}}`, `{{idea}}`
4. Copy your **Public Key** and **Service ID**
5. Update the config in `index.html` (line ~2470):
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY');
   ```
   And the template references:
   ```javascript
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
   ```

## 🎨 Customization

### Change Colors
Open `index.html` and search for CSS variables or hex colors to update the color scheme.

### Update Content
- **Name/Title**: Change "My Portfolio" in the `<title>` tag
- **Hero Text**: Update the hero section text
- **Skills**: Add/remove skill badges in the skills grid
- **Projects**: Modify project cards in the projects section
- **Social Links**: Update href attributes in the footer

### Rename Assets Folder
The folder is currently named `assest/` (typo). To rename:
1. Rename the folder to `assets/`
2. Find and replace all `assest/` with `assets/` in `index.html`

## 🌐 Live Demo

**View the live portfolio:**  
🔗 **[https://kashichaudhary.com.np/](https://kashichaudhary.com.np/)**

Or access directly via GitHub Pages (if deployed):  
🔗 **[GitHub Repository](https://github.com/Mr-strangerX11/Kashi_Chaudhary)**

## 📱 Social Profiles

Connect with Kashi Chaudhary:
- **GitHub**: [@Mr-strangerX11](https://github.com/Mr-strangerX11)
- **LinkedIn**: [@stranger-x21](https://linkedin.com/in/stranger-x21)
- **Instagram**: [@_stranger__x77](https://www.instagram.com/_stranger__x77)
- **Facebook**: [@Vibecoderx21](https://www.facebook.com/Vibecoderx21)

## 🚀 Performance Tips

### Optimize Images
```bash
# Install WebP converter (macOS)
brew install webp

# Convert images to WebP
cwebp assest/Back.jpg -q 80 -o assest/Back.webp
```

### Run Lighthouse Audit
```bash
npm install -g lighthouse
lighthouse http://localhost:8000 --view
```

### Recommendations
- [ ] Convert large images to WebP format
- [ ] Add `srcset` for responsive images
- [ ] Minify CSS and JavaScript in production
- [ ] Add favicon (favicon.ico)
- [ ] Add SEO meta tags (Open Graph, Twitter Card)
- [ ] Test accessibility with Lighthouse

## 🔧 Future Enhancements

- [ ] Dark/Light mode toggle
- [ ] Blog section for articles
- [ ] Case studies with detailed project info
- [ ] Video background optimization
- [ ] Progressive Web App (PWA) features
- [ ] Internationalization (i18n) support
- [ ] CMS integration for dynamic content

## 📜 License

This portfolio is custom-built for Kashi Chaudhary. Feel free to use this as inspiration for your own portfolio!

## 🤝 Contributing

For suggestions or bug reports, please open an issue on [GitHub](https://github.com/Mr-strangerX11/Kashi_Chaudhary).

---

**Built with ❤️ by Kashi Chaudhary**  
*"Success is when preparation meets opportunity."*


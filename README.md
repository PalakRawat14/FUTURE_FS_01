# Personal Professional Portfolio Website

**Internship Track:** Full Stack Web Development  
**Repository Name:** FUTURE_FS_01  
**Author:** Palak Rawat  

---

## Objective

Build a responsive, modern, and professional personal portfolio website using React and Vite to showcase skills, projects, education, certifications, and contact information — ready for internship submission and live deployment.

---

## Features

- Responsive design (desktop, tablet, mobile)
- Fixed glassmorphism navbar with smooth scrolling and mobile hamburger menu
- Hero section with gradient name text, animated avatar, and stat cards
- About section with glassmorphism cards and personal details
- Skills section with categorized cards and technology icons (react-icons)
- Projects section with glassmorphism cards, image placeholders, and GitHub links
- Education card with icon and professional layout
- Certifications cards with themed icons (AWS, Google Cloud, etc.)
- Contact form with client-side validation and success feedback
- Download Resume button
- Scroll-to-top button
- Purple/blue gradient accent color scheme on dark navy background
- Active section highlighting in navbar with underline effect
- SEO-friendly meta tags and semantic HTML
- Accessibility support (aria labels, focus-visible, semantic structure)
- CSS animations and transitions throughout
- Ready for deployment on Vercel / Netlify

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI library |
| Vite 8 | Build tool and dev server |
| JavaScript (JSX) | Language |
| Plain CSS | Styling (no frameworks) |
| react-icons | Technology icons for skills and sections |
| Google Fonts (Inter) | Typography |

---

## Folder Structure

```
FUTURE_FS_01/
├── public/
│   ├── favicon.svg
│   └── Palak_Rawat_Resume.pdf    ← Add your resume here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Education.jsx / .css
│   │   ├── Certifications.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   └── ScrollToTop.jsx / .css
│   ├── data/
│   │   └── portfolioData.js       ← All personal content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                  ← Global styles
├── index.html
├── package.json
├── vite.config.js
├── vercel.json                    ← Vercel deployment config
└── README.md
```

---

## Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/FUTURE_FS_01.git

# Navigate to the project directory
cd FUTURE_FS_01

# Install dependencies
npm install
```

## How to Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## Deployment

### Deploy on Vercel (Recommended)

1. Push the repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel will auto-detect Vite as the framework.
4. Click **Deploy** — no additional configuration needed.

### Deploy on Netlify

1. Push the repository to GitHub.
2. Go to [netlify.com](https://netlify.com) and import the repository.
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Click **Deploy**.

---

## Screenshots

<!-- Add screenshots here once deployed -->

| Section | Preview |
|---|---|
| Hero | _screenshot_ |
| About | _screenshot_ |
| Skills | _screenshot_ |
| Projects | _screenshot_ |
| Education | _screenshot_ |
| Certifications | _screenshot_ |
| Contact | _screenshot_ |

---

## Links

- **Live Demo:** [`https://your-live-demo-url.vercel.app`](https://your-live-demo-url.vercel.app) <!-- Update this -->
- **GitHub Repository:** [`https://github.com/PalakRawat14/FUTURE_FS_01`](https://github.com/PalakRawat14/FUTURE_FS_01) <!-- Update this if different -->

---

## Final Submission Checklist

- [ ] GitHub repository is public
- [ ] Repository name is **FUTURE_FS_01**
- [ ] Resume file (`Palak_Rawat_Resume.pdf`) added to the `public/` folder
- [ ] Live deployed link added to README and portfolio (update `portfolioData.js` if needed)
- [ ] LinkedIn and GitHub profile links updated in `src/data/portfolioData.js`
- [ ] Screenshots added to README
- [ ] Project submitted through the official internship portal

---

## Author

**Palak Rawat**  
Full-Stack Developer & B.Tech CSE Student  
Email: rawatpalak140@gmail.com  
GitHub: [https://github.com/PalakRawat14](https://github.com/PalakRawat14)  
LinkedIn: [https://www.linkedin.com/in/palak-rawat-517903287/](https://www.linkedin.com/in/palak-rawat-517903287/)

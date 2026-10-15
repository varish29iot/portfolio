# Varish Shukla — IoT Portfolio Website

> **Modern, Responsive, Premium Personal Portfolio for Varish Shukla**  
> *B.Tech in Internet of Things (IoT) • Aspiring IoT Developer • Freelance & Technology Solutions*

---

## 🌟 Overview & Highlights

This website was built to present **Varish Shukla** as an emerging IoT developer and student with credibility, polish, and architectural elegance.

- **Zero Build Complexity:** 100% runnable out of the box with pure semantic HTML5, modern CSS3, and responsive ES6 JavaScript. No broken dependencies, Node version conflicts, or build pipelines required.
- **Truthful & Transparent:** Strict adherence to verified facts. No fabricated testimonials, fake work experiences, or unverified skill percentages.
- **Centralized Configuration (`config.js`):** Easily update your personal details, college name, project links, and contact channels in one readable file without touching HTML.
- **Interactive Project Showcase:** High-fidelity interactive SVG schematics and an accessible detail modal dialog for:
  1. *Smart Plant Watering System*
  2. *Smart Water Leakage Detection System*
- **Accessible & Responsive:** Fully responsive across mobile (375px), tablet (768px), laptop (1024px), and desktop (1440px+). Includes keyboard focus rings, ARIA dialogs, and `prefers-reduced-motion` support.
- **Functional Contact System:** Includes client-side field validation, bot protection honeypot, and automatic graceful fallback to pre-filled email client (`mailto:`) or direct API integration (Formspree / Web3Forms).

---

## 🚀 How to Run Locally

You can run this website on your local machine using any of the following methods:

### Method 1: Python Built-In HTTP Server (Recommended)
Open your terminal in this directory (`/Users/varishshukla/Downloads/Portfolio`) and run:

```bash
python3 -m http.server 8000
```

Then open your browser at:
```
http://localhost:8000
```

### Method 2: Direct Browser Opening
Simply double-click `index.html` (or drag and drop it into Safari, Chrome, Edge, or Firefox).

### Method 3: VS Code Live Server Extension
Right-click `index.html` inside VS Code and select **"Open with Live Server"**.

---

## 📝 Checklist: What Varish Should Update Before Publishing

Open `config.js` in any text editor. Look for the following fields and replace the bracketed placeholders with your real details:

### 1. Personal & Contact Details
- [ ] `personal.contact.email`: Replace `"[Your email address]"` with your actual email (e.g., `varish.shukla@example.com`) and set `isEmailConfigured: true`.
- [ ] `personal.contact.githubUrl`: Replace `"[Your GitHub URL]"` with your GitHub profile link and set `isGithubConfigured: true`.
- [ ] `personal.contact.linkedinUrl`: Replace `"[Your LinkedIn URL]"` with your LinkedIn profile link and set `isLinkedinConfigured: true`.

### 2. Education Details
- [ ] `education.institution`: Replace `"[Add institution name]"` with your university / college name and set `isInstitutionConfigured: true`.
- [ ] `education.studyPeriod`: Replace `"[Add start year – expected graduation year]"` (e.g., `"2023 – 2027"`) and set `isPeriodConfigured: true`.
- [ ] `education.coursework`: Add completed subjects (e.g., `"Microcontrollers & Interfacing"`, `"Sensor Networks"`, `"Embedded C"`).

### 3. Projects Details
In `config.js`, under each project in the `projects` array:
- [ ] **Smart Plant Watering System**:
  - Add your specific problem statement.
  - Add verified hardware used (e.g., ESP32, Capacitive Soil Moisture Sensor, 5V Relay).
  - Add verified software/libraries (e.g., Arduino IDE, C++, FreeRTOS).
  - Update `repositoryUrl` with your GitHub repo link and set `isRepoConfigured: true`.
  - Update `liveDemoUrl` if you have a video/demo link and set `isDemoConfigured: true`.
- [ ] **Smart Water Leakage Detection System**:
  - Add your specific problem statement.
  - Add verified hardware used (e.g., YF-S201 Flow Sensor, Liquid Level Probe, Buzzer).
  - Update `repositoryUrl` with your GitHub repo link and set `isRepoConfigured: true`.
  - Update `liveDemoUrl` if you have a video/demo link and set `isDemoConfigured: true`.

### 4. Technical Toolkit (Skills)
Once you are ready to display verified tools and technologies:
- Set `skills.isConfigured: true` in `config.js`.
- Add your verified programming languages and hardware platforms to `skills.verifiedSkills`.

---

## 📬 How to Set Up the Contact Form Backend

The contact form currently has a **smart instant fallback**:
- When visitors submit the form, it validates all fields and immediately offers a 1-click **"Open Email Client"** button pre-filled with the visitor's subject, name, and message addressed to `varishshukla.iot@gmail.com`.

### To receive submissions directly to your inbox without opening an email app:

#### Option A: Using Formspree (Free — 50 submissions/month)
1. Go to [formspree.io](https://formspree.io/) and create a free account.
2. Click **"+ New Form"**, give it a name (e.g., "Portfolio Contact"), and enter your email.
3. Formspree will provide a URL like `https://formspree.io/f/xyzabclm`.
4. Open `config.js`, locate `contactSettings.formEndpoint`, and paste the URL:
   ```javascript
   formEndpoint: "https://formspree.io/f/xyzabclm",
   ```
5. Save the file. Form submissions will now arrive directly in your inbox!

#### Option B: Using Web3Forms (Free — Unlimited)
1. Go to [web3forms.com](https://web3forms.com/) and enter your email to get an access key.
2. In `config.js`, set:
   ```javascript
   formEndpoint: "https://api.web3forms.com/submit",
   ```
   *(Or adjust payload to include your Access Key).*

---

## 🌐 How to Deploy for Free in 60 Seconds

### Deploy on GitHub Pages
1. Create a new GitHub repository named `varishshukla.github.io` (or `portfolio`).
2. Push this folder to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial launch of Varish Shukla IoT portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In GitHub, go to **Settings > Pages > Branch**, select `main`, and click **Save**.
4. Your website will be live at `https://<your-username>.github.io/<repo-name>/`.

### Deploy on Vercel or Netlify
- Drag and drop this folder directly into the [Netlify Drop](https://app.netlify.com/drop) dashboard or import the repository in [Vercel](https://vercel.com).
- No build settings needed — it deploys instantly in 5 seconds!

---

## 🛡️ Structure & File Map

```
Portfolio/
├── index.html        # Main semantic, accessible single-page layout
├── config.js         # Centralized configuration and portfolio data
├── styles.css        # Midnight navy design system & responsive styling
├── app.js            # Interactive logic, modals, form handling & SVGs
├── 404.html          # Custom styled 404 error page
├── favicon.svg       # Custom VS monogram with connected IoT nodes
├── robots.txt        # Search engine crawler permissions
├── sitemap.xml       # SEO sitemap
└── README.md         # Documentation & setup instructions
```

---

*Designed with care for Varish Shukla.*

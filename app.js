/**
 * ===================================================================
 * VARISH SHUKLA - PORTFOLIO INTERACTIVE LOGIC (app.js)
 * Clean, Accessible, Performance-Optimized Vanilla JavaScript
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure PORTFOLIO_CONFIG is loaded
  const config = window.PORTFOLIO_CONFIG || {};

  // 1. Initialize Dynamic Year in Footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Sticky Navbar Transition on Scroll
  const navbar = document.getElementById('navbar');
  const handleScrollNavbar = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScrollNavbar, { passive: true });
  handleScrollNavbar();

  // 3. Mobile Navigation Drawer Toggle & Accessibility
  const navToggleBtn = document.getElementById('nav-toggle-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileNav = (open) => {
    const shouldOpen = open !== undefined ? open : !mobileNavDrawer.classList.contains('open');
    mobileNavDrawer.classList.toggle('open', shouldOpen);
    navToggleBtn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    
    // Switch icon between hamburger and close
    const iconOpen = navToggleBtn.querySelector('.icon-menu');
    const iconClose = navToggleBtn.querySelector('.icon-close');
    if (iconOpen && iconClose) {
      iconOpen.style.display = shouldOpen ? 'none' : 'block';
      iconClose.style.display = shouldOpen ? 'block' : 'none';
    }
  };

  if (navToggleBtn && mobileNavDrawer) {
    navToggleBtn.addEventListener('click', () => toggleMobileNav());
    
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => toggleMobileNav(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNavDrawer.classList.contains('open')) {
        toggleMobileNav(false);
        navToggleBtn.focus();
      }
    });
  }

  // 4. Active Navigation Highlighting on Scroll (IntersectionObserver)
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link[data-nav-target]');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          desktopNavLinks.forEach(link => {
            const target = link.getAttribute('data-nav-target');
            if (target === currentId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }

  // 5. Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 6. Project Detail Modal Logic
  const projectModalBackdrop = document.getElementById('project-modal');
  const projectModalCloseBtn = document.getElementById('modal-close-btn');
  let lastActiveElement = null;

  const openProjectModal = (projectId) => {
    const projects = config.projects || [];
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    lastActiveElement = document.activeElement;

    // Populate Modal Content
    document.getElementById('modal-category-badge').textContent = project.category;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-overview-text').textContent = project.details.overview;
    
    // Problem Statement
    const probEl = document.getElementById('modal-problem-text');
    probEl.textContent = project.details.problemStatement;
    markPlaceholderNotice(probEl, project.details.problemStatement);

    // How It Works
    const howEl = document.getElementById('modal-how-text');
    howEl.textContent = project.details.howItWorks;
    markPlaceholderNotice(howEl, project.details.howItWorks);

    // Hardware
    const hwEl = document.getElementById('modal-hardware-text');
    hwEl.textContent = project.details.hardwareUsed;
    markPlaceholderNotice(hwEl, project.details.hardwareUsed);

    // Software
    const swEl = document.getElementById('modal-software-text');
    swEl.textContent = project.details.softwareTechnologies;
    markPlaceholderNotice(swEl, project.details.softwareTechnologies);

    // Contribution
    const contEl = document.getElementById('modal-contribution-text');
    contEl.textContent = project.details.myContribution;
    markPlaceholderNotice(contEl, project.details.myContribution);

    // Media
    const mediaEl = document.getElementById('modal-media-text');
    mediaEl.textContent = project.details.mediaPlaceholder;

    // Visual illustration in modal
    const visualBanner = document.getElementById('modal-visual-container');
    if (visualBanner) {
      visualBanner.innerHTML = getProjectSvgIllustration(project.visualType, 'modal');
    }

    // Repository & Live Demo Buttons
    const repoBtn = document.getElementById('modal-repo-btn');
    const demoBtn = document.getElementById('modal-demo-btn');
    const linksNotice = document.getElementById('modal-links-pending-notice');

    let hasAnyLink = false;

    if (project.details.isRepoConfigured && project.details.repositoryUrl && !project.details.repositoryUrl.includes('[')) {
      repoBtn.href = project.details.repositoryUrl;
      repoBtn.style.display = 'inline-flex';
      hasAnyLink = true;
    } else {
      repoBtn.style.display = 'none';
    }

    if (project.details.isDemoConfigured && project.details.liveDemoUrl && !project.details.liveDemoUrl.includes('[')) {
      demoBtn.href = project.details.liveDemoUrl;
      demoBtn.style.display = 'inline-flex';
      hasAnyLink = true;
    } else {
      demoBtn.style.display = 'none';
    }

    if (!hasAnyLink && linksNotice) {
      linksNotice.style.display = 'inline-flex';
    } else if (linksNotice) {
      linksNotice.style.display = 'none';
    }

    // Show Modal
    projectModalBackdrop.classList.add('active');
    projectModalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for keyboard accessibility
    setTimeout(() => {
      if (projectModalCloseBtn) projectModalCloseBtn.focus();
    }, 50);
  };

  const closeProjectModal = () => {
    projectModalBackdrop.classList.remove('active');
    projectModalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  };

  // Helper to visually distinguish pending placeholders
  function markPlaceholderNotice(element, text) {
    if (text && text.includes('[')) {
      element.classList.add('placeholder-text');
    } else {
      element.classList.remove('placeholder-text');
    }
  }

  // Attach modal trigger listeners
  const projectActionButtons = document.querySelectorAll('[data-open-project]');
  projectActionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-open-project');
      openProjectModal(projectId);
    });
  });

  if (projectModalCloseBtn) {
    projectModalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (projectModalBackdrop) {
    projectModalBackdrop.addEventListener('click', (e) => {
      if (e.target === projectModalBackdrop) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModalBackdrop.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // 7. Contact Form Validation & Submission Handling
  const contactForm = document.getElementById('contact-form');
  const formSubmitBtn = document.getElementById('form-submit-btn');
  const formStatusAlert = document.getElementById('form-status-alert');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Clear previous error messages
      clearFormErrors();
      hideStatusAlert();

      // Check Honeypot Field (Anti-spam)
      const hpField = document.getElementById('hp_field');
      if (hpField && hpField.value.trim() !== '') {
        // Silent bot discard
        showStatusAlert('Message submitted successfully.', 'success');
        contactForm.reset();
        return;
      }

      // Collect form field values
      const nameInput = document.getElementById('user_name');
      const emailInput = document.getElementById('user_email');
      const subjectInput = document.getElementById('user_subject');
      const messageInput = document.getElementById('user_message');

      const nameVal = nameInput.value.trim();
      const emailVal = emailInput.value.trim();
      const subjectVal = subjectInput.value.trim();
      const messageVal = messageInput.value.trim();

      // Validate Fields
      let isValid = true;

      if (!nameVal || nameVal.length < 2) {
        showFieldError(nameInput, 'Please provide your full name (at least 2 characters).');
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        showFieldError(emailInput, 'Please provide a valid email address (e.g., name@domain.com).');
        isValid = false;
      }

      if (!subjectVal || subjectVal.length < 3) {
        showFieldError(subjectInput, 'Please provide a subject line (at least 3 characters).');
        isValid = false;
      }

      if (!messageVal || messageVal.length < 10) {
        showFieldError(messageInput, 'Please provide a detailed message (at least 10 characters).');
        isValid = false;
      }

      if (!isValid) {
        showStatusAlert('Please resolve the highlighted fields before submitting.', 'error');
        return;
      }

      // Submission UI state
      setFormSubmitting(true);

      const endpoint = config.contactSettings && config.contactSettings.formEndpoint;
      const targetEmail = (config.contactSettings && config.contactSettings.destinationEmail) || 'varishshukla.iot@gmail.com';

      // Check if genuine backend endpoint is configured
      if (endpoint && endpoint.trim().length > 0 && !endpoint.includes('[')) {
        try {
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              name: nameVal,
              email: emailVal,
              subject: subjectVal,
              message: messageVal
            })
          });

          if (response.ok) {
            showStatusAlert('Thank you! Your message has been sent successfully. Varish will be in touch soon.', 'success');
            contactForm.reset();
          } else {
            throw new Error('Server returned error response');
          }
        } catch (err) {
          showStatusAlert(
            `Unable to submit via online endpoint. Would you like to send via your email client instead? <br><br>
             <a class="btn btn-sm btn-secondary" style="margin-top:0.5rem;" href="${generateMailtoUrl(targetEmail, nameVal, subjectVal, messageVal)}">Launch Email Client (mailto)</a>`,
            'error'
          );
        } finally {
          setFormSubmitting(false);
        }
      } else {
        // Genuine Mailto Fallback with Pre-filled Content & Clear Setup Guide
        setTimeout(() => {
          setFormSubmitting(false);
          const mailtoUrl = generateMailtoUrl(targetEmail, nameVal, subjectVal, messageVal);
          
          showStatusAlert(
            `<strong>Ready to send via your default email application:</strong><br>
             Click the button below to launch your email client with your message pre-filled for Varish Shukla.<br><br>
             <a class="btn btn-primary btn-sm" href="${mailtoUrl}" target="_blank" rel="noopener">
               <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
               Open Email Client & Send
             </a>
             <br><br>
             <span style="font-size:0.775rem; color: var(--text-muted); font-family:var(--font-mono);">
               ℹ️ Note: To enable direct in-browser form delivery without opening an email client, configure a free Formspree or Web3Forms endpoint in <code>config.js</code>.
             </span>`,
            'info'
          );

          // Attempt opening mailto link automatically
          window.location.href = mailtoUrl;
        }, 400);
      }
    });
  }

  function generateMailtoUrl(toEmail, name, subject, message) {
    const fullBody = `Hello Varish,\n\nName: ${name}\n\nMessage:\n${message}\n\n---\nSent from Varish Shukla IoT Portfolio`;
    return `mailto:${encodeURIComponent(toEmail)}?subject=${encodeURIComponent(`[Portfolio Inquiry] ${subject}`)}&body=${encodeURIComponent(fullBody)}`;
  }

  function showFieldError(input, msg) {
    input.classList.add('error');
    const errEl = document.getElementById(`${input.id}_error`);
    if (errEl) {
      errEl.textContent = msg;
      errEl.classList.add('visible');
    }
  }

  function clearFormErrors() {
    const errorInputs = document.querySelectorAll('.form-control.error');
    errorInputs.forEach(input => input.classList.remove('error'));
    const errorMsgs = document.querySelectorAll('.field-error-msg.visible');
    errorMsgs.forEach(msg => msg.classList.remove('visible'));
  }

  function showStatusAlert(htmlContent, type) {
    if (!formStatusAlert) return;
    formStatusAlert.innerHTML = htmlContent;
    formStatusAlert.className = `form-status-alert ${type}`;
    formStatusAlert.style.display = 'block';
  }

  function hideStatusAlert() {
    if (!formStatusAlert) return;
    formStatusAlert.style.display = 'none';
  }

  function setFormSubmitting(isSubmitting) {
    if (!formSubmitBtn) return;
    formSubmitBtn.disabled = isSubmitting;
    const btnText = formSubmitBtn.querySelector('.btn-text');
    if (btnText) {
      btnText.textContent = isSubmitting ? 'Processing...' : 'Send Message';
    }
  }

  // 8. Visual Asset SVG Generator for Project Graphics
  function getProjectSvgIllustration(type, context) {
    if (type === 'plant-sensor') {
      return `
        <svg viewBox="0 0 400 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-label="Smart Plant Soil Moisture and Irrigation Sensor Node Diagram">
          <defs>
            <linearGradient id="plant-grad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#059669"/>
              <stop offset="100%" stop-color="#34D399"/>
            </linearGradient>
            <linearGradient id="water-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#38BDF8"/>
              <stop offset="100%" stop-color="#0284C7"/>
            </linearGradient>
            <linearGradient id="chip-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1E293B"/>
              <stop offset="100%" stop-color="#0F172A"/>
            </linearGradient>
          </defs>

          <!-- Soil Base Container -->
          <rect x="40" y="140" width="150" height="65" rx="8" fill="#1C1917" stroke="#44403C" stroke-width="1.5"/>
          <path d="M50 160 Q65 155 80 160 T110 160 T140 160 T170 160" stroke="#78716C" stroke-width="1" stroke-dasharray="3 3" fill="none"/>
          <text x="115" y="185" fill="#A8A29E" font-size="10" font-family="monospace" text-anchor="middle">SOIL MEDIUM</text>

          <!-- Plant Foliage -->
          <path d="M115 140 Q115 95 105 75 Q118 70 125 55 Q132 75 140 85 Q130 95 125 140 Z" fill="url(#plant-grad)" opacity="0.95"/>
          <path d="M105 105 C75 90 75 120 108 122" fill="url(#plant-grad)" opacity="0.85"/>
          <path d="M123 90 C155 75 155 105 123 108" fill="url(#plant-grad)" opacity="0.85"/>

          <!-- Soil Moisture Capacitive Probe -->
          <rect x="70" y="125" width="16" height="55" rx="3" fill="#0D9488" stroke="#2DD4BF" stroke-width="1.2"/>
          <line x1="78" y1="130" x2="78" y2="175" stroke="#134E4A" stroke-width="2"/>
          <circle cx="78" cy="120" r="3" fill="#38BDF8"/>

          <!-- Water Droplets Flow -->
          <g class="floating-element">
            <path d="M165 95 C165 95 158 108 158 113 A7 7 0 0 0 172 113 C172 108 165 95 165 95 Z" fill="url(#water-grad)"/>
            <path d="M182 115 C182 115 177 125 177 129 A5 5 0 0 0 187 129 C187 125 182 115 182 115 Z" fill="url(#water-grad)" opacity="0.75"/>
          </g>

          <!-- Telemetry Circuit Traces to Microcontroller -->
          <path d="M78 120 L78 60 L240 60 L240 85" fill="none" stroke="#06B6D4" stroke-width="2" class="animated-flow"/>
          <circle cx="78" cy="60" r="3" fill="#38BDF8"/>

          <!-- Microcontroller Node Box -->
          <rect x="230" y="85" width="130" height="95" rx="10" fill="url(#chip-grad)" stroke="#38BDF8" stroke-width="1.5"/>
          <rect x="245" y="100" width="100" height="28" rx="4" fill="#020617" stroke="#1E293B"/>
          <text x="295" y="118" fill="#38BDF8" font-size="10" font-family="monospace" text-anchor="middle" font-weight="bold">SOIL: 68% (OK)</text>

          <!-- Pump Control Relay Line -->
          <path d="M295 145 L295 160 L200 160" fill="none" stroke="#10B981" stroke-width="1.5" stroke-dasharray="4 2"/>
          <rect x="250" y="140" width="90" height="22" rx="4" fill="#064E3B" stroke="#10B981" stroke-width="1"/>
          <text x="295" y="155" fill="#34D399" font-size="9" font-family="monospace" text-anchor="middle">RELAY: STANDBY</text>
        </svg>
      `;
    } else {
      return `
        <svg viewBox="0 0 400 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-label="Smart Water Leakage and Flow Rate Monitoring Node Diagram">
          <defs>
            <linearGradient id="pipe-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#334155"/>
              <stop offset="50%" stop-color="#64748B"/>
              <stop offset="100%" stop-color="#1E293B"/>
            </linearGradient>
            <linearGradient id="alert-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#EF4444"/>
              <stop offset="100%" stop-color="#B91C1C"/>
            </linearGradient>
          </defs>

          <!-- Main Fluid Conduit Pipe -->
          <rect x="30" y="125" width="340" height="32" rx="6" fill="url(#pipe-grad)" stroke="#475569" stroke-width="1.5"/>
          <line x1="30" y1="141" x2="370" y2="141" stroke="#0284C7" stroke-width="4" stroke-dasharray="12 6" class="animated-flow"/>

          <!-- In-line Flow Sensor Housing (YF-S201 style) -->
          <rect x="140" y="112" width="48" height="58" rx="6" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
          <circle cx="164" cy="141" r="14" fill="#1E293B" stroke="#06B6D4" stroke-width="1.5"/>
          <!-- Turbine Blades -->
          <line x1="164" y1="130" x2="164" y2="152" stroke="#38BDF8" stroke-width="2"/>
          <line x1="153" y1="141" x2="175" y2="141" stroke="#38BDF8" stroke-width="2"/>

          <!-- Acoustic / Moisture Leak Sensor Probe -->
          <polygon points="260,157 270,178 250,178" fill="#F59E0B" stroke="#B45309" stroke-width="1.5"/>
          <line x1="260" y1="178" x2="260" y2="195" stroke="#F59E0B" stroke-width="2"/>
          <text x="260" y="208" fill="#FBBF24" font-size="9" font-family="monospace" text-anchor="middle">LEAK SENSOR</text>

          <!-- Micro-droplet leak leak simulation -->
          <circle cx="260" cy="164" r="3" fill="#38BDF8" class="floating-element"/>

          <!-- Telemetry lines to Controller -->
          <path d="M164 112 L164 65 L200 65" fill="none" stroke="#38BDF8" stroke-width="1.5" class="animated-flow"/>
          <path d="M260 157 L260 65 L220 65" fill="none" stroke="#F59E0B" stroke-width="1.5"/>

          <!-- IoT Diagnostic Controller -->
          <rect x="180" y="42" width="160" height="55" rx="8" fill="#0B132B" stroke="#06B6D4" stroke-width="1.5"/>
          <circle cx="198" cy="62" r="5" fill="#10B981"/>
          <text x="212" y="60" fill="#F8FAFC" font-size="10" font-family="monospace" font-weight="bold">FLOW: 1.8 L/MIN</text>
          <text x="212" y="74" fill="#34D399" font-size="9" font-family="monospace">STATUS: NORMAL</text>

          <!-- Alert Notification Badge -->
          <g transform="translate(295, 30)">
            <rect x="0" y="0" width="75" height="22" rx="4" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" stroke-width="1"/>
            <text x="37" y="14" fill="#F87171" font-size="8.5" font-family="monospace" text-anchor="middle" font-weight="bold">ALARM: ARMED</text>
          </g>
        </svg>
      `;
    }
  }

  // Populate inline card previews
  const plantCardImage = document.getElementById('project-img-plant');
  if (plantCardImage) {
    plantCardImage.innerHTML = getProjectSvgIllustration('plant-sensor', 'card');
  }

  const waterCardImage = document.getElementById('project-img-water');
  if (waterCardImage) {
    waterCardImage.innerHTML = getProjectSvgIllustration('water-leakage', 'card');
  }
});

/**
 * ===================================================================
 * VARISH SHUKLA - PORTFOLIO CONFIGURATION & CONTENT DATA
 * ===================================================================
 * 
 * Edit this file to update your personal details, education, projects,
 * skills, and contact information without touching any HTML or CSS!
 * 
 * Instructions:
 * - Replace placeholder values like "[Your email address]" with your real details.
 * - When you update a field, set its "isPlaceholder: false" flag if present.
 * - Empty or placeholder links will automatically be hidden or rendered
 *   with an intentional pending state to keep your portfolio looking professional.
 */

const PORTFOLIO_CONFIG = {
  // -----------------------------------------------------------------
  // 1. Personal & Brand Details
  // -----------------------------------------------------------------
  personal: {
    fullName: "VARISH SHUKLA",
    monogram: "VS",
    roleEyebrow: "IoT STUDENT • TECHNOLOGY ENTHUSIAST",
    roleTitle: "IoT Student & Aspiring IoT Developer",
    statusBadge: "Available for Freelance Projects & Collaborations",
    headline: "Exploring Ideas. Building Smarter Connected Solutions.",
    subheadline: "I'm Varish Shukla, a B.Tech student in Internet of Things, exploring practical technology projects and innovative connected solutions.",
    
    // First-person about narrative strictly adhering to verified facts
    aboutParagraphs: [
      "I'm Varish Shukla, pursuing a B.Tech in Internet of Things (IoT). I'm interested in exploring how connected technologies can help address practical, real-world challenges.",
      "My project portfolio highlights concepts around smart plant watering and water leakage detection. I focus on hands-on learning, understanding how physical sensors interface with microcontrollers, and exploring automated ways to solve everyday problems."
    ],
    
    // Contact & Social Details (Placeholders marked with isConfigured: false)
    contact: {
      email: "[Your email address]", // e.g. "varish.shukla@example.com"
      isEmailConfigured: false,       // Set to true once you enter a real email

      phone: "",                     // Optional: enter phone number if desired
      isPhoneConfigured: false,

      githubUrl: "[Your GitHub URL]", // e.g. "https://github.com/varishshukla"
      isGithubConfigured: false,     // Set to true once you enter your GitHub URL

      linkedinUrl: "[Your LinkedIn URL]", // e.g. "https://linkedin.com/in/varishshukla"
      isLinkedinConfigured: false,   // Set to true once you enter your LinkedIn URL

      resumeUrl: "",                 // Optional: e.g. "resume.pdf"
      isResumeConfigured: false,

      location: "India",
      timezone: "IST (UTC +5:30)"
    }
  },

  // -----------------------------------------------------------------
  // 2. Education & Learning Journey
  // -----------------------------------------------------------------
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    specialization: "Internet of Things (IoT)",
    institution: "[Add institution name]",
    isInstitutionConfigured: false, // Set to true after entering your college/university
    
    studyPeriod: "[Add start year – expected graduation year]",
    isPeriodConfigured: false,      // e.g. "2023 – 2027"

    status: "Currently Enrolled (Undergraduate)",

    // Verified coursework: Add courses you have completed or are taking
    coursework: [
      // Example: "Microcontrollers & Embedded Systems", "Sensor Networks"
      // Leave empty until verified.
    ],

    // Verified certifications: Add only real certifications obtained
    certifications: [
      // Example: { title: "Course Name", issuer: "Platform", year: "2024" }
      // Leave empty until verified.
    ]
  },

  // -----------------------------------------------------------------
  // 3. Areas of Interest (Academic & Technical Focus)
  // -----------------------------------------------------------------
  areasOfInterest: [
    {
      id: "connected-devices",
      title: "Connected Devices",
      subtitle: "Physical to Digital Bridges",
      description: "Exploring how physical microcontrollers, sensors, and actuators interface with communication protocols to build responsive connected ecosystems.",
      icon: "cpu"
    },
    {
      id: "smart-automation",
      title: "Smart Automation",
      subtitle: "Efficiency Through Technology",
      description: "Investigating threshold-driven and time-based automation routines that handle routine tasks like precision watering and resource optimization.",
      icon: "sliders"
    },
    {
      id: "monitoring-detection",
      title: "Monitoring & Detection",
      subtitle: "Proactive Diagnostics",
      description: "Exploring sensor-based telemetry methods to catch anomalies early — such as micro-leaks, pressure variations, or environmental shifts.",
      icon: "activity"
    }
  ],

  // -----------------------------------------------------------------
  // 4. Skills Section Configuration
  // -----------------------------------------------------------------
  skills: {
    // When false, displays the tasteful documentation note as instructed.
    // Set to true when you are ready to display verified tools and skills.
    isConfigured: false,

    documentationNotice: "My technical toolkit is being documented. Check back soon for the technologies and tools behind my projects.",

    // Populate this list once your skills are verified:
    verifiedSkills: [
      // { name: "C / C++ (Embedded)", category: "Programming" },
      // { name: "ESP32 / Arduino", category: "Hardware" },
      // { name: "MQTT / HTTP", category: "Networking" },
      // { name: "Sensors & Actuators", category: "Hardware" }
    ]
  },

  // -----------------------------------------------------------------
  // 5. Featured Projects
  // -----------------------------------------------------------------
  projects: [
    {
      id: "smart-plant-watering",
      title: "Smart Plant Watering System",
      category: "IoT / Smart Automation",
      badge: "Automation Concept",
      shortDescription: "A project focused on the idea of smarter plant watering through connected technology and automated watering concepts.",
      
      // Visual indicator / icon representation
      visualType: "plant-sensor",
      
      // Detailed Project Specifications
      details: {
        overview: "The Smart Plant Watering System investigates how soil moisture sensing and automated fluid regulation can protect plant health and conserve water resources by eliminating guesswork in irrigation.",
        problemStatement: "[Add project problem statement — e.g. Over-watering and under-watering are leading causes of plant mortality in domestic and urban agricultural settings.]",
        howItWorks: "[Describe the actual implementation — e.g. A capacitive soil moisture sensor monitors soil moisture levels; when levels fall below a designated threshold, the controller triggers a submersible pump or solenoid valve for a calibrated duration.]",
        hardwareUsed: "[Add verified components — e.g. ESP8266/ESP32 or Arduino, Capacitive Soil Moisture Sensor v1.2, 5V Relay Module, Mini 5V DC Submersible Pump, Tubing.]",
        softwareTechnologies: "[Add verified tools and languages — e.g. C/C++ (Arduino IDE), FreeRTOS, Embedded C, MQTT / Blynk (if used).]",
        myContribution: "[Describe your actual role — e.g. Designed the circuit schematic, breadboard prototype, sensor calibration routine, and threshold logic.]",
        mediaPlaceholder: "Demonstration photos and circuit schematics are pending documentation.",
        
        // Links (buttons only appear when URLs are valid and not placeholders)
        repositoryUrl: "[Add repository URL]",
        isRepoConfigured: false,
        liveDemoUrl: "[Add demo URL, if available]",
        isDemoConfigured: false
      }
    },
    {
      id: "water-leakage-detection",
      title: "Smart Water Leakage Detection System",
      category: "IoT / Monitoring",
      badge: "Detection Concept",
      shortDescription: "A project exploring how connected monitoring technology can help identify water leakage and support more informed water management.",
      
      // Visual indicator / icon representation
      visualType: "water-leakage",

      // Detailed Project Specifications
      details: {
        overview: "The Smart Water Leakage Detection System focuses on real-time fluid flow and moisture detection along piping networks, aiming to catch leaks immediately before structural damage or resource loss occurs.",
        problemStatement: "[Add project problem statement — e.g. Undetected plumbing leaks cause billions of liters of wasted water annually, alongside severe property damage and mould proliferation.]",
        howItWorks: "[Describe the actual implementation — e.g. Flow rate sensors and contact moisture probes monitor pipelines; sudden pressure drops or abnormal sustained flow trigger acoustic and wireless alert states.]",
        hardwareUsed: "[Add verified components — e.g. Flow Rate Sensor (YF-S201), Rain/Liquid Level Sensor, Buzzer Alarm, NodeMCU/ESP32 microcontroller, 16x2 I2C LCD Display.]",
        softwareTechnologies: "[Add verified tools and languages — e.g. Arduino C++, Pulse-counter interrupt algorithms, Wi-Fi telemetry reporting.]",
        myContribution: "[Describe your actual role — e.g. Assembled sensor harness, calibrated pulse rate formulas for volume calculation, and configured alarm states.]",
        mediaPlaceholder: "Flow testing footage and telemetry graphs are pending documentation.",
        
        // Links
        repositoryUrl: "[Add repository URL]",
        isRepoConfigured: false,
        liveDemoUrl: "[Add demo URL, if available]",
        isDemoConfigured: false
      }
    }
  ],

  // -----------------------------------------------------------------
  // 6. Contact Form & Freelancing Settings
  // -----------------------------------------------------------------
  contactSettings: {
    sectionHeading: "Have a Project in Mind?",
    sectionSubheading: "I'm interested in connecting with people who have practical ideas involving connected technology. If you'd like to discuss a project or collaboration, let's start a conversation.",

    // Freelance focus areas
    freelanceOpportunities: [
      "IoT Proof-of-Concept (PoC) Prototyping",
      "Sensor Integration & Microcontroller Logic",
      "Smart Automation Experiments",
      "Academic Project Collaborations"
    ],

    // To connect a genuine working form:
    // Option A: Formspree (free) -> Sign up at formspree.io and paste your endpoint here:
    // e.g., endpoint: "https://formspree.io/f/xvgowqel"
    // Option B: Web3Forms (free) -> Sign up at web3forms.com and paste your access key
    formEndpoint: "", // Leave blank to activate the smart mailto: fallback with pre-filled message

    // Destination email for fallback mailto:
    destinationEmail: "varishshukla.iot@gmail.com" // Update to your target email
  }
};

// Freeze object to prevent accidental mutation in scripts
if (typeof Object.freeze === "function") {
  Object.freeze(PORTFOLIO_CONFIG);
}

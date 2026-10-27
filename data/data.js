/*
  ALL PORTFOLIO CONTENT LIVES HERE.
  To update the site, edit the text and numbers below, save, and upload this file to GitHub.
  Keep the quotes and commas as they are.
*/
window.PORTFOLIO = {
  name: "Dhavalsinh Chavada",
  initials: "DC",
  headline: "Turning programme data into decisions across 12 states.",
  intro: "Analytics and operations professional with 20+ years of experience, 14 of them at Educational Initiatives running education programmes, dashboards and field teams.",
  roles: ["Project Manager", "M&E Lead", "Data Analyst", "Dashboard Builder", "Training & Ops"],
  availability: "Open to M&E, Operations & Support, Training & Development and Data Analytics roles · Gujarat or remote · 1-month notice",

  contact: {
    email: "dhavalsinhchavada@gmail.com",
    phone: "+91 98989 88586",
    whatsapp: "919898988586",          // country code + number, no spaces; set to "" to hide WhatsApp
    linkedin: "https://www.linkedin.com/in/dhavalsinh-chavda-660755b8",
    github: "https://github.com/dhavalsinhchavada-cmyk",
    location: "Ahmedabad, Gujarat, India",
    resume: "resume/Dhavalsinh_Chavada_Resume.pdf",
    formspreeId: ""                     // optional: paste your Formspree form ID (e.g. "xyzabcd") to receive form messages
  },

  counters: [
    { value: 20, suffix: "+", label: "years of experience" },
    { value: 12, suffix: "", label: "states covered" },
    { value: 35, suffix: "+", label: "districts" },
    { value: 250, suffix: "+", label: "schools" },
    { value: 1.5, suffix: " lakh+", label: "students reached", decimals: 1 },
    { value: 3000, suffix: "+", label: "educators trained" }
  ],

  chips: ["Power BI", "MySQL", "MongoDB", "ClickHouse", "Redash", "Zoho Analytics"],

  about: {
    story: [
      "I started in 2005 as a supervisor in community schools, worked in customer support, operations and IT, and joined Educational Initiatives in 2012 as a Junior Executive.",
      "Five promotions later I lead an 8-member Analytics & Operations Support team, building the dashboards, reports and processes that leaders and field teams rely on."
    ],
    cards: [
      { title: "Projects at scale", front: "Multi-state education programmes, run end to end.", back: "12 states, 35+ districts and 250+ schools, covering school-based and home-based learners." },
      { title: "Data to decisions", front: "Dashboards built for the person who has to decide.", back: "Many role-based dashboards, from the National Sales Head down to regional managers, the ACAD Head and field teams." },
      { title: "People and training", front: "Capacity building that reaches the classroom.", back: "3,000+ teachers, coordinators and officials trained in person, online and through webinars." }
    ]
  },

  // Tile map: the 12 programme states (codes must match the map in js/main.js)
  states: ["HP", "PB", "UK", "RJ", "UP", "BR", "MP", "CG", "AP", "GJ", "MH", "KA"],

  footprint: [
    { value: "12", label: "states" },
    { value: "35+", label: "districts" },
    { value: "250+", label: "schools" },
    { value: "1,200+", label: "teachers" },
    { value: "1.5 lakh+", label: "students" }
  ],

  // Years by kind of work, calculated from the job dates below
  careerYears: [
    { label: "Education programmes", years: 15.5, note: "GyanShala, Educational Initiatives" },
    { label: "Customer support", years: 3.3, note: "Mphasis" },
    { label: "Operations & admin", years: 1.8, note: "Royal Security, Palm Greens" },
    { label: "School IT support", years: 0.5, note: "NIIT" }
  ],

  ladder: ["Junior Executive", "Executive", "Senior Executive", "Project Lead", "Support Lead (PAN India)", "Associate Manager"],

  timeline: [
    {
      role: "Associate Manager – Analytics & Operations Support",
      org: "Educational Initiatives Pvt. Ltd., Ahmedabad",
      dates: "Oct 2012 – Present",
      current: true,
      points: [
        "Builds role-based decision dashboards for many teams in Power BI, Zoho Analytics and Redash, including sales leadership, the ACAD Head and field operations.",
        "Writes SQL with joins across MySQL, MongoDB and ClickHouse data; automates recurring reports with Excel macros.",
        "Executed programmes across 12 states, 35+ districts and 250+ schools, reaching 1.5 lakh+ students and 1,200+ teachers.",
        "Built M&E frameworks for baseline, midline and endline assessments using KoBoToolbox, SurveyCTO and Google Forms.",
        "Led PAN India central support as Support Lead, resolving technical, implementation and product queries.",
        "Trained 3,000+ teachers, coordinators and officials; leads an 8-member team and runs performance appraisals."
      ]
    },
    {
      role: "Assistant Manager – Operations & Administration",
      org: "Palm Greens Club Pvt. Ltd.",
      dates: "May 2011 – Sep 2012",
      points: [
        "Coordinated daily operations between marketing executives and Direct Selling Agents.",
        "Managed billing, payment follow-ups, dues collection, vouchers and petty cash.",
        "Resolved member, agent and staff complaints as the central contact between departments."
      ]
    },
    {
      role: "Area Manager",
      org: "Royal Security Agency, Ahmedabad",
      dates: "Dec 2010 – Apr 2011",
      points: [
        "Won new security service contracts and grew the client base.",
        "Led recruitment, deployment, payroll and daily reporting for field staff."
      ]
    },
    {
      role: "School Coordinator (part-time)",
      org: "NIIT Ltd., Ahmedabad",
      dates: "May 2010 – Nov 2010",
      points: [
        "Maintained school computer labs and managed IT inventory.",
        "Trained teachers on Linux and resolved system issues."
      ]
    },
    {
      role: "Senior Customer Support Officer",
      org: "Mphasis Ltd., Ahmedabad",
      dates: "Jan 2007 – Apr 2010",
      points: [
        "Resolved GPRS service queries in a voice process.",
        "Trained new team members and improved response quality and resolution time."
      ]
    },
    {
      role: "Senior Supervisor",
      org: "GyanShala Project",
      dates: "Jul 2005 – Dec 2006",
      points: [
        "Coordinated multiple community schools and trained teachers and supervisors.",
        "Set up new classrooms and learning centres; engaged parents through field visits."
      ]
    }
  ],

  projectFilters: ["All", "Analytics", "Projects & M&E", "Operations", "Training"],

  projects: [
    {
      title: "12-state programme monitoring",
      tag: "Projects & M&E",
      result: "1.5 lakh+",
      resultLabel: "students tracked through one monitoring system",
      problem: "Education programmes ran in 12 states, 35+ districts and 250+ schools, with school-based and home-based learners. Leaders needed reliable progress data from the field.",
      role: "Project execution and M&E for multi-state programmes.",
      approach: [
        "Designed baseline, midline and endline assessment frameworks.",
        "Set up field data collection on KoBoToolbox, SurveyCTO and Google Forms.",
        "Analysed data daily, weekly and monthly and turned it into programme reports."
      ],
      tools: ["KoBoToolbox", "SurveyCTO", "Google Forms", "MySQL", "Power BI"]
    },
    {
      title: "Sales leadership dashboards",
      tag: "Analytics",
      result: "4 levels",
      resultLabel: "Head, AVP, zonal and regional views from one data model",
      problem: "Sales leaders at every level needed to see their own numbers: monitoring, trends, forecasts and team performance.",
      role: "Designed and built the dashboards.",
      approach: [
        "Built a Decision Maker dashboard for the National Sales Head.",
        "Cascaded matching views for the AVP, zonal managers and regional managers.",
        "Added trends, forecasting and team performance evaluation at each level."
      ],
      tools: ["Power BI", "Zoho Analytics", "Redash", "SQL"]
    },
    {
      title: "ACAD and field operations dashboards",
      tag: "Analytics",
      result: "Plan vs actual",
      resultLabel: "school visits, training and assessments in one view",
      problem: "The ACAD Head and field operations team tracked visits, sessions and assessments in separate places.",
      role: "Built both dashboards.",
      approach: [
        "ACAD Head dashboard: team performance, school visits, training sessions, planned vs actuals, assessment status.",
        "Field operations M&E dashboard: team performance against inputs, outputs and outcomes."
      ],
      tools: ["Power BI", "Zoho Analytics", "SQL"]
    },
    {
      title: "PAN India central support",
      tag: "Operations",
      result: "PAN India",
      resultLabel: "single support desk for field teams and partners",
      problem: "Field teams and partner institutions across India needed one place for technical and product help.",
      role: "Support Lead (PAN India).",
      approach: [
        "Acted as central liaison for troubleshooting, implementation support and product queries.",
        "Fed field feedback to product and tech teams to drive product improvements.",
        "Engaged government officials, education officers and community leaders."
      ],
      tools: ["Issue tracking", "Reporting", "Stakeholder management"]
    },
    {
      title: "Training at scale",
      tag: "Training",
      result: "3,000+",
      resultLabel: "teachers, coordinators and officials trained",
      problem: "Programmes depended on teachers, coordinators and school heads using new tools and methods well.",
      role: "Designed and delivered training.",
      approach: [
        "Ran in-person sessions, online training and webinars.",
        "Trained field teams, government teachers, school heads and administrators.",
        "Held review meetings and debriefs across central and field teams."
      ],
      tools: ["In-person", "Online", "Webinars"]
    }
  ],

  dashboards: {
    tools: "A sample of the many dashboards I have built in Power BI, Zoho Analytics and Redash",
    sales: [
      { level: "National Sales Head", name: "Decision Maker dashboard", tracks: ["Sales monitoring", "Trends", "Forecasting", "Evaluation", "Team performance"], image: "" },
      { level: "AVP, National Sales", name: "AVP dashboard", tracks: ["Sales monitoring", "Trends", "Forecasting", "Evaluation", "Team performance"], image: "" },
      { level: "Zonal Managers", name: "Zonal Manager dashboard", tracks: ["Zone sales", "Trends", "Forecasting", "Team performance"], image: "" },
      { level: "Regional Managers", name: "Regional Manager dashboard", tracks: ["Region sales", "Trends", "Forecasting", "Team performance"], image: "" }
    ],
    other: [
      { level: "ACAD Head", name: "Decision Maker dashboard", tracks: ["Team performance", "School visits", "Training sessions", "Planned vs actuals", "Assessment status"], image: "" },
      { level: "Field Operations team", name: "M&E dashboard", tracks: ["Team performance", "Inputs", "Outputs", "Outcomes"], image: "" }
    ]
  },

  // level: 3 = Advanced, 2 = Proficient, 1 = Learning
  skills: [
    { group: "Dashboards & BI", items: [["Power BI", 3], ["Zoho Analytics", 3], ["Redash", 3], ["Looker Studio", 2]] },
    { group: "Data & SQL", items: [["SQL joins & aggregations", 3], ["MySQL", 3], ["MongoDB", 2], ["ClickHouse", 2], ["Excel macros", 3]] },
    { group: "M&E and field data", items: [["M&E frameworks", 3], ["KoBoToolbox", 3], ["SurveyCTO", 3], ["Google Forms", 3]] },
    { group: "Operations & IT", items: [["Project execution", 3], ["Central support desk", 3], ["Windows & Linux", 2]] },
    { group: "Growing now", items: [["Python", 1], ["AI-assisted tool building", 2]] }
  ],

  softSkills: ["Stakeholder management", "Team leadership", "Training design", "Report writing", "Problem solving", "Government liaison"],

  training: {
    stats: [
      { value: "3,000+", label: "educators and officials trained" },
      { value: "3", label: "delivery modes" },
      { value: "8", label: "team members led" }
    ],
    modes: ["In-person sessions", "Online training", "Webinars"],
    audiences: ["Government teachers", "Coordinators", "School heads", "Field teams", "Administrators", "Education officers"]
  },

  // Add quotes like: { quote: "…", name: "Full name", title: "Role, Organisation" }
  testimonials: [],

  education: [
    { title: "BBA", detail: "Gujarat University", year: "2005" },
    { title: "Agile Workshop", detail: "Certificate", year: "" },
    { title: "Python programming", detail: "Online course", year: "Learning" }
  ],
  languages: ["Gujarati", "Hindi", "English"]
};

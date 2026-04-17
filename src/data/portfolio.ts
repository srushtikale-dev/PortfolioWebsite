export const profile = {
  name: "Srushti Kale",
  title: "Frontend Developer · React.js Specialist",
  tagline: "Frontend React Developer with 2+ years of experience building scalable, high-performance, accessible web applications. Open to new opportunities ✨",
  location: "Pune, Maharashtra, India",
  email: "srushtikale27@gmail.com",
  phone: "+918805576874",
  phoneDisplay: "+91 88055 76874",
  whatsapp: "918805576874",
  linkedin: "https://linkedin.com/in/srushti-kale-b98560250",
  resume: "/srushti-kale-resume.pdf",
};

export const about = `Frontend Developer with 2+ years of professional experience designing and shipping scalable, high-performance React.js applications in enterprise environments. Skilled in JavaScript (ES6+), TypeScript, React Hooks, Redux, Next.js, REST API integration, responsive UI development, and web performance optimization (code splitting, lazy loading, memoization). Proven ability to translate complex business requirements into clean, reusable, accessible (WCAG) components, collaborate in Agile/Scrum teams, and deliver production-ready features that improve user experience and Core Web Vitals. Actively seeking Frontend / React Developer opportunities (remote or Pune/Hybrid).`;

export const skills = [
  { group: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS"] },
  { group: "Frameworks & Libraries", items: ["React.js", "Next.js", "React Hooks", "React Router", "Redux", "Redux Toolkit"] },
  { group: "UI & Styling", items: ["Tailwind CSS", "Material UI (MUI)", "Flowbite", "Responsive Design", "Accessibility (WCAG)"] },
  { group: "Forms & Validation", items: ["Formik", "Yup", "React Hook Form"] },
  { group: "API & Data", items: ["REST APIs", "Axios", "Fetch", "JSON", "Postman"] },
  { group: "Performance & Quality", items: ["Code Splitting", "Lazy Loading", "Memoization", "Core Web Vitals", "Cross-browser Compatibility"] },
  { group: "Testing & Tools", items: ["Jest", "React Testing Library", "Chrome DevTools", "Lighthouse"] },
  { group: "Version Control & Collaboration", items: ["Git", "GitHub", "GitLab", "Bitbucket", "Agile / Scrum", "Jira"] },
  { group: "AI & Productivity", items: ["GitHub Copilot", "ChatGPT", "Cursor", "Windsurf", "Prompt Engineering"] },
];

export const experience = [
  {
    company: "Tathaatvam Technology Solutions",
    product: "Neevay — search engine of the construction industry",
    role: "Frontend Developer (React.js)",
    period: "January 2024 — Present",
    location: "Pune, India",
    points: [
      "Developed and maintained scalable, high-performance React.js applications used by enterprise procurement teams, improving UI responsiveness by 40%.",
      "Built complex enterprise modules for RFQ (Request for Quotation) workflows — material, labour, and contractor comparison systems handling 1000+ vendor records.",
      "Architected Redux & Redux Toolkit based global state management for large-scale, deeply nested application data, reducing prop drilling and improving maintainability.",
      "Designed advanced data-driven UI components: vendor comparison tables with sticky columns, virtualized lists, dynamic rendering, and horizontal scrolling.",
      "Implemented core business logic — L1 (lowest bidder) identification, vendor selection, negotiation workflows, and role-based approval UI.",
      "Integrated 30+ REST APIs with efficient data mapping, error handling, loading states, and optimistic UI updates.",
      "Improved application performance via code splitting, React.lazy, Suspense, memoization, and re-render optimization — reducing initial load time by ~35%.",
      "Built reusable, responsive UI component library using Tailwind CSS and Material UI ensuring cross-device and cross-browser consistency.",
      "Implemented robust client-side form validations (GST, PAN, pricing, email) using Formik & Yup ensuring data integrity.",
      "Migrated static assets from local storage to CDN-based hosting, reducing TTFB and improving Core Web Vitals (LCP, CLS).",
      "Collaborated in Agile/Scrum ceremonies — sprint planning, code reviews, and pair programming with backend, QA, and product teams.",
    ],
  },
];

export const projects = [
  {
    name: "InvestoXpert",
    url: "https://investoxpert.com",
    stack: ["React", "Next.js", "TypeScript", "App Router", "Tailwind CSS", "SEO"],
    description: "Built SEO-optimized frontend features with component-based architecture — blogs, homepage hero, and property search cards using Next.js App Router. Integrated dynamic REST APIs and ensured responsive, cross-browser UI with strong Core Web Vitals.",
  },
  {
    name: "Kokate Group",
    url: "https://kokategroup.com",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    description: "Contributed UI enhancements and DOM-based interactions to an existing production site. Improved responsive layouts, mobile navigation, and cross-browser compatibility.",
  },
  {
    name: "Neevay (Tathaatvam)",
    url: "#",
    stack: ["React.js", "Redux Toolkit", "Tailwind CSS", "MUI", "REST APIs"],
    description: "Enterprise procurement platform — built RFQ workflows, vendor comparison engines with sticky-column tables, L1 logic, role-based approvals, and negotiation flows used daily by procurement teams.",
  },
];

export const education = [
  { degree: "M.Sc. Computer Science", school: "Savitribai Phule Pune University", period: "2023 — 2025", grade: "Grade: A" },
  { degree: "B.Sc. Computer Science", school: "Savitribai Phule Pune University", period: "2020 — 2023", grade: "Grade: A+" },
];

export const tools = ["VS Code", "Postman", "Postmark", "Figma", "Chrome DevTools", "Lighthouse", "Jira"];
export const interests = ["Badminton", "Travelling", "Exploring New Tech"];

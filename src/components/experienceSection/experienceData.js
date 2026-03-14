const experienceSectionData = {
  title: "Experience",
  experiences: [
    {
      id: "pwc-front-end-developer",
      intro: {
        timeline: "March 2022- June 2025",
        summary:
          "With 3 years of experience building dynamic web applications.",
        highlights: [{ number: "PWC", text: "India" }],
        image: {
          src: "images/experience-image.png",
          alt: "Experience illustration",
        },
      },
      descriptionParagraphs: [
        [
          { text: "During my tenure at " },
          { text: "PWC", highlight: true },
          {
            text: ", I contributed to the development of dynamic and responsive user interfaces, adhering to best practices for scalability, performance, and maintainability. I built Single Page Applications (SPAs) using ",
          },
          { text: "React, Redux, React Router, and Hooks", highlight: true },
          {
            text: ", following a component-based architecture and implementing reusable UI components across projects.",
          },
        ],
        [
          {
            text: "On the backend, I developed and maintained RESTful APIs using ",
          },
          { text: "Node.js, Express, and MongoDB", highlight: true },
          {
            text: ", implementing secure authentication and authorization mechanisms, and optimizing data handling for high-traffic applications.",
          },
        ],
        [
          {
            text: "I was also involved in cloud infrastructure and deployment tasks, managing CI/CD pipelines and deploying applications to ",
          },
          { text: "AWS", highlight: true },
          {
            text: " services like EC2, S3, and Lambda. I containerized applications using ",
          },
          { text: "Docker", highlight: true },
          {
            text: ", enabling consistent development and deployment environments.",
          },
        ],
        [
          {
            text: "In addition to JavaScript technologies, I have worked with ",
          },
          { text: "Python", highlight: true },
          {
            text: " for automation and scripting tasks, and developed backend services and APIs using ",
          },
          { text: "PHP", highlight: true },
          { text: ", particularly in legacy systems and CMS platforms." },
        ],
        [
          {
            text: "My role required cross-functional collaboration with designers, DevOps, and QA teams to ensure end-to-end project success. I consistently focused on writing clean, modular, and testable code, while staying up to date with modern development workflows and technologies.",
          },
        ],
      ],
    },
    {
      id: "Azaya-marketting",
      intro: {
        timeline: "July 2025-July 2026",
        summary: "Real time AI Powered RBAC CRM plateform",
        highlights: [{ number: "Azaya Marketting", text: "Dubai, UAE" }],
        image: {
          src: "images/experience-image.png",
          alt: "Experience illustration",
        },
      },
      descriptionParagraphs: [
        [
          {
            text: "Architected and built a ",
          },
          { text: "multi-tenant SaaS CRM", highlight: true },
          {
            text: " from the ground up, selecting a ",
          },
          { text: "multi-tier microservices architecture", highlight: true },
          {
            text: " over a monolith to ensure secure, isolated data tenancy with ",
          },
          { text: "RBAC", highlight: true },
          { text: "." },
        ],
        [
          {
            text: "Designed system scaffold with ",
          },
          { text: "Nest.js, Prisma, and PostgreSQL", highlight: true },
          {
            text: " backend, capable of handling ",
          },
          { text: "15K+ daily requests", highlight: true },
          { text: "." },
        ],
        [
          {
            text: "Managed ",
          },
          { text: "AWS", highlight: true },
          {
            text: " infrastructure for a high-traffic CRM system, supporting ",
          },
          { text: "10K+ daily transactions", highlight: true },
          { text: " across " },
          { text: "5 EC2 (Windows) instances", highlight: true },
          { text: " and " },
          { text: "RDS PostgreSQL", highlight: true },
          {
            text: ", achieving ",
          },
          { text: "99.9% uptime", highlight: true },
          { text: " and high availability." },
        ],
        [
          {
            text: "Built and maintained responsive web interfaces and reusable components, improving performance by ",
          },
          { text: "40%", highlight: true },
          { text: " through " },
          { text: "SSR and component optimization", highlight: true },
          {
            text: ", while improving SEO with ",
          },
          { text: "structured metadata", highlight: true },
          { text: "." },
        ],
      ],
    },
  ],
};

export default experienceSectionData;

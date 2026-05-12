export const projects = [
  {
    title: "SkinDB",
    label: "AI product discovery platform",
    summary:
      "A full-stack beauty product aggregation platform that combines product data, multi-platform review inputs, and AI-generated verdicts to improve product discovery and decision-making.",
    problem:
      "Beauty product research is scattered across product pages, reviews, and social platforms, making it hard for users to compare products confidently.",
    features: [
      "Product discovery and comparison flows for skincare-focused use cases.",
      "Multi-source review ingestion and structured product information.",
      "AI-generated verdicts that summarize signals into clearer purchase guidance.",
    ],
    challenges: [
      "Normalizing review signals from multiple sources into a useful product-level view.",
      "Designing AI output that feels explainable instead of generic.",
      "Connecting search, data storage, API responses, and UI states cleanly.",
    ],
    architecture: ["React UI", "FastAPI services", "PostgreSQL data model", "LLM verdict layer"],
    impact: [
      "Demonstrates full-stack AI-product thinking from data collection to user-facing insights.",
      "Shows practical experience designing around trust, summaries, and decision support.",
    ],
    stack: ["React", "FastAPI", "PostgreSQL", "LLM APIs"],
    status: "Private project",
    image: "/images/skindb-cover.png",
    links: [],
  },
  {
    title: "ZenHosp",
    label: "Hospital management system",
    summary:
      "A desktop-based hospital management system designed for patient workflows, appointments, billing, and operational modules within a healthcare environment.",
    problem:
      "Hospitals need reliable workflows for daily operations, but many internal systems become fragmented across patient records, appointments, billing, and access control.",
    features: [
      "Patient management, appointments, billing, and role-based workflow modules.",
      "Desktop-first interface designed for operational healthcare environments.",
      "Database-backed workflows using a typed application stack.",
    ],
    challenges: [
      "Keeping multi-module healthcare workflows understandable for staff-facing usage.",
      "Designing desktop application flows that connect local UI, backend logic, and persistent data.",
      "Structuring the app for future modules without making the interface feel crowded.",
    ],
    architecture: ["Electron shell", "React + TypeScript UI", "Node.js services", "Prisma + PostgreSQL"],
    impact: [
      "Built modular HMS workflows across patient, appointment, billing, and access-control areas.",
      "Shows ability to reason about complex operational software beyond a single-page CRUD app.",
    ],
    stack: ["Electron", "React", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    status: "Private project",
    image: "/images/zenhosp-cover.png",
    links: [],
  },
  {
    title: "AeroHive GCS",
    label: "Ground control station interface",
    summary:
      "A ground control station interface project focused on UI refinement and understanding workflow dependencies across frontend, backend, and vehicle interaction.",
    problem:
      "Ground control workflows depend on clear interface states, system parameters, and reliable interaction between operators, backend services, and vehicle-side data.",
    features: [
      "UI refinement for an existing ground control station experience.",
      "Workflow research around frontend, backend, and vehicle interaction dependencies.",
      "Desktop application interface work with React, TypeScript, and Electron.",
    ],
    challenges: [
      "Understanding domain-specific parameters before making interface changes.",
      "Improving UI clarity while respecting existing system workflow constraints.",
      "Reasoning about operator-facing screens where state and feedback are critical.",
    ],
    architecture: ["Electron desktop app", "React + TypeScript UI", "Backend services", "Vehicle/system parameters"],
    impact: [
      "Strengthened experience with technical UI work in a systems-oriented domain.",
      "Shows comfort researching unfamiliar engineering contexts before implementation.",
    ],
    stack: ["React", "TypeScript", "Electron"],
    status: "Private project",
    image: "/images/aerohive-cover.png",
    links: [],
  },
];

export const projectsFootnote =
  "Some professional projects are maintained in private repositories. Screenshots, diagrams, and deeper implementation details can be added once approved for public sharing.";

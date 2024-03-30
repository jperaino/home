export interface Project {
  name: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    name: "Spatio Metrics",
    description: "Co-founder and CTO of a spatial analytics startup",
    link: "/spatio-metrics",
  },
  {
    name: "National Science Foundation R&D on ML + architecture",
    description:
      "Principal investigator for an NSF SBIR grant entitled Architectural Epidemiology: Leveraging Machine Learning and Spatial Data at Scale to Understand Health Outcomes",
    link: "https://www.sbir.gov/node/2080683",
  },
  {
    name: "Kyrix 3D",
    description:
      "Interactive, details-on-demand, 3D data visualization frontend for Kyrix",
    link: "https://github.com/jperaino/Kyrix-3D",
  },
  {
    name: "Hermit Crab",
    description:
      "Grasshopper toolbar with components for social distancing spatial analytics",
    link: "https://github.com/spatiometrics/HermitCrab",
  },
  {
    name: "Architecture",
    description: "Design work from my past life as an architect",
    link: "https://jimperaino.com/",
  },
];

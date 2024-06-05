if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.body.classList.add("dark");
}

document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

const projects = [
  {
    title: "Netpick",
    subtitle: "A toolkit for network recon and MITM attacks.",
    description:
      "This application features host discovery, port and OS scanning, ARP spoofing and event-driven communication with its web UI via WebSocket.",
    links: [
      {
        text: "Web UI source code",
        url: "https://github.com/eduard-cc/netpick-web",
      },
      {
        text: "API source code",
        url: "https://github.com/eduard-cc/netpick-api",
      },
    ],
    techStack: ["React", "Python", "FastAPI"],
  },
  {
    title: "Boards",
    subtitle: "A web application for project management and collaboration.",
    description:
      "Featuring a REST API with JWT authentication, this platform provides a solution for teams and individuals to manage their projects and tasks.",
    links: [
      {
        text: "Live website",
        url: "https://eduard-cc.github.io/boards-web",
      },
      {
        text: "Web app source code",
        url: "https://github.com/eduard-cc/boards-web",
      },
      {
        text: "API source code",
        url: "https://github.com/eduard-cc/boards-api",
      },
    ],
    techStack: ["React", "Java", "Spring Boot", "MySQL"],
  },
  {
    title: "Job Portal",
    subtitle: "A platform for posting, searching and applying to jobs.",
    description:
      "Using a monolithic architecture, this application enables employers to post and manage their job listings, and job seekers to search and apply.",
    links: [
      { text: "Live website", url: "https://i505281.luna.fhict.nl/" },
      { text: "Source code", url: "https://github.com/eduard-cc/job-portal" },
    ],
    techStack: ["C#", "ASP.NET Core Razor Pages", "MSSQL"],
  },
];

const projectsContainer = document.querySelector("div.projects");

projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.className = "project-card";

  const projectContent = document.createElement("div");
  projectContent.className = "project-content";

  const title = document.createElement("h3");
  title.textContent = project.title;
  projectContent.appendChild(title);

  const subtitle = document.createElement("p");
  subtitle.textContent = project.subtitle;
  projectContent.appendChild(subtitle);

  const description = document.createElement("p");
  description.className = "text-muted";
  description.textContent = project.description;
  projectContent.appendChild(description);

  const linkContainer = document.createElement("div");
  linkContainer.className = "links";
  project.links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.className = "text-muted";
    anchor.href = link.url;
    anchor.target = "_blank";

    const span = document.createElement("span");
    span.textContent = link.text;
    anchor.appendChild(span);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.classList.add("lucide", "lucide-arrow-up-right");

    const path1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    path1.setAttribute("d", "M7 7h10v10");
    svg.appendChild(path1);

    const path2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    path2.setAttribute("d", "M7 17 17 7");
    svg.appendChild(path2);

    anchor.appendChild(svg);

    linkContainer.appendChild(anchor);
  });
  projectContent.appendChild(linkContainer);

  const techStackContainer = document.createElement("div");
  techStackContainer.className = "tech-stack text-muted text-xs";
  project.techStack.forEach((tech) => {
    const dotSpan = document.createElement("span");
    dotSpan.className = `dot ${tech
      .replace(/\s/g, "")
      .replace(/\./g, "")
      .replace(/#/g, "sharp")
      .toLowerCase()}`;
    techStackContainer.appendChild(dotSpan);

    const techSpan = document.createElement("span");
    techSpan.textContent = tech;
    techStackContainer.appendChild(techSpan);
  });
  projectContent.appendChild(techStackContainer);

  projectCard.appendChild(projectContent);
  projectsContainer.appendChild(projectCard);
});

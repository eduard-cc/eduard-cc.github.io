if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.body.classList.add("dark");
}

document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

fetch("projects.json")
  .then((response) => response.json())
  .then((projects) => {
    const projectsContainer = document.querySelector("div.projects");

    projects.forEach((project) => {
      const projectCard = createProjectCard(project);
      projectsContainer.appendChild(projectCard);
    });
  });

function createElementWithClass(elementType, className) {
  const element = document.createElement(elementType);
  element.className = className;
  return element;
}

function createProjectCard(project) {
  const projectCard = createElementWithClass("div", "project-card");
  const projectContent = createElementWithClass("div", "project-content");

  const title = document.createElement("h3");
  title.textContent = project.title;

  const subtitle = document.createElement("p");
  subtitle.textContent = project.subtitle;

  const description = createElementWithClass("p", "text-muted");
  description.textContent = project.description;

  const linkContainer = createElementWithClass("div", "links");
  project.links.forEach((link) => {
    const anchor = createElementWithClass("a", "text-muted");
    anchor.href = link.url;
    anchor.target = "_blank";

    const span = document.createElement("span");
    span.textContent = link.text;
    anchor.appendChild(span);

    const svg = createSvgElement();
    anchor.appendChild(svg);

    linkContainer.appendChild(anchor);
  });

  const techStackContainer = createElementWithClass(
    "div",
    "tech-stack text-muted text-xs"
  );
  project.techStack.forEach((tech) => {
    const dotSpan = createElementWithClass(
      "span",
      `dot ${tech
        .replace(/\s/g, "")
        .replace(/\./g, "")
        .replace(/#/g, "sharp")
        .toLowerCase()}`
    );
    const techSpan = document.createElement("span");
    techSpan.textContent = tech;

    techStackContainer.appendChild(dotSpan);
    techStackContainer.appendChild(techSpan);
  });

  projectContent.appendChild(title);
  projectContent.appendChild(subtitle);
  projectContent.appendChild(description);
  projectContent.appendChild(linkContainer);
  projectContent.appendChild(techStackContainer);

  projectCard.appendChild(projectContent);
  return projectCard;
}

function createSvgElement() {
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

  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("d", "M7 7h10v10");
  svg.appendChild(path1);

  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("d", "M7 17 17 7");
  svg.appendChild(path2);

  return svg;
}

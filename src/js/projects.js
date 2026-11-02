// project data + the details dialog. leave live/code empty to hide those links

const projects = [
  {
    title: "BNHS Learning Portal",
    description:
      "School portal where students view lessons, announcements and scores and teachers manage content. Runs offline on the school network. The code is in a private repository, so there is no public link. Built with React, Vite, Tailwind, Fastify and SQLite.",
    tags: ["React", "Fastify", "SQLite"],
    live: "",
    code: "",
  },
  {
    title: "Rent a Room PH",
    description:
      "Dashboard for managing rooms, tenants and payments, with occupancy stats, payment history and notifications. Built with React, Vite, Tailwind, Framer Motion and Firebase.",
    tags: ["React", "Firebase"],
    live: "",
    code: "https://github.com/sysdev-shan/rent-a-room-ph",
  },
  {
    title: "RAW Reader",
    description:
      "A lightweight 3 MB Windows reader for manhwa and manga with a library, resume and multiple sources. Built with Tauri 2, Rust and a plain JavaScript interface.",
    tags: ["Tauri", "Rust", "JavaScript"],
    live: "",
    code: "https://github.com/sysdev-shan/raw-manhwa-reader",
  },
];

const tagColors = ["chip-lime", "chip-pink", "chip-sky"];
const projectDialog = document.querySelector("#project-modal");

// only show a link if it has an address
function setLink(selector, url) {
  const link = document.querySelector(selector);
  link.hidden = !url;
  if (url) {
    link.href = url;
  }
}

document.querySelectorAll("[data-project]").forEach(function (button) {
  button.addEventListener("click", function () {
    const project = projects[button.dataset.project];

    document.querySelector("#project-title").textContent = project.title;
    document.querySelector("#project-desc").textContent = project.description;

    const tagList = document.querySelector("#project-tags");
    tagList.textContent = ""; // clear old tags first
    project.tags.forEach(function (tag, index) {
      const item = document.createElement("li");
      item.className = "chip " + tagColors[index % tagColors.length];
      item.textContent = tag;
      tagList.appendChild(item);
    });

    setLink("#project-live", project.live);
    setLink("#project-code", project.code);

    projectDialog.showModal();
  });
});

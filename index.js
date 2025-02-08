async function getTemplateHeaderDesktop() {
  const response = await fetch("/components/header-component.html");
  const header = await response.text();
  const section = document.createElement("section");

  section.innerHTML = header;

  return section.querySelector("#container-header").content;
}

async function getComponentHeaderDesktop() {
  const element = await getTemplateHeaderDesktop();

  document
    .getElementById("header-desktop")
    .appendChild(element.cloneNode(true));
}

async function getTemplateHeaderMobile() {
  const response = await fetch("/components/header-mobile-component.html");
  const template = await response.text();
  const header = document.createElement("header");

  header.innerHTML = template;

  return header.querySelector("#template-wrapper-header-mobile").content;
}

async function getComponentHeaderMobile() {
  const element = await getTemplateHeaderMobile();

  document.getElementById("header-mobile").appendChild(element.cloneNode(true));
}

async function getTemplateHeaderMobileSidebar() {
  const response = await fetch(
    "/components/header-mobile-sidebar-component.html"
  );
  const template = await response.text();

  const header = document.createElement("header");
  header.innerHTML = template;

  return header.querySelector("#template-wrapper-header-mobile-sidebar")
    .content;
}

async function getComponentHeaderMobileSidebar() {
  const element = await getTemplateHeaderMobileSidebar();

  document
    .getElementById("header-mobile-sidebar")
    .appendChild(element.cloneNode(true));
}

async function getTemplateMyValues() {
  const response = await fetch("/components/myvalues-component.html");
  const myvalues = await response.text();
  const section = document.createElement("section");

  section.innerHTML = myvalues;

  return section.querySelector("#container-myvalues");
}

async function getJsonMyValues() {
  const template = await getTemplateMyValues();
  const response = await fetch("/data/myvalues.json");
  const myvalues = await response.json();
  const container = document.getElementById("myvalues");

  myvalues["items"].forEach((element) => {
    let component = template.content.cloneNode(true);

    component.querySelector(".content-title-image-myvalues").src =
      element.image;
    component.querySelector(".content-title-text-myvalues").innerHTML =
      element.title;
    component.querySelector(".context-text-myvalues").innerHTML =
      element.description;

    container.appendChild(component);
  });

  return container;
}

async function getTemplateTechnologies() {
  const response = await fetch("/components/technologies-component.html");
  const technologies = await response.text();
  const section = document.createElement("section");

  section.innerHTML = technologies;

  return section.querySelector("#container-technologies");
}

async function getJsonTechnologies() {
  const template = await getTemplateTechnologies();
  const response = await fetch("/data/technologies.json");
  const technologies = await response.json();
  const container = document.getElementById("technologies");

  technologies["items"].forEach((element) => {
    let component = template.content.cloneNode(true);

    component.querySelector(".content-title-image-technologies").src =
      element.image;
    component.querySelector(".content-title-text-technologies").innerHTML =
      element.title;

    container.appendChild(component);
  });

  return container;
}

async function getTemplateFooter() {
  const response = await fetch("/components/footer-component.html");
  const footer = await response.text();
  const section = document.createElement("section");

  section.innerHTML = footer;

  return section.querySelector("#container-footer").content;
}

async function getComponentFooter() {
  const template = await getTemplateFooter();

  document.getElementById("footer").appendChild(template.cloneNode(true));
}

async function getTemplateContent() {
  const template = await fetch("/components/content-component.html");
  const content = await template.text();
  const a = document.createElement("a");

  a.innerHTML = content;

  return a.querySelector("#container-content");
}

async function getComponentContent() {
  const template = await getTemplateContent();
  const container = document.getElementById("content");

  const path = window.location.pathname.split("/").pop();

  let data = "";

  if (path == "projects.html") {
    data = await fetch("/data/projects.json");
  }

  if (path == "articles.html") {
    data = await fetch("/data/articles.json");
  }

  if (path == "videos.html") {
    data = await fetch("/data/videos.json");
  }

  const items = await data.json();

  items["items"].forEach((element) => {
    let component = template.content.cloneNode(true);

    component.querySelector(".content-container").href = element.url;
    component.querySelector(".content-image").src = element.image;
    component.querySelector(".content-container-title").innerHTML =
      element.title;
    component.querySelector(".content-container-description").innerHTML =
      element.description;

    container.appendChild(component);
  });

  return container;
}

function onClickMenuOpenSidebar() {
  const observer = new MutationObserver(() => {
    const header = document.getElementById("header-mobile");

    const sidebar = document.getElementById("header-mobile-sidebar");

    sidebar.classList.remove("header-mobile-sidebar");

    const main = document.getElementById("content");

    if (header && sidebar) {
      header
        .querySelector("#template-wrapper-logo-menu")
        .addEventListener("click", () => {
          if (main !== null) {
            main.style.display = "none";
          }

          sidebar.querySelector(
            "#template-header-mobile-sidebar"
          ).style.cssText = `
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
    `;

          header.style.display = "none";
        });

      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

function onClickMenuCloseSidebar() {
  const observer = new MutationObserver(() => {
    const header = document.getElementById("header-mobile");

    const sidebar = document.getElementById("header-mobile-sidebar");

    const main = document.getElementById("content");

    if (header && sidebar) {
      sidebar
        .querySelector("#template-header-mobile-close")
        .addEventListener("click", () => {
          sidebar.querySelector(
            "#template-header-mobile-sidebar"
          ).style.cssText = `
          display: none;
      `;

          if (main !== null) {
            main.style.display = "block";
          }

          header.style.display = "block";
        });
    }

    observer.disconnect();
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

function checkWindowSize() {
  const element = document.getElementById("header-mobile");
  const element2 = document.getElementById("header-mobile-sidebar");

  if (window.innerWidth > 768) {
      element.style.display = "none";
      element2.style.display = "none";
  } else {
      element.style.display = "block";
      element2.style.display = "block";
  }
}

function onChangemyphotoWhenMouseWillInButton() {
  const button = document.getElementById("button-youtube");
  const myphoto = document.getElementById("myphoto");

  button.addEventListener("mouseenter", () => {
    myphoto.src = "assets/images/index/myphoto2.webp";
  });
  
  button.addEventListener("mouseleave", () => {
    myphoto.src = "assets/images/index/myphoto.webp";
  });
}

// Verifica no carregamento da página
window.addEventListener("load", checkWindowSize);

// Verifica sempre que a janela for redimensionada
window.addEventListener("resize", checkWindowSize);

function loadComponents() {
  getJsonMyValues();
  getJsonTechnologies();
  getComponentFooter();
  getComponentContent();
  getComponentHeaderDesktop();
  getComponentHeaderMobile();
  getComponentHeaderMobileSidebar();
  onClickMenuOpenSidebar();
  onClickMenuCloseSidebar();
  onChangemyphotoWhenMouseWillInButton();
  checkWindowSize();
}

document.addEventListener("DOMContentLoaded", loadComponents);

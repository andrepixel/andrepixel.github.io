async function getTemplateHeader() {
  const response = await fetch("/components/header-component.html");
  const header = await response.text();
  const section = document.createElement("section");

  section.innerHTML = header;

  return section.querySelector("#container-header").content;
}

async function getComponentHeader() {
  const element = await getTemplateHeader();

  document.getElementById("header").appendChild(element.cloneNode(true));
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

getComponentHeader();
getJsonMyValues();
getJsonTechnologies();
getComponentFooter();
getComponentContent();

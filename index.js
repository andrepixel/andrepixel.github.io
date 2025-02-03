async function getTemplateHeader() {
  const response = await fetch("/components/header-component.html");
  const header = await response.text();
  const section = document.createElement("section");

  section.innerHTML = header;

  return section.querySelector("#headerTemplate").content;
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

getComponentHeader();
getJsonMyValues();
getJsonTechnologies();
getComponentFooter();
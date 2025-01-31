async function getTemplateHeader() {
  const response = await fetch("header.html");
  const header = await response.text();
  const div = document.createElement("div");

  div.innerHTML = header;

  return div.querySelector("#headerTemplate").content;
}

async function updateComponentDivHeader() {
  const element = await getTemplateHeader();

  document.getElementById("header").appendChild(element.cloneNode(true));
}

async function getTemplateMyValues() {
  const response = await fetch("myvalues.html");
  const myvalues = await response.text();
  const div = document.createElement("div");

  div.innerHTML = myvalues;

  return div.querySelector("#container-myvalues");
}

async function getJsonMyValues() {
  const template = await getTemplateMyValues();
  const response = await fetch("myvalues.json");
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
  const response = await fetch("technologies.html");
  const technologies = await response.text();
  const div = document.createElement("div");

  div.innerHTML = technologies;

  return div.querySelector("#container-technologies");
}

async function getJsonTechnologies() {
  const template = await getTemplateTechnologies();
  const response = await fetch("technologies.json");
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

updateComponentDivHeader();
getJsonMyValues();
getJsonTechnologies();

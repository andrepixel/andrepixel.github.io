async function getTemplateHeader() {
  const response = await fetch("header.html");
  const header = await response.text();
  const div = document.createElement("div");

  div.innerHTML = header;

  return div.querySelector("headerTemplate").content;
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

  return div.querySelector("container-myvalues").content;
}

async function getJsonMyValues() {
  const response = await fetch("myvalues.json");
  const myvalues = await response.json();
  const div = document.createElement("div");

  div.innerHTML = myvalues;

  return div.querySelector("container-myvalues").content;
}

updateComponentDivHeader();

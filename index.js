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

updateComponentDivHeader();

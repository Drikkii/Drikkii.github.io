//Собираем страницу по частям

function loadContentFromFile(element) {
  const fileUrl = element.getAttribute("data-file");

  if (!fileUrl) {
    console.log("Атрибут data-file не указан для элемента", element);
    return;
  }

  fetch(fileUrl)
    .then((response) => response.text())
    .then((data) => {
      element.innerHTML = data;
    })
    .catch((error) => console.log(error));
}

document.addEventListener("DOMContentLoaded", function () {
  const elementsWithFileAttr = document.querySelectorAll("[data-file]");

  elementsWithFileAttr.forEach((element) => {
    loadContentFromFile(element);
  });
});

// код слайдер банера !

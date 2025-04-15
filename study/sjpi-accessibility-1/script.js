const news = document.querySelector(".image-container");
const button = document.querySelectorAll(".button");
const searchButton = document.querySelector(".search-icon");


function devMsg(elem){
elem.addEventListener("click", () => {
  if (!document.querySelector(".info-text")) {
    const infoText = document.createElement("div");
    infoText.classList.add("info-text");
    infoText.textContent = "Thanks you for visiting our website! Some functions is still under development.";

    elem.insertAdjacentElement("afterend", infoText);
    setTimeout(() => {
    infoText.remove();
  }, 2000);
  }
});
}

devMsg(news);
devMsg(searchButton);
devMsg(button[0]);
devMsg(button[1]);

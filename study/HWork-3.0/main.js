
const myButton = document.querySelector("#myButton");
const myText = document.querySelector("#myText");


function changeText() {
    myText.innerHTML = "Goodbye world!"
}

myButton.addEventListener("click", changeText, false);
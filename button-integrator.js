import {appendToDisplay, clearDisplay, evaluateInput} from "./screen-API.js"

const legalChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '/', '*', '^', '(', ')', "."];

let buttons = document.querySelectorAll(".button")

for(let button of buttons){
    button.addEventListener("click", (event) => {
        if (button.dataset.special == "true") { button.textContent == "AC" ? clearDisplay() : evaluateInput()}
        else button.dataset.value === undefined ? appendToDisplay(button.textContent) : appendToDisplay(button.dataset.value);
        console.log(event);
    })
}

window.addEventListener("keydown", (event) => {
    if (legalChars.includes(event.key)) {appendToDisplay(event.key)};
    if (event.key == "Backspace") {clearDisplay()};
    if (event.key == "=" || event.key == "Enter") {evaluateInput()};
    console.log(event);
})
let inputDiv = document.querySelector(".input");
let equationDiv = document.querySelector(".equation");
const legalChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '/', '*', '^', '(', ')', "."];

function appendToDisplay(char){
    inputDiv.textContent += String(char);
}

function clearDisplay(){
    inputDiv.textContent = '';
    equationDiv.textContent = '';
}

function evaluateInput(){
    let inputText = inputDiv.textContent;
    for (let char of inputText){
        if (!legalChars.includes(char)){
            clearDisplay();
            inputDiv.text = "ERROR!";
        }
    }
    
    equationDiv.textContent = inputDiv.textContent + " =";
    inputDiv.textContent = eval(inputDiv.textContent.replaceAll("^", "**"));

    if (inputDiv.textContent.length > 13) {inputDiv.textContent = "Too Big!"}
}

export{appendToDisplay, clearDisplay, evaluateInput};
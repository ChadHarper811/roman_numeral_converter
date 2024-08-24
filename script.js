const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");
const outputText = document.getElementById("output-text");


const convertToRomanNumeral = str => {
    const userInputStr = str;

    if (str === "") {
        alert("Please input a value");
        return;
    }
}

convertBtn.addEventListener("click", () => {
    convertToRomanNumeral(userInput.value);
    userInputText.value = "";
})
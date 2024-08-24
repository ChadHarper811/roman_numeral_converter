const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");
const outputText = document.getElementById("output-text");


const convertToRomanNumeral = number => {
    const userInputNumber = number;

    if (number === "") {
        outputText.innerText = "Please enter a valid number";
    } else if (number < 0) {
        outputText.innerText = "Please enter a number greater than or equal to 1";
    } else if (number > 3999) {
        outputText.innerText = "Please enter a number less than or equal to 3999"
    } else {
        let romanNumeralOuput = "";
        while (number >= 0) {
            if (number > 1000) {
                number - 1000;
                romanNumeralOuput += "M";
            } else if (number >= 900) {
                number - 900;
                romanNumeralOuput += "CM";
            } else if (number >= 500) {
                number - 500;
                romanNumeralOuput += "D";
            } else if (number >= 400) {
                number - 400;
                romanNumeralOuput += "CD";
            }
        }
    }


    outputDiv.classList.remove("hidden");
}

convertBtn.addEventListener("click", () => {
    convertToRomanNumeral(userInput.value);
    userInput.value = "";
})
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
    }

    outputDiv.classList.remove("hidden");
}

convertBtn.addEventListener("click", () => {
    convertToRomanNumeral(userInput.value);
    userInput.value = "";
})
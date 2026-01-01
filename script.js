const numBallsInput = document.getElementById("num-balls");
const totalNumbersInput = document.getElementById("total-numbers");
const generateRandomNumberInput = document.getElementById(
    "generate-random-numbers",
);
const outputText = document.getElementById("output");

generateRandomNumberInput.addEventListener("click", () => {
    const numBalls = numBallsInput.value;
    const totalNumbers = totalNumbersInput.value;
    const numbers = [];
    for (let i = 0; i < totalNumbers; i++) {
        numbers.push(i + 1);
    }
    const selectedNumbers = [];
    for (let i = 0; i < numBalls; i++) {
        const selectedNumber = Math.floor(Math.random() * numbers.length);
        selectedNumbers.push(selectedNumber);
        numbers.splice(selectedNumber, 1);
    }
    outputText.innerText = numbers.join(", ");
});

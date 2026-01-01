const numBallsInput = document.getElementById("num-balls"); //number of balls input
const totalNumbersInput = document.getElementById("total-numbers"); //total numbers input
const generateRandomNumberButton = document.getElementById(
    "generate-random-numbers",
); //generate random number button
const outputText = document.getElementById("output"); //output text

generateRandomNumberButton.addEventListener("click", () => {
    //when generate random number button is pressed
    const numBalls = numBallsInput.value; //get value of number of balls input
    const totalNumbers = totalNumbersInput.value; //get value of total numbers input
    const numbers = []; //numbers array
    for (let i = 0; i < totalNumbers; i++) {
        //repeat for numbers in total numbers
        numbers.push(i + 1); //add numbers to numbers array
    }
    const selectedNumbers = []; //list of selected numbers
    for (let i = 0; i < numBalls; i++) {
        //repeat for each ball in number of balls
        const selectedNumber = Math.floor(Math.random() * numbers.length); //get random number
        selectedNumbers.push(selectedNumber); //add selected number to list of selected numbers
        numbers.splice(selectedNumber, 1); //remove selected number to prevent duplicates
    }
    outputText.innerText = numbers.join(", "); //update output text
});

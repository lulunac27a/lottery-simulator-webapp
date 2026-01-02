const numBallsInput = document.getElementById("num-balls"); //number of balls input
const totalNumbersInput = document.getElementById("total-numbers"); //total numbers input
const yourNumbersInput = document.getElementById("your-numbers"); //your numbers input
const generateRandomNumberButton = document.getElementById(
    "generate-random-numbers",
); //generate random number button
const outputText = document.getElementById("output"); //output text
const generatedNumbersOutputText = document.getElementById("generated-numbers"); //generated numbers output text
const matchedNumbersOutputText = document.getElementById("matched-numbers"); //matched numbers output text

generateRandomNumberButton.addEventListener("click", () => {
    //when generate random number button is pressed
    const numBalls = parseInt(numBallsInput.value, 10); //get value of number of balls input
    const totalNumbers = parseInt(totalNumbersInput.value, 10); //get value of total numbers input
    const yourNumbersText = yourNumbersInput.value; //get value of your numbers
    const nums = yourNumbersText.match(/\d+/g)?.map(Number) || []; //parse string as numeric list array
    const picks = nums.slice(0, numBalls);
    if (numBalls <= totalNumbers) {
        //if number of balls is less than or equal to total number of balls
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
        const matches = selectedNumbers.filter((n) => picks.includes(n)); //find ball number matches
        outputText.innerText = `Generated ${numBalls} balls from ${totalNumbers} balls`; //update output text
        generatedNumbersOutputText.innerText = selectedNumbers.join(", "); //update generated numbers output text
        matchedNumbersOutputText.innerText = `${matches.length} (${matches.join(", ")}`; //update matched numbers output text
    } else {
        //if number of balls is greater than total number of balls
        alert(
            "Number of balls must be less than or equal to total number of balls",
        ); //alert user that number of balls must be less than or equal to total number of balls
    }
});

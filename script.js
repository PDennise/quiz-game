let startButton;

document.addEventListener("DOMContentLoaded", () => {
startButton = document.getElementById('startButton') // get const from a tutorial
const nextButton = document.getElementById('nextButton')
const rateButton = document.getElementById('rateButton')

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener("click", nextQuestion);
rateButton.addEventListener("click", rateGame);
});

function startQuiz() {
    const username = document.getElementById("username").value;

    console.log("Username:", username)
    if (!username.trim()) {
        alert("Please enter a username!");
        return;
    }

    console.log("Starting");
    startButton.classList.add("hidden")
    
    document.getElementById("usernameScreen").classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");

    showQuestion();
}




function nextQuestion() {

}

function checkAnswer() {

}

function rateGame(){

}
const startButton = document.getElementById('start-button')

startButton.addEventListener('click', startQuiz)


function startQuiz() {
    const username = document.getElementById("username").value;

    if (!username.trim()) {
        alert("Please enter a username!");
        return;
    }

    document.getElementById("usernameScreen").classList.add("hidden");
    document.getElementById("quizScreen").classList.remove("hidden");

    showQuestion();
}




function nextQuestion() {

}

function checkAnswer() {

}
let startButton;

document.addEventListener("DOMContentLoaded", () => {
    startButton = document.getElementById('startButton')
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
    nextQuestion()

    document.getElementById("usernameScreen").classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");

    nextQuestion();
}




function nextQuestion() {

}

function checkAnswer() {

}

function rateGame() {

}

const questions = [
    {
        question: '1. What is the capital city of Canada?',
        answers: [
            { text: 'Toronto', correct: false }
            { text: 'Vancouver', correct: false }
            { text: 'Ottawa', correct: true } 
            { text: 'Montreal', correct: false }
        ]
    },

    {
        question: '2. Who painted the Mona Lisa?',
        answers: [
            { text: 'Pablo Picasso', correct: false }
            { text: 'Vincent van Gogh', correct: false }
            { text: 'Michelangelo', correct: false } 
            { text: 'Leonardo da Vinci', correct: true }
        ]
    },

    {
        question: '3. What is the largest planet in our Solar System?',
        answers: [
            { text: 'Earth', correct: false }
            { text: 'Jupiter', correct: true }
            { text: 'Saturn', correct: false } 
            { text: 'Mars', correct: false }
        ]
    },

    {
        question: '4. Which element has the chemical symbol 'O'?',
        answers: [
            { text: 'Oxygen', correct: true }
            { text: 'Gold', correct: false }
            { text: 'Osmium', correct: false } 
            { text: 'Iron', correct: false }
        ]
    },

    {
        question: '5. In what year did the Titanic sink?',
        answers: [
            { text: '1905', correct: false }
            { text: '1912', correct: true }
            { text: '1920', correct: false } 
            { text: '1898', correct: false }
        ]
    },
]



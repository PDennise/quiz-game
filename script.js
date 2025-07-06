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

    showQuestion();
}


function showQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestionIndex].question;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        document.getElementById("question-container").classList.add("hidden");
        document.getElementById("rateScreen").classList.remove("hidden");
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value;
    const correct = questions[currentQuestionIndex].answer.toLowerCase() === userAnswer.toLowerCase();

    if (correct) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
}

function rateGame() {
    const rating = document.querySelector('input[name="rating"]:checked');
    if (rating) {
        alert("Thanks for rating us " + rating.value + " stars!");
    } else {
        alert("Please select a rating.");
    }
}

let currentQuestionIndex = 0;

const questions = [
    {
        question: '1. What is the capital city of Canada?',
        answers: [
            { text: 'Toronto', correct: false },
            { text: 'Vancouver', correct: false },
            { text: 'Ottawa', correct: true }, 
            { text: 'Montreal', correct: false }
        ]
    },

    {
        question: '2. Who painted the Mona Lisa?',
        answers: [
            { text: 'Pablo Picasso', correct: false },
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Michelangelo', correct: false }, 
            { text: 'Leonardo da Vinci', correct: true }
        ]
    },

    {
        question: '3. What is the largest planet in our Solar System?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Jupiter', correct: true },
            { text: 'Saturn', correct: false }, 
            { text: 'Mars', correct: false }
        ]
    },

    {
        question: '4. Which element has the chemical symbol "O" ?',
        answers: [
            { text: 'Oxygen', correct: true },
            { text: 'Gold', correct: false },
            { text: 'Osmium', correct: false }, 
            { text: 'Iron', correct: false }
        ]
    },

    {
        question: '5. In what year did the Titanic sink?',
        answers: [
            { text: '1905', correct: false },
            { text: '1912', correct: true },
            { text: '1920', correct: false }, 
            { text: '1898', correct: false }
        ]
    },
]

function showQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestionIndex].question;
}

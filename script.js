let startButton;
let score = 0;
let username;


document.addEventListener("DOMContentLoaded", () => {
    startButton = document.getElementById('startButton')
    const nextButton = document.getElementById('nextButton')
    const rateButton = document.getElementById('rateButton')
    const submitButton = document.getElementById('submitButton');

    startButton.addEventListener('click', startQuiz)
    nextButton.addEventListener("click", nextQuestion);
    rateButton.addEventListener("click", rateGame);
    submitButton.addEventListener("click", checkAnswer);
});

function startQuiz() {
    const username = document.getElementById("username").value;
    document.getElementById("username").classList.add("hidden")

    if (!username.trim()) {
        alert("Please enter a username!");
        return;
    }

    document.getElementById("introSection").classList.add("hidden");
    startButton.classList.add("hidden")
    document.getElementById("question-container").classList.remove("hidden");

    console.log("Username:", username)
    console.log("Starting");

    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerContainer = document.getElementById("answer");

    questionText.textContent = question.question;

    startTimer();

    // Clean answers
    answerContainer.innerHTML = "";

    // Show answers
    question.answers.forEach((answer, index) => {
        const label = document.createElement("label");
        label.classList.add("answer");

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = index;
        input.classList.add("radio-btn");

        label.appendChild(input);
        label.appendChild(document.createTextNode(answer.text));
        answerContainer.appendChild(label);
    });

    // Reset button and feedback
    document.getElementById("nextButton").classList.add("hidden");
    document.getElementById("feedback").textContent = "";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        document.getElementById("question-container").classList.add("hidden");
        document.getElementById("rateScreen").classList.remove("hidden");
        document.getElementById("scoreText").textContent = `You got ${score} out of ${questions.length} correct!`;
        document.getElementById("rateButton").classList.remove("hidden");
        document.getElementById("tryAgain").classList.remove("hidden");
    }
}

function checkAnswer(auto = false) {
    const selected = document.querySelector('input[name="answer"]:checked');
    const feedback = document.getElementById("feedback");

    stopTimer();

    if (!selected && !auto) {
        alert("Please select an answer.");
        return;
    }

    let answerIndex = selected? parseInt(selected.value): -1;
    let correctAnswerIndex = questions[currentQuestionIndex].answers.findIndex(a => a.correct);
    let isCorrect = (answerIndex === correctAnswerIndex);

    if (isCorrect) {
        score++;
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else if (auto && !selected) {
        feedback.textContent = "Time's up! No answer selected.";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "Incorrect!";
        feedback.style.color = "red";
    }

    const allLabels = document.querySelectorAll(".answer");
    const allInputs = document.querySelectorAll('input[name="answer"]');

    allInputs.forEach((input, idx) => {
        input.disabled = true; // Other options will be passived
        const label = allLabels[idx];

        if (questions[currentQuestionIndex].answers[idx].correct) {
            label.classList.add("correct-answer");
        } else if (parseInt(input.value) === answerIndex) {
            label.classList.add("wrong-answer");
        }
    });

    // Show next button after answer checked
    document.getElementById("nextButton").classList.remove("hidden");
}

function rateGame() {
    const rating = document.querySelector('input[name="rating"]:checked');
    if (rating) {
        alert("Thanks for rating us " + rating.value + " stars!");
    } else {
        alert("Please select a rating.");
    }
}

document.getElementById("tryAgain").addEventListener("click", () => {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("rateScreen").classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");
    showQuestion();
});

let timerInterval;
let timeLeft = 10; // each questions - 10 seconds

function startTimer() {
    timeLeft = 10;
    const timerDisplay = document.getElementById("timer");
    timerDisplay.textContent = `Time left: ${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            autoSubmitAnswer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function autoSubmitAnswer() {
    const feedback = document.getElementById("feedback");
    const selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        feedback.textContent = "Time's up! No answer selected.";
        feedback.style.color = "orange";
    }

    checkAnswer(true);
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

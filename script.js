let startButton;
let score = 0;


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
    document.getElementById("usernameScreen").classList.add("hidden");
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
    }
}

function checkAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    const feedback = document.getElementById("feedback");

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    const answerIndex = parseInt(selected.value);
    const correct = questions[currentQuestionIndex].answers[answerIndex].correct;

    if (correct) {
        score++;
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect!";
        feedback.style.color = "red";
    }

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

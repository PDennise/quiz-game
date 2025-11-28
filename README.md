<div align="center">
  <h4> QUIZ GAME </h4>
</div>

![device images](/assets/images/devices.png)


[Quiz Game](https://pdennise.github.io/quiz-game/) is a web-based trivia app designed to test users’ knowledge through multiple-choice questions. Players answer each question, move to the next one, and see their final score at the end. In future updates, users will be able to enter their name and save their results.

## Table of Contents  
- [Features](#features)     
- [Demo](#demo)  
- [Getting Started](#getting-started)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [UX / Design & Wireframes](#ux--design--wireframes)  
- [Testing & Validation](#testing--validation) 
- [Bug Fixes](#bug-fixes) 
- [Deployment](#deployment)  
- [Screenshots](#screenshots)  
- [Future Improvements](#future-improvements)  
- [Credits & Acknowledgments](#credits--acknowledgments)  
- [Author](#author)  

---

## Features

- Presents one question at a time with multiple‑choice answers  
- Built‑in timer for each question  
- Submit and Next buttons to control flow  
- Feedback on correct / incorrect answers  
- Final score calculation and display  
- “Start Again” and “Go Home Page” controls to restart the quiz or return to start  
- Responsive design (works on desktop and mobile)  

---

## Demo

Live demo available at: [https://pdennise.github.io/quiz-game/](https://pdennise.github.io/quiz-game/)

---

## Getting Started

### Prerequisites

No special requirements — just a modern browser. If you want to run the project locally, you need:

- Node.js & npm (only if you later add build tools, but not required now)  
- Or simply a file browser / web server

---

### Installation & Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/PDennise/quiz-game.git
2. Open the project folder:
    ```bash
    cd quiz-game
3. Open index.html in your browser to start playing the quiz.


Or (if you have a simple static server), run:

        npx serve
    
and open http://localhost:3000 in browser (optional).

---

## Usage

1. Open the application (index.html) in a browser.
2. Click Start Quiz to begin.
3. For each question:
    - Choose an answer
    - Click Submit
    - See feedback (Correct / Incorrect)
    - Click Next to move to the next question
4. At the end: view your score, optionally enter your username and rate the game.
5. Use Start Again or Go Home Page to restart or return to main screen.

---

## Project Structure

quiz‑game/
├── index.html         # Main HTML page and UI structure   
├── assets/            # Images, favicon, other static assets  
│   ├── css/           # style.css and related styling files  
│   └── images/        # screenshots, logo, etc.
├── script.js          # Game logic (questions, timer, navigation)   
└── README.md          # Project documentation (this file)  

---

## UX / Design & Wireframes

- Clean and minimalistic UI — only necessary information visible at each stage
- Responsive layout for both desktop and mobile using CSS / media queries
- Clear navigation flow: Start → Quiz → Submit/Next → Score → Restart/Home
- Minimal distractions: during quiz only question, answers, timer and controls visible


Wireframes and mockups used during design:

(I will add at the last)

---

## Testing & Validation

### Manual Test Cases

| # | Step Description                       | Expected Result                              | Status |
| - | -------------------------------------- | -------------------------------------------- | ------ |
| 1 | Load page                              | Intro / start screen visible                 | ✅      |
| 2 | Click “Start Quiz”                     | First question appears; timer starts         | ✅      |
| 3 | Submit correct answer                  | Feedback “Correct!”, Next button appears     | ✅      |
| 4 | Submit incorrect answer                | Feedback “Incorrect!”, Next button appears   | ✅      |
| 5 | Change questions until end             | Final score & rating screen appears          | ✅      |
| 6 | Without selecting answer, click Submit | Alert message or time‑up feedback (no crash) | ✅      |
| 7 | Use “Start Again”                      | Quiz resets to first question                | ✅      |
| 8 | Use “Go Home Page”                     | Returns to start screen                      | ✅      |

### Validator Results

HTML5: ✅ Valid markup, passes W3C HTML validator

CSS3: ✅ No major issues; responsive layout works on various screen sizes

JavaScript (ES6): ✅ No console errors; works across modern browsers

---
## Bug Fixes 

1. Submit Allowed Without Selecting an Answer
Issue: Users could click Submit without choosing any answer, leading to incorrect feedback such as “Time’s up!”
Fix: Added input validation that displays an alert and prevents submission when no option is selected.
2. "Finished" Message Displayed Prematurely
Issue: The “Finished” title appeared even before the last question was completed.
Fix: Hid the message until all questions are answered and the final score screen is shown.
3. Rating Section Visible at the Wrong Time
Issue: Rating stars and username input appeared at the beginning of the game.
Fix: Rating section now only appears after the quiz is completed.
4. Missing Restart and Home Navigation During Game
Issue: Users could not return to the homepage or restart the quiz once it began.
Fix: Added Start Again and Home Page buttons and connected them to new resetGame() and goHome() functions.
5. Auto-Submit Timer Logic Error
Issue: When the timer reached 0 without a selection, checkAnswer() produced incorrect behavior.
Fix: Added a separate autoSubmitAnswer() function to correctly handle timeout and provide accurate feedback.
6. New Question Not Resetting UI State
Issue: Previous answers stayed highlighted or disabled when moving to the next question.
Fix: Each new question now clears old labels, resets radio buttons, and hides/shows correct buttons.
7. Game Not Starting After Recent Changes
Issue: After adding new controls, the quiz stopped starting when clicking “Start Quiz”.
Fix: Resolved DOM load order issues and ensured all elements are available before event listeners are attached.
8. HTML Validation Errors (Trailing Slash)
Issue: HTML5 validator flagged void elements with trailing slashes (<input />).
Fix: Updated all void elements to HTML5-compliant form (<input>).
9. Rate Button Did Not Validate Username
Issue: Users could submit rating without entering a username.
Fix: Added username .trim() validation before processing rating submission.

---

## Deployment

The project is deployed via **GitHub Pages**. The steps to deploy:

1. Commit and push your code to GitHub repository.
2. In repository settings → Pages → choose main branch as source.
3. Wait a few minutes — your site will be live at https://<username>.github.io/quiz-game/


Alternatively, you can deploy on any static hosting service (Netlify, Vercel, etc.) by pointing to index.html.

---

## Screenshots

You can find screenshots in the links below; 

### Game Screenshots

- [Homepage Screenshot](/assets/images/game-home-page.png)

- [Quiz Screen Screenshot](/assets/images/question-page.png)

- [Correct Answer Screen](/assets/images/correct.png)

- [Incorrect Answer Screen](/assets/images/incorrect.png)

- [Times up! You didn't Answer Screen](/assets/images/invalid.png)

- [Rate Alert Screen](/assets/images/rating-alert.png)

- [Username Alert Screen](/assets/images/username-alert.png)

- [Finished Screen](/assets/images/rates-username.png)


### Test Screentshots

- [HTML Validator](/assets/images/html-validator.png)

- [CSS Validator](/assets/images/css-validator.png)

- [JS Validator (JSHint)](/assets/images/jshint-validator.png)

- [JS Validator Extra](/assets/images/js-validator.png)

---

## Future Improvements

- Add ability for users to enter their name at start, and store high scores (localStorage or backend)
- Add more question categories / dynamic question loading
- Improve UI/UX design (animations, better feedback)
- Add accessibility features (keyboard navigation, screen‑reader support)
- Write automated tests


## Credits
### Content
- Home page text: Google Fonts.

### Resources & Assistance
- README structure and formatting inspired by:
    
    - [Horizon Photo Repository](https://github.com/Ri-Dearg/horizon-photo/blob/main/README.md)
    
    - [Code Institute README Template](https://github.com/Code-Institute-Solutions/readme-template/blob/master/README.md)
    
    - Additional support and content assistance provided by **ChatGPT (OpenAI)**.

### Media
- The images used on the portfolio page are from Open Source site.

### 👩‍💻 Author
Deniz Pandar
Project development and design
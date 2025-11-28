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

## 🎯 Project Purpose
This project was created to strengthen my front-end development skills — especially in **HTML**, **CSS**, and **JavaScript** — by building a small, fully functional application.  
The main goal is to combine learning and fun through a clean and responsive interface.

### Objectives
- Create an easy-to-use and accessible interface  
- Implement a simple but effective quiz logic  
- Demonstrate practical use of front-end web technologies  

### Target Audience
- Anyone who enjoys trivia games  
- Beginners learning web development  
- Users looking for a lightweight, browser-based game  

## 🎨 Design
The interface follows a minimalist and user-friendly design philosophy. The layout is clean, responsive, and optimized for both desktop and mobile devices.

![design](/assets/images/Screenshot%202025-10-22%20at%2011.50.10.png)

## 🧱 Project Structure
The application is organized as follows:
- **index.html** — Main game page and start screen  
- **script.js** — Game logic, scoring system, and interactions  
- **style.css** — Visual design and responsive styling  
- **assets/** — Images, icons, or other static resources  

## ✅ Features
- Clean and simple user interface  
- One question displayed at a time  
- “Next” button to move through questions  
- Score calculated and shown at the end  
- Planned: player name input and leaderboard  

## 🛠 Technologies Used
- HTML5  
- CSS3  
- JavaScript (ES6)  
- *(Optional)* Bootstrap 

# Credits
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
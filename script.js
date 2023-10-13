const questions = [
  {
    question: "What gets smaller as you take more of it?",
    answers: [
      {
        text: "A cake",
        correct: false,
      },
      {
        text: "An ice cream cone",
        correct: false,
      },
      {
        text: " A debt",
        correct: true,
      },
      {
        text: "A shrinking ray",
        correct: false,
      },
    ],
  },
  {
    question:
      "What starts with 'P' and ends with 'ORN,' and is something you might enjoy in bed?",
    answers: [
      {
        text: "Porn",
        correct: false,
      },
      {
        text: "P-Unicorn",
        correct: false,
      },
      {
        text: " None of the above",
        correct: false,
      },
      {
        text: "PopCorn",
        correct: true,
      },
    ],
  },
  {
    question: "I'm tall when I'm young and short when I'm old. What am I?",
    answers: [
      {
        text: "Dick",
        correct: false,
      },
      {
        text: "candle",
        correct: true,
      },
      {
        text: " boobs",
        correct: false,
      },
      {
        text: "All of the above",
        correct: false,
      },
    ],
  },
  {
    question: "What is bodyBuilder's mother tongue?",
    answers: [
      {
        text: "Bhojpuri",
        correct: true,
      },
      {
        text: "Assami",
        correct: false,
      },
      {
        text: " Bengali",
        correct: false,
      },
      {
        text: "Hindi",
        correct: false,
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let Score = 0;
function startQuiz() {
  currentQuestionIndex = 0;
  Score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    Score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `Tumhe Mile ha ${Score} aur sawal the ${questions.length}!`;
  nextButton.innerHTML = " Aur Marwao";
  nextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();

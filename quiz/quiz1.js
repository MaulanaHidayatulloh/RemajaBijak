let score = 0;
let timeLeft = 60;
let currentQuestion = 1;
let timer;

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time" + currentQuestion).innerText = timeLeft;

    if (timeLeft === 0) {
      document.getElementById("question" + currentQuestion).style.display =
        "none";
      document.getElementById("salah" + currentQuestion).style.display = "flex";
      setTimeout(goToNextQuestion, 5000);
      clearInterval(timer);
    }
  }, 1000);
}

function checkAnswer(selectedAnswer, questionNumber) {
  let isCorrect = false;
  switch (questionNumber) {
    case 1:
      if (selectedAnswer === "b") {
        isCorrect = true;
      }
      break;
    case 2:
      if (selectedAnswer === "c") {
        isCorrect = true;
      }
      break;
    case 3:
      if (selectedAnswer === "a") {
        isCorrect = true;
      }
      break;
    case 4:
      if (selectedAnswer === "b") {
        isCorrect = true;
      }
      break;
    case 5:
      if (selectedAnswer === "c") {
        isCorrect = true;
      }
      break;
    default:
      break;
  }

  if (isCorrect) {
    score += 20;
    document.getElementById("question" + questionNumber).style.display = "none";
    document.getElementById("jawaban" + questionNumber).style.display = "flex";
    setTimeout(goToNextQuestion, 5000);
  } else {
    document.getElementById("question" + questionNumber).style.display = "none";
    document.getElementById("salah" + questionNumber).style.display = "flex";
    setTimeout(goToNextQuestion, 5000);
  }

  clearInterval(timer);
}

function goToNextQuestion() {
  document.getElementById("question" + currentQuestion).style.display = "none";
  document.getElementById("jawaban" + currentQuestion).style.display = "none";
  document.getElementById("salah" + currentQuestion).style.display = "none";
  currentQuestion++;
  if (currentQuestion <= 5) {
    timeLeft = 60; // Reset waktu untuk pertanyaan berikutnya
    document.getElementById("question" + currentQuestion).style.display =
      "flex";
    document.getElementById("time" + currentQuestion).innerText = timeLeft;
    startTimer();
  } else {
    if (score >= 50) {
      document.getElementById("result-diatas50").style.display = "flex";
      document.getElementById("total-score-diatas50").innerText = score;
    } else {
      document.getElementById("result-dibawah50").style.display = "flex";
      document.getElementById("total-score-dibawah50").innerText = score;
    }
  }
}

// Mulai timer saat halaman dimuat
window.onload = function () {
  startTimer();
};

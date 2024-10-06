function quiz_score() {
  const quizForm = document.getElementById("quiz-form");
  const result = document.getElementById("result");
  let score = 0;

  const q1_answer = quizForm.querySelector('input[name="q1"]:checked');
  const q2_answer = quizForm.querySelector('input[name="q2"]:checked');
  const q3_answer = quizForm.querySelector('input[name="q3"]:checked');

  if (q1_answer && q1_answer.value === "correct") score++;
  if (q2_answer && q2_answer.value === "correct") score++;
  if (q3_answer && q3_answer.value === "correct") score++;

  result.innerHTML = `You scored ${score} out of 3`;
}

document.getElementById("submit-btn").addEventListener("click", quiz_score);

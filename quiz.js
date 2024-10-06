function quiz_score()
{
	const quizForm = document.getElementById('quiz-form')
	const result = document.getElementById('result')
	let score = 0;

	if (quizForm.q1.value === "correct") {console.log("Correct") score++}
	if (quizForm.q2.value === "correct") {console.log("Correct") score++}
	if (quizForm.q3.value === "correct") {console.log("Correct") score++}
	result.innerHTML =`You scored ${score} out of 3`
}
document.getElementById('submit-btn').addEventListener('click',quiz_score)
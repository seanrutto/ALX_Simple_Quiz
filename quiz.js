function checkAnswer(){
    var correctAnswer = "4";
    let userAnswerList = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = userAnswerList.value;

    var feedbackElement = document.getElementById('feedback');

    if(userAnswer === correctAnswer){
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }

    


}

document.getElementById('submit-answer').addEventListener("click", checkAnswer);



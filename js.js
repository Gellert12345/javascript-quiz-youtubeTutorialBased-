const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            {text: "Shark",correct: false},
            {text: "Blue whale",correct: true},
            {text: "Elephant",correct: false},
            {text: "Giraffe",correct: false},
        ]
    },
    {
        question: "Which is largest animal in the world?",
        answers: [
            {text: "Vatican",correct: true},
            {text: "Bhutan",correct: false},
            {text: "Nephal",correct: false},
            {text: "Shri Lanka",correct: false}, 
        ]       
    }, {
        question: "Which is largest desert in the world?",
        answers: [
            {text: "Kalahari",correct: false},
            {text: "Gobi",correct: false},
            {text: "Sahara",correct: false},
            {text: "Antartica",correct: true}, 
        ]   
    },{
        question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia",correct: false},
            {text: "Australia",correct: true},
            {text: "Artic",correct: false},
            {text: "Africa",correct: false}, 
        ]   
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() { //mikor indull a quiz minden lenulláz
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion(); //ha végig mega ez a fuciton akkor erre dobja tovabb showquesiton
}
function  showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const buttons = document.createElement("button");
        buttons.innerHTML = answer.text;
        buttons.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct) {
            button.dateset.correct = answer.correct;
        }
        button.addEventListener("click",selecAnswer);
    });
    
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
};
function selecAnswer(){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dateset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dateset.correct === "true" ) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = 'you scored ${score} out of ${questions.length}!';
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    correctQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click",()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
})
startQuiz();
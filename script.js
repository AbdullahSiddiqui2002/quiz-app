let questions = [
    {
        question: "What does HTML stand for?",
        option: [
            "Hypertext Markup Language",
            "Hypertext Makeup Language",
            "Highlevel Markup Language",
            "Hyperlink Markup Language"
        ],
        answer: "Hypertext Markup Language"
    }
]

let currentQuestion = 0;
let score = 0;

function startQuiz(){
    let username = document.getElementById("username");
    if (username.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a username.'
        });
        return;
    }
    document.getElementById("main_container").style.display = "none";
    document.getElementById("quiz_container").style.display = "block";

    loadQuestions()
}
function loadQuestions(){
    // <input type="radio" name="option" />
    // <label class="text-light">Hypertext markup language</label>
    // <br>
    let question = document.getElementById("question");
    let optionList = document.getElementById("option_list");
    optionList.innerHTML =""

    let currentQuestionObject = questions[currentQuestion]; 
    console.log(currentQuestionObject, "<-- current question")

    question.innerText = currentQuestionObject.question;


    for(var i = 0; i <  currentQuestionObject.option.length; i++ ){
        let inputElement = document.createElement("input");
        inputElement.type = "radio"
        inputElement.name = "option"
        inputElement.value = currentQuestionObject.option[i]

        let labelElement = document.createElement("label");
        labelElement.innerText = currentQuestionObject.option[i];
        labelElement.setAttribute("class", "text-light ms-2")

        optionList.appendChild(inputElement);
        optionList.appendChild(labelElement);
        optionList.appendChild(document.createElement("br"));

        console.log(inputElement)
    }

}

function nextQuest(){
    let selectedOption = document.querySelector('input[name="option"]:checked')
    console.log(selectedOption);

    if(selectedOption.value == questions[currentQuestion].answer){
       score++
    }
    currentQuestion++
    if(currentQuestion < questions.length){
        loadQuestions()
    }else{
        showResult()
    }
  
}


function showResult(){
    document.getElementById("quiz_container").style.display = "none";
    document.getElementById("result").style.display = "block";
    let username = document.getElementById("username").value;
    let textElement =  document.getElementById("resultText");
    textElement.innerText = `${username}, your Score is ${score}/${questions.length}`
}
function restartQuiz(){
    // apply logic of restart
}
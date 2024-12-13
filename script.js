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
    },
    {
        question: "How many types of CSS are there?",
        option: ["3", "2", "1", "4"],
        answer: "3"
    },
    {
        question: "What is JavaScript primarily used for?",
        option: [
            "Styling web pages",
            "Creating dynamic content on web pages",
            "Structuring web content",
            "Nothing"
        ],
        answer: "Creating dynamic content on web pages"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        option: ["text-color", "color", "font-color", "background-color"],
        answer: "color"
    },
    {
        question: "Which HTML element is used to define a header for a document or section?",
        option: ["<header>", "<head>", "<section>", "<footer>"],
        answer: "<header>"
    },
    {
        question: "Which JavaScript method is used to write content into an HTML document?",
        option: ["document.write()", "console.log()", "window.alert()", "innerHTML"],
        answer: "document.write()"
    },
    {
        question: "What is the correct way to include an external JavaScript file in an HTML document?",
        option: [
            "<script href='script.js'>",
            "<script name='script.js'>",
            "<script src='script.js'>",
            "<script file='script.js'>"
        ],
        answer: "<script src='script.js'>"
    },
    {
        question: "What is the default position value in CSS?",
        option: ["relative", "absolute", "static", "fixed"],
        answer: "static"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        option: ["<a>", "<link>", "<href>", "<hyperlink>"],
        answer: "<a>"
    },
    {
        question: "Which JavaScript keyword is used to declare a variable?",
        option: ["var", "let", "const", "All of the above"],
        answer: "All of the above"
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
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
function loadQuestions() {
    let question = document.getElementById("question");
    let optionList = document.getElementById("option_list");
    let current = document.getElementById("current");
    let total = document.getElementById("total");
    optionList.innerHTML = ""

    let currentQuestionObject = questions[currentQuestion];
    console.log(currentQuestionObject, "<-- current question")

    question.innerText = currentQuestionObject.question;

    current.innerText = currentQuestion + 1;
    total.innerText = questions.length;

    for (var i = 0; i < currentQuestionObject.option.length; i++) {
        let optiondiv = document.createElement("div");
        optiondiv.setAttribute("class", "optiondiv");
        let inputElement = document.createElement("input");
        inputElement.type = "radio"
        inputElement.name = "option"
        inputElement.value = currentQuestionObject.option[i]

        let labelElement = document.createElement("label");
        labelElement.innerText = currentQuestionObject.option[i];
        labelElement.setAttribute("class", "text-light ms-2")
        optionList.appendChild(optiondiv);
        optiondiv.appendChild(inputElement);
        optiondiv.appendChild(labelElement);
        console.log(inputElement)
    }

}

function nextQuest() {
    let selectedOption = document.querySelector('input[name="option"]:checked')
    console.log(selectedOption);

    if (!selectedOption) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please select an option.'
        });
        return;
    }

    if (selectedOption.value == questions[currentQuestion].answer) {
        score++
    }
    currentQuestion++
    if (currentQuestion < questions.length) {
        loadQuestions()
    } else {
        showResult()
    }

}


function showResult() {
    document.getElementById("quiz_container").style.display = "none";
    document.getElementById("result_container").style.display = "block";
    let name = document.getElementById("name");
    let remarks = document.getElementById("remarks");
    let username = document.getElementById("username").value;
    let textElement = document.getElementById("resultText");
    textElement.innerText = `Score: ${score} / ${questions.length}`;
    name.innerText = username;
    let percentage = (score / questions.length) * 100;
    if (percentage >= 70) {
        remarks.innerText = "Excellent 🔥🎉🌟";
    } else if (percentage >= 50) {
        remarks.innerText = "Good 👍😊";
    } else {
        remarks.innerText = "Needs Improvement 😕💪";
    }
}
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("result_container").style.display = "none";
    document.getElementById("main_container").style.display = "block";
}

const quizDB = [
    {
        question: "Q1: What is the fullform of HTML?",
        a: "Hi Text Markup Law",
        b: "Hello To My Land",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the fullform of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the fullform of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Train Product",
        c: "Hippo Transfer Product",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"   
    },
    {
        question: "Q4: What is the fullform of JS?",
        a: "Java Script",
        b: "Jana Script",
        c: "Jabe Script",
        d: "Jogaru Script",
        ans: "ans1"
    }
];

// Get all structured element & store it into a veriable
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

// Start 2 iterators, one for quizDB array another for score
let questionCount = 0;
let score = 0;

// This function is for load next Question & Options 
//todo[make same thing for back option]
const loadQuestion = () => {
    const questionList = quizDB[questionCount]

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
// function calling
loadQuestion();

// this function for get the checked answer's id
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
}

// this function is for deselecting previous selection for each time
const deselectAll = () => {
    answers.forEach((currAnsElem) => {
        currAnsElem.checked = false;
    })
}

// after clicking submit button followed things will happen
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> You Scored: ${score}/${quizDB.length} <h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        // location.reload() is an inbuild function to reload pages..
        showScore.classList.remove('score-area');
    }

});



// ----- TIMER -----



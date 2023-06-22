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
    submit.addEventListener('click', function submittion() {
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
// veriables
const quizz = document.querySelector('.quizz');
const mainContainer = document.querySelector('.main-container');
const semicircles = document.querySelectorAll('.semicircle');
const timer = document.querySelector('.timer');
const text = document.querySelector('.text');

// input(give allocated time)
const hr = 0;
const min = 0;
const sec = 10;

const hours = hr * 36000000;
const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = hours + minutes + seconds; // total allocated time in miliseconds
const startTime = Date.now(); // The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.
const futureTime = startTime + setTime; // present miliseconds + total allocated miliseconds

// loop
const timerLoop = setInterval(countDownTimer,0)


function countDownTimer() {
    const currentTime = Date.now(); // The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.
    const remainingTime = futureTime - currentTime;
    angle = (remainingTime/setTime) * 360; // angle will go down, 360-359-358-357...-180-...0 means rotate anticlockwise


    // timer
    const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const min = Math.floor((remainingTime / (1000 * 60)) % 60);
    const sec = Math.floor((remainingTime / 1000) % 60);

    timer.innerHTML = `
    <div>${hrs}</div>
    <div class="colon">:</div>
    <div>${min}</div>
    <div class="colon">:</div>
    <div>${sec}</div>
    `
    text.style.display = 'none';

    // 5sec-condition


    // end
    if(remainingTime < 0) {
        clearInterval(timerLoop); // stop setInterval() / progress bar
        semicircles[0].style.display = 'none'; 
        semicircles[1].style.display = 'none';
        semicircles[2].style.display = 'none';
    
        timer.innerHTML = `
        <div>00</div>
        <div class="colon">:</div>
        <div>00</div>
        <div class="colon">:</div>
        <div>00</div>
        `

        // submit the quizz by pressing submit button
        for(let i=0; i<=quizDB.length+1 ; i++) {
            submit.click();
        }
        
        mainContainer.style.margin = '14rem';
        quizz.style.margin = '5rem';
    }

}


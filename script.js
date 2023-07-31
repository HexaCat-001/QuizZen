const quizDB = [
  {
    question: "Q1: What is the fullform of HTML?",
    a: "Hi Text Markup Law",
    b: "Hello To My Land",
    c: "HyperText Markup Language",
    d: "Hypertext Markup Language",
    ans: "ans4",
  },
  {
    question: "Q2: What is the fullform of CSS?",
    a: "Cascading Style Sheets",
    b: "Cascading Style Sheep",
    c: "Cartoon Style Sheets",
    d: "Cascading Super Sheets",
    ans: "ans1",
  },
  {
    question: "Q3: What is the fullform of HTTP?",
    a: "Hypertext Transfer Product",
    b: "Hypertext Train Product",
    c: "Hippo Transfer Product",
    d: "Hypertext Transfer Protocol",
    ans: "ans4",
  },
  {
    question: "Q4: What is the fullform of JS?",
    a: "Java Script",
    b: "Jana Script",
    c: "Jabe Script",
    d: "Jogaru Script",
    ans: "ans1",
  },
  {
    question: "Q5: What is the fullform of IAS?",
    a: "Indian Apple Shop",
    b: "Indian Administritive Service",
    c: "Idhar Aa Saale",
    d: "Itna Accha Scooty",
    ans: "ans2",
  },
  {
    question: "Q6: What is the fullform of IAS?",
    a: "Indian Apple Shop",
    b: "Indian Administritive Service",
    c: "Idhar Aa Saale",
    d: "Itna Accha Scooty",
    ans: "ans2",
  },
  {
    question: "Q7: What is the fullform of IAS?",
    a: "Indian Apple Shop",
    b: "Indian Administritive Service",
    c: "Idhar Aa Saale",
    d: "Itna Accha Scooty",
    ans: "ans2",
  },
  {
    question: "Q8: What is the fullform of IAS?",
    a: "Indian Apple Shop",
    b: "Indian Administritive Service",
    c: "Idhar Aa Saale",
    d: "Itna Accha Scooty",
    ans: "ans2",
  },
  {
    question: "Q9: What is the fullform of IAS?",
    a: "Indian Apple Shop",
    b: "Indian Administritive Service",
    c: "Idhar Aa Saale",
    d: "Itna Accha Scooty",
    ans: "ans2",
  },
  {
    question: "Q10: What is the fullform of IAS?",
    a: "Indian Apple Shop",
    b: "Indian Administritive Service",
    c: "Idhar Aa Saale",
    d: "Itna Accha Scooty",
    ans: "ans2",
  },
];

// Get all structured element & store it into a veriable
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const mfr = document.querySelector("#mfr");
const back = document.querySelector("#back");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");
const slNumbers = document.querySelectorAll(".slNumbers");

// this array is for storing the answers
let ansArray = new Array(quizDB.length - 1);

// number of questions = number of sl numbers, questionlist = slList
let slNo = 0;
let sl = 0;
let buttonBox = new Array(quizDB.length - 1);
const loadSLNumbers = () => {
  for (let i = 0; i < quizDB.length; i++) {
    sl++;
    let boxContainer = document.getElementById("slBox");
    let box = document.createElement("button");
    box.classList.add("slNumbers");
    box.innerHTML = `${sl}`;
    boxContainer.appendChild(box);
    buttonBox[i] = box;
  }
};
// function calling
loadSLNumbers();

//! when any sl no/box is pressed the question & options related to that sl no will loaded
// buttonBox.addEventListener('click', () => {
//   const questionList = quizDB[5];

//   question.innerText = questionList.question;

//   option1.innerText = questionList.a;
//   option2.innerText = questionList.b;
//   option3.innerText = questionList.c;
//   option4.innerText = questionList.d;
// })



// Start 2 iterators, one for quizDB array another for score
let questionCount = 0;
let answerCount = 0;
let score = 0;

// This function is for load next Question & Options
const loadQuestion = () => {
  const questionList = quizDB[questionCount];

  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
  // back.style.display = 'none';

  //! checked the previously checked option if any 
  answers.forEach((curAnsElem) => {
    if (ansArray[questionCount] == option1.tagName || option2.tagName || option3.tagName || option4.tagName) {
      curAnsElem.checked
    }
  });

};
// function calling
loadQuestion();

//! Mark For Review
mfr.addEventListener("click", () => {

});

//! this function for get the checked answer's id and push the answer value
const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      ansArray.push(curAnsElem.id);
    }
  });
  return answer;
};

// this function is for deselecting previous selection for each time
const deselectAll = () => {
  answers.forEach((currAnsElem) => {
    currAnsElem.checked = false;
  });
};

// for  (>> next) button
submit.addEventListener("click", function submittion() {
  back.style.display = "block";

  // if no answer is checked then turn it red else turn it green
  if(getCheckAnswer() == null) {
    buttonBox[questionCount].style.background = "red";
    buttonBox[questionCount].style.color = "white";
  }
  else {
    buttonBox[questionCount].style.background = "green";
    buttonBox[questionCount].style.color = "white";
  }

  const checkedAnswer = getCheckAnswer();
  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }
  
  questionCount++;
  
  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
            <h3> You Scored: ${score}/${quizDB.length} <h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
            `;
    // location.reload() is an inbuild function to reload pages..
    showScore.classList.remove("score-area");
    back.style.display = "none";
    submit.style.display = "none";
    mfr.style.display = "none";
    clearInterval(timerLoop);

  }
  buttonBox[questionCount].style.background = "#DAF7A6";
  buttonBox[questionCount].style.color = '#323232';
});




// for  (<< previous) button
back.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }

  questionCount--;
  buttonBox[questionCount].style.background = "#DAF7A6 ";
  buttonBox[questionCount].style.color = '#323232';

  // if no answer is checked then turn it red else turn it green
  if(getCheckAnswer() == null) {
    buttonBox[questionCount+1].style.background = "red";
    buttonBox[questionCount+1].style.color = "white";
  }
  else 
  {
    buttonBox[questionCount+1].style.background = "green";
    buttonBox[questionCount+1].style.color = "white";
  }

  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  }
  if (questionCount < 1) {
    back.style.display = "none";
  }
});

// current option highlight
buttonBox[questionCount].style.background = "#DAF7A6 ";
buttonBox[questionCount].style.color = '#323232';

// Mark for review







// ----- TIMER -----
// veriables
const quizz = document.querySelector(".quizz");
const mainContainer = document.querySelector(".main-container");
const timer = document.querySelector(".timer");
const text = document.querySelector(".text");

// todo -> input(give allocated time)
const hr = 0;
const min = 0;
const sec = 20;

const hours = hr * 36000000;
const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = hours + minutes + seconds; // total allocated time in miliseconds
const startTime = Date.now(); // The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.
const futureTime = startTime + setTime; // present miliseconds + total allocated miliseconds

// loop
const timerLoop = setInterval(countDownTimer, 0);

function countDownTimer() {
  const currentTime = Date.now(); // The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.
  const remainingTime = futureTime - currentTime;

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
    `;
  text.style.display = "none";


  // end
  if (remainingTime < 0) {
    clearInterval(timerLoop); // stop setInterval() / progress bar

    timer.innerHTML = `
        <div>00</div>
        <div class="colon">:</div>
        <div>00</div>
        <div class="colon">:</div>
        <div>00</div>
        `;

    // submit the quizz by pressing submit button
    for (let i = 0; i <= quizDB.length + 1; i++) {
      submit.click();
      back.style.display = "none";
    }
    // quizz.style.margintop = "-10rem";
  }
}

// menu bar (= / x) & cross button
const menuBar = document.querySelector('#menu_bar');
const closBtn = document.querySelector('#close_btn');
const left_sideBar = document.querySelector('.left-sidebar');

menuBar.addEventListener('click',()=> {
  left_sideBar.style.display = "flex";
});

closBtn.addEventListener('click',()=> {
  left_sideBar.style.display = "none";
});


// input button uncheck
$('.answer').dblclick(function(){
  if($(this).is('checked'))
  {
      $(this).removeAttr('checked');
  }
});

// click menu button at 968 px width & click close button at 967px
function myFunction(x) {
  if (x.matches) { // If media query matches
    menuBar.click();
  }
  else {}
}

function myFunction2(y) {
  if (y.matches) { // If media query matches
    closBtn.click();
  }
  else {}
}

let x = window.matchMedia("(min-width: 968px)");
let y = window.matchMedia("(max-width: 967px)");

myFunction(x);
myFunction2(y);

x.addEventListener('change',myFunction);
y.addEventListener('change',myFunction2);




setInterval(myFunction(x,y) , 200);
let specificWidth =[x,y]
specificWidth.addEventListener('change',myFunction)
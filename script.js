//! Get all structured element & store it into a veriable
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
const startButton = document.querySelector("#startBTN");
const startDisplay = document.querySelector("#displayStart");
const quizBox = document.querySelector(".quizz");
const body = document.querySelector("body");
const leftSidebar = document.querySelector(".left-sidebar");
const navBar = document.querySelector(".nav-bar");
const heading = document.querySelector(".dbox-heading");
const quizz = document.querySelector(".quizz");
const mainContainer = document.querySelector(".main-container");
const timer = document.querySelector(".timer");
const text = document.querySelector(".text");
let elem = body;
// todo -> input(give allocated time)
const hr = 0;
const min = 5;
const sec = 0;

// heading animated
let typedHeading = new Typed(".dbox-heading",{
  strings: ["Go through the documents carefully before Starting!!"],
  loop:false,
  typeSpeed: 19
})

//! when start button click
startButton.addEventListener("click", () => {
  // fullscreen
  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch((err) => {
      alert(
        `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
      );
    });
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
  // heading
  heading.style.display = "none";
  // startbox
  startDisplay.style.display = "none";
  // display quizbox
  quizBox.style.display = "grid";
  // sctollto top
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  // set left sidebar height
  // leftSidebar.style.height = "113vh";
  // overflow hhidden
  body.style.overflow = "auto";
  // prevent keypress event
  // jQuery(document).keydown(function (e) {
  //   if (e.which === 27 || 91 || 92 || 122) {
  //     e.preventDefault();
  //     return;
  //   }
  //   console.log(e.which);
  // });
  // start timer
  const timerLoop = setInterval(countDownTimer, 0);
  // when exit full screen submit all questions autometically
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (document.fullscreenEnabled) {
        for (let i = 0; i < quizDB.length; i++) {
          submit.click();
        }
        clearInterval(timerLoop);
      }
    }
  });
  // ! Timer process Start
  const hours = hr * 36000000;
  const minutes = min * 60000;
  const seconds = sec * 1000;
  const setTime = hours + minutes + seconds; // total allocated time in miliseconds
  const startTime = Date.now(); // The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.
  const futureTime = startTime + setTime; // present miliseconds + total allocated miliseconds

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
  // ! Timer process End
});

// this array is for storing the answers
let ansArray = new Array(quizDB.length - 1);

//! number of questions = number of sl numbers, questionlist = slList
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

// Start 2 iterators, one for quizDB array another for score
let questionCount = 0;
let answerCount = 0;
let score = 0;

//! This function is for load next Question & Options
const loadQuestion = (num) => {
  const questionList = quizDB[questionCount];

  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
  // back.style.display = 'none';

  // ! checked the previously checked option if any
  answers.forEach((curAnsElem) => {
    if (
      ansArray[questionCount] == option1.tagName ||
      ansArray[questionCount] == option2.tagName ||
      ansArray[questionCount] == option3.tagName ||
      ansArray[questionCount] == option4.tagName
    ) {
      curAnsElem.checked;
    }
  });
};
// function calling
loadQuestion();

//! Mark For Review
let mrkArray = new Array(quizDB.length - 1);

mfr.addEventListener("click", () => {
  if (mrkArray[questionCount] == 1) {
    mrkArray[questionCount] = 0;
    if (getCheckAnswer() == null && mrkArray[questionCount] != 1) {
      buttonBox[questionCount].style.background = "red";
      buttonBox[questionCount].style.color = "white";
    } else {
      answers.forEach((currAnsElem) => {
        if (currAnsElem.checked == true) {
          buttonBox[questionCount].style.background = "green";
          buttonBox[questionCount].style.color = "white";
        }
      });
    }
    mfr.innerHTML = "Mark for Review";
  } else {
    mrkArray[questionCount] = 1;
    buttonBox[questionCount].style.background = "yellow";
    buttonBox[questionCount].style.color = "black";
    mfr.innerHTML = "Unmark";
  }
});

//! Mark for review Button value change
function buttonChange() {
  if (mrkArray[questionCount] == 1) {
    mfr.innerHTML = "Unmark";
  } else {
    mfr.innerHTML = "Mark for Review";
  }
}

//! this function for get the checked answer's id and push the answer value
const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
      ansArray.push(curAnsElem.id);
    }
  });
  return answer;
};

//! Array for storing answers temporarily

let temArray = new Array(quizDB.length - 1);

//! this function is for deselecting previous selection for each time
const deselectAll = () => {
  answers.forEach((currAnsElem) => {
    currAnsElem.checked = false;
  });
};

//! for loading previous answers
function loadAnswer() {
  let ansId = temArray[questionCount];
  if (ansId == "ans1") document.querySelector("#ans1").checked = true;
  else if (ansId == "ans2") document.querySelector("#ans2").checked = true;
  else if (ansId == "ans3") document.querySelector("#ans3").checked = true;
  else if (ansId == "ans4") document.querySelector("#ans4").checked = true;
}

//! for  (>> next) button
submit.addEventListener("click", function submittion() {
  back.style.display = "block";

  // if no answer is checked then turn it red else turn it green
  if (getCheckAnswer() == null && mrkArray[questionCount] != 1) {
    buttonBox[questionCount].style.background = "red";
    buttonBox[questionCount].style.color = "white";
  } else if (mrkArray[questionCount] == 1) {
    buttonBox[questionCount].style.background = "yellow";
    buttonBox[questionCount].style.color = "black";
  } else {
    answers.forEach((currAnsElem) => {
      if (currAnsElem.checked == true) {
        buttonBox[questionCount].style.background = "green";
        buttonBox[questionCount].style.color = "white";
      }
    });
  }

  const checkedAnswer = getCheckAnswer();
  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }

  // For storing previous selected values
  answers.forEach((curElem) => {
    if (curElem.checked) {
      temArray[questionCount] = curElem.id;
    }
  });

  questionCount++;

  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
    loadAnswer();
    buttonChange();
  } else {
    showScore.innerHTML = `
            <h3> You Scored: ${score}/${quizDB.length} <h3>
            <button class="btn" onclick="location.reload()">Exit Now</button>
            `;
    // location.reload() is an inbuild function to reload pages..
    showScore.classList.remove("score-area");
    back.style.display = "none";
    submit.style.display = "none";
    mfr.style.display = "none";
  }
  buttonBox[questionCount].style.background = "#DAF7A6";
  buttonBox[questionCount].style.color = "#323232";
});

//! for  (<< previous) button
back.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }

  questionCount--;

  buttonBox[questionCount].style.background = "#DAF7A6 ";
  buttonBox[questionCount].style.color = "#323232";

  // if no answer is checked then turn it red else turn it green
  if (getCheckAnswer() == null && mrkArray[questionCount + 1] != 1) {
    buttonBox[questionCount + 1].style.background = "red";
    buttonBox[questionCount + 1].style.color = "white";
  } else if (mrkArray[questionCount + 1] == 1) {
    buttonBox[questionCount + 1].style.background = "yellow";
    buttonBox[questionCount + 1].style.color = "black";
  } else {
    answers.forEach((currAnsElem) => {
      if (currAnsElem.checked == true) {
        buttonBox[questionCount + 1].style.background = "green";
        buttonBox[questionCount + 1].style.color = "white";
      }
    });
  }
  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
    loadAnswer();
    buttonChange();
  }
  if (questionCount < 1) {
    back.style.display = "none";
  }
});

// current option highlight
buttonBox[questionCount].style.background = "#DAF7A6 ";
buttonBox[questionCount].style.color = "#323232";

// menu bar (= / x) & cross button
const menuBar = document.querySelector("#menu_bar");
const closBtn = document.querySelector("#close_btn");
const left_sideBar = document.querySelector(".left-sidebar");

menuBar.addEventListener("click", () => {
  if (left_sideBar.style.display == "flex") {
    // left_sideBar.style.display ="none" ;
  } else {
    left_sideBar.style.display = "flex";
  }
});

menuBar.addEventListener("dblclick", () => {
  left_sideBar.style.display = "none";
});

closBtn.addEventListener("click", () => {
  left_sideBar.style.display = "none";
});

// input button uncheck
$(".answer").dblclick(function () {
  if ($(this).is("checked")) {
    $(this).removeAttr("checked");
  }
});

// click menu button at 968 px width & click close button at 967px
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    menuBar.click();
    leftSidebar.style.height = "134vh";
  } else {
  }
}

function menuclose() {
  closBtn.click();
}

function myFunction2(y) {
  if (y.matches) {
    // If media query matches
    closBtn.click();
    leftSidebar.style.height = "auto";
  } else {
  }
}

let x = window.matchMedia("(min-width: 968px)");
let y = window.matchMedia("(max-width: 967px)");

myFunction2(y);
myFunction(x);

x.addEventListener("change", myFunction);
y.addEventListener("change", myFunction2);

setInterval(myFunction(x, y), 200);
let specificWidth = [x, y];
specificWidth.addEventListener("change", myFunction);


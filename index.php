<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Attend a Quiz</title>

  <!-- link AOS(animation) -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
  <!-- *Link FontAwsome kit -->
  <script src="https://kit.fontawesome.com/7fad1074ee.js" crossorigin="anonymous"></script>
  <!-- *Link style.css file -->
  <link rel="stylesheet" href="./style.css" />
  <!-- jquery -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body>
  <!-- navigation -->
  <nav class="nav-bar">
    <div class="logo">
      <div class="menuBtn">
        <input type="checkbox" name="" id="check" />
        <div class="btnOne">
          <label for="check">
            <i class="fa-solid fa-bars" ondblclick="menuclose()" id="menu_bar"></i>
          </label>
        </div>
      </div>

      QuizZen
    </div>

    <!-- //Timer -->
    <!-- timer & progressbar -->
    <div class="main-container center">
      <!-- //Timer -->
      <div class="timer-container center">
        <div class="timer center"></div>
        <br />
        <div class="text center"></div>
      </div>
    </div>
  </nav>

  <main>
    <!-- main-contents -->
    <div class="content">
      <!-- left-sidebar -->
      <div data-aos="fade-right" data-aos-duration="2000" class="left-sidebar">
        <div class="btnTwo">
          <label for="check">
            <i class="fa-solid fa-close" id="close_btn"></i>
          </label>
        </div>

        <h2 id="menubar-heading">Total Number of Questions</h2>
        <!-- number box -->
        <div id="slBox"></div>
      </div>

      <!-- Middle Container Start -->
      <div class="middle-container">
        <h1 class="dbox-heading"></h1>
        <!-- start-box -->
        <div id="displayStart" data-aos="zoom-in-up" data-aos-duration="1000" class="strt-box center">
          <div class="display-box" id="Subject">
            <h3 class="display-box-heading">Subject</h3> &nbsp;&nbsp; <span class="display-box-span">
              < -==->
            </span> &nbsp;&nbsp; <h3 class="display-box-heading">Instagram Reels</h3>
          </div>
          <div class="display-box" id="mentor">
            <h3 class="display-box-heading">Mentor</h3> &nbsp;&nbsp; <span class="display-box-span">
              < -==->
            </span> &nbsp;&nbsp; <h3 class="display-box-heading">Ranu Mondol</h3>
          </div>
          <div class="display-box" id="SET No.">
            <h3 class="display-box-heading">SET No.</h3> &nbsp;&nbsp; <span class="display-box-span">
              < -==->
            </span> &nbsp;&nbsp; <h3 class="display-box-heading">01</h3>
          </div>
          <div class="display-box" id="Full-Marks">
            <h3 class="display-box-heading">Full Marks</h3> &nbsp;&nbsp; <span class="display-box-span">
              < -==->
            </span> &nbsp;&nbsp; <h3 class="display-box-heading">12</h3>
          </div>
          <div class="display-box" id="Total-Time">
            <h3 class="display-box-heading">Total Time</h3> &nbsp;&nbsp; <span class="display-box-span">
              < -==->
            </span> &nbsp;&nbsp; <h3 class="display-box-heading">20 Sec.</h3>
          </div>
          <div class="display-box" id="Type">
            <h3 class="display-box-heading">Type</h3> &nbsp;&nbsp; <span class="display-box-span">
              < -==->
            </span> &nbsp;&nbsp; <h3 class="display-box-heading">MCQ</h3>
          </div>
          <div class="display-box" id="Username">
            <h3 class="display-box-heading">Username</h3> &nbsp;&nbsp; <span class="display-box-span">
              < -==->
            </span> &nbsp;&nbsp; <input type="text" class="display-box-input" name="username" id="username"
              placeholder="ex. Hero Alam">
          </div>
          <div class="display-box" id="Password">
            <h3 class="display-box-heading">Password</h3> &nbsp;&nbsp; <span class="display-box-span">
              < -==->
            </span> &nbsp;&nbsp; <input type="password" class="display-box-input" name="username" id="username"
              placeholder="ex. Khela .-. Hobe">
          </div>
          <button class="display-box-button" id="startBTN">Let's Start</button>
        </div>
        <!-- Quizz -->
        <div data-aos="flip-up" data-aos-duration="2000" class="quizz">
          <div class="inner-div">
            <h2 data-aos="fade-up" data-aos-duration="2000" class="question">Question Comes Here</h2>
            <ul>
              <li>
                <input type="radio" name="options" id="ans1" class="answer" />
                <label for="ans1" id="option1">Answer Option</label>
              </li>

              <li>
                <input type="radio" name="options" id="ans2" class="answer" />
                <label for="ans2" id="option2">Answer Option</label>
              </li>

              <li>
                <input type="radio" name="options" id="ans3" class="answer" />
                <label for="ans3" id="option3">Answer Option</label>
              </li>

              <li>
                <input type="radio" name="options" id="ans4" class="answer" />
                <label for="ans4" id="option4">Answer Option</label>
              </li>
            </ul>

            <div class="buttons">
              <button id="back" class="iterator">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.5em"
                  width="2.5em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 0 1 0-12.9l246-178a8 8 0 0 1 12.7 6.5v46.8z">
                  </path>
                </svg>
              </button>

              <button id="submit" class="iterator">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.5em"
                  width="2.5em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z">
                  </path>
                </svg>
              </button>
            </div>

            <button id="mfr">Mark for Review</button>

            <div id="showScore" class="score-area"></div>
          </div>
        </div>
      </div>
      <!-- Middle Content End -->

      <!-- right-sidebar -->
      <div class="right-sidebar"></div>
    </div>
  </main>

  <footer>
    <div class="footer">
      <h2 id="copyright-text">&copy; BinaryKompass | All rights reserved.</h2>
    </div>
  </footer>

  <!-- link AOS(animation) -->
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
  <!-- *Link GSAP cdn -->
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js" integrity="sha512-cOH8ndwGgPo+K7pTvMrqYbmI8u8k6Sho3js0gOqVWTmQMlLIi6TbqGWRTpf1ga8ci9H3iPsvDLr4X7xwhC/+DQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> -->

  <!-- jquery -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
  <!-- typed js -->
  <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
  <!-- *Link script.js file -->
  <!-- <script src="./quizData.js"></script> -->
  <?php 
    require_once "./connection.php";
    $sql = "SELECT * FROM quiz_table";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));
    $techarray = array();
    while($row =mysqli_fetch_assoc($result)){
      $techarray[] = $row;
    }
  ?>
  <script>
    const quizDB = <?php echo json_encode($techarray); ?>
  </script>
  <script src="./script.js"></script>
</body>

</html>
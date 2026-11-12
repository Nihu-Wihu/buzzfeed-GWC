/*Add your JavaScript here*/

var excited = 0;
var ground = 0;
var questionCount = 0;

var result = document.getElementById("result");


var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");


var restart = document.getElementById("restart")

restart.addEventListener("click", restarts)


q1a1.addEventListener("click", excitedState);
q1a2.addEventListener("click", groundState);

q2a1.addEventListener("click", groundState);
q2a2.addEventListener("click", excitedState);

q3a1.addEventListener("click", excitedState);
q3a2.addEventListener("click", groundState);


function groundState(){
  ground++;
  questionCount++;
   console.log("questionCount = " + questionCount + " ground = " + ground);

  if(questionCount == 3){
  console.log("The quiz is done!")
  }

  updateResult();
}

function excitedState(){
  excited++;
  questionCount++;
   console.log("questionCount = " + questionCount + " excited = " + excited);
  
  if(questionCount == 3){
  console.log("The quiz is done!")
  }

  updateResult();
}

function updateResult(){
  if(excited >= 2){
    result.innerHTML ="You are an excited electron!";
    console.log("excited electron!")
  } else if(ground >= 2){
    result.innerHTML = "You are a ground-state electron!";
    console.log("Ground-state Electron!");
  }
}

function restarts(){
  result.innerHTML = "You result is...";
  ground = 0;
  excited = 0;
  questionCount = 0;
}


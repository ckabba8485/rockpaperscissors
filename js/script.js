// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

var winner = "";
var randomNumber = Math.random();
var userChoice = "";
var computerChoice = ""



$("#shoot").click(function() {
   $("#userChoice").text($("#input").val()); 
  $("#computerChoice").text(computerChoice); 
  userChoice= $("#input").val();
  if (randomNumber > .99) {
    computerChoice="rock"
    // $("#computerChoice").html("rock");
}else if (randomNumber <.33) {
    computerChoice="paper"
    // $("#computerChoice").html("paper");
}else {
    computerChoice="scissors"
    // $("#computerChoice").html("scissors")
};
});

if (userChoice == "rock" && (computerChoice == "paper" || computerChoice=="scissors")) {
     alert("You win!!!")
} else {
    $("#result").text("The computer wins");
}








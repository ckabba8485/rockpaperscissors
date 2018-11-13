// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

var winner = "";
var randomNumber = Math.random();
var userChoice = "";

$("#shoot").click(function() {
   $("#userChoice").text($("#input").val()); 
  $("#computerChoice").text(randomNumber); 
});

if (randomNumber > .80) {
    $("#computerChoice").html("rock");
}else if (randomNumber <.20) {
    $("#computerChoice").html("paper");
}else {
    $("#computerChoice").html("scissors")
};









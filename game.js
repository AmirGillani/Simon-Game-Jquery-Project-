
//pattern that user clicks
var userClickedPattern = [];

//pattern that game automates
var gamePattern=[];

//counter to start game
var counter=1;

//levels
var level=0;

//press any key to start

$(document).keypress( function(){ if (counter == 1) {nextSequence(); counter++;} });

//button flash

function nextSequence() {

    //if we dont reinitiate this to empty then user just have to click one button which was lastly glowed
    //but we want user to enter multiple buttons to achieve the sequence show to him previously
    userClickedPattern = [];

    level++;
    $("h1").text("Level "+level);
   
    //random number from 0-3
    var randomNumber = Math.floor(Math.random() * 4);

    //automatically glow number depending upon random number
    switch (randomNumber) {

        case 0:
            //flash green button
            $("#green").fadeIn(100).fadeOut(100).fadeIn(100);

            //play sound of button
            playSound("green");

            //enter flashed button in array
            gamePattern.push("green");
            break;

        case 1:
            $("#red").fadeIn(100).fadeOut(100).fadeIn(100);
            gamePattern.push("red");
            playSound("red");
            break;

        case 2:
            $("#yellow").fadeIn(100).fadeOut(100).fadeIn(100);
            gamePattern.push("yellow");
            playSound("yellow");
            break;

        case 3:
            $("#blue").fadeIn(100).fadeOut(100).fadeIn(100);
            gamePattern.push("blue");
            playSound("blue");
            break;

        default:
            break;
    }
}

//user clicks sequence of buttons

$(".btn").click(function() {

    //user will click multiple buttons and this will fetch user's clicked button id i.e green
    var userChoosenColor = $(this).attr("id");

    //play sound of choosen color
    playSound(userChoosenColor);

    //apply animation
    animatePress(userChoosenColor);

    //push in user clicked pattern
    userClickedPattern.push(userChoosenColor);

    //Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
    checkAnswer(userClickedPattern.length-1);

});


function checkAnswer(currentLevel) {

    //if both of arrays last index have same values
    if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {

      console.log("success");

      //if both arrays length is same then call next sequence

      if (userClickedPattern.length == gamePattern.length)
      
      { setTimeout(function () {nextSequence();}, 1000);}

    } 
    else {

      console.log("wrong");
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(function(){ $("body").removeClass("game-over");},200);
      $("h1").text("Game Over, Press Any Key to Restart");
      startOver();
    }

}

function startOver(){
//pattern that user clicks
var userClickedPattern = [];

//pattern that game automates
gamePattern=[];
counter=1;
level=0;

//press any key to start

$(document).keypress( function(){ if (counter == 1) {nextSequence(); counter++;} });
}

function animatePress(currentColour) {

    $("#" + currentColour).addClass("pressed")
    setTimeout(function () { $("#" + currentColour).removeClass("pressed"); }, 100);


}
function playSound(name) {

    //Take the code we used to play sound in the nextSequence() function and add it to playSound().

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}





var userPattern = [];
var gamePattern = [];
var level = 0;
$(".btn").click(function () {
    var check = $(this).attr("id");
    makeSound(check);
    makeAnimation(check);
    userPattern.push(check);
    checkAnswer(userPattern.length - 1);

});
function gameStart() { $("#play").hide(); gameSequence(); };
function makeSound(check) { var sound = new Audio("sounds/" + check + ".mp3"); sound.play(); };
function makeAnimation(check) { $("#" + check).addClass("pressed"); setTimeout(function () { $("#" + check).removeClass("pressed") }, 100); }
function gameSequence() {
    userPattern = [];
    level++;

    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    switch (randomNumber) {
        case 0:
            $(".green").fadeIn(100).fadeOut(100).fadeIn(100);
            gamePattern.push("green");
            break;
        case 1:
            $(".red").fadeIn(100).fadeOut(100).fadeIn(100);
            gamePattern.push("red");
            break;
        case 2:
            $(".yellow").fadeIn(100).fadeOut(100).fadeIn(100);
            gamePattern.push("yellow");
            break;
        case 3:
            $(".blue").fadeIn(100).fadeOut(100).fadeIn(100);
            gamePattern.push("blue");
            break;
    }
}
function checkAnswer(check) {
    if (gamePattern[check] == userPattern[check]) {
        if (gamePattern.length == userPattern.length) {
            console.log("success");
            setTimeout(function () { gameSequence(); }, 1000);
        }
    } else {
        console.log("failure");
        makeSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () { $("body").removeClass("game-over"); }, 100);
        $("h1").text("Game Over Play Again !!!");
    }
    gameOver();

}
function gameOver() { level = 0; userPattern = [], gamePattern = []; $("#play").show(); };

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level=0;
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    level++;
    $("#level-title").text("Level "+level);
    playSound(randomChosenColour);
}
$(".btn").click(function(e) {
    var userChosenColour = $(e.target).attr("id");
    userClickedPattern.push(userChosenColour);
    animateUserChosenColour(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animateUserChosenColour(colour){
    $("#"+colour).addClass("pressed");
    setTimeout(function(){
        $("#"+colour).removeClass("pressed");
    },100);

}
$(document).keypress(function(){
    if(gamePattern.length === 0){
        nextSequence();
    }
})
function checkAnswer(index){
    if (gamePattern[index] === userClickedPattern[index]){
        if (gamePattern.length === userClickedPattern.length)
            { 
                setTimeout(function(){
                    nextSequence();
                },1000);
                userClickedPattern = [];
            }
        }
    else{ 
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}
function startOver(){
    level=0;
    gamePattern=[];
    userClickedPattern=[];
}

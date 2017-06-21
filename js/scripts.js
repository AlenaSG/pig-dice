//business logic
//set global vaiable
//Set Objects

function Player(name, currentScore, total) {
  this.name = name;
  this.currentScore = currentScore;
  this.total = total;
}

var playerOne = new Player("Player1", 0, 0);
var playerTwo = new Player("Player2", 0, 0);
var currentPlayer = playerOne;
var playerOneCurrent = true;
var random = randomNumber();

function changeCurrentPlayer() {
  if (playerOneCurrent) {
    playerOneCurrent = false;
    currentPlayer = playerTwo;
  } else {
    playerOneCurrent = true;
    currentPlayer = playerOne;
  }
}


function randomNumber() {
  return Math.floor((Math.random() * 6) + 1);
}

Player.prototype.calcScore = function() {
  if (random === 1) {
  this.currentScore = 0;
  } else {
  this.currentScore += random;
  }
}

Player.prototype.calcTotal = function() {
  this.total += this.currentScore;
  this.currentScore = 0;
  }



function gameOver() {
  if (currentPlayer.total >= 10) {
    alert(currentPlayer.name + " You are the winner!");
    playerOne.total = 0;
    playerTwo.total = 0;
  }
}

function resetUI() {
  $("#currentP").text(currentPlayer.name);
  $("ul#current-roll").text(0);
  $("ul#current-score").text(0);
  $("ul#player1-total-score").text(playerOne.total);
  $("ul#player2-total-score").text(playerTwo.total);
}

////USER INTERFACE////
$(document).ready(function() {
  resetUI();

  $("#button-roll").click(function() {
   random = randomNumber();
   currentPlayer.calcScore();
    $("ul#current-roll").text(random);
    $("ul#current-score").text(currentPlayer.currentScore);
    if (random === 1) {
      changeCurrentPlayer();
      $("#currentP").text(currentPlayer.name);
    }
  });

  $("#button-hold").click(function() {
      currentPlayer.calcTotal();
      gameOver();
      resetUI();
      changeCurrentPlayer();
  });
});

////////////////////// Player 2/////////////////////////////
//$("#button-roll2").submit(function(event) {


  //var yourSecondScore = showScore();
  //$("ul#player2-roll").text(yourSecondScore);
  //$("ul#player2-total-score").text(yourSecondTotalScore);



//set up variables
console.log('hello');
// array of squares
//var rows=[];//array of a row
var squares=[];//array of all rows
//var arraySize = 3;//a square array only
var $player1Input = $('#p1');
var $player2Input = $('#p2');
var imageX = "http://iconbug.com/data/b5/256/390e2c432ea26d61fc6f72ba8f148894.png"; //cross
var image0 = "http://iconbug.com/data/89/256/778283813f4a1ae98a3e6375243fe0d6.png"; // naught
var $playBtn = $('#play');
var $againBtn = $('#again');
var $finishBtn = $('#finish');
var $instructionsBtn = $('#instr');
var $clickOnBoard = $('.squares');
var turn = true;//keeps record of whose turn it is
var $messageBox = $('#message');//box for instructions and winner announcement
var gameWon = false;
var scoreOfP1 = 0;
var scoreOfP2 = 0;


var winningArray =[[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]] //all possible connotations of a win

// makeEmptyArray() and clear board
var makeEmptyArray = function() {
  squares =[];
  for (i=0; i<9; i++) {
    squares.push("");
  }
  console.table(squares);
  for (i=0; i<9; i++){
    var $imgId = $("#img" + i);
    $imgId.attr('src', "");
}
}

var startGame = function(event){
  gameWon=false;
  //debugger
  makeEmptyArray();
  //getPlayers();
  $messageBox.text("OK " + $player1Input.val() + " click on a square");

// player 1....
// var turn = true;
// return
}

var makePlay = function(event){
//check who's turn it is
  if (turn === true) {
    // add eventlistener on the board and insert 0 into array
   //keeps record of whose turn it is
    //use event target to equate position on board to position in array
    var $posnClicked = Number(event.target.id);
    console.log($posnClicked);
    //insert 0 into array squares
    squares[$posnClicked] = "0";
    //display eye onto squares
    // div id is $posnClicked, img id is img$posnClicked

    var squareId = "#img" + $posnClicked;
     var $imgId = $(squareId);
    $imgId.attr('src', image0);

  } else {
    //as above but for 'X'
    var $posnClicked = Number(event.target.id);
    console.log($posnClicked);
    squares[$posnClicked] = "X";
    var squareId = "#img" + $posnClicked;
    var $imgId = $(squareId);
    $imgId.attr('src', imageX);

  }
    checkWinningMove(turn);
    if (gameWon === true) {
      return;
    }
}

// var finishGame = function{
//
// }

var checkWinningMove = function(){
//  debugger
//console.log('sdfsfsdfsf');
//Check to see if this move won the game
  if (turn === true) {
  //check for 0s in array
  //look thru winningArray at each line array to see if contents ==="0" at 3
  //positions, then winner if so
      for (i=0; i<winningArray.length; i++) {
      var winningCombination = [winningArray[i]];
      if ((squares[winningArray[i][0]] === "0") && (squares[winningArray[i][1]] ==="0") && (squares[winningArray[i][2]])==="0") {
        // then winning move
        winnerOfGame(turn);
        return gameWon;
      }
    }
  } else {
  //check for Xs in array
    for (i=0; i<winningArray.length; i++) {
    var winningCombination = [winningArray[i]];
    if ((squares[winningArray[i][0]] === "X") && (squares[winningArray[i][1]] ==="X") && (squares[winningArray[i][2]])==="X") {
      // then winning move
      winnerOfGame(turn);
      return gameWon;
    }
    }
  }
  if (gameWon === true) {
    return gameWon;
  } else {
// if not winning move.... is board full?
if (squares.indexOf("") === -1){
    $messageBox.text("No winner this time, to play again, click on PLAY");
    gameWon = true;
    return gameWon;
  }
//if not winning move, toggle turn!!!!
  if (turn === true) {
    turn = false;
    $messageBox.text("OK " + $player2Input.val() + " click on a square");
  } else {
    turn = true;
    $messageBox.text("OK " + $player1Input.val() + " click on a square");
  }
  gameWon=false;
return turn;
}
}

var winnerOfGame = function(){
//  debugger
  //based on whos turn it is the winner is announced
  //with bells and whistles
console.log("there's a winner");

if (turn === true) {
  //winner is player 1
  console.log("winner is Player 1");
  $messageBox.text("WINNER is " + $player1Input.val() + "....... To play again, press PLAY AGAIN");
} else {
  //winner is player 2
  console.log("winner is Player 2");
  $messageBox.text("WINNER is " + $player2Input.val() + "....... To play again, press PLAY AGAIN");
}
//debugger
//there is a winner, so we need to finish the game
gameWon = true;
return gameWon;
}

// var nextGo = function(){
// // to  switch player
// //change player background-color and send message your go();
// console.log("your go");
// }

var keepScore = function(){
//add 1 to score of winning players

startGame();

}

var instructions = function(){
  alert("contents of readme file");
}

$playBtn.click(startGame);
$againBtn.click(keepScore);
$clickOnBoard.click(makePlay);
//$finishBtn.click(do something);
$instructionsBtn.click(instructions);

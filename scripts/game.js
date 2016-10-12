

//set up variables
console.log('hello');
// array of squares
var rows=[];//array of a row
var squares=[];//array of all rows
var arraySize = 3;//a square array only
var $player1 = $('.p1');
var $player2 = $('.p2');
var imageX = "images/gollum.png"; //cross
var image0 = "images/eye_of_sauron.png"; // naught
var $playBtn = $('#play');
var $clickOnBoard = $('.squares');
var turn = true;//keeps record of whose turn it is

var winningArray =[[0,1,2], [4,5,6], [7,8,9]] //all posible connotations of a win

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

//get player names
var getPlayers = function(){
}

var startGame = function(event){
  makeEmptyArray();
// player 1....
var turn = true;
return
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
  nextGo(turn);
}


var checkWinningMove = function(){
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
      }
    }
  } else {
  //check for Xs in array
    for (i=0; i<winningArray.length; i++) {
    var winningCombination = [winningArray[i]];
    if ((squares[winningArray[i][0]] === "X") && (squares[winningArray[i][1]] ==="X") && (squares[winningArray[i][2]])==="X") {
      // then winning move
      winnerOfGame(turn);
    }
    }
  }
//if not winning move, toggle turn!!!!
  if (turn === true) {
  turn = false;
  } else {
    turn = true;
  }
return turn;
}

var winnerOfGame = function(){
  //based on whos turn it is the winner is announced
  //with bells and whistles
console.log("there's a winner");
if (turn === "0") {
  //winner is player 1
  console.log("winner is Player 1");
} else {
  //winner is player 2
  console.log("winner is Player 2");
}
  //ask if they want to play again
  //reset array and clear board
  var r = confirm("Do you want to play again?");
if (r == true) {
    startGame();
} else {
    //close
}
  prompt("do you want to play again?");
}

var nextGo = function(){
// to  switch player
//change player background-color and send message your go();
console.log("your go");
}


$playBtn.click(startGame);
$clickOnBoard.click(makePlay);

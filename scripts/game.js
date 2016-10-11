

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



var makeEmptyArray = function() {
for (j=0; j<arraySize; j++) {
  for (i=0; i<arraySize; i++) {
    rows.push("");
  }
  squares.push(rows);
  rows =[];
}
console.table(squares);
}
// makeEmptyArray();

var getPlayers = function(){
}

var startGame = function(){
  makeEmptyArray();
// player 1....
var turn = true;
return
}

var nextGo = function(){
//check who's turn it is
debugger
  if (turn = true) {
    // add eventlistener on the board and insert 0 into array
   //keeps record of whose turn it is
    // $clickOnBoard.click(function(){
    var $posnClicked = $clickOnBoard.id;
    console.log($posnClicked);
    //insert 0 into array squares
    squares[0][2] = "0";
    //display gollum onto squares div
    $posnClicked.img = image0;
  } else {
    //as above but for 'X'
  }
}

$playBtn.click(startGame);
$clickOnBoard.click(nextGo);
var checkWinningMove = function(){


//Check to see if this move won the game

//if not winning move
turn = false;


}

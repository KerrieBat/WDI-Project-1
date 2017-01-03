
var instr = "This is a simple game of tic tac toe for two players. First type in your names and click on NEW GAME, then take it in turns to click in the square you choose. If you press PLAY AGAIN, this will keep a running tally of the scores. NEW GAME will reset the scores";
//set up variables
console.log('hello');
var squares=[];// array of squares
var $player1Input = $('#p1');
var $player2Input = $('#p2');
var imageX = "images/greenmonster.png"; //cross
var image0 = "images/purplemonster.png"; // naught
var $playBtn = $('#play');
var $againBtn = $('#again');
var $finishBtn = $('#finish');
var $instructionsBtn = $('#instr');
var $clickOnBoard = $('.squares');
var turn = true;//keeps record of whose turn it is
var $messageBox = $('#message');//box for instructions and winner announcement
var gameWon = false;
var gameDraw = false;
var scoreOfP1 = 0;
var scoreOfP2 = 0;
var $scoreOfP1 = $('#scoreP1');
var $scoreOfP2 = $('#scoreP2');
var win1;
var win2;
var win3;

var winningArray =[[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]] //all possible connotations of a win


var makeEmptyArray = function() {
  clearInterval(win1);
  clearInterval(win2);
  clearInterval(win3);
  for (var i = 0; i < 999; i++) {
    clearInterval(i);
  }
// makeEmptyArray() and clear board
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
  gameDraw = false;
  $('.board img').show()
  makeEmptyArray();
  $messageBox.text("OK " + $player1Input.val() + " click on a square");
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
        //flash winning line
        //position of winning squares winningArray[i][0]and [1] and [2]
        //images which need to flash are $('#img + winningArray[i][0]')
        var $winningImage1 = $('#img'+winningArray[i][0]);
        var $winningImage2 = $('#img'+winningArray[i][1]);
        var $winningImage3 = $('#img'+winningArray[i][2]);

        win1 = setInterval(function() {$winningImage1.toggle();}, 300);
        win2 = setInterval(function() {$winningImage2.toggle();}, 300);
        win3 = setInterval(function() {$winningImage3.toggle();}, 300);

        winnerOfGame(turn);
        return gameWon;
      }
    }
  } else {
  //check for Xs in array
    for (i=0; i<winningArray.length; i++) {
    var winningCombination = [winningArray[i]];
    if ((squares[winningArray[i][0]] === "X") && (squares[winningArray[i][1]] ==="X") && (squares[winningArray[i][2]])==="X") {
      //flash winning line
      var $winningImage1 = $('#img'+winningArray[i][0]);
      var $winningImage2 = $('#img'+winningArray[i][1]);
      var $winningImage3 = $('#img'+winningArray[i][2]);

      win1 = setInterval(function() {
        $winningImage1.toggle();
      }, 300);
      win2 = setInterval(function() {
        $winningImage2.toggle();
      }, 300);
      win3 = setInterval(function() {
        $winningImage3.toggle();
      }, 300);
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
    $messageBox.text("No winner this time, click on PLAY AGAIN");
    gameWon = true;
    gameDraw = true;
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


var keepScore = function(){
//add 1 to score of winning players
  if (gameWon === true && gameDraw===false) {
    if (turn === true) {
      // debugger
      scoreOfP1 ++;
      $scoreOfP1.val(scoreOfP1);
    } else {
      scoreOfP2 ++;
      $scoreOfP2.val(scoreOfP2);

    }
}
  startGame();
}


var resetScore = function(){
  scoreOfP2 = 0;
  scoreOfP1 = 0;
  $scoreOfP1.val(scoreOfP1);
  $scoreOfP2.val(scoreOfP2);
  startGame();
}

var instructions = function(){
  alert(instr);
}

var finishGame = function() {
  scoreOfP2 = 0;
  scoreOfP1 = 0;
  $scoreOfP1.val(scoreOfP1);
  $scoreOfP2.val(scoreOfP2);
  makeEmptyArray();
}

$playBtn.click(resetScore);
$againBtn.click(keepScore);
$clickOnBoard.click(makePlay);
$finishBtn.click(finishGame);
$instructionsBtn.click(instructions);

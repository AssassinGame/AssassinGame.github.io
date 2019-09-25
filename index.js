// Put your JavaScript in this file.
'use strict'; // Enable "strict mode".  Note: This *must* be the first statement in the script.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// Constants - These are global variables that can't be changed.  Need to figure out exactly how to implement
var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;
var UP_LEFT = 4;
var UP_RIGHT = 5;
var DOWN_LEFT = 6;
var DOWN_RIGHT = 7;

// key codes
var SPACE_BAR_KEY = 32;
var ARROW_LEFT = 37;
var ARROW_UP = 38;
var ARROW_RIGHT = 39;
var ARROW_DOWN = 40;

// Square status codes
var SQ_STATUS_PAC_ON_PELLET = 0;
var SQ_STATUS_PAC_ON_BLANK = 1;
var SQ_STATUS_PAC_ON_POWER_PELLET = 2;
var SQ_STATUS_PAC_ON_GHOST = 3;
var SQ_STATUS_PAC_ON_GHOST_ON_POWER_PELLET_STATUS = 4;
var SQ_STATUS_PAC_ON_BOMB = 5;
var SQ_STATUS_PAC_ON_GOOD_BOMB = 6;
var SQ_STATUS_PAC_ON_GHOST_INVINCIBLE = 7;

var SQ_STATUS_GHOST = 10;
var SQ_STATUS_GHOST_INVINCIBLE = 11;
var SQ_STATUS_GHOST_CHOMPER = 12;
var SQ_STATUS_GHOST_TELEPORTER = 13;
var SQ_STATUS_GHOST_PEEWEE = 14;
var SQ_STATUS_GHOST_PEEWEE_ON_ONE_THIRD = 15;
var SQ_STATUS_GHOST_PEEWEE_ON_TWO_THIRDS = 16;
var SQ_STATUS_GHOST_BOMBER = 17;
var SQ_STATUS_GHOST_INVISIBLE = 18;
var SQ_STATUS_GHOST_MEGA = 19;
var SQ_STATUS_GHOST_SPLITTER = 20;
var SQ_STATUS_GHOST_HOPPER = 21;

// Items
var SQ_STATUS_BLANK = 100;
var SQ_STATUS_WALL = 101;
var SQ_STATUS_PELLET = 102;
var SQ_STATUS_POWER_PELLET = 103;
var SQ_STATUS_BOMB_ON_BLANK = 104;
var SQ_STATUS_GOOD_BOMB = 105;

// Audio files
var BAJIKO = "bajiko forest.mp3";
var TEAM_MASAKA = "team masaka victory.mp3";
var HEAVEN_WIND_CHIMES = "heaven wind chimes.mp3";

var SQUARE_SIZE = 50; // pixel size of individual squares
var SAFE_ZONE_GHOST = 3; // rows/columns of safety in upper left corner
var SAFE_ZONE_WALL = 2; //

var GHOST_SPEED_RANGE_LOW = 200; // fastest guy - low + midpoint of range = 1 second
var GHOST_SPEED_RANGE = 1600;

var GHOST_INTEL_RANGE = 2000;

var RESET_GHOST_DELAY = 5;

var PACMAN_CLASSIC_RIGHT = "<img src='Pacman icon right.jpg'>";
var PACMAN_CLASSIC_LEFT = "<img src='Pacman icon left.jpg'>";
var PACMAN_CLASSIC_UP = "<img src='Pacman icon up.jpg'>";
var PACMAN_CLASSIC_DOWN = "<img src='Pacman icon down.jpg'>";
var PACMAN_CLASSIC_RIGHT_PP = "<img src='Pacman icon right PP.jpg'>";
var PACMAN_CLASSIC_LEFT_PP = "<img src='Pacman icon left PP.jpg'>";
var PACMAN_CLASSIC_UP_PP = "<img src='Pacman icon up PP.jpg'>";
var PACMAN_CLASSIC_DOWN_PP = "<img src='Pacman icon down PP.jpg'>";

var JOEY_RIGHT = "<img src='joeyRight.jpg'>";
var JOEY_LEFT = "<img src='joeyLeft.jpg'>";
var JOEY_UP = "<img src='joeyUp.jpg'>";
var JOEY_DOWN = "<img src='joeyDown.jpg'>";
var JOEY_RIGHT_PP = "<img src='joeyRightPP.jpg'>";
var JOEY_LEFT_PP = "<img src='joeyLeftPP.jpg'>";
var JOEY_UP_PP = "<img src='joeyUpPP.jpg'>";
var JOEY_DOWN_PP = "<img src='joeyDownPP.jpg'>";

// these are the actual global variables used
var PACMAN_RIGHT;
var PACMAN_LEFT;
var PACMAN_UP;
var PACMAN_DOWN;
var PACMAN_RIGHT_PP;
var PACMAN_LEFT_PP;
var PACMAN_UP_PP;
var PACMAN_DOWN_PP;

var ICON_GHOST = "<img src='blueGhost.jpg'>";
var ICON_GHOST_INVINCIBLE = "<img src='invincibleGhost.jpg'>";
var ICON_GHOST_CHOMPER = "<img src='chomperGhost.jpg'>";
var ICON_GHOST_BOMBER = "<img src='bomberGhost.jpg'>";
var ICON_GHOST_INVISIBLE = "<img src='InvisibleGhost.jpg'>";
var ICON_GHOST_PEEWEE = "<img src='peeweeGhost.jpg'>";
var ICON_GHOST_PEEWEE_ON_ONE_THIRD = "<img src='peeweeOnOneThird.jpg'>";
var ICON_GHOST_PEEWEE_ON_TWO_THIRDS = "<img src='peeweeOnTwoThirds.jpg'>";
var ICON_GHOST_TELEPORTER = "<img src='teleporterGhost.jpg'>";
var ICON_GHOST_MEGA = "<img src='megaGhost.jpg'>";
var ICON_GHOST_SPLITTER = "<img src='splitterGhost.jpg'>";
var ICON_GHOST_HOPPER = "<img src='hopperGhost.jpg'>";


var ICON_PLAYER = "<img src='sunIcon.jpg'>";
var ICON_WALL = "<img src='wallIcon.jpg'>";
var ICON_WALL_TWO_THIRDS = "<img src='wallIconTwoThirds.jpg'>";
var ICON_WALL_ONE_THIRD = "<img src='wallIconOneThird.jpg'>";
var ICON_PELLET = "<img src='PelletIcon.jpg'>";
var ICON_BOMB = "<img src='BombIcon1.jpg'>";
var ICON_POWER_PELLET = "<img src='PowerPellet.jpg'>";
var ICON_GOOD_BOMB = "<img src='GoodBombIcon.jpg'>";

// wall statuses
var NO_WALL = 0;
var WALL = 3;
var WALL_TWO_THIRDS = 2;
var WALL_ONE_THIRD = 1;

// simple helper variables for booleans
var NO_PELLET = 0;
var PELLET = 1;
var POWER_PELLET = 1;
var GHOST = 1;
var GOOD_BOMB = 1;
var NO_GOOD_BOMB = 0;
var BOMB = 1;
var NO_GHOST = -1;

var POWER_PELLET_OFF = 0;
var POWER_PELLET_ON = 1;
var POWER_PELLET_DELAY = 5; // seconds
var POWER_PELLET_GHOST_RATIO = 4; // ghosts per power pellet

// Ghost array index positions, first field is the position on the board, second position is the variable created when the timer function was created.  This must be used to delete the ghost processes when the game ends.
var GHOST_INDEX_POSITION = 0; // position on the Board
var GHOST_INDEX_TIMER = 1; // move counter id
var GHOST_INDEX_INTEL = 2; // intelligence
var GHOST_INDEX_TYPE = 3; // ghost type
var GHOST_INDEX_DEATH_TIMER_ID = 4; // ghost type

// Ghost Types
var GHOST_TYPE_STANDARD = 0;
var GHOST_TYPE_INVINCIBLE = 1;
var GHOST_TYPE_CHOMPER = 2;
var GHOST_TYPE_TELEPORTER = 3;
var GHOST_TYPE_PEEWEE = 4;
var GHOST_TYPE_BOMBER = 5;
var GHOST_TYPE_INVISIBLE = 6;
var GHOST_TYPE_MEGA = 7;
var GHOST_TYPE_SPLITTER = 8;
var GHOST_TYPE_HOPPER = 9;


// // Ghost Type Percentages for Random mode

var GHOST_PERCENT_STANDARD = 0;
var GHOST_PERCENT_INVINCIBLE = 0;
var GHOST_PERCENT_CHOMPER = 0;
var GHOST_PERCENT_TELEPORTER = 0;
var GHOST_PERCENT_PEEWEE = 0;
var GHOST_PERCENT_BOMBER = 0;
var GHOST_PERCENT_INVISIBLE = 0;
var GHOST_PERCENT_MEGA = 0;
var GHOST_PERCENT_SPLITTER = 0;
var GHOST_PERCENT_HOPPER = 0;

// Ghost Type Percentages for Random mode - for Testing

// var GHOST_PERCENT_STANDARD = 0;
// var GHOST_PERCENT_INVINCIBLE = 0;
// var GHOST_PERCENT_CHOMPER = 0;
// var GHOST_PERCENT_TELEPORTER = 0;
// var GHOST_PERCENT_PEEWEE = 0;
// var GHOST_PERCENT_BOMBER = 0;
// var GHOST_PERCENT_INVISIBLE = 0;
// var GHOST_PERCENT_MEGA = 40;
// var GHOST_PERCENT_SPLITTER = 60;


// Special ghost settings
var GHOST_TELEPORT_PERCENTAGE = 10;
var GHOST_BOMBER_PERCENTAGE = 5;
var GHOST_INVISIBLE_PERCENTAGE = 90;
var MEGA_GHOST_INTEL = 60;
var MEGA_GHOST_SPEED = 4;
var SPLITTER_GHOST_PERCENTAGE = 2;

var BOMB_INDEX_POSITION = 0;
var BOMB_INDEX_TIMER = 1;
var SPECIAL_ITEM_DELAY1 = 20;
var SPECIAL_ITEM_DELAY2 = 10;

var NUMBER_OF_LEVELS = 8; // *** Hard coded number of story mode levels.  Game will end after this number.
var GHOST_POINTS = 10;
var EXTRA_LIFE_LEVEL = 250;

var BOARD_SIZE_MIN = 4;
var BOARD_SIZE_MAX = 25;
var GHOST_PERCENTAGE_MAX = .25;

var NO_BOMB = -1;
var BOMBS_START_COUNT = 20;
var BOMBS_START_COUNT_STORY_MODE = 3;
var BOMB_DELAY = 1.8;

var OFF_THE_BOARD = -999; // Ensure player isn't shown on the board in between rounds or kills
var RESET_PLAYER_DELAY = 1.25; // Delay in seconds before resetting a killed player

// 2 modes
var MODE_RANDOM = 0;
var MODE_STORY = 1;

// 2 pac man modes
var CLASSIC_PACMAN_MODE = 0;
var JOEY_PACMAN_MODE = 1;

// Scorekeeping
var PAC_MAN_KEY = "PACMAN";

// Story mode condition variables
var DOOR_SQUARE_LEVEL_1 = 60; // Level 1 condition
var chomperKilled = false; // level 2 condition
var POWER_PELLET_DELAY_STORY_MODE_LEVEL_2 = 30000; // a minute delay before pp comes to rescue
var myPowerPelletTimerVar = -1; // stays -1 if the timer is never used, otherwise stores actual value.  Only need 1.

var PACMAN_RULES = "Rules for Ultimate Pacman.\nFirst choose Random or Story Mode.  Random mode will have random wall and ghost configurations.  Story Mode is a pre-defined adventure with additional instructions on finishing each level.\nExtra life every " + EXTRA_LIFE_LEVEL + " points in Random Mode.\n1 point per pellet and " + GHOST_POINTS + " for eating a ghost.\nPlayers start with " + BOMBS_START_COUNT + " bombs and can collect more during play (Bomb with check mark). \nPress the space bar to drop a bomb.\nBombs destroy any walls and Pac Man adjacent to the bomb square.  Ghosts are immune to bombs.\nEat Power Pellets to have " + POWER_PELLET_DELAY + " seconds of time to eat ghosts.\nIn Random Mode, we suggest one power pellet for each " + POWER_PELLET_GHOST_RATIO + " ghosts.\nSee Legend for Ghost Types.";

// global variables
var currentSquare = 0; // player square, default to zero
var i; // mostly for loops
var startButton = document.getElementById("startButton");
var rulesButton = document.getElementById("rulesButton");
var resetZeroButton = document.getElementById("resetZeroButton");
var checkGhostTotalButton = document.getElementById("checkTotalButton");
var randomGhostTotalLabel = document.getElementById("ghostPercentTotal");

var messageBox = document.getElementById("messageBox"); // Game status message board

// intel slider
var rgiSlider = document.getElementById("randomGhostIntelSlider"); // rgi = random ghost intelligence

// speed slider
var rgsSlider = document.getElementById("randomGhostSpeedSlider"); // rgi = random ghost intelligence

var boardSize; // dimension of board (length or width).  Total squares is (boardSize * boardSize)
var numberOfGhosts = 0;
var ghostSpeedAddedTogether = 0 // used to calculate average ghost speed
var numberOfWalls = 0;
var numberOfWallsStart = 0;
var gameMode = 0; // default to Story Mode
var pacManMode = 0; // default to classic pacman
var gameStarted = false;
var LIVES_START = 3;
var lives = LIVES_START;
var freeLives = 1; // counter used to check free live tiers
var pelletsLeft = 0; // global var to store the # of pellets remaining in the round, will be set in setup
var powerPelletStatus = 0; // start "off the pellet"
var playerRank = 1;
var playerDirection = RIGHT; // starting direction of pac man
var bombsCount = 0;
var currentLevel = 0;
var ghostResetSquare;
var goodBombTimerID1 = -1
var goodBombTimerID2 = -1;
var doorTimerVar = -1; // init
var chomperKilledTimerVar = -1; // init
var myPowerPelletTimerVar = -1;

var originalSplitterCount = 0;


// global arrays
var ghosts = new Array;
var walls = new Array;
var pellets = new Array;
var powerPellets = new Array;
var bombs = new Array;
var goodBombs = new Array;

// var bajikoForest = new Audio('bajiko forest.mp3');  // removed this old style of audio
var myAudio = new Audio(BAJIKO);

// Retrieve user options from screen
document.getElementById("livesVariable").innerHTML = LIVES_START;
document.getElementById("scoreVariable").innerHTML = 0;
document.getElementById("levelVariable").innerHTML = currentLevel;
document.getElementById("bombsVariable").innerHTML = BOMBS_START_COUNT;

window.alert(PACMAN_RULES);
// ------------------------------------------------------------------------------

rulesButton.addEventListener('click', function(e) {
  alert(PACMAN_RULES);
});

// ------------------------------------------------------------------------------
//
resetZeroButton.addEventListener('click', function(e) {

  document.getElementById("percentStandard").value = 0;
  document.getElementById("percentInvincible").value = 0;
  document.getElementById("percentChomper").value = 0;
  document.getElementById("percentTeleporter").value = 0;
  document.getElementById("percentPeeWee").value = 0;
  document.getElementById("percentBomber").value = 0;
  document.getElementById("percentInvisible").value = 0;
  document.getElementById("percentMega").value = 0;
  document.getElementById("percentSplitter").value = 0;
  document.getElementById("percentHopper").value = 0;

});

//  -----------------------------------------------------------------------------
//
checkGhostTotalButton.addEventListener('click', function(e) {
  var tempTotal = 0;

  tempTotal += Number(document.getElementById("percentStandard").value);
  tempTotal += Number(document.getElementById("percentInvincible").value);
  tempTotal += Number(document.getElementById("percentChomper").value);
  tempTotal += Number(document.getElementById("percentTeleporter").value);
  tempTotal += Number(document.getElementById("percentPeeWee").value);
  tempTotal += Number(document.getElementById("percentBomber").value);
  tempTotal += Number(document.getElementById("percentInvisible").value);
  tempTotal += Number(document.getElementById("percentMega").value);
  tempTotal += Number(document.getElementById("percentSplitter").value);
  tempTotal += Number(document.getElementById("percentHopper").value);

  randomGhostTotalLabel.innerHTML = Number(tempTotal);

});


// ------------------------------------------------------------------------------

function storyModeClicked() {

  document.getElementById("boardSize").style.visibility = "hidden";
  document.getElementById("wallsInput").style.visibility = "hidden";
  document.getElementById("bombsInput").style.visibility = "hidden";
  document.getElementById("ghostInput").style.visibility = "hidden";

  document.getElementById("randomGhostIntelSlider").style.visibility = "hidden";
  document.getElementById("randomGhostSpeedSlider").style.visibility = "hidden";

  document.getElementById("percentStandard").style.visibility = "hidden";
  document.getElementById("percentInvincible").style.visibility = "hidden";
  document.getElementById("percentChomper").style.visibility = "hidden";
  document.getElementById("percentTeleporter").style.visibility = "hidden";
  document.getElementById("percentPeeWee").style.visibility = "hidden";
  document.getElementById("percentBomber").style.visibility = "hidden";
  document.getElementById("percentInvisible").style.visibility = "hidden";
  document.getElementById("percentMega").style.visibility = "hidden";
  document.getElementById("percentSplitter").style.visibility = "hidden";
  document.getElementById("percentHopper").style.visibility = "hidden";

}

// ------------------------------------------------------------------------------

function randomModeClicked() {

  document.getElementById("boardSize").style.visibility = "visible";
  document.getElementById("wallsInput").style.visibility = "visible";
  document.getElementById("bombsInput").style.visibility = "visible";
  document.getElementById("ghostInput").style.visibility = "visible";

  document.getElementById("randomGhostIntelSlider").style.visibility = "visible";
  document.getElementById("randomGhostSpeedSlider").style.visibility = "visible";

  document.getElementById("percentStandard").style.visibility = "visible";
  document.getElementById("percentInvincible").style.visibility = "visible";
  document.getElementById("percentChomper").style.visibility = "visible";
  document.getElementById("percentTeleporter").style.visibility = "visible";
  document.getElementById("percentPeeWee").style.visibility = "visible";
  document.getElementById("percentBomber").style.visibility = "visible";
  document.getElementById("percentInvisible").style.visibility = "visible";
  document.getElementById("percentMega").style.visibility = "visible";
  document.getElementById("percentSplitter").style.visibility = "visible";

  document.getElementById("percentHopper").style.visibility = "visible";
}


// ------------------------------------------------------------------------------

startButton.addEventListener('click', function(e) {
  myAudio.pause();

  // validate data here, update message with error, return
  if (gameStarted == true) return;
  else gameStarted = true;

  document.getElementById("livesVariable").innerHTML = LIVES_START;
  document.getElementById("scoreVariable").innerHTML = 0;
  document.getElementById("bombsVariable").innerHTML = "";
  document.getElementById("levelVariable").innerHTML = 0;
  playerRank = 1;

  // set or reset variables
  bombsCount = BOMBS_START_COUNT;
  lives = LIVES_START;
  freeLives = 1;
  currentLevel = 0;
  currentSquare = 0; // player square, default to zero
  numberOfGhosts = 0;
  numberOfWalls = 0;
  pelletsLeft = 0; // reset
  ghostSpeedAddedTogether = 0;
  powerPelletStatus = 0;
  doorTimerVar = -1;
  goodBombTimerID1 = -1
  goodBombTimerID2 = -1;
  chomperKilled = false;
  originalSplitterCount = 0;

  // check for Joey mode vs. Classic Pac man mode n  -------------------
  var myPacManModesForm = document.getElementById("pacManGameModes");
  var i = 0;

  // loop through each mode listed
  for (i = 0; i < myPacManModesForm.pacManGameMode.length; i++) {
    if (myPacManModesForm.pacManGameMode[i].checked == true) {
      pacManMode = i; // 0 is classic, 1 is Joey
    }
  } // end for

  console.log("Mode Pac Man Mode chosen is " + pacManMode);

  if (pacManMode == CLASSIC_PACMAN_MODE) {
    PACMAN_RIGHT = PACMAN_CLASSIC_RIGHT;
    PACMAN_LEFT = PACMAN_CLASSIC_LEFT;
    PACMAN_UP = PACMAN_CLASSIC_UP;
    PACMAN_DOWN = PACMAN_CLASSIC_DOWN;
    PACMAN_RIGHT_PP = PACMAN_CLASSIC_RIGHT_PP;
    PACMAN_LEFT_PP = PACMAN_CLASSIC_LEFT_PP;
    PACMAN_UP_PP = PACMAN_CLASSIC_UP_PP;
    PACMAN_DOWN_PP = PACMAN_CLASSIC_DOWN_PP;
  } else {
    PACMAN_RIGHT = JOEY_RIGHT;
    PACMAN_LEFT = JOEY_LEFT;
    PACMAN_UP = JOEY_UP;
    PACMAN_DOWN = JOEY_DOWN;
    PACMAN_RIGHT_PP = JOEY_RIGHT_PP;
    PACMAN_LEFT_PP = JOEY_LEFT_PP;
    PACMAN_UP_PP = JOEY_UP_PP;
    PACMAN_DOWN_PP = JOEY_DOWN_PP;
  }

  //  ------------  Change Mode  -------------------------

  var myForm = document.getElementById("gameModes");
  i = 0;

  // loop through each mode listed
  for (i = 0; i < myForm.mode.length; i++) {
    if (myForm.mode[i].checked == true) {
      gameMode = i;
    }
  } // end for

  // -------check game mode ---------------------------

  console.log("Mode chosen is " + gameMode);

  if (gameMode == MODE_RANDOM) {

    // retrieve inputs from user
    boardSize = Number(document.getElementById("boardSize").value);
    numberOfGhosts = Number(document.getElementById("ghostInput").value);
    numberOfWalls = Number(document.getElementById("wallsInput").value);
    numberOfWallsStart = numberOfWalls;
    console.log("Number of Walls = " + numberOfWalls);
    bombsCount = Number(document.getElementById("bombsInput").value);

    checkForCheatCode();
    /// zzz
    if (validateInputs() == false) {
      gameStarted = false;
      return;
    }

    createRandomWallsArray();
    createBoard();
    pelletsLeft = (boardSize * boardSize) - numberOfWalls;

    createRandomGhosts();
    fillBoardWithPellets();
    createPowerPellets();
    document.getElementById("bombsVariable").innerHTML = bombsCount;

    // default goodBombs array to zeros
    for (i = 0; i < boardSize * boardSize; i++)
      goodBombs[i] = NO_GOOD_BOMB;

  } else { // --------  Story Mode  ----------------------
    createStoryLevels();
    createBoard();
  }

  // window.alert("Welcome to ultimate Pac-Man! You were born into a starving world. Use arrow keys to move, collect pellets, and save your people!!!");
  messageBox.innerHTML = "YOU WERE BORN.";
  console.log("Pellets total for game: " + pelletsLeft);
  console.log("Number of walls is " + numberOfWalls);

  // zzz
  // Check to see if we do the story mode alerts here.

  renderGame();

  if (gameMode == MODE_STORY) {
    showCurrentLevelMessageBoxes();
  }

  // start Good Bomb timer
  startGoodBombTimer();

  var myBoard = document.getElementById("board");
  myBoard.style.visibility = "visible";

}); // end addEventListener

// -----------------------------------------------------------------------

function validateInputs() {
  if ((boardSize < BOARD_SIZE_MIN) || (boardSize > BOARD_SIZE_MAX)) {
    messageBox.innerHTML = "Board size must be between " + BOARD_SIZE_MIN + " and " + BOARD_SIZE_MAX;
    return false;
  }

  if ((numberOfGhosts < 0) || (numberOfGhosts > (GHOST_PERCENTAGE_MAX * boardSize * boardSize))) {
    messageBox.innerHTML = "Number of ghosts must be between 0 and " + Math.floor(.25 * boardSize * boardSize);
    return false;
  }

  if ((numberOfWalls < 0) || (numberOfWalls > ((boardSize * boardSize) - numberOfGhosts - (SAFE_ZONE_WALL * SAFE_ZONE_WALL)))) {
    messageBox.innerHTML = "Number of walls must be between 0 and " + ((boardSize * boardSize) - numberOfGhosts - (SAFE_ZONE_WALL * SAFE_ZONE_WALL));
    return false;
  }

  if (bombsCount < 0) {
    messageBox.innerHTML = "Number of Bombs must be greater than or equal to 0.";
    return false;
  }

  // ----------  Check ghost % -------------------


  GHOST_PERCENT_STANDARD = Number(document.getElementById("percentStandard").value);
  var total = GHOST_PERCENT_STANDARD;

  GHOST_PERCENT_INVINCIBLE = Number(document.getElementById("percentInvincible").value);
  total += GHOST_PERCENT_INVINCIBLE;

  GHOST_PERCENT_CHOMPER = Number(document.getElementById("percentChomper").value);
  total += GHOST_PERCENT_CHOMPER;

  GHOST_PERCENT_TELEPORTER = Number(document.getElementById("percentTeleporter").value);
  total += GHOST_PERCENT_TELEPORTER;

  GHOST_PERCENT_PEEWEE = Number(document.getElementById("percentPeeWee").value);
  total += GHOST_PERCENT_PEEWEE;

  GHOST_PERCENT_BOMBER = Number(document.getElementById("percentBomber").value);
  total += GHOST_PERCENT_BOMBER;

  GHOST_PERCENT_INVISIBLE = Number(document.getElementById("percentInvisible").value);
  total += GHOST_PERCENT_INVISIBLE;

  GHOST_PERCENT_MEGA = Number(document.getElementById("percentMega").value);
  total += GHOST_PERCENT_MEGA;

  GHOST_PERCENT_SPLITTER = Number(document.getElementById("percentSplitter").value);
  total += GHOST_PERCENT_SPLITTER;

  GHOST_PERCENT_HOPPER = Number(document.getElementById("percentHopper").value);
  total += GHOST_PERCENT_HOPPER;


  if (total != 100) {
    messageBox.innerHTML = "Ghost % 100 must equal 100.";
    return false;
  }

}
// -----------------------------------------------

function checkForCheatCode() {
  if (boardSize == 5454) {
    document.getElementById("scoreVariable").innerHTML = "1000000000000000";
    window.alert("OMG CRAZY MAGIC EPIC INSANE CHEATCODE");
    window.alert("ONE QUADRILLION POINTS AWARDED");
    myAudio.src = TEAM_MASAKA;
    myAudio.play();
    boardSize = 15;
  }

} // end function check code

// -----------------------------------------------------------------------

function startGoodBombTimer() {
  // console.log ("Goodbomb start timer");
  goodBombTimerID1 = setInterval(myGoodBombTimer, (1000 * SPECIAL_ITEM_DELAY1));

} // end function startGoodBombTimer

// -----------------------------------------------------------------------

function myGoodBombTimer() {
  // console.log("Bomb Timer 1 called")

  if (gameMode == MODE_RANDOM) {
    // find a place to drop the good bomob
    var foundSpot = false;

    while (foundSpot == false) {
      var targetSpot = Math.floor(Math.random() * boardSize * boardSize);

      if ((walls[targetSpot] == NO_WALL)) {
        goodBombs[targetSpot] = BOMB;
        foundSpot = true;
      } // end if safe spot for a wall
    }

    goodBombTimerID2 = setTimeout(cancelGoodBombTimer, (1000 * SPECIAL_ITEM_DELAY2), targetSpot);
    renderGame();

  } // end if game is random

  // do nothing in story mode for now

} // end function

// -----------------------------------------------------------------------

function cancelGoodBombTimer(pos) {
  // console.log("Bomb timer 2 called for space " + pos);
  goodBombs[pos] = NO_GOOD_BOMB;
  renderGame();
}

// -----------------------------------------------------------------------
// simple reusable code to make board

function createBoard() {
  // get the board
  var myBoard = document.getElementById("board");
  myBoard.innerHTML = "";

  //  set the width and height styles to the number of pixels
  myBoard.style.width = (boardSize * SQUARE_SIZE) + "px";
  myBoard.style.height = (boardSize * SQUARE_SIZE) + "px";

  // Create the squares
  for (i = 0; i < boardSize * boardSize; i++) {
    myBoard.innerHTML = myBoard.innerHTML + '<div class="square"></div>';
  }
}
// -----------------------------------------------------------------------
// Function to handle game over scenario

function restartGame() {
  if (goodBombTimerID1 != -1)
    clearInterval(goodBombTimerID1);

  if (goodBombTimerID2 != -1)
    clearTimeout(goodBombTimerID2);

  if (myPowerPelletTimerVar != -1) {
    clearTimeout(myPowerPelletTimerVar);
    myPowerPelletTimerVar = -1;
    console.log("I garbage collected a power pellet timer in restart game");
  }

  console.log("Game Over.  In restartGame()");

  messageBox.innerHTML = "Welcome to heaven! Player: " + document.getElementById("playerNameInput").value + " ranks " + playerRank + " with a score of " + Number(document.getElementById("scoreVariable").innerHTML) + ".";

  myAudio.src = HEAVEN_WIND_CHIMES;
  // var heavenWindChimes = new Audio('heaven wind chimes.mp3');
  myAudio.play();

  gameStarted = false;
  playerDirection = RIGHT;

  var myBoard = document.getElementById("board");
  myBoard.style.visibility = "hidden"; // hide board until start button pressed
  myBoard.innerHTML = ""; // destroy old board

  var i;
  for (i = 0; i < ghosts.length; i++) // clear out old ghost code
  {
    clearInterval(ghosts[i][GHOST_INDEX_TIMER]);

    if (ghosts[i][GHOST_INDEX_DEATH_TIMER_ID] != -1)
      clearTimeout(ghosts[i][GHOST_INDEX_DEATH_TIMER_ID]);
  }

  for (i = 0; i < bombs.length; i++) {
    if (bombs[i][BOMB_INDEX_POSITION] != NO_BOMB) {
      clearTimeout(bombs[i][BOMB_INDEX_TIMER]);
      console.log("Clear Timeout called in restart game on bomb in position " + i + "Timer number " + bombs[i][BOMB_INDEX_TIMER]);
    }
  } // for loop bombs

  // delete global arrays
  ghosts = [];
  walls = [];
  pellets = [];
  powerPellets = [];
  goodBombs = [];
  bombs = [];

  console.log("End restart game");
} // end restartgame
// ----------------------------------------

function createStoryLevels() {
  var ghostList;
  var ghostSpeed;
  var ghostIntel;
  var ghostType;

  // currentLevel = 7;  // use this line of code to test a specific level - zzz - qqq

  switch (currentLevel) {
    case 0:

      myAudio.src = BAJIKO;
      myAudio.play();

      walls = [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0];
      ghostList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      pellets = [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1];

      powerPellets = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      boardSize = 10;
      bombsCount = BOMBS_START_COUNT_STORY_MODE;
      document.getElementById("bombsVariable").innerHTML = bombsCount;

      ghostSpeed = [1, .9, .8];
      ghostIntel = [20, 40, 10];
      ghostType = [GHOST_TYPE_STANDARD, GHOST_TYPE_STANDARD, GHOST_TYPE_STANDARD];

      ghostResetSquare = 9;
      break;

    case 1:
      myAudio.pause();

      walls = [0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 3, 3, 3, 3, 3, 3, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 3, 0, 3, 0, 3, 3, 3, 0, 3, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 3, 3, 3, 0, 3, 3, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3];
      ghostList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      pellets = [1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
      powerPellets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // full array
      ghostSpeed = [1.8, .2, 1];
      ghostIntel = [100, 0, 50];
      ghostType = [GHOST_TYPE_STANDARD, GHOST_TYPE_STANDARD, GHOST_TYPE_STANDARD];
      ghostResetSquare = 60;
      bombsCount++;
      document.getElementById("bombsVariable").innerHTML = bombsCount;
      boardSize = 11;
      break;

    case 2:

      // story mode condition is to kill the chomper

      walls = [0, 3, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 3, 0, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0];
      ghostList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      pellets = [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1];
      powerPellets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      ghostSpeed = [1.8, .2, 1, 1];
      ghostIntel = [100, 30, 70, 50];
      ghostType = [GHOST_TYPE_STANDARD, GHOST_TYPE_STANDARD, GHOST_TYPE_CHOMPER, GHOST_TYPE_STANDARD];

      ghostResetSquare = 120;
      bombsCount++;
      document.getElementById("bombsVariable").innerHTML = bombsCount;
      boardSize = 11;
      break;

    case 3:

      walls = [0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0];
      ghostList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      pellets = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1];
      powerPellets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      ghostSpeed = [1.8, .2, 1];
      ghostIntel = [100, 20, 50];
      ghostType = [GHOST_TYPE_CHOMPER, GHOST_TYPE_CHOMPER, GHOST_TYPE_CHOMPER];

      bombsCount++;
      lives++;
      document.getElementById("bombsVariable").innerHTML = bombsCount;
      boardSize = 13;
      ghostResetSquare = 92;

      break;

    case 4:

      walls = [0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0];
      ghostList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
      pellets = [1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1];
      powerPellets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      ghostSpeed = [.2];
      ghostIntel = [20];
      ghostType = [GHOST_TYPE_INVINCIBLE];

      ghostResetSquare = 48;
      bombsCount++;
      document.getElementById("bombsVariable").innerHTML = bombsCount;
      boardSize = 7;

      break;

    case 5:

      walls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 3, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3];
      ghostList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      pellets = [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];
      powerPellets = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      ghostSpeed = [.3, 1, .8, 1.8];
      ghostIntel = [30, 30, 30, 30];
      ghostType = [GHOST_TYPE_INVINCIBLE, GHOST_TYPE_STANDARD, GHOST_TYPE_CHOMPER, GHOST_TYPE_CHOMPER];

      ghostResetSquare = 167;
      bombsCount++;
      document.getElementById("bombsVariable").innerHTML = bombsCount;
      boardSize = 13;
      lives++;

      break;


    case 6:

      walls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 3, 3];
      ghostList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      pellets = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0];
      powerPellets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0];
      ghostSpeed = [7, .9, .6, .4, 1.4, .7];
      ghostIntel = [40, 50, 30, 30, 80, 40];
      ghostType = [GHOST_TYPE_CHOMPER, GHOST_TYPE_CHOMPER, GHOST_TYPE_CHOMPER, GHOST_TYPE_CHOMPER, GHOST_TYPE_CHOMPER, GHOST_TYPE_CHOMPER];


      ghostResetSquare = 13;
      bombsCount++;
      document.getElementById("bombsVariable").innerHTML = bombsCount;
      boardSize = 14;

      break;

    case 7:
      myAudio.src = BAJIKO;
      myAudio.play();


      walls = [0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 3, 3, 0, 3, 3, 0, 0, 0, 3, 3, 3, 0, 3, 0, 3, 0, 3, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 3, 3, 0, 0, 3, 0, 0, 3, 3, 3, 0, 3, 0, 3, 0, 3, 3, 3, 0, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 3, 3, 3, 3, 3, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 0, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 3, 0, 3, 0, 3, 3, 0, 3, 3, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 3, 3, 0, 3, 3, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 0, 0, 0, 0];
      ghostList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      pellets = [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1];
      powerPellets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0];

      ghostSpeed = [.5, .9, 1, 1.4];
      ghostIntel = [20, 10, 40, 80];
      ghostType = [GHOST_TYPE_HOPPER, GHOST_TYPE_HOPPER, GHOST_TYPE_HOPPER, GHOST_TYPE_HOPPER];

      ghostResetSquare = 89;
      bombsCount += 3;
      document.getElementById("bombsVariable").innerHTML = bombsCount;
      boardSize = 15;


      break;


    default:
      console.log("Error in switch, next board does not exist.");
      return;
  } // end switch

  var i;
  var ghostCount = 0;
  numberOfWalls = 0;
  ghosts = [];

  // count number of walls, all arrays same length, could use any
  for (i = 0; i < walls.length; i++) {
    if (walls[i] != NO_WALL) {
      //  walls[i] = WALL;  // this was the hard-coded setting of all walls to 100%  Wall density now configurable
      numberOfWalls++;
    }

    if (pellets[i] == PELLET)
      pelletsLeft++;

    if (ghostList[i] == GHOST) {
      // ghost speed will be between 200 and 1700 milliseconds - remove hard coded range later
      var speed = ghostSpeed[ghostCount]; // Math.floor(Math.random() * ((GHOST_SPEED_RANGE/100)+1));
      ghostSpeedAddedTogether += speed; // (GHOST_SPEED_RANGE_LOW + (100*speed))/1000  + ghostSpeedAddedTogether;

      ghosts.push([i, 0, ghostIntel[ghostCount], ghostType[ghostCount], -1]);

      console.log("Story Mode ghost created in square: " + i + " Speed is " + speed);
      //var myVar = setInterval(myGhostTimer, GHOST_SPEED_RANGE_LOW + (100*speed), ghostCount);
      var myVar = setInterval(myGhostTimer, (1000 * speed), ghostCount);

      ghosts[ghostCount++][GHOST_INDEX_TIMER] = myVar;
    }
  }

  document.getElementById("speedVariable").innerHTML = (ghostSpeedAddedTogether / ghostCount).toFixed(2);

  console.log("Number of pellets created StoryMode are: " + pelletsLeft);
  console.log("Ghosts created StoryMode are: " + ghosts);
  console.log("Number of walls created StoryMode are: " + numberOfWalls);

} // end function create tutorial walls
// ----------------------------------
function getRow(pos) {
  var row = Math.floor(pos / boardSize);
  return row;
}
// ---------------------------------
function getColumn(pos) {
  var column = (pos % boardSize);
  return column;
}
// --------------------------

function getPlayerDirection(pos) {
  var pcRow = getRow(currentSquare);
  var pcCol = getColumn(currentSquare);
  var ghostRow = getRow(pos);
  var ghostCol = getColumn(pos);

  if ((pcRow < ghostRow) && (pcCol == ghostCol))
    return UP;

  if ((pcRow > ghostRow) && (pcCol == ghostCol))
    return DOWN;

  if ((pcRow == ghostRow) && (pcCol < ghostCol))
    return LEFT;

  if ((pcRow == ghostRow) && (pcCol > ghostCol))
    return RIGHT;

  if ((pcRow < ghostRow) && (pcCol < ghostCol))
    return UP_LEFT;

  if ((pcRow < ghostRow) && (pcCol > ghostCol))
    return UP_RIGHT;

  if ((pcRow > ghostRow) && (pcCol > ghostCol))
    return DOWN_RIGHT;
  else
    return DOWN_LEFT;

} // end function getPlayerDirection

// ----------------------------------

function getNextGhostDirection(ghostIndex) {
  var intel = ghosts[ghostIndex][GHOST_INDEX_INTEL];

  var random = Math.floor(Math.random() * 100) + 1;

  console.log("Get Next Ghost Direction - Intel is " + intel + ".  Random is " + random);

  if (random <= Math.abs(intel)) {
    // go towards player
    var pos = getPlayerDirection(ghosts[ghostIndex][GHOST_INDEX_POSITION]);
    // console.log ("Going towards/away player.  Ghost in " + ghosts[ghostIndex][GHOST_INDEX_POSITION] + ". Player in " + currentSquare + ". Direction returned is " + pos);

    switch (pos) {

      case LEFT:
        return (intel > 0) ? LEFT : RIGHT;
        break;

      case RIGHT:
        return (intel > 0) ? RIGHT : LEFT;
        break;

      case UP:
        return (intel > 0) ? UP : DOWN;
        break;

      case DOWN:
        return (intel > 0) ? DOWN : UP;
        break;

      case UP_LEFT:

        var random2 = Math.floor(Math.random() * 2);
        if (random2 == 0)
          return (intel > 0) ? UP : DOWN;
        else
          return (intel > 0) ? LEFT : RIGHT;

        break;

      case UP_RIGHT:

        var random2 = Math.floor(Math.random() * 2);
        if (random2 == 0)
          return (intel > 0) ? UP : DOWN;
        else
          return (intel > 0) ? RIGHT : LEFT;

        break;

      case DOWN_LEFT:

        var random2 = Math.floor(Math.random() * 2);
        if (random2 == 0)
          return (intel > 0) ? DOWN : UP;
        else
          return (intel > 0) ? LEFT : RIGHT;

        break;

      default: // DOWN RIGHT

        var random2 = Math.floor(Math.random() * 2);
        if (random2 == 0)
          return (intel > 0) ? DOWN : UP;
        else
          return (intel > 0) ? RIGHT : LEFT;

    } // SWITCH move towards player

  } else if (random <= (intel + (100 - intel) / 4)) {
    console.log("Didn't move towards player.  Intel is " + intel + " random is " + random);
    return LEFT;
  } else if (random <= (intel + 2 * (100 - intel) / 4)) {
    console.log("Didn't move towards player.  Intel is " + intel + " random is " + random);
    return RIGHT;
  } else if (random <= (intel + 3 * (100 - intel) / 4)) {
    console.log("Didn't move towards player.  Intel is " + intel + " random is " + random);
    return UP;
  } else {
    console.log("Didn't move towards player.  Intel is " + intel + " random is " + random);
    return DOWN;
  }
}
// ----------------------------------
// Used in random mode
function createRandomWallsArray() {
  var i;
  walls = []; // reset walls array

  // default all squares to no wall
  for (i = 0; i < boardSize * boardSize; i++)
    walls.push(0);

  // for loop for each wall to be built
  for (i = 0; i < numberOfWalls; i++) {
    var wallSet = false;

    while (wallSet == false) {
      var targetSpot = Math.floor(Math.random() * boardSize * boardSize);

      if ((walls[targetSpot] == NO_WALL) && (checkSafetyZone(targetSpot, SAFE_ZONE_WALL) == false)) {
        walls[targetSpot] = WALL;
        wallSet = true;
      } // end if safe spot for a wall
    } // end while
  } // end for loop
} // end function create walls

// -----------------------------------------------------------------------
function createRandomGhosts() {
  var i; // for loop

  var totalGhostIntel = 0;

  // create a ghost for each square number in the starting array
  for (i = 0; i < numberOfGhosts; i++) {
    var speed;

    // goal is 0 to 16
    var speed1 = Math.floor(Math.random() * ((GHOST_SPEED_RANGE / 100) + 1));


    // speed is as low as -8 or high as 24
    var speed2 = speed1 - (Number(rgsSlider.value)) / 10;

    if (speed2 < 0)
      speed = 0;
    else if (speed2 > (GHOST_SPEED_RANGE + GHOST_SPEED_RANGE_LOW) / 100)
      speed = GHOST_SPEED_RANGE / 100;
    else
      speed = speed2;

    // console.log ("Ghost " + i + " created with speed1 = " + speed1 + ". Speed2 = " + speed2 + ". Final speed is " + speed);

    // ghostSpeedAddedTogether = (GHOST_SPEED_RANGE_LOW + (100*speed))/1000  + ghostSpeedAddedTogether;

    // while loop here - look for valid spot, wall no, safe zone no, ghost yet
    var validSquareFound = false;

    while (validSquareFound == false) {
      var squareNum = Math.floor(Math.random() * boardSize * boardSize);

      if ((walls[squareNum] == NO_WALL) && (checkSafetyZone(squareNum, SAFE_ZONE_GHOST) == false))
        validSquareFound = true;
    }

    var intel;

    // goal is 0 to 20, representing -100 to +100
    var intel1 = Math.floor(Math.random() * ((GHOST_INTEL_RANGE / 100) + 1));
    intel1 = (intel1 - 10) * 10; // we now have -100 to +100

    // apply slider value, intel2 is as low as -200 and high as +200
    var intel2 = intel1 + (Number(rgiSlider.value));

    if (intel2 < -100)
      intel = -100;
    else if (intel2 > +100)
      intel = +100;
    else
      intel = intel2;

    // calculate Average Ghost Brains stat for scoreboard
    totalGhostIntel += intel;

    console.log("Ghost created with intel = " + intel);

    var randomNum = Math.floor(Math.random() * 100) + 1; // 1 to 100

    if (randomNum <= GHOST_PERCENT_STANDARD) {
      // STANDARD
      ghosts.push([squareNum, 0, intel, GHOST_TYPE_STANDARD, -1]);

    } else if (randomNum <= (GHOST_PERCENT_STANDARD + GHOST_PERCENT_CHOMPER)) {
      // chomper
      ghosts.push([squareNum, 0, intel, GHOST_TYPE_CHOMPER, -1]);

    } else if (randomNum <= (GHOST_PERCENT_STANDARD + GHOST_PERCENT_CHOMPER + GHOST_PERCENT_INVINCIBLE)) {
      // invincible
      ghosts.push([squareNum, 0, intel, GHOST_TYPE_INVINCIBLE, -1]);

    } // peewee
    else if (randomNum <= (GHOST_PERCENT_STANDARD + GHOST_PERCENT_CHOMPER + GHOST_PERCENT_INVINCIBLE + GHOST_PERCENT_PEEWEE)) {
      // peewee
      console.log("Peewee ghost created.")
      intel = intel + 20;
      if (intel > 100)
        intel = 100;

      ghosts.push([squareNum, 0, intel, GHOST_TYPE_PEEWEE, -1]);
    }
    // Bomber
    else if (randomNum <= (GHOST_PERCENT_STANDARD + GHOST_PERCENT_CHOMPER + GHOST_PERCENT_INVINCIBLE + GHOST_PERCENT_PEEWEE + GHOST_PERCENT_BOMBER)) {
      // BOMBER
      console.log("Bomber ghost created.")
      ghosts.push([squareNum, 0, intel, GHOST_TYPE_BOMBER, -1]);
    }
    // Invisible
    else if (randomNum <= (GHOST_PERCENT_STANDARD + GHOST_PERCENT_CHOMPER + GHOST_PERCENT_INVINCIBLE + GHOST_PERCENT_PEEWEE + GHOST_PERCENT_BOMBER + GHOST_PERCENT_INVISIBLE)) {
      console.log("Invisible ghost created.")
      ghosts.push([squareNum, 0, intel, GHOST_TYPE_INVISIBLE, -1]);
    }
    // Mega
    else if (randomNum <= (GHOST_PERCENT_STANDARD + GHOST_PERCENT_CHOMPER + GHOST_PERCENT_INVINCIBLE + GHOST_PERCENT_PEEWEE + GHOST_PERCENT_BOMBER + GHOST_PERCENT_INVISIBLE + GHOST_PERCENT_MEGA)) {
      console.log("Mega ghost created.")
      ghosts.push([squareNum, 0, MEGA_GHOST_INTEL, GHOST_TYPE_MEGA, -1]);
    }
    // Splitter
    else if (randomNum <= (GHOST_PERCENT_STANDARD + GHOST_PERCENT_CHOMPER + GHOST_PERCENT_INVINCIBLE + GHOST_PERCENT_PEEWEE + GHOST_PERCENT_BOMBER + GHOST_PERCENT_INVISIBLE + GHOST_PERCENT_MEGA + GHOST_PERCENT_SPLITTER)) {
      console.log("Splitter ghost created.")
      ghosts.push([squareNum, 0, intel, GHOST_TYPE_SPLITTER, -1]);
      originalSplitterCount++;
    }
    // Hopper
    else if (randomNum <= (GHOST_PERCENT_STANDARD + GHOST_PERCENT_CHOMPER + GHOST_PERCENT_INVINCIBLE + GHOST_PERCENT_PEEWEE + GHOST_PERCENT_BOMBER + GHOST_PERCENT_INVISIBLE + GHOST_PERCENT_MEGA + GHOST_PERCENT_SPLITTER + GHOST_PERCENT_HOPPER)) {
      console.log("Hopper ghost created.")
      ghosts.push([squareNum, 0, intel, GHOST_TYPE_HOPPER, -1]);
    } else { // ----------------------   LAST ONE ---------------------------
      // teleporter
      ghosts.push([squareNum, 0, intel, GHOST_TYPE_TELEPORTER, -1]);
    }

    // console.log ("Ghost created in square: " + squareNum + " Speed is " + speed);

    if (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_PEEWEE) {
      speed = speed - 2; // speed up ghost if Don Peewee

      if (speed < 0)
        speed = 0;

    } // mega
    else if (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_MEGA) {
      speed = MEGA_GHOST_SPEED;
    } else if (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_SPLITTER) {
      speed = 8; // 1 second
    }

    var myVar = setInterval(myGhostTimer, GHOST_SPEED_RANGE_LOW + (100 * speed), i);
    ghosts[i][GHOST_INDEX_TIMER] = myVar;

    // console.log ("Final Ghost " + i + " created with speed = " + speed);

    ghostSpeedAddedTogether += speed;

  } // end for loop, for each ghost


  console.log("Ghosts at end of createRandomGhosts are: " + ghosts);

  // update Speed score on scoreboard

  if ((ghostSpeedAddedTogether / numberOfGhosts) > 14)
    document.getElementById("speedVariable").innerHTML = "VERY SLOW";
  else if ((ghostSpeedAddedTogether / numberOfGhosts) > 12)
    document.getElementById("speedVariable").innerHTML = "SLOW";
  else if ((ghostSpeedAddedTogether / numberOfGhosts) > 10)
    document.getElementById("speedVariable").innerHTML = "LITTLE SLOW";
  else if ((ghostSpeedAddedTogether / numberOfGhosts) > 6)
    document.getElementById("speedVariable").innerHTML = "NEUTRAL";
  else if ((ghostSpeedAddedTogether / numberOfGhosts) > 4)
    document.getElementById("speedVariable").innerHTML = "LITTLE FAST";
  else if ((ghostSpeedAddedTogether / numberOfGhosts) > 2)
    document.getElementById("speedVariable").innerHTML = "FAST";
  else
    document.getElementById("speedVariable").innerHTML = "VERY FAST";


  // update Brains score on scoreboard

  if ((totalGhostIntel / numberOfGhosts) > 60)
    document.getElementById("brainsVariable").innerHTML = "VERY SMART";
  else if ((totalGhostIntel / numberOfGhosts) > 35)
    document.getElementById("brainsVariable").innerHTML = "SMART";
  else if ((totalGhostIntel / numberOfGhosts) > 10)
    document.getElementById("brainsVariable").innerHTML = "LITTLE SMART";
  else if ((totalGhostIntel / numberOfGhosts) > -10)
    document.getElementById("brainsVariable").innerHTML = "NEUTRAL";
  else if ((totalGhostIntel / numberOfGhosts) > -35)
    document.getElementById("brainsVariable").innerHTML = "LITTLE DUMB";
  else if ((totalGhostIntel / numberOfGhosts) > -60)
    document.getElementById("brainsVariable").innerHTML = "DUMB";
  else
    document.getElementById("brainsVariable").innerHTML = "VERY DUMB";


} // end function createRandomGhosts

// ------------------------------------------------------------------------
// Puts a pellet on all spaces with no walls, overrode in story mode
function fillBoardWithPellets() {
  var i;
  var squares = document.querySelectorAll('.square');

  for (i = 0; i < boardSize * boardSize; i++) {
    if (walls[i] == NO_WALL) {
      pellets.push(PELLET);
    } else {
      pellets.push(NO_PELLET);
    }
  }

} // end create pellet
// --------------------------------------------------------------------

function createPowerPellets() {
  var temp1 = document.getElementById("powerPelletsInput").value;
  //var temp2 = 0;

  var numPP = Number(document.getElementById("powerPelletsInput").value).toFixed(0);

  // document.getElementById("bombsVariable").innerHTML

  // Math.floor(numberOfGhosts / POWER_PELLET_GHOST_RATIO);

  var squareFound = false;
  var i;

  // default array to zeros
  for (i = 0; i < boardSize * boardSize; i++)
    powerPellets[i] = NO_PELLET;

  for (i = 0; i < numPP; i++) {
    squareFound = false;

    while (squareFound == false) {
      var ppSquare = Math.floor(Math.random() * ((boardSize * boardSize) - 1)) + 1; // return any square on board except 0.

      if (pellets[ppSquare] == PELLET) {
        squareFound = true;
        pellets[ppSquare] = NO_PELLET;
        powerPellets[ppSquare] = POWER_PELLET;
        pelletsLeft--;
      } // end if
    } // end while

  } // end for`

} // function

// ------------------------------------------------------------------------
// Function takes in the index to the ghost in the ghost array

function myGhostTimer(i) {
  // If not a hopper, chomper, peewee, bomber, or teleporter check to see if you are completely boxed in.  If so, return
  if ((ghosts[i][GHOST_INDEX_TYPE] != GHOST_TYPE_HOPPER) && (ghosts[i][GHOST_INDEX_TYPE] != GHOST_TYPE_CHOMPER) && (ghosts[i][GHOST_INDEX_TYPE] != GHOST_TYPE_PEEWEE) && (ghosts[i][GHOST_INDEX_TYPE] != GHOST_TYPE_BOMBER) && (ghosts[i][GHOST_INDEX_TYPE] != GHOST_TYPE_TELEPORTER) && (ghosts[i][GHOST_INDEX_TYPE] != GHOST_TYPE_MEGA))
    if ((!checkForNoWall(ghosts[i][GHOST_INDEX_POSITION], UP)) && (!checkForNoWall(ghosts[i][GHOST_INDEX_POSITION], DOWN)) && (!checkForNoWall(ghosts[i][GHOST_INDEX_POSITION], LEFT)) && (!checkForNoWall(ghosts[i][GHOST_INDEX_POSITION], RIGHT))) return;

  if (ghosts[i][GHOST_INDEX_POSITION] == OFF_THE_BOARD) return;

  if ((ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_TELEPORTER) || (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_MEGA)) {
    // run algorith to check for teleportation -
    var tempTeleportNum = Math.floor(Math.random() * 100) + 1; // 1 to 100 range

    if (tempTeleportNum <= GHOST_TELEPORT_PERCENTAGE) {
      var foundSpot = false;

      while (foundSpot == false) {
        var targetSpot = Math.floor(Math.random() * boardSize * boardSize);

        if (walls[targetSpot] == NO_WALL) {
          if (gameMode == MODE_RANDOM) {
            if (targetSpot != currentSquare) {
              ghosts[i][GHOST_INDEX_POSITION] = targetSpot;
              foundSpot = true;
            }
          } else {
            ghosts[i][GHOST_INDEX_POSITION] = targetSpot;
            foundSpot = true;
          }
        } // if well check
      } // end while loop

      renderGame();
      return;
    } // teleportation odds found
  } // if teleporter

  // check if bomber

  if ((ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_BOMBER) || (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_MEGA)) {
    // check if time to drop a bomb
    var tempBomberNum = Math.floor(Math.random() * 100) + 1; // 1 to 100 range

    if (tempBomberNum <= GHOST_BOMBER_PERCENTAGE) {
      dropBomb(ghosts[i][GHOST_INDEX_POSITION]);
    }
  }

  // -----  Check Splitter -----------


  if (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_SPLITTER) {
    // run algorith to check for split -
    var tempSplitterNum = Math.floor(Math.random() * 100) + 1; // 1 to 100 range

    if (tempSplitterNum <= SPLITTER_GHOST_PERCENTAGE) {
      ghosts.push([ghosts[i][GHOST_INDEX_POSITION], 0, ghosts[i][GHOST_INDEX_INTEL], GHOST_TYPE_SPLITTER, -1]);
      var myTimerVar = setInterval(myGhostTimer, 1000, ghosts.length - 1);
      ghosts[ghosts.length - 1][GHOST_INDEX_TIMER] = myTimerVar;
      console.log("Splitter Ghost created.");
    }
  }

  //  ----  Start common ghost timer code -----------

  // console.log ("Timer called for ghost in index " + i + " ghost in square " + ghosts[i][GHOST_INDEX_POSITION]);
  var ghostMove = false;
  var triedOnce = false;
  var failedDirection = -1;
  var MAX_TRIES = 50;
  var numTries = 0;

  // if you hit a wall, immediately look for another legal move up to MAX_TRIES
  while ((ghostMove == false) && (numTries < MAX_TRIES)) {
    var ghostDirection;
    numTries++;

    if (triedOnce == false)
      ghostDirection = getNextGhostDirection(i); // mmm
    else { // loop until you get one of the other 3 directions

      ghostDirection = Math.floor(Math.random() * 4);

      while (ghostDirection == failedDirection)
        ghostDirection = Math.floor(Math.random() * 4);
    }

    switch (ghostDirection) {

      case UP:

        if (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_HOPPER)
          ghostMove = checkForHopperMove(ghosts[i][GHOST_INDEX_POSITION], ghostDirection);
        else
          ghostMove = checkForNoWall(ghosts[i][GHOST_INDEX_POSITION], ghostDirection);

        if (ghostMove == true) // no wall, legal move
        {
          if (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_HOPPER)
            // hop here
            ghosts[i][GHOST_INDEX_POSITION] = ghosts[i][GHOST_INDEX_POSITION] - (2 * boardSize);
          else
            ghosts[i][GHOST_INDEX_POSITION] = ghosts[i][GHOST_INDEX_POSITION] - boardSize;

          renderGame();
          return;
        } else // check for special ghosts
        {
          if ((ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_CHOMPER) || (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_MEGA)) {
            if (ghosts[i][GHOST_INDEX_POSITION] >= boardSize) // bumped into a wall
            {
              console.log("Actual chomp up");
              walls[ghosts[i][GHOST_INDEX_POSITION] - boardSize]--;

              renderGame();
              return;

            }
          }
          if (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_PEEWEE) {
            // console.log ("Peewee tried to go into a wall.  Check whether game border or obstruction wall.");

            if (ghosts[i][GHOST_INDEX_POSITION] > boardSize) // only continue if not crossing top border
            {
              if (walls[(ghosts[i][GHOST_INDEX_POSITION] - boardSize)] < WALL) // broken wall, let pee wee through
              {
                console.log("Peewee should go through the wall.  Peewee in " + ghosts[i][GHOST_INDEX_POSITION] + " Wall position is " + (ghosts[i][GHOST_INDEX_POSITION] - boardSize) + " The wall there is " + (walls[ghosts[i][GHOST_INDEX_POSITION] - boardSize]));
                ghosts[i][GHOST_INDEX_POSITION] = ghosts[i][GHOST_INDEX_POSITION] - boardSize;
                console.log("Peewee new position after move is " + ghosts[i][GHOST_INDEX_POSITION]);
                renderGame();
                return;
              } // end if broken wall
            }

          } // end if ghost = peewee check
        } // end check for special ghosts

        failedDirection = UP;
        triedOnce = true;
        break;

      case DOWN:

        if (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_HOPPER)
          ghostMove = checkForHopperMove(ghosts[i][GHOST_INDEX_POSITION], ghostDirection);
        else
          ghostMove = checkForNoWall(ghosts[i][GHOST_INDEX_POSITION], ghostDirection);

        if (ghostMove == true) {
          if (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_HOPPER)
            // hop here
            ghosts[i][GHOST_INDEX_POSITION] = ghosts[i][GHOST_INDEX_POSITION] + (2 * boardSize);
          else
            ghosts[i][GHOST_INDEX_POSITION] = ghosts[i][GHOST_INDEX_POSITION] + boardSize;

          renderGame();
          return;
        } else // check for special ghosts
        {
          if ((ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_CHOMPER) || (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_MEGA)) {
            if (ghosts[i][GHOST_INDEX_POSITION] <= (boardSize * boardSize) - (boardSize + 1)) // bumped into a wall
            {
              console.log("Actual chomp down");
              walls[ghosts[i][GHOST_INDEX_POSITION] + boardSize]--;

              renderGame();
              return;
            }
          }
          if (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_PEEWEE) {
            //if (ghosts[i][GHOST_INDEX_POSITION] <= (boardSize * boardSize)-(boardSize + 1))  // bumped into a border wall
            //    walls[ghosts[i][GHOST_INDEX_POSITION]+boardSize]--;

            // console.log ("Peewee tried to go into a wall.");

            // only continue if not going through bottom game border.
            if (ghosts[i][GHOST_INDEX_POSITION] < (boardSize * boardSize) - (boardSize)) {
              if (walls[(ghosts[i][GHOST_INDEX_POSITION] + boardSize)] < WALL) // broken wall, let pee wee through
              {
                console.log("Peewee should go through the wall.  Peewee in " + ghosts[i][GHOST_INDEX_POSITION] + " Wall position is " + (ghosts[i][GHOST_INDEX_POSITION] + boardSize) + " The wall there is " + (walls[ghosts[i][GHOST_INDEX_POSITION] + boardSize]));
                ghosts[i][GHOST_INDEX_POSITION] = ghosts[i][GHOST_INDEX_POSITION] + boardSize;
                console.log("Peewee new position after move is " + ghosts[i][GHOST_INDEX_POSITION]);
                renderGame();
                return;
              } // end if broken wall
            }

          } // end if ghost = peewee check
        }
        failedDirection = DOWN;
        triedOnce = true;
        break;

      case LEFT:

        if (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_HOPPER)
          ghostMove = checkForHopperMove(ghosts[i][GHOST_INDEX_POSITION], ghostDirection);
        else
          ghostMove = checkForNoWall(ghosts[i][GHOST_INDEX_POSITION], ghostDirection);

        if (ghostMove == true) {

          if (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_HOPPER)
            ghosts[i][GHOST_INDEX_POSITION] = ghosts[i][GHOST_INDEX_POSITION] - 2;
          else
            ghosts[i][GHOST_INDEX_POSITION] = ghosts[i][GHOST_INDEX_POSITION] - 1;

          renderGame();
          return;
        } else // check for special ghosts
        {
          if ((ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_CHOMPER) || (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_MEGA)) {
            if (ghosts[i][GHOST_INDEX_POSITION] % boardSize > 0) // bumped into a wall
            {
              console.log("Actual chomp left");
              walls[ghosts[i][GHOST_INDEX_POSITION] - 1]--;

              renderGame();
              return;
            }

          }

          if (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_PEEWEE) {
            // console.log ("Peewee tried to go into a wall.");

            // only continue if not going through left game

            if (ghosts[i][GHOST_INDEX_POSITION] % boardSize > 0) {

              if (walls[(ghosts[i][GHOST_INDEX_POSITION] - 1)] < WALL) // broken wall, let pee wee through
              {
                console.log("Peewee should go through the wall.  Peewee in " + ghosts[i][GHOST_INDEX_POSITION] + " Wall position is " + (ghosts[i][GHOST_INDEX_POSITION] - 1) + " The wall there is " + (walls[ghosts[i][GHOST_INDEX_POSITION] - 1]));

                ghosts[i][GHOST_INDEX_POSITION] = ghosts[i][GHOST_INDEX_POSITION] - 1;
                console.log("Peewee new position after move is " + ghosts[i][GHOST_INDEX_POSITION]);
                renderGame();
                return;
              } // end if broken wall
            }

          } // end if ghost = peewee check

        }

        failedDirection = LEFT;
        triedOnce = true;
        break;

      case RIGHT:

        if (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_HOPPER)
          ghostMove = checkForHopperMove(ghosts[i][GHOST_INDEX_POSITION], ghostDirection);
        else
          ghostMove = checkForNoWall(ghosts[i][GHOST_INDEX_POSITION], ghostDirection);

        if (ghostMove == true) {
          if (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_HOPPER)
            ghosts[i][GHOST_INDEX_POSITION] = ghosts[i][GHOST_INDEX_POSITION] + 2;
          else
            ghosts[i][GHOST_INDEX_POSITION] = ghosts[i][GHOST_INDEX_POSITION] + 1;

          renderGame();
          return;
        } else // check for special ghosts
        {
          if ((ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_CHOMPER) || (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_MEGA)) {
            console.log("Got into this weird code");
            if ((ghosts[i][GHOST_INDEX_POSITION] % boardSize) < (boardSize - 1)) // bumped into a wall or edge
            {
              console.log("Actual chomp right");
              walls[ghosts[i][GHOST_INDEX_POSITION] + 1]--;
              renderGame();
              return;

            }
          }

          if (ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_PEEWEE) {
            // console.log ("Peewee tried to go into a wall.");

            // only continue if not going through right wall

            if ((ghosts[i][GHOST_INDEX_POSITION] % boardSize) < (boardSize - 1)) {

              if (walls[(ghosts[i][GHOST_INDEX_POSITION] + 1)] < WALL) // broken wall, let pee wee through
              {
                console.log("Peewee should go through the wall.  Peewee in " + ghosts[i][GHOST_INDEX_POSITION] + " Wall position is " + (ghosts[i][GHOST_INDEX_POSITION] + boardSize) + " The wall there is " + (walls[ghosts[i][GHOST_INDEX_POSITION] + boardSize]));

                ghosts[i][GHOST_INDEX_POSITION] = ghosts[i][GHOST_INDEX_POSITION] + 1;
                console.log("Peewee new position after move is " + ghosts[i][GHOST_INDEX_POSITION]);
                renderGame();
                return;
              } // end if broken wall

            }

          } // end if ghost = peewee check

        }
        failedDirection = RIGHT;
        triedOnce = true;
        break;
    } // end switch

  } // end while loop

} // end timer function

// -------------------------------------------------------------------------

function myGhostResetTimer(pos) {
  console.log("Reset timer called for ghost in pos = " + pos + ", full ghosts = " + ghosts);

  // set the position of the killed ghost back to the resetSquare position
  ghosts[pos][GHOST_INDEX_POSITION] = getGhostResetSquare();
  renderGame();

} // end reset timer

// -------------------------------------------------------------------------

function getGhostResetSquare() {
  console.log("For crying out loud!");

  if (gameMode == MODE_STORY) {
    console.log("You wont believe it, its story mode");
    return ghostResetSquare;
  } else { // random mode

    console.log("Did I even get here");
    var i = 1; // subtract 1 from boardSize squared to get the last square, bottom right
    var found = false;

    while (found == false) {
      if (walls[(boardSize * boardSize) - i] == NO_WALL) {
        console.log("Checking for wall");
        // console.log ("In find ghost reset square, found square is " + ((boardSize*boardSize)-i));
        return ((boardSize * boardSize) - i);
      } else
        i++;
    }
  }

}

//  keystroke interceptor ---------------------------------------------------

document.onkeydown = checkKey;

function checkKey(evt) {
  // this line of code was needed due to old browsers, possibly firefox, Nathan had an issue
  evt = evt || window.event;

  var squares = document.querySelectorAll('.square');
  //console.log ("Keycode pressed from event: " + evt.keyCode);

  var key = evt.keyCode;
  switch (key) {
    case SPACE_BAR_KEY:
      console.log("Space Bar pressed");

      if (currentSquare == OFF_THE_BOARD)
        return;

      if (bombsCount > 0) {
        bombsCount--;
        document.getElementById("bombsVariable").innerHTML = document.getElementById("bombsVariable").innerHTML - 1;
        dropBomb(currentSquare);
      }

      return; // space bar glistch

    case ARROW_LEFT:

      console.log("Left key is pressed");
      if (checkForNoWall(currentSquare, LEFT) == false) return;

      currentSquare = currentSquare - 1;
      playerDirection = LEFT;
      renderGame();
      break;

    case ARROW_UP:

      console.log("Up key is pressed");
      if (checkForNoWall(currentSquare, UP) == false) return;
      currentSquare = currentSquare - boardSize;
      playerDirection = UP;
      renderGame();
      break;

    case ARROW_RIGHT:

      console.log("Right key is pressed");
      if (checkForNoWall(currentSquare, RIGHT) == false) return;
      currentSquare = currentSquare + 1;
      playerDirection = RIGHT;
      renderGame();
      break;

    case ARROW_DOWN:

      console.log("Down key is pressed");
      if (checkForNoWall(currentSquare, DOWN) == false) return;
      currentSquare += boardSize;
      playerDirection = DOWN;
      renderGame();
      break;

    default:

      // do nothing
  } // end switch

} // end key press function

// ------------------------
// Placeholder

function dropBomb(pos) {
  console.log("Dropped Bomb!  You bedda wun! Position: " + pos);
  messageBox.innerHTML = "BOMB DROPPED!"
  var myVar = setTimeout(myBombTimer, BOMB_DELAY * 1000, bombs.length);
  bombs.push([pos, myVar]);
  console.log("Bombs array " + bombs);
}
// --------------------------------------------------------------------------

function myBombTimer(bombIndex) {
  var i;

  messageBox.innerHTML = "BOMB EXPLODED!"
  var pos = bombs[bombIndex][BOMB_INDEX_POSITION];

  // check exact cell first
  if (pos == currentSquare) {
    // player dies
    killPacman();
  }

  // check up only if not already in the top row
  if (pos >= boardSize) {
    // check if person in
    if ((pos - boardSize) == currentSquare)
      killPacman();

    if (walls[pos - boardSize] != NO_WALL) {
      console.log("Blowing up an Up wall");
      walls[pos - boardSize] = NO_WALL;
      numberOfWalls--;
    }
  }

  // down
  if (pos < (boardSize * boardSize) - (boardSize)) {
    // check if person in
    if ((pos + boardSize) == currentSquare)
      killPacman();

    if (walls[pos + boardSize] != NO_WALL) {
      console.log("Blowing up a Down wall");
      walls[pos + boardSize] = NO_WALL;
      numberOfWalls--;
    }
  }

  // left
  if (pos % boardSize > 0) {
    // check if person in
    if ((pos - 1) == currentSquare)
      killPacman();

    if (walls[pos - 1] != NO_WALL) {
      console.log("Blowing up an Left wall");
      walls[pos - 1] = NO_WALL;
      numberOfWalls--;
    }
  }

  // right
  if ((pos % boardSize) < (boardSize - 1)) {
    // check if person in
    if ((pos + 1) == currentSquare)
      killPacman();

    if (walls[pos + 1] != NO_WALL) {
      console.log("Blowing up an Right wall");
      walls[pos + 1] = NO_WALL;
      numberOfWalls--;
    }
  }

  if (lives != 0) {
    bombs[bombIndex][BOMB_INDEX_POSITION] = NO_BOMB;
    renderGame();
  }

} // my bomb timer


// ----------------------------------------------------------------------
// True / false returned - Check if the position is in the safety zone
function checkSafetyZone(pos, size) {
  var i; // for loop
  var j;

  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      if (((i * boardSize) + j) == pos) {
        //console.log("Position OK in safety zone: Pos = " + pos + ". Size = " + size);
        return true;
      }
    } // end inner for loop

  } // end outer for loop

  // console.log("Position not in safety zone: Pos = " + pos + ". Size = " + size);
  return false;

} // end function check ghost safety zone

// ----------------------------------------------



function checkForHopperMove(position, direction) {

  switch (direction) {
    case UP:

      // first check for top border of game, then check the target square for an obstruction wall
      if (position < (2 * boardSize)) return false;
      else {
        // legal move, now check the square for an obstruction wall
        if (walls[position - (2 * boardSize)] == NO_WALL)
          return true;
        else
          return false;
      }
      break;

    case DOWN:

      // first check for bottom border of game, then check the target square for an obstruction wall
      if (position > (boardSize * boardSize) - (2 * boardSize + 1)) return false;
      else {
        // legal move, now check the square for an obstruction wall
        if (walls[position + (2 * boardSize)] == NO_WALL)
          return true;
        else
          return false;
      }
      break;

    case LEFT:

      // first check for left border of game, then check the target square for an obstruction wall
      if (position % boardSize < 2) return false;
      else {
        // legal move, now check the square for an obstruction wall
        if (walls[position - 2] == NO_WALL)
          return true;
        else
          return false;
      }
      break;

    case RIGHT:

      // first check for right border of game, then check the target square for an obstruction wall
      if ((position % boardSize) > (boardSize - 3)) return false;
      else {
        // legal move, now check the square for an obstruction wall
        if (walls[position + 2] == NO_WALL)
          return true;
        else
          return false;
      }
      break;

    default:

  } // end switch

} // end function check for hopper move


// ----------------------------------------------
// Pass in the square position and the direction and the function returns true if there is no wall, false if there is a wall

function checkForNoWall(position, direction) {

  switch (direction) {
    case UP:

      // first check for top border of game, then check the target square for an obstruction wall
      if (position < boardSize) return false;
      else {
        // legal move, now check the square for an obstruction wall
        if (walls[position - boardSize] == NO_WALL)
          return true;
        else
          return false;
      }
      break;

    case DOWN:

      // first check for bottom border of game, then check the target square for an obstruction wall
      if (position > (boardSize * boardSize) - (boardSize + 1)) return false;
      else {
        // legal move, now check the square for an obstruction wall
        if (walls[position + boardSize] == NO_WALL)
          return true;
        else
          return false;
      }
      break;

    case LEFT:

      // first check for left border of game, then check the target square for an obstruction wall
      if (position % boardSize == 0) return false;
      else {
        // legal move, now check the square for an obstruction wall
        if (walls[position - 1] == NO_WALL)
          return true;
        else
          return false;
      }
      break;

    case RIGHT:

      // first check for left border of game, then check the target square for an obstruction wall
      if ((position % boardSize) == (boardSize - 1)) return false;
      else {
        // legal move, now check the square for an obstruction wall
        if (walls[position + 1] == NO_WALL)
          return true;
        else
          return false;
      }
      break;

    default:

  } // end switch

} // end function check for wall


// --------------------------------------------------------------------------
// Returns NO_GHOST (-1) if there is no ghost, otherwise, return the ghost type (constants 0 and above)

function checkGhost(position) {
  var i = 0;

  // check for ghosts in specific order
  var standardGhostFound = false;
  var chomperFound = false;
  var bomberFound = false;
  var teleporterFound = false;
  var peeweeFound = false;
  var invisibleGhostFound = false;
  var megaFound = false;
  var splitterFound = false;
  var hopperFound = false;


  // you always need to go through the entire array of ghosts to check for special ones.
  for (i = 0; i < ghosts.length; i++) {
    if (ghosts[i][GHOST_INDEX_POSITION] == position) {
      switch (ghosts[i][GHOST_INDEX_TYPE]) {
        case GHOST_TYPE_INVINCIBLE: // return immediately
          return GHOST_TYPE_INVINCIBLE;
          break;

        case GHOST_TYPE_MEGA:
          megaFound = true;
          break;

        case GHOST_TYPE_CHOMPER:
          chomperFound = true;
          break;

        case GHOST_TYPE_BOMBER:
          bomberFound = true;
          break;

        case GHOST_TYPE_PEEWEE:
          peeweeFound = true;
          break;

        case GHOST_TYPE_TELEPORTER:
          teleporterFound = true;;
          break;

        case GHOST_TYPE_HOPPER:
          hopperFound = true;
          break;

        case GHOST_TYPE_SPLITTER:
          splitterFound = true;
          break;

        case GHOST_TYPE_INVISIBLE:
          invisibleGhostFound = true;
          break;

        case GHOST_TYPE_STANDARD:
          standardGhostFound = true;
          break;

        default:

      } // end switch

    } // end if ghost
  } // end outer for

  if (megaFound == true) return GHOST_TYPE_MEGA;
  if (bomberFound == true) return GHOST_TYPE_BOMBER;
  if (chomperFound == true) return GHOST_TYPE_CHOMPER;
  if (hopperFound == true) return GHOST_TYPE_HOPPER;
  if (teleporterFound == true) return GHOST_TYPE_TELEPORTER;
  if (peeweeFound == true) return GHOST_TYPE_PEEWEE;
  if (splitterFound == true) return GHOST_TYPE_SPLITTER;
  if (standardGhostFound == true) return GHOST_TYPE_STANDARD;
  if (invisibleGhostFound == true) return GHOST_TYPE_INVISIBLE;

} // end function checkGhost

// --------------------------------------------------------------------------
// Returns true if there is a bomb in the position passed in

function checkBomb(pos) {
  var i = 0;
  var found = false;

  while ((i < bombs.length) && (found == false)) {
    if (bombs[i][BOMB_INDEX_POSITION] == pos) {
      found = true;
    } else {
      i++;
    }
  } // end while

  return found;

} // end function check bomb

// -----------------------------------------------------------------------

function restartRound() // player finished board, continue to next level
{
  var i;
  console.log("Restart Round, now at Level " + currentLevel);


  if (goodBombTimerID1 != -1) {
    // doesn't appear I need to reset to -1 here, but check later for possible bug
    clearInterval(goodBombTimerID1);
    console.log("I garbage collected a good bomber timer1 timer");
  }

  if (goodBombTimerID2 != -1) {
    // doesn't appear I need to reset to -1 here, but check later for possible bug
    clearTimeout(goodBombTimerID2);
    console.log("I garbage collected good bomb timer 2 timer");
  }

  if (doorTimerVar != -1) {
    clearTimeout(doorTimerVar);
    doorTimerVar = -1;
    console.log("I garbage collected an exit door timer");
  }

  if (chomperKilledTimerVar != -1) {
    clearTimeout(doorTimerVar);
    chomperKilledTimerVar = -1;
    console.log("I garbage collected a chomper killed timer");
  }

  if (myPowerPelletTimerVar != -1) {
    clearTimeout(myPowerPelletTimerVar);
    myPowerPelletTimerVar = -1;
    console.log("I garbage collected a power pellet timer");
  }

  for (i = 0; i < ghosts.length; i++) // clear out old ghost code
  {
    if (ghosts[i][GHOST_INDEX_DEATH_TIMER_ID] != -1) {
      console.log("Cleaned out a zombie ghost");
      clearTimeout(ghosts[i][GHOST_INDEX_DEATH_TIMER_ID]);
      ghosts[i][GHOST_INDEX_DEATH_TIMER_ID] = -1;
    }
  }

  for (i = 0; i < bombs.length; i++) {
    if (bombs[i][BOMB_INDEX_POSITION] != NO_BOMB) {
      bombs[i][BOMB_INDEX_POSITION] = NO_BOMB;
      clearTimeout(bombs[i][BOMB_INDEX_TIMER]);
      console.log("Clear Timeout in restart round called on bomb in position " + i + "Timer number " + bombs[i][BOMB_INDEX_TIMER]);
    }
  }

  // for (i=0; i<ghosts.length; i++)
  // {
  //   if (ghosts[i][GHOST_INDEX_POSITION] == OFF_THE_BOARD)
  //   {
  //         clearTimeout(ghosts[i][GHOST_INDEX_TIMER]);
  //         console.log ("Clear Timeout in restart round called on ghost");
  //   }
  // }

  // increase level
  currentLevel++;

  document.getElementById("levelVariable").innerHTML = currentLevel;
  currentSquare = OFF_THE_BOARD; // don't display player except through timer
  powerPelletStatus = POWER_PELLET_OFF;

  console.log("Restart Round, now at Level " + currentLevel);

  if (gameMode == MODE_RANDOM) {
    bombsCount++; // get an extra bomb each round
    numberOfWalls = Number(document.getElementById("wallsInput").value);
    numberOfWallsStart = numberOfWalls;

    createRandomWallsArray();

    pellets = [];
    powerPellets = [];
    fillBoardWithPellets();
    pelletsLeft = (boardSize * boardSize) - numberOfWalls;
    createPowerPellets();

    // default goodBombs array to zeros
    for (i = 0; i < boardSize * boardSize; i++)
      goodBombs[i] = NO_GOOD_BOMB;

    // restart ghosts that were off the board

    for (i = 0; i < ghosts.length; i++) {
      var checkZone;
      var squareNum = ghosts[i][GHOST_INDEX_POSITION];

      if (squareNum == OFF_THE_BOARD)
        checkZone = true;
      else checkZone = checkSafetyZone(squareNum, SAFE_ZONE_GHOST);

      while (checkZone == true) {
        //console.log ("Had to move a ghost");
        squareNum = Math.floor(Math.random() * boardSize * boardSize);
        checkZone = checkSafetyZone(squareNum, SAFE_ZONE_GHOST);
      }

      ghosts[i][GHOST_INDEX_POSITION] = squareNum;

    } // end for loop

    // check and eliminate any extra splittersFound
    var splittersFound = 0;
    for (i = 0; i < ghosts.length; i++) {

      if ((ghosts[i][GHOST_INDEX_TYPE] == GHOST_TYPE_SPLITTER) && (ghosts[i][GHOST_INDEX_POSITION] != OFF_THE_BOARD))
        splittersFound++;

      if (splittersFound > originalSplitterCount)
        ghosts[i][GHOST_INDEX_POSITION] = OFF_THE_BOARD;

    }


  } else // Story Mode
  {
    // Check if completed mission
    if (currentLevel == NUMBER_OF_LEVELS) {
      console.log("You Won - reached number of levels");
      messageBox.innerHTML = "YOU WON!";
      restartGame();
      return;
      // return;
    }
    ghostSpeedAddedTogether = 0;
    var i;
    for (i = 0; i < ghosts.length; i++) // clear out old ghost code
    {
      clearInterval(ghosts[i][GHOST_INDEX_TIMER]);
    }

    ghosts = [];
    walls = [];
    pellets = [];
    powerPellets = [];
    goodBombs = [];

    createStoryLevels();
    createBoard();

  } // end else

  // start Good Bomb timer
  startGoodBombTimer();

  resetPlayer();

} // end restart round

// --------------------------------------------------------------------------

function resetPlayer() {
  console.log("Reset Player called");
  setTimeout(myResetTimer, RESET_PLAYER_DELAY * 1000);

} // end function resetPlayer();

// --------------------------------------------------------------------------

function myResetTimer() {
  console.log("Reset timer called, ghosts = " + ghosts);

  var i; // for loop
  var splittersFound = 0;

  // create a function - clearGhosts
  for (i = 0; i < ghosts.length; i++) {
    var checkZone;
    var squareNum = ghosts[i][GHOST_INDEX_POSITION];
    var ghostMoved = false;

    if (squareNum == OFF_THE_BOARD) // off board ghost is ok, keep moving
      checkZone = false; // zzz qqq flipping this for possible bug, was true before
    else checkZone = checkSafetyZone(squareNum, SAFE_ZONE_GHOST);

    while (checkZone == true) {
      // console.log ("Had to move a ghost ***");
      ghostMoved = true;
      squareNum = Math.floor(Math.random() * boardSize * boardSize);
      checkZone = checkSafetyZone(squareNum, SAFE_ZONE_GHOST);
    }

    if (ghostMoved == true) // reset ghost to new safe space
      ghosts[i][GHOST_INDEX_POSITION] = squareNum;

  } // end for loop

  playerDirection = RIGHT;
  currentSquare = 0; // reset player

  messageBox.innerHTML = "YOU WERE REBORN.";

  renderGame();

} // end reset timer
// -------------------------------------------------------------------------

function myPPTimer() {
  powerPelletStatus = POWER_PELLET_OFF;
}

// ----------------------------------------------------------------------

function showCurrentLevelMessageBoxes() {
  switch (currentLevel) {
    case 0:
      window.alert("We start this story with a young soldier assigned to his first mission.");
      window.alert("Bob Dugan: Soldier, we have some hostiles attacking a the south gate. Prove yourself by salvaging the pellets. Here are some bombs, use them wisely with the spacebar. Now go!.");
      window.alert("Yes sir!.");

      break;

    case 1:
      window.alert("Commander Dugan I have completed the mission!.");
      window.alert("Bob Dugan: Good job soldier, you've proved yourself and have earned the rank of Special Soldier!.");
      window.alert("I've also captured one of the hostiles for questioning.");
      window.alert("One week later.");
      window.alert("Attention: Commander Dugan has assigned a special mission... to infiltrate an enemy base, hidden in a forest.");
      window.alert("To complete the mission Salvage all pellets and enter the center of the board.");

      break;

    case 2:

      window.alert("HeadQuarters do you copy!!!.");
      window.alert("HeadQuarters: Loud and clear!!!.");
      window.alert("They seem to be creating some kind of monster ghost!!!.");
      window.alert("Guard: Look its the pacman! Quick release the chomper!!!.");
      window.alert("What do i do!?!?.");
      window.alert("HeadQuarters: try killing it.");
      window.alert("To complete the mission collect all pellets and kill the chomper at least once.  If you miss your chance, wait for another Power Pellet.");

    default:

  }

}


// -------------------------------------------------------------------------

function showPacmanPP(pos) {
  var squares = document.querySelectorAll('.square'); // faster to get first?

  // show player one last instant before resetting round
  switch (playerDirection) {
    case UP:
      squares[pos + boardSize].innerHTML = ""; // need extra blank because old space is after current space
      squares[pos].innerHTML = PACMAN_UP_PP;

      break;
    case DOWN:
      squares[pos].innerHTML = PACMAN_DOWN_PP;
      break;
    case LEFT:
      squares[pos + 1].innerHTML = ""; // need extra blank because old space is after current space
      squares[pos].innerHTML = PACMAN_LEFT_PP;
      break;
    case RIGHT:
      squares[pos].innerHTML = PACMAN_RIGHT_PP;
      break;
    default:
      console.log("Error in Switch");
  } // end switch

} // end function show pac man

// ------------------------------------------------------------------------

function recordScore() {
  var topTenList = new Array; // build top 10 list as you go
  var gameData = new Array; // story current game data.  doesn't need to be an array, but I got it to work fine this way.  JS knows how to stringify an array.
  gameData.push([boardSize, numberOfGhosts, numberOfWallsStart, Number(document.getElementById("scoreVariable").innerHTML), document.getElementById("playerNameInput").value]);

  var pmGameCount = 0;
  var items = localStorage.length;

  // check each item in local storage
  for (i = 0; i < items; ++i) {
    // get key
    var key = localStorage.key(i);

    // if key starts with pacman, continue checking
    if (key.slice(0, 6) == PAC_MAN_KEY) {
      pmGameCount++;
      // get value
      var value = localStorage.getItem(key);
      //
      if (value) {
        // Parse old game data
        var oldGameData = JSON.parse(value);

        if ((oldGameData[0][0] == boardSize) && (oldGameData[0][1] == numberOfGhosts) && (oldGameData[0][2] == numberOfWallsStart) && (oldGameData[0][3] > Number(document.getElementById("scoreVariable").innerHTML))) {
          playerRank++;
        }
      } // if value

      // parse value

      // check if game read matches configuration.  If it does...
      // check score against each game read from local storage
    } // end local storage for loop

    // update playerRank if necessary

  } // if key slice

  localStorage.setItem(PAC_MAN_KEY + pmGameCount, JSON.stringify(gameData));

}
// -------------------------------------------------------------------------

function showPacman(pos) {
  var squares = document.querySelectorAll('.square'); // faster to get first?

  // show player one last instant before resetting round
  switch (playerDirection) {
    case UP:
      squares[pos + boardSize].innerHTML = ""; // need extra blank because old space is after current space
      squares[pos].innerHTML = PACMAN_UP;

      break;
    case DOWN:
      squares[pos].innerHTML = PACMAN_DOWN;
      break;
    case LEFT:
      squares[pos + 1].innerHTML = ""; // need extra blank because old space is after current space
      squares[pos].innerHTML = PACMAN_LEFT;
      break;
    case RIGHT:
      squares[pos].innerHTML = PACMAN_RIGHT;
      break;
    default:
      console.log("Error in Switch");
  } // end switch

} // end function show pac man

// -------------------------------------------------------------------------

function killPacman() {
  currentSquare = OFF_THE_BOARD; // Player killed, move off board
  lives = lives - 1;
  messageBox.innerHTML = "YOU'VE BEEN KILLED!";
  console.log("You were killed");
  document.getElementById("livesVariable").innerHTML = lives;
  if (lives == 0) {
    messageBox.innerHTML = "GAME OVER.";
    recordScore();
    restartGame();
  } else {
    resetPlayer();
  }
}

// --------------------------------------------------------------------

function launchDoorTimerCheck(pos) {

  console.log("Inside launch door");
  doorTimerVar = setInterval(myDoorTimer, 100, pos);
  // zzz to do, save this timer, so we can delete if necessary

}

// -------------------------------------------------------------------------

function myDoorTimer(pos) {
  console.log("Got into timer");
  if (currentSquare == pos) {
    restartRound();
    showCurrentLevelMessageBoxes();
  }
}

// --------------------------------------------------------------------

function launchChomperKilledTimerCheck() {
  // console.log ("Inside launch door");
  chomperKilledTimerVar = setInterval(myCheckChomperKilledTimer, 100);
  // zzz to do, save this timer, so we can delete if necessary

}

// -------------------------------------------------------------------------

function myCheckChomperKilledTimer() {
  // console.log ("Got into timer");
  if (chomperKilled == true) {
    chomperKilled = false;
    restartRound();
    showCurrentLevelMessageBoxes();
  }
}

// -------------------------------------------------------------------------

function storyModeConditionsComplete() {
  switch (currentLevel) {

    case 0:
      return true;
      break;

    case 1:

      // pac man must return to square 60 - can't finish last pellet on the square, so always return false after setting timer
      launchDoorTimerCheck(DOOR_SQUARE_LEVEL_1);
      // console.log ("launched door timer")
      return false;

      break;

    case 2:

      // need to check if chomper killed
      if (chomperKilled == true)
        return true;
      else // chomper not killed
      {

        console.log("Running new code");

        var j;
        var powerPelletFound = false;

        // check if still out there
        for (j = 0; j < powerPellets.length; j++) {
          if (powerPellets[j] == PELLET)
            powerPelletFound = true;
        }

        if (powerPelletFound == false) // no pp left, need to create timer to create new one.
        {

          console.log("No PP left, starting timer");
          // zzz fix this bug - deal with timer
          myPowerPelletTimerVar = setInterval(myPowerPelletTimer, POWER_PELLET_DELAY_STORY_MODE_LEVEL_2);

        }

        launchChomperKilledTimerCheck();
        return false;
        // console.log ("Chomper killed timer")
      }

    default:

      // should never get here
      return true;
  }

}

// --------------------------------------------------------------------------

function myPowerPelletTimer() {

  var squareFound = false;
  var ppSquare;

  while (squareFound == false) {
    ppSquare = Math.floor(Math.random() * ((boardSize * boardSize) - 1)) + 1; // return any square on board except 0.

    if ((ppSquare != currentSquare) && (walls[ppSquare] == NO_WALL)) {
      console.log("Found a square for the new pp at " + ppSquare);
      powerPellets[ppSquare] = POWER_PELLET;
      squareFound = true;

      renderGame();

    } // end if

  } // end while

} // end function


// --------------------------------------------------------------------------

function getSquareStatus(pos) {
  if (pos == currentSquare) // pac man found
  {
    var ghostType = checkGhost(pos);

    if (ghostType >= 0) // there is a ghost
    {
      switch (ghostType) {
        case GHOST_TYPE_STANDARD:
        case GHOST_TYPE_HOPPER:
        case GHOST_TYPE_BOMBER:
        case GHOST_TYPE_SPLITTER:
        case GHOST_TYPE_MEGA:
        case GHOST_TYPE_CHOMPER:
        case GHOST_TYPE_TELEPORTER:
        case GHOST_TYPE_PEEWEE:
        case GHOST_TYPE_INVISIBLE:

          // put logic here to check if on Power Pellet
          if (powerPelletStatus == POWER_PELLET_OFF)
            return SQ_STATUS_PAC_ON_GHOST; // add another one here pac on ghost on pellet
          else {
            if ((ghostType == GHOST_TYPE_CHOMPER) && (gameMode == MODE_STORY) && (currentLevel == 2))
              chomperKilled = true;
            return SQ_STATUS_PAC_ON_GHOST_ON_POWER_PELLET_STATUS;
          }

          break;

        case GHOST_TYPE_INVINCIBLE:
          return SQ_STATUS_PAC_ON_GHOST_INVINCIBLE;

          break;

        default:

      } // end switch

    } // check ghost
    else {
      if (checkBomb(pos) == true)
        return SQ_STATUS_PAC_ON_BOMB;

      if (goodBombs[pos] == BOMB) {
        // console.log("Good bomb found");
        return SQ_STATUS_PAC_ON_GOOD_BOMB;
      }

      if (pellets[pos] == PELLET)
        return SQ_STATUS_PAC_ON_PELLET;

      if (powerPellets[pos] == POWER_PELLET) {
        console.log("Pac Man ate a PP");
        return SQ_STATUS_PAC_ON_POWER_PELLET;
      }

      return SQ_STATUS_PAC_ON_BLANK;
    } // end else, no guost
  } // end if pos = pac man

  var myGhostType = checkGhost(pos);

  if (myGhostType == GHOST_TYPE_STANDARD) // check for ghost
    return SQ_STATUS_GHOST;

  if (myGhostType == GHOST_TYPE_INVINCIBLE) // check for ghost
    return SQ_STATUS_GHOST_INVINCIBLE;

  if (myGhostType == GHOST_TYPE_CHOMPER) // check for ghost
    return SQ_STATUS_GHOST_CHOMPER;

  if (myGhostType == GHOST_TYPE_HOPPER) // check for hopper
    return SQ_STATUS_GHOST_HOPPER;

  if (myGhostType == GHOST_TYPE_MEGA) // check for ghost
    return SQ_STATUS_GHOST_MEGA;

  if (myGhostType == GHOST_TYPE_BOMBER) // check for ghost
    return SQ_STATUS_GHOST_BOMBER;

  if (myGhostType == GHOST_TYPE_INVISIBLE) // check for ghost
    return SQ_STATUS_GHOST_INVISIBLE;

  if (myGhostType == GHOST_TYPE_SPLITTER) // check for ghost
    return SQ_STATUS_GHOST_SPLITTER;

  if (myGhostType == GHOST_TYPE_TELEPORTER) // check for ghost
    return SQ_STATUS_GHOST_TELEPORTER;

  if (myGhostType == GHOST_TYPE_PEEWEE) // check for ghost
  {
    // console.log ("Peewee found, now checking if he's going on a wall.")
    if (walls[pos] == WALL_TWO_THIRDS) {
      // console.log ("Peewee on two thirds found.");
      return SQ_STATUS_GHOST_PEEWEE_ON_TWO_THIRDS;
    } else if (walls[pos] == WALL_ONE_THIRD) {
      // console.log ("Peewee on one third found");
      return SQ_STATUS_GHOST_PEEWEE_ON_ONE_THIRD;
    } else {
      // console.log ("Peewee found, no wall.")
      return SQ_STATUS_GHOST_PEEWEE;
    }
  }

  if (checkBomb(pos) == true) // check for ghost
    return SQ_STATUS_BOMB_ON_BLANK;

  if (walls[pos] != NO_WALL) // check for wall
    return SQ_STATUS_WALL;

  if (goodBombs[pos] == GOOD_BOMB) {
    // console.log("Good bomb found in square " + pos);
    return SQ_STATUS_GOOD_BOMB;
  }

  if (pellets[pos] == PELLET)
    return SQ_STATUS_PELLET;

  if (powerPellets[pos] == POWER_PELLET)
    return SQ_STATUS_POWER_PELLET;

  return SQ_STATUS_BLANK;

} // end function get Square status

// --------------------------------------------------------------------------

function renderGame() {
  //console.log("In Render Game 1.");
  var squares = document.querySelectorAll('.square'); // faster to get first?
  var i;
  //console.log("In Render Game 2.");

  // console.log ("In Render Game, ghosts are " + ghosts);
  for (i = 0; i < boardSize * boardSize; i++) {
    var squareStatus = getSquareStatus(i);

    //console.log ("Get Square Status called.  Status is " + squareStatus);
    switch (squareStatus) {
      case SQ_STATUS_PAC_ON_PELLET:

        document.getElementById("scoreVariable").innerHTML = Number(document.getElementById("scoreVariable").innerHTML) + 1;
        if (document.getElementById("scoreVariable").innerHTML >= freeLives * EXTRA_LIFE_LEVEL) {
          lives++;
          freeLives++;
          document.getElementById("livesVariable").innerHTML = lives;
          document.getElementById("messageBox").innerHTML = "Extra Life Earned!";
        }
        pellets[i] = NO_PELLET;
        //console.log("Big switch - Pellet eaten. " + pelletsLeft + " remaining.");

        if (--pelletsLeft == 0) {
          console.log("Finished Pellets.");

          if (powerPelletStatus == POWER_PELLET_ON) {
            showPacmanPP(i);
          } else {
            showPacman(i); // briefly show in last spt before resetting board
          }

          // zzz - if all pellets eaten - check here for conditions

          if (gameMode == MODE_STORY) {
            if (storyModeConditionsComplete() == true) {
              restartRound();
              showCurrentLevelMessageBoxes();
            }
          } else
            restartRound();

          return; //  Round over - return here ---------------

        } // finished board


        if (powerPelletStatus == POWER_PELLET_ON) {
          showPacmanPP(i);
        } else {
          showPacman(i); // briefly show in last spt before resetting board
        }

        break;

      case SQ_STATUS_PAC_ON_GOOD_BOMB:

        bombsCount++;
        document.getElementById("bombsVariable").innerHTML = bombsCount;
        goodBombs[i] = NO_GOOD_BOMB;
        console.log("Pacman gained a bomb!");

        if (pellets[i] == PELLET) {
          pellets[i] = NO_PELLET;

          if (--pelletsLeft == 0) {
            console.log("Finished Pellets.");


            showPacmanPP(i);

            // zzz - check for conditions

            if (gameMode == MODE_STORY) {
              if (storyModeConditionsComplete() == true) {
                restartRound();
                showCurrentLevelMessageBoxes();
              }
            } else
              restartRound();

            return; //  Round over - return here ---------------

          }
        } // end check for pellet

        showPacman(i);

        break;

      case SQ_STATUS_PAC_ON_POWER_PELLET:

        powerPelletStatus = POWER_PELLET_ON;
        powerPellets[i] = NO_PELLET;

        // set timer
        console.log("Power Pellet eaten in square: " + i);
        var myVar = setTimeout(myPPTimer, POWER_PELLET_DELAY * 1000);
        showPacmanPP(i);

        break;

      case SQ_STATUS_PAC_ON_GHOST_ON_POWER_PELLET_STATUS:

        var j;
        // kill ghost
        for (j = 0; j < ghosts.length; j++) {
          if (ghosts[j][GHOST_INDEX_POSITION] == i) {
            document.getElementById("scoreVariable").innerHTML = Number(document.getElementById("scoreVariable").innerHTML) + GHOST_POINTS;

            if (document.getElementById("scoreVariable").innerHTML >= freeLives * EXTRA_LIFE_LEVEL) {
              lives++;
              freeLives++;
              document.getElementById("livesVariable").innerHTML = lives;
              document.getElementById("messageBox").innerHTML = "Extra Life Earned!";
            }

            console.log("I killed ghost in position " + j);
            ghosts[j][GHOST_INDEX_POSITION] = OFF_THE_BOARD; // high negative number

            var splitterCount = 0;

            //  check splitter logic, only re-incarnate if less than original splitters on board
            if (ghosts[j][GHOST_INDEX_TYPE] == GHOST_TYPE_SPLITTER) {
              var k;

              for (k = 0; k < ghosts.length; k++) {
                if ((ghosts[k][GHOST_INDEX_TYPE] == GHOST_TYPE_SPLITTER) && (ghosts[k][GHOST_INDEX_POSITION] != OFF_THE_BOARD)) {
                  splitterCount++;
                }
              }
            }


            // only bring ghost back to life if not a mega ghost and not an extra splitter
            if ((ghosts[j][GHOST_INDEX_TYPE] != GHOST_TYPE_MEGA) && (splitterCount < originalSplitterCount + 1)) {
              // already fixed bug here, need to record the timer id returned and cancel it between rounds - zzz
              ghosts[j][GHOST_INDEX_DEATH_TIMER_ID] = setTimeout(myGhostResetTimer, RESET_GHOST_DELAY * 1000, j);
            }
          }
        }

        if (pellets[i] == PELLET) {
          pellets[i] = NO_PELLET;

          if (--pelletsLeft == 0) {
            console.log("Finished Pellets.");

            showPacmanPP(i);

            // zzz - Check conditions

            if (gameMode == MODE_STORY) {
              if (storyModeConditionsComplete() == true) {
                restartRound();
                showCurrentLevelMessageBoxes();
              }
            } else
              restartRound();

            return; //  Round over - return here ---------------

          }
        }

        showPacmanPP(i);

        break;

      case SQ_STATUS_PAC_ON_BOMB:
      case SQ_STATUS_PAC_ON_BLANK:

        // console.log("Big switch - Pac on Blank or Pac on Bomb.");

        if (powerPelletStatus == POWER_PELLET_ON) {
          showPacmanPP(i);
        } else {
          showPacman(i); // briefly show in last spt before resetting board
        }

        break;

      case SQ_STATUS_GHOST:

        //console.log("Big switch - Ghost");
        squares[i].innerHTML = ICON_GHOST;

        break;


      case SQ_STATUS_GHOST_INVINCIBLE:

        //console.log("Big switch - Ghost");
        squares[i].innerHTML = ICON_GHOST_INVINCIBLE;
        break;


      case SQ_STATUS_GHOST_BOMBER:

        squares[i].innerHTML = ICON_GHOST_BOMBER;
        break;

      case SQ_STATUS_GHOST_INVISIBLE:

        var tempInvisibleNum = Math.floor(Math.random() * 100) + 1; // 1 to 100 range

        if (tempInvisibleNum >= GHOST_INVISIBLE_PERCENTAGE) {
          squares[i].innerHTML = ICON_GHOST_INVISIBLE;
        } else {
          // Only need to check for beginning of game scenario - pellets and power pellets
          // later on, doing nothing will show bombs, good bombs, etc.

          if (powerPellets[i] == PELLET)
            squares[i].innerHTML = ICON_POWER_PELLET;
          else if (pellets[i] == PELLET)
            squares[i].innerHTML = ICON_PELLET;

        }

        break;

      case SQ_STATUS_GHOST_MEGA:

        //console.log("Big switch - Ghost - mega");
        squares[i].innerHTML = ICON_GHOST_MEGA;
        break;

      case SQ_STATUS_GHOST_CHOMPER:

        //console.log("Big switch - Ghost");
        squares[i].innerHTML = ICON_GHOST_CHOMPER;
        break;


      case SQ_STATUS_GHOST_HOPPER:

        //console.log("Big switch - Ghost");
        squares[i].innerHTML = ICON_GHOST_HOPPER;
        break;

      case SQ_STATUS_GHOST_SPLITTER:

        //console.log("Big switch - Ghost");
        squares[i].innerHTML = ICON_GHOST_SPLITTER;
        break;

      case SQ_STATUS_GHOST_PEEWEE_ON_ONE_THIRD:

        //console.log("Big switch - Ghost");

        //console.log("In Render - Peewee on one third should show");
        //console.log("i = " + i + " Walls of i = " + walls[i]);
        squares[i].innerHTML = ICON_GHOST_PEEWEE_ON_ONE_THIRD;
        // alert ("Break");
        break;

      case SQ_STATUS_GHOST_PEEWEE_ON_TWO_THIRDS:

        //console.log("In Render - Peewee on two thirds should show");
        //console.log("i = " + i + " Walls of i = " + walls[i]);
        squares[i].innerHTML = ICON_GHOST_PEEWEE_ON_TWO_THIRDS;
        //alert ("Break");
        break;


      case SQ_STATUS_GHOST_PEEWEE:

        //console.log("Big switch - Ghost");
        squares[i].innerHTML = ICON_GHOST_PEEWEE;
        break;

      case SQ_STATUS_GHOST_TELEPORTER:

        //           console.log("TELEPORTER");
        squares[i].innerHTML = ICON_GHOST_TELEPORTER;
        break;

      case SQ_STATUS_PAC_ON_GHOST:

        switch (checkGhost(i)) {
          case GHOST_TYPE_MEGA:
            squares[i].innerHTML = ICON_GHOST_MEGA;
            break;

          case GHOST_TYPE_CHOMPER:
            squares[i].innerHTML = ICON_GHOST_CHOMPER;
            break;

          case GHOST_TYPE_HOPPER:
            squares[i].innerHTML = ICON_GHOST_HOPPER;
            break;

          case GHOST_TYPE_BOMBER:
            squares[i].innerHTML = ICON_GHOST_BOMBER;
            break;

          case GHOST_TYPE_INVISIBLE:
            squares[i].innerHTML = ICON_GHOST_INVISIBLE;
            break;

          case GHOST_TYPE_PEEWEE:
            squares[i].innerHTML = ICON_GHOST_PEEWEE;
            break;

          case GHOST_TYPE_INVINCIBLE:
            squares[i].innerHTML = ICON_GHOST_INVINCIBLE;
            break;

          case GHOST_TYPE_TELEPORTER:
            squares[i].innerHTML = ICON_GHOST_TELEPORTER;
            break;

          case GHOST_TYPE_SPLITTER:
            squares[i].innerHTML = ICON_GHOST_SPLITTER;
            break;

          default: // Standard ghost
            squares[i].innerHTML = ICON_GHOST;
        }

        killPacman();

        break;

      case SQ_STATUS_PAC_ON_GHOST_INVINCIBLE:

        squares[i].innerHTML = ICON_GHOST_INVINCIBLE;
        killPacman();
        break;


      case SQ_STATUS_BLANK: // why is color looking weird here on mac vs. windows?

        squares[i].innerHTML = "";

        break;

      case SQ_STATUS_WALL:

        switch (walls[i]) {
          case WALL:
            squares[i].innerHTML = ICON_WALL;
            break;

          case WALL_TWO_THIRDS:
            squares[i].innerHTML = ICON_WALL_TWO_THIRDS;
            break;

          case WALL_ONE_THIRD:
            squares[i].innerHTML = ICON_WALL_ONE_THIRD;
            break;
          default:

        }

        break;

      case SQ_STATUS_GOOD_BOMB:

        // console.log ("In render game, good bomb, i = " + i);
        squares[i].innerHTML = ICON_GOOD_BOMB;
        break;

      case SQ_STATUS_PELLET:

        squares[i].innerHTML = ICON_PELLET;
        break;

      case SQ_STATUS_POWER_PELLET:

        squares[i].innerHTML = ICON_POWER_PELLET;
        break;

        //case SQ_STATUS_PAC_ON_SPECIAL:
        //  break;

      case SQ_STATUS_BOMB_ON_BLANK:

        squares[i].innerHTML = ICON_BOMB;
        break;

      default:
        console.log("Error in renderGame switch, invalid square status : " + squareStatus);
    } // end switch

  } // end for loop

  // console.log("In Render Game 5.");

} // end function renderGame

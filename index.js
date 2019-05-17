'use strict';

const FIRESTORE_DB_1 = 1;
const FIRESTORE_DB_2 = 2;
var firebaseDB = FIRESTORE_DB_1;
// var firebaseDB = FIRESTORE_DB_2;

const ENTER_KEY = 13; // intercept enter key for default processing
const PLAYER_ID_LENGTH = 8;   // length of player id
const SCROLLING_MESSAGE_LENGTH = 3;
const PICTURE_SIZE_LOWER_SIZE = 500;
const PICTURE_SIZE_UPPER_SIZE = 550;

const SYSTEM_ID = "SYSTEM";

const ERROR_GAME_DATA_REF_DOESNT_EXIST = "Game Data doc doesn't exist";
const ERROR_GAME_DATA_REF_GET_FAILED = "Game Data Get Failed.";

// Game status constants
const GAME_STATUS_NOT_STARTED = 0;
const GAME_STATUS_ACTIVE = 1;
const GAME_STATUS_PAUSED = 2;
const GAME_STATUS_COMPLETED = 3;
const GAME_STATUS_UNKNOWN = 4;
const GAME_STATUS_OVERNIGHT =5;
const GAME_STATUS_MAINTENANCE =6;

const GAME_STATUS_NOT_STARTED_TEXT = "Not Started";
const GAME_STATUS_ACTIVE_TEXT = "Active";
const GAME_STATUS_PAUSED_TEXT = "Paused";
const GAME_STATUS_COMPLETED_TEXT = "Completed";
const GAME_STATUS_UNKNOWN_TEXT = "Unknown Status";
const GAME_STATUS_OVERNIGHT_TEXT = "Game Paused at Night";
const GAME_STATUS_MAINTENANCE_TEXT = "Game Paused, System Maintenance.";

// Player status constants
const PLAYER_STATUS_LOGGED_OFF = 0;
const PLAYER_STATUS_LOGGED_OFF_TEXT = "Logged Off";
const PLAYER_STATUS_REGISTERED = 2;
const PLAYER_STATUS_REGISTERED_TEXT = "Registered";
const PLAYER_STATUS_WAITING = 3;
const PLAYER_STATUS_WAITING_TEXT = "Waiting";
const PLAYER_STATUS_SCHEDULED = 4;
const PLAYER_STATUS_SCHEDULED_TEXT = "Scheduled";
const PLAYER_STATUS_ACTIVE = 5;
const PLAYER_STATUS_ACTIVE_TEXT = "Active";
const PLAYER_STATUS_INACTIVE = 6;
const PLAYER_STATUS_INACTIVE_TEXT = "Inactive";
const PLAYER_STATUS_BREAK = 7;
const PLAYER_STATUS_BREAK_TEXT = "On Break";
const PLAYER_STATUS_GAME_OVER = 8;
const PLAYER_STATUS_GAME_OVER_TEXT = "Game Completed";
const PLAYER_STATUS_UNKNOWN_TEXT = "Unknown Status";

const REGISTERED_ASAP = 0;      // enter game as soon as possible
const REGISTERED_SCHEDULED = 1; // wait to enter game until scheduled start

// Screen labels
const MY_TARGETS_PICTURE_LABEL_PART1 = "My Target ";
const MY_TARGETS_PICTURE_LABEL_PART2 = "'s Picture: <br>";

const MY_PICTURE_LABEL = "My Picture:"
const CONFIRM_KILL_LABEL = "Name of your target's target: ";

// // Events
// const EVENT_TYPE_LOGIN = 3;
// const EVENT_TYPE_INCORRECT_LOGIN = 4;
// const EVENT_TYPE_LOGOFF = 5;
// const EVENT_TYPE_CONFIRM_BOUNTY = 6;
// const EVENT_TYPE_BOUNTY_FAILED = 7;
// const EVENT_TYPE_BUY_BACK_IN = 12;
// const EVENT_TYPE_PING_TARGET = 14;  // not implemented yet
// const EVENT_TYPE_ANSWER_PING = 15;  // not implemented yet
// const EVENT_TYPE_TAKE_BREAK = 16;
// const EVENT_TYPE_RETURN_FROM_BREAK = 17;
// const EVENT_TYPE_ASSASSINATED = 18;
// const EVENT_TYPE_ACTIVATED = 19;
// const EVENT_TYPE_WAITING = 20;
// const EVENT_TYPE_VOLUNTEERED = 21;


// -----------------------------------------------------------------
// Player events

const EVENT_TYPE_PLAYER_LOGIN = 101;
const EVENT_TYPE_PLAYER_REGISTER_SUCCESS_ASAP = 102;
const EVENT_TYPE_PLAYER_REGISTER_SUCCESS_SCHED = 103;
const EVENT_TYPE_PLAYER_CONFIRM_KILL = 104;
const EVENT_TYPE_PLAYER_TAKE_BREAK = 105;
const EVENT_TYPE_PLAYER_RETURN_BREAK = 106;
const EVENT_TYPE_PLAYER_BUY_BACK_IN = 107;
const EVENT_TYPE_PLAYER_UPLOAD_PIC = 108;
const EVENT_TYPE_PLAYER_QUIT_GAME = 109;
const EVENT_TYPE_PLAYER_VOLUNTEER = 110;

// -----------------------------------------------------------------

// General constants
const OFF = 0;
const ON = 1;
const MIN_LENGTH_BREAK_DEFAULT = 2; // number of minutes minimum break length
const PIC_MISSING_TARGET = 1;
const PIC_MISSING_MINE = 2;

// Message Text Constants - Find similar and clean up.
const MESSAGE_TEXT_WELCOME = "Welcome to Assassin.  Enter ID and click Login -OR- Enter your real name and click Register.";
const MESSAGE_TEXT_GAME_START = "The game starts Wed. June 19 at Noon ET.";

const MESSAGE_TEXT_LOGIN = "Successul log in.";
const MESSAGE_TEXT_LOGIN_FAILED = "Player login failed. id = ";
const MESSAGE_TEXT_LOGOFF = "Successful log off.";
//const MESSAGE_TEXT_PLAYER_LOGGED_OFF = "Player currently logged off";
const MESSAGE_TEXT_CONFIRM_BOUNTY = "Bounty Confirmed!";
const MESSAGE_TEXT_BOUNTY_FAILED = "Confirm Bounty Failed. Bad name entered was ";
const MESSAGE_TEXT_BUY_BACK_IN = "Successful re-buy.";
//const MESSAGE_TEXT_PING_TARGET = "Are you still at PorcFest?";  // not implemented yet
//const MESSAGE_TEXT_ANSWER_PING = "Yes, I'm still at PorcFest.";  // not implemented yet
const MESSAGE_TEXT_TAKE_BREAK = "Successful Break.";
const MESSAGE_TEXT_RETURN_BREAK = "Successful Return From Break.";
const MESSAGE_TEXT_QUIT = "Successful Quit Game.";
const MESSAGE_TEXT_ASSASSINATED = "You have been assassinated!";
const MESSAGE_TEXT_ACTIVATED = "You are activated!";
const MESSAGE_TEXT_WAITING = "You are waiting to enter game.";
// const MESSAGE_TEXT_NEW_TARGET= "You are active, check for a new target.";
const MESSAGE_TEXT_BOUNTY_OWED_CHANGE = "Change in Bounties Owed.";
const MESSAGE_TEXT_INVALID_SCREEN_DATA = "Invalid screen data.";
const MESSAGE_TEXT_PAUSED_GAME = "Game paused. Only 1 active player.";
const MESSAGE_TEXT_REGISTER_PLAYER = "Sucessfully Registered.  Write down your id, login, and upload a picture. Admin will review and move you to the waiting or scheduled queue.";
const MESSAGE_TEXT_REGISTER_PLAYER_FAILED = "Registration Failed.  Please try again.";
const MESSAGE_TEXT_PLAYER_NOT_FOUND = "Player not found.";
const MESSAGE_TEXT_GAME_COMPLETED = "The game is over.";
const MESSAGE_TEXT_CANT_REGISTER_GAME_OVER = "You can't register, the game is over.";
const MESSAGE_TEXT_PLAYER_ALREADY_EXISTS = "You generated a random number for a player that already exists.  Click Register again.";
const MESSAGE_TEXT_VOLUNTEERED = "Successful volunteer.  You are inactive, but can buy back in.";
const MESSAGE_TEXT_SCHEDULED = "You are scheduled to enter the game.";
const MESSAGE_TEXT_FATAL_ERROR = "Fatal Error - Connection to DB.  Contact Admin.";
const MESSAGE_TEXT_UPLOAD_PIC_FAILED = "Upload picture failed.";
const MESSAGE_TEXT_UPLOAD_PIC_SUCCESS = "Upload picture success."
const MESSAGE_TEXT_PIC_APPROVED = "Your picture has been approved by the Admin.";
const MESSAGE_TEXT_FILE_NOT_FOUND = "File not found."
const MESSAGE_TEXT_TARGET_FILE_NOT_FOUND = "Target file not found."
const MESSAGE_TEXT_MY_FILE_NOT_FOUND = "You have not uploaded a picture yet.  Click browse to choose a picture, then the Upload button.";

// const MESSAGE_TEXT_PICTURE_NOT_FOUND = "My Picture file not found.";
// const MESSAGE_TEXT_TARGET_PICTURE_NOT_FOUND = "Target Picture Not Found.";
const MESSAGE_TEXT_VOLUNTEER_NEEDED = "Click the volunteer button to exit the game with a refund of 1 bounty.";
const MESSAGE_TEXT_CANT_VOLUNTEER = "Only active players can volunteer to move to inactive status.";
const MESSAGE_TEXT_TOO_EARLY_TO_RETURN_FROM_BREAK = "Too early to return from break.";
const MESSAGE_TEXT_CANT_TAKE_BREAK = "You can only take a break when active.";
const MESSAGE_TEXT_LOGIN_CANT_RETURN_FROM_BREAK = "You are not on break.  Can't return.";
const MESSAGE_TEXT_VOLUNTEER_FILLED = "Volunteer request filled.";
const MESSAGE_TEXT_NEXT_START = "The next scheduled wave of new players starts at ";
const MESSAGE_TEXT_GAME_STATUS_OVERNIGHT = "Game Paused Until Morning. Restart at ";
const MESSAGE_TEXT_SEE_RULES_BELOW = "Scroll down to view rules below statistics.";
const MESSAGE_TEXT_BOMB_DROPPED = "Bomb dropped!  Check for a new target.";
// const GAME_FUNCTION_DISABLED_OVERNIGHT = "";


var RULES_TEXT = "<p>Assassin is a game of stealth, patience, and trickery. It's also a great way to get to get to know other PorcFest attendees.</p> Rules: <br> <ol><li>The game begins Wednesday, June 19 at Noon and ends Saturday at 9:00 pm.</li><li>Register for the game by entering your real name and clicking Register.  An ID will be generated for you, please record it somewhere. Then log in and upload your picture.  Your ID may be saved in the browser.</li><li>You can also register and pay the $5 entry in person with the Admin, Jon Pawelko, at PorcFest (Guy with the orange backpack).  Please reduce bandwidth bottlenecks at PorcFest by registering and uploading your picture ahead of time.</li><li>Keep your browser open on the Assassin website and it will automatically update with game status and target changes.  Or login occasionally to check for changes.</li><li>Ages 13 and up.</li><li>Water guns are $1 or you can bring your own.  However, water guns are not required.  You can use any method to assassinate your target.</li><li>The game will be paused nightly.  No assassinations are valid between 9 PM and 9 AM.</li><li>Contact Jon through the PorcFest event on the Whova App if you have any questions or issues.  You can post general messages on the Whova – PorcFest Assassin Group.</li><li>Once you are registered, paid, and your picture is approved, you will be placed in the Waiting Queue.</li><li>If you upload your own picture, take the photo with a secret hand symbol underneath your face.  If someone attempts to assassinate you, you can ask them for your secret symbol.  If they don’t know your symbol, that means they didn’t see your picture and are trying to trick you into thinking you are their target.  If someone knows your hand symbol, you can still request they log in and show you as their target if you are suspicious.</li><li>You are officially playing in the game when your status changes to Active.  You will see the name and picture of your target on this website when you are logged in.</li><li>You assassinate your target by getting pure water on them or their clothes without anyone other than your target as a witness.  If another person witnessed the event, the assassination failed but can be attempted again later.</li><li>A 'witness' is someone who was aware that the target was being doused at the exact time of the douse, but does not need to see the water.  It's not enough to see the aftermath or even the surprised yelp from the victim.</li><li>One who does not wish to count as a witness does not count as a witness. However, there is a limit of 2 'Declined' witnesses per assassination attempt.</li><li>Log your successful assassination on the website by entering the name of your Target's Target and clicking the 'Confirm Assassination' button.</li><li>If you're assassinated, you must immediately share the name of your target with your assassin so that they can continue playing.  Remember to ask the person who assassinated you to identify your hand symbol to ensure that you are actually their target.</li><li>One time per game, the admin will “Drop a Bomb”.  This will release all Waiting players into the game and re-shuffle all target assignments.  Any assassinations that are not logged on the website before the bomb is dropped do not count.</li><li>To minimize disruption, anyone under the roof of a scheduled presentation is safe for the duration of that presentation.  A presentation is defined as an event at which attendants are intended to listen to a presentation.</li><li>A player may stun their assassin by dousing them with water. This prevents that assassin from assassinating them for 60 minutes.  Targets can douse their assassin at any time to reset the 60 minute safe period.</li><li>Assassinations should be recorded on the website immediately to ensure accurate record keeping.  By reporting here, you get the picture of your next target immediately.</li><li>If you leave PorcFest before 9 PM on Saturday, please use the Quit Game feature to free up your Assassin to obtain a new target.</li><li>If you leave PorcFest for more than 5 hours, please use the “Take a Break” feature.  You can use the “Return From Break” feature to return to the Waiting Queue after 5 hours.  This will also free up your Assassin to obtain a new target.</li><li>Players may join after the game has started.  Newcomers that choose to join ASAP are inserted into the Waiting Queue and are released into the game upon one of several events: an assassination, a break, a quit, or a bomb.  If you are in the Waiting Queue, it is your responsibility to check for status frequently as you may be entering the game at any time.  If you don't want to enter ASAP, see the following 'Scheduled' feature when you register.  </li><li>A new feature this year allows you to enter a running game at a specific time using the 'Scheduled' start registration.  The message under the registration area shows the next scheduled start time.  Set your phone alarm for this time to remind yourself you're in the game.</li><li>If you are eliminated, you may re-enter at any time.  The cost is $5 or you may forfeit one bounty if you have earned any using the “Buy Back In” Feature.  You can continue to rebuy online if you have bounties accrued.</li><li>Each assassination you perform will earn you $5.  A 10% tip to the admin will be applied at 4 assassinations and above, capped at $5.  You may request your accumulated prize money any time after the game ends or after you are eliminated.</li><li>The 'witness' rules can be better understood by imagining that water is an undetectable poison that kills hours after contact.  If you witness someone dousing another with some liquid, you would immediately suspect something amiss and could confront the assassin on the spot and get the victim an antidote.  If you don't see the act as it occurs, the poison goes undetected by the victim and the assassination is successful.</li></ol>";


// ----- Initialize Firebase -----------------------------------------------------
// Get the config info from the database settings area on your firestore database

var config;

if (firebaseDB == FIRESTORE_DB_1)
{
  config =
  {
      apiKey: "AIzaSyBB4kKWj-T1TH59Lyk_gaic5f1ElgLwJLE",
      authDomain: "assassinfirestoretest1.firebaseapp.com",
      databaseURL: "https://assassinfirestoretest1.firebaseio.com",
      projectId: "assassinfirestoretest1",
      storageBucket: "assassinfirestoretest1.appspot.com",
      messagingSenderId: "54139984085"
  };
}
else
{
  config =
  {
      apiKey: "AIzaSyDV4SiK3fKshX681ZABQ1xEFHX9URz71I0",
      authDomain: "assassintestdb2.firebaseapp.com",
      databaseURL: "https://assassintestdb2.firebaseio.com",
      projectId: "assassintestdb2",
      storageBucket: "assassintestdb2.appspot.com",
      messagingSenderId: "356236457364"
  };
}

// init firebase
firebase.initializeApp(config);

// create shorthand reference to the database
var db = firebase.firestore();

const settings = {timestampsInSnapshots: true};
db.settings(settings);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
var storageRef = storage.ref();

// -----  end init firebase ---------------------------------------

// global html body variable
var myBody = document.getElementById("myBody");

// global region and html variables
var loginRegion = "";
var buttonStripRegion = "";

var headerHTML = "Assassin Player Application<br>";
var loginOrRegisterHTML = "<span id='myIdInputLabel'>ID:</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &#8239<input type='text' id='idInputBox' size='10'> &nbsp <button id='logInButton' onclick='loginButtonClick()'>Log In</button><br>-or-<br><span id='myRegisterNameLabel'>Real Name: </span><input type='text' id='nameInputBox' value='' size='10'> &nbsp  <button id='registerButton' onclick='registerButtonClick()'>Register</button> &nbsp <button id='rulesButton' onclick='rulesButtonClick()'>View Rules</button><br> <form id='registrationTypes' action=''> <input type='radio' name='registration' checked='checked' id='registerASAP'><span id='registrationLabelASAP'>ASAP</span> <input type='radio' name='registration' id='registerSchedule'><span id='registrationLabelScheduled'>Scheduled</span><br> </form>";

var loginOnlyHTML = "<span id='myIdInputLabel'>ID:</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &#8239<input type='text' id='idInputBox' size='10'> &nbsp <button id='logInButton' onclick='loginButtonClick()'>Log In</button><br>";

var loginOrRegisterNoCheckboxes = "<span id='myIdInputLabel'>ID:</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &#8239<input type='text' id='idInputBox' size='10'> &nbsp <button id='logInButton' onclick='loginButtonClick()'>Log In</button><br>-or-<br><span id='myRegisterNameLabel'>Real Name: </span><input type='text' id='nameInputBox' value='' size='10'>  &nbsp <button id='registerButton' onclick='registerButtonClick()'>Register</button> &nbsp <button id='rulesButton' onclick='rulesButtonClick()'>View Rules</button><br>";

var playerDataHTML = "<span id='myIdLabel'>My ID: </span><span id = 'myId'></span>  &nbsp &nbsp <span id='myNameLabel'>My Name: </span><span id = 'myName'></span><br> <span id='myStatusLabel'>My Status: </span><span id = 'myStatus'></span><br> <span id='myOwedLabel'>Bounties Owed: </span><span id = 'myOwed'></span> &nbsp &nbsp <span id='myTotalLabel'>Total: </span><span id = 'myTotal'></span><br> <span id='myTargetLabel'>My Target's Name: </span><span id = 'myTargetsName'></span><br> <span id='gameStatusLabel'>Game Status: </span><span id = 'gameStatus'></span>";

var myTargetDataHTML = "<span id='myTargetsPictureLabel'>" + CONFIRM_KILL_LABEL + "</span><img id='targetPicture' src=''><br>";
var confirmKillHTML = "<span id='targetNameLabel'>" + CONFIRM_KILL_LABEL + "</span><input type='text' id='targetNameBox' value='' size='12'> <br> <button id='confirmKillButton' onclick='confirmAssassinationButtonClick()'>Confirm Assassination</button><br>";
var messageHeaderHTML = "<span id='messageBoardLabel'>--- Message Board (Newest Message on Top) --- </span>"
var statsRegtionHTML = "<span id='statsLabel'>Statistics: </span> <div id = 'statsData'></div>"

var buttonStrip;
var buyBackInButtonHTML = "<button id='buyBackInButton' onclick='buyBackInButtonClick()'>Buy Back In</button>";
var quitGameButtonHTML = "<button id='quitGameButton' onclick='quitGameButtonClick()'>Quit Game</button>";
var rulesButtonHTML = "<button id='rulesButton' onclick='rulesButtonClick()'>View Rules</button>";
var logOffButtonHTML = "<button id='logOutButton' onclick='logOffButtonClick()'>Log Off</button>";

var volunteerButtonHTML = "<button id='volunteerButton' onclick='volunteerButtonClick()'>Volunteer</button>";
var takeABreakButtonHTML = "<button id='takeABreakButton' onclick='takeABreakButtonClick()'>Take a Break</button>";
var returnFromBreakButtonHTML = "<button id='returnFromBreakButton' onclick='returnFromBreakButtonClick()'>Return From Break</button>";

var pictureAreaHTML  = "<span id='playerPictureInputLabel'>Choose your picture using the Browse button, then click Upload</span> <input type='file' id='playerPictureInput'> <br><br> <button id='uploadPictureButton' onclick='uploadPictureButtonClick()'>Upload</button><br> <br>";
var myPictureAreaHTML = "<div id='myPictureLabel'></div> <img id='myPicture' src=''>";
var viewMyPictureButtonHTML = "<button id='viewMyPictureButton' onclick='viewMyPictureButtonClick()'>View My Picture</button>";
var rulesRegionHTML = "<u>Rules: </u><br><br>Here are the rules";

// Global vars to hold player  data  ----------------------
var playerId = "";
var name = "";
var status = PLAYER_STATUS_LOGGED_OFF;  // player status
var loggedIn = false;
var iVolunteered = false;
var myPicApproved = 0;
var myPicFileName = "";

var showMyPic = false;
var myURL = "";
var owed = 0;
var total = 0;
var targetName = "";
var targetId = "";
var nameOfTargetsTarget = "";
var myLinkRef; // reference to my link in the chain
var bombAlerted = 0;  // specific to the player
var showRules = false;
var statsOnlyChange = false;

// data from Game Data on db
var gameStatus = GAME_STATUS_NOT_STARTED;  // default
var morningStartTime;
var nightEndTime;
var minBreakLength = MIN_LENGTH_BREAK_DEFAULT;
var volunteerNeeded = false;
var nextScheduledStart = new Date();
var myRegistrationType; // either asap or Scheduled
var bombDropped = 0;
var statsTotal = 0;
var statsWaiting = 0;
var statsSched = 0;
var statsActive = 0;
var statsTotalKills = 0;
var statsTodaysKills = 0;   // zzz - need to have reset each day
var statsCurrentLeader = 0;

var picResizeTimer;
var picResizeTimer2;

// unsubscribe global vars
var playerUnsubscribe;  // var to store player subscription, needed for later unSubscribe
var linkUnsubscribe;    // var to store link subscription
var gameDataUnsubscribe;  // var to store game data subscription

// create an array of messages for display to message board, grab reference to screen message board
var messages = new Array;
var errors = db.collection("errors");
var events = db.collection("events");

// ------------------------------------------------------------------
// Start of actual code ---------------------------------------------

// Handle Game Data
// get game status and update field,  create a reference to the document
var gameDataRef = db.collection("gameData").doc("gameData");

gameDataRef.get().then(function(doc)
{

  if (doc.exists)
  {

      gameStatus = doc.data().status;
      volunteerNeeded = doc.data().volunteerNeeded;

      // update needed here or nearby - need to create a listener on game status
      // document.getElementById("gameStatus").innerHTML = decodeGameStatus(gameStatus);  // yyy
      console.log("Game status is " + decodeGameStatus(gameStatus));

      // if min break length doesn't exist in db, default to value set here in code
      if (doc.data().minBreakLength == 0)
        minBreakLength = MIN_LENGTH_BREAK_DEFAULT;
      else
        minBreakLength = doc.data().minBreakLength;

      console.log("Min break length is " + minBreakLength);

      // set global vars
      nextScheduledStart = doc.data().nextScheduledStart;
      statsTotal = doc.data().statsTotal;
      statsWaiting = doc.data().statsWaiting;
      statsSched = doc.data().statsSched;
      statsActive = doc.data().statsActive;
      statsTotalKills = doc.data().statsTotalKills;
      statsTodaysKills = doc.data().statsTodaysKills;
      statsCurrentLeader = doc.data().statsCurrentLeader;
      bombDropped = doc.data().bombDropped;
      morningStartTime = doc.data().morningStartTime;
      nightEndTime = doc.data().nightEndTime;
      // gameStart = doc.data().gameStart;

      var tempDate = nextScheduledStart.toDate();

      if (volunteerNeeded == true)
      {
          console.log("Volunteer Needed is true");
          postMessage(MESSAGE_TEXT_VOLUNTEER_NEEDED);
      }

      if (gameStatus == GAME_STATUS_NOT_STARTED)
      {
        console.log("Game not started -------------------");
        postMessage(MESSAGE_TEXT_GAME_START);
      }
      else
      {

      console.log("Game started -------------------");
       postMessage(MESSAGE_TEXT_NEXT_START + tempDate);
      }

      postMessage(MESSAGE_TEXT_WELCOME);

      renderGame(status);

  }  // end if gameData doc exists
  else
  {
    console.log("Game Data Retrieval error, sometimes happens even though no issue");
    postMessage(MESSAGE_TEXT_FATAL_ERROR);
    renderGame(status);
    postError(playerId,ERROR_GAME_DATA_REF_DOESNT_EXIST);
  }
}).catch(function(error) {
  console.log("Game Data Retrieval error, sometimes happens even though no issue");
  //postMessage(MESSAGE_TEXT_FATAL_ERROR);
  postError(SYSTEM_ID,ERROR_GAME_DATA_REF_GET_FAILED);
  //console.log("Error getting gameRefData.get() document:", error);
  });

// --------------------------------------------------------------------------
// subscribe to change in game status **************  Subscribe *************

gameDataUnsubscribe = gameDataRef.onSnapshot(function(doc)
{
    console.log("Within Outer Game - Subscriber on game status change called. Current status is " + decodeGameStatus(gameStatus) + " New status is " + decodeGameStatus(doc.data().status));

    // alert(document.getElementById("myBody").innerHTML);

    if (doc.exists)
    {
        // turn on or off volunteer button - Player needs to be active.
        if ((doc.data().volunteerNeeded == true) && (status == PLAYER_STATUS_ACTIVE))
        {
            // document.getElementById("volunteerButton").style.visibility = "visible";  // yyy
            postMessage(MESSAGE_TEXT_VOLUNTEER_NEEDED);
            volunteerNeeded = true;
        }
        else
        {
          if ((doc.data().volunteerNeeded == false) && (volunteerNeeded == true))
          {
              postMessage(MESSAGE_TEXT_VOLUNTEER_FILLED);
              volunteerNeeded = false;
          }

          // document.getElementById("volunteerButton").style.visibility = "hidden";  // yyy
        }

        console.log("Bomb dropped current = " + bombDropped + "  Bomb dropped from db = " + doc.data().bombDropped);

        var bombJustDropped = false;

        if ((bombDropped == 0) && (doc.data().bombDropped == 1))
        {
            bombJustDropped = true;

            postMessage(MESSAGE_TEXT_BOMB_DROPPED);
            bombDropped = 1;

            // // create a reference to the document
            var playerRef = db.collection("players").doc(playerId);

            playerRef.update({
              bombAlerted: 1
            })
            .then(function() {
              console.log("Players status update success - waiting buy back in.");
            })
            .catch(function(error) {
              console.error("Error player status update to db - waiting buy back in", error);
            });

        }

        // if only a stats change, set that flag and don't call the full render game

        if ((volunteerNeeded == false ) && (bombJustDropped == false))
        {
            if (statsTotal != doc.data().statsTotal)
            {
              statsOnlyChange = true;
              console.log("Total player change stats ------------------------------");
            }

            if (statsWaiting != doc.data().statsWaiting)
            {
              statsOnlyChange = true;
              console.log("Waiting player change stats ------------------------------");
            }

            if (statsSched != doc.data().statsSched)
            {
              statsOnlyChange = true;
              console.log("Scheduled player change stats ------------------------------");
            }

            if (statsActive != doc.data().statsActive)
            {
              statsOnlyChange = true;
              console.log("Active player change stats ------------------------------");
            }

            if (statsTotalKills != doc.data().statsTotalKills)
            {
              statsOnlyChange = true;
              console.log("Total Kills  change stats ------------------------------");
            }

            if (statsTodaysKills != doc.data().statsTodaysKills)
            {
              statsOnlyChange = true;
              console.log("Today kills change stats ------------------------------");
            }

            if (statsCurrentLeader != doc.data().statsCurrentLeader)
            {
              statsOnlyChange = true;
              console.log("Current Leader change stats ------------------------------");
            }
        }


        // renderGame(status);  // --------------------------------------------------------------


        // update global vars  -  thought this should be done earlier, but maybe not? yyy
        nextScheduledStart = doc.data().nextScheduledStart;

        statsTotal = doc.data().statsTotal;
        statsWaiting = doc.data().statsWaiting;
        statsSched = doc.data().statsSched;
        statsActive = doc.data().statsActive;
        statsTotalKills = doc.data().statsTotalKills;
        statsTodaysKills = doc.data().statsTodaysKills;
        statsCurrentLeader = doc.data().statsCurrentLeader;

        // only process change if status changes, check for other data changes above
        if (gameStatus != doc.data().status)
        {
            var oldStatus = gameStatus;

            gameStatus = doc.data().status;

            switch (gameStatus)
            {
              case GAME_STATUS_ACTIVE:


              var tempDate = new Date((nextScheduledStart).toDate());


                  if (oldStatus == GAME_STATUS_NOT_STARTED)
                      postMessage(MESSAGE_TEXT_NEXT_START + tempDate);

                  renderGame(status);
                  break;

              case GAME_STATUS_NOT_STARTED:

                  renderGame(status);
                  break;

              case GAME_STATUS_COMPLETED:

                  console.log("Game status changed to completed. Subscriber called. Status is " + decodeGameStatus(gameStatus));
                  status = PLAYER_STATUS_GAME_OVER;  // player status

                  // change player status on the db only if logged in.

                  if (loggedIn == true)
                  {
                      console.log("Player is logged in.  Updating status on db to player status game over. id is " + playerId);
                      // set my player status to waiting
                      db.collection("players").doc(playerId).update({
                        status: PLAYER_STATUS_GAME_OVER
                      })
                      .then(function() {
                        console.log("Player status set to Game Over.");
                      })
                      .catch(function(error) {
                        console.error("Error Player status set to Game Over.", error);
                      });
                  }

                  postMessage(MESSAGE_TEXT_GAME_COMPLETED);
                  renderGame(PLAYER_STATUS_GAME_OVER);
                  break;

              case GAME_STATUS_PAUSED:

                  postMessage(MESSAGE_TEXT_PAUSED_GAME);
                  console.log("Game status changed to paused. Subscriber called. Status is " + decodeGameStatus(gameStatus));

                  // move myself to queue if I'm active, otherwise ignore, could be on break
                  if (status == PLAYER_STATUS_ACTIVE)
                  {
                      console.log("Paused player status is " + status);
                      // move to waiting
                      status = PLAYER_STATUS_WAITING;

                      // set my player status to waiting
                      db.collection("players").doc(playerId).update({
                        status: PLAYER_STATUS_WAITING
                      })
                      .then(function() {
                        console.log("Player status set to waiting after game pause.");
                      })
                      .catch(function(error) {
                        console.error("Error Player status set to waiting after game pause.", error);
                      });

                      // set waiting queue to just me
                      var tempList = new Array;
                      tempList.push(playerId);

                      db.collection("queues").doc("waiting").set({
                          players: tempList
                        })
                        .then(function() {
                          console.log("db setting waiting queue after pause success");
                        })
                        .catch(function(error) {
                          console.error("db setting waiting queue after pause failed", error);
                        });

                        statsActive = 0;
                        statsWaiting = 1;

                        db.collection("gameData").doc("gameData").update({
                          statsActive: 0,
                          statsWaiting: 1
                        })
                        .then(function() {
                          console.log("Decr stats active by 1");
                        })
                        .catch(function(error) {
                          console.error("Decr stats active failed", error);
                        });


                      renderGame(PLAYER_STATUS_WAITING);

                  } // end if player is active

                  break;

              case GAME_STATUS_OVERNIGHT:

                  postMessage(MESSAGE_TEXT_GAME_STATUS_OVERNIGHT + morningStartTime + " AM");

                  if (loggedIn == true)
                      document.getElementById("gameStatus").innerHTML = decodeGameStatus(gameStatus);

                  break;

              default:

            }
        }
        else
        {
            console.log("Render game called from game subscriber");
            renderGame(status);
        }

    } // end if doc exists
    else
    {
      postMessage(MESSAGE_TEXT_FATAL_ERROR);
      postError(SYSTEM_ID,ERROR_GAME_DATA_REF_DOESNT_EXIST);
      console.log("Game data doc was deleted in subscribe.");
    }
});

// --------- end subscribe to change in game status ***********  Subscribe *************

// ----------------------------------------------------------------

function getScreenData()
{

    var tempId = document.getElementById("idInputBox").value;

    // strip off extra space if necessary
    if (String(tempId)[PLAYER_ID_LENGTH] == " ")
    {
      // splice off starting at the 8th position
      console.log("8th space found, slice off extra characters, use first 8 only.");
      playerId = String(tempId).slice(0,PLAYER_ID_LENGTH);
    }
    else
    {
      console.log("Setting id = " + tempId);
      playerId = tempId;
    }

    name = document.getElementById("nameInputBox").value;

}

// --------------------------------------------------------------
// Register with game

function registerButtonClick()
{

    if (gameStatus == GAME_STATUS_MAINTENANCE)
    {
      alert(GAME_STATUS_MAINTENANCE_TEXT);
      return;
    }

    getScreenData();
    playerId = "";

    console.log("Register button clicked id is " + playerId + "  Name is " + name);

    if (name == "")
    {
      console.log("Blank name entered in name input box.");
      postMessage(MESSAGE_TEXT_INVALID_SCREEN_DATA + "  Name is invalid.");
      renderGame(status);
      return;
    }

    if ((document.getElementById("idInputBox").value != "") && (name != ""))
    {
      alert("You do not need to enter an ID to register.  Only your real name.  Your player ID will be automatically generated after you register and will be entered into the ID field on the screen.");
    }

    // check if game is available to register
    // get game status and update field,  create a reference to the document
    var gameDataRef = db.collection("gameData").doc("gameData");
    gameDataRef.get().then(function(doc)
    {
        if (doc.exists)
        {
            if (doc.data().status == GAME_STATUS_COMPLETED)
            {
              // Can't register, game already over
              console.log("Can't register, game already over.");
              postMessage(MESSAGE_TEXT_CANT_REGISTER_GAME_OVER);
            }
            else  // move forward with registration
            {
                // register player

                    // continue if name entered
                    var tempId = "";
                    var i;

                    // loop through, creating 1 random digit at a time
                    for (i=0; i<PLAYER_ID_LENGTH; i++)
                    {
                      tempId += String(Math.floor(Math.random() * 10));
                    }

                    tempId = String(tempId);
                    console.log("Temp id created is " + tempId + " length is " + tempId.length);

                    // check if this id is already in use - if yes, reject registration request
                    var playerRef = db.collection("players").doc(tempId);

                    playerRef.get().then(function(doc)
                    {
                        console.log("Player ref on temp id executed");

                        if (doc.exists)
                        {
                            // player already exists, don't allow
                            console.log("Error - Player already exists.");
                            postMessage(MESSAGE_TEXT_PLAYER_ALREADY_EXISTS);
                            postError(tempId, MESSAGE_TEXT_PLAYER_ALREADY_EXISTS);
                            return;
                        }

                        console.log("Player doesn't exist.  About to add player to db.  Name is " + name);

                        // Check if game is not started, if yes, then put in Register ASAP, else read choice from radio button
                        if (gameStatus == GAME_STATUS_NOT_STARTED)
                        {
                            console.log("Game status is 'not started'");
                            myRegistrationType = REGISTERED_ASAP;
                        }
                        else
                        {
                            console.log("Game status is not - 'not started'");
                            // get the choice from the screen
                            var myForm = document.getElementById("registrationTypes");

                            if (myForm.registration[0].checked == true)
                            {
                                myRegistrationType = REGISTERED_ASAP;
                            }
                            else
                            {
                                myRegistrationType = REGISTERED_SCHEDULED;
                            }

                        } // end else

                        // add player to the players db --------------------
                        db.collection("players").doc(tempId).set({
                          status: PLAYER_STATUS_REGISTERED,
                          owed: 0,
                          total: 0,
                          paid: 0,
                          pictureName: "",
                          pictureApproved: 0,
                          registrationType: myRegistrationType,
                          scheduledTime: nextScheduledStart,  // this will be ignored if registered ASAP
                          name: name,
                          bombAlerted: 0
                        })
                        .then(function()
                        {
                            console.log("Register player success. ID = " + tempId + " Name is " + name);
                            postMessage(MESSAGE_TEXT_REGISTER_PLAYER);

                            if (myRegistrationType == REGISTERED_ASAP)
                              postEvent(EVENT_TYPE_PLAYER_REGISTER_SUCCESS_ASAP, tempId);
                            else
                              postEvent(EVENT_TYPE_PLAYER_REGISTER_SUCCESS_SCHED, tempId);

                            playerId = tempId;
                            status = PLAYER_STATUS_REGISTERED;
                            renderGame(status);
                        })
                        .catch(function(error) {
                          console.error("Register player failed.", error);
                          postError(tempId, MESSAGE_TEXT_REGISTER_PLAYER_FAILED);
                          // zzzz
                        });

                        // add 1 to total players in game db
                        gameDataRef.get().then(function(doc)
                        {
                            if (doc.exists)
                            {
                                console.log("Game Data exists, increasing total players by 1");
                                // set initial message and data

                                statsTotal = doc.data().statsTotal;

                                // increasing total players by 1  ---------------------------------
                                db.collection("gameData").doc("gameData").update({
                                  statsTotal: statsTotal+1
                                })
                                .then(function() {
                                  console.log("Increased total players by 1");
                                })
                                .catch(function(error) {
                                  console.error("Set game status to Not Started failed", error);
                                });
                            } // error checking,
                        });


                    }); // player ref get, check if player exists

            }   // end else - move forwared with registration

        } // end if doc exists - needs error checking
        else
        {
          postMessage(MESSAGE_TEXT_FATAL_ERROR);
          postError(SYSTEM_ID,ERROR_GAME_DATA_REF_DOESNT_EXIST);
          console.log("Game data doc missing in register button click.");
        }

      }).catch(function(error) {
        console.log("Error getting gameRefData.get() document in registerButtonClick:", error);
        postError(SYSTEM_ID,ERROR_GAME_DATA_REF_GET_FAILED);
    });

}

// --------------------------------------------------------------
// Log into the game
// Allow player to log in even when game is over - check stats

function loginButtonClick()
{
    targetId = "";
    getScreenData();

    if (playerId == "")
    {
        postMessage(MESSAGE_TEXT_INVALID_SCREEN_DATA + " ID is missing.");
        renderGame(status);
        return;
    }

    if ((playerId != "") & (name != ""))
    {
      alert("You do not need your name to log in, only your id is used.");
    }

    // clear out old messages
    messages = new Array;

    // get game status here and display on screen
    var gameDataRef = db.collection("gameData").doc("gameData");

    gameDataRef.get().then(function(doc)
    {
      if (doc.exists)
      {
          gameStatus = doc.data().status;
          console.log("Login clicked, volunteer needed is " + doc.data().volunteerNeeded);
          volunteerNeeded = doc.data().volunteerNeeded;

          if (volunteerNeeded == true)
          {
              console.log("Volunteer Needed is true");
              postMessage(MESSAGE_TEXT_VOLUNTEER_NEEDED);
              renderGame(status);
          }

          console.log("Game status is " + decodeGameStatus(gameStatus));

      }
    });

  // // create a reference to the document
  var playerRef = db.collection("players").doc(playerId);

  playerRef.get().then(function(doc)
  {
    if (doc.exists)
    {
        console.log("Successful log in");

        // set global vars
        status = doc.data().status;
        name = doc.data().name;
        myPicFileName = doc.data().pictureName;
        owed = doc.data().owed;
        total = doc.data().total;
        loggedIn = true;
        bombAlerted = doc.data().bombAlerted;
        myPicApproved = doc.data().pictureApproved;

        if ((bombDropped == 1) && (bombAlerted == 0))
        {
            postMessage(MESSAGE_TEXT_BOMB_DROPPED);

            // update player record to alerted yes
            playerRef.update({
              bombAlerted: 1
            })
            .then(function() {
              console.log("Players bomb alerted success.");
            })
            .catch(function(error) {
              console.error("Error Players bomb alerted success", error);
            });

        }

        loginRegion = "";

        // ****************** Subscribe *****************************************************************************
        // create listener on my player record, change in status is important **************  Subscribe *************
        playerUnsubscribe = playerRef.onSnapshot(function(doc)
        {
              // put workaround back in - removed Workaround code with unsubscribe working - Only handle a call if player name is mine, not an old log in
              if ((doc.exists) && (doc.data().name == name))
              {
                  console.log("Listener snapshot called player doc exists name is: " + doc.data().name + " - My name is " + name + "- current status is " + decodePlayerStatus(status) + " - incoming status is " + decodePlayerStatus(doc.data().status));

                  // update global var in case admin uploaded pic
                  if (myPicFileName != doc.data().pictureName)
                  {
                    console.log("My picture file name changed.");
                    myPicFileName = doc.data().pictureName;
                  }

                  if ((myPicApproved == 0) && (doc.data().pictureApproved == 1))
                  {
                    myPicApproved = 1;
                    postMessage(MESSAGE_TEXT_PIC_APPROVED);
                  }

                  if (status == PLAYER_STATUS_GAME_OVER)    // zzzz
                  {
                    // set player status on screen to Game Over
                    // document.getElementById("myStatus").innerHTML = decodePlayerStatus(status);  // yyy
                  }
                  else  // show the status coming in from subscribe
                  {
                    // document.getElementById("myStatus").innerHTML = decodePlayerStatus(doc.data().status);  // yyy
                  }

                  // update owed if nec
                  if (owed != doc.data().owed)
                  {
                    postMessage(MESSAGE_TEXT_BOUNTY_OWED_CHANGE);
                    owed = doc.data().owed;
                    total = doc.data().total;
                    console.log("Change in owed found - new owed is " + owed );
                  }

                  // Either I was assassinated or I volunteered to go to inactive
                  if ((status == PLAYER_STATUS_ACTIVE) && (doc.data().status == PLAYER_STATUS_INACTIVE))
                  {
                      // assassinated
                      if (iVolunteered == false)
                      {
                        console.log(MESSAGE_TEXT_ASSASSINATED);
                        postMessage(MESSAGE_TEXT_ASSASSINATED);
                      }
                      else  // I did volunteer
                      {
                        console.log(MESSAGE_TEXT_VOLUNTEERED);
                        postMessage(MESSAGE_TEXT_VOLUNTEERED);
                        iVolunteered = false;   // flip back to false
                      }

                      status = PLAYER_STATUS_INACTIVE;
                      // targetId = "";
                      targetName = "";
                      nameOfTargetsTarget = "";

                      // decreasing active players by 1  --------------------------------- yyy - need to test this, double count
                      db.collection("gameData").doc("gameData").update({
                        statsActive: statsActive - 1
                      })
                      .then(function() {
                        console.log("Decr stats active by 1");
                      })
                      .catch(function(error) {
                        console.error("Decr stats active failed", error);
                      });

                      renderGame(PLAYER_STATUS_INACTIVE);

                      return;
                  }


                  // I was moved from waiting or scheduled queue into the game
                  if (((status == PLAYER_STATUS_WAITING) || (status == PLAYER_STATUS_SCHEDULED)) && (doc.data().status == PLAYER_STATUS_ACTIVE))
                  {
                      console.log("Player change subscribe called - going from waiting or scheduled to active. global id is " + playerId);

                      postMessage(MESSAGE_TEXT_ACTIVATED);
                      status = PLAYER_STATUS_ACTIVE;

                      // create a reference to my link document in the chain first
                      var myLinkRef = db.collection("chain").doc(playerId);

                      myLinkRef.get().then(function(doc)
                      {
                        if (doc.exists)
                        {
                            console.log("Moved to active - Right after myLinkRef.get then doc.exists");

                            // ************************************************************************************
                            // subscribe on the new link that was created ****************************************
                            // 1 of 2 places in the code - Player updated to active in listener
                            linkUnsubscribe = myLinkRef.onSnapshot(function(doc)
                            {
                                  // console.log("My link listener called on the way in - within Log In.");
                                  if ((doc.exists) && (Number(doc.id) == Number(playerId)))  // Only process something if doc exists, otherwise, my link was deleted and I don't care, I'm also listening to my status
                                  //if (doc.exists)  // Only process something if doc exists, otherwise, my link was deleted and I don't care, I'm also listening to my status
                                  {
                                      console.log("My link listener called - Doc exists - within waiting to queue change");

                                      targetId = doc.data().target;

                                      renderGame(PLAYER_STATUS_ACTIVE);

                                  }   // end if doc exists
                                  else {
                                    // my link doesn't exist
                                  }
                            }); // end myLinkRef - subscribe

                            // end link subscribe ***********************************************************************

                            console.log("Player change subscribe called - My Link exists - going from waiting to active.");


                        } // end if doc exists on search for my link record
                        else
                        {
                            postMessage(MESSAGE_TEXT_FATAL_ERROR);
                            console.log("My link doc doesn't exist within player data subscribe:", error);
                            // my link record doesn't exist
                        } // end else my link doc doesn't exist

                      }); // end .get on my link
                      //  error checking here

                      return;
                  } // end if - moved from queue into game

                  // Only update for Registered the first time, ignore afterwards
                  if ((doc.data().status == PLAYER_STATUS_REGISTERED) && (status != PLAYER_STATUS_REGISTERED))
                  {
                      console.log("Player is registered - Subscriber called.");
                      postMessage(MESSAGE_TEXT_REGISTER_PLAYER);
                      status = PLAYER_STATUS_REGISTERED;
                      renderGame(PLAYER_STATUS_REGISTERED);
                      return;
                  }

                  // waiting to waiting - ignore
                  if ( (status == PLAYER_STATUS_WAITING) && doc.data().status == PLAYER_STATUS_WAITING)
                  {
                      // ignore, no status change zzz - this is one of those where maybe I can filter on the change type
                      console.log("Maybe zzz this gets called on the initial creation of the listener?");
                      console.log("Render game about to be called, owed is " + owed);
                      renderGame(PLAYER_STATUS_WAITING);
                      return;
                  }

                  // Just waiting
                  if (doc.data().status == PLAYER_STATUS_WAITING)
                  {
                      console.log(MESSAGE_TEXT_WAITING);
                      status = PLAYER_STATUS_WAITING;
                      console.log("Render game about to be called, owed is " + owed);
                      renderGame(PLAYER_STATUS_WAITING);
                      return;
                  }

                  // Only show scheduled message if changed
                  if ((doc.data().status == PLAYER_STATUS_SCHEDULED) && (status != PLAYER_STATUS_SCHEDULED))
                  {
                      status = PLAYER_STATUS_SCHEDULED;
                      renderGame(PLAYER_STATUS_SCHEDULED);
                      return;
                  }

                  console.log("Render game about to be called, owed is " + owed);
                  renderGame(status);

              }  // end doc exists - player subscribe
              else
              {
                console.log("Player subscribe called but no doc - Must have been deleted.");

                if (!doc.exists)
                  logoffUser();

              }

        });  // ******** end subscribe on my player record  *********************************************************

        // Display success in message area
        postMessage(MESSAGE_TEXT_LOGIN);
        postEvent(EVENT_TYPE_PLAYER_LOGIN, MESSAGE_TEXT_LOGIN + playerId);

        // check my status, retrieve my target's name and pic if I am Active
        if (status == PLAYER_STATUS_ACTIVE)
        {

            // create a reference to my link document in the chain first
            myLinkRef = db.collection("chain").doc(playerId);

            myLinkRef.get().then(function(doc)
            {
              if (doc.exists)
              {
                  targetId = doc.data().target;
                  console.log("Doc exists for me - Login - Active status - My target is " + targetId);

                  // ************************* Subscribe ************************************
                  // create Listener to my link reference ******** Subscribe ************************************
                  // 2 of 2 places in code for this subscribe.  This one is Log In and Active.
                  linkUnsubscribe = myLinkRef.onSnapshot(function(doc)
                  {
                    if ((doc.exists) && (Number(doc.id) == Number(playerId)))  // Only process something if doc exists, otherwise, my link was deleted and I don't care, I'm also listening to my status
                    //if (doc.exists)  // Only process something if doc exists, otherwise, my link was deleted and I don't care, I'm also listening to my status
                      {
                          console.log("My link listener called - Doc exists - My id is " + playerId + " Subscriber id is " + doc.id);

                          // check here if I am now in a paused game scenario
                          if (playerId == doc.data().target)
                          {
                              // go into paused mode
                              console.log("Game Paused - Only 1 player active. My Link Subscriber called and my target is me.");
                              postMessage(GAME_STATUS_PAUSED_TEXT);

                              // Set game status to "Paused"  ---------------------------------
                              db.collection("gameData").doc("gameData").update({
                                status: GAME_STATUS_PAUSED
                              })
                              .then(function() {
                                console.log("Set game status to Paused");
                              })
                              .catch(function(error) {
                                console.error("Set game status to Paused failed", error);
                              });

                          }
                          else // continue, not in paused mode
                          {
                              targetId = doc.data().target;

                              renderGame(PLAYER_STATUS_ACTIVE);
                              return;

                          }   // end else, not a pause scenario

                      }   // end if doc.exists - myLink subscriber
                      else {
                        // my link record doesn't exist - must have been deleted
                        console.log("My link doesn't exist - Likely deleted");
                      }

                  }); // end myLinkRef onSnapshot

                  renderGame(PLAYER_STATUS_ACTIVE);

              } // end if doc exists on search for my link record
              else {
                // my link record doesn't exist although I am active - error scenario
              }

            }); // end .get on my link
            //  error checking here

        }   // end if my status was active
        else {
          console.log("Status is not active. It is " + decodePlayerStatus(doc.data().status));
        }

        renderGame(status);

    }   // end if doc exists
    else
    {
      postMessage(MESSAGE_TEXT_LOGIN_FAILED + playerId);
      postError(playerId, MESSAGE_TEXT_LOGIN_FAILED + playerId);
      renderGame(PLAYER_STATUS_LOGGED_OFF);
    }

  }).catch(function(error) {
    console.log("Error getting adminsRef.get() document:", error);
    });


}


// ---------------------------------------------------------

function logOffButtonClick()
{
  logoffUser();
}


// ---------------------------------------------------------

function rulesButtonClick()
{
  postMessage(MESSAGE_TEXT_SEE_RULES_BELOW);
  showRules = true;
  renderGame(status);
}

// ----------------------------------------------------------------------

function logoffUser()
{

    console.log("Logoff called, my id is " + playerId);

    postMessage(MESSAGE_TEXT_LOGOFF);

    //  detach from listeners
    playerUnsubscribe();

    // console.log("Game Data Unsubscribe called.");
    // gameDataUnsubscribe();
    // gameDataUnsubscribe = "";

    if (status == PLAYER_STATUS_ACTIVE)
    {
        console.log("Link unsubscribe called because I was active");
        // detach from chain listener
        linkUnsubscribe();
    }

    // reset global vars - yyy - check newer ones -
    playerId = "";
    name = "";
    status = PLAYER_STATUS_LOGGED_OFF;  // player status
    owed = 0;
    total = 0;
    targetName = "";
    targetId = "";
    nameOfTargetsTarget = "";
    myLinkRef = ""; // reference to my link in the chain
    myPicFileName = "";
    loggedIn = false;
    iVolunteered = false;
    myPicApproved = 0;
    myRegistrationType = "";
    showMyPic = false;
    myURL = "";
    bombAlerted = 0;  // specific to the player
    showRules = false;
    // messages = new Array;

    renderGame(PLAYER_STATUS_LOGGED_OFF);

    console.log("Logoff Called and completed.");

}

// end function logoff User - reused by button and also scenario where admin blanks game while user logged in

// Start confirmAssassination function ----------------------
// moved code out of button listener to allow default action when enter pressed

function confirmAssassinationButtonClick()
{
    if (gameStatus == GAME_STATUS_OVERNIGHT)
    {
      alert(MESSAGE_TEXT_GAME_STATUS_OVERNIGHT + nextScheduledStart);
      return;
    }

    if (gameStatus == GAME_STATUS_MAINTENANCE)
    {
      alert(GAME_STATUS_MAINTENANCE_TEXT);
      return;
    }

    confirmAssassination();
}

// ----------------------------------------------------------------------------------

function confirmAssassination()
{
    // temp helper vars to make code more readable
    // var myTargetsID;
    var myTargetsTargetID;
    var myTargetsTargetsName;

    // only get data I need
    console.log("Confirm assassination called.");

    nameOfTargetsTarget = document.getElementById("targetNameBox").value;

    if (nameOfTargetsTarget == "")
    {
      console.log("Blank name entered in target's target box.");
      postMessage(MESSAGE_TEXT_INVALID_SCREEN_DATA + "  Target's target name invalid.");
      return;
    }

    // create a reference to my link document in the chain first
    var myLinkRef = db.collection("chain").doc(playerId);

    myLinkRef.get().then(function(doc)
    {
      if (doc.exists)
      {
          console.log("Doc exists for me");
          targetId = doc.data().target;

          // create a reference to my target's link
          var myTargetsLinkRef = db.collection("chain").doc(doc.data().target);
          myTargetsLinkRef.get().then(function(doc)
          {
            if (doc.exists) // my targets link doc exists
            {
                // save my target's target id
                myTargetsTargetID = doc.data().target;

               // create a reference to the player db for my target's target
                var myTargetsTargetPlayerRef = db.collection("players").doc(myTargetsTargetID);

                myTargetsTargetPlayerRef.get().then(function(doc)
                {
                  if (doc.exists) // my target's target player doc exists
                  {
                      console.log("Checking names for assassination, " + nameOfTargetsTarget + " and " + doc.data().name);

                      // convert both names to lowercase
                      if (nameOfTargetsTarget.toLowerCase() == (doc.data().name).toLowerCase())
                      {
                        console.log("Names match - good assassination  --------------------------");
                        postMessage(MESSAGE_TEXT_CONFIRM_BOUNTY);
                        postEvent(EVENT_TYPE_PLAYER_CONFIRM_KILL, playerId + " killed " + targetId);

                        // Increase total kills by 1 and todays kills by 1
                        gameDataRef.get().then(function(doc)
                        {
                            if (doc.exists)
                            {
                                console.log("Game Data exists, increasing total kills and todays kills by 1.  Check for new current leader.");
                                // set initial message and data

                                statsTotal = doc.data().statsTotal;
                                statsWaiting = doc.data().statsWaiting;
                                statsSched = doc.data().statsSched;
                                statsActive = doc.data().statsActive;
                                statsTotalKills = doc.data().statsTotalKills;
                                statsTodaysKills = doc.data().statsTodaysKills;
                                statsCurrentLeader = doc.data().statsCurrentLeader;

                                if (total > statsCurrentLeader)
                                {
                                  statsCurrentLeader = total;
                                }

                                // increasing total players by 1  ---------------------------------
                                db.collection("gameData").doc("gameData").update({
                                  statsTotalKills: statsTotalKills + 1,
                                  statsCurrentLeader: statsCurrentLeader,
                                  statsTodaysKills: statsTodaysKills + 1
                                })
                                .then(function() {
                                  console.log("Increased total kills and todays kills by 1");
                                })
                                .catch(function(error) {
                                  console.error("Increased total kills and todays kills failed", error);
                                });
                            } // error checking,
                        });

                        // create a reference to the player document to increment owed
                        var playerRef = db.collection("players").doc(playerId);

                        owed++;
                        total++;

                        // increase owed and total in db
                        playerRef.get().then(function(doc)
                        {
                            if (doc.exists)
                            {
                                // add 1 to owed, add 1 to total
                                db.collection("players").doc(playerId).update({
                                  owed: owed,
                                  total: total
                                })
                                .then(function() {
                                  console.log("Players owed and total update success within assassination.");
                                })
                                .catch(function(error) {
                                  console.error("Error player owed and total update to db within assassination.", error);
                                });
                            } // end if doc exists
                            else {
                              console.log("Player doc doesn't exist in confirm assassination bump owed")
                            }
                        });

                        // update my target - Check waiting queue First
                        // get the waiting queue
                        var queueRef = db.collection("queues").doc("waiting");
                        queueRef.get().then(function(doc)
                        {
                          if (doc.exists) // waiting queue doc exists
                          {
                              console.log("Waiting queue Doc exists");

                              if (doc.data().players != 0)  // bring in waiting players if queue not empty
                              {
                                  var i;
                                  var tempArray = new Array;
                                  tempArray = doc.data().players;   // create local array to shuffle players

                                  for (i=0;i<tempArray.length*50;i++)
                                  {
                                    var index1 = Math.floor((Math.random() * doc.data().players.length));
                                    var index2 = Math.floor((Math.random() * doc.data().players.length));
                                    var tempPlayer = tempArray[index1];
                                    tempArray[index1] = tempArray[index2];
                                    tempArray[index2] = tempPlayer;
                                  }

                                  // assign my target to the first person in the queue
                                  myLinkRef.update({
                                        target: tempArray[0]
                                      })
                                      .then(function() {
                                        console.log("Players update assign my target to first in queue success.");
                                      })
                                      .catch(function(error) {
                                        console.error("Error assign my target to first in queue.", error);
                                  });

                                  // create the rest of the chain and activate players
                                  var i;
                                  for (i=0; i<tempArray.length-1;i++)
                                  {
                                    console.log("Iteration " + i + " within create links loop within assassination")
                                    // create a link in the chain
                                    db.collection("chain").doc(tempArray[i]).set({
                                        target: tempArray[i+1]
                                      })
                                      .then(function() {
                                        console.log("Success writing to chain within assassination");
                                      })
                                      .catch(function(error) {
                                        console.error("Error writing to chain  within assassination", error);
                                      });

                                      // update player status to Active
                                      db.collection("players").doc(tempArray[i]).update({
                                        status: PLAYER_STATUS_ACTIVE
                                      })
                                      .then(function() {
                                        console.log("Players status update success within assassination.");
                                      })
                                      .catch(function(error) {
                                        console.error("Error player status update to db within assassination.", error);
                                      });

                                      // increasing total players by 1  ---------------------------------
                                      db.collection("gameData").doc("gameData").update({
                                        statsActive: ++statsActive
                                      })
                                      .then(function() {
                                        console.log("Increased active players by 1, new statsActive is " + statsActive);
                                      })
                                      .catch(function(error) {
                                        console.error("Increased total kills and todays kills failed", error);
                                      });

                                  } // end for loop

                                  // assign the target of the last player in the queue to original target's target
                                  // create the last link in the chain
                                  db.collection("chain").doc(tempArray[i]).set({
                                      target: myTargetsTargetID
                                    })
                                    .then(function() {
                                      console.log("Success last link within assassination");
                                    })
                                    .catch(function(error) {
                                      console.error("Error last link within assassination", error);
                                    });

                                    // update last player status to Active
                                    db.collection("players").doc(tempArray[i]).update({
                                      status: PLAYER_STATUS_ACTIVE
                                    })
                                    .then(function() {
                                      console.log("Players status update success within assassination.");
                                    })
                                    .catch(function(error) {
                                      console.error("Error player status update to db within assassination.", error);
                                    });

                                    // increasing total players by 1  ---------------------------------
                                    db.collection("gameData").doc("gameData").update({
                                      statsActive: ++statsActive
                                    })
                                    .then(function() {
                                      console.log("Increased active players by 1, new statsActive is " + statsActive);
                                    })
                                    .catch(function(error) {
                                      console.error("Increased total kills and todays kills failed", error);
                                    });

                                    deleteQueue();

                              } // end if there are players in the queue
                              else
                              {  // queue is empty

                                  // check if I'm the only player remaining
                                  if (playerId == myTargetsTargetID)
                                  {
                                    console.log("Game Paused - Only 1 player active.");

                                    // clean up my targets data before handling pause scenario
                                    // delete old target's link
                                    db.collection("chain").doc(targetId).delete().then(function() {
                                        console.log("Document successfully deleted!");
                                    }).catch(function(error) {
                                        console.error("Error removing document: ", error);
                                    });

                                    // change my original target's status to inactive
                                    var myTargetsPlayerRef = db.collection("players").doc(targetId);
                                    myTargetsPlayerRef.update({
                                          status: PLAYER_STATUS_INACTIVE
                                        })
                                        .then(function() {
                                          console.log("Players update success.");
                                        })
                                        .catch(function(error) {
                                          console.error("Error player update to db.", error);
                                        });

                                    // Set game status to "Paused"  ---------------------------------
                                    db.collection("gameData").doc("gameData").update({
                                      status: GAME_STATUS_PAUSED
                                    })
                                    .then(function() {
                                      console.log("Set game status to Paused");
                                    })
                                    .catch(function(error) {
                                      console.error("Set game status to Paused failed", error);
                                    });

                                    statsActive = 0;
                                    statsWaiting = 1;

                                    // update stats
                                    db.collection("gameData").doc("gameData").update({
                                      statsActive: 0,
                                      statsWaiting: 1
                                    })
                                    .then(function() {
                                      console.log("Decr stats active by 1");
                                    })
                                    .catch(function(error) {
                                      console.error("Decr stats active failed", error);
                                    });


                                  } // end if I'm the only player remaining
                                  else
                                  {
                                      // Pickup of my targets target (No players waiting)
                                      myLinkRef.update({
                                            target: myTargetsTargetID
                                          })
                                          .then(function() {
                                            console.log("Players update assign my target to my targets target's id.");
                                          })
                                          .catch(function(error) {
                                            console.error("Error assign my target to my targets target's id.", error);
                                      });

                                  }  // end else check if I'm the only player

                              } // end else queue is empty

                              // delete old target's link
                              db.collection("chain").doc(targetId).delete().then(function() {
                                  console.log("Document successfully deleted!");
                              }).catch(function(error) {
                                  console.error("Error removing document: ", error);
                              });

                              // change my original target's status to inactive
                              var myTargetsPlayerRef = db.collection("players").doc(targetId);
                              myTargetsPlayerRef.update({
                                    status: PLAYER_STATUS_INACTIVE
                                  })
                                  .then(function() {
                                    console.log("Players update success.");
                                  })
                                  .catch(function(error) {
                                    console.error("Error player update to db.", error);
                                  });

                                // increasing total players by 1  ---------------------------------
                                db.collection("gameData").doc("gameData").update({
                                  statsActive: --statsActive,
                                  statsWaiting: 0
                                })
                                .then(function() {
                                  console.log("Increased total kills and todays kills by 1");
                                })
                                .catch(function(error) {
                                  console.error("Increased total kills and todays kills failed", error);
                                });

                                console.log("Success");

                          } // end waiting queue doc exists
                          else {
                            console.log("Waiting queue doc does not exist");
                          }

                        }).catch(function(error) {
                          console.log("Error getting playerRef.get() document:", error);
                        });

                      } // end if name matched
                      else
                      {
                          console.log("Attempted assassination names don't match.");
                          postMessage(MESSAGE_TEXT_BOUNTY_FAILED + nameOfTargetsTarget.toLowerCase());
                          postError(playerId,MESSAGE_TEXT_BOUNTY_FAILED + nameOfTargetsTarget.toLowerCase());
                          renderGame(status);
                      }

                  }   // end if doc exists - my targets player ref
                  else {
                    console.log("My target's player ref doc doesnt exist");
                  }

                }).catch(function(error) {
                  console.log("Error getting playerRef.get() document:", error);
                  });

            } // end if doc exists - myTargetsLinkRef.get()
            else {
              console.log("My myTargetsTargetPlayerRef.get doc doesnt exist");
            }

          }).catch(function(error) {
            console.log("Error getting myTargetsPlayerRef.get() document:", error);
          });

      } // end if mylink doc exists
      else {
        console.log("Mylink Doc doesnt exist - confirmAssassination");
      }

    }).catch(function(error) {
      console.log("Error getting myLinkRef.get() document:", error);
    });

    // document.getElementById("targetNameBox").value = "";

}

// -----------------------------------------------------------------------------------
// start buy back in button listener

function buyBackInButtonClick()
{


  if (gameStatus == GAME_STATUS_MAINTENANCE)
  {
    alert(GAME_STATUS_MAINTENANCE_TEXT);
    return;
  }

  var answer = confirm("Are you sure you want to buy back in?");

  if (answer == false)
    return;

  // assume this button is only enabled if owed is 1 or greater and in Inactive status
  // get player ref
  var playerRef = db.collection("players").doc(playerId);

  playerRef.get().then(function(doc)
  {
    if (doc.exists)
    {
        // check status and owed
        if ((doc.data().status == PLAYER_STATUS_INACTIVE) && (doc.data().owed >= 1))
        {
          // proceed with buy back in process - ok
          // update player status to Waiting, decrement owed in db
          playerRef.update({
            status: PLAYER_STATUS_WAITING,
            owed: Number(doc.data().owed) - 1
          })
          .then(function() {
            console.log("Players status update success - waiting buy back in.");
          })
          .catch(function(error) {
            console.error("Error player status update to db - waiting buy back in", error);
          });

          // add player to waiting queue
          var tempQueue = new Array;
          console.log("About to check DB for waiting queue --------------");

          // get the waiting queue and add player
          var queueRef = db.collection("queues").doc("waiting");
          queueRef.get().then(function(doc)
          {
            if (doc.exists)
            {
                tempQueue = doc.data().players; // save queue locally

                // add new player to local queue
                tempQueue.push(playerId);

                // update db queue with local queue
                db.collection("queues").doc("waiting").set({
                    players: tempQueue
                  })
                  .then(function() {
                    console.log("db setting waiting queue players array success");
                  })
                  .catch(function(error) {
                    console.error("db setting waiting queue players array failed", error);
                  });

                // add 1 to waiting
                db.collection("gameData").doc("gameData").update({
                  statsWaiting: ++statsWaiting
                })
                .then(function() {
                  console.log("Increased total players by 1");
                })
                .catch(function(error) {
                  console.error("Set game status to Not Started failed", error);
                });

            } else
            {
              console.log("Error Doc doesnt exists");
            }
          }).catch(function(error) {
              console.log("Error getting queue document:", error);
              });

          postMessage(MESSAGE_TEXT_BUY_BACK_IN);
          postEvent(EVENT_TYPE_PLAYER_BUY_BACK_IN, playerId);
          status = PLAYER_STATUS_WAITING;
          renderGame(PLAYER_STATUS_WAITING);

        } // end if inactive and owed bounty
        else {
          // can't buy back in
          console.log("Can't buy back in.");
        }
    } // end if player doc exists

  }); // end player ref get - need error checking

}

// ---------------------------------------------------------

function takeABreakButtonClick()
{


  if (gameStatus == GAME_STATUS_MAINTENANCE)
  {
    alert(GAME_STATUS_MAINTENANCE_TEXT);
    return;
  }

  var answer = confirm("Are you sure you want to take a break?  You will be eligible to return in " + (minBreakLength/60) + " hours.");

  if (answer == false)
    return;

  // get player ref
  var playerRef = db.collection("players").doc(playerId);
  // var myTargetsID;  // save this for later use

  console.log("Take a break button pressed.  Player id is " + playerId);

  playerRef.get().then(function(doc)
  {
    if (doc.exists)
    {
        // only take a break if active
        if (doc.data().status == PLAYER_STATUS_ACTIVE)
        {
          status = PLAYER_STATUS_BREAK;

          var now = new Date(Date.now());
          var newTimeStamp = new firebase.firestore.Timestamp.fromDate(now);

          console.log("Take a break - firestore now date is " + newTimeStamp);

          // proceed with taking a break
          // update player status to on break
          playerRef.update({
            status: PLAYER_STATUS_BREAK,
            breakTimeStamp: newTimeStamp
            // breakTime: now()
          })
          .then(function() {
            console.log("Players status update success - break.");
            postMessage(MESSAGE_TEXT_TAKE_BREAK);
            postEvent(EVENT_TYPE_PLAYER_TAKE_BREAK, playerId);
            document.getElementById("messageBoardLabel").innerHTML = "";
            document.getElementById("messageBoardLabel").innerHTML = buildMessageArea();
          })
          .catch(function(error) {
            console.error("Error player status update to db - break", error);
          });

          updateChainToSkipMe();

          // decreasing current players by 1
          gameDataRef.get().then(function(doc)
          {
              if (doc.exists)
              {
                  console.log("Game Data exists, decreasing current players by 1");
                  // set initial message and data

                  statsActive = doc.data().statsActive;

                  // increasing total players by 1  ---------------------------------
                  db.collection("gameData").doc("gameData").update({
                    statsActive: statsActive - 1
                  })
                  .then(function() {
                    console.log("Increased total players by 1");
                  })
                  .catch(function(error) {
                    console.error("Set game status to Not Started failed", error);
                  });
              } // error checking,
          });

          renderGame(PLAYER_STATUS_BREAK);

        } // end if active
        else {
          // Button should only be visible if active status
          console.log("Incorrect Status to Take Break.  Don't believe this is even reachable.");
          postMessage(MESSAGE_TEXT_CANT_TAKE_BREAK);
          postError(playerId,MESSAGE_TEXT_CANT_TAKE_BREAK);
        }
    } // end if player doc exists

  }); // end player ref get - need error checking

}  // end take a break button click


// ---------------------------------------------------------
// begin return from break button

function returnFromBreakButtonClick()
{

  if (gameStatus == GAME_STATUS_MAINTENANCE)
  {
    alert(GAME_STATUS_MAINTENANCE_TEXT);
    return;
  }

  var answer = confirm("Are you sure you want to return from break?");

  if (answer == false)
    return;

  // get player ref
  var playerRef = db.collection("players").doc(playerId);

  console.log("Return break button pressed");
  playerRef.get().then(function(doc)
  {
    if (doc.exists)
    {
        // only return from break if on break
        if (doc.data().status == PLAYER_STATUS_BREAK)
        {
            // only allow if after the waiting period
            var breakTime = new Date((doc.data().breakTimeStamp).toDate());
            var now = new Date(Date.now());
            console.log("Now time is " + now + "  Firestore break time is " + breakTime);

            var minsDiff = ((now - breakTime)/1000)/60; // num mins
            console.log("Mins difference is " + minsDiff);

            if (minsDiff < minBreakLength)
            {
              console.log("Too early to return");
              postMessage(MESSAGE_TEXT_TOO_EARLY_TO_RETURN_FROM_BREAK);
              renderGame(status);
              return;
            }

              status = PLAYER_STATUS_WAITING;

              // proceed with returning break
              // update player status to Waiting
              playerRef.update({
                status: PLAYER_STATUS_WAITING
              })
              .then(function() {
                console.log("Players status update success - return from break.");
                postMessage(MESSAGE_TEXT_RETURN_BREAK);
                postEvent(EVENT_TYPE_PLAYER_RETURN_BREAK, playerId);
                document.getElementById("messageBoardLabel").innerHTML = buildMessageArea();
              })
              .catch(function(error) {
                console.error("Error player status update to db - return from break", error);
              });

              // put myself in the queue
              var tempQueue = new Array;
              var queueRef = db.collection("queues").doc("waiting");
              queueRef.get().then(function(doc)
              {
                if (doc.exists)
                {
                    tempQueue = doc.data().players; // save queue locally

                    // add me onto local queue
                    tempQueue.push(playerId);

                    // update db queue with local queue
                    queueRef.set({
                        players: tempQueue
                      })
                      .then(function() {
                        console.log("db setting waiting queue players array success");
                      })
                      .catch(function(error) {
                        console.error("db setting waiting queue players array failed", error);
                      });

                      // add 1 to waiting
                      db.collection("gameData").doc("gameData").update({
                        statsWaiting: ++statsWaiting
                      })
                      .then(function() {
                        console.log("Increased total players by 1");
                      })
                      .catch(function(error) {
                        console.error("Set game status to Not Started failed", error);
                      });


                }   // end if doc.exists
                else
                {
                  console.log("Error queue Doc doesnt exists");
                }
              }).catch(function(error) {
                  console.log("Error getting queue document:", error);
                  });

              renderGame(PLAYER_STATUS_WAITING);

        }  // end if status is break
        else {
          console.log("Not on break, can't come back from break.");
          postMessage(MESSAGE_TEXT_LOGIN_CANT_RETURN_FROM_BREAK);
          postError(playerId,MESSAGE_TEXT_LOGIN_CANT_RETURN_FROM_BREAK);
        }
    }  // end if player ref doc exists

  }); // end playerRef.get

} //  end returnFromBreakButton click

// ------------------  Pic functions ------------------------

function uploadPictureButtonClick()
{

    if (gameStatus == GAME_STATUS_MAINTENANCE)
    {
      alert(GAME_STATUS_MAINTENANCE_TEXT);
      return;
    }

    var fileChosen = document.getElementById("playerPictureInput");
    var curFiles = fileChosen.files;

    if(curFiles.length === 1)   // only allow one picture
    {
        // get player reference to update picture field
        myPicFileName = curFiles[0].name;   // set global var

        var playerRef = db.collection("players").doc(playerId);
        playerRef.get().then(function(doc)
        {
          if (doc.exists)
          {
                // update player picture name field
                playerRef.update({
                  pictureName: myPicFileName
                })
                .then(function() {
                  console.log("Updated pic name in player db document.");
                  // postMessage(MESSAGE_TEXT_UPLOAD_PIC_SUCCESS);
                })
                .catch(function(error) {
                  console.error("Error player pic name update", error);
                  postMessage(MESSAGE_TEXT_UPLOAD_PIC_FAILED);
                  postError(playerId,MESSAGE_TEXT_UPLOAD_PIC_FAILED);
                  document.getElementById("playerPictureInput").value = "";
                });
          } // end if player doc exists - need error checking

        });

        var fullPath = String(playerId) + "/" + myPicFileName;

        // Create a reference
        var myFileRef = storageRef.child(fullPath);

        // Upload file
        var uploadTask = myFileRef.put(curFiles[0]);  // needs error checking

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion

        uploadTask.on('state_changed', function(snapshot)
        {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

              console.log('Upload is ' + progress + '% done');

              switch (snapshot.state)
              {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                  console.log('Upload is paused');
                  break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                  console.log('Upload is running');
                  break;
              }

          },
          function(error)
          {
              // Handle unsuccessful uploads
              console.log("Unsuccessful file upload");
              postMessage(MESSAGE_TEXT_UPLOAD_PIC_FAILED);
              postError(MESSAGE_TEXT_UPLOAD_PIC_FAILED);

              document.getElementById("playerPictureInput").value = "";

          },
          function()
          {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL)
                {
                  console.log('Success - File available at', downloadURL);
                  postMessage(MESSAGE_TEXT_UPLOAD_PIC_SUCCESS);
                  postEvent(EVENT_TYPE_PLAYER_UPLOAD_PIC, playerId);
                  document.getElementById("playerPictureInput").value = "";
                  renderGame(status);
                });
          });

    } // end if 1 file chosen
    else
    {
      console.log("You must choose 1 file");
      postMessage(MESSAGE_TEXT_MUST_CHOOSE_ONE_FILE);
      postError(playerId,MESSAGE_TEXT_MUST_CHOOSE_ONE_FILE);
      document.getElementById("playerPictureInput").value = "";
    }

}  // end function

// ------------------------------------------------------------------
// Start view my picture button listener

function viewMyPictureButtonClick()
{

      console.log("View my picture clicked, myPicFileName is " + myPicFileName);
      var myPictureRef = storageRef.child(String(playerId) + "/" + myPicFileName);

      myPictureRef.getDownloadURL().then(function(url)
      {
        console.log("getDownloadURL worked");

        showMyPic = true;
        myURL = url;

        renderGame(status);

      }).catch(function(error)
        {
          // decodeFileErrorCode(error,PIC_MISSING_MINE);
          console.log("View my picture failed");
          postMessage(MESSAGE_TEXT_MY_FILE_NOT_FOUND);
          renderGame(status);
          postError(playerId, PIC_MISSING_MINE);
        });  // end catch

} // end view my pic button

// ---------------------------------------------------------

// quitGameButton

function quitGameButtonClick()
{

    if (gameStatus == GAME_STATUS_MAINTENANCE)
    {
      alert(GAME_STATUS_MAINTENANCE_TEXT);
      return;
    }

    console.log("Quit game called");
    // var myTargetsID;  // save this for later use if nec

    // confirm the user really wants to quit

    var answer = confirm("Are you sure you want to quit?");

    if (answer == false)
      return;

    var playerRef = db.collection("players").doc(playerId);
    playerRef.get().then(function(doc)
    {
        if (doc.exists)
        {
            switch (doc.data().status)
            {
              case PLAYER_STATUS_GAME_OVER:

                postMessage(MESSAGE_TEXT_CANT_QUIT_GAME_OVER);
                return;
                break;

              case PLAYER_STATUS_ACTIVE:  // delete chain link, empty queue

                  console.log("In quit game, my status is " + doc.data().status + "  My targets id is " + targetId);

                  updateChainToSkipMe();

                  // decreasing current players by 1
                  gameDataRef.get().then(function(doc)
                  {
                      if (doc.exists)
                      {
                          console.log("Game Data exists, decreasing current players by 1");
                          // set initial message and data

                          statsActive = doc.data().statsActive;

                          // increasing total players by 1  ---------------------------------
                          db.collection("gameData").doc("gameData").update({
                            statsActive: statsActive - 1
                          })
                          .then(function() {
                            console.log("Increased total players by 1");
                          })
                          .catch(function(error) {
                            console.error("Set game status to Not Started failed", error);
                          });
                      } // error checking,
                  });

                  deletePlayer();

                  postMessage(MESSAGE_TEXT_QUIT);
                  postEvent(EVENT_TYPE_PLAYER_QUIT_GAME, playerId);
                  renderGame(PLAYER_STATUS_LOGGED_OFF);

                break;

              case PLAYER_STATUS_WAITING:

                  // delete from queue
                  // First get queue, loop through, create new queue without player
                  var tempQueue = new Array;

                  // get the waiting queue and remove this player
                  var queueRef = db.collection("queues").doc("waiting");
                  queueRef.get().then(function(doc)
                  {
                    if (doc.exists)
                    {
                        var i;

                        console.log("Length of waiting queue going in is " + doc.data().players.length);
                        for (i=0;i<doc.data().players.length;i++)
                        {
                            console.log("Waiting queue id is " + doc.data().players[i] + " My id is " + playerId);
                            if (doc.data().players[i] != playerId)
                            {
                              console.log("Pushing id " + doc.data().players[i] + " onto temp q");
                              tempQueue.push(doc.data().players[i]);
                            }
                        }

                        if (doc.data().players.length == 1) // only me
                        {
                            console.log("Queue only me");
                            // update db queue with local queue
                            db.collection("queues").doc("waiting").update({
                                players: []
                            })
                            .then(function() {
                              console.log("db setting waiting queue players array success");
                            })
                            .catch(function(error) {
                              console.error("db setting waiting queue players array failed", error);
                            });

                        }
                        else
                        {
                            console.log("Queue not only me");
                            // update db queue with local queue
                            db.collection("queues").doc("waiting").set({
                                players: tempQueue
                            })
                            .then(function() {
                              console.log("db setting waiting queue players array success");
                            })
                            .catch(function(error) {
                              console.error("db setting waiting queue players array failed", error);
                            });

                        }

                        deletePlayer();

                        renderGame(PLAYER_STATUS_LOGGED_OFF);

                    }  // end if doc.exists
                    else
                    {
                      console.log("Error Queue Doc doesn't exist - Remove Player");
                    }
                  }).catch(function(error) {
                      console.log("Error getting queue document - Remove Player:", error);
                  });

                break;

              case PLAYER_STATUS_SCHEDULED:

                    // delete from scheduled queue
                    // First get queue, loop through, create new queue without player
                    var tempQueue = new Array;

                    // get the waiting queue and remove this player
                    var queueRef = db.collection("queues").doc("scheduled");
                    queueRef.get().then(function(doc)
                    {
                      if (doc.exists)
                      {
                          var i;

                          console.log("Length of scheduled queue going in is " + doc.data().players.length);
                          for (i=0;i<doc.data().players.length;i++)
                          {
                              console.log("Scheduled queue id is " + doc.data().players[i] + " My id is " + playerId);
                              if (doc.data().players[i] != playerId)
                              {
                                console.log("Pushing id " + doc.data().players[i] + " onto temp q");
                                tempQueue.push(doc.data().players[i]);
                              }
                          }

                          if (doc.data().players.length == 1) // only me
                          {
                              console.log("Queue only me");
                              // update db queue with local queue
                              db.collection("queues").doc("scheduled").update({
                                  players: []
                              })
                              .then(function() {
                                console.log("db setting scheduled queue players array success");
                              })
                              .catch(function(error) {
                                console.error("db setting scheduled queue players array failed", error);
                              });

                          }
                          else
                          {
                              console.log("Queue not only me");
                              // update db queue with local queue
                              db.collection("queues").doc("scheduled").set({
                                  players: tempQueue
                              })
                              .then(function() {
                                console.log("db setting scheduled queue players array success");
                              })
                              .catch(function(error) {
                                console.error("db setting scheduled queue players array failed", error);
                              });

                          }

                          deletePlayer();

                          renderGame(PLAYER_STATUS_LOGGED_OFF);

                      }  // end if doc.exists
                      else
                      {
                        console.log("Error Queue Doc doesn't exist - Remove Player");
                      }
                    }).catch(function(error) {
                        console.log("Error getting queue document - Remove Player:", error);
                    });

                  break;

              case PLAYER_STATUS_INACTIVE:
              case PLAYER_STATUS_BREAK:
              case PLAYER_STATUS_LOGGED_OFF:
              case PLAYER_STATUS_REGISTERED:

                  deletePlayer();
                  renderGame(PLAYER_STATUS_LOGGED_OFF);

                break;

              default:

            }

        }  // end if doc exists, original player ref
        else {
          console.log("Player doesn't exist on Quit Game call");
          postMessage(MESSAGE_TEXT_PLAYER_NOT_FOUND);
        }

    }); // end player ref.get

} // end quit game button click

// ---------------------------------------------------------
// Begin volunteer button

function volunteerButtonClick()
{

    if (gameStatus == GAME_STATUS_OVERNIGHT)
    {
      alert(MESSAGE_TEXT_GAME_STATUS_OVERNIGHT + nextScheduledStart);
      return;
    }


    if (gameStatus == GAME_STATUS_MAINTENANCE)
    {
      alert(GAME_STATUS_MAINTENANCE_TEXT);
      return;
    }

    // var answer = confirm("Are you sure you want to volunteer?");
    //
    // if (answer == false)
    //   return;
    //

    iVolunteered = true;

    // console.log("Got hereeeee");

    // error checking for near simultaneous volunteers - get var from db first and check?  Might help?
    var gameDataRef = db.collection("gameData").doc("gameData");
    gameDataRef.get().then(function(doc)
    {
      if (doc.exists)
      {
        if (doc.data().volunteerNeeded == false)
        {
          document.getElementById("volunteerButton").style.visibility = "hidden";
          postMessage(MESSAGE_TEXT_VOLUNTEER_FILLED);
          renderGame(status);
          return;
        }
        else
        {

          // flip db var to false
          db.collection("gameData").doc("gameData").update({
            volunteerNeeded: false
          })
          .then(function() {
            console.log("Updated game data volunteer needed to false.");
          })
          .catch(function(error) {
            console.error("Error - game data volunteer needed to false.", error);
          });

          volunteerNeeded = false;

          // need new version of this to bring in scheduled queue too - yyy ?
          processVolunteer();

          // get player ref
          var playerRef = db.collection("players").doc(playerId);

          playerRef.get().then(function(doc)
          {
            if (doc.exists)
            {
                // update player status to inactive
                playerRef.update({
                  status: PLAYER_STATUS_INACTIVE,
                  owed: doc.data().owed + 1,
                  total: doc.data().total + 1
                })
                .then(function() {
                  console.log("Players status update success - volunteer inactive.");
                  postEvent(EVENT_TYPE_PLAYER_VOLUNTEER, playerId);
                })
                .catch(function(error) {
                  console.error("Error player status update to db - volunteer inactive", error);
                });

            }   // if doc exists

          });

          // rely on status change for screen redraw

        } // volunteer needed is still true, continue

      } // end if doc.exists
    });

}   // end volunteer button click

// -------------------------------------------------------
// similar to updateChainToSkipMe, however, assume scheduled queue exists

function processVolunteer()
{
    // var myTargetsID;

    console.log("In processVolunteer id is " + playerId);

    var linkRef = db.collection("chain").doc(playerId);
    linkRef.get().then(function(doc)
    {
      console.log("In processVolunteer link ref function called ");

      if (doc.exists) // Player is active, in the chain
      {
          console.log("In processVolunteer Doc exists.");

          targetId = doc.data().target;
          console.log("In processVolunteer, my targets id is " + targetId);

          // Determine which player has me as their target
          var myAssassinsId;

          // query db for the document where target = my id
          var linksRef = db.collection("chain");
          var query = linksRef.where("target", "==", playerId);

          // update chain - get the player that has me as their target
          query.get().then((snapshot) =>
          {
                // console.log("Snapshot size is " + snapshot.size); // + "  Snapshot target data is " + snapshot.docs);
                // console.log("Snapshot docs array 0 element id is " + snapshot.docs[0].id); // + "  Snapshot target data is " + snapshot.docs);
                // only 1 always
                myAssassinsId = snapshot.docs[0].id;

                console.log("In processVolunteer, my assassin's id is " + myAssassinsId);

                // check here for paused scenario -
                // if my target has me as their target, it must be paused
                if (targetId == myAssassinsId)
                {
                  // go into paused mode
                  console.log("Game Paused - Only 1 player active. Found within processVolunteer function.");
                  postMessage(GAME_STATUS_PAUSED_TEXT);

                  // Set game status to "Paused"  ---------------------------------
                  db.collection("gameData").doc("gameData").update({
                    status: GAME_STATUS_PAUSED
                  })
                  .then(function() {
                    console.log("Set game status to Paused");
                  })
                  .catch(function(error) {
                    console.error("Set game status to Paused failed", error);
                  });

                  return;

                }

                // not a pause scenario, Continue
                // Get reference to the assassin that has me as their target
                var myAssassinsLinkRef = db.collection("chain").doc(myAssassinsId);

                // Grab scheduled queue first
                var tempArray = new Array;

                // Check the sched queue before rebuilding chain - get the waiting queue
                var schedQueueRef = db.collection("queues").doc("scheduled");
                schedQueueRef.get().then(function(doc)
                {
                  // console.log("Inside sched queue ref up front");
                  if (doc.exists) // waiting queue doc exists
                  {
                      console.log("Scheduled queue exists");
                      // console.log("Waiting queue Doc exists");
                      if (doc.data().players != 0)  // bring in waiting players if queue not empty
                      {
                          console.log("Scheduled queue exists, players array not zero");
                          tempArray = doc.data().players;   // create local array to shuffle players
                      }

                      // Check the waiting queue before rebuilding chain - get the waiting queue
                      var queueRef = db.collection("queues").doc("waiting");
                      queueRef.get().then(function(doc)
                      {
                        // console.log("Inside queue ref up front");
                        if (doc.exists) // waiting queue doc exists
                        {

                            // console.log("Waiting queue Doc exists");
                            if (doc.data().players != 0)  // bring in waiting players if queue not empty
                            {

                                console.log("Waiting queue exists in process volunteer, players array not blank.");
                                var i;
                                for (i=0; i<doc.data().players.length; i++ )
                                  tempArray.push(doc.data().players[i]);

                            } // if waiting queue players array has players
                            else
                            {
                              console.log("Waiting queue is blank in process volunteer");
                            }

                        } // if doc exists for waiting queue

                        for (i=0;i<tempArray.length*50;i++)
                        {
                          var index1 = Math.floor((Math.random() * doc.data().players.length));
                          var index2 = Math.floor((Math.random() * doc.data().players.length));
                          var tempPlayer = tempArray[index1];
                          tempArray[index1] = tempArray[index2];
                          tempArray[index2] = tempPlayer;
                        }

                        console.log("About to assign my assassin in process volunteer. tempQ size is now " + tempArray.length);
                        // assign the person that had me to the first person in the queue
                        myAssassinsLinkRef.update({
                              target: tempArray[0]
                            })
                            .then(function() {
                              console.log("Players update assign my target to first in queue success.");
                            })
                            .catch(function(error) {
                              console.error("Error assign my target to first in queue.", error);
                            });

                          // create the rest of the chain and activate players
                          var i;
                          for (i=0; i<tempArray.length-1;i++)
                          {
                            console.log("Iteration " + i + " within create links loop within assassination")
                            // create a link in the chain
                            db.collection("chain").doc(tempArray[i]).set({
                                target: tempArray[i+1]
                              })
                              .then(function() {
                                console.log("Success writing to chain within assassination");
                              })
                              .catch(function(error) {
                                console.error("Error writing to chain  within assassination", error);
                              });

                              // update player status to Active
                              db.collection("players").doc(tempArray[i]).update({
                                status: PLAYER_STATUS_ACTIVE
                              })
                              .then(function() {
                                console.log("Players status update success within assassination.");
                              })
                              .catch(function(error) {
                                console.error("Error player status update to db within assassination.", error);
                              });

                              console.log("Before increase stats active by 1, statsActive is " + statsActive);

                              // increasing active players by 1  ---------------------------------
                              db.collection("gameData").doc("gameData").update({
                                statsActive: ++statsActive
                              })
                              .then(function() {
                                console.log("Increased stats active by 1");
                              })
                              .catch(function(error) {
                                console.error("Increased stats active failed", error);
                              });

                          } // end for loop


                          console.log("About to update chain i is " + i + " target id is " + targetId);

                          // assign the target of the last player in the queue to my original target
                          // create the last link in the chain
                          db.collection("chain").doc(tempArray[i]).set({
                              target: targetId
                            })
                            .then(function() {
                              console.log("Success last link within assassination");
                            })
                            .catch(function(error) {
                              console.error("Error last link within assassination", error);
                            });

                            // update last player status to Active
                            db.collection("players").doc(tempArray[i]).update({
                              status: PLAYER_STATUS_ACTIVE
                            })
                            .then(function() {
                              console.log("Players status update success within assassination.");
                            })
                            .catch(function(error) {
                              console.error("Error player status update to db within assassination.", error);
                            });

                            // increasing active players by 1  ---------------------------------
                            db.collection("gameData").doc("gameData").update({
                              statsActive: ++statsActive
                            })
                            .then(function() {
                              console.log("Increased stats active by 1");
                            })
                            .catch(function(error) {
                              console.error("Increased stats active failed", error);
                            });


                            deleteQueue();
                            deleteSchedQueue();

                            // delete my link - Maybe move this down
                            linkRef.delete().then(function() {
                                console.log("my link take a break Document successfully deleted!");
                            }).catch(function(error) {

                                console.error("my link take a break Error removing document: ", error);
                            });

                            statsWaiting = 0;
                            statsSched = 0;

                            // ---------------------------------
                            db.collection("gameData").doc("gameData").update({
                              statsWaiting: 0,
                              statsSched: 0
                            })
                            .then(function() {
                              console.log("Increased stats active by 1");
                            })
                            .catch(function(error) {
                              console.error("Increased stats active failed", error);
                            });

                      }); // end queueRef.get()
                  } // end if sched queue doc exists

                });

          }); // end query.get for who has me as their target

      }   // end if doc exists
      else {
        console.log("In processVolunteer - My link in chain doesn't exist - updateChainToSkipMe.");
        postMessage(MESSAGE_TEXT_CANT_VOLUNTEER);

      }
    });   // link ref.get()

} // end function updateChainToSkipMe


// ---------------------------------------------------------
// Intercept Enter Key - Confirm assassination if text entered

document.onkeydown = checkKey;

function checkKey(evt)
{
  // this line of code was needed due to old browsers, possibly firefox, Nathan had an issue
  evt = evt || window.event;

  switch (evt.keyCode)
  {
      case ENTER_KEY:

          console.log("Made it to switch, status is " + status);

            switch (Number(status))
            {
              case PLAYER_STATUS_ACTIVE :

                  // check if Target's target name field is filled
                  if (document.getElementById("targetNameBox").value != "")
                  {
                    confirmAssassination();
                  }
                  else
                  {
                    postMessage(MESSAGE_TEXT_INVALID_SCREEN_DATA);
                    return;
                  }

                break;

              case PLAYER_STATUS_LOGGED_OFF :

                  console.log("Player logged off");

                  loginButtonClick();

                  break;

              case PLAYER_STATUS_REGISTERED :

                      console.log("Player registered");

                      if (loggedIn == false)
                        loginButtonClick();

                      break;

                default:

            }

          break;

      default:

  } // end switch

} // end function checkKey interceptor

// ---------------------------------------------------------
// start function delete waiting queue

function deleteQueue()
{
  db.collection("queues").doc("waiting").update({
    players: []
  })
  .then(function() {
    console.log("Queue delete success within assassination.");
  })
  .catch(function(error) {
    console.error("Error queue delete within assassination.", error);
  });

}

// ---------------------------------------------------------

function deleteSchedQueue()
{
  db.collection("queues").doc("scheduled").update({
    players: []
  })
  .then(function() {
    console.log("Queue sched delete success within assassination.");
  })
  .catch(function(error) {
    console.error("Error sched queue delete within assassination.", error);
  });

}

// --------------------------------------------
// Repeatable helper functions
// updateChainToSkipMe - called when player goes on break or quits game

function updateChainToSkipMe()
{
    // var myTargetsID;

    console.log("In updateChainToSkipMe id is " + playerId);

    var linkRef = db.collection("chain").doc(playerId);

    linkRef.get().then(function(doc)
    {
      console.log("In updateChainToSkipMe link ref function called ");

      if (doc.exists) // Player is active, in the chain
      {
          console.log("In updateChainToSkipMe Doc exists.");

          targetId = doc.data().target;
          console.log("In updateChainToSkipMe, my targets id is " + targetId);

          // Determine which player has me as their target
          var myAssassinsId;

          // query db for the document where target = my id
          var linksRef = db.collection("chain");
          var query = linksRef.where("target", "==", playerId);

          // update chain
          query.get().then((snapshot) =>
          {
                console.log("I found the link of my assassin");
                // only 1 always
                myAssassinsId = snapshot.docs[0].id;

                console.log("In updateChainToSkipMe, my assassin's id is " + myAssassinsId);

                // check here for paused scenario -
                // if my target has me as their target, it must be paused
                if (targetId == myAssassinsId)
                {
                  // go into paused mode
                  console.log("Game Paused - Only 1 player active. Found within updateChainToSkipMe function.");
                  postMessage(GAME_STATUS_PAUSED_TEXT);

                  // Set game status to "Paused"  ---------------------------------
                  db.collection("gameData").doc("gameData").update({
                    status: GAME_STATUS_PAUSED
                  })
                  .then(function() {
                    console.log("Set game status to Paused");
                  })
                  .catch(function(error) {
                    console.error("Set game status to Paused failed", error);
                  });

                  return;

                }

                // not a pause scenario, Continue
                // Get reference to the assassin that has me as their target
                var myAssassinsLinkRef = db.collection("chain").doc(myAssassinsId);

                // Check the waiting queue before rebuilding chain - get the waiting queue
                var queueRef = db.collection("queues").doc("waiting");
                queueRef.get().then(function(doc)
                {
                  // console.log("Inside queue ref up front");
                  if (doc.exists) // waiting queue doc exists
                  {

                      // zzzz stats issue here - not decrementing waiting queue???

                      // console.log("Waiting queue Doc exists");
                      if (doc.data().players != 0)  // bring in waiting players if queue not empty
                      {
                          var i;
                          var tempArray = new Array;
                          tempArray = doc.data().players;   // create local array to shuffle players

                          for (i=0;i<tempArray.length*50;i++)
                          {
                            var index1 = Math.floor((Math.random() * doc.data().players.length));
                            var index2 = Math.floor((Math.random() * doc.data().players.length));
                            var tempPlayer = tempArray[index1];
                            tempArray[index1] = tempArray[index2];
                            tempArray[index2] = tempPlayer;
                          }

                          // assign the person that had me to the first person in the queue
                          myAssassinsLinkRef.update({
                                target: tempArray[0]
                              })
                              .then(function() {
                                console.log("Players update assign my target to first in queue success.");
                              })
                              .catch(function(error) {
                                console.error("Error assign my target to first in queue.", error);
                          });

                          // create the rest of the chain and activate players
                          var i;
                          for (i=0; i<tempArray.length-1;i++)
                          {
                            console.log("Iteration " + i + " within create links loop within updateChainToSkipMe")
                            // create a link in the chain
                            db.collection("chain").doc(tempArray[i]).set({
                                target: tempArray[i+1]
                              })
                              .then(function() {
                                console.log("Success writing to chain within updateChainToSkipMe");
                              })
                              .catch(function(error) {
                                console.error("Error writing to chain  within updateChainToSkipMe", error);
                              });

                              // update player status to Active
                              db.collection("players").doc(tempArray[i]).update({
                                status: PLAYER_STATUS_ACTIVE
                              })
                              .then(function() {
                                console.log("Players status update success within updateChainToSkipMe.");
                              })
                              .catch(function(error) {
                                console.error("Error player status update to db within updateChainToSkipMe.", error);
                              });

                              // increasing total players by 1  ---------------------------------
                              db.collection("gameData").doc("gameData").update({
                                statsActive: ++statsActive
                              })
                              .then(function() {
                                console.log("Increased active players by 1, new statsActive is " + statsActive);
                              })
                              .catch(function(error) {
                                console.error("Increased total kills and todays kills failed", error);
                              });


                          } // end for loop

                          // assign the target of the last player in the queue to my original target
                          // create the last link in the chain
                          db.collection("chain").doc(tempArray[i]).set({
                              target: targetId
                            })
                            .then(function() {
                              console.log("Success last link within updateChainToSkipMe");
                            })
                            .catch(function(error) {
                              console.error("Error last link within updateChainToSkipMe", error);
                            });

                            // update last player status to Active
                            db.collection("players").doc(tempArray[i]).update({
                              status: PLAYER_STATUS_ACTIVE
                            })
                            .then(function() {
                              console.log("Players status update success within updateChainToSkipMe.");
                            })
                            .catch(function(error) {
                              console.error("Error player status update to db within updateChainToSkipMe.", error);
                            });

                            // increasing total players by 1  ---------------------------------
                            db.collection("gameData").doc("gameData").update({
                              statsActive: ++statsActive,
                              statsWaiting: 0
                            })
                            .then(function() {
                              console.log("Increased active players by 1, new statsActive is " + statsActive);
                            })
                            .catch(function(error) {
                              console.error("Increased total kills and todays kills failed", error);
                            });


                            deleteQueue();

                            // delete my link - Maybe move this down
                            linkRef.delete().then(function() {
                                console.log("my link take a break Document successfully deleted!");
                            }).catch(function(error) {

                                console.error("my link take a break Error removing document: ", error);
                            });

                      } // end if there are players in the queue
                      else
                      {  // queue is empty
                          console.log("Queue is empty");

                          // Assign the person that had me to my target (No players waiting)
                          myAssassinsLinkRef.update({
                                target: targetId
                              })
                              .then(function() {
                                console.log("Players assign the person that had me to my target.");
                              })
                              .catch(function(error) {
                                console.error("Error assign my target to my targets target's id.", error);
                          });

                          // delete my link
                          linkRef.delete().then(function() {
                              console.log("my link take a break Document successfully deleted!");
                          }).catch(function(error) {

                              console.error("my link take a break Error removing document: ", error);
                          });

                      }   // end else - queue was empty

                  } // end if queue doc exists
                  else {
                    console.log("Queue doc doesn't exist in take a break");
                  }

                });

          }); // need error checking


      }   // end if doc exists
      else {
        console.log("In updateChainToSkipMe - My link in chain doesn't exist - updateChainToSkipMe.");
      }
    }).catch(function(error) {
      console.log("updateChainToSkipMe link ref error getting looking for my link in the chain");
      //postMessage(MESSAGE_TEXT_FATAL_ERROR);
      postError(SYSTEM_ID,ERROR_GAME_DATA_REF_DOESNT_EXIST);
      //console.log("Error getting gameRefData.get() document:", error);
      });

} // end function updateChainToSkipMe

// ---------------------------------------

function deletePlayer()
{
  // delete player last ------------------------------------
  db.collection("players").doc(playerId).delete().then(function()
  {
    console.log("Player " + playerId + " successfully deleted!");
  }).catch(function(error)
  {
        console.error("Error removing player " + playerId + " Error: ", error);
  });

}

// ---------------------------------------------------------

function postEvent(inId, inMessage)
{
    console.log("Event - Id = " + inId + "  Message = " + inMessage);

    // write error to db with meaningful text
    events.add({
      id: inId,
      messageText: inMessage,
      timeStamp: new firebase.firestore.Timestamp.fromDate(new Date(Date.now()))
    })
    .then(function(docRef) {
        console.log("Event Document written with event ID: ", inId);
    })
    .catch(function(error) {
        console.error("Event adding Error: ", error);
    });

}

// ---------------------------------------

function postError(inId, inMessage)
{
    console.log("Error - Id = " + inId + "  Message = " + inMessage);

    // write error to db with meaningful text
    errors.add({
      id: inId,
      messageText: inMessage,
      timeStamp: new firebase.firestore.Timestamp.fromDate(new Date(Date.now()))
    })
    .then(function(docRef) {
        console.log("Error Document written with player ID: ", inId);
    })
    .catch(function(error) {
        console.error("Error adding Error document: ", error);
    });

}

// ------------------------------------------

function postMessage(inMessage)
{
    console.log("Post Message called, inMessage is " + inMessage + "  Total current messages before this one is " + messages.length);


    var i;
    var wentOverLimit = false;
    // document.getElementById("messageBoard").innerHTML = "";

    if (messages.length == 0)
    {
        console.log("Message length 0");
        messages.push([inMessage, new Date(Date.now())]);
        return;
    }
    else
    {

        console.log("Message length not 0");

        // reject message if fast succession of repeats

        var now = new Date(Date.now());
        var secDiff = ((now - messages[0][1])/1000); // num secs

        // alert("Sec diff between now and last message is " + secDiff );
        console.log("-----------------------Sec diff between now and last message is " + secDiff );

        if (inMessage == messages[0][0])
            console.log("Last 2 messages are the same ----------- ");


        if ((secDiff < 1 ) && (inMessage == messages[0][0]))
        {
          console.log("Rejecting duplicate message  -----------------------");
          return;
        }

        // determine whether to push new message on or just shift
        if (messages.length < SCROLLING_MESSAGE_LENGTH)
        {

          // console.log("Message length less than scrolling limit");
            // console.log("Do I get here 1");
            messages.push(messages[messages.length-1]);

            for (i=0; i<messages.length-2; i++)
            {

                console.log("Shifting a message down early");
                messages[messages.length-2-i] = messages[messages.length-3-i];

                // messages[messages.length-2-i][1] = messages[messages.length-3-i][1];
            }

            // console.log("Message length should now be 2 " + messages.length + "   messages is " + messages);

        }
        else
        {

              // console.log("Message at limit length.  Shift them down 1");
              wentOverLimit = true;
            // shift all messages down 1, # of iterations is one less than the length
            for (i=0; i<messages.length-1; i++)
            {
              // console.log("Shifting a message down late");
              messages[messages.length-1-i] = messages[messages.length-2-i];
              // messages[messages.length-1-i][1] = messages[messages.length-2-i][1];
            }

        }

        console.log("setting last message");
        messages[0] = [inMessage, new Date(Date.now())];

        // alert("End of function messages is " + messages);

        if (wentOverLimit == true)
        {
          console.log("Slicing the messages array");
          messages.length = SCROLLING_MESSAGE_LENGTH;
        }

    }

} // end function postMessage


// -----------------------------------------

function buildMessageArea()
{
      var tempMessage = "";
      var i;


      // alert("In build messages area messages len is " + messages.length + "  messages is " + messages);

      if (messages.length > SCROLLING_MESSAGE_LENGTH)
        messages.length = SCROLLING_MESSAGE_LENGTH;

      // console.log("In build messages area messages len is " + messages.length);

      for (i=0; i<messages.length - 1; i++)
      {
          tempMessage += messages[i][0] + "<br>";
      }

      tempMessage += messages[i][0];

      return messageHeaderHTML + "<br>" + tempMessage;

}

// ------------------------------

function rebuildMessageAreaOnly()
{
    document.getElementById("messageBoardLabel").innerHTML = buildMessageArea();

}


// ---------------------------------------------------------------
// start function decodePlayerStatus

function decodePlayerStatus(statusPassedIn)
{
  // console.log("decode called - status passed in = " + statusPassedIn);

  switch (Number(statusPassedIn)) {

    case PLAYER_STATUS_LOGGED_OFF:
      return PLAYER_STATUS_LOGGED_OFF_TEXT;
      break;

    case PLAYER_STATUS_WAITING:
      return PLAYER_STATUS_WAITING_TEXT;
      break;

    case PLAYER_STATUS_SCHEDULED:
        return PLAYER_STATUS_SCHEDULED_TEXT;
        break;

    case PLAYER_STATUS_ACTIVE:
      return PLAYER_STATUS_ACTIVE_TEXT;
      break;

    case PLAYER_STATUS_INACTIVE:
      return PLAYER_STATUS_INACTIVE_TEXT;
      break;

    case PLAYER_STATUS_BREAK:
      return PLAYER_STATUS_BREAK_TEXT;
            break;

    case PLAYER_STATUS_REGISTERED:
      return PLAYER_STATUS_REGISTERED_TEXT;
            break;

    case PLAYER_STATUS_GAME_OVER:
      return PLAYER_STATUS_GAME_OVER_TEXT;
            break;

    default:
      console.log("decode called - default unknown returned.  Status passed in was " + statusPassedIn);
      return PLAYER_STATUS_UNKNOWN_TEXT + statusPassedIn ;

  }

}

// ---------------------------------------------------------------
// start function decodeGameStatus

function decodeGameStatus(statusPassedIn)
{
  switch (statusPassedIn)
  {
    case GAME_STATUS_NOT_STARTED:
      return GAME_STATUS_NOT_STARTED_TEXT;
      break;

    case GAME_STATUS_ACTIVE:
      return GAME_STATUS_ACTIVE_TEXT;
      break;

    case GAME_STATUS_COMPLETED:
      return GAME_STATUS_COMPLETED_TEXT;
      break;

    case GAME_STATUS_PAUSED:
      return GAME_STATUS_PAUSED_TEXT;
      break;

    case GAME_STATUS_COMPLETED:
      return GAME_STATUS_COMPLETED_TEXT;
      break;

    case GAME_STATUS_OVERNIGHT:
        return GAME_STATUS_OVERNIGHT_TEXT;
        break;

    case GAME_STATUS_MAINTENANCE:
        return GAME_STATUS_MAINTENANCE_TEXT;
        break;

    default:
      return GAME_STATUS_UNKNOWN_TEXT;

  } // end switch

} // end function

// ---------------------------------------------------------------
// decode file errors

function decodeFileErrorCode(error, picMissing)
{
  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  console.log("Decode File Error Code called.");
  switch (error.code)
  {
    case 'storage/object-not-found':        // File doesn't exist


      if (picMissing == PIC_MISSING_TARGET)
      {
        // console.log("Got here - why?");
        if ((targetId != "") && (gameStatus != GAME_STATUS_PAUSED) && (gameStatus != GAME_STATUS_COMPLETED))
        {
          document.getElementById("myTargetsPictureLabel").innerHTML = MY_TARGETS_PICTURE_LABEL_PART1 + targetName + MY_TARGETS_PICTURE_LABEL_PART2 + " File Not Found.";
          document.getElementById("targetPicture").src = "";

          // console.log("File not found errror  ------------");
          // postMessage(MESSAGE_TEXT_TARGET_FILE_NOT_FOUND);

        }

        // document.getElementById("messageBoardLabel").innerHTML = "";
        //document.getElementById("messageBoardLabel").innerHTML = buildMessageArea();
      }
      else
        document.getElementById("myPictureLabel").innerHTML = MY_PICTURE_LABEL + " File not found.";
      break;

    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      console.log("No permissions.");
      break;

    case 'storage/canceled':
      console.log("Storage cancelled.");
      // User canceled the upload
      break;

    case 'storage/unknown':
      console.log("Unknown error");
      // Unknown error occurred, inspect the server response
      break;

  }

}  // decodeFileErrorCode

// ---------------------------------------------------------

function buildPlayerDataRegion()
{

    return "<span id='myIdLabel'>My ID: </span><span id = 'myId'>"
            + playerId + "</span>  &nbsp &nbsp <span id='myNameLabel'>My Name: </span><span id = 'myName'>"
            + name + "</span><br> <span id='myStatusLabel'>My Status: </span><span id = 'myStatus'>" + decodePlayerStatus(status) +  "</span><br> <span id='myOwedLabel'>Bounties Owed: </span><span id = 'myOwed'>" + owed + "</span> &nbsp &nbsp <span id='myTotalLabel'>Total: </span><span id = 'myTotal'>" + total + "</span><br> <span id='myTargetLabel'>My Target's Name: </span><span id = 'myTargetsName'>" + targetName +  "</span><br> <span id='gameStatusLabel'>Game Status: </span><span id = 'gameStatus'>" + decodeGameStatus(gameStatus) + "</span>";

}

// ---------------------------------------------------------

function buildPictureAreaRegion()
{
      if ((status == PLAYER_STATUS_REGISTERED) && (loggedIn == true) && (myPicApproved == 0))
      {
          return pictureAreaHTML;
      }
      else {
        return "";
      }

}

// ---------------------------------------------------------

function buildStatsRegion()
{

  console.log("Build stats Region called");

  return "<div id='statsLabel'><u>Statistics:</u></div></span> <br> <span id='statsActiveLabel'>Active Players: </span><span id = 'statsActive'>" + statsActive + "</span><br>" +
         "<span id='statsWaitingLabel'>Waiting For Assignment: </span><span id = 'statsWaiting'>" + statsWaiting + "</span><br>" +
         "<span id='statsSchedLabel'>Scheduled: </span><span id = 'statsSched'>" + statsSched + "</span><br>" +
         "<span id='statsTotalLabel'>Total Players: </span><span id = 'statsTotal'>" + statsTotal + "</span><br>" +
         "<span id='statsKillsLabel'>Total Kills: </span><span id = 'statsTotalKills'>" + statsTotalKills + "</span><br>" +
         "<span id='statsTodaysLabel'>Today's Kills: </span><span id = 'statsTodaysKills'>" + statsTodaysKills + "</span><br>" +
         "<span id='statsLeaderLabel'>Most Kills: </span><span id = 'statsCurrentLeader'>" + statsCurrentLeader;
}

// ------------------------------------------------

function checkToResizeMyPicture()
{

    console.log("checkToResizeMyPicture timer called ------------------------");
    // check to resize target picture

    if (status == PLAYER_STATUS_ACTIVE)
    {
        var targetImage = document.getElementById('myPicture');

        var tempWidth = targetImage.clientWidth;
        var tempHeight = targetImage.clientHeight;

        var factor1 = tempWidth / PICTURE_SIZE_LOWER_SIZE;
        var factor2 = 1/factor1;

        // if ((tempWidth < PICTURE_SIZE_LOWER_SIZE) || (tempWidth > PICTURE_SIZE_UPPER_SIZE))
        if (  (tempWidth != 0) && ((tempWidth < PICTURE_SIZE_LOWER_SIZE) || (tempWidth > PICTURE_SIZE_UPPER_SIZE)))
        {
          targetImage.width = tempWidth * factor2;
          targetImage.height = tempHeight * factor2;
        }
        else
        {
          picResizeTimer = setTimeout(checkToResizeMyPicture, 100);
        }
    }

}

// ------------------------------------------------

function checkToResizeTargetPicture()
{

          console.log("checkToResizeTargetPicture timer called ------------------------");
          // check to resize target picture

          if (status == PLAYER_STATUS_ACTIVE)
          {
              var targetImage = document.getElementById('targetPicture');

              var tempWidth = targetImage.clientWidth;
              var tempHeight = targetImage.clientHeight;

              var factor1 = tempWidth / PICTURE_SIZE_LOWER_SIZE;
              var factor2 = 1/factor1;

              // if ((tempWidth < PICTURE_SIZE_LOWER_SIZE) || (tempWidth > PICTURE_SIZE_UPPER_SIZE))
              if (  (tempWidth != 0) && ((tempWidth < PICTURE_SIZE_LOWER_SIZE) || (tempWidth > PICTURE_SIZE_UPPER_SIZE)))
              {
                targetImage.width = tempWidth * factor2;
                targetImage.height = tempHeight * factor2;
              }
              else
              {
                picResizeTimer = setTimeout(checkToResizeTargetPicture, 100);
              }
          }

}

// --------------------------------------

function showMyPicIfNecessary()
{
        if (showMyPic == true)
        {
            document.getElementById("myPicture").style.visibility = "hidden";

            document.getElementById("myPictureLabel").innerHTML = "<br>" + MY_PICTURE_LABEL + "<br><br>";
            document.getElementById("myPicture").src = myURL;

            // kick off timer process to check picture size
            picResizeTimer2 = setTimeout(checkToResizeMyPicture, 100);   // run timed function in .1 seconds

            document.getElementById("myPicture").style.visibility = "visible";

        }

}


// ---------------------------------------------------------
// Render the ui based on the players status

function renderGame(myStatus)
{
  console.log("----- Render Game called at the top status is " + decodePlayerStatus(myStatus));

  switch (Number(myStatus))
  {
    case PLAYER_STATUS_LOGGED_OFF:

        var tempRulesRegionHTML = (showRules == true) ? RULES_TEXT : "";

        var tempLoginRegion;

        if (gameStatus == GAME_STATUS_NOT_STARTED)
        {
            tempLoginRegion = loginOrRegisterNoCheckboxes;
        }
        else
        {
            tempLoginRegion = loginOrRegisterHTML;
        }

        myBody.innerHTML = headerHTML + "<br>" + tempLoginRegion + "<br>" + buildMessageArea() + "<br><br>" + buildStatsRegion() + "<br><br>" + tempRulesRegionHTML;
        showRules = false;

        break;

    case PLAYER_STATUS_WAITING:

        postMessage(MESSAGE_TEXT_WAITING);

        var tempBody;
        var tempButtonBar;
        var tempViewMyPicArea = "";
        var tempRulesRegionHTML = (showRules == true) ? RULES_TEXT : "";

        buttonStripRegion = "<br> " + logOffButtonHTML + " &nbsp " + viewMyPictureButtonHTML + " &nbsp " + rulesButtonHTML + " &nbsp " + quitGameButtonHTML;

        if (showMyPic == true)
        {
            tempViewMyPicArea = myPictureAreaHTML;
        }

        tempBody = headerHTML + "<br>" + buildPlayerDataRegion() + "<br><br>" + messageHeaderHTML + " <br> " + buttonStripRegion + "<br>" + buildPictureAreaRegion() + tempViewMyPicArea + "<br><br>" + buildStatsRegion() + "<br><br>" + tempRulesRegionHTML;

        myBody.innerHTML = tempBody;

        document.getElementById("messageBoardLabel").innerHTML = buildMessageArea();

        showMyPicIfNecessary();

        // yyyy

        showRules = false;

        break;

    case PLAYER_STATUS_SCHEDULED:

        postMessage(MESSAGE_TEXT_SCHEDULED);

        var tempBody;
        var tempViewMyPicArea = "";
        var tempRulesRegionHTML = (showRules == true) ? RULES_TEXT : "";

        buttonStripRegion = "<br> " + logOffButtonHTML + " &nbsp " + viewMyPictureButtonHTML + " &nbsp " + rulesButtonHTML + " &nbsp " + quitGameButtonHTML;

        if (showMyPic == true)
        {
            tempViewMyPicArea = myPictureAreaHTML;
        }

        tempBody = headerHTML + "<br>" + buildPlayerDataRegion() + "<br><br>" + messageHeaderHTML + " <br> " + buttonStripRegion + "<br>" + buildPictureAreaRegion() + tempViewMyPicArea + "<br><br>" + buildStatsRegion() + "<br><br>" + tempRulesRegionHTML;

        myBody.innerHTML = tempBody;

        document.getElementById("messageBoardLabel").innerHTML = buildMessageArea();

        showMyPicIfNecessary();

        showRules = false;

        break;

    case PLAYER_STATUS_ACTIVE:

              if (statsOnlyChange == true)
              {
                  statsOnlyChange = false;
                  console.log("Stats only change =====================================")

                  // alert(document.getElementById("myBody").innerHTML);

                  document.getElementById("statsWaiting").innerHTML = statsWaiting;
                  document.getElementById("statsCurrentLeader").innerHTML = statsCurrentLeader;
                  document.getElementById("statsTodaysKills").innerHTML = statsTodaysKills;
                  document.getElementById("statsTotalKills").innerHTML = statsTotalKills;
                  document.getElementById("statsTotal").innerHTML = statsTotal;
                  document.getElementById("statsSched").innerHTML = statsSched;
                  document.getElementById("statsActive").innerHTML = statsActive;

                  return;
              }

              var tempBody;
              var tempViewMyPicArea = "";
              var tempRulesRegionHTML = (showRules == true) ? RULES_TEXT : "";
              var tempVolunteer = (volunteerNeeded == true) ? volunteerButtonHTML : "";

              buttonStripRegion = "<br>" + logOffButtonHTML + " &nbsp " + takeABreakButtonHTML + " &nbsp " + viewMyPictureButtonHTML + " &nbsp " +  rulesButtonHTML + " &nbsp " + quitGameButtonHTML + " &nbsp " + tempVolunteer; // + " &nbsp " + quitGameButtonHTML;

              if (showMyPic == true)
              {
                  tempViewMyPicArea = myPictureAreaHTML;
              }

              tempBody = headerHTML + "<br>" + buildPlayerDataRegion() + "<br><br>" + messageHeaderHTML + "<br><br>" + myTargetDataHTML  + "<br>" + confirmKillHTML + buttonStripRegion + "<br>" + buildPictureAreaRegion() + tempViewMyPicArea + "<br><br>" + buildStatsRegion() + "<br><br>" + tempRulesRegionHTML;

              myBody.innerHTML = tempBody;


              document.getElementById("messageBoardLabel").innerHTML = buildMessageArea();

              showMyPicIfNecessary();

              if (targetId != "")
              {

                    // get my target's name and update screen
                    // create a reference to my target's player record
                    var myTargetsPlayerRef = db.collection("players").doc(targetId);
                    // line above blows up when link is deleted and there is no data.

                    myTargetsPlayerRef.get().then(function(doc)
                    {
                      if (doc.exists)
                      {
                          targetName = doc.data().name;
                          console.log("Doc exists for my target - Name is " + targetName + "  Target id is " + targetId + "  Rest is " + String(targetId) + "/" + doc.data().pictureName);

                          document.getElementById("myTargetsName").innerHTML = targetName;

                          // update my targets picture - I need targetID and the filename from the player record
                          var myTargetsPictureRef = storageRef.child(String(targetId) + "/" + doc.data().pictureName);

                          myTargetsPictureRef.getDownloadURL().then(function(url)
                          {
                            console.log("getDownloadURL worked in render game status active - targets picture");
                            // document.getElementById("myTargetsPictureLabel").innerHTML = MY_TARGETS_PICTURE_LABEL; // yyy

                            document.getElementById("targetPicture").style.visibility = "hidden";

                            document.getElementById("targetPicture").src = url;
                            document.getElementById("myTargetsPictureLabel").innerHTML = MY_TARGETS_PICTURE_LABEL_PART1 + targetName + MY_TARGETS_PICTURE_LABEL_PART2  + "<br>";


                            // kick off timer process to check picture size
                            picResizeTimer = setTimeout(checkToResizeTargetPicture, 100);   // run timed function in .1 seconds

                            document.getElementById("targetPicture").style.visibility = "visible";

                          }).catch(function(error)
                            {

                              if ((targetId != "") && (gameStatus != GAME_STATUS_PAUSED) && (gameStatus != GAME_STATUS_COMPLETED))
                              {
                                // console.log("Game status at this point is -------- " + decodeGameStatus(gameStatus));
                                document.getElementById("myTargetsPictureLabel").innerHTML = MY_TARGETS_PICTURE_LABEL_PART1 + targetName + MY_TARGETS_PICTURE_LABEL_PART2 + " File Not Found.";
                                document.getElementById("targetPicture").src = "";

                                console.log("File not found errror2  ------------");
                                // postMessage(MESSAGE_TEXT_TARGET_FILE_NOT_FOUND);

                                rebuildMessageAreaOnly();

                              }

                            } // end catch error

                          );

                        } // end if my targets player ref doc exists
                        else {
                          // my target's player record doesn't exist
                        }
                    }); // end .get on target's player record

              }

              showRules = false;

        break;

    case PLAYER_STATUS_INACTIVE:

            var tempBody;
            var tempBuyBack;
            var tempViewMyPicArea = "";
            var tempRulesRegionHTML = (showRules == true) ? RULES_TEXT : "";

            if (owed > 0)
                tempBuyBack = buyBackInButtonHTML;
            else
              tempBuyBack = "";

            buttonStripRegion = "<br> " + logOffButtonHTML + " &nbsp " + tempBuyBack + " &nbsp " + viewMyPictureButtonHTML + " &nbsp " + rulesButtonHTML + " &nbsp " + quitGameButtonHTML; // + " &nbsp " + quitGameButtonHTML;

            if (showMyPic == true)
            {
                tempViewMyPicArea = myPictureAreaHTML;
            }

            tempBody = headerHTML + "<br>" + buildPlayerDataRegion() + "<br><br>" + messageHeaderHTML + " <br> " + buttonStripRegion + "<br>" + buildPictureAreaRegion() + tempViewMyPicArea + "<br><br>" + buildStatsRegion() + "<br><br>" + tempRulesRegionHTML;

            myBody.innerHTML = tempBody;

            document.getElementById("messageBoardLabel").innerHTML = buildMessageArea();
            document.getElementById("myTargetsName").innerHTML = "";

            showMyPicIfNecessary();

            showRules = false;

            break;

      case PLAYER_STATUS_BREAK:

            var tempBody;
            var tempViewMyPicArea = "";
            var tempRulesRegionHTML = (showRules == true) ? RULES_TEXT : "";

            buttonStripRegion = "<br> " + logOffButtonHTML + " &nbsp " + returnFromBreakButtonHTML + " &nbsp " + viewMyPictureButtonHTML + " &nbsp " + rulesButtonHTML + " &nbsp " + quitGameButtonHTML; // + " &nbsp " + quitGameButtonHTML;

            if (showMyPic == true)
            {
                tempViewMyPicArea = myPictureAreaHTML;
            }

            tempBody = headerHTML + "<br>" + buildPlayerDataRegion() + "<br><br>" + messageHeaderHTML + " <br> " + buttonStripRegion + "<br>" + buildPictureAreaRegion() + tempViewMyPicArea + "<br><br>" + buildStatsRegion() + "<br><br>" + tempRulesRegionHTML;

            myBody.innerHTML = tempBody;

            document.getElementById("messageBoardLabel").innerHTML = buildMessageArea();

            showMyPicIfNecessary();

            document.getElementById("myTargetsName").innerHTML = "";

            targetName = "";
            // console.log("You are looking for this --------------------------");
            //targetId = "";
            showRules = false;

            break;

    case PLAYER_STATUS_REGISTERED:

      // 2 cases, registered before log in or after log in
        var tempViewMyPicArea = "";
        var tempRulesRegionHTML = (showRules == true) ? RULES_TEXT : "";

        if (showMyPic == true)
        {
            tempViewMyPicArea = myPictureAreaHTML;
        }


        if (loggedIn == true)
        {
            var tempBody;

            buttonStripRegion = "<br> " + logOffButtonHTML + " &nbsp " + viewMyPictureButtonHTML + " &nbsp " + rulesButtonHTML + " &nbsp " + quitGameButtonHTML; // + " &nbsp " + quitGameButtonHTML;

            tempBody = headerHTML + "<br>" + buildPlayerDataRegion() + "<br><br>" + messageHeaderHTML + " <br> " + buttonStripRegion + "<br><br>" + buildPictureAreaRegion() + tempViewMyPicArea + "<br><br>" + buildStatsRegion() + "<br><br>" + tempRulesRegionHTML;

            myBody.innerHTML = tempBody;

            document.getElementById("messageBoardLabel").innerHTML = buildMessageArea();

            showMyPicIfNecessary();

        }
        else
        {

            var tempLoginRegion;

            if (gameStatus == GAME_STATUS_NOT_STARTED)
            {
                tempLoginRegion = loginOrRegisterNoCheckboxes;
            }
            else
            {
                tempLoginRegion = loginOrRegisterHTML;
            }

              // loginRegion = loginOrRegisterHTML;
              buttonStripRegion = "";

              myBody.innerHTML = headerHTML + "<br>" + tempLoginRegion + "<br> " + buildMessageArea() + "<br><br>" + buildStatsRegion() + "<br><br>" + tempRulesRegionHTML;

              document.getElementById("idInputBox").value = playerId;

              if (showMyPic == true)
              {
                  document.getElementById("myPictureLabel").innerHTML = "<br>" + MY_PICTURE_LABEL + "<br><br>";
                  document.getElementById("myPicture").src = myURL;
              }

        }

        showRules = false;

        break;

    case PLAYER_STATUS_GAME_OVER:

          myBody.innerHTML = headerHTML + "<br>" + buildPlayerDataRegion() + "<br><br>" + messageHeaderHTML + "<br>" + logOffButtonHTML + "<br><br>" + buildStatsRegion() + "<br><br>" + RULES_TEXT;

          document.getElementById("messageBoardLabel").innerHTML = buildMessageArea();

          break;

    default:
      console.log("Render game called, default status is " + decodePlayerStatus(myStatus));

  }  // end switch on my status

}

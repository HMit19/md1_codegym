// config of game
const images = {
  imageGame: "../images/home.jpg",
  imageGameOver: "../images/over.jpg",
  imageLevel1: "../images/level1.jpg",
  imageLevel2: "../images/level2.jpg",
  imageLevel3: "../images/level3.jpg",
  imageGuide: "../images/guide.jpg",
  imageWin: "../images/win.jpg",
};
let level = 1;  // level default
let difficultyTime = null; //  time by difficulty

const EASY = 60; // time easy play
const MEDIUM = 45; // time medium play
const HARD = 30; // time hard play

// declare variable check status music game
let statusMusic = true;   // status music game
const audio = new Audio(  // audio system
  "https://audio-previews.elements.envatousercontent.com/files/136199140/preview.mp3"
);
const music = new Audio("../audio/chill.mp3");  // music game
const selectTrueMusic = new Audio("../audio/trueSelect.mp3"); // audio system when select true


const game = new Game(audio);  // declare game
const difficulty = new Difficulty(audio); 
let timeDown = new countDown();
let timeTg = null;  // variable support assign time

// trạng thái game
let statusDifficulty = true;
let statusPause = false;
let statusGuide = true;
let selectTrue = false;
let statusGameStart = false;
let playAgain = false;
let setProperty = new Set();

// check select, show result if select true 
function check() {
  if (!playAgain) {
    selectTrue = true;
    selectTrueMusic.play();
    setProperty.setOpacity("find1", "0.6");
    setProperty.setOpacity("find2", "0.6");
    setProperty.setVisibility("pause_game", "hidden");
    setTimeout(function () {
      setProperty.setVisibility("pause_game", "visible");
      setProperty.setContent("pause_game", "Next");
      level++;
    }, 1000);
  }
}

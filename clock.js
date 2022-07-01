
// time count down
class countDown {
  constructor() {
  }
  start() {
    timeTg = difficultyTime;
    let counter = setInterval(timeDown.run, 1000);
  }
  run() {
    if (!statusPause && !selectTrue) {
      timeTg--;
    }
    if (timeTg == 0 && !selectTrue) {
      setProperty.setImage('gui', images.imageGameOver);
      setProperty.setContent('pause_game', 'Again');
      playAgain = true;
    }
    if (timeTg <= -1) {
      clearInterval(counter);
      return;
    }
    setProperty.setContent('time_game', timeTg);
  }
}

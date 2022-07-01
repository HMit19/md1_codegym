// settings do kho
class Difficulty {
  constructor(audio) {
    this.audio = audio;
  }
  easy() {
    this.audio.play();
    difficultyTime = EASY;
    setProperty.setContent('time_game', difficultyTime);
    setProperty.setBackground('hard', "rgb(144, 208, 114)");
    setProperty.setBackground('medium', "rgb(144, 208, 114)");
    setProperty.setBackground('easy', "tomato");
    if (!statusGameStart) {
      setProperty.setDisplay('st_game', 'inline');
      setProperty.setVisibility('timeContainer', 'visible');
      setProperty.setVisibility('levelContainer', 'visible');
    }
    statusDifficulty = false;
  }
  medium() {
    this.audio.play();
    difficultyTime = MEDIUM;
    setProperty.setContent('time_game', difficultyTime);
    setProperty.setBackground('easy', "rgb(144, 208, 114)");
    setProperty.setBackground('hard', "rgb(144, 208, 114)");
    setProperty.setBackground('medium', "tomato");
    if (!statusGameStart) {
      setProperty.setDisplay('st_game', 'inline');
      setProperty.setVisibility('timeContainer', 'visible');
      setProperty.setVisibility('levelContainer', 'visible');
    }
    statusDifficulty = false;
  }
  hard() {
    this.audio.play();
    difficultyTime = HARD;
    setProperty.setContent('time_game', difficultyTime);
    setProperty.setBackground('easy', "rgb(144, 208, 114)");
    setProperty.setBackground('medium', "rgb(144, 208, 114)");
    setProperty.setBackground('hard', "tomato");
    if (!statusGameStart) {
      setProperty.setDisplay('st_game', 'inline');
      setProperty.setVisibility('timeContainer', 'visible');
      setProperty.setVisibility('levelContainer', 'visible');
    }
    statusDifficulty = false;
  }
}

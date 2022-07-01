class Game {
  constructor(audio) {
    this.audio = audio;
  }
  New_game() {
    this.audio.play();
    let result = confirm("Bạn có chắc chơi mới không?");
    if (result == true) {
      location.reload();
    }
  }
  onMusic() {
    if (statusMusic) {
      music.play();
      statusMusic = false;
      setProperty.setBackground('music_on', 'rgb(79, 161, 186)');
      setProperty.setText('music_on', 'none');
    } else {
      music.pause();
      statusMusic = true;
      setProperty.setBackground('music_on', 'rgb(144, 208, 114)');
      setProperty.setText('music_on', 'line-through');
    }
  }

  Guide() {
    if (statusGuide) {
      setProperty.setImage('gui', images.imageGuide);
      setProperty.setBackground('guide', 'tomato');
      statusGuide = false;
    } else {
      setProperty.setImage('gui', images.imageGame);
      setProperty.setBackground('guide', 'rgb(144, 208, 114)');
      statusGuide = true;
    }
  }

  startGame() {
    this.audio.play();
    if (difficultyTime == null) {
      alert("Vui lòng chọn độ khó!");
    } else {
      if (difficultyTime == EASY) {
        setProperty.setVisibility('medium', 'hidden');
        setProperty.setVisibility('hard', 'hidden');
      } else if (difficultyTime == MEDIUM) {
        setProperty.setVisibility('easy', 'hidden');
        setProperty.setVisibility('hard', 'hidden');
      } else if (difficultyTime == HARD) {
        setProperty.setVisibility('medium', 'hidden');
        setProperty.setVisibility('easy', 'hidden');
      }
      setProperty.setImage('gui', images.imageLevel1);
      setProperty.setDisplay('st_game', 'none');
      setProperty.setVisibility('pause_game', 'visible');
      setProperty.setVisibility('guide', 'hidden');
      this.onMusic();
    }
    setProperty.setVisibility('find1', 'visible');
    setProperty.setVisibility('find2', 'visible');
    setProperty.setOpacity('find1', '0');
    setProperty.setOpacity('find2', '0');
    statusGameStart = true;
    timeDown.start();
  }

  upLevel() {
    if (level == 2) {
      setProperty.setContent('level_game', level);
      setProperty.setImage('gui', images.imageLevel2);
      setProperty.setSize('find1', '42%', '20%');
      setProperty.setSize('find2', '42%', '52%');
      selectTrue = false;
    }
    if (level == 3) {
      setProperty.setContent('level_game', level);
      setProperty.setImage('gui', images.imageLevel3);
      setProperty.setSize('find1', '54%', '38%');
      setProperty.setSize('find2', '54%', '69.5%');
      selectTrue = false;
    }
    if (level == 4) {
      setProperty.setImage('gui', images.imageWin);
      setProperty.setVisibility('pause_game', 'hidden');
      setProperty.setVisibility('timeContainer', 'hidden');
      setProperty.setVisibility('levelContainer', 'hidden');
      if(!statusMusic){this.onMusic();}
    }
    timeTg = difficultyTime;
  }

  Again() {
    if (level == 1) {
      setProperty.setImage('gui', images.imageLevel1);
    }
    if (level == 2) {
      setProperty.setImage('gui', images.imageLevel2);
    }
    if (level == 3) {
      setProperty.setImage('gui', images.imageLevel3);
    }
    setProperty.setContent('level_game', level);
    setProperty.setContent('pause_game', 'Pause');
    timeTg = difficultyTime + 1;
    playAgain = false;
  }

  Pause_Continue() {
    this.audio.play();
    if (playAgain) {
      this.Again();
    } else {
      if (selectTrue) {
        game.upLevel();
        setProperty.setOpacity('find1', '0');
        setProperty.setOpacity('find2', '0');
        setProperty.setContent('pause_game', 'Pause');
      } else {
        if (statusPause) {
          statusPause = false;
          setProperty.setDisplay('gui', 'inline');
          setProperty.setContent('pause_game', 'Pause');
        } else {
          setProperty.setDisplay('gui', 'none');
          setProperty.setContent('pause_game', 'Continue');
          statusPause = true;
        }
      }
    }
  }
}

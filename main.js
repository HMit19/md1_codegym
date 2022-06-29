class Setting {
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

  On_music() {
    if (status_music) {
      music.play();
      status_music = false;
      set.setBackground('music_on', 'rgb(79, 161, 186)');
      set.setText('music_on', 'none');
    } else {
      music.pause();
      status_music = true;
      set.setBackground('music_on', 'rgb(144, 208, 114)');
      set.setText('music_on', 'line-through');
    }
  }

  Guide() {
    if (status_guide) {
      set.setImg('gui', img.guide);
      set.setBackground('guide', 'tomato');
      status_guide = false;
    } else {
      set.setImg('gui', img.home);
      set.setBackground('guide', 'rgb(144, 208, 114)');
      status_guide = true;
    }
  }

  Start() {
    this.audio.play();
    if (ran == null) {
      alert("Vui lòng chọn độ khó!");
    } else {
      if (ran == EASY) {
        set.setVisibility('medium', 'hidden');
        set.setVisibility('hard', 'hidden');
      } else if (ran == MEDIUM) {
        set.setVisibility('easy', 'hidden');
        set.setVisibility('hard', 'hidden');
      } else if (ran == HARD) {
        set.setVisibility('medium', 'hidden');
        set.setVisibility('easy', 'hidden');
      }
      if (level == 1) {
        set.setImg('gui', img.lv1);
      } else if (level == 2) {
        set.setImg('gui', img.lv2);
      }
      set.setDisplay('st_game', 'none');
      set.setVisibility('pause_game', 'visible');
      set.setVisibility('guide', 'hidden');
      this.On_music();
    }
    set.setVisibility('find1', 'visible');
    set.setVisibility('find2', 'visible');
    set.setOpacity('find1', '0');
    set.setOpacity('find2', '0');
    status_start = true;
    t.start();
  }

  Up_Level() {
    if (level == 2) {
      set.setContent('level_game', level);
      set.setImg('gui', img.lv2);
      set.setSize('find1', '42%', '20%');
      set.setSize('find2', '42%', '52%');
      bool = false;
    }
    if (level == 3) {
      set.setContent('level_game', level);
      set.setImg('gui', img.lv3);
      set.setSize('find1', '54%', '38%');
      set.setSize('find2', '54%', '69.5%');
      bool = false;
    }
    if (level == 4) {
      set.setImg('gui', img.home);
      set.setVisibility('pause_game', 'hidden');
      set.setVisibility('ti', 'hidden');
      set.setVisibility('lv', 'hidden');
    }
    tg = ran;
  }

  Again() {
    tg = ran;
    if (level == 1) {
      set.setImg('gui', img.lv1);
      set.setContent('pause_game', 'Pause');
      tg = ran;
      again = false;
    }
    if (level == 2) {
      set.setContent('level_game', level);
      set.setContent('pause_game', 'Pause');
      set.setImg('gui', img.lv2);
      tg = ran;
      again = false;
    }
    if (level == 3) {
      set.setContent('level_game', level);
      set.setContent('pause_game', 'Pause');
      set.setImg('gui', img.lv3);
      tg = ran;
      again = false;
    }
  }

  Pause_Continue() {
    this.audio.play();
    if (again) {
      this.Again();
    } else {
      if (bool) {
        game.Up_Level();
        set.setOpacity('find1', '0');
        set.setOpacity('find2', '0');
        set.setContent('pause_game', 'Pause');
      } else {
        if (status_pause) {
          status_pause = false;
          set.setDisplay('gui', 'inline');
          set.setContent('pause_game', 'Pause');
        } else {
          set.setDisplay('gui', 'none');
          set.setContent('pause_game', 'Continue');
          status_pause = true;
        }
      }
    }
  }
}

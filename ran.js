// settings do kho
class Ran {
  constructor(audio) {
    this.audio = audio;
  }
  easy() {
    this.audio.play();
    ran = EASY;
    set.setContent('time_game', ran);
    set.setBackground('hard', "rgb(144, 208, 114)");
    set.setBackground('medium', "rgb(144, 208, 114)");
    set.setBackground('easy', "tomato");
    if (!status_start) {
      set.setDisplay('st_game', 'inline');
      set.setVisibility('ti', 'visible');
      set.setVisibility('lv', 'visible');
    }
    status_ran = false;
  }
  medium() {
    this.audio.play();
    ran = MEDIUM;
    set.setContent('time_game', ran);
    set.setBackground('easy', "rgb(144, 208, 114)");
    set.setBackground('hard', "rgb(144, 208, 114)");
    set.setBackground('medium', "tomato");
    if (!status_start) {
      set.setDisplay('st_game', 'inline');
      set.setVisibility('ti', 'visible');
      set.setVisibility('lv', 'visible');
    }
    status_ran = false;
  }
  hard() {
    this.audio.play();
    ran = HARD;
    set.setContent('time_game', ran);
    set.setBackground('easy', "rgb(144, 208, 114)");
    set.setBackground('medium', "rgb(144, 208, 114)");
    set.setBackground('hard', "tomato");
    if (!status_start) {
      set.setDisplay('st_game', 'inline');
      set.setVisibility('ti', 'visible');
      set.setVisibility('lv', 'visible');
    }
    status_ran = false;
  }
}

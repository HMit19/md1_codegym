
// lớp thời gian đếm ngược
class countDown {
  constructor() {}
  start() {
    tg = ran;
    let counter = setInterval(t.run, 1000);
  }
  run() {
    if (!status_pause && !bool) {
      tg--;
    }
    if (tg == 0 && !bool) {
      set.setImg('gui', img.over);
      set.setContent('pause_game', 'Again');
      again = true;
    }
    if (tg <= -1) {
      clearInterval(counter);
      return;
    }
    set.setContent('time_game', tg);
  }
}


// ảnh điều khiển game
const img = {
  home: "home.jpg",
  over: "over.jpg",
  lv1: "level1.jpg",
  lv2: "level2.jpg",
  lv3: "level3.jpg",
  guide: "guide.jpg",
};
let level = 1;
let ran = null; // độ khó mặc định

const EASY = 60; // mức dễ
const MEDIUM = 45; // mức trung bình
const HARD = 3; // mức khó

// tạo file âm thanh cho game
let status_music = true;
const audio = new Audio(
  "https://audio-previews.elements.envatousercontent.com/files/136199140/preview.mp3"
);
const music = new Audio("au.mp3");
const True = new Audio("tinh.mp3");
const game = new Setting(audio);
const dk = new Ran(audio);
let t = new countDown();
let tg = null;

// trạng thái game
let status_ran = true;
let status_pause = false;
let status_guide = true;
let bool = false;
let status_start = false;
let again = false;
let set = new Set();

// check và hiển thị đáp án đúng, tăng level
function check() {
  if (!again) {
    bool = true;
    True.play();
    set.setOpacity('find1', '0.6');
    set.setOpacity('find2', '0.6');
    set.setVisibility('pause_game', 'hidden');
    setTimeout(function () {
      set.setVisibility('pause_game', 'visible');
      set.setContent('pause_game', 'Next');
      level++;
    }, 3000);
  }
}

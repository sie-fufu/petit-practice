class Main {
  constructor() {
    this.header = document.querySelector(".header");
    this.sides = document.querySelector(".side-left");
    this._observers = [];
    // this._init();
  }

  set observers(val) {
    this._observers.push(val);
  }

  get observers() {
    return this._observers;
  }

  _init() {
    new MobilMenu();
    this.hero = new HeroSlider(".swiper-container");
    this._scrollInit();
  }

  paceDone() {
    this._scrollInit();
  }

  _inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add("inview");
    } else {
      el.classList.remove("inview");
    }
  }

  _toggleSlideAnimation(el, inview) {
    if (inview) {
      this.hero.start();
    } else {
      this.hero.stop();
    }
  }

  _scrollInit() {
    this.observers = new ScrollObserver(".cover-slide", this._inviewAnimation);
    this.observers = new ScrollObserver("container", this._inviewAnimation);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const main = new Main();
});

// ＊localStorageとは、ブラウザ全体で使える変数。
//   つまり、ページが変わっても同じ値が使える。普通だとページが変わると変数・定数はリセットされる。

// const checkOnClickRain = () => {
//   // ブラウザからisCancelの値を取得
//   const isCancel = localStorage.getItem("isCancel");
//   // isCancelが"true"ならrain.htmlへ。"false"ならsecond.htmlへ。
//   if (isCancel === "true") {
//     location.href = "rain.html";
//     return; // リターンをしないと、if文のあとの処理も行われてしまうため。
//   }
//   location.href = "second.html";
// };

(async () => {
  const BASE_URL = "https://petit-practice.herokuapp.com/practice";
  const res = await fetch(BASE_URL);
  const result = await res.json();
  let isCancel = result[0].isCancel;
  console.log(isCancel);
  const checkOnClickRain = () => {
    if (isCancel) {
      location.href = "rain.html";
      return; // リターンをしないと、if文のあとの処理も行われてしまうため。
    }
    location.href = "second.html";
  };

  // root-btn（詳細と書かれたボタン）がクリックされたとき発火。
  location.pathname.includes("main.html") &&
    document
      .getElementById("root-btn")
      .addEventListener("click", checkOnClickRain);
})();

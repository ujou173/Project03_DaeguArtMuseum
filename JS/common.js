// .lang 하위의 버튼
const $lang = document.querySelector(".lang button");
const $langList = document.querySelector(".lang ul");
$lang.addEventListener("click", function () {
  $langList.classList.toggle("on");
});

// 햄버거 버튼
const $btnHam = document.querySelector(".ham"),
  $megaBg = document.querySelector(".mega_bg"),
  $hamGnb = document.querySelector(".ham_gnb"),
  $hamLang = document.querySelector(".ham_lang");

$btnHam.addEventListener("click", function () {
  if ($hamLangList.classList.contains("sl_toggle")) {
    $hamLangList.classList.remove("sl_toggle");
  }
  this.classList.toggle("on");
  $megaBg.classList.toggle("on");
  setTimeout(function () {
    $hamGnb.classList.toggle("on");
    $hamLang.classList.toggle("on");
  }, 200);
  document.body.classList.toggle("scroll_lock");
});

// 햄버거 lnag 버튼
const $hamLangList = document.querySelector(".ham_lang ul");
$hamLang.addEventListener("click", function () {
  $hamLangList.classList.toggle("sl_toggle");
});

// 메가메뉴가 열려있는 상태로 브라우저 사이즈가 일정 크기이상 커질 경우
// 메가메뉴를 자동으로 닫음

let bodyWd = document.body.offsetWidth + 17;

window.addEventListener("resize", function () {
  bodyWd = document.body.offsetWidth + 17;
  if (bodyWd > 700) {
    $btnHam.classList.remove("on");
    $megaBg.classList.remove("on");
    setTimeout(function () {
      $hamGnb.classList.remove("on");
      $hamLang.classList.remove("on");
    }, 200);
  }
});

// sec1 메인배너 슬라이드
var mainBannerSl = new Swiper(".main_banner", {
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".main_banner_pg",
    clickable: true,
  },
});

// sec2 tab menu 버튼
const $tabBtn = document.querySelectorAll(".sec2 .tab_btns > button");
const $cardCon = document.querySelectorAll(".sec2 .card_con > div");

$tabBtn.forEach(function (item, idx) {
  item.addEventListener("click", function () {
    btnOn(idx);
    cardOn(idx);
  });
});

function btnOn(num) {
  $tabBtn.forEach(function (Tbtn, i) {
    Tbtn.classList.remove("on");
  });
  $tabBtn[num].classList.add("on");
}

function cardOn(num1) {
  $cardCon.forEach(function (Tcard, i) {
    Tcard.classList.remove("on");
  });
  $cardCon[num1].classList.add("on");
}

// sec2 새소식 슬라이드
var newsSl = new Swiper(".news_list", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1150: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".news_next",
    prevEl: ".news_prev",
  },
});

// sec2 공지사항 슬라이드
var noticeSl = new Swiper(".notice_list", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1150: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".notice_next",
    prevEl: ".notice_prev",
  },
});

// sec2 보도자료 슬라이드
var mediaSl = new Swiper(".media_list", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1150: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".media_next",
    prevEl: ".media_prev",
  },
});

//sec4 디지털 미술관 동영상 슬라이드

var youtubeSl = new Swiper(".digital_museum_slide", {
  initialSlide: 1,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
    700: {
      slidesPerView: "auto",
    },
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 200,
    depth: 100,
    modifier: 1.5,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".digital_museum_next",
    prevEl: ".digital_museum_prev",
  },
});

//sec4 디지털 미술관 동영상 클릭시 play
// iframe 사용으로 일단 보류
// iframe 제거
const $vidList = document.querySelectorAll(".digital_museum_slide li"),
  $btnNext = document.querySelector(".digital_museum_next"),
  $btnPrev = document.querySelector(".digital_museum_prev"),
  $stop = document.querySelectorAll(".digital_museum_slide li video");
let vidToggle = 0;
// console.log($vidList);
// console.log($stop);

$vidList.forEach(function (item, idx) {
  item.addEventListener("click", function () {
    let vidPlay = this.childNodes[3];
    if (vidToggle == 0) {
      vidPlay.play();
      vidToggle = 1;
      // console.log(vidPlay);
      // console.log(vidToggle);
    } else {
      if (vidToggle == 1) {
        vidPlay.pause();
        vidToggle = 0;
        // console.log(vidPlay);
        // console.log(vidToggle);
      }
    }
  });
});

$btnNext.addEventListener("click", function () {
  $stop.forEach(function (item, idx) {
    item.pause();
    vidToggle = 0;
  });
});

$btnPrev.addEventListener("click", function () {
  $stop.forEach(function (item, idx) {
    item.pause();
    vidToggle = 0;
  });
});

// 스와이프시 중앙의 포커스 된 동영상을 제외하고 나머지 동영상 자동 정지
window.addEventListener("mouseup", function () {
  if ($vidList[1].classList.contains("swiper-slide-next")) {
    $vidList[1].querySelector("video").pause();
    $vidList[2].querySelector("video").pause();
  } else if ($vidList[1].classList.contains("swiper-slide-active")) {
    $vidList[0].querySelector("video").pause();
    $vidList[2].querySelector("video").pause();
  } else if ($vidList[1].classList.contains("swiper-slide-prev")) {
    $vidList[1].querySelector("video").pause();
    $vidList[2].querySelector("video").pause();
  }
});

// sec5 mobile 자동 슬라이드
const $colWrap = document.querySelector(".sec5 > div");
const $colCon = document.querySelector(".collection");
const $colList = document.querySelectorAll(".collection_list");

let slideCount = $colList.length;
let firstList = $colCon.firstElementChild;
let lastList = $colCon.lastElementChild;
let slideEvent = 0;

// 자동 슬라이드 함수
function colSL() {
  $colCon.style.cssText = `margin-left:${-bodyWd}px; transition:0.5s`;
  console.log(bodyWd);
  setTimeout(() => {
    $colCon.insertBefore(firstList, null);
    $colCon.style = `margin-left: 0`;
  }, 500);
  firstList = $colCon.firstElementChild;
  lastList = $colCon.lastElementChild;
}

// pc의 sec5 animation 효과 제거 후 자동 슬라이드 함수 실행
window.addEventListener("resize", function () {
  // bodyWd = document.body.offsetWidth + 17;
  bodyWd = document.body.offsetWidth;
  // console.log(bodyWd);
  if (bodyWd + 17 < 701) {
    $colWrap.classList.remove("on");
    $colWrap.classList.add("off");
    if (slideEvent == 0) {
      slideEvent++;
      slideInterval = setInterval(colSL, 5000);
      console.log("자동 슬라이드 실행");
    } else {
      // console.log("실행 안함");
    }
  } else if (bodyWd + 17 > 700) {
    $colWrap.classList.remove("off");
    $colWrap.classList.add("on");
    if (slideEvent >= 1) {
      clearInterval(slideInterval);
      slideEvent = 0;
      console.log("자동 슬라이드 종료");
    }
  }
});

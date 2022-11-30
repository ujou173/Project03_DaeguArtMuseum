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

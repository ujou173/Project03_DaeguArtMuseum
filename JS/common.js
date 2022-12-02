// gnb 변수 선언
const gnb = `
<ul>
<li>
  <a href="#">전시</a>
  <ul class="sub">
    <li><a href="#">현재전시</a></li>
    <li><a href="#">지난전시</a></li>
    <li><a href="#">예정전시</a></li>
  </ul>
</li>
<li>
  <a href="#">교육 및 행사</a>
  <ul class="sub">
    <li><a href="#">렉쳐</a></li>
    <li><a href="#">전시연계</a></li>
    <li><a href="#">이벤트</a></li>
  </ul>
</li>
<li>
  <a href="./sub.html">소장품</a>
  <ul class="sub">
    <li><a href="./sub.html">소장품 검색</a></li>
    <li><a href="#">이건희 컬렉션</a></li>
  </ul>
</li>
<li>
  <a href="#">디지털 미술관</a>
  <ul class="sub">
    <li><a href="#">디지털 미술관</a></li>
    <li><a href="#">미술 정보 센터</a></li>
    <li><a href="#">아카이브실</a></li>
    <li><a href="#">디지털 가상공간</a></li>
    <li><a href="#">사진자료</a></li>
    <li><a href="#">발간자료</a></li>
  </ul>
</li>
<li>
  <a href="#">미술상</a>
  <ul class="sub">
    <li><a href="#">이인성미술상</a></li>
    <li><a href="#">정점식미술상</a></li>
  </ul>
</li>
<li>
  <a href="#">커뮤니티</a>
  <ul class="sub">
    <li><a href="#">게시판</a></li>
    <li><a href="#">관람후기</a></li>
    <li><a href="#">네트워크</a></li>
  </ul>
</li>
<li>
  <a href="#">공지사항</a>
  <ul class="sub">
    <li><a href="#">공지사항</a></li>
    <li><a href="#">새 소식</a></li>
    <li><a href="#">메일링 서비스</a></li>
    <li><a href="#">보도자료</a></li>
  </ul>
</li>
<li>
  <a href="#">미술관 소개</a>
  <ul class="sub">
    <li><a href="#">대구미술관</a></li>
    <li><a href="#">관람안내</a></li>
    <li><a href="#">오시는길</a></li>
    <li><a href="#">서포터즈</a></li>
    <li><a href="#">구성원</a></li>
    <li><a href="#">시설안내</a></li>
  </ul>
</li>
</ul>`;

// gnb 출력
const $hdGnb = document.querySelector(".hd_bottom > nav");
$hdGnb.innerHTML = gnb;
const $hamGnb1 = document.querySelector(".hd_ham > nav");
$hamGnb1.innerHTML = gnb;

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

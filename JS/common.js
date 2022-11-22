// sec1 메인배너 슬라이드
var swiper = new main_banner(".main_banner_slide", {
  loop: true,
  pagination: {
    el: ".main_banner_pg",
  },
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
});

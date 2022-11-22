// .lang 하위의 버튼
const $lang = document.querySelector(".lang button");

// sec1 메인배너 슬라이드
var main_banner = new Swiper(".main_banner_slide", {
  loop: true,
  pagination: {
    el: ".main_banner_pg",
  },
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
});

// sec2 새소식 슬라이드
var news_sl = new Swiper(".news_list", {
  navigation: {
    nextEl: ".news_next",
    prevEl: ".news_prev",
  },
});

// sec2 공지사항 슬라이드
var notice_sl = new Swiper(".notice_list", {
  navigation: {
    nextEl: ".notice_next",
    prevEl: ".notice_prev",
  },
});

// sec2 보도자료 슬라이드
var media_sl = new Swiper(".media_list", {
  navigation: {
    nextEl: ".media_next",
    prevEl: ".media_prev",
  },
});

//sec4 디지털 미술관 슬라이드
var youtube_sl = new Swiper(".digital_museum_slide", {
  initialSlide: 1,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
    // 나중에 반응형 하면서 포인트 값 수정할 것
    400: {
      slidesPerView: "auto",
      spaceBetween: 50,
    },
  },
  coverflowEffect: {
    rotate: -5,
    stretch: 90,
    depth: 100,
    modifier: 1.5,
    slideShadows: true,
  },
  // 네비게이션이 안될 수 있음. 그럴 경우 pg로 변경할 것
  navigation: {
    nextEl: ".digital_museum_next",
    prevEl: ".digital_museum_prev",
  },
  // pagination: {
  //   el: ".swiper-pagination"
  // }
});

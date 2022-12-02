// sub page 상세검색 버튼
const $searchBtn = document.querySelector(".more_search");
const $searchBg = document.querySelector(".search_bg");
const $searchModal = document.querySelector(".search_modal");

$searchBtn.addEventListener("click", function () {
  // console.log("click");
  $searchBg.classList.add("on");
  $searchModal.classList.add("on");
});

// 상세검색 닫기 버튼
const $modalClose = document.querySelector(".modal_title > button");

$modalClose.addEventListener("click", function () {
  $searchBg.classList.remove("on");
  $searchModal.classList.remove("on");
});

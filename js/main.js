/* =========================
   main-visual 큰 슬라이드
========================= */

// 큰 배경 슬라이드들
const visualSlides = document.querySelectorAll(".slide");

// 작은 카드 슬라이드들
const miniSlides = document.querySelectorAll(".mini-slide");

// 작은 슬라이드 페이지네이션
const miniDots = document.querySelectorAll(".mini-pagination span");

// 큰 슬라이드 이전 / 다음 버튼
const prevBtn = document.querySelector(".visual-prev");
const nextBtn = document.querySelector(".visual-next");

let visualIndex = 0;
let miniIndex = 0;

// 큰 슬라이드 보여주기
function showVisualSlide(index) {
  if (visualSlides.length === 0) return;

  visualSlides.forEach(function (slide) {
    slide.classList.remove("active");
  });

  if (visualSlides[index]) {
    visualSlides[index].classList.add("active");
  }
}

// 작은 슬라이드 보여주기
function showMiniSlide(index) {
  if (miniSlides.length === 0) return;

  miniSlides.forEach(function (slide) {
    slide.classList.remove("active");
  });

  if (miniSlides[index]) {
    miniSlides[index].classList.add("active");
  }

  miniDots.forEach(function (dot) {
    dot.classList.remove("active");
  });

  if (miniDots[index]) {
    miniDots[index].classList.add("active");
  }
}

// 큰 슬라이드 다음
function nextVisualSlide() {
  visualIndex++;

  if (visualIndex >= visualSlides.length) {
    visualIndex = 0;
  }

  showVisualSlide(visualIndex);
}

// 큰 슬라이드 이전
function prevVisualSlide() {
  visualIndex--;

  if (visualIndex < 0) {
    visualIndex = visualSlides.length - 1;
  }

  showVisualSlide(visualIndex);
}

// 작은 슬라이드 다음
function nextMiniSlide() {
  miniIndex++;

  if (miniIndex >= miniSlides.length) {
    miniIndex = 0;
  }

  showMiniSlide(miniIndex);
}

// 큰 슬라이드 버튼
if (nextBtn) {
  nextBtn.addEventListener("click", nextVisualSlide);
}

if (prevBtn) {
  prevBtn.addEventListener("click", prevVisualSlide);
}

// 자동 슬라이드
if (visualSlides.length > 0) {
  setInterval(nextVisualSlide, 4000);
}

if (miniSlides.length > 0) {
  setInterval(nextMiniSlide, 4000);
}



/* =========================
   event-section 날짜 필터
========================= */

// 날짜 버튼들
const dayButtons = document.querySelectorAll(".day-btn");

// 이벤트 카드들
const eventCards = document.querySelectorAll(".event-card");

// 이벤트 카드 필터 함수
function filterEvents(selectedDay) {
  eventCards.forEach(function (card) {
    const cardDay = card.dataset.event;

    // 카드의 data-event 값과 클릭한 날짜가 같으면 보이기
    if (cardDay === selectedDay) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
}

// 날짜 버튼 클릭 기능
dayButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedDay = button.dataset.day;

    // 모든 날짜 버튼 active 제거
    dayButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    // 클릭한 날짜 버튼만 active 추가
    button.classList.add("active");

    // 해당 날짜 이벤트만 보여주기
    filterEvents(selectedDay);
  });
});

// 처음 화면에서는 active 되어 있는 날짜 기준으로 필터 실행
const activeDayButton = document.querySelector(".day-btn.active");

if (activeDayButton) {
  filterEvents(activeDayButton.dataset.day);
}
/* =========================
   gallery slider
========================= */

const flowerTrack = document.querySelector(".flower-track");
const flowerItems = document.querySelectorAll(".flower-item");

const galleryPrev = document.querySelector(".gallery-prev");
const galleryNext = document.querySelector(".gallery-next");
const galleryPause = document.querySelector(".gallery-pause");

let flowerIndex = 2;
let galleryTimer;
let isGalleryPlaying = true;

function updateFlowerSlider() {
  flowerItems.forEach(function (item) {
    item.classList.remove("active");

    const plus = item.querySelector(".plus-btn");

    if (plus) {
      plus.remove();
    }
  });

  flowerItems[flowerIndex].classList.add("active");

  const activeCircle = flowerItems[flowerIndex].querySelector(".flower-circle");
  activeCircle.insertAdjacentHTML("beforeend", '<span class="plus-btn">+</span>');

  const moveX = flowerIndex * 290 - 420;
  flowerTrack.style.transform = "translateX(" + -moveX + "px)";
}

function nextFlower() {
  flowerIndex++;

  if (flowerIndex >= flowerItems.length) {
    flowerIndex = 0;
  }

  updateFlowerSlider();
}

function prevFlower() {
  flowerIndex--;

  if (flowerIndex < 0) {
    flowerIndex = flowerItems.length - 1;
  }

  updateFlowerSlider();
}

function startGalleryAuto() {
  galleryTimer = setInterval(nextFlower, 1000);
}

function stopGalleryAuto() {
  clearInterval(galleryTimer);
}

if (galleryNext) {
  galleryNext.addEventListener("click", function () {
    nextFlower();
  });
}

if (galleryPrev) {
  galleryPrev.addEventListener("click", function () {
    prevFlower();
  });
}

if (galleryPause) {
  galleryPause.addEventListener("click", function () {
    if (isGalleryPlaying) {
      stopGalleryAuto();
      galleryPause.innerHTML = '<i class="fa-solid fa-play"></i>';
      isGalleryPlaying = false;
    } else {
      startGalleryAuto();
      galleryPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
      isGalleryPlaying = true;
    }
  });
}

if (flowerTrack && flowerItems.length > 0) {
  updateFlowerSlider();
  startGalleryAuto();
}
/* =========================
   news tabs
========================= */

const newsTabs = document.querySelectorAll(".news-tabs a");
const newsLists = document.querySelectorAll(".news-list");

newsTabs.forEach(function (tab) {
  tab.addEventListener("click", function (event) {
    event.preventDefault();

    const target = tab.dataset.news;

    newsTabs.forEach(function (item) {
      item.classList.remove("active");
    });

    newsLists.forEach(function (list) {
      list.classList.remove("active");
    });

    tab.classList.add("active");

    const activeList = document.querySelector('[data-news-list="' + target + '"]');

    if (activeList) {
      activeList.classList.add("active");
    }
  });
});


/* =========================
   popup slider
========================= */

const popupTrack = document.querySelector(".popup-track");
const popupSlides = document.querySelectorAll(".popup-slide");
const popupDots = document.querySelectorAll(".popup-dots span");
const popupCurrent = document.querySelector(".popup-current");

const popupPrev = document.querySelector(".popup-prev");
const popupNext = document.querySelector(".popup-next");
const popupPause = document.querySelector(".popup-pause");

let popupIndex = 0;
let popupTimer;
let isPopupPlaying = true;

function updatePopupSlider() {
  if (!popupTrack || popupSlides.length === 0) return;

  popupTrack.style.transform = "translateX(" + (-popupIndex * 100) + "%)";

  popupDots.forEach(function (dot) {
    dot.classList.remove("active");
  });

  if (popupDots[popupIndex]) {
    popupDots[popupIndex].classList.add("active");
  }

  if (popupCurrent) {
    popupCurrent.textContent = popupIndex + 1;
  }
}

function nextPopup() {
  popupIndex++;

  if (popupIndex >= popupSlides.length) {
    popupIndex = 0;
  }

  updatePopupSlider();
}

function prevPopup() {
  popupIndex--;

  if (popupIndex < 0) {
    popupIndex = popupSlides.length - 1;
  }

  updatePopupSlider();
}

function startPopupAuto() {
  popupTimer = setInterval(nextPopup, 2000);
}

function stopPopupAuto() {
  clearInterval(popupTimer);
}

if (popupNext) {
  popupNext.addEventListener("click", function () {
    nextPopup();
  });
}

if (popupPrev) {
  popupPrev.addEventListener("click", function () {
    prevPopup();
  });
}

if (popupPause) {
  popupPause.addEventListener("click", function () {
    if (isPopupPlaying) {
      stopPopupAuto();
      popupPause.innerHTML = '<i class="fa-solid fa-play"></i>';
      isPopupPlaying = false;
    } else {
      startPopupAuto();
      popupPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
      isPopupPlaying = true;
    }
  });
}

if (popupTrack && popupSlides.length > 0) {
  updatePopupSlider();
  startPopupAuto();
}
/* =========================
   floating quick menu + top
========================= */

const floatingQuick = document.querySelector(".floating-quick");
const quickToggle = document.querySelector(".quick-toggle");
const topButton = document.querySelector(".top-btn");

if (quickToggle && floatingQuick) {
  quickToggle.addEventListener("click", function () {
    floatingQuick.classList.toggle("open");
  });
}

if (topButton) {
  topButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
/* =========================
   weather api
========================= */

const weatherTemp = document.getElementById("weatherTemp");
const weatherText = document.getElementById("weatherText");
const weatherIcon = document.getElementById("weatherIcon");

const API_KEY = "5bc3aefbf6975f82f260043f6132ea00";

async function getWeather() {

  const city = "Sejong";

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`;

  try {

    const response = await fetch(url);
    const data = await response.json();

    const temp = Math.round(data.main.temp);
    const weather = data.weather[0].description;

    weatherTemp.innerText = `${temp}°`;
    weatherText.innerHTML = `${weather}`;

    // 날씨 아이콘 변경
    if (weather.includes("비")) {
      weatherIcon.className = "fa-solid fa-cloud-rain";
    }

    else if (weather.includes("구름")) {
      weatherIcon.className = "fa-solid fa-cloud";
    }

    else if (weather.includes("맑")) {
      weatherIcon.className = "fa-solid fa-sun";
    }

    else {
      weatherIcon.className = "fa-solid fa-cloud-sun";
    }

  } catch (error) {

    weatherText.innerText = "날씨 정보를 불러올 수 없습니다.";

  }
}

getWeather();

/* =========================
   pc all menu
========================= */

const pcMenuBtn = document.querySelector(".menu-btn");
const allMenu = document.querySelector(".all-menu");
const allMenuClose = document.querySelector(".all-menu-close");

if (pcMenuBtn && allMenu) {
  pcMenuBtn.addEventListener("click", function () {
    allMenu.classList.toggle("active");
  });
}

if (allMenuClose && allMenu) {
  allMenuClose.addEventListener("click", function () {
    allMenu.classList.remove("active");
  });
}
/* =========================
   추천코스 탭
========================= */

const courseButtons = document.querySelectorAll(".course-tabs button");
const courseName = document.getElementById("courseName");
const courseDesc = document.getElementById("courseDesc");
const courseImg = document.getElementById("courseImg");
const courseLevel = document.getElementById("courseLevel");
const courseDistance = document.getElementById("courseDistance");
const courseTime = document.getElementById("courseTime");

/* 별 이미지 함수 */
function makeStars(count) {
  let stars = "";

  for (let i = 0; i < count; i++) {
    stars += '<img src="sub_images/star.png" alt="난이도 별">';
  }

  return stars;
}

/* 코스별 데이터 */
const courseData = {
  1: {
    title: "1코스",
    desc: "가볍게 둘러볼 수 있는 추천코스입니다.",
    img: "sub_images/course01.jpg",
    level: 1,
    distance: "1 km",
    time: "1시간"
  },

  2: {
    title: "2코스",
    desc: "수목원의 아름다움과 희귀식물들을 구경하며 즐기는 코스입니다.",
    img: "sub_images/course02.jpg",
    level: 3,
    distance: "2 km",
    time: "2시간"
  },

  3: {
    title: "3코스",
    desc: "수목원 구석구석 탐방하며 즐기는 완전정복 코스입니다.",
    img: "sub_images/course03.jpg",
    level: 4,
    distance: "3 km",
    time: "3시간"
  }
};

/* 버튼 클릭 */
if (
  courseButtons.length &&
  courseName &&
  courseDesc &&
  courseImg &&
  courseLevel &&
  courseDistance &&
  courseTime
) {
  courseButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const course = button.dataset.course;
      const data = courseData[course];

      if (!data) return;

      courseButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      courseName.textContent = data.title;
      courseDesc.textContent = data.desc;
      courseImg.src = data.img;
      courseImg.alt = data.title;

      courseLevel.innerHTML = makeStars(data.level);
      courseDistance.textContent = data.distance;
      courseTime.textContent = data.time;
    });
  });
}

/* place slider */
if (document.querySelector(".place-swiper")) {
  const placeSwiper = new Swiper(".place-swiper", {
    slidesPerView: "auto",
    spaceBetween: 54,
    freeMode: true,
    grabCursor: true,

    scrollbar: {
      el: ".place-scrollbar",
      draggable: true,
    },

    breakpoints: {
      0: {
        spaceBetween: 36,
      },
      769: {
        spaceBetween: 54,
      },
    },
  });
}
// ====== ANNOUNCEMENT BAR ======
const announcementBar = document.querySelector(".announcement-bar");
const closeBar = document.querySelector(".close-bar");

if (closeBar) {
  closeBar.addEventListener("click", () => {
    announcementBar.classList.add("hidden");
  });
}

// ====== DROPDOWN MENU ======
const dropdown = document.querySelector(".dropdown");
const dropdownLink = dropdown.querySelector("a");

dropdownLink.addEventListener("click", function (e) {
  e.preventDefault();

  dropdown.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

// ====== REVIEWS SLIDER (SWIPER) ======
const swiper = new Swiper(".reviews-swiper", {
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    nextEl: ".arrow-right",
    prevEl: ".arrow-left",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 3,
    },
  },
});

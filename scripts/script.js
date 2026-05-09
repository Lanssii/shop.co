// ====== ANNOUNCEMENT BAR ====== //
const announcementBar = document.querySelector(".announcement-bar");
const closeBar = document.querySelector(".close-bar");

if (closeBar) {
  closeBar.addEventListener("click", () => {
    announcementBar.classList.add("hidden");
  });
}

// ===== COUNTER ANIMATION =====

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const target = +counter.dataset.target;

  let current = 0;

  const updateCounter = () => {
    const increment = target / 200;

    if (current < target) {
      current += increment;

      counter.innerText = Math.ceil(current).toLocaleString() + "+";

      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target.toLocaleString() + "+";
    }
  };

  updateCounter();
});

// ====== DROPDOWN MENU ====== //
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const dropdownLink = dropdown.querySelector("a");

  dropdownLink.addEventListener("click", function (e) {
    e.preventDefault();

    dropdowns.forEach((other) => {
      if (other !== dropdown) other.classList.remove("active");
    });

    dropdown.classList.toggle("active");
  });
});

// Close when clicking outside
document.addEventListener("click", function (e) {
  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });
});

// ====== REVIEWS SLIDER (SWIPER) ====== //
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

// ===== BURGER MENU =====

const headerNav = document.querySelector(".nav-links");
let headerNavContainer = document.querySelector(".header-nav-container");
let burgerMenu = document.querySelector(".burger-menu");
let sidebar = document.querySelector(".sidebar");
let overlay = document.querySelector(".overlay");
let closeBtn = document.querySelector(".close-btn");

function checkWidth() {
  if (window.innerWidth <= 1024) {
    headerNavContainer.style.display = "none";
    sidebar.appendChild(headerNav);
    burgerMenu.classList.add("show");
  } else {
    burgerMenu.classList.remove("show");
    headerNavContainer.style.display = "flex";
    headerNavContainer.appendChild(headerNav);
    overlay.classList.remove("show");
  }
}

checkWidth();
window.addEventListener("resize", checkWidth);

// ===== OPEN MENU =====
burgerMenu.addEventListener("click", () => {
  sidebar.classList.add("show");
  overlay.classList.add("show");
});

// ===== CLOSE MENU =====
function closeMenu() {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
}

// Close when clicking overlay
overlay.addEventListener("click", (e) => {
  e.stopPropagation();
  closeMenu();
});

// Close when clicking close button
closeBtn.addEventListener("click", closeMenu);

// Close when clicking outside menu
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !burgerMenu.contains(e.target)) {
    closeMenu();
  }
});

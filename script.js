// Select all pages and buttons
const pages = document.querySelectorAll(".book-page");
const pageTurnBtns = document.querySelectorAll(".nextprev-btn");

// Ensure correct stacking order for pages
pages.forEach((page, index) => {
  page.style.zIndex = 10 - index;
});

// Page turn animation
pageTurnBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetPage = document.getElementById(btn.getAttribute("data-page"));

    if (targetPage) {
      if (targetPage.classList.contains("turn")) {
        targetPage.classList.remove("turn");
        setTimeout(() => {
          targetPage.style.zIndex = 10 - Array.from(pages).indexOf(targetPage);
        }, 500);
      } else {
        targetPage.classList.add("turn");
        setTimeout(() => {
          targetPage.style.zIndex = 10 + Array.from(pages).indexOf(targetPage);
        }, 500);
      }
    }
  });
});

// Contact Me button function
const contactMeBtn = document.querySelector(".btn.contact-me");
if (contactMeBtn) {
  contactMeBtn.addEventListener("click", () => {
    pages.forEach((page, index) => {
      setTimeout(() => {
        page.classList.add("turn");
        setTimeout(() => {
          page.style.zIndex = 20 + index;
        }, 500);
      }, (index + 1) * 200 + 100);
    });
  });
}

// Profile back button
const backProfileBtn = document.querySelector(".back-profile");
if (backProfileBtn) {
  backProfileBtn.addEventListener("click", () => {
    pages.forEach((_, index) => {
      setTimeout(() => {
        pages[index].classList.remove("turn");
        setTimeout(() => {
          pages[index].style.zIndex = 10 + index;
        }, 500);
      }, (index + 1) * 200 + 100);
    });
  });
});

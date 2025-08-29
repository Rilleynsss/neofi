const burgerButton = document.querySelector(".header-menu");
const modalLinks = document.querySelectorAll(".header-nav_item");
const modal = document.querySelector(".header-nav");
const slider = document.querySelector(".testimonial-list");
const faqList = document.querySelectorAll(".faq-content-list_item");
const DEFAULT_SPEED = 1;
const changeModalActive = () => {
  if (burgerButton.classList.length > 1) {
    document.body.classList.remove("modal_open");

    modal.classList.remove("header-nav_modal_open");
    modal.classList.add("header-nav_modal_close");
    setTimeout(() => {
      modal.classList.remove("header-nav_modal_close");
    }, 500);
    burgerButton.classList.remove("header-menu_open");
  } else {
    document.body.classList.add("modal_open");
    modal.classList.add("header-nav_modal_close");
    setTimeout(() => {
      modal.classList.add("header-nav_modal_open");
      modal.classList.remove("header-nav_modal_close");
    }, 30);
    burgerButton.classList.add("header-menu_open");
  }
};

const initSlider = () => {
  if (!slider) return;
  let pos = 0;
  slider.innerHTML += slider.innerHTML;
  let count = 1;
  function animate() {
    const childs = slider.querySelectorAll("li");
    pos -= DEFAULT_SPEED;
    if (pos < -(childs[count - 1].clientWidth + 20) * count) {
      count += 1;
      if (count > 6) {
        count = 1;
        pos = 0;
      }
    }
    slider.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animate);
  }
  animate();
};
initSlider();

faqList.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.length == 1) {
      item.classList.add("faq_active");
      console.log("ss");
    } else {
      item.classList.remove("faq_active");
      console.log("aa");
    }
  });
});
modalLinks.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.screen.width < 1200) {
      changeModalActive();
    }
  });
});

burgerButton.addEventListener("click", () => {
  changeModalActive();
});

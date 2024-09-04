// ********** set date ************
// select span
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    if (
      e.currentTarget.getAttribute("href") !== "contact.html"
      //||e.currentTarget.getAttribute("href") !== "index.html"
    ) {
      e.preventDefault();
      links.classList.remove("show-links");

      const id = e.currentTarget.getAttribute("href").slice(1);
      const element = document.getElementById(id);
      //
      let position = element.offsetTop - 90;

      window.scrollTo({
        left: 0,
        // top: element.offsetTop,
        top: position,
        behavior: "smooth",
      });
    } else {
      return;
    }
  });
});

///////////////////////////////////////

// ********** smooth scroll ************
// select links
const scrollLinksHero = document.querySelectorAll(".scroll-link-hero");
scrollLinksHero.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    if (
      e.currentTarget.getAttribute("href") !== "contact.html"
      //|| e.currentTarget.getAttribute("href") !== "index.html"
    ) {
      e.preventDefault();
      //links.classList.remove("show-links");

      const id = e.currentTarget.getAttribute("href").slice(1);
      const element = document.getElementById(id);
      //
      let position = element.offsetTop - 90;

      window.scrollTo({
        left: 0,
        // top: element.offsetTop,
        top: position,
        behavior: "smooth",
      });
    } else {
      return;
    }
  });
});

///////////////////////////////////////

// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };
  setInterval(nextSlide, 3000);

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  //btnRight.addEventListener("click", nextSlide);
  //btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

// QUESTIONS

// traversing the dom
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log("clicked");
    const question = e.currentTarget.parentElement.parentElement;
    const questionTitleP = e.currentTarget.previousElementSibling;

    //question.classList.toggle("show-text");
    if (question.classList.contains("show-text")) {
      question.classList.remove("show-text");
      question.classList.add("rotate-icon");
      questionTitleP.style.fontWeight = "400";
    } else {
      question.classList.add("show-text");
      questionTitleP.style.fontWeight = "700";
    }
  });
});

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

// Buttons
const prevBtn = document.querySelector("#prevtBtn");
const nextBtn = document.querySelector("#nextBtn");

// conuter
let conuter = 1;
// const size = carouselImages[0].clientWidth; // this doesn't work
const size = 500;

carouselSlide.style.transform = `translateX(${-size * conuter}px)`;

//button listener

nextBtn.addEventListener("click", () => {
  carouselSlide.style.transition = "transform .3s ease-in-out";
  conuter++;
  carouselSlide.style.transform = `translateX(${-size * conuter}px)`;
});

prevBtn.addEventListener("click", () => {
  carouselSlide.style.transition = "transform .3s ease-in-out";
  conuter--;
  carouselSlide.style.transform = `translateX(${-size * conuter}px)`;
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[conuter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    conuter = carouselImages.length - 2;
    carouselSlide.style.transform = `translateX(${-size * conuter}px)`;
  }

  if (carouselImages[conuter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    conuter = carouselImages.length - conuter;
    carouselSlide.style.transform = `translateX(${-size * conuter}px)`;
  }
});

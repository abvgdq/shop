export const armSlider = () => {
  const chevronLeft = document.querySelector(".slider__chevron-left");
  const chevronRight = document.querySelector(".slider__chevron-right");
  const sliderItem1 = document.querySelectorAll(".slider__item1");
  const dots = document.querySelectorAll(".slider__dot");
  const sliderDots = document.querySelector(".slider__dots");
  const dotActive = document.querySelector(".active-dot");
  let currentWidthSlider = document.querySelector(".slider__container").clientWidth;
  let numSlider = sliderItem1.length - 1;
  let count = 0;
  let currentSlider = 0;

  chevronRight.addEventListener("click", function () {
    if (currentSlider === numSlider) {
      return;
    }
    
    count += currentWidthSlider;
    currentSlider += 1;

    dots.forEach((item) => {
      item.classList.remove("active-dot");
    });
    document.querySelector(`[data-${currentSlider}]`).classList.add("active-dot");
    sliderItem1.forEach((item) => {
      item.style.transform = `translateX(-${count}px)`;
    });
  });

  chevronLeft.addEventListener("click", function () {
    if (currentSlider === 0) {
      return;
    }
    count -= currentWidthSlider;
    currentSlider -= 1;
    dots.forEach((item) => {
      item.classList.remove("active-dot");
    });
    document.querySelector(`[data-${currentSlider}]`).classList.add("active-dot");
    sliderItem1.forEach((item) => {
      item.style.transform = `translateX(-${count}px)`;
    });
  });

  sliderDots.addEventListener("click", function (event) {
    const isSliderDot = event.target.classList[0] === "slider__dot";
    if (!isSliderDot) {
      return;
    }
    dots.forEach((item) => {
      item.classList.remove("active-dot");
    });

    if (isSliderDot) {
      event.target.classList.add("active-dot");
    }
    
    const currentDotSlider = event.target.dataset.item;
    count = currentWidthSlider * Number(currentDotSlider - 1);
    currentSlider = Number(currentDotSlider - 1);

    sliderItem1.forEach((item) => {
      item.style.transform = `translateX(-${count}px)`;
    });
  });

  window.addEventListener('resize', function() {
    currentWidthSlider = document.querySelector(".slider__container").clientWidth;
  })
}

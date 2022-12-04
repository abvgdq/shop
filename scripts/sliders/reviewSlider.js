export const reviewSlider = () => {
    const reviewsChevronLeft = document.querySelector(".rewiews__chevron-left")
    const reviewsChevronRight = document.querySelector(".rewiews__chevron-right")
    const reviews = document.querySelectorAll(".rewiew")
    let currentWidthReview = document.querySelector(".rewiews__list")
    let numReview = reviews.length - 1;
    let meaning = 0;
    let currentReview = 0;
    
    reviewsChevronRight.addEventListener("click", function(){
          if (currentReview === numReview) {
            return;
          }
          meaning += currentWidthReview.clientWidth;;
          currentReview += 1;
          reviews.forEach((item) => {
            item.style.transform = `translateX(-${meaning}px)`;
          });
        });    
    
    reviewsChevronLeft.addEventListener('click', function(){
          if (currentReview === numReview) {
            return;
          }
          meaning += currentWidthReview.clientWidth;;
          currentReview -= 1;
          reviews.forEach((item) => {
            item.style.transform = `translateX(-${meaning}px)`;
          });
        });    
    }

 
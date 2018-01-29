
function slider() {
    $('.slider-inner').slick({
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      prevArrow:'<button class="slick-prev slick-arrow icon-left-open" aria-label="Previous" type="button"></button>',
      nextArrow:'<button class="slick-next slick-arrow icon-right-open" aria-label="Next" type="button"></button>'
    });


    $('.study-slider').slick({
      infinite: true,
      arrows:false,
      dots: true
    });

    $('.study-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){

        let activeSlide = this.querySelector(`.slick-active`),
            activeSlideImg = activeSlide.getAttribute('data-img'),
            studyImg = document.querySelector(`.study-img`),
            studyImgUrl = studyImg.getAttribute('data-url');

            studyImg.style.cssText += `background-image: url(${studyImgUrl}${activeSlideImg});`
    });
}

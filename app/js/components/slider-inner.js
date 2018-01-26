
function slider() {
    $('.slider-inner').slick({
      infinite: true,
      prevArrow:'<button class="slick-prev slick-arrow icon-left-open" aria-label="Previous" type="button"></button>',
      nextArrow:'<button class="slick-next slick-arrow icon-right-open" aria-label="Next" type="button"></button>'
    });


    $('.study-slider').slick({
      infinite: true,
      arrows:false,
      dots: true
    });

    $('.study-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){

        let activeSlide = this.querySelector(`.slick-active`),
            activeSlideImg = activeSlide.getAttribute('data-img'),
            studyImg = document.querySelector(`.study-img`);

            studyImg.style.cssText += " background-image: url(images/study-img.jpg);"

            // background-image: url(images/study-img.jpg);
        // 'data-slick-index="'nextSlide'

        // data-slick-index="#{nextSlide}"

       console.log(studyImg);

    });
}


function ggg (event, slick, currentSlide, nextSlide) {


}

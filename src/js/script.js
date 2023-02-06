$(document).ready(function(){
    $('.slider__inner').slick({
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1,
        variableWidth: true,
        focusOnSelect: true,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
				nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
  });
          


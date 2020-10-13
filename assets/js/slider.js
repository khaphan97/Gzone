$(document).ready(function () {
      //Slider
  $(".multiple-items").slick({
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: ".slider__next",
    prevArrow: ".slider__prev",
    // mobileFirst: true,
    responsive: [
      {
        breakpoint: 739,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  });
});
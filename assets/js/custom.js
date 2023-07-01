(function ($) {
  "use strict";

  /////   Slick Slider /////

  // main page slider certificates
  $(".certificates-items").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".certificates-prev"),
    nextArrow: $(".certificates-next"),
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 700,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // main page slider bestsellers + progressBar
  const $slider = $("#slider");
  let $progressBar = $(".progressBar__bar");

  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    let calc = (nextSlide / (slick.slideCount - 1)) * 100;
    $progressBar
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);
  });

  $slider.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $(".progressBar-prev"),
    nextArrow: $(".progressBar-next"),
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 700,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // page product slider filter

  $(".filter-product-carousel").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: $(".filter-carousel-prev"),
    nextArrow: $(".filter-carousel-next"),
    infinite: true,
    slickdots: false,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
    
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // dropdown Footer Bootstrap

  $(document).ready(function () {
    $(".dropdown-toggle-js").dropdown();
  });
})(window.jQuery);




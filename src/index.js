import "../node_modules/bootstrap/dist/js/bootstrap";

import "./css/styles.scss";
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow: $("#t_c_prevbtn"),
    nextArrow: $("#t_c_nextbtn"),
    infinite: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".slick-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true,
    infinite: true,
    prevArrow: $("prev"),
    nextArrow: $("next"),
  });
  $(".carousel").carousel({
    interval: 6000,
    pause: "false",
  });
  $(".m_c_prevbtn").on("click", function () {
    $(".main_slider > .carousel").carousel("prev");
  });
  $(".m_c_nextbtn").on("click", function () {
    $(".main_slider > .carousel").carousel("next");
  });
});

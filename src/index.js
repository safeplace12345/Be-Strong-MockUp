import "../node_modules/popper.js/dist/popper";
import "../node_modules/jquery/dist/jquery";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap"
import "./css/styles.scss";
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    focusOnSelect: true,
    arrows: true,
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
    prevArrow:$('prev'),
    nextArrow:$('next'),
  });
  $(".carousel").carousel({
    interval: 6000,
    pause: "false",
  });
});

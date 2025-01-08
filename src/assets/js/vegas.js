import "vegas/dist/vegas.min.css";
import "vegas/dist/vegas.min.js";
import overLay from "vegas/dist/overlays/08.png";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpg";

$(function () {
  $(".header__vegas").vegas({
    delay: 5000,
    cover: true,
    transitionDuration: 2000,
    transition: "fade2",
    shuffle: true,
    animation: "kenburnsUp",
    slides: [
      { src: slide1 },
      { src: slide2 },
      { src: slide3 },
      { src: slide4 },
    ],
    overlay: overLay,
  });
});

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import product5 from "../assets/images/product5.png";
import product6 from "../assets/images/product6.png";

function OurProducts() {
  const imgs = [product1, product2, product3, product4, product5, product6];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-6">
      <Slider {...settings}>
        {imgs.map((img) => (
          <div key={Math.random()} className="text-center px-3">
            <img src={img} alt="" className="mx-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OurProducts;

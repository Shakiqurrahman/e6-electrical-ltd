import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import product5 from "../assets/images/product5.png";
// import product6 from "../assets/images/product6.png"

function OurProducts() {
  return (
    <div className="flex items-center gap-4 mt-6 text-center">
      <img
        src={product1}
        alt=""
        className="basis-1/3 sm:basis-1/4 md:basis-1/5 h-[100px] object-contain"
      />
      <img
        src={product2}
        alt=""
        className="basis-1/3 sm:basis-1/4 md:basis-1/5 h-[100px] object-contain"
      />
      <img
        src={product3}
        alt=""
        className="basis-1/3 sm:basis-1/4 md:basis-1/5 h-[100px] object-contain"
      />
      <img
        src={product4}
        alt=""
        className="basis-1/3 sm:basis-1/4 md:basis-1/5 h-[100px] object-contain"
      />
      <img
        src={product5}
        alt=""
        className="basis-1/3 sm:basis-1/4 md:basis-1/5 h-[100px] object-contain"
      />
    </div>
  );
}

export default OurProducts;

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import img1 from "../assets/images/hero-photo-01.jpg";
import img2 from "../assets/images/hero-photo-02.jpg";
import BookingModal from "./BookingModal";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <section className="hero-bg">
      <div className="text-white max-width gap-8 flex flex-col lg:flex-row h-full py-20 md:py-32">
        <div className="flex-1 flex flex-col items-center lg:items-start mb-16 lg:mb-0">
          <h1 className="text-4xl xl:text-[55px] font-bold md:leading-tight mb-4 text-center lg:text-left">
            Electrical Installation Service in London
          </h1>
          <p className="text-lg mb-10 text-center lg:text-left">
            We have 15 years experience in electrical installation, we
            guaranteed our job for 10 years
          </p>
          <button
            className="group py-3.5 px-5 lg:px-6 rounded-lg bg-primary hover:bg-white duration-300 text-white hover:text-primary font-bold text-[12px] sm:text-[15px] flex items-center gap-2.5"
            onClick={handleOpen}
          >
            BOOK NOW
            <FaArrowRight className="group-hover:ml-1 duration-300 text-[18px]" />
          </button>
          {open && <BookingModal handleOpen={handleOpen} />}
        </div>
        <div className="flex flex-1 mx-4 gap-4 md:gap-8 justify-center">
          <img
            className="w-1/2 md:w-60 rounded-xl -translate-y-6"
            src={img2}
            alt=""
          />
          <img
            className="w-1/2 md:w-60 rounded-xl translate-y-6"
            src={img1}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

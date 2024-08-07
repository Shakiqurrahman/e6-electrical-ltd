import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import BookingModal from "./BookingModal";

function ServicePageCard({
  direction = "flex-row",
  thumbnail = "",
  icon = "",
  title = "",
  desc = "",
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div className={`mt-10 sm:mt-20 flex items-center flex-wrap ${direction}`}>
      <div className="w-full md:w-1/2">
        <img
          src={thumbnail}
          alt=""
          className="h-[250px] sm:h-[450px] object-cover w-full"
        />
      </div>
      <div className="w-full md:w-1/2 shadow-service-card p-5 sm:p-10 text-center mt-4 md:my-0">
        <img src={icon} alt="" className="h-[80px] lg:h-[150px] mx-auto" />
        <h1 className="text-xl lg:text-3xl font-semibold my-5">{title}</h1>
        <p className="font-normal lg:font-medium">{desc}</p>
        <a
          href="tel:+440207965659"
          className="text-2xl text-primary flex items-center gap-3 justify-center my-5"
        >
          <FaPhoneAlt className="text-2xl" />
          0207965659
        </a>
        <button
          onClick={handleOpen}
          className=" bottom-8 bg-primary text-white font-medium px-6 py-3 inline-block rounded-md text-[15px] duration-300 group hover:bg-secondary hover:text-black"
        >
          BOOK NOW
        </button>
        {open && <BookingModal handleOpen={handleOpen} />}
      </div>
    </div>
  );
}

export default ServicePageCard;

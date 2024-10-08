import { useState } from "react";
import bgImg from "../../../assets/images/call-to-action-bg.jpg";
import BookingModal from "../../BookingModal";
function FooterServiceCard() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div className="max-width mb-[-100px] relative">
      <div
        className="px-[30px] py-[60px] rounded-[20px] bg-bottom"
        style={{
          background: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url(${bgImg}) no-repeat`,
        }}
      >
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-primary font-medium uppercase text-[22px]">
            E7 Electrical Ltd
          </h1>
          <p className="text-[18px] sm:text-[26px] font-medium my-5">
            &quot; Enhance your home&apos;s safety and comfort with E7
            Electrical. Schedule expert repair, installation, inspection, and
            electrical services for peace of mind and reliability. &quot;
          </p>
          <button
            onClick={handleOpen}
            className=" bg-primary text-white font-medium px-6 py-3 inline-block rounded-md text-[15px] duration-300 group hover:bg-white border border-transparent hover:border-primary hover:text-primary"
          >
            <svg
              aria-hidden="true"
              className="e-font-icon-svg e-fab-wpforms h-[15px] fill-white group-hover:fill-primary duration-300 inline-block me-2 mb-1"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M448 75.2v361.7c0 24.3-19 43.2-43.2 43.2H43.2C19.3 480 0 461.4 0 436.8V75.2C0 51.1 18.8 32 43.2 32h361.7c24 0 43.1 18.8 43.1 43.2zm-37.3 361.6V75.2c0-3-2.6-5.8-5.8-5.8h-9.3L285.3 144 224 94.1 162.8 144 52.5 69.3h-9.3c-3.2 0-5.8 2.8-5.8 5.8v361.7c0 3 2.6 5.8 5.8 5.8h361.7c3.2.1 5.8-2.7 5.8-5.8zM150.2 186v37H76.7v-37h73.5zm0 74.4v37.3H76.7v-37.3h73.5zm11.1-147.3l54-43.7H96.8l64.5 43.7zm210 72.9v37h-196v-37h196zm0 74.4v37.3h-196v-37.3h196zm-84.6-147.3l64.5-43.7H232.8l53.9 43.7zM371.3 335v37.3h-99.4V335h99.4z"></path>
            </svg>
            BOOK NOW
          </button>
          {open && <BookingModal handleOpen={handleOpen} />}
        </div>
      </div>
    </div>
  );
}

export default FooterServiceCard;

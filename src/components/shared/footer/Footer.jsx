import { FaFacebookF } from "react-icons/fa6";
import { IoCall, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";
import card from "../../../assets/images/card.png";
import logo from "../../../assets/images/logo.png";
import Copyright from "./Copyright";
import FooterServiceCard from "./FooterServiceCard";

const Footer = () => {
  return (
    <footer className="mt-20">
      {/* ==== footer service card ==== */}
      <FooterServiceCard />

      {/* ==== footer content ==== */}
      <div className="bg-navy">
        <div className="max-width pt-[130px] pb-[40px]">
          <div className="flex items-center justify-between mb-8 flex-wrap sm:flex-nowrap gap-4">
            <div className="flex items-center basis-full sm:basis-auto">
              <img
                className="w-20"
                src={logo}
                alt="Logo of E6 Electronics Ltd"
              />
              <div>
                <h2 className="uppercase font-bold text-[20px] sm:text-[26px] leading-tight text-secondary">
                  E6 Electrical LTD
                </h2>
                <p className="uppercase text-[12px] text-white">
                  Excellence In Electrical services
                </p>
              </div>
            </div>
            <div className=" border-t flex-grow border-dashed mx-10 basis-full sm:basis-auto"></div>
            <div className="flex items-center gap-4 basis-full sm:basis-auto">
              <a href="tel:+4402070965659">
                <IoCall className="text-3xl sm:text-5xl text-secondary" />
              </a>
              <div className="text-white">
                <a
                  href="tel:+4402070965659"
                  className="text-lg sm:text-[29px] font-bold"
                >
                  02070965659
                </a>
                <p className="text-[14px] text-[#bebebe]">
                  Mon to Sat 8:00 AM to 6:00 PM
                </p>
              </div>
            </div>
          </div>
          {/* footer cards */}
          <div className="flex gap-8 flex-wrap sm:flex-nowrap">
            <div className="basis-full sm:basis-1/3">
              <p className="text-[#bebebe] mb-4">
                E6 Electrical: Excellence in electrical services since 2015.
                Specializing in inspections, certifications, installations, and
                testing for domestic, commercial, and industrial spaces. Your
                trusted choice for quality and affordability.
              </p>
              <div className="flex items-center gap-3">
                <a href="">
                  <FaFacebookF className="text-white text-xl duration-300 hover:text-secondary" />
                </a>
                <a href="">
                  <IoLogoTwitter className="text-white text-xl duration-300 hover:text-secondary" />
                </a>
                <a href="">
                  <IoLogoYoutube className="text-white text-xl duration-300 hover:text-secondary" />
                </a>
              </div>
            </div>
            <div className="basis-full sm:basis-1/3">
              <h1 className="text-white text-3xl font-bold">Useful Links</h1>
              <ul>
                <li className="mt-3">
                  <Link
                    to={"/about"}
                    className="text-[#bebebe] duration-300 hover:text-secondary"
                  >
                    About
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to={"/terms-and-conditions"}
                    className="text-[#bebebe] duration-300 hover:text-secondary"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to={"/privacy-policy"}
                    className="text-[#bebebe] duration-300 hover:text-secondary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to={"/contact"}
                    className="text-[#bebebe] duration-300 hover:text-secondary"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="basis-full sm:basis-1/3">
              <h1 className="text-3xl text-white font-bold">
                Useful Information
              </h1>
              <p className="text-[#bebebe] my-3">
                For all inquiries we aim to respond within two days. We accept
                all major payment cards.
              </p>
              <img src={card} alt="" className="h-9" />
            </div>
          </div>
        </div>
      </div>

      {/* ==== copyright ==== */}
      <Copyright />
    </footer>
  );
};

export default Footer;

import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import ContactForm from "../components/ContactForm";
import Banner from "../components/shared/Banner";

function ContactPage() {
  const pageName = "Contact Us";
  return (
    <>
      {/* ==== Banner Section ==== */}
      <Banner pageName={pageName} />

      <div className="max-width">
        <div className="flex items-center mt-10 flex-wrap">
          <div className="w-full lg:w-1/2 text-center lg:text-start mb-6 lg:mb-0">
            <h1 className="text-3xl font-semibold mb-5">Get in touch</h1>
            <p className="text-base flex items-center gap-2 font-medium justify-center lg:justify-start">
              <FaPhoneAlt className="text-sm" />
              02070 965659
            </p>
            <p className="text-base flex items-center gap-2 font-medium justify-center lg:justify-start">
              <FaRegEnvelope className="text-sm" />
              contact@e6electricalltd.co.uk
            </p>
            <h1 className="text-3xl font-semibold my-5">Hours</h1>
            <p className="text-base flex items-center gap-2 font-medium justify-center lg:justify-start">
              <MdOutlineWatchLater className="text-sm" />
              Mon to Sat 8:00 Am to 6:00 PM
            </p>
          </div>
          <ContactForm />
        </div>
        <div className="flex items-center mt-10 flex-wrap">
          <div className="w-full md:w-1/2 pr-0 md:pr-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317774.9427682643!2d-0.070877!3d51.520247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb607595b4d%3A0xf4fb28981ddb5f71!2s5%205%2C%2060%20Hanbury%20St%2C%20London%20E1%205JL%2C%20UK!5e0!3m2!1sen!2sus!4v1723026108016!5m2!1sen!2sus"
              style={{
                border: 0,
                height: "350px",
                width: "100%",
                borderRadius: "2px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="w-full md:w-1/2 mt-5 md:mt-0 text-center md:text-start">
            <h1 className="text-3xl font-semibold mb-5">Visit Us</h1>
            <p>
              Unit 5 Unit 5, 60 Hanbury Street - E1 5JL <br /> London, United
              Kingdom,
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;

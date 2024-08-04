import React from "react";
import aboutImg from '../assets/images/about-img.jpg'

const AboutUs = () => {
    return (
        <section className="max-width my-16 sm:my-20 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full">
                <h1 className="text-[32px] text-primary font-semibold mb-4">E6 Electrical Ltd.</h1>
                <p className="mb-4 text-justify text-lg">
                    Welcome to E7 Electrical Ltd – where excellence meets
                    affordability in electrical services. Since our
                    establishment in February 2015, we’ve been committed to
                    delivering professional solutions at competitive prices.
                </p>
                <p className="text-justify text-lg">
                    At E7 Electrical, we specialize in inspection and testing,
                    fault findings, and certification for a range of spaces –
                    from homes to commercial and industrial premises. Our
                    services extend to electrical installations, fire alarms
                    (Grade A, Grade D), emergency lighting, and PAT testing.
                </p>
            </div>
            <div className="w-full">
                <img className="w-full md:w-4/5 mx-auto rounded-xl" src={aboutImg} alt="About Image" />
            </div>
        </section>
    );
};

export default AboutUs;

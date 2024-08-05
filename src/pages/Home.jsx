import Heading from "../components/Heading";
import Hero from "../components/Hero";
import OurProcess from "../components/OurProcess";
import OurProducts from "../components/OurProducts";
import OurServices from "../components/OurServices";
import WorkGallery from "../components/WorkGallery";

const Home = () => {
  return (
    <>
      {/* ==== Hero Section ==== */}
      <Hero />

      {/* What We Do Section */}
      <section className="max-width py-6">
        <Heading>What We Do</Heading>
        <OurServices />
      </section>

      {/* ==== Our Process Section ==== */}
      <section className="max-width py-6">
        <Heading>Our Process</Heading>
        <OurProcess />
      </section>

      {/* ==== Works Gallery Section ==== */}
      <section className="max-width py-6">
        <Heading>Our Works Gallery</Heading>
        <WorkGallery />
      </section>

      {/* ==== Our Products Section ==== */}
      <section className="max-width py-6">
        <Heading>We Use Those Products</Heading>
        <OurProducts />
      </section>
    </>
  );
};

export default Home;

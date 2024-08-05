import certificateIcon from "../assets/images/icons/certificate-icon-1.png";
import serviceIcon from "../assets/images/icons/service-icon.png";
import service1 from "../assets/images/services/service1.jpg";
import service2 from "../assets/images/services/service2.jpg";
import service3 from "../assets/images/services/service3.jpg";
import service4 from "../assets/images/services/service4.png";
import service5 from "../assets/images/services/service5.jpg";
import service6 from "../assets/images/services/service6.jpg";
import service7 from "../assets/images/services/service7.jpg";
import ServiceCard from "./ServiceCard";

function OurServices() {
  const services = [
    {
      icon: serviceIcon,
      iconText: "Services",
      image: service1,
      title: "Complete Electrical Installation With 10 Year Warranty",
    },
    {
      icon: serviceIcon,
      iconText: "Services",
      image: service2,
      title: "Consumer Unit / Fuse Box Replacement / Upgrade",
    },
    {
      icon: certificateIcon,
      iconText: "Certificate",
      image: service3,
      title: "Landlord Certificate Part P",
    },
    {
      icon: certificateIcon,
      iconText: "Certificate",
      image: service4,
      title: "Smoke Alarm Certificate for Domestic or Commercial Properties",
    },
    {
      icon: certificateIcon,
      iconText: "Certificate",
      image: service5,
      title: "Pat Testing Certificate",
    },
    {
      icon: certificateIcon,
      iconText: "Certificate",
      image: service6,
      title:
        "Emergency Lighting Certificate for Domestic Commercial or Industrial Premises",
    },
    {
      icon: certificateIcon,
      iconText: "Certificate",
      image: service7,
      title:
        "Electrical Safety Certificate for Domestic Commercial or Industrial Properties",
    },
  ];
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
      {services.map((service) => (
        <ServiceCard
          key={Math.random()}
          icon={service.icon}
          iconText={service.iconText}
          image={service.image}
          title={service.title}
        />
      ))}
    </div>
  );
}

export default OurServices;

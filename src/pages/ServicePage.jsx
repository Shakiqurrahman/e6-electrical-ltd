import ServicePageCard from "../components/ServicePageCard";
import Banner from "../components/shared/Banner";
import serviceData from "../custom-api/servicepagecardsapi";

function ServicePage() {
  const pageName = "Our Services";
  return (
    <>
      {/* ==== Banner Section ==== */}
      <Banner pageName={pageName} />

      <div className="max-width">
        {serviceData.map((item) => {
          if (item.id % 2 == 0) {
            return (
              <ServicePageCard
                direction="flex-row-reverse"
                thumbnail={item.thumbnail}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                key={item.id}
              />
            );
          } else {
            return (
              <ServicePageCard
                thumbnail={item.thumbnail}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                key={item.id}
              />
            );
          }
        })}
      </div>
    </>
  );
}

export default ServicePage;

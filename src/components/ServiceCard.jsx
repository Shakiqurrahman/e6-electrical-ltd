function ServiceCard({ icon, iconText, title, image }) {
  return (
    <div className="p-3 rounded-lg shadow-card hover:shadow-card-hover duration-300 relative text-center">
      <div className="absolute p-[3px] bg-[#ebebeb] rounded-[20px] top-5 right-5">
        <span className=" flex bg-white text-xs px-2 py-1 rounded-[20px] items-center gap-2">
          <img src={icon} alt="" className="h-4 w-4" /> {iconText}
        </span>
      </div>
      <img
        src={image}
        alt=""
        className="rounded-lg block w-full h-[260px] object-cover"
      />
      <div className="flex-col flex gap-5 py-8 px-3 items-center">
        <h1 className="text-lg sm:text-2xl font-semibold">{title}</h1>
        <a
          href=""
          className="bg-primary text-white font-medium px-6 py-3 inline-block rounded-md text-[15px] duration-300 group hover:bg-secondary hover:text-black"
        >
          BOOK NOW
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;

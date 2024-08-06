import { useState } from "react";
import BookingModal from "./BookingModal";

function ServiceCard({ icon, iconText, title, image }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
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
            <div className="flex flex-col gap-5 py-8 px-3 items-center pb-24">
                <h1 className="text-lg sm:text-2xl font-semibold">{title}</h1>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleOpen}
                    className="absolute bottom-8 bg-primary text-white font-medium px-6 py-3 inline-block rounded-md text-[15px] duration-300 group hover:bg-secondary hover:text-black"
                >
                    BOOK NOW
                </button>
                {open && <BookingModal handleOpen={handleOpen} />}
            </div>
        </div>
    );
}

export default ServiceCard;

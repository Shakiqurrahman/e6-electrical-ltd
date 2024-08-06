import React, { useState } from "react";
import { MdMiscellaneousServices } from "react-icons/md";
import { Link } from "react-router-dom";
import BookingModal from "./BookingModal";

const ServicesPricing = () => {
    const [open, setOpen] = useState(false);

    // for toggling the modal to switch off/on!
    const handleOpen = () => setOpen(!open);

    const servicesData = [
        {
            desq: "Switch or Aocket Add on",
            price: "£80",
        },
        {
            desq: "Smoke Alarm Installation",
            price: "£120/PP",
        },
        {
            desq: "Fault Finding",
            price: "£120",
        },
    ];
    return (
            <section className="w-full lg:w-1/2 relative p-5 py-10 shadow-xl rounded-xl flex flex-col items-center border border-gray-200">
                <div className="absolute top-[-40px] size-20 rounded-full flex justify-center items-center p-4 bg-primary">
                    <MdMiscellaneousServices className="w-full text-[40px] text-white" />
                </div>
                <h1 className="text-[28px] font-semibold mt-3">Services</h1>
                <table className="mt-4 mb-24 rounded-t-xl overflow-hidden w-full text-center">
                    <tr className="w-2/3 bg-secondary">
                        <th className="p-4 text-lg">Description</th>
                        <th className="p-4 text-lg">Prices</th>
                    </tr>
                    <tr className="w-2/3 text-[#6d7882] bg-[#80808012]">
                        <th className="p-3.5 text-sm">CALL OUT</th>
                        <th className="p-3.5 text-sm">
                            £100 FIRST HOUR THEN <br />
                            £40 PER HALF AN HOUR
                        </th>
                    </tr>
                    {servicesData.map((item, index) => (
                        <tr
                            className="w-1/3 text-[#6d7882] even:bg-[#80808012] odd:bg-[#ebebeb]"
                            key={index}
                        >
                            <td className="p-3.5 text-base">{item.desq}</td>
                            <td className="p-3.5 text-base">{item.price}</td>
                        </tr>
                    ))}
                </table>
                <button
                    onClick={handleOpen}
                    className="absolute bottom-10  bg-primary text-white font-medium px-6 py-3 inline-block rounded-md text-[15px] duration-300 group hover:bg-white border border-transparent hover:border-primary hover:text-primary"
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
            </section>
    );
};

export default ServicesPricing;

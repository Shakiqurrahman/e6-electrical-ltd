import React from "react";
import visionBg from "../assets/images/vision-bg.jpg";
import { MdDone } from "react-icons/md";

const Vision = () => {
    return (
        <section
            className="py-16 mb-20"
            style={{
                background: `linear-gradient(rgba(255, 255, 255, 0.846), rgba(255, 255, 255, 0.857)), url(${visionBg})`,
            }}
        >
            <div className="max-width">
                <h1 className="text-[32px] text-primary font-semibold mb-4">Our Vision</h1>
                <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                <ul className="text-lg w-full space-y-2">
                    <li className="flex items-center gap-2"><MdDone className="text-red-500 text-xl flex-shrink-0"/>Reliability: Every connection is a beacon of trust.</li>
                    <li className="flex items-center gap-2"><MdDone className="text-red-500 text-xl flex-shrink-0"/>Innovation: Continuous improvement for cutting-edge solutions.</li>
                    <li className="flex items-center gap-2"><MdDone className="text-red-500 text-xl flex-shrink-0"/>Safety: Prioritizing well-being through strict adherence to safety standards.
                    </li>
                </ul>
                <ul className="text-lg w-full space-y-2">
                    <li className="flex items-center gap-2"><MdDone className="text-red-500 text-xl flex-shrink-0"/>Efficiency: Pioneering energy-saving practices for sustainability.
                    </li>
                    <li className="flex items-center gap-2"><MdDone className="text-red-500 text-xl flex-shrink-0"/>Excellence: Setting a benchmark for quality in every service we provide.</li>
                </ul>
                </div>
            </div>
        </section>
    );
};

export default Vision;

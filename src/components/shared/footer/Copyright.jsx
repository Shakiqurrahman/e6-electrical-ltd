import { Link } from "react-router-dom";

function Copyright() {
  return (
    <div className=" bg-[#001127]">
      <div className="text-white flex items-center justify-between max-width py-4 flex-col sm:flex-row text-center sm:text-start">
        <p>
          ©2024{" "}
          <Link to={"/"} className="hover:text-secondary duration-300">
            E6 Electrical Ltd.
          </Link>{" "}
          <span className="hover:text-secondary duration-300">
            All Rights Reserved.
          </span>
        </p>
        <div>
          <span className="hover:text-secondary duration-300">
            Developed By
          </span>{" "}
          <a href="" className="hover:text-secondary duration-300">
            Flytech IT
          </a>
        </div>
      </div>
    </div>
  );
}

export default Copyright;

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import gallery1 from "../assets/images/gallery/gallery1.jpg";
import gallery2 from "../assets/images/gallery/gallery2.jpg";
import gallery3 from "../assets/images/gallery/gallery3.jpg";
import gallery4 from "../assets/images/gallery/gallery4.jpg";
import gallery5 from "../assets/images/gallery/gallery5.jpg";
import gallery6 from "../assets/images/gallery/gallery6.jpg";
import gallery7 from "../assets/images/gallery/gallery7.png";
import gallery8 from "../assets/images/gallery/gallery8.jpg";
import gallery9 from "../assets/images/gallery/gallery9.jpg";

function WorkGallery() {
  const imgs = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
  ];

  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState("");

  const getImg = (img) => {
    setTempImg(img);
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
    setTempImg("");
  };

  return (
    <>
      {modal && (
        <div className="fixed w-full h-screen bg-[rgba(0,0,0,0.7)] p-4 lg:p-50 text-center z-[9999999999] top-0 left-0 flex items-center justify-center backdrop-blur-sm">
          <button
            className="fixed top-5 right-5 sm:top-8 sm:right-8 text-white text-3xl z-[9999999999]"
            onClick={closeModal}
          >
            <IoClose />
          </button>
          <img
            src={tempImg}
            alt=""
            className="w-auto max-w-full h-auto max-h-full"
          />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 flex-wrap gap-5">
        {imgs.map((img) => (
          <div
            key={Math.random()}
            className="group relative rounded-lg overflow-hidden hover:cursor-pointer"
            onClick={() => getImg(img)}
          >
            <img
              src={img}
              alt=""
              className="block h-[250px] lg:h-[300px] w-full object-cover"
            />
            <span className="absolute h-full w-full block top-0 left-0 opacity-0 duration-300 group-hover:opacity-100 bg-[rgba(0,0,0,0.3)]"></span>
          </div>
        ))}
      </div>
    </>
  );
}

export default WorkGallery;

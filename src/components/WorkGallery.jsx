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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 flex-wrap gap-5">
      {imgs.map((img) => (
        <div
          key={Math.random()}
          className="group relative rounded-lg overflow-hidden hover:cursor-pointer"
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
  );
}

export default WorkGallery;

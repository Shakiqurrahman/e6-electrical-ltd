import { CgCheck } from "react-icons/cg";

function ProcessCard({ icon, title, list = [] }) {
  return (
    <div className="bg-white rounded-3xl shadow-card py-10 px-10 lg:px-16 duration-300 hover:shadow-card-hover">
      <div className="text-6xl text-primary">{icon}</div>
      <h1 className="text-2xl font-semibold my-3">{title}</h1>
      <ul>
        {list.map((item) => (
          <li key={Math.random()} className="flex items-center text-lg">
            <CgCheck className="text-3xl" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProcessCard;

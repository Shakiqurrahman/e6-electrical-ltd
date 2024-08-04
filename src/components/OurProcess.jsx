import { FaHeadset, FaRegCalendarCheck, FaWrench } from "react-icons/fa6";
import ProcessCard from "../components/ProcessCard";

function OurProcess() {
  const list1 = ["Your Name", "State Address", "Photos of issue"];
  const list2 = [
    "We prepare for visit",
    "Book appointment",
    "Attend and resolve",
  ];
  const list3 = ["Solve your issues", "We leave your place tidy"];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6">
      <ProcessCard
        icon={<FaRegCalendarCheck />}
        title="Make a Request"
        list={list1}
      />
      <ProcessCard icon={<FaHeadset />} title="Our Response" list={list2} />
      <ProcessCard icon={<FaWrench />} title="Problem Solved" list={list3} />
    </div>
  );
}

export default OurProcess;

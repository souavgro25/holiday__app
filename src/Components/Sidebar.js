import group from "../Images/Group 618.svg";
import group2 from "../Images/Group 620.svg";
import group3 from "../Images/Group 622.svg";
import group4 from "../Images/Group 646.svg";
import path from "../Images/Path1974.svg";

function Sidebar() {
  return (
    <div className="flex flex-col items-center mt-12 gap-y-20  px-8  fixed h-screen bg-gray-100   ">
      <div>
        <img className="h-3" src={group4} alt="" />
      </div>
      <div className="flex flex-col gap-y-10 ">
        <img className="h-5" src={group} alt="" />
        <img className="h-5" src={group2} alt="" />
        <img className="h-5" src={group3} alt="" />
        <img className="h-5" src={path} alt="" />
      </div>
    </div>
  );
}

export default Sidebar;

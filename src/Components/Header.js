import settings from "../Images/Settings.svg"
import layer1 from "../Images/Layer1.svg"
import layer2 from "../Images/Layer2.svg"
import layer3 from "../Images/Layer3.svg"
import group from "../Images/Group 815.svg"
function Header() {
    return (
        <div className="flex justify-between items-center pl-20 mx-10 py-5 flex-1 bg-gray-100">
            <div className="flex gap-x-2">
                <img src={settings} alt="" />
                <p className="font-bold">Settings</p>
            </div>
            <div className="flex gap-x-4">
                <img src={layer1} alt="" />
                <img src={layer2} alt="" />
                <img src={layer3} alt="" />
                <img src={group} alt="" />
            </div>
        </div>
    )
}

export default Header

import amazonImg from "../assets/amazon-nav.png";
import { IoLocationOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#131921] h-14 grid grid-cols-12">
        <div className="flex items-center">
          <img src={amazonImg} className="h-14" />
        </div>
        <div className="text-white flex items-center text-nowrap">
          <div className="flex items-center gap-2">
            <IoLocationOutline size={20} />
            <div>
              <p className="font-lignt text-xs">Delivery to New Delhi 110043</p>
              <p className="font-semibold text-sm">Update location</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

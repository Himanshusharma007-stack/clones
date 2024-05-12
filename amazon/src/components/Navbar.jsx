import amazonImg from "../assets/amazon-nav.png";
import { IoLocationOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#131921] h-14 grid grid-cols-12 gap-4">
        <div className="flex items-center">
          <img src={amazonImg} className="h-14" />
        </div>
        <div className="text-white flex items-center text-nowrap col-span-2">
          <div className="flex items-center gap-2 p-1 hover:border-white hover:border">
            <IoLocationOutline size={20} />
            <div>
              <p className="font-lignt text-xs">Delivery to New Delhi 110043</p>
              <p className="font-semibold text-sm">Update location</p>
            </div>
          </div>
        </div>
        <div className="text-white flex items-center text-nowrap col-span-5">
          <input
            className="w-full rounded-md border border-white focus:border-yellow-500 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Search Amazon.in"
          ></input>
        </div>
      </div>
    </>
  );
}

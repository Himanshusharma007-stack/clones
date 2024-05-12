import amazonImg from "../assets/amazon-nav.png";
import { IoLocationOutline } from "react-icons/io5";
import indianFlag from "../assets/indian-flag.webp";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  function showLanguages() {
    document.getElementById("languageDropdown").classList.remove("hidden");
  }

  function hideLanguages() {
    document.getElementById("languageDropdown").classList.add("hidden");
  }

  return (
    <>
      <div className="bg-[#131921] h-14 grid grid-cols-12 gap-4">
        <div className="flex items-center">
          <img src={amazonImg} className="h-14" />
        </div>
        <div className="text-white flex items-center text-nowrap col-span-2">
          <div className="flex items-center gap-2 p-1 rounded-sm border-[#131921] border hover:border-white hover:border">
            <IoLocationOutline size={20} />
            <div>
              <p className="font-lignt text-xs">Delivery to New Delhi 110043</p>
              <p className="font-semibold text-sm">Update location</p>
            </div>
          </div>
        </div>
        <div className="text-white flex items-center text-nowrap col-span-5">
          <input
            className="w-full rounded border border-white focus:border-yellow-500 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Search Amazon.in"
          ></input>
        </div>

        <div className="items-center flex ">
          <button
            className="relative border-[#131921] border hover:border-white hover:border p-2"
            onMouseOver={() => showLanguages()}
            onMouseOut={() => hideLanguages()}
          >
            <div className=" text-white flex items-center rounded-md cursor-pointer">
              <img src={indianFlag} className="w-5 mr-1" />
              EN
              <IoMdArrowDropdown />
            </div>
            <div
              id="languageDropdown"
              className="hidden absolute mt-2 py-3 bg-white rounded-md shadow-md"
            >
              <ul className="text-left">
                <li className="py-1 px-4 text-nowrap cursor-pointer text-sm">
                  English - EN
                </li>
                <hr className="my-2 mr-2 ml-8" />
                <li className="py-1 px-4 text-nowrap cursor-pointer text-sm">
                  हिंदी - HI
                </li>
                <li className="py-1 px-4 text-nowrap cursor-pointer text-sm">
                  বাংলা - BN
                </li>
                <li className="py-1 px-4 text-nowrap cursor-pointer text-sm">
                  മലയാളം - ML
                </li>
                <li className="py-1 px-4 text-nowrap cursor-pointer text-sm">
                  मराठी - MR
                </li>
                <hr className="my-2 mr-2 ml-8" />
                <li className="py-1 px-4 cursor-pointer text-sm">
                  <div className="flex text-nowrap mr-4">
                    <img src={indianFlag} className="w-5 mr-1" />
                    You are shopping on Amazon.in
                  </div>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

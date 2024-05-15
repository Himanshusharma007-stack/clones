import amazonImg from "../assets/amazon-nav.png";
import { IoLocationOutline } from "react-icons/io5";
import Tricolor from '../assets/tricolor.webp'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
  function showLanguages() {
    document.getElementById("languageDropdown").classList.remove("hidden");
  }

  function hideLanguages() {
    document.getElementById("languageDropdown").classList.add("hidden");
  }
  function showLogindetails() {
    document.getElementById("loginDropdown").classList.remove("hidden");
  }

  function hideLogindetails() {
    document.getElementById("loginDropdown").classList.add("hidden");
  }

  return (
    <>
      <div className="bg-[#131921] h-14 grid grid-cols-12 min-w-[900px]">
        {/* Amazon icon */}
        <div className="flex items-center col-span-1">
          <img src={amazonImg} className="h-14" />
        </div>

        {/* Address */}
        <div className="text-white flex items-center text-nowrap md:col-span-3 col-span-4 ">
          <div className="flex items-center gap-2 p-1 rounded-sm border-[#131921] border hover:border-white hover:border">
            <IoLocationOutline size={20} />
            <div>
              <p className="font-lignt text-xs">Delivery to New Delhi 110043</p>
              <p className="font-bold text-sm">Update location</p>
            </div>
          </div>
        </div>

        {/* SearchBar */}
        <div className="flex items-center text-nowrap md:col-span-3 col-span-2">
          <input
            className="w-full rounded border border-white focus:border-yellow-500 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Search Amazon.in"
          ></input>
        </div>

        {/* Select Language */}
        <div className="items-center flex col-span-1 ml-4">
          <button
            className="relative border-[#131921] border rounded-sm hover:border-white hover:border p-2"
            onMouseOver={() => showLanguages()}
            onMouseOut={() => hideLanguages()}
          >
            <div className=" text-white flex items-center rounded-md cursor-pointer font-bold text-sm">
              <img src={Tricolor} className="w-5 mr-1" />
              EN
              <IoMdArrowDropdown />
            </div>
            <div
              id="languageDropdown"
              className="hidden absolute mt-2 py-3 bg-white rounded shadow-md z-10"
            >
              <ul className="text-left">
                <li className="py-1 px-4 text-nowrap cursor-pointer text-sm">
                  English - EN
                </li>
                <hr className="my-2 mx-2" />
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
                <hr className="my-2 mx-2" />
                <li className="py-1 px-4 cursor-pointer text-sm">
                  <div className="flex text-nowrap mr-4">
                    <img src={Tricolor} className="w-5 h-4 mr-1" />
                    You are shopping on Amazon.in
                  </div>
                </li>
              </ul>
            </div>
          </button>
        </div>

        {/* Signin option */}
        <div className="items-center flex col-span-2">
          <button
            className="relative border-[#131921] border rounded-sm hover:border-white hover:border p-2"
            onMouseOver={() => showLogindetails()}
            onMouseOut={() => hideLogindetails()}
          >
            <div className=" text-white flex items-center rounded-md cursor-pointer text-xs text-nowrap">
              <p>
                Hello, sign in
                <br />
                <span className="font-bold">Account & Lists</span>
              </p>
              <div>
                {/* Account & Lists */}
                <IoMdArrowDropdown />
              </div>
            </div>
            <div
              id="loginDropdown"
              className="hidden absolute mt-2 py-3 bg-white rounded shadow-md z-10 p-4"
              style={{ left: "50%", transform: "translateX(-50%)" }}
            >
              <div className="w-auto">
                <div>
                  <div className="text-xs">
                    <button className="bg-yellow-300 px-16 py-1 rounded-lg text-nowrap">
                      Sign in
                    </button>
                    <div className="mt-1">
                      New customer?{" "}
                      <span className="text-sky-400">Start here.</span>
                    </div>
                  </div>
                </div>
                <hr className="my-2 mx-2" />

                <div className="grid grid-flow-col auto-cols-max gap-x-6">
                  <div>
                    <ul className="list-none text-nowrap text-xs text-left">
                      <li className="font-bold my-2">Your Lists</li>
                      <li className="my-1">Create a Wish List</li>
                      <li className="my-1">Wish from Any Website</li>
                      <li className="my-1">Baby Wishlist</li>
                      <li className="my-1">Discover Your Style</li>
                      <li className="my-1">Explore Showroom</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-none text-nowrap text-xs text-left">
                      <li className="font-bold my-2">Your Account</li>
                      <li className="my-1">Your Account</li>
                      <li className="my-1">Your Orders</li>
                      <li className="my-1">Your Wish List</li>
                      <li className="my-1">Your Recommendations</li>
                      <li className="my-1">Your Prime Membership</li>
                      <li className="my-1">Your Prime Video</li>
                      <li className="my-1">Your Subscribe & Save Items</li>
                      <li className="my-1">Memberships & Subscriptions</li>
                      <li className="my-1">Your Seller Account</li>
                      <li className="my-1">Manage Your Content and Devices</li>
                      <li className="my-1">
                        Your Free Amazon Business Account
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Order option */}
        <div className="flex items-center col-span-1">
          <button className="relative border-[#131921] border rounded-sm hover:border-white hover:border p-2">
            <div className=" text-white flex items-center rounded-md cursor-pointer text-xs flex-nowrap">
              <p>
                Returns
                <br />
                <span className="font-bold">& Orders</span>
              </p>
            </div>
          </button>
        </div>

        {/* Cart option */}
        <div className="flex items-center col-span-1">
          <button className="relative border-[#131921] border rounded-sm hover:border-white hover:border p-2">
            <div className=" text-white flex items-center rounded-md cursor-pointer text-xs flex-nowrap">
              <IoCartOutline size={27} className="pa-0" />
              &nbsp;
              <p className="font-bold text-sm text-end hidden lg:block">Cart</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

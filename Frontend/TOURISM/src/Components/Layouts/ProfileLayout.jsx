// Layout.jsx
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import ProfileFooter from "./Footer/ProfileFooter";
import comment from "../../assets/icons/comment-text.png"
import credit from "../../assets/icons/credit-card.png"
import heart from "../../assets/icons/heart.png"
import luggage from "../../assets/icons/luggage.png"
import settings from "../../assets/icons/settings.png"
import userCircle from "../../assets/icons/user-circle.png"
import angleDown from "../../assets/icons/angle-down-small.png"
export default function ProfileLayout() {
    const linkClass = ({ isActive }) =>
        `flex items-center p-2 rounded hover:bg-gray-50 ${isActive ? "bg-gray-50 text-gray-900 font-medium" : "text-gray-700"
        }`;
    return (
        <>
            <Navbar />

          <div className="flex flex-col lg:flex-row h-[800px] bg-[#F9F9F9] gap-3">
  {/* Sidebar */}
  <aside className="mt-[50px] ml-[20px] w-full lg:w-[296px] h-[720px] px-6 bg-white rounded-2xl shadow-sm flex flex-col overflow-auto">
    <div className="py-6 flex items-start">
      <div className="w-14 h-14 rounded-full bg-gray-200 shrink-0 mr-4 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div>
        <div className="text-lg font-bold text-gray-900">Emmily Morgan</div>
        <div className="text-sm text-gray-500 mt-1">Customer Operations</div>
      </div>
    </div>

    <div className="flex justify-center mb-5">
      <hr className="border-t border-gray-300 w-10/12" />
    </div>

    {/* pages */}
    <nav className="space-y-1">
      <NavLink to="/payment" className={linkClass}>
        <img src={userCircle} alt="data" className="w-5 h-5 mr-3" />
        Personal Data
      </NavLink>
      <NavLink to="/payment" className={linkClass}>
        <img src={credit} alt="Payment" className="w-5 h-5 mr-3" />
        Payment Account
      </NavLink>
      <NavLink
        to="/trips"
        className={({ isActive }) =>
          `flex flex-row justify-between items-center p-2 rounded hover:bg-gray-50 ${
            isActive ? "bg-gray-50 text-gray-900 font-medium" : "text-gray-700"
          }`
        }
      >
        <div className="flex">
          <img src={luggage} alt="Trips" className="w-5 h-5 mr-3" />
          Trips
        </div>
        <img src={angleDown} alt="Arrow" className="w-5 h-5 ml-3" />
      </NavLink>
      <NavLink to="/wishlist" className={linkClass}>
        <img src={heart} alt="Wishlist" className="w-5 h-5 mr-3" />
        Wish Lists
      </NavLink>
      <NavLink to="/support" className={linkClass}>
        <img src={settings} alt="Support" className="w-5 h-5 mr-3" />
        Support
      </NavLink>
      <NavLink to="/reviews" className={linkClass}>
        <img src={comment} alt="Reviews" className="w-5 h-5 mr-3" />
        My Reviews
      </NavLink>
    </nav>

    <div className="flex justify-center my-5">
      <hr className="border-t border-gray-300 w-10/12" />
    </div>

    <NavLink to="/reviews" className={linkClass}>
      <img src={settings} alt="Settings" className="w-5 h-5 mr-3" />
      Settings
    </NavLink>

    <div className="mt-auto mb-10">
      <button className="text-red-500 font-medium flex items-center hover:text-red-600 transition-colors">
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          ></path>
        </svg>
        Log out
      </button>
    </div>
  </aside>

  {/* Main content */}
  <main className="mt-[50px] mr-[20px] flex-1 p-6 h-[106vh] rounded-2xl shadow-sm bg-white">
    <Outlet />
  </main>
</div>

            <ProfileFooter />
        </>
    );
}
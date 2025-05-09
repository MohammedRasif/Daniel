import { NavLink, useLocation } from "react-router-dom";
import img from "../Navbar/image 3.png";
import { Briefcase } from "lucide-react";
import { BiSolidDashboard } from "react-icons/bi";
import { MdCompost } from "react-icons/md";
import { useState } from "react";
import { TbDeviceMobileCog } from "react-icons/tb";
import { CiMemoPad } from "react-icons/ci";
import { GoChevronRight } from "react-icons/go";

const DashboardSidebar = () => {
  const location = useLocation();
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);

  const toggleBusinessMenu = () => {
    setIsBusinessOpen(!isBusinessOpen);
  };

  const navLinkStyle = (isActive, isParent = false, isCustomApps = false) => {
    // For "My Business" parent link, check if sub-links are active
    const isBusinessActive =
      isParent &&
      (location.pathname.includes("/dashboard/brandSetUp") ||
        location.pathname.includes("/dashboard/chatbot"));

    // For "My Custom Apps", check if preview route is active
    const isCustomAppsActive =
      isCustomApps && location.pathname.includes("/dashboard/preview");

    return `
      flex items-center gap-3 px-4 py-3 relative mx-5 my-1 rounded-md
      ${(isActive || isBusinessActive || isCustomAppsActive)
        ? "bg-[#EB5A8E] dark:bg-gray-800 shadow-sm text-white"
        : "hover:bg-[#EB5A8E] dark:hover:bg-gray-700 hover:text-white dark:hover:text-white"
      }
    `;
  };

  return (
    <div className="text-white h-full">
      <NavLink to="/">
        <div className="flex items-center justify-center pt-10 pb-6">
          <div className="flex items-center space-x-1">
            <img
              src={img}
              alt="Logo"
              className="h-[30px] sm:h-[80px] md:h-[34px] w-auto"
            />
            <h1 className="noto text-2xl font-semibold">WePro</h1>
          </div>
        </div>
      </NavLink>
      <div className="flex flex-col gap-[1px]">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) => navLinkStyle(isActive)}
        >
          <BiSolidDashboard className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
          <h1 className="text-lg font-medium transition-transform duration-200 group-hover:scale-105">
            Dashboard
          </h1>
        </NavLink>
        <NavLink
          to="/dashboard/custom_app"
          className={({ isActive }) => navLinkStyle(isActive, false, true)}
        >
          <TbDeviceMobileCog className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
          <h1 className="text-lg font-medium transition-transform duration-200 group-hover:scale-105">
            My Custom Apps
          </h1>
        </NavLink>
        <NavLink
          to="/dashboard/markeding"
          className={({ isActive }) => navLinkStyle(isActive)}
        >
          <Briefcase className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
          <h1 className="text-lg font-medium transition-transform duration-200 group-hover:scale-105">
            Markeding
          </h1>
        </NavLink>
        <NavLink
          to="/dashboard/membership"
          className={({ isActive }) => navLinkStyle(isActive)}
        >
          <CiMemoPad className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
          <h1 className="text-lg font-medium transition-transform duration-200 group-hover:scale-105">
            My Membership
          </h1>
        </NavLink>
        <div>
          <div
            onClick={toggleBusinessMenu}
            className={navLinkStyle(
              location.pathname === "/dashboard/post_project",
              true
            )}
          >
            <MdCompost className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
            <div className="flex items-center justify-between w-full">
              <h1 className="text-lg font-medium transition-transform duration-200 group-hover:scale-105">
                My Business
              </h1>
              <GoChevronRight
                className={`transition-transform duration-200 ${
                  isBusinessOpen ? "rotate-90" : ""
                }`}
              />
            </div>
          </div>
          {isBusinessOpen && (
            <div className="ml-10 flex flex-col gap-[1px]">
              <NavLink
                to="/dashboard/brandSetUp"
                className={({ isActive }) => navLinkStyle(isActive)}
              >
                <h1 className="text-base font-medium transition-transform duration-200 group-hover:scale-105">
                  Brand Set Up
                </h1>
              </NavLink>
              <NavLink
                to="/dashboard/chatbot"
                className={({ isActive }) => navLinkStyle(isActive)}
              >
                <h1 className="text-base font-medium transition-transform duration-200 group-hover:scale-105">
                  AI Chatbot Set Up
                </h1>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
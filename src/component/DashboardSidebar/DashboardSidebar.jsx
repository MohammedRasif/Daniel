import { NavLink, useLocation } from "react-router-dom";
import img from "../Navbar/image 3.png";
import { Bot, Briefcase, Clock, Settings } from "lucide-react";
import { BiSolidDashboard } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";
import { MdCompost } from "react-icons/md";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const DashboardSidebar = () => {
  const location = useLocation();
  const isProjectActive = location.pathname.startsWith("/dashboard/Project");

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" || false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Updated NavLink styling function
  const navLinkStyle = (isActive) => `
    flex items-center gap-3 px-4 py-3 relative mx-5 my-1 rounded-md
    ${isActive
      ? "bg-[#EB5A8E] dark:bg-gray-800 shadow-sm text-white"
      : "hover:bg-[#EB5A8E] dark:hover:bg-gray-700 hover:text-white dark:hover:text-white"
    }
  `;

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
          to="/dashboard/chat"
          className={({ isActive }) => navLinkStyle(isActive)}
        >
          <Bot className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
          <h1 className="text-lg font-medium transition-transform duration-200 group-hover:scale-105">
            Ai Assistant
          </h1>
        </NavLink>
        <NavLink
          to="/dashboard/Project"
          className={() => navLinkStyle(isProjectActive)}
        >
          <Briefcase className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
          <h1 className="text-lg font-medium transition-transform duration-200 group-hover:scale-105">
            Project
          </h1>
        </NavLink>
        <NavLink
          to="/dashboard/team"
          className={({ isActive }) => navLinkStyle(isActive)}
        >
          <RiTeamFill className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
          <h1 className="text-lg font-medium transition-transform duration-200 group-hover:scale-105">
            Team
          </h1>
        </NavLink>
        <NavLink
          to="/dashboard/post_project"
          className={({ isActive }) => navLinkStyle(isActive)}
        >
          <MdCompost className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
          <h1 className="text-lg font-medium transition-transform duration-200 group-hover:scale-105">
            Post Project
          </h1>
        </NavLink>
        <NavLink
          to="/dashboard/manageSubscription"
          className={({ isActive }) => navLinkStyle(isActive)}
        >
          <Clock className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
          <h1 className="text-lg font-medium transition-transform duration-200 group-hover:scale-105">
            Manage subscription
          </h1>
        </NavLink>
        <NavLink
          to="/dashboard/setting"
          className={({ isActive }) => navLinkStyle(isActive)}
        >
          <Settings className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
          <h1 className="text-lg font-medium transition-transform duration-200 group-hover:scale-105">
            Setting
          </h1>
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardSidebar;
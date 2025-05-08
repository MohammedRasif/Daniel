import { Outlet } from "react-router-dom";
import { useState } from "react";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-[#20325A] dark:bg-[#1E232E] h-full fixed ease-in-out ${
          isSidebarOpen ? "w-72" : "w-16"
        }`}
      >
        <div className="h-full flex flex-col justify-between">
          {/* Sidebar Content */}
          <DashboardSidebar />
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={`flex flex-col w-full ${isSidebarOpen ? "ml-72" : "ml-16"}`}
      >
        {/* Navbar - Fixed & Only Navbar BG White */}
        <div
          className="fixed top-0 z-50 bg-white dark:bg-[#1E232E] w-full border-b border-gray-200 dark:border-gray-600"
          style={{
            left: isSidebarOpen ? "288px" : "64px",
            width: isSidebarOpen ? "calc(100% - 288px)" : "calc(100% - 64px)",
          }}
        >
          <DashboardNavbar />
        </div>

        {/* Outlet (Main Content) */}
        <div className="h-full mt-16 overflow-auto bg-[#F7F9FF] dark:bg-[#252c3b] p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

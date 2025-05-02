import { useState, useEffect, useRef } from "react";
import { GoChevronRight, GoChevronDown } from "react-icons/go";
import { FaUserEdit, FaLock, FaSignOutAlt, FaArrowUp } from "react-icons/fa";

const DashboardNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-end items-center w-full h-16 relative pr-10">
      <div ref={dropdownRef} className="flex items-center space-x-2 w-[220px] justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1738148405/fotor-2025010923230_1_u9l6vi.png"
            className="h-[50px] my-2 flex-shrink-0"
            alt="Logo"
          />
          <h1 className="text-base font-medium flex-shrink-0">mohammed rasif</h1>
        </div>
        <button className="cursor-pointer p-2 flex-shrink-0" onClick={toggleDropdown}>
          {isDropdownOpen ? <GoChevronDown className="ml-2" /> : <GoChevronRight />}
        </button>
        {isDropdownOpen && (
          <div
            className="absolute top-[65px] right-10 bg-white shadow-lg rounded-md w-56 z-50 border border-gray-200 origin-top-right transition-all duration-200 ease-in-out transform scale-100 opacity-100"
            style={{
              animation: isDropdownOpen ? "dropdownFadeIn 0.2s ease-in-out" : "none"
            }}
          >
            <style>
              {`
                @keyframes dropdownFadeIn {
                  from {
                    opacity: 0;
                    transform: scale(0.95) translateY(-10px);
                  }
                  to {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                  }
                }
              `}
            </style>
            <ul className="py-2">
              <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <FaArrowUp className="mr-2" />
                Upgrade package
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <FaUserEdit className="mr-2" />
                Change login email
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <FaLock className="mr-2" />
                Change password
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <FaSignOutAlt className="mr-2" />
                Log out
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardNavbar;
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 drop-shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
        {/* Logo Placeholder - Replace with your logo */}
        <div className="mb-2 sm:mb-0">
          <img src="/logo.png" alt="WePro" className="w-[100px]" />
        </div>

        {/* Copyright Notice */}
        <div className="text-sm text-gray-600">
          © 2024 Nexus vision. All rights reserved.
        </div>
        {/* Social Media Links */}
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Follow us on</span>
          <Link
            to="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF
              className="text-gray-600 hover:text-weproPink transition-colors"
              size={20}
            />
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              className="text-gray-600 hover:text-weproPink transition-colors"
              size={20}
            />
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="text-gray-600 hover:text-weproPink transition-colors"
              size={20}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

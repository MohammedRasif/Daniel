import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { FaArrowLeft, FaDownload, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { toPng } from "html-to-image";
const Poster = () => {
  // Ref to capture the poster content
  const posterRef = useRef(null);

  // Handle download as image
  const handleDownload = async (e) => {
    e.stopPropagation(); // Prevent popup from closing
    const targetRef = popup.type === "poster" ? posterRef : popupRef;
    if (!posterRef.current) {
      console.warn("posterRef not found");
      return;
    }

    try {
      const dataUrl = await toPng(posterRef.current, {
        cacheBust: true,
        backgroundColor: "#ffffff", // avoids transparency
        style: {
          // Forces fallback in case tailwind injects unsupported CSS
          color: "black",
        },
      });

      const link = document.createElement("a");
      link.download = "poster.png";
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Image generation failed:", error);
      alert("Failed to download the image. Check the console.");
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Button Section */}
      <div className="flex justify-between items-center mb-6 px-8">
        <Link
          to="/dashboard/custom_app"
          className="flex items-center justify-start gap-2 text-gray-500 border border-gray-400 w-fit px-2 py-1 rounded hover:bg-gray-200"
        >
          <FaArrowLeft />
          <p>Back</p>
        </Link>
        <div className="flex gap-2">
          <button
            className="flex items-center justify-center gap-2 text-gray-500 border border-gray-400 w-fit px-2 py-1 rounded hover:bg-gray-200"
            onClick={handleDownload}
          >
            <FaDownload />
            <p>Download</p>
          </button>
          <button className="flex items-center justify-center gap-2 text-gray-500 border border-gray-400 w-fit px-2 py-1 rounded hover:bg-gray-200">
            <FaEdit />
            <p>Edit</p>
          </button>
        </div>
      </div>

      {/* Main Poster Content */}
      <div className="flex flex-col md:flex-row" ref={posterRef}>
        {/* Left content section */}
        <div className="w-full md:w-1/2 p-8 z-10">
          {/* Logo */}
          <div className="flex items-center mb-16">
            <div className="bg-[#EC4899] text-white p-2 rounded-lg mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold text-[#1C2526]">WePro</span>
          </div>

          {/* Main title */}
          <h1 className="text-4xl font-bold text-[#1C2526] mb-6">
            Title will be displayed here
          </h1>

          {/* Description text */}
          <p className="text-gray-500 mb-12">
            Lorem ipsum dolor sit amet consectetur. Facilisi suspendisse elit
            vitae quis sed pulvinar facilisi ipsum viverra. Id vestibulum
            quisque in neque. Scelerisque ornare erat urna massa. Phasellus arcu
            condimentum pellentesque nibh senectus vulputate malesuada dictumst
            felis. nibh senectus vulputate malesuada dictumst felis. nibh
            senectus vulputate malesuada dictumst felis.
          </p>

          {/* Contact section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-[#EC4899] mb-4">
              Contact Us
            </h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-500">0123456789</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-500">youremail@yahoo.com</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-500">www.yourweb.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-500">
                  Banasree, Dhaka, Bangladesh.
                </span>
              </div>
            </div>
          </div>

          {/* QR code and App link */}
          <div>
            <h2 className="text-xl font-semibold text-[#EC4899] mb-4">
              App link
            </h2>
            <div className="flex items-center">
              <div className="mr-4">
                <img
                  src="https://via.placeholder.com/100" // Replaced with CORS-compliant image
                  alt="QR Code"
                  width={100}
                  height={100}
                  className="border border-gray-300"
                />
              </div>
              <div className="text-gray-500 text-sm">
                https://www.google.com/search?q=qr+code+png&...
              </div>
            </div>
          </div>
        </div>

        {/* Right image section with curved border */}
        <div className="w-full md:w-1/2 relative">
          <div className="w-full h-full bg-[#EB5A8E] rounded-l-[30vh] relative overflow-hidden">
            {/* Image */}
            <img
              src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529180/cld-sample-4.jpg"
              alt="Poster background"
              className="w-[49vh] h-full object-cover absolute right-0 top-0 z-0 rounded-l-[30vh]"
            />

            {/* Opacity overlay (semi-transparent to show image) */}
            <div className="bg-[#EB5A8E]/60 h-96 w-8 absolute top-52 right-0 z-10 rounded-l-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;

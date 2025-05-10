import { useRef, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { FaCloudDownloadAlt, FaEdit } from "react-icons/fa";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
import { toPng } from "html-to-image";

const CustomApp = () => {
  const popupRef = useRef(null); // Reference to the entire popup content
  const posterRef = useRef(null); // Reference to the poster content

  // Sample data for the app cards
  const appCards = [
    {
      id: 1,
      title: "Drink and Food Menu",
      count: 250,
      image:
        "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529180/cld-sample-4.jpg",
    },
    {
      id: 2,
      title: "Drink and Food Menu",
      count: 250,
      image:
        "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529180/cld-sample-4.jpg",
    },
    {
      id: 3,
      title: "Drink and Food Menu",
      count: 250,
      image:
        "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529180/cld-sample-4.jpg",
    },
    {
      id: 4,
      title: "Drink and Food Menu",
      count: 250,
      image:
        "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529180/cld-sample-4.jpg",
    },
    {
      id: 5,
      title: "Drink and Food Menu",
      count: 250,
      image:
        "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529180/cld-sample-4.jpg",
    },
  ];

  // State to manage popup visibility and type
  const [popup, setPopup] = useState({ isOpen: false, type: "", cardId: null });

  // Function to open a popup
  const openPopup = (type, cardId) => {
    console.log(`Opening popup: type=${type}, cardId=${cardId}`);
    setPopup({ isOpen: true, type, cardId });
  };

  // Function to close the popup
  const closePopup = () => {
    console.log("Closing popup");
    setPopup({ isOpen: false, type: "", cardId: null });
  };

  // Function to handle Poster button click
  const handlePosterClick = (cardId) => {
    console.log(`Opening poster popup for cardId=${cardId}`);
    setPopup({ isOpen: true, type: "poster", cardId });
  };

  // Function to handle download
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

  // Main render
  return (
    <div className="bg-gray-50 rounded-lg ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-700">Custom Apps</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appCards.map((card) => (
          <div key={card.id} className="bg-white p-5 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-gray-700 text-[18px] font-medium">
                {card.title}
              </h3>
              <button className="text-gray-400 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </button>
            </div>

            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="text-5xl font-semibold text-gray-400">
                  {card.count}
                </div>
                <div className="text-gray-500 text-md">Times open</div>
              </div>
              <div>
                <img
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  className="w-36 h-28 object-cover rounded-md"
                  onError={(e) => (e.target.src = "/placeholder.svg")}
                  crossOrigin="anonymous" // Added for CORS
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => openPopup("preview", card.id)}
                className="flex-1 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Preview
              </button>
              <button
                onClick={() => openPopup("share", card.id)}
                className="flex-1 py-2 bg-[#20325A] text-white rounded-md font-medium hover:bg-[#1b2a49] transition-colors cursor-pointer"
              >
                Share
              </button>
            </div>
          </div>
        ))}

        {/* Create New App Card */}
        <Link
          to="/dashboard/custom_app/new"
          className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[220px]"
        >
          <div className="bg-gray-100 rounded-full p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <p className="text-gray-700 font-medium">Create New App</p>
        </Link>
      </div>

      {/* Popup Overlay */}
      {popup.isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-[3px] flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div
            ref={popupRef}
            className={`relative border border-gray-300 rounded-[10px] bg-white p-6 w-full ${
              popup.type === "poster" ? "max-w-5xl" : "max-w-xl"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const card = appCards.find((c) => c.id === popup.cardId);
              if (!card) {
                console.warn("Card not found for cardId:", popup.cardId);
                return null;
              }

              if (popup.type === "share") {
                return (
                  <>
                    <div
                      onClick={closePopup}
                      className="flex items-center justify-start -mt-5 cursor-pointer"
                    >
                      <GoArrowLeft className="text-gray-700" />
                      <button className="py-2 px-1 text-gray-700 rounded-md font-medium transition-colors cursor-pointer">
                        Back
                      </button>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
                      What do you want to Share now?
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">
                          1. Link of the Custom Apps
                        </span>
                        <button className="px-3 py-1 text-gray-500">
                          Copy
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">
                          2. Download poster
                        </span>
                        <button
                          onClick={() => handlePosterClick(popup.cardId)}
                          className="px-3 py-1 underline"
                        >
                          Click here
                        </button>
                      </div>
                    </div>
                  </>
                );
              }

              if (popup.type === "preview") {
                return (
                  <>
                    <div
                      onClick={closePopup}
                      className="flex items-center justify-start -mt-5 cursor-pointer"
                    >
                      <GoArrowLeft className="text-gray-700" />
                      <button className="py-2 px-1 text-gray-700 rounded-md font-medium transition-colors cursor-pointer">
                        Back
                      </button>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                      Preview: {card.title}
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Preview the app content.
                    </p>
                    <div className="flex gap-3 mb-4">
                      <Link
                        to="/dashboard/preview"
                        className="text-center flex-1 py-2 bg-[#20325A] text-white rounded-md font-medium hover:bg-[#1b2a49] transition-colors cursor-pointer"
                      >
                        Link
                      </Link>
                      <button
                        onClick={() => handlePosterClick(popup.cardId)}
                        className="flex-1 py-2 bg-[#20325A] text-white rounded-md font-medium hover:bg-[#1b2a49] transition-colors cursor-pointer"
                      >
                        Poster
                      </button>
                    </div>
                  </>
                );
              }

              if (popup.type === "poster") {
                return (
                  <>
                    <div className="relative w-full overflow-hidden">
                      {/* Button Section */}
                      <div className="flex justify-between items-center mb-6 px-8">
                        <div
                          onClick={closePopup} // Changed to close popup
                          className="flex items-center justify-start gap-2 text-gray-500 border border-gray-400 w-fit px-2 py-1 rounded hover:bg-gray-200 cursor-pointer"
                        >
                          <GoArrowLeft />
                          <p>Back</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            className="flex items-center justify-center gap-2 text-gray-500 border border-gray-400 w-fit px-2 py-1 rounded hover:bg-gray-200"
                            onClick={handleDownload}
                          >
                            <FaCloudDownloadAlt />
                            <p>Download</p>
                          </button>
                          <button className="flex items-center justify-center gap-2 text-gray-500 border border-gray-400 w-fit px-2 py-1 rounded hover:bg-gray-200">
                            <FaEdit />
                            <p>Edit</p>
                          </button>
                        </div>
                      </div>

                      {/* Main Poster Content */}
                      <div
                        className="flex flex-col md:flex-row"
                        ref={posterRef}
                      >
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
                            <span className="text-2xl font-bold text-[#1C2526]">
                              WePro
                            </span>
                          </div>

                          {/* Main title */}
                          <h1 className="text-4xl font-bold text-[#1C2526] mb-6">
                            Title will be displayed here
                          </h1>

                          {/* Description text */}
                          <p className="text-gray-500 mb-12">
                            Lorem ipsum dolor sit amet consectetur. Facilisi
                            suspendisse elit vitae quis sed pulvinar facilisi
                            ipsum viverra. Id vestibulum quisque in neque.
                            Scelerisque ornare erat urna massa. Phasellus arcu
                            condimentum pellentesque nibh senectus vulputate
                            malesuada dictumst felis. nibh senectus vulputate
                            malesuada dictumst felis. nibh senectus vulputate
                            malesuada dictumst felis.
                          </p>

                          {/* Contact section */}
                          <div className="mb-8">
                            <h2 className="text-xl font-semibold text-[#EC4899] mb-4">
                              Contact Us
                            </h2>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <Phone className="h-4 w-4 text-gray-500 mr-2" />
                                <span className="text-gray-500">
                                  0123456789
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Mail className="h-4 w-4 text-gray-500 mr-2" />
                                <span className="text-gray-500">
                                  youremail@yahoo.com
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Globe className="h-4 w-4 text-gray-500 mr-2" />
                                <span className="text-gray-500">
                                  www.yourweb.com
                                </span>
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
                                  src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://example.com"
                                  alt="QR Code"
                                  width={100}
                                  height={100}
                                  className="border border-gray-300"
                                  crossOrigin="anonymous"
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
                              crossOrigin="anonymous"
                            />

                            {/* Opacity overlay (semi-transparent to show image) */}
                            <div className="bg-[#EB5A8E]/60 h-96 w-8 absolute top-52 right-0 z-10 rounded-l-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }

              console.warn("Unknown popup type:", popup.type);
              return null;
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomApp;

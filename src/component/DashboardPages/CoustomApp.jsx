import { useRef, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { FaCloudDownloadAlt, FaEdit } from "react-icons/fa";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
import Poster from "./Poster";

const CustomApp = () => {
  const popupRef = useRef(null); // Reference to the entire popup content

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
    if (popupRef.current) {
      try {
        // Capture the entire popup content as a canvas
        const canvas = await html2canvas(popupRef.current, {
          scale: 2, // Higher resolution
          useCORS: true, // Handle cross-origin images
          backgroundColor: "#ffffff", // White background
          logging: true, // Debug logs
        });

        // Convert canvas to PNG image
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "popup.png"; // File name
        link.click();
      } catch (error) {
        console.error("Error downloading popup:", error);
      }
    } else {
      console.warn("Popup reference not found");
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
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                      Share: {card.title}
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Share this app via link or social media.
                    </p>
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
                    <Poster />
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

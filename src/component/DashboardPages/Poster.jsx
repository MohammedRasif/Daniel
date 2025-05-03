import { Phone, Mail, Globe, MapPin } from "lucide-react";
import vectorImage from "../../image/Vector 78.png"; // Ensure this path is correct
const cloudinaryImage = "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529180/cld-sample-4.jpg";

const Poster = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Flex container for left and right sections */}
      <div className="flex flex-col md:flex-row">
        {/* Left content section */}
        <div className="w-full md:w-1/2 p-8 z-10">
          {/* Logo */}
          <div className="flex items-center mb-16">
            <div className="bg-pink-500 text-white p-2 rounded-lg mr-2">
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
            <span className="text-2xl font-bold text-navy-800">WePro</span>
          </div>

          {/* Main title */}
          <h1 className="text-4xl font-bold text-navy-800 mb-6">Title will be displayed here</h1>

          {/* Description text */}
          <p className="text-gray-500 mb-12">
            Lorem ipsum dolor sit amet consectetur. Facilisi suspendisse elit vitae quis sed pulvinar facilisi ipsum
            viverra. Id vestibulum quisque in neque. Scelerisque ornare erat urna massa. Phasellus arcu condimentum
            pellentesque nibh senectus vulputate malesuada dictumst felis.
          </p>

          {/* Contact section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-pink-500 mb-4">Contact Us</h2>
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
                <Globe className="h-4 w-4 text-gray Kiel-gray-500 mr-2" />
                <span className="text-gray-500">www.yourweb.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-500">Banasree, Dhaka, Bangladesh.</span>
              </div>
            </div>
          </div>

          {/* QR code and App link */}
          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-4">App link</h2>
            <div className="flex items-center">
              <div className="mr-4">
                <img src={vectorImage} alt="QR Code" className="w-16 h-16" />
              </div>
              <div className="text-gray-500 text-sm">https://www.google.com/search?q=qr+code+png</div>
            </div>
          </div>
        </div>

        {/* Right image section */}
        {/* Right image section */}
        <div className="w-full md:w-1/2 relative z-0">
          <div className="h-full w-full relative ">
            {/* Pink curved border */}
            <div className="absolute inset-0  rounded-l-[120px] z-10"></div>

            {/* Food image */}
            <div className="absolute inset-0 z-20 flex justify-center items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jR79S4vxKZtZEDUPGm5cToJdnoq4OM.png"
                alt="Food image"
                className="h-full w-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
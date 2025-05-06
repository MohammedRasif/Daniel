import { Phone, Mail, Globe, MapPin } from "lucide-react"

const Poster = () => {
  return (
    <div className="relative w-full   overflow-hidden">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
            pellentesque nibh senectus vulputate malesuada dictumst felis. nibh senectus vulputate malesuada dictumst
            felis. nibh senectus vulputate malesuada dictumst felis.
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
                <Globe className="h-4 w-4 text-gray-500 mr-2" />
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
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="QR Code"
                  width={100}
                  height={100}
                  className="border border-gray-300"
                />
              </div>
              <div className="text-gray-500 text-sm">https://www.google.com/search?q=qr+code+png&...</div>
            </div>
          </div>
        </div>

        {/* Right image section with curved border */}
        <div className="w-full md:w-1/2 relative">
          {/* This is the pink curved border container */}
          {/* <div className="absolute top-0 right-0 bottom-0 left-0 bg-pink-500 rounded-l-[200px]"></div> */}

          {/* This is the image container that respects the curved border */}
          <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden rounded-l-[260px]">
            <img
              src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529180/cld-sample-4.jpg"
              alt="Food image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Poster

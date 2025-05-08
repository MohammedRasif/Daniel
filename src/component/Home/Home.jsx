import {
  FiGlobe,
  FiLogIn,
  FiMail,
  FiMapPin,
  FiPhone,
  FiUsers,
} from "react-icons/fi";
import Footer from "../Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import ProductCard from "./ProductCard/ProductCard";
import { Link } from "lucide-react";

const Home = () => {
  const products = [
    {
      image: "https://picsum.photos/200/300",
      name: "Veggie Delight Wrap",
      description:
        "A refreshing wrap packed with crisp lettuce, tomatoes, cucumbers, and a tangy yogurt dressing.",
      price: "8.99$",
    },
    {
      image: "https://picsum.photos/200/300",
      name: "Spicy Beef Tacos",
      description:
        "Soft tacos filled with seasoned ground beef, fresh salsa, and a sprinkle of cheddar cheese.",
      price: "10.50$",
    },
    {
      image: "https://picsum.photos/200/300",
      name: "Margherita Pizza",
      description:
        "Classic pizza with fresh basil, mozzarella, and a rich tomato sauce on a crispy crust.",
      price: "14.25$",
    },
    {
      image: "https://picsum.photos/200/300",
      name: "Grilled Salmon Bowl",
      description:
        "A healthy bowl with grilled salmon, quinoa, avocado, and a drizzle of soy-ginger glaze.",
      price: "16.75$",
    },
    {
      image: "https://picsum.photos/200/300",
      name: "BBQ Chicken Wings",
      description:
        "Juicy wings coated in a smoky BBQ sauce, served with a side of ranch dip.",
      price: "9.99$",
    },
    {
      image: "https://picsum.photos/200/300",
      name: "Mango Smoothie",
      description:
        "A tropical blend of fresh mango, yogurt, and a hint of honey for a refreshing drink.",
      price: "5.50$",
    },
    {
      image: "https://picsum.photos/200/300",
      name: "Caesar Salad",
      description:
        "Crisp romaine lettuce tossed with Caesar dressing, croutons, and shaved parmesan.",
      price: "7.25$",
    },
    {
      image: "https://picsum.photos/200/300",
      name: "Chocolate Lava Cake",
      description:
        "Warm chocolate cake with a gooey center, served with a scoop of vanilla ice cream.",
      price: "6.99$",
    },
  ];
  const app = {
    name: "App name will be displayed here",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque eu tempor rhoncus elementum. Massa fringilla sit egestas at at. Orci mauris nisl eu suspendisse blandit nec dictumst integer sit. Morbi ut euismod blandit nisl semper in in diam ac. Dui quis est consectetur libero quam tempor mi in. Praesent et ",
    details: {
      number: "+8801300000000",
      email: "example@gamil.com",
      web: "www.example.com",
      location: "Banasree, Dhaka, Bangladesh.",
    },
    onTime: {
      start: "10:30 AM",
      end: "7:30 PM",
    },
  };
  return (
    <div className="noto">
      {/* we can pass background and title to the HeroSection */}
      {/* <HeroSection
        bg={
          "https://i.ibb.co.com/3YyNxcSV/beautiful-shot-waterfall-coming-down-from-mountains.jpg"
        }
        title={`Title of the app will be here Title of the app will be here Title of the app will be`}
      /> */}
      <HeroSection />
      <div className="flex justify-center flex-col items-center py-8 px-4 md:px-16">
        <div className=" w-full">
          <div>
            <h1 className="text-2xl text-[#444863] mb-4">{app?.name}</h1>
            <p className="text-[#828396]">{app?.description}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 w-full mx-auto mb-6 md:10">
            <div className="flex flex-col sm:flex-row">
              {/* Contact Details */}
              <div className="mb-4 sm:mb-0 flex-1/2">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Contact Details
                </h3>
                <div className="space-y-2 flex gap-4 flex-col md:flex-row">
                  <div>
                    <div className="flex items-center">
                      <FiPhone className="text-gray-500 mr-2" size={16} />
                      <span className="text-sm text-gray-600">0123456789</span>
                    </div>
                    <div className="flex items-center">
                      <FiMail className="text-gray-500 mr-2" size={16} />
                      <span className="text-sm text-gray-600">
                        youremail@yahoo.com
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <FiGlobe className="text-gray-500 mr-2" size={16} />
                      <span className="text-sm text-gray-600">
                        www.example.com
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FiMapPin className="text-gray-500 mr-2" size={16} />
                      <span className="text-sm text-gray-600">
                        Banasree, Dhaka, Bangladesh.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Information */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Time
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <FiUsers className="text-gray-500 mr-2" size={16} />
                    <span className="text-sm text-gray-600">
                      Check In - 12 PM
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FiLogIn className="text-gray-500 mr-2" size={16} />
                    <span className="text-sm text-gray-600">
                      Check Out - 12 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-2xl w-full max-w-7xl mb-8">List of all Products</h1>
        <div className="md:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-items-center w-full">
          {products.map((product, key) => (
            <ProductCard key={key} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

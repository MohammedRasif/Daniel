import Footer from "../Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import ProductCard from "./ProductCard/ProductCard";

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
  return (
    <div className="noto">
      <HeroSection />
      <div className="flex justify-center flex-col items-center py-8 px-4 md:px-16">
        <h1 className="text-2xl w-full max-w-7xl mb-8">List of all Products</h1>
        <div className="px-2 md:px-10 grid grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-items-center max-w-7xl">
          {products.map((product, key) => (
            <ProductCard key={key} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

import ProductCard from "../Helpers/ProductCard";

export default function SelectAppCategory({ productList }) {
  return (
    <div>
      <p>Select app Category</p>
      {/* Example display */}
      <div className="mt-4 space-y-2">
        {productList.map((product, index) => (
          <div
            key={index}
            className="bg-gray-50 flex items-center justify-center p-4"
          >
            <ProductCard
              image={product?.image}
              name={product?.name}
              description={product?.description}
              price={product?.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

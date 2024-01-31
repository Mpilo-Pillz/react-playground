import ProductCard from "../../../components/Shopping/ProductCard";
import { Product } from "../../../types/product.types";
import useProduct from "./useProduct";

const Products = () => {
  const { products } = useProduct();

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center my-3">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Premium Audio
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500">
            Dive into an auditory paradise with our premium selection of audio
            essentials. Our carefully curated range includes state-of-the-art
            headphones, immersive speakers, and a wide array of audio equipment
            designed to bring every note to life.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          {products?.map((product: Product) => (
            <ProductCard
              key={product._id}
              src={product.image}
              alt={product.name}
              productName={product.name}
              price={product.price}
              buttonText={"Subscribe"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

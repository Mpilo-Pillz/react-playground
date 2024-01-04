import React from "react";
import ProductCard from "../../components/Shopping/ProductCard";

const Products = () => {
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
          <ProductCard
            src={
              "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFycGhvbmVzfGVufDB8fDB8fHww"
            }
            alt={"ear phones"}
            productName={"Head sets"}
            price={699.99}
            buttonText={"Subscribe"}
          />
          <ProductCard
            src={
              "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFycGhvbmVzfGVufDB8fDB8fHww"
            }
            alt={"ear phones"}
            productName={"Head sets"}
            price={699.99}
            buttonText={"Subscribe"}
          />
          <ProductCard
            src={
              "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFycGhvbmVzfGVufDB8fDB8fHww"
            }
            alt={"ear phones"}
            productName={"Head sets"}
            price={699.99}
            buttonText={"Subscribe"}
          />
          <ProductCard
            src={
              "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFycGhvbmVzfGVufDB8fDB8fHww"
            }
            alt={"ear phones"}
            productName={"Head sets"}
            price={699.99}
            buttonText={"Subscribe"}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;

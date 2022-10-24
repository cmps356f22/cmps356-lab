// import "../styles/globals.css";
import Theme from "themes/theme";
import { useState } from "react";
import { faker } from "@faker-js/faker";

const categories = ["cat", "dog", "lizard", "bird"];
const products = Array.from(Array(50)).map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  image: faker.image.animals(600, 200, true),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price(1, 100),
  category: categories[Math.floor(Math.random() * categories.length)],
}));

function Application({ Component, pageProps }) {
  const [cart, setCart] = useState({});

  return (
    <Theme>
      <Component
        {...pageProps}
        cart={cart}
        setCart={setCart}
        products={products}
        categories={categories}
      />
    </Theme>
  );
}

export default Application;

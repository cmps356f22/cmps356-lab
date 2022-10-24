import "../styles/globals.css";
import Theme from "themes/theme";
import { useState } from "react";
import { faker } from "@faker-js/faker";

const categories = ["all", "foo", "bar", "buz", "qux"];
const products = [...Array(50)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  image: faker.image.abstract(600, 180, true),
  price: faker.commerce.price(0.1, 99.99),
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
}));

function Application({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  return (
    <Theme>
      {/* <Theme mode="dark"> */}
      <Component
        {...pageProps}
        products={products}
        categories={categories}
        cart={cart}
        setCart={setCart}
      />
    </Theme>
  );
}

export default Application;

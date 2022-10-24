import { useRouter } from "next/router";
import Link from "next/link";
import { Container } from "@mui/material";
import Products from "components/products";
import Header from "components/header";

export default function Store({ cart, setCart, products, categories }) {
  const router = useRouter();
  const { category } = router.query;

  return (
    <Container sx={{ padding: "10px" }}>
      <Header
        cart={cart}
        categories={categories}
        category={category}
        products={products}
      />

      <Container component="main">
        <Products
          products={products.filter((product) => product.category === category)}
          cart={cart}
          setCart={setCart}
        />
      </Container>

      {/* footer */}
      {/* <Link href="/cart">
        <a>Cart</a>
      </Link> */}
    </Container>
  );
}

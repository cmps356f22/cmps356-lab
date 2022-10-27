import { Container } from "@mui/material";
import Products from "components/products";
import Header from "components/header";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function Store({ products, categories, cart, setCart }) {
  const router = useRouter();
  const { category } = router.query;

  const filteredProducts = useMemo(
    () =>
      category === "all"
        ? products
        : products.filter((product) => product.category === category),
    // .sort(() => Math.random() - 0.5),
    [category]
  );

  return (
    <Container sx={{ padding: "15px 0" }}>
      <Header
        category={category}
        categories={categories}
        cart={cart}
        setCart={setCart}
        products={products}
      />
      <Container component="main">
        <Products products={filteredProducts} cart={cart} setCart={setCart} />
      </Container>
      <Container component="footer"></Container>
    </Container>
  );
}

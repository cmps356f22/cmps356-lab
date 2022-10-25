import { useMemo } from "react";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import Header from "components/header";
import Products from "components/products";

export default function Store({
  products: allProducts,
  categories,
  state,
  dispatch,
}) {
  const router = useRouter();
  const { category } = router.query;
  const products = useMemo(
    () => allProducts.filter((product) => product.category === category),
    [category]
  );

  return (
    <Container maxWidth="lg" sx={{ padding: "20px 0" }}>
      <Header
        state={state}
        dispatch={dispatch}
        categories={categories}
        products={products}
      />
      <Products products={products} state={state} dispatch={dispatch} />
      <Container component="footer"></Container>
    </Container>
  );
}

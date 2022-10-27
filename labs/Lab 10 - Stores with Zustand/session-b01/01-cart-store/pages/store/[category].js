import { useMemo } from "react";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import Header from "components/header";
import Products from "components/products";
import { useStoreContext } from "contexts/context";

export default function Store() {
  const { state, dispatch } = useStoreContext();

  const router = useRouter();
  const { category } = router.query;
  const products = useMemo(
    () =>
      category == "all"
        ? state.products
        : state.products.filter((product) => product.category === category),
    [category]
  );

  return (
    <Container maxWidth="lg" sx={{ padding: "20px 0" }}>
      <Header category={category} />
      <Products products={products} />
      <Container component="footer"></Container>
    </Container>
  );
}

import { useRouter } from "next/router";
import { Container } from "@mui/material";
import Products from "components/products";
import Header from "components/header";
import { useStoreContext } from "contexts/context";

export default function Store() {
  const { state } = useStoreContext();

  const router = useRouter();
  const { category } = router.query;

  return (
    <Container sx={{ padding: "10px" }}>
      <Header category={category} />

      <Container component="main">
        <Products
          products={
            category === "all"
              ? state.products
              : state.products.filter(
                  (product) => product.category === category
                )
          }
        />
      </Container>

      {/* footer */}
      {/* <Link href="/cart">
        <a>Cart</a>
      </Link> */}
    </Container>
  );
}

import { useRouter } from "next/router";
import { Container } from "@mui/material";
import Products from "components/products";
import Header from "components/header";
import { useStore } from "stores/store";

export default function Store() {
  const products = useStore((state) => state.products);

  const router = useRouter();
  const { category } = router.query;
  return (
    <Container sx={{ padding: "10px" }}>
      <Header category={category} />

      <Container component="main">
        <Products
          products={
            category === "all"
              ? products
              : products.filter((product) => product.category === category)
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

import { Container } from "@mui/material";
import Products from "components/products";
import Header from "components/header";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useStoreContext } from "contexts/context";

export default function Store({ products, categories, cart, setCart }) {
  const { state, dispatch } = useStoreContext();
  const router = useRouter();
  const { category } = router.query;

  // const [filteredProducts, setFilteredProducts] = useState([]);
  // useEffect(() => {
  //   setFilteredProducts(
  //     category === "all"
  //       ? products
  //       : products.filter((product) => product.category === category)
  //   );
  // }, [category]);

  const filteredProducts = useMemo(
    () =>
      category === "all"
        ? state.products
        : state.products.filter((product) => product.category === category),
    // .sort(() => Math.random() - 0.5),
    [category]
  );

  return (
    <Container sx={{ padding: "15px 0" }}>
      <Header category={category} />
      <Container component="main">
        <Products products={filteredProducts} />
      </Container>
      <Container component="footer"></Container>
    </Container>
  );
}

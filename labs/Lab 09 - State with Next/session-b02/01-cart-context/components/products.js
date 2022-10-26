import { Grid } from "@mui/material";
import Product from "components/product";
import { useStoreContext } from "contexts/context";

export default function Products() {
  const { state } = useStoreContext();

  return (
    <>
      <Grid component="section" container spacing={2}>
        {state.products.map((product) => (
          <Grid key={product.id} component="article" item xs={6} md={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

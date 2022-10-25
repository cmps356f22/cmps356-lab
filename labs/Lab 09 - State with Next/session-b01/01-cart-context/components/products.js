import { Grid } from "@mui/material";
import Product from "components/product";

export default function Products({ products, state, dispatch }) {
  return (
    <Grid container component="main" spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={6} md={4} lg={3}>
          <Product product={product} state={state} dispatch={dispatch} />
        </Grid>
      ))}
    </Grid>
  );
}

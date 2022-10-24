import { Grid } from "@mui/material";
import Product from "components/product";

export default function Products({ products, cart, setCart }) {
  return (
    <>
      <Grid component="section" container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} component="article" item xs={6} md={3}>
            <Product product={product} cart={cart} setCart={setCart} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

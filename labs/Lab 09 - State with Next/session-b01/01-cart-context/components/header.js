import { Button, Container, Stack, Link } from "@mui/material";
import CartButton from "components/cart-button";

export default function Header({ state, dispatch, categories, products }) {
  return (
    <Container component="header" sx={{ padding: "10px 0" }}>
      <Stack component="nav" direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          {categories.map((category) => (
            <Link key={category} href={`/store/${category}`}>
              <Button variant="outlined">
                <a>{category}</a>
              </Button>
            </Link>
          ))}
        </Stack>
        <CartButton state={state} dispatch={dispatch} products={products} />
      </Stack>
    </Container>
  );
}

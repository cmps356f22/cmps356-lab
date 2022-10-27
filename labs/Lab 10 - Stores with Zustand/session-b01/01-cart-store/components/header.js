import { Button, Container, Stack, Link } from "@mui/material";
import CartButton from "components/cart-button";
import { useStoreContext } from "contexts/context";

export default function Header({ category }) {
  const { state, dispatch } = useStoreContext();

  return (
    <Container component="header" sx={{ padding: "10px 0" }}>
      <Stack component="nav" direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          {state.categories.map((cat) => (
            <Link key={category} href={`/store/${cat}`}>
              <Button variant={cat == category ? "contained" : "outlined"}>
                <a>{cat}</a>
              </Button>
            </Link>
          ))}
        </Stack>
        <CartButton />
      </Stack>
    </Container>
  );
}

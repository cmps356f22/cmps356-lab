import { Button, Container, Stack } from "@mui/material";
import Link from "next/link";
import CartButton from "components/cart-button";
import { useStoreContext } from "contexts/context";

export default function Header({ category: activeCategory }) {
  const { state, dispatch } = useStoreContext();

  return (
    <Container component="header" sx={{ padding: "10px 0 15px" }}>
      <Stack component="nav" direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={1}>
          {state.categories.map((category) => (
            <Link href={`/store/${category}`}>
              <Button
                size="small"
                variant={activeCategory === category ? "contained" : "outlined"}
              >
                <a>{category}</a>
              </Button>
            </Link>
          ))}
        </Stack>
        <Stack direction="row" spacing={1}>
          <CartButton />
        </Stack>
      </Stack>
    </Container>
  );
}

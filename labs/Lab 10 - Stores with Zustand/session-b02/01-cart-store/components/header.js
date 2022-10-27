import { Button, Container, Stack } from "@mui/material";
import Link from "next/link";
import CartButton from "components/cart-button";
import { useStore } from "stores/store";

export default function Header({ category }) {
  const categories = useStore((state) => state.categories);

  return (
    <Container component="header" sx={{ paddingBottom: "10px" }}>
      <nav>
        <Stack direction="row" justifyContent="space-between">
          <Stack spacing={1} direction="row">
            {categories.map((cat) => (
              <Link key={cat} href={`/store/${cat}`}>
                <Button variant={category === cat ? "contained" : "outlined"}>
                  <a>{cat}</a>
                </Button>
              </Link>
            ))}
          </Stack>
          <CartButton />
        </Stack>
      </nav>
    </Container>
  );
}

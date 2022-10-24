import { Button, Container, Stack } from "@mui/material";
import Link from "next/link";
import CartButton from "components/cart-button";

export default function Header({
  category: activeCategory,
  categories,
  products,
  cart,
}) {
  return (
    <Container component="header" sx={{ padding: "10px 0 15px" }}>
      <Stack component="nav" direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={1}>
          {categories.map((category) => (
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
          <CartButton products={products} cart={cart} />
        </Stack>
      </Stack>
    </Container>
  );
}

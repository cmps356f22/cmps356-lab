import { useState } from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartDialog from "components/cart-dialog";

export default function CartButton({ cart, products }) {
  const [open, setOpen] = useState(false);
  const showCart = () => {
    setOpen(true);
  };

  return (
    <>
      <CartDialog open={open} setOpen={setOpen} />
      <Button onClick={showCart}>
        {Object.values(cart).reduce((sum, val) => sum + val, 0)} | $
        {Object.entries(cart).reduce(
          (sum, [key, val]) =>
            sum + val * products.find((product) => product.id === key).price,
          0
        )}
        <ShoppingCartIcon sx={{ margin: "0 0 0 10px" }} />
      </Button>
    </>
  );
}

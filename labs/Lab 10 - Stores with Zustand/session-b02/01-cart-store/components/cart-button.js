import { useState } from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartDialog from "components/cart-dialog";
import { useStore } from "stores/store";

export default function CartButton() {
  const cart = useStore((state) => state.cart);
  const cartTotalQuantity = useStore((state) => state.cartTotalQuantity);
  const cartTotalPrice = useStore((state) => state.cartTotalPrice);

  const [open, setOpen] = useState(false);
  const showCart = () => {
    setOpen(true);
  };

  return (
    <>
      <CartDialog open={open} setOpen={setOpen} />
      <Button onClick={showCart}>
        {cartTotalQuantity()} | ${cartTotalPrice()}
        <ShoppingCartIcon sx={{ margin: "0 0 0 10px" }} />
      </Button>
    </>
  );
}

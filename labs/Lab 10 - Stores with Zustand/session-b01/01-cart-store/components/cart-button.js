import { useState } from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartDialog from "components/cart-dialog";
import { useStore } from "stores/store";

export default function CartButton() {
  const cart = useStore((state) => state.cart);
  const cartQuantity = useStore((state) => state.cartQuantity);
  const cartPrice = useStore((state) => state.cartPrice);

  const [open, setOpen] = useState(false);
  const showCart = () => {
    setOpen(true);
  };

  return (
    <>
      <CartDialog open={open} setOpen={setOpen} />
      <Button onClick={showCart}>
        <ShoppingCartIcon />
        {cartQuantity()} ${cartPrice()}
      </Button>
    </>
  );
}

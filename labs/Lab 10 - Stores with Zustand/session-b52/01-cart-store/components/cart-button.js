import { useState } from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartDialog from "components/cart-dialog";
import { useStore } from "stores/store";

export default function CartButton() {
  const cart = useStore((state) => state.cart);

  const [open, setOpen] = useState();

  return (
    <>
      <CartDialog open={open} setOpen={setOpen} />
      <Button size="small" onClick={() => setOpen(true)}>
        {cart.reduce((total, val) => total + val.quantity, 0)} | $
        {cart.reduce((total, val) => total + val.quantity * val.price, 0)}
        <ShoppingCartIcon sx={{ paddingLeft: "10px" }} />
      </Button>
    </>
  );
}

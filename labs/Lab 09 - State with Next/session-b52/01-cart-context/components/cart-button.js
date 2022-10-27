import { useState } from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartDialog from "components/cart-dialog";

export default function CartButton({ cart, setCart, products }) {
  const [open, setOpen] = useState();

  return (
    <>
      <CartDialog open={open} setOpen={setOpen} cart={cart} setCart={setCart} />
      <Button size="small" onClick={() => setOpen(true)}>
        {cart.reduce((total, val) => total + val.quantity, 0)} | $
        {cart.reduce(
          (total, val) =>
            total +
            val.quantity *
              products.find((product) => product.id === val.id).price,
          0
        )}
        <ShoppingCartIcon sx={{ paddingLeft: "10px" }} />
      </Button>
    </>
  );
}

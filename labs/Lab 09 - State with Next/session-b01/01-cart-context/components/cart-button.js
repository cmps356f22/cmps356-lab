import { useState } from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartDialog from "components/cart-dialog";
import { useStoreContext } from "contexts/context";

export default function CartButton() {
  const { state, dispatch } = useStoreContext();

  const [open, setOpen] = useState(false);
  const showCart = () => {
    setOpen(true);
  };

  return (
    <>
      <CartDialog open={open} setOpen={setOpen} />
      <Button onClick={showCart}>
        <ShoppingCartIcon />
        {state.cart.reduce((acc, val) => acc + val.quantity, 0)} $
        {state.cart.reduce(
          (acc, val) =>
            acc +
              val.quantity *
                state.products.find((product) => product.id === val.id).price ??
            0,
          0.0
        )}
      </Button>
    </>
  );
}

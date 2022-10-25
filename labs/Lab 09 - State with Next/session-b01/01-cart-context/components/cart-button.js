import { useState } from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartDialog from "components/cart-dialog";

export default function CartButton({ state, dispatch, products }) {
  const [open, setOpen] = useState(false);
  const showCart = () => {
    setOpen(true);
  };

  return (
    <>
      <CartDialog
        open={open}
        setOpen={setOpen}
        state={state}
        dispatch={dispatch}
        products={products}
      />
      <Button onClick={showCart}>
        <ShoppingCartIcon />
        {state.reduce((acc, val) => acc + val.quantity, 0)} $
        {state.reduce(
          (acc, val) =>
            acc +
              val.quantity *
                products.find((product) => product.id === val.id).price ?? 0,
          0.0
        )}
      </Button>
    </>
  );
}

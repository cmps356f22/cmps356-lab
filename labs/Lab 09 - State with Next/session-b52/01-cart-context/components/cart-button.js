import { useState } from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartDialog from "components/cart-dialog";
import { useStoreContext } from "contexts/context";

export default function CartButton() {
  const { state, dispatch } = useStoreContext();
  const [open, setOpen] = useState();

  return (
    <>
      <CartDialog open={open} setOpen={setOpen} />
      <Button size="small" onClick={() => setOpen(true)}>
        {state.cart.reduce((total, val) => total + val.quantity, 0)} | $
        {state.cart.reduce(
          (total, val) =>
            total +
            val.quantity *
              state.products.find((product) => product.id === val.id).price,
          0
        )}
        <ShoppingCartIcon sx={{ paddingLeft: "10px" }} />
      </Button>
    </>
  );
}

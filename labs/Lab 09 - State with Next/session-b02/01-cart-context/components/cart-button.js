import { useState } from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartDialog from "components/cart-dialog";
import { useStoreContext } from "contexts/context";

export default function CartButton() {
  const { state } = useStoreContext();

  const [open, setOpen] = useState(false);
  const showCart = () => {
    setOpen(true);
  };

  return (
    <>
      <CartDialog open={open} setOpen={setOpen} />
      <Button onClick={showCart}>
        {Object.values(state.cart).reduce((sum, val) => sum + val, 0)} | $
        {Object.entries(state.cart).reduce(
          (sum, [key, val]) =>
            sum +
            val * state.products.find((product) => product.id === key).price,
          0
        )}
        <ShoppingCartIcon sx={{ margin: "0 0 0 10px" }} />
      </Button>
    </>
  );
}

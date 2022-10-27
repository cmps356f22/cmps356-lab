import { Dialog, DialogTitle } from "@mui/material";

export default function CartDialog({ open, setOpen, cart, setCart }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Cart</DialogTitle>
    </Dialog>
  );
}

import {
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStore } from "stores/store";

export default function CartDialog({ open, setOpen }) {
  const cart = useStore((state) => state.cart);
  const _remove = useStore((state) => state.remove);

  const handleClose = () => {
    setOpen(false);
  };

  const remove = (id) => {
    _remove(id);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Cart</DialogTitle>
      <List>
        {cart.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={`${item.quantity} × ${item.name}`}
              secondary={`$${item.quantity * item.price}`}
            />
            <IconButton
              sx={{ marginLeft: "10px" }}
              onClick={() => {
                remove(item.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStore } from "stores/store";

export default function CartDialog({ open, setOpen }) {
  const cart = useStore((state) => state.cart);
  const products = useStore((state) => state.products);
  const _remove = useStore((state) => state.remove);

  const handleClose = () => {
    setOpen(false);
  };

  const remove = (id) => {
    _remove(id);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">Cart</DialogTitle>
      <DialogContent>
        <List>
          {Object.keys(cart).map((id) => (
            <ListItem key={id}>
              <ListItemText
                primary={cart[id].name}
                secondary={`$${cart[id].price * cart[id].quantity}`}
              />
              <IconButton onClick={() => remove(id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
}

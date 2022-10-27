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
  const products = useStore((state) => state.products);
  const dispatch = useStore((state) => state.dispatch);

  const handleClose = () => {
    setOpen(false);
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: { id } });
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Cart</DialogTitle>
      <List>
        {cart.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={`${item.quantity} × ${
                products.find((product) => product.id === item.id).name
              }`}
              secondary={`$${
                item.quantity *
                products.find((product) => product.id === item.id).price
              }`}
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

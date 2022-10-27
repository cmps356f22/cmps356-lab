import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStoreContext } from "contexts/context";
import { useStore } from "stores/store";

export default function CartDialog({ open, setOpen }) {
  const context = useStoreContext();
  const cart = useStore((state) => state.cart);
  const removeItem = useStore((state) => state.removeItem);

  const handleClose = () => {
    setOpen(false);
  };

  const remove = (event, id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Cart</DialogTitle>
      <List sx={{ pt: 0 }}>
        {cart.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={
                context.state.products.find((product) => product.id === item.id)
                  .name
              }
              secondary={`$${
                context.state.products.find((product) => product.id === item.id)
                  .price * item.quantity
              }`}
            />
            <IconButton onClick={(event) => removeItem(item.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

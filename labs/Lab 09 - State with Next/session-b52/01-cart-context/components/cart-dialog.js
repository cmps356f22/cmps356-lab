import {
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStoreContext } from "contexts/context";

export default function CartDialog({ open, setOpen }) {
  const { state, dispatch } = useStoreContext();

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
        {state.cart.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={`${item.quantity} × ${
                state.products.find((product) => product.id === item.id).name
              }`}
              secondary={`$${
                item.quantity *
                state.products.find((product) => product.id === item.id).price
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

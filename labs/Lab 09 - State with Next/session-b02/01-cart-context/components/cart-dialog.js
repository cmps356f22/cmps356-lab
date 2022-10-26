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
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">Cart</DialogTitle>
      <DialogContent>
        <List>
          {Object.keys(state.cart).map((id) => (
            <ListItem key={id}>
              <ListItemText
                primary={
                  state.products.find((product) => product.id === id).name
                }
                secondary={`${
                  state.products.find((product) => product.id === id).price
                }`}
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

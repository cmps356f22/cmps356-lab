import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CartDialog({
  open,
  setOpen,
  state,
  dispatch,
  products,
}) {
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
        {state.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={products.find((product) => product.id === item.id).name}
              secondary={`$${
                products.find((product) => product.id === item.id).price *
                item.quantity
              }`}
            />
            <IconButton onClick={(event) => remove(event, item.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

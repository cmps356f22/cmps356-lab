import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
// import { useStoreContext } from "contexts/context";
import { useStore } from "stores/store";

export default function Product({ product }) {
  const cart = useStore((state) => state.cart);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);

  const decrease = (event) => {
    decreaseQuantity(product.id);
  };

  const increase = (event) => {
    increaseQuantity({ id: product.id, price: product.price });
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt=""
      ></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Chip label={product.category} variant="outlined" />
      </CardContent>
      <CardActions>
        <IconButton
          disabled={
            (cart.find((item) => item.id === product.id)?.quantity ?? 0) < 1
          }
          onClick={decrease}
        >
          <RemoveIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="h6">
            <TextField
              disabled
              variant="outlined"
              value={cart.find((item) => item.id === product.id)?.quantity ?? 0}
            />
          </Typography>
        </Typography>
        <IconButton onClick={increase}>
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

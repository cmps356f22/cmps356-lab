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
import { useStore } from "stores/store";

export default function Product({ product }) {
  const cart = useStore((state) => state.cart);
  const _decrease = useStore((state) => state.decrease);
  const _increase = useStore((state) => state.increase);

  const decrease = () => {
    _descrease(product);
  };

  const increase = () => {
    _increase(product);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.description}
        height="140"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          ${product.price}
        </Typography>
        <Chip label={product.category} />
      </CardContent>
      <CardActions
        sx={{
          margin: "-5px 0 15px",
        }}
      >
        <IconButton
          sx={{ margin: "0 10px" }}
          onClick={decrease}
          disabled={!(cart[product.id]?.quantity ?? 0)}
        >
          <RemoveIcon />
        </IconButton>
        <TextField disabled value={cart[product.id]?.quantity ?? 0} />
        <IconButton sx={{ margin: "0 10px" }} onClick={increase}>
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

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

export default function Product({ product, cart, setCart }) {
  const decrease = () => {
    setCart((cart) => {
      const newCart = { ...cart };

      if (newCart[product.id] == 1) {
        delete newCart[product.id];
      } else {
        newCart[product.id] -= 1;
      }

      return newCart;
    });
  };
  const increase = () => {
    setCart((cart) => {
      const newCart = { ...cart };
      newCart[product.id] = (newCart[product.id] ?? 0) + 1;
      return newCart;
    });
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
          disabled={!(cart[product.id] ?? 0)}
        >
          <RemoveIcon />
        </IconButton>
        <TextField disabled value={cart[product.id] ?? 0} />
        <IconButton sx={{ margin: "0 10px" }} onClick={increase}>
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

import {
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Product({ product, cart, setCart }) {
  const decrease = (event) => {
    setCart((prevCart) => {
      const cart = [...prevCart];
      const index = cart.findIndex((item) => item.id === product.id);

      if (index !== -1) {
        if (cart[index].quantity === 1) {
          cart.splice(index, 1);
        } else {
          cart[index].quantity -= 1;
        }
      }

      return cart;
    });
  };

  const increase = (event) => {
    console.log("INCREASE", product.id);

    setCart((prevCart) => {
      const cart = [...prevCart];
      const index = cart.findIndex((item) => item.id === product.id);

      if (index !== -1) {
        cart[index].quantity += 1;
      } else {
        cart.push({ id: product.id, quantity: 1 });
      }

      console.log("INCREASE SET", product.id);
      return cart;
    });
  };

  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.name}
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
        <Typography gutterBottom variant="h6" component="div">
          ${product.price}
        </Typography>
        <Chip variant="outlined" label={product.category} />
      </CardContent>
      <CardActions sx={{ marginBottom: "10px" }}>
        <IconButton
          size="small"
          onClick={decrease}
          disabled={!cart.find((item) => item.id === product.id)}
          sx={{ margin: "0 10px 0 5px" }}
        >
          <RemoveIcon />
        </IconButton>
        <TextField
          size="small"
          disabled
          value={cart.find((item) => item.id === product.id)?.quantity ?? 0}
        />
        <IconButton
          size="small"
          onClick={increase}
          sx={{ margin: "0 5px 0 10px" }}
        >
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

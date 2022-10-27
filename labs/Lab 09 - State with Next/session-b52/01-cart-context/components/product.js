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
import { useStoreContext } from "contexts/context";

export default function Product({ product }) {
  const { state, dispatch } = useStoreContext();

  const decrease = (event) => {
    dispatch({ type: "DECREASE", payload: { id: product.id } });
  };

  const increase = (event) => {
    dispatch({ type: "INCREASE", payload: { id: product.id } });
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
          disabled={!state.cart.find((item) => item.id === product.id)}
          sx={{ margin: "0 10px 0 5px" }}
        >
          <RemoveIcon />
        </IconButton>
        <TextField
          size="small"
          disabled
          value={
            state.cart.find((item) => item.id === product.id)?.quantity ?? 0
          }
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

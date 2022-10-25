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

export default function Product({ product, state, dispatch }) {
  const decrease = (event) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: product.id });
  };

  const increase = (event) => {
    console.log("INCREASE");
    dispatch({ type: "INCREASE_QUANTITY", payload: product.id });
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
            (state.find((item) => item.id === product.id)?.quantity ?? 0) < 1
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
              value={
                state.find((item) => item.id === product.id)?.quantity ?? 0
              }
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

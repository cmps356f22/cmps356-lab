import { useState } from "react";
import { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Grid,
  IconButton,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";

export default function Cats({
  products: allProducts,
  categories,
  state,
  dispatch,
}) {
  const router = useRouter();
  const { category } = router.query;
  const products = useMemo(
    () => allProducts.filter((product) => product.category === category),
    [category]
  );

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const showCart = () => {
    setOpen(true);
  };

  const decrease = (event, id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  const increase = (event, id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  return (
    <Container maxWidth="lg" sx={{ padding: "20px" }}>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set backup account</DialogTitle>
        <List sx={{ pt: 0 }}>
          {state.map((item) => (
            <ListItem
              button
              // onClick={() => handleListItemClick(email)}
              key={item.id}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  allProducts.find((product) => product.id === item.id).name
                }
              />
            </ListItem>
          ))}
          <ListItem
            autoFocus
            button
            // onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </List>
      </Dialog>
      <Container component="header" sx={{ padding: "10px 0" }}>
        <Stack component="nav" direction="row" spacing={2}>
          {categories.map((category) => (
            <Link href={`/${category}`}>
              <Button variant="outlined">
                <a>{category}</a>
              </Button>
            </Link>
          ))}
          <Button onClick={showCart}>
            <ShoppingCartIcon />
            {state.reduce((acc, val) => acc + val.quantity, 0)} $
            {state.reduce(
              (acc, val) =>
                acc +
                  val.quantity *
                    allProducts.find((product) => product.id === val.id)
                      .price ?? 0,
              0.0
            )}
          </Button>
        </Stack>
      </Container>
      <Grid container component="main" spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={6} md={4} lg={3}>
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
                    (state.find((item) => item.id === product.id)?.quantity ??
                      0) < 1
                  }
                  onClick={(event) => decrease(event, product.id)}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography variant="body2" color="text.secondary">
                  <Typography variant="h6">
                    <TextField
                      disabled
                      variant="outlined"
                      value={
                        state.find((item) => item.id === product.id)
                          ?.quantity ?? 0
                      }
                    />
                  </Typography>
                </Typography>
                <IconButton onClick={(event) => increase(event, product.id)}>
                  <AddIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Container component="footer"></Container>
    </Container>
  );
}

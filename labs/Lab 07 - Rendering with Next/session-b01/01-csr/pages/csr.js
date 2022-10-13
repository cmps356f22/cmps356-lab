import Link from "next/link";
import useSWR from "swr";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
// import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import { fetcher } from "utils/fetcher";

export default function CSR() {
  const { data, error } = useSWR(
    "https://pokeapi.co/api/v2/pokemon?limit=1154",
    // "https://restcountries.com/v3.1/all",
    fetcher
  );

  if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  } else if (!data) {
    return <CircularProgress />;
  } else {
    return (
      <>
        <Grid container spacing={2}>
          {data.results.map((pokemon) => (
            <Grid key={pokemon.name} item xs={2}>
              <Card>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <Link href={`/pokemons/${pokemon.name}`}>
                      <a>{pokemon.name}</a>
                    </Link>
                  </Typography>
                </CardContent>
                {/* <CardActions>
                  <Button size="small">⭐️</Button>
                </CardActions> */}
              </Card>
            </Grid>
          ))}
        </Grid>
        )
      </>
    );
  }
}

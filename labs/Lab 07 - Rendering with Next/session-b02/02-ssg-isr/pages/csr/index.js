import useSWR from "swr";
import Link from "next/link";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { fetcher } from "utils/fetcher";

export default function CSR() {
  const { data, error } = useSWR(
    "https://pokeapi.co/api/v2/pokemon?limit=1154",
    fetcher
  );

  if (error) return <Alert severity="error">failed to load!</Alert>;
  if (!data)
    return (
      <>
        <Alert severity="info">loading..</Alert>
        <CircularProgress />
      </>
    );
  return (
    <Grid container spacing={2}>
      {data.results
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((pokemon) => (
          <Grid item xs={3} key={pokemon.name}>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <Link href={`/csr/pokemons/${pokemon.name}`}>
                    <a>{pokemon.name}</a>
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}

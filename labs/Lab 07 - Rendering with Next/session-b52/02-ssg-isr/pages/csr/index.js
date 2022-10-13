import useSWR from "swr";
import Link from "next/link";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { fetcher } from "utils/fetcher";

export default function CSR() {
  const { data, error } = useSWR(
    "https://pokeapi.co/api/v2/pokemon?limit=1154",
    fetcher
    // {suspense: true}
  );

  if (error) return <Alert severity="error">{error.message}</Alert>;
  if (!data) return <Alert severity="info">Loading...</Alert>;

  // render data
  return (
    <>
      <Alert severity="success">Loaded!</Alert>
      <Grid container spacing={2}>
        {data.results
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((pokemon) => (
            <Grid key={pokemon.name} item xs={6} sm={3}>
              <Link href={`/csr/pokemons/${pokemon.name}`}>
                <a>
                  <Card>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {pokemon.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

// const CSR = () => {}
// CSR.getStaticProps = async () => {}
// export default CSR;

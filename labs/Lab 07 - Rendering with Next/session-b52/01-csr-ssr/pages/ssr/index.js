import useSWR from "swr";
import Link from "next/link";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { fetcher } from "utils/fetcher";

export async function getServerSideProps(context) {
  console.log("Fetch names");
  const data = await fetcher("https://pokeapi.co/api/v2/pokemon?limit=1154");
  return { props: { data } };
}

export default function SSR({ data }) {
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

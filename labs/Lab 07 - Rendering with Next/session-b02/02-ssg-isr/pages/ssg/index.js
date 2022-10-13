import useSWR from "swr";
import Link from "next/link";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { SliderRail } from "@mui/material";
// import Alert from "@mui/material/Alert";
// import CircularProgress from "@mui/material/CircularProgress";
import { fetcher } from "utils/fetcher";
import Layout from "layouts/layout";

export async function getStaticProps(context) {
  const data = await fetcher("https://pokeapi.co/api/v2/pokemon?limit=1154");
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}

export default function SSG({ data }) {
  return (
    <Layout>
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
                    <Link href={`/ssr/pokemons/${pokemon.name}`}>
                      <a>{pokemon.name}</a>
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Layout>
  );
}

// const SSR = () => { }
// SSR.getServerSideProps = async () => { }
// export default SSR;

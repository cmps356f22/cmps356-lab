import { Suspense } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "utils/fetcher";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function Pokemon({ data }) {
  return (
    <>
      <List>
        <ListItem>Name: {data.name}</ListItem>
        <ListItem>ID: {data.id}</ListItem>
        <ListItem>Base Experience: {data.base_experience}</ListItem>
        <ListItem>Height: {data.height}</ListItem>
        <ListItem>Weight: {data.weight}</ListItem>
      </List>
    </>
  );

  // return (
  //   <Suspense fallback={<CircularProgress />}>
  //     <List>
  //       <ListItem>Name: {data.name}</ListItem>
  //       <ListItem>ID: {data.id}</ListItem>
  //       <ListItem>Base Experience: {data.base_experience}</ListItem>
  //       <ListItem>Height: {data.height}</ListItem>
  //       <ListItem>Weight: {data.weight}</ListItem>
  //     </List>
  //   </Suspense>
  // );
}

export async function getStaticProps({ params }) {
  console.log("Fetching SSG Pokemon");

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.name}`
  );
  const data = await response.json();

  return {
    props: {
      data: {
        name: data.name,
        id: data.id,
        base_experience: data.base_experience,
        height: data.height,
        weight: data.weight,
      },
    }, // will be passed to the page component as props
    revalidate: 60 * 60 * 24, // every day
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1154");
  const data = await response.json();

  return {
    // paths: [{ params: { name: 1 } }],
    paths: data.results.map((pokemon) => ({
      params: {
        name: pokemon.name,
      },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

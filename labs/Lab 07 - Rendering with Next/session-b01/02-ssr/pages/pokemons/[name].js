import { Suspense } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "utils/fetcher";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function Pokemon() {
  const router = useRouter();
  console.log(router);
  const { name } = router.query;
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    fetcher,
    { suspense: false }
  );

  if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  } else if (!data) {
    return <CircularProgress />;
  } else {
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
  }

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

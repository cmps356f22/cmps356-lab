import useSWR from "swr";
import Link from "next/link";
import { useRouter } from "next/router";
import { fetcher } from "utils/fetcher";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Alert from "@mui/material/Alert";
import Adjust from "@mui/icons-material/Adjust";

const fields = [
  { code: "id", name: "ID" },
  { code: "name", name: "Name" },
  { code: "base_experience", name: "Base Experience" },
  { code: "height", name: "Height" },
  { code: "order", name: "Order" },
  { code: "weight", name: "Weight" },
];

export async function getServerSideProps(context) {
  console.log("Fetch Pokémon");

  const { name } = context.params; // context.query
  let data = await fetcher(`https://pokeapi.co/api/v2/pokemon/${name}`);
  data = fields.reduce(
    (acc, field) => ({
      ...acc,
      [field.code]: data[field.code],
    }),
    {}
  );
  console.log(data);

  return { props: { data } };
}

export default function Pokemon({ data }) {
  return (
    <>
      <Alert severity="success">Loaded!</Alert>
      <List>
        {fields.map((field) => (
          <ListItem key={field.code}>
            <ListItemAvatar>
              <Avatar>
                <Adjust />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={field.name} secondary={data[field.code]} />
          </ListItem>
        ))}
      </List>
      <Link href="/csr">
        <a>← Go Back</a>
      </Link>
    </>
  );
}

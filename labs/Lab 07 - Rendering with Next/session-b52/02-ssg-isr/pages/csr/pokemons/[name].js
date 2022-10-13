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

export default function Pokemon() {
  const router = useRouter();
  const { name } = router.query;

  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    fetcher
  );

  if (error) return <Alert severity="error">{error.message}</Alert>;
  if (!data) return <Alert severity="info">Loading...</Alert>;

  const fields = [
    { code: "id", name: "ID" },
    { code: "name", name: "Name" },
    { code: "base_experience", name: "Base Experience" },
    { code: "height", name: "Height" },
    { code: "order", name: "Order" },
    { code: "weight", name: "Weight" },
  ];

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

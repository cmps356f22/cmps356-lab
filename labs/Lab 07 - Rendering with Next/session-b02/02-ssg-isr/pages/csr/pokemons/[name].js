import useSWR from "swr";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { fetcher } from "utils/fetcher";
import Link from "next/link";
import { useRouter } from "next/router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import ListItemText from "@mui/material/ListItemText";

export default function Pokemon() {
  const router = useRouter();
  const { name } = router.query;

  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
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
      <List>
        {fields.map((field) => (
          <ListItem key={field.code} disablePadding>
            <ListItemAvatar>
              <Avatar>
                <ModeStandbyIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={field.name} secondary={data[field.code]} />
          </ListItem>
        ))}
      </List>
      <Link href="/csr">
        <a>← Back</a>
      </Link>
    </>
  );
}

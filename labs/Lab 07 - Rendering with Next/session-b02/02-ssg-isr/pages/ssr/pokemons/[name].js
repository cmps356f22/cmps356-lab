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

export async function getServerSideProps(context) {
  const { name } = context.query;
  const data = await fetcher(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}

export default function Pokemon({ data }) {
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

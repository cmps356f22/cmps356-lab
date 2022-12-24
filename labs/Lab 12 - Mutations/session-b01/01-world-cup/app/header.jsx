import Link from "next/link";
import { Badge, Button, IconButton, Stack, TextField } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useStore } from "app/store";
// import { Calendar } from "@emotion-icons/open-iconic";

export default function Header() {
  const schedule = useStore((state) => state.schedule);
  const search = useStore((state) => state.search);
  const setSearch = useStore((state) => state.setSearch);

  const updateSearch = ({ target: { value } }) => {
    setSearch(value);
  };

  return (
    <header>
      <Stack
        component="nav"
        direction="row"
        justifyContent="space-between"
        sx={{ padding: 2 }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Link href="/">
            <Button>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/e/e3/2022_FIFA_World_Cup.svg"
                alt="World Cup 2022"
                width="20"
              />
            </Button>
          </Link>
          <Link href="/groups">
            <Button>Groups</Button>
          </Link>
          <Link href="/matches">
            <Button>Matches</Button>
          </Link>
          <Link href="/teams">
            <Button>Teams</Button>
          </Link>
          {/* <Teams /> */}
        </Stack>
        <Stack direction="row">
          <Link href="/schedule">
            <IconButton
              disabled={!schedule?.length ?? 0}
              sx={{ marginRight: "10px" }}
            >
              <Badge
                badgeContent={schedule?.length ?? 0}
                max={99}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <DateRangeIcon />
              </Badge>
            </IconButton>
          </Link>
          <TextField
            label="Search"
            value={search ?? ""}
            onChange={updateSearch}
            size="small"
            inputProps={{ type: "search" }}
          />
        </Stack>
      </Stack>
    </header>
  );
}

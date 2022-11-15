"use client";

import { useState, useEffect, useDeferredValue } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Alert,
  Avatar,
  Box,
  Card,
  CardContent,
  // CardHeader,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Snackbar,
  Typography,
} from "@mui/material";
import { flags } from "utility/flags";
import { useStore } from "app/store";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.status);
};

const Groups = () => {
  const search = useStore((state) => state.store);
  const [alert, setAlert] = useState(true);
  const [groups, setGroups] = useState([]);
  const [searchGroups, setSearchGroups] = useState([]);
  const deferredSearch = useDeferredValue(search);

  const query = useQuery(
    ["groups"],
    async () => await fetcher("http://localhost:3001/api/teams"),
    // async () => await fetcher("https://queue.qa/356/midterm/4e6d/api/teams"),
    // async () => await fetcher("https://world-cup-json-2022.fly.dev/teams"),
    {
      suspense: true,
      retry: false,
    }
  );

  const closeAlert = (event, reason) => {
    if (reason !== "clickAway") {
      setAlert(false);
    }
  };

  useEffect(() => {
    if (query.isSuccess) {
      setGroups(query.data.groups);
    }
  }, [query.isSuccess]);

  useEffect(() => {
    setSearchGroups(
      !deferredSearch
        ? groups
        : groups.filter((group) =>
            group.teams.find(
              (team) =>
                team.country
                  .toLowerCase()
                  .includes(deferredSearch.toLowerCase()) ||
                team.name.toLowerCase().includes(deferredSearch.toLowerCase())
            )
          )
    );
  }, [deferredSearch, groups]);

  return (
    <Box>
      <Snackbar
        open={alert}
        autoHideDuration={5000}
        // anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        onClose={closeAlert}
      >
        {query.isError ? (
          <Alert severity="error" onClose={closeAlert}>
            Error: {query.error.message}
          </Alert>
        ) : query.isLoading || query.isFetching || query.isRefetching ? (
          <Alert severity="info" onClose={closeAlert}>
            Fetching...
          </Alert>
        ) : (
          <Alert severity="success" onClose={closeAlert}>
            Success!
          </Alert>
        )}
      </Snackbar>

      <Grid component="section" container spacing={2}>
        {searchGroups &&
          searchGroups.map((group) => (
            <Grid
              key={group.letter}
              component="article"
              item
              xs={12}
              md={6}
              lg={4}
            >
              <Card variant="outlined">
                {/* <CardHeader title={`Group ${group.letter}`} /> */}
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ padding: "10px 0 5px 15px" }}
                  >
                    {`Group ${group.letter}`}
                  </Typography>
                  <List>
                    {group.teams.map((team) => (
                      <ListItem key={team.country}>
                        <ListItemAvatar>
                          <Avatar
                            sx={{ width: 32, height: 32 }}
                            src={`https://hatscripts.github.io/circle-flags/flags/${
                              flags[team.country] ?? "xx"
                            }.svg`}
                            alt={team.name}
                          />
                        </ListItemAvatar>
                        <ListItemText primary={team.name} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Groups;

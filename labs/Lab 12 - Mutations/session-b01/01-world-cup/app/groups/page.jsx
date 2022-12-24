"use client";

import { useState, useEffect, useDeferredValue } from "react";
import { useQuery } from "@tanstack/react-query";
import {
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
  TextField,
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
  const [oneTeam, setOneTeam] = useState("Team");
  const search = useStore((state) => state.store);
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

  const updateTeam = (country, value) => {
    setGroups((groups) => {
      return [...groups].map((group) => ({
        ...group,
        teams: group.teams.map((team) => {
          if (team.country === country) {
            return { ...team, name: value };
          } else {
            return team;
          }
        }),
      }));
    });
  };

  return (
    <Box>
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
                        <TextField
                          value={team.name}
                          onChange={({ target: { value } }) =>
                            updateTeam(team.country, value)
                          }
                        />
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

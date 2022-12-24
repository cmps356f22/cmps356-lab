"use client";

import { useState, useEffect, useDeferredValue, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  MenuItem,
  // IconButton,
  Typography,
  Select,
  Stack,
} from "@mui/material";
// import StarIcon from "@mui/icons-material/Star";
// import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { flags } from "utility/flags";
import { useMediaQuery } from "@mui/material";
import { useStore } from "app/store";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.status);
};

const Matches = () => {
  const search = useStore((state) => state.search);
  const schedule = useStore((state) => state.schedule);
  const [matches, setMatches] = useState([]);
  const [searchMatches, setSearchMatches] = useState([]);
  const deferredSearch = useDeferredValue(search);
  const darkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const query = useQuery(
    ["matches"],
    async () => await fetcher("http://localhost:3001/api/matches"),
    // async () => await fetcher("https://queue.qa/356/midterm/4e6d/api/matches"),
    // async () => await fetcher("https://world-cup-json-2022.fly.dev/matches"),
    {
      retry: false,
    }
  );

  const queryTeams = useQuery(
    ["teams"],
    async () => await fetcher("http://localhost:3001/api/teams"),
    // async () => await fetcher("https://queue.qa/356/midterm/4e6d/api/matches"),
    // async () => await fetcher("https://world-cup-json-2022.fly.dev/matches"),
    {
      retry: false,
    }
  );

  const teams = useMemo(
    () =>
      !queryTeams.isSuccess
        ? []
        : queryTeams.data.groups
            .map((group) =>
              group.teams.map((team) => ({
                country: team.country,
                name: team.name,
              }))
            )
            .flat()
            .sort((a, b) => a.name > b.name),
    [queryTeams.isSuccess]
  );

  const toggleSchedule = (event, match) => {
    setSchedule((schedule) => {
      const newSchedule = [...schedule];
      const index = newSchedule.findIndex((item) => item.id === match.id);
      if (index === -1) {
        newSchedule.push(match);
      } else {
        newSchedule.splice(index, 1);
      }
      newSchedule.sort((a, b) => new Date(a.datetime) > new Date(b.datetime));
      return newSchedule;
    });
  };

  useEffect(() => {
    if (query.isSuccess) {
      setMatches(query.data);
    }
  }, [query.isSuccess]);

  useEffect(() => {
    setSearchMatches(
      !deferredSearch
        ? matches
        : matches.filter(
            (match) =>
              match.home_team.name
                .toLowerCase()
                .includes(deferredSearch.toLowerCase()) ||
              match.away_team.name
                .toLowerCase()
                .includes(deferredSearch.toLowerCase()) ||
              match.venue
                .toLowerCase()
                .includes(deferredSearch.toLowerCase()) ||
              match.location
                .toLowerCase()
                .includes(deferredSearch.toLowerCase())
          )
    );
  }, [deferredSearch, matches]);

  return (
    <Box>
      <Grid component="section" container spacing={2} alignItems="stretch">
        {query.data &&
          query.data.map((match) => (
            <Grid
              key={match.id}
              component="article"
              item
              xs={12}
              md={6}
              lg={4}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Card
                variant="outlined"
                sx={{
                  cursor: "pointer",
                  backgroundColor: schedule.find((item) => item.id === match.id)
                    ? darkMode
                      ? "#222222"
                      : "#DDDDDD"
                    : "none",
                  height: "100%",
                }}
                // onClick={(e) => toggleSchedule(e, match)}
              >
                <CardContent>
                  <Stack
                    direction="row"
                    justifyContent="space-around"
                    sx={{ margin: "10px 0 10px 0" }}
                  >
                    <Avatar
                      sx={{ width: 32, height: 32, marginRight: "10px" }}
                      src={`https://hatscripts.github.io/circle-flags/flags/${
                        flags[match.home_team_country] ?? "xx"
                      }.svg`}
                      alt={match.home_team_country}
                    />
                    {match.home_team.name === "To Be Determined" ? (
                      <TeamSelection
                        teams={teams}
                        match={match.id}
                        type={"home"}
                      />
                    ) : (
                      <Typography gutterBottom variant="h6" component="div">
                        {match.home_team.name}
                      </Typography>
                    )}
                    <Typography gutterBottom variant="h6" component="div">
                      ×
                    </Typography>
                    {match.away_team.name === "To Be Determined" ? (
                      <TeamSelection
                        teams={teams}
                        match={match.id}
                        type={"away"}
                      />
                    ) : (
                      <Typography gutterBottom variant="h6" component="div">
                        {match.away_team.name}
                      </Typography>
                    )}
                    <Avatar
                      sx={{ width: 32, height: 32, marginLeft: "10px" }}
                      src={`https://hatscripts.github.io/circle-flags/flags/${
                        flags[match.away_team_country] ?? "xx"
                      }.svg`}
                      alt={match.away_team_country}
                    />
                  </Stack>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="text.secondary"
                    component="div"
                  >
                    {new Date(match.datetime).toLocaleString()}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="text.secondary"
                  >
                    {`${match.venue}, ${match.location}`}
                  </Typography>
                  {/* <IconButton
                    size="small"
                    onClick={(e) => toggleSchedule(e, match)}
                    sx={{ margin: "10px 5px 0 0" }}
                  >
                    {schedule.find((item) => item.id === match.id) ? (
                      <StarIcon />
                    ) : (
                      <StarOutlineIcon />
                    )}
                  </IconButton> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

const updateTeamRequest = async ({ match, type, country }) =>
  await fetcher("http://localhost:3001/api/matches", {
    method: "PATCH",
    body: JSON.stringify({ match, type, country }),
  });

const TeamSelection = ({ teams, match, type }) => {
  const [team, setTeam] = useState("");

  const queryClient = useQueryClient();
  const teamMutation = useMutation(updateTeamRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries("matches");
    },
  });

  const updateTeam = (country) => {
    setTeam(country);
    teamMutation.mutate({ match, type, country });
  };

  return (
    <Select
      value={team}
      onChange={(e) => updateTeam(e.target.value)}
      size="small"
    >
      {teams.map((t) => (
        <MenuItem key={t.country} value={t.country}>
          <Avatar
            sx={{ width: 16, height: 16 }}
            src={`https://hatscripts.github.io/circle-flags/flags/${
              flags[t.country] ?? "xx"
            }.svg`}
            alt={t.country}
          />
        </MenuItem>
      ))}
    </Select>
  );
};

export default Matches;

"use client";

import { useMemo, useEffect } from "react";
import { notFound } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import { flags } from "utility/flags";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.status);
};

export default function Team({ params, searchParams }) {
  const team = params.team.toUpperCase();
  const query = useQuery(
    ["team"],
    async () => await fetcher("http://localhost:3001/api/matches"),
    // async () => await fetcher("https://queue.qa/356/midterm/4e6d/api/matches"),
    // async () => await fetcher("https://world-cup-json-2022.fly.dev/matches"),
    {
      retry: false,
    }
  );

  const matches = useMemo(
    () =>
      query.isSuccess
        ? query.data.filter(
            (match) =>
              match.home_team.country == team || match.away_team.country == team
          )
        : [],
    []
  );

  useEffect(() => {
    if (matches && !matches.length) {
      notFound();
    }
  }, [matches]);

  return (
    <Box sx={{ marginTop: 2 }}>
      <Grid component="section" container spacing={2} alignItems="stretch">
        {matches &&
          matches.map((match) => (
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
                  // backgroundColor: schedule.find((item) => item.id === match.id)
                  // ? darkMode
                  //   ? "#222222"
                  //   : "#DDDDDD"
                  // : "none",
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
                    <Typography gutterBottom variant="h6" component="div">
                      {`${
                        match.home_team.name === "To Be Determined"
                          ? "?"
                          : match.home_team.name
                      } × ${
                        match.away_team.name === "To Be Determined"
                          ? "?"
                          : match.away_team.name
                      }`}
                    </Typography>
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
}

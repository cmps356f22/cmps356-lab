"use client";

import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Chip, Stack } from "@mui/material";
import { flags } from "utility/flags";
import { useRouter } from "next/navigation";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.status);
};

export default function TeamsLayout({ children }) {
  const router = useRouter();

  const query = useQuery(
    ["teams"],
    async () => await fetcher("http://localhost:3001/api/teams"),
    // async () => await fetcher("https://queue.qa/356/midterm/4e6d/api/teams"),
    // async () => await fetcher("https://world-cup-json-2022.fly.dev/teams"),
    {
      // suspense: true,
      retry: false,
    }
  );

  const teams = useMemo(
    () =>
      !query.isSuccess
        ? []
        : query.data.groups
            .map((group) =>
              group.teams.map((team) => ({
                country: team.country,
                name: team.name,
              }))
            )
            .flat()
            .sort((a, b) => a.name > b.name),
    [query.isSuccess]
  );

  const selectTeam = (country) => {
    router.push(`teams/${country.toLowerCase()}`);
  };

  return (
    <>
      <Stack direction="row" gap={1} flexWrap="wrap">
        {teams.map((team) => (
          <Chip
            key={team.country}
            label={team.name}
            variant="outlined"
            onClick={(e) => selectTeam(team.country)}
            avatar={
              <Avatar
                sx={{ width: 32, height: 32 }}
                src={`https://hatscripts.github.io/circle-flags/flags/${
                  flags[team.country] ?? "xx"
                }.svg`}
                alt={team.name}
              />
            }
          />
        ))}
      </Stack>
      {children}
    </>
  );
}

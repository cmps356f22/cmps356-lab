"use client";

import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Avatar, Chip, Stack } from "@mui/material";
import { flags } from "utility/flags";

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
      query.isSuccess
        ? []
            .concat(...query.data.groups.map((group) => group.teams))
            .map((team) => ({ country: team.country, name: team.name }))
            .sort((a, b) => a.name > b.name)
        : [],
    []
  );

  const selectTeam = (country) => {
    router.push(`/teams/${country.toLowerCase()}`);
  };

  return (
    <>
      <Stack direction="row" flexWrap="wrap">
        {teams &&
          teams.map((team) => (
            <Chip
              variant="outlined"
              label={team.name}
              onClick={(e) => selectTeam(team.country)}
              sx={{ pointer: "cursor" }}
              avatar={
                <Avatar
                  sx={{ width: 24, height: 24 }}
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

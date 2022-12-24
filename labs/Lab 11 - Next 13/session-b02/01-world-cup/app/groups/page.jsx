"use client";

import { useQuery } from "@tanstack/react-query";
import { Card, Grid } from "@nextui-org/react";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  if (res.ok) {
    return await res.json();
  } else {
    throw Error(res.status);
  }
};

export default function Groups() {
  const query = useQuery(
    ["groups"],
    async () => fetcher("http://localhost:3000/api/teams"),
    {
      suspense: true,
      retry: false,
    }
  );

  return (
    <Grid.Container gap={2}>
      {query.data.groups.map((group) => (
        <Grid key={group.letter}>
          <Card variant="bordered">
            <Card.Header>Group {group.letter}</Card.Header>
            <Card.Body>
              {group.teams.map((team) => (
                <div key={team.country}>{team.name}</div>
              ))}
            </Card.Body>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}

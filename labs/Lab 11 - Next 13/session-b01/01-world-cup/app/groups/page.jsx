"use client";

import { useQuery } from "@tanstack/react-query";
import { Card, Grid } from "@nextui-org/react";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    // if (response.status === 429) {
    //   const data = await response.json();
    //   throw new Error(data.error);
    // }
    throw new Error(response.status);
  }
  return await response.json();
};
export default function Groups() {
  const query = useQuery(
    ["groups"],
    () => fetcher("http://localhost:3000/api/teams"),
    {
      suspense: true,
      retry: false,
    }
  );

  return (
    <>
      <Grid.Container gap={2}>
        {query.data.groups.map((group) => (
          <Grid key={group.letter} xs={12} sm={6} md={4}>
            <Card variant="bordered">
              <Card.Header>Group {group.letter}</Card.Header>
              <Card.Body>
                {group.teams.map((team) => (
                  <div key={team.name}>{team.name}</div>
                ))}
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
}

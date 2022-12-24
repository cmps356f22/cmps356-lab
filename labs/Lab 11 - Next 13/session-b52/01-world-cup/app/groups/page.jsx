"use client";
import { useQuery } from "@tanstack/react-query";

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
    () => fetcher("http://localhost:3000/api/teams"),
    { suspense: true }
  );
  return <p>{JSON.stringify(query.data)}</p>;
}

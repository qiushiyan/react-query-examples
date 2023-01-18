import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetcher } from "../../src/lib/utils";
import Spinner from "@components/ui/Spinner";

type Data = {
  name: string;
  description: string;
  subscribers_count: number;
  stargazers_count: number;
  forks_count: number;
};

const fetchRepoData = async () => {
  return await fetcher(
    "https://api.github.com/repos/tannerlinsley/react-query",
    {
      delayMilliseconds: 1000,
    }
  );
};

export default function Example() {
  const { isLoading, error, data, isFetching } = useQuery<Data>(
    ["repoData"],
    fetchRepoData
  );

  if (isLoading || isFetching) return <Spinner />;

  if (error) return <p>"An error has occurred: " + error.message</p>;

  if (data) {
    return (
      <div>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{" "}
        <strong>✨ {data.stargazers_count}</strong>{" "}
        <strong>🍴 {data.forks_count}</strong>
      </div>
    );
  }

  return <div>no data</div>;
}

import { useQueryClient } from "@tanstack/react-query";
import React, { useCallback } from "react";
import Button from "./ui/Button";

interface Props {
  queryKey: string[];
}

export default function RefetchButton({ queryKey }: Props) {
  const client = useQueryClient();

  const handleRefetch = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      client.invalidateQueries(queryKey, { exact: true });
    },
    []
  );

  return <Button onClick={(e) => handleRefetch(e)}>Refetch</Button>;
}

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slice } from "gatsby";

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export default function Layout({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="content w-full min-h-screen bg-dark text-light p-10 dark">
        <main className="max-w-6xl grid grid-cols-4 gap-12 mx-auto">
          <div className="col-span-1">
            <Slice alias="Sidebar" />
          </div>
          <div className="col-span-3">{children}</div>
        </main>
      </div>
    </QueryClientProvider>
  );
}

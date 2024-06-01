"use client";

import { toast } from "react-toastify";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";

export const ReactQueryProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (err, query) => {
        let message = `Something went wrong. Try again later.`;
        if (axios.isAxiosError(err) && err.response) {
          message = `Something went wrong: ${err.message}`;
        }
        if (query.meta?.errorMessage) {
          message = query.meta.errorMessage as string;
        }
        toast.error(message);
        console.error(err);
      },
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={false}
        position="bottom"
        buttonPosition="bottom-left"
      />
    </QueryClientProvider>
  );
};

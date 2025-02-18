"use client";

import TWAProvider from "./twa-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TWAProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </TWAProvider>
  );
}

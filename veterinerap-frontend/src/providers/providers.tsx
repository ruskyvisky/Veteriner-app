"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />

      {children}

    </QueryClientProvider>
  );
}
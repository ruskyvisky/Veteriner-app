"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "../redux/store";
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
     <Provider store={store}>
    <QueryClientProvider client={queryClient}>

      <ToastContainer />

      {children}

    </QueryClientProvider>
    </Provider>
  );
}
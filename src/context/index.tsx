"use client";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "@/utils/config";
import ModalProvider from "@/context/ModalProvider";

export const Context = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ModalProvider />
      </QueryClientProvider>
    </WagmiProvider>
  );
};

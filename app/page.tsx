"use client";

import Image from "next/image";
import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  RainbowKitProvider,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mainnet, polygon } from "viem/chains";
const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: "App",
  projectId: "d461dc1f518c72fbd42c28e0bf2278dc",
  chains: [mainnet, polygon],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export default function Home() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div>
            <ConnectButton />
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

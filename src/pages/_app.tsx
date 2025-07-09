import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/react";
import { Inter } from "next/font/google";
import { cn } from "../utils/cn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <HeroUIProvider>
          <main
            className={cn(
              inter.className,
           
            )}
          >
            <Component {...pageProps} />
          </main>
        </HeroUIProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </SessionProvider>
  );
}

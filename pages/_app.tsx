import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import CommonLayout from "@/layout/CommonLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CommonLayout>
        <Component {...pageProps} />
      </CommonLayout>
    </ChakraProvider>
  );
}

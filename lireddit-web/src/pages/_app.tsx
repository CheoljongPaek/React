import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "../theme";
import client from "../utils/apolloClient";
import { AppProps } from "next/app";
import Layout from "../components/layouts/main";
import "@fontsource/m-plus-rounded-1c";

function MyWeb({ Component, pageProps, router }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: false,
          }}
        >
          <Layout router={router} />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyWeb;

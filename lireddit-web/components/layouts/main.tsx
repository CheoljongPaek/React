import { Box, Container } from "@chakra-ui/layout";
import Head from "next/head";
import React from "react";
import { NextRouter, Router } from "next/router";
import Navbar2 from "../NavBar2";

interface mainProps {
  router: Router;
}

const Main: React.FC<mainProps> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>CJ Paek - Homepage</title>
      </Head>

      <Navbar2 path={router.asPath} />
      {/* <Navbar2 /> */}

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;

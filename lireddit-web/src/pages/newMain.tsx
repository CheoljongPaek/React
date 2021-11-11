import { Box, Container, Heading } from "@chakra-ui/layout";
import React from "react";
import Navbar2 from "../components/NavBar2";

interface newMainProps {}

const Newmain: React.FC<newMainProps> = ({}) => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" mb={6} align="center">
        Hello, I&apos;m a Junior developer in Korea!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Cool Life
          </Heading>
          <p>Visuality for Everyone</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Newmain;

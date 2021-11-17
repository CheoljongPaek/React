import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Container, Heading } from "@chakra-ui/layout";
import React from "react";
import Navbar2 from "../components/NavBar2";
import Section from "../components/section";

interface newMainProps {}

const Newmain: React.FC<newMainProps> = ({}) => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a Junior developer in Korea!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Cheoljong Paek
          </Heading>
          <p>Visuality for Everyone</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/cheoljong.jfif"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
      </Section>
    </Container>
  );
};

export default Newmain;

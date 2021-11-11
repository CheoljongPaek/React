import React from "react";
import NextLink from "next/link";
import { Box, Container, Flex, Heading, HStack } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Logo from "./Logo";
import { Stack } from "@chakra-ui/react";

interface NavBar2Props {
  href?: any;
  path: any;
  _target?: any;
}

const Navbar2: React.FC<NavBar2Props> = ({
  href,
  path,
  _target,
  children,
  ...props
}) => {
  return (
    <Box
      // position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex>
          <Heading>
            <Logo />
          </Heading>
        </Flex>
        <HStack>
          <Box w="40px" h="40px" bg="yellow.200">
            Works
          </Box>
          <Box w="40px" h="40px" bg="tomato">
            Posts
          </Box>
          <Box w="40px" h="40px" bg="pink.100">
            Source
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar2;

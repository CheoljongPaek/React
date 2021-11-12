import React from "react";
import NextLink from "next/link";
import { Box, Container, Flex, Heading, HStack, Link } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Logo from "./Logo";
import { Stack } from "@chakra-ui/react";

interface NavBar2Props {
  href?: any;
  path: any;
  _target?: any;
}

interface LinkItemProps extends NavBar2Props {}

const LinkItem: React.FC<LinkItemProps> = ({
  href,
  path,
  _target,
  children,
  ...props
}) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");

  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar2: React.FC<NavBar2Props> = ({
  href,
  path,
  _target,
  children,
  ...props
}) => {
  return (
    <Box
      as="nav"
      position="fixed"
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
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <HStack>
          <LinkItem path={path} href="/works">
            Works
          </LinkItem>
          <LinkItem path={path} href="/posts">
            Posts
          </LinkItem>
          <LinkItem path={path} href="https://github.com">
            GitHub
          </LinkItem>
        </HStack>
        <Box>Button</Box>
      </Container>
    </Box>
  );
};

export default Navbar2;

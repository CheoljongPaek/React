import NextLink from "next/link";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Container, Heading, Link, SimpleGrid } from "@chakra-ui/layout";
import React from "react";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import { Button } from "@chakra-ui/button";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/Bio";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import ListItemBtn from "../components/ListItemBtn";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Griditem from "../components/GridItem";

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
        <Paragraph>
          I love specific examples and visual expressions rather than abstract
          explanations. I learned the basics of programming through Python.
          After falling in love with data structures and algorithms, I am
          utilizing JavaScript to implement more efficient websites these days.
          I am confident that I can develop any web service if I have enough
          time. The goal before graduating from college is to shorten overall
          development time and develop useful libraries. I love{" "}
          <NextLink href="/works/inkdrop">
            <Link>my life</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref>
            <Button rightIcon={<ChevronDownIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Korea.
        </BioSection>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Korea.
        </BioSection>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Korea.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ❤
        </Heading>
        <Paragraph>
          <NextLink href="/" passHref>
            <Link target="_blank">A</Link>
          </NextLink>
          ,
          <NextLink href="/" passHref>
            <Link>B</Link>
          </NextLink>
          ,
          <NextLink href="/" passHref>
            <Link>C</Link>
          </NextLink>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List spacing={3}>
          <ListItemBtn
            href="https://github.com/CheoljongPaek"
            icon={IoLogoGithub}
          >
            @CheoljongPaek
          </ListItemBtn>
          <ListItemBtn
            href="https://www.linkedin.com/in/cheoljong-paek-5b2b77224/"
            icon={IoLogoLinkedin}
          >
            @CheoljongPaek
          </ListItemBtn>
        </List>
      </Section>

      <SimpleGrid>
        <Griditem />
      </SimpleGrid>
      <Box align="center" my={4}>
        <NextLink href="/posts">
          <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            Popular posts
          </Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default Newmain;

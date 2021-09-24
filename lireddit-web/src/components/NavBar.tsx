import React from 'react'
import { Box, Flex, Link } from '@chakra-ui/layout';
import NextLink from "next/link";

interface NavBarProps {

}

const Navbar: React.FC<NavBarProps> = ({}) => {
  return (
    <Flex bg='tomato' p={4}>
      <Box bg="skyblue"  ml={'auto'}>
        <NextLink href="/login">
          <Link mr={2}>login</Link>
        </NextLink>
        <Link>register</Link>
      </Box>
    </Flex>
  );
}


export default Navbar
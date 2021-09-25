import React from 'react'
import { Box, Flex, Link } from '@chakra-ui/layout';
import NextLink from "next/link";
import { useMeQuery } from '../generated/graphql';
import { Button } from '@chakra-ui/button';

interface NavBarProps {

}

const Navbar: React.FC<NavBarProps> = ({}) => {
  const [{data, fetching}] = useMeQuery();
  let body = null;
  if (fetching) {
    /* fetching */
    // body = null;
  } else if (!data?.me) {
    /* Not logged in */
    body = (
      <>
        <NextLink href="/login">
          <Link mr={2}>login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>register</Link>
        </NextLink>
      </>
    )
  } else {
    /* logged in */
    body = (
      <Flex>
        <Box mr={2}>
          {data.me.username}
        </Box>
        <Button variant="link">logout</Button>
      </Flex>
    )
  }

  return (
    <Flex bg='tomato' p={4}>
      <Box ml={'auto'}>
        {body}
      </Box>
    </Flex>
  );
}


export default Navbar
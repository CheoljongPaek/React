import React from 'react'
import { Box, Flex, Heading, Link } from '@chakra-ui/layout';
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from '../generated/graphql';
import { Button } from '@chakra-ui/button';
import { isServer } from '../utils/isServer';
import { useRouter } from 'next/router';

interface NavBarProps {

}

const Navbar: React.FC<NavBarProps> = ({}) => {
  const router = useRouter();
  const [{fetching: logoutFetching}, logout] = useLogoutMutation();
  const [{data, fetching}] = useMeQuery({
    pause: isServer(),
  });
  let body = null;

  // console.log("data: ", data);
  

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
      <Flex align='center'>
        <NextLink href="/create-post">
          <Button as={Link} mr={4}>create post</Button>
        </NextLink>
        <Box mr={2}>
          {data.me.username}
        </Box>
        <Button 
          onClick={async () => {
            await logout();
            router.reload();
          }} 
          isLoading={logoutFetching}
          variant="link"
        >
          logout
        </Button>
      </Flex>
    )
  }

  return (
    <Flex 
      position="sticky" 
      top={0} 
      zIndex={1} 
      bg='tan' 
      p={4} 
      align="center"
    >
      <Flex
        flex={1}
        align="center"
        margin="auto"
        maxW={800}
      >
        <NextLink href='/'>
          <Link>
            <Heading>LiReddit</Heading>
          </Link>
        </NextLink>
        <Box ml={'auto'}>
          {body}
        </Box>
      </Flex>
    </Flex>
  );
}


export default Navbar
import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout';
import { withUrqlClient } from 'next-urql';
import Layout from '../components/Layout';
import { usePostsQuery } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';
import NextLink from 'next/link';
import { Button, IconButton } from '@chakra-ui/button';
import { useState } from 'react';
import Updootsection from '../components/UpdootSection';

const Index = () => {
  const [variables, setVariables] = useState({ limit: 15, cursor: null as null | string })
  const [{data, fetching, ...others}] = usePostsQuery({
    variables
  });
  console.log(fetching);
  console.log(data);
  
  if (!fetching && !data) {
    return <div>you got query failed for some reason</div>
  }  

  return (
    <Layout>
      <Flex align="center">
        <Heading>LiReddit</Heading>
        <NextLink href="/create-post">
          <Link ml="auto">create post</Link>
        </NextLink>
      </Flex>
      <br />
      {!data && fetching ? ( 
        <div>loading...</div>
       ) : (
        <Stack spacing={8}>
          {data!.posts.posts.map(p => 
            <>
              <Flex key={p.id} p={5} shadow="md" borderWidth="1px">
                <Updootsection post={p} />
                <Box>
                  <Heading fontSize="xl">{p.title}</Heading>
                  <Text>posted by {p.creator.username}</Text>
                  <Text mt={4}>{p.textSnippet}</Text>
                </Box>
              </Flex>
            </>
          )}
        </Stack>
       )}
       {data && data.posts.hasMore ? (
        <Flex>
          <Button 
            m="auto" 
            my={8}
            isLoading={fetching}
            onClick={() => {
              setVariables({
                limit: variables.limit,
                cursor: data.posts.posts[data.posts.posts.length - 1].createdAt
              })
            }}
          >
            load more
          </Button>
        </Flex>
       ): null}
    </Layout>
  )
} 

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);

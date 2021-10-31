import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout';
import { withUrqlClient } from 'next-urql';
import Layout from '../components/Layout';
import { useDeletePostMutation, usePostsQuery } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';
import NextLink from 'next/link';
import { Button, IconButton } from '@chakra-ui/button';
import { useState } from 'react';
import Updootsection from '../components/UpdootSection';
import { DeleteIcon } from '@chakra-ui/icons'

const Index = () => {
  const [variables, setVariables] = useState({ limit: 15, cursor: null as null | string })
  const [{data, fetching, error}] = usePostsQuery({
    variables
  });
  const [,deletePost] = useDeletePostMutation();
  
  
  if (!fetching && !data) {
    return <div>you got query failed for some reason</div>
  }  

  return (
    <Layout>
      {!data && fetching ? ( 
        <div>loading...</div>
       ) : (
        <Stack spacing={8}>
          {data!.posts.posts.map(p => 
            <>
              <Flex key={p.id} p={5} shadow="md" borderWidth="1px">
                <Updootsection post={p} />
                <Box>
                  <NextLink href="/post/[id]" as={`/post/${p.id}`}>
                    <Link>
                      <Heading fontSize="xl">{p.title}</Heading>
                    </Link>
                  </NextLink>
                  <Text>posted by {p.creator.username}</Text>
                  <Text mt={4}>{p.textSnippet}</Text>
                </Box>
                <Flex ml="auto" alignItems="flex-end">
                  <IconButton 
                    ml="auto"
                    icon={<DeleteIcon/>} 
                    colorScheme="red"
                    aria-label="Delete Post" 
                    onClick={() => {
                      deletePost({
                        id: parseInt(p.id)
                      });
                    }}
                  />
                </Flex>
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

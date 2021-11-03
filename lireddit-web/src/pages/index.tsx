import { Button } from '@chakra-ui/button';
import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout';
import { withUrqlClient } from 'next-urql';
import NextLink from 'next/link';
import { useState } from 'react';
import Editdeletepostbtns from '../components/EditDeletePostBtns';
import Layout from '../components/Layout';
import Updootsection from '../components/UpdootSection';
import { useMeQuery, usePostsQuery } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';

const Index = () => {
  const [variables, setVariables] = useState({ limit: 15, cursor: null as null | string })
  const [{ data: meData }] = useMeQuery();
  const [{data, fetching, error}] = usePostsQuery({
    variables
  });  
  
  if (!fetching && !data) {
    return <div>you got query failed for some reason</div>
  }  

  return (
    <Layout>
      {!data && fetching ? ( 
        <div>loading...</div>
       ) : (
        <Stack spacing={8}>
          {data!.posts.posts.map((p) => 
          !p ? null: (
              <Flex key={p.id} p={5} shadow="md" borderWidth="1px">
                <Updootsection post={p} />
                <Box>
                  <NextLink href={`/post/${p.id}`}>
                    <Link>
                      <Heading fontSize="xl">{p.title}</Heading>
                    </Link>
                  </NextLink>
                  <Text>posted by {p.creator.username}</Text>
                  <Text mt={4}>{p.textSnippet}</Text>
                </Box>
                {meData?.me?.id !== p.creator.id ? null : (
                  <Editdeletepostbtns id={parseInt(p.id)} creatorId={parseInt(p.creator.id)} />
                )}
              </Flex>
            )
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

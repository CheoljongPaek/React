import { withUrqlClient } from 'next-urql';
import React from 'react'
import Layout from '../../components/Layout';
import { createUrqlClient } from '../../utils/createUrqlClient';
import { Heading, Box } from "@chakra-ui/react"
import { useGetPostFromUrl } from '../../utils/useGetPostFromUrl';

const Post = ({}) => {
  const [{data, fetching, error}] = useGetPostFromUrl();

  if (fetching) {
    return (
      <Layout>
        <div>loading...</div>
      </Layout>
    )
  }
  
  if (error) {
    return <div>{error?.message}</div>
  }

  if (!data?.post) {
    return (
      <Layout>
        <Box>could not find post</Box>
      </Layout>
    )
  }

  return (
    <Layout>
      <Heading mb={4}>{data.post.title}</Heading>
      {data.post.text}
    </Layout>
  );
}


export default withUrqlClient(createUrqlClient, {ssr: true})(Post);
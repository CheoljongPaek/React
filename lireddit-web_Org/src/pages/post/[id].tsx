import React from "react";
import Layout from "../../components/Layout";
import { Heading, Box } from "@chakra-ui/react";
import { useGetPostFromUrl } from "../../utils/useGetPostFromUrl";
import Editdeletepostbtns from "../../components/EditDeletePostBtns";
import { withApollo } from "../../utils/withApollo";

const Post = ({}) => {
  const { data, loading, error } = useGetPostFromUrl();
  console.log("post data: ", data);

  if (loading) {
    return (
      <Layout>
        <div>loading...</div>
      </Layout>
    );
  }

  if (error) {
    return <div>{error?.message}</div>;
  }

  if (!data?.post) {
    return (
      <Layout>
        <Box>could not find post</Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Heading mb={4}>{data.post.title}</Heading>
      <Box mb={4}>{data.post.text}</Box>
      <Editdeletepostbtns id={data.post.id} creatorId={data.post.creator.id} />
    </Layout>
  );
};

export default withApollo({ ssr: true })(Post);

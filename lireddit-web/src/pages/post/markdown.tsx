import { ApolloProvider } from "@apollo/client";
import { Box, Heading } from "@chakra-ui/layout";
import { GetStaticProps } from "next";
import React from "react";
import Layout from "../../components/Layout";
import Wrapper from "../../components/Wrapper";
import { withApollo } from "../../utils/withApollo";

interface markdownProps {
  posts?: string;
}

const Markdown: React.FC<markdownProps> = ({ posts }) => {
  return (
    <Layout>
      <Heading>MarkDown</Heading>
      <Box>{posts}</Box>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      posts: "The Posts",
    }, // will be passed to the page component as props
  };
}

// export default withApollo({ ssr: true })(Markdown);
export default Markdown;

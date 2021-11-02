import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { Formik, Form } from 'formik';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import React from 'react'
import Inputfield from '../../../components/InputField';
import Layout from '../../../components/Layout';
import { usePostQuery, useUpdatePostMutation } from '../../../generated/graphql';
import { createUrqlClient } from '../../../utils/createUrqlClient';
import { useGetIntId } from '../../../utils/useGetIntId';

const EditPost = ({}) => {
  const router = useRouter();
  const intId = useGetIntId();
  const [{ data, fetching }] = usePostQuery({
    pause: intId === -1,
    variables: {
      id: intId
    }
  });
  const [, updatePost] = useUpdatePostMutation();

  if (fetching) {
    return (
      <Layout>
        <div>loading...</div>
      </Layout>
    )
  };

  if (!data?.post) {
    return (
      <Layout>
        <Box>could not find post</Box>
      </Layout>
    )
  };

  return (
    <Layout variant='small'>
      <Formik 
        initialValues={{ title: data.post.title, text: data.post.text}}
        onSubmit={async (values) => {
          await updatePost({
            id: intId,
            ...values
          })
          router.back();
        }}  
      >
        {(props) => (
          <Form>
            <Inputfield 
              name="title" 
              placeholder="title" 
              label="Title"
              type="text"
            />
            <Box mt={4}>
              <Inputfield
                textarea
                name="text" 
                placeholder="text..."
                label="Body"
              />
            </Box>
            <Button 
              mt={4} 
              type="submit" 
              colorScheme="teal"
              isLoading={props.isSubmitting}
            >
              update post
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
}


export default withUrqlClient(createUrqlClient, {ssr: true})(EditPost);
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
import createPost from '../../create-post';

const EditPost = ({}) => {
  const router = useRouter();
  const IntId = 
    typeof router.query.id === 'string'
    ? parseInt(router.query.id)
    : -1;
  const [{data, fetching, error}] = usePostQuery({
    
    variables: {
      id: IntId
    }
  });
  const [, updatePost] = useUpdatePostMutation();

  if (!data?.post) {
    return (
      <Layout>
        <Box>could not find post</Box>
      </Layout>
    )
  }

  return (
    <Layout variant='small'>
      <Formik 
        initialValues={{ title: data.post.title, text: data.post.text}}
        onSubmit={async (values) => {
          await updatePost({
            id: IntId,
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
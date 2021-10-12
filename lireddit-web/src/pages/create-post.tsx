import { Box, Flex, Link } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react'
import Inputfield from '../components/InputField';
import Layout from '../components/Layout';
import { useCreatePostMutation, useMeQuery } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { useIsAuth } from '../utils/useIsAuth';


const CreatePost: React.FC<{}> = ({}) => {
  const router = useRouter();
  useIsAuth();
  const [, createPost] = useCreatePostMutation();
  return (
    <Layout variant='small'>
      <Formik 
        initialValues={{ title: "", text: "" }}
        onSubmit={async (values, {setErrors}) => {
          const { error } = await createPost({ input: values });
          if (!error) {
            router.push("/");
          }
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
              create post
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
}


export default withUrqlClient(createUrqlClient)(CreatePost);
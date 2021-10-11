import { Box, Flex, Link } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import React from 'react'
import Inputfield from '../components/InputField';
import Wrapper from '../components/Wrapper';


const CreatePost: React.FC<{}> = ({}) => {
  return (
    <Wrapper variant='small'>
      <Formik 
        initialValues={{ title: "", text: "" }}
        onSubmit={async (values, {setErrors}) => {
          console.log(values);
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
    </Wrapper>
  );
}


export default CreatePost;
import { Box, Flex, Link, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { withUrqlClient } from 'next-urql';
import router from 'next/dist/client/router';
import React, { useState } from 'react'
import Inputfield from '../components/InputField';
import Wrapper from '../components/Wrapper';
import { useForgotPasswordMutation } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { toErrorMap } from '../utils/toErrorMap';
import login from './login';

const ForgotPassword: React.FC = ({}) => {
  const [complete, setComplete] = useState(false);
  const [, forgotPassword] = useForgotPasswordMutation();
  return (
    <Wrapper variant="small">
      <Formik 
        initialValues={{ email: "" }}
        onSubmit={async (values) => {
          await forgotPassword(values);
          setComplete(true);
        }}  
      >
        {(props) => 
          complete ? (
            <Box>
              if an account with that email exists, we sent you email.
            </Box>
          ) : (
          <Form>
            <Inputfield 
              name="email" 
              placeholder="email" 
              label="Email"
              type="email"
            />
            <Button 
              mt={4} 
              type="submit" 
              colorScheme="teal"
              isLoading={props.isSubmitting}
            >
              forgot password
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}


export default withUrqlClient(createUrqlClient)(ForgotPassword);
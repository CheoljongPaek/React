import React from 'react'
import {Form, Formik} from 'formik'
import Wrapper from '../components/Wrapper';
import Inputfield from '../components/InputField';
import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { useLoginMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMap';
import { useRouter } from 'next/dist/client/router';
import { createUrqlClient } from '../utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';

const Login: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [,login] = useLoginMutation();
  
  return (
    <Wrapper variant="small">
      <Formik 
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (values, {setErrors}) => {
          const response = await login(values);          
          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.user) {
            // worked, so navigate other renderPage.
            router.push("/");
          }
        }}  
      >
        {(props) => (
          <Form>
            <Inputfield 
              name="usernameOrEmail" 
              placeholder="username or Email" 
              label="username or Email"
              type="text"
            />
            <Box mt={4}>
              <Inputfield 
                name="password" 
                placeholder="password" 
                label="Password"
                type="password"
              />
            </Box>
            <Button 
              mt={4} 
              type="submit" 
              colorScheme="teal"
              isLoading={props.isSubmitting}
            >
              login
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}


export default withUrqlClient(createUrqlClient)(Login);
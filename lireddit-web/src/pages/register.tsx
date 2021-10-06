import React from 'react'
import {Form, Formik} from 'formik'
import Wrapper from '../components/Wrapper';
import Inputfield from '../components/InputField';
import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { useRegisterMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMap';
import { useRouter } from 'next/dist/client/router';
import { createUrqlClient } from '../utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';

interface registerProps {

}

const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  const [,register] = useRegisterMutation();
  
  return (
    <Wrapper variant="small">
      <Formik 
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={async (values, {setErrors}) => {
          const response = await register({ options: values });          
          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          } else if (response.data?.register.user) {
            // worked, so navigate other renderPage.
            router.push("/");
          }
        }}  
      >
        {(props) => (
          <Form>
            <Inputfield 
              name="username" 
              placeholder="username" 
              label="Username"
            />
            <Box mt={4}>
              <Inputfield 
                name="email" 
                placeholder="email" 
                label="Email"
              />
            </Box>
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
              register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}


export default withUrqlClient(createUrqlClient)(Register);
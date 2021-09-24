import React from 'react'
import {Form, Formik} from 'formik'
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import Wrapper from '../components/Wrapper';
import Inputfield from '../components/InputField';
import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { useLoginMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMap';
import { useRouter } from 'next/dist/client/router';

interface registerProps {

}

const Login: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [,login] = useLoginMutation();
  
  return (
    <Wrapper variant="small">
      <Formik 
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, {setErrors}) => {
          const response = await login({ options: values });          
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
            <Inputfield name="username" placeholder="username" label="username"/>
            <Box mt={4}>
              <Inputfield 
                name="password" 
                placeholder="password" 
                label="password"
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


export default Login;
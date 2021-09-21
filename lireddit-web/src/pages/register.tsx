import React from 'react'
import {Form, Formik} from 'formik'
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import Wrapper from '../components/Wrapper';
import Inputfield from '../components/InputField';
import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { useMutation } from 'urql';

interface registerProps {

}

const REGISTER_MUT = `
  mutation Register($username: String!, $password:String!) {
    register(options: { username: $username, password: $password }) {
      errors {
        field
        message
      }
      user {
        id
        username
      }
    }
  }
`

const Register: React.FC<registerProps> = ({}) => {
  const [,register] = useMutation(REGISTER_MUT);
  
  return (
    <Wrapper variant="small">
      <Formik 
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values) => {
          const response = await register(values);
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
              register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}


export default Register
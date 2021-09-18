import React from 'react'
import {Form, Formik} from 'formik'
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import Wrapper from '../components/Wrapper';
import Inputfield from '../components/InputField';

interface registerProps {

}



const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant="small">
      <Formik 
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}  
      >
        {({values, handleChange}) => (
          <Form>
            <Inputfield name="username" placeholder="username" label="username"/>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}


export default Register
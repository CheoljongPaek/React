import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { NextPage } from 'next';
import router from 'next/dist/client/router';
import React from 'react';
import Inputfield from '../../components/InputField';
import Wrapper from '../../components/Wrapper';
import { toErrorMap } from '../../utils/toErrorMap';
import login from '../login';

const ChangePassword: NextPage<{token: string}> = ({token}) => {
  return (
    <Wrapper variant="small">
      <Formik 
        initialValues={{ newPassword: '' }}
        onSubmit={async (values, {setErrors}) => {
          // const response = await login(values);          
          // if (response.data?.login.errors) {
          //   setErrors(toErrorMap(response.data.login.errors));
          // } else if (response.data?.login.user) {
          //   // worked, so navigate other renderPage.
          //   router.push("/");
          // }
        }}  
      >
        {(props) => (
          <Form>
            <Inputfield 
              name="newPassword" 
              placeholder="new password" 
              label="New password"
              type="password"
            />
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
  )
}

ChangePassword.getInitialProps = ({query}) => {
  return {
    token: query.token as string
  }
}

export default ChangePassword;

import { Box, Flex, Link } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { NextPage } from 'next';
import { withUrqlClient } from 'next-urql';
import router from 'next/dist/client/router';
import React, { useState } from 'react';
import Inputfield from '../../components/InputField';
import Wrapper from '../../components/Wrapper';
import { useChangePasswordMutation } from '../../generated/graphql';
import { createUrqlClient } from '../../utils/createUrqlClient';
import { toErrorMap } from '../../utils/toErrorMap';
import NextLink from 'next/link';

const ChangePassword: NextPage<{token: string}> = ({token}) => {
  const [, changePassword] = useChangePasswordMutation();
  const [tokenError, setTokenError] = useState('');
  return (
    <Wrapper variant="small">
      <Formik 
        initialValues={{ newPassword: '' }}
        onSubmit={async (values, {setErrors}) => {
          const response = await changePassword({
            newPassword: values.newPassword,
            token,
          });          
          if (response.data?.changePassword.errors) {
            const errorMap = toErrorMap(response.data.changePassword.errors);
            console.log('errorMap: ', errorMap);
            
            if ('token' in errorMap) {
              setTokenError(errorMap.token);
            }
            setErrors(errorMap);
          } else if (response.data?.changePassword.user) {
            // worked, so navigate other renderPage.
            router.push("/");
          }
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
            {tokenError ? (
              <Flex>
                <Box mr={4} color={'red.400'}>{tokenError}</Box>
                <NextLink href="/forgot-password">
                  <Link>click here to get new one</Link>
                </NextLink>
              </Flex>
              ) : null}
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

export default withUrqlClient(createUrqlClient, { ssr: false })(ChangePassword);

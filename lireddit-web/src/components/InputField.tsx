import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { useField } from 'formik';
import React from 'react'

interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}

//1. useField(): This help me hook up inputs to Formik.
//2. '' => false, 'abcdef' => true
const Inputfield: React.FC<InputFieldProps> = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  
  return (
    <FormControl isInvalid={!!meta.error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} id={field.name} />
      {meta.error? <FormErrorMessage>{meta.error}</FormErrorMessage> : null}
    </FormControl>
  );
}


export default Inputfield
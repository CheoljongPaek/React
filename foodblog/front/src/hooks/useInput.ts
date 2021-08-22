import { useState, useCallback, Dispatch, SetStateAction, ChangeEvent } from 'react';
//@@ event type

type ReturnTypes<T = any> = [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

const useInput = <T = any>(initialData: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e) => {
    // console.log('useInput: ', value);
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
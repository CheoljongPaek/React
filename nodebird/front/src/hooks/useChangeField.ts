import { useState, useCallback, Dispatch, SetStateAction, ChangeEvent } from 'react';
//@@ event type

type ReturnTypes<T = string> = [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>, boolean, Dispatch<SetStateAction<boolean>>];

const useChangeField = (initialData: string): ReturnTypes => {
  const [text, setText] = useState(initialData);
  const [textError, setTextError] = useState(false);

  const ChangeHandler = useCallback((e) => {    
    e.preventDefault();
    if (text === "") {
      setTextError(false);
    };
    setText(e.target.value);
  }, [text]);


  return [text, ChangeHandler, setText, textError, setTextError];
};

export default useChangeField;
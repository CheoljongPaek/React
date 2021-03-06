import React, { createContext, Dispatch, useContext, useReducer } from 'react';

interface pizzaProps {
  base: string;
  toppings: Array<string>
}

//상태를 위한 타입
type State = {
  pizza: pizzaProps;
}
//액션을 위한 타입
type Action =
  // | { type: 'ADD_BASE'; base: string; }
  | { type: 'ADD_SOMETHING'; }
//디스패치를 위한 타입
type SampleDispatch = Dispatch<Action>;
//Context 만들기
const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

const initialState = {
  pizza: { base: "", toppings : [] },
  // popModal: { showModal: false }
}

// 리듀서
const ADD_SOMETHING = "ADD_SOMETHING";
const reducer = (state: State, action: Action):State => {  
  switch (action.type) {
    case ADD_SOMETHING:
      return {
        ...state,
      }
    default:
      console.log('action failed');
      return {
        ...state
      }
  }
}

export function SampleProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  )
};

export function useSampleState() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return state;
};

export function useSampleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
};
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
  | { type: 'ADD_BASE'; base: string; }
  | { type: 'ADD_TOPPINGS'; topping: string };
//디스패치를 위한 타입
type SampleDispatch = Dispatch<Action>;
//Context 만들기
const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

const initialState = {
  pizza: { base: "", toppings : [] }
}

// 리듀서
const ADD_BASE = 'ADD_BASE';
const ADD_TOPPINGS = 'ADD_TOPPINGS';
const reducer = (state: State, action: Action):State => {
  switch (action.type) {
    case ADD_BASE:
      const pizza = {...state.pizza};
      pizza.base = action.base;
      return {
        ...state,
        pizza
      }

    case ADD_TOPPINGS:
      let newToppings;
      const pizza2 = {...state.pizza};
      if (!pizza2.toppings.includes(action.topping)) {
        newToppings = [...pizza2.toppings, action.topping];
      } else {
        newToppings = pizza2.toppings.filter(item => item !== action.topping);
      }
      pizza2.toppings = newToppings;
      return {
        ...state,
        pizza: pizza2
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

  console.log(state);

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
import React, { createContext, Dispatch, useContext, useReducer } from 'react';

interface pizzaProps {
  base: string;
  toppings: Array<string>
}

interface popModalProps {
  showModal: boolean,
  // setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
//상태를 위한 타입
type State = {
  pizza: pizzaProps;
  popModal: popModalProps
}
//액션을 위한 타입
type Action =
  | { type: 'ADD_BASE'; base: string; }
  | { type: 'ADD_TOPPINGS'; topping: string }
  | { type: 'ADD_POPMODAL'; }
  | { type: 'REMOVE_POPMODAL'; }
  | { type: 'RESET_PIZZA'; }
//디스패치를 위한 타입
type SampleDispatch = Dispatch<Action>;
//Context 만들기
const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

const initialState = {
  pizza: { base: "", toppings : [] },
  popModal: { showModal: false }
}

// 리듀서
const ADD_BASE = 'ADD_BASE';
const ADD_TOPPINGS = 'ADD_TOPPINGS';
const ADD_POPMODAL = 'ADD_POPMODAL';
const REMOVE_POPMODAL = 'REMOVE_POPMODAL';
const RESET_PIZZA = "RESET_PIZZA"
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
  
    case ADD_POPMODAL:
      const popModal = {...state.popModal}
      popModal.showModal = true;
      return {
        ...state,
        popModal
      }

    case REMOVE_POPMODAL:
      const popModal2 = {...state.popModal}
      popModal2.showModal = false;
      return {
        ...state,
        popModal: popModal2
      }
    case RESET_PIZZA:
      const pizza3 = {...state.pizza}
      pizza3.base = "";
      pizza3.toppings = [];
      return {
        ...state,
        pizza: pizza3
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
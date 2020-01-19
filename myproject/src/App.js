import React,{ useReducer } from 'react';

import './App.css';
import DataFechingReducer from './DataFeching_UsinguseReducer folder/DataFechingReducer';
// import Componenta from './useReducerWith_useContext  Folder/Componenta';
// import Componentb from './useReducerWith_useContext  Folder/Componentb';
// import Componentc from './useReducerWith_useContext  Folder/Componentc';

// import MultipleReducers from './useReducer Folder/MultipleReducers';
// import UseReducerWtihContext from './useReducerWith_useContext  Folder/UseReducerWtihContext';
// import Counter2 from './useReducer Folder/Counter2';
// import Counter1 from './useReducer Folder/Counter1';
// import ComponentA from './useContext Folder/ComponentA';
// import ComponentB from './useContext Folder/ComponentB';
// import ComponentC from './useContext Folder/ComponentC';
// import DataFeching1 from './useEffect Folder/DataFeching Folder/DataFeching1';
// import IntervalHooks from './useEffect Folder/IntervalHooks';
// import MouseContainer from './useEffect Folder/MouseContainer';
// import RunEffectOnce from './useEffect Folder/RunEffectOnce';
// import ConditionalRendring from './useEffect Folder/ConditionalRendring';
// import DocTitleUpdat from './useEffect Folder/DocTitleUpdata';
// import ArrayAsState from './useState Folder/ArrayAsState';
// import ObjectAsState from './useState Folder/ObjectAsState';
// import Counter1 from './useState Folder/Counter1';
// export const CreateContext = React.createContext()
// export const PhoneNumber = React.createContext()
// export const counterContext = React.createContext()

// const initialState = 0
// const reducer = (state,action)=> {
//   switch(action){
//       case 'INCREMENT':
//           return state+1
//       case 'DECREMENT':
//           return state -1
//       case 'RESET':
//           return initialState
//       default:
//           return state
//   }
// }


function App() {
  // const [count,dispatch]= useReducer(reducer,initialState)
  return (
    <div className="App">
      {/* <Counter1 /> */}
      {/* <ObjectAsState /> */}
      {/* <ArrayAsState />  */}
      {/* <DocTitleUpdat /> */}
      {/* <ConditionalRendring /> */}
      {/* <RunEffectOnce /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHooks /> */}
      {/* <DataFeching1 /> */}
      {/* <CreateContext.Provider value='Madan Rijal'>
      <PhoneNumber.Provider value={9865495465}>
      <ComponentA />
      <ComponentB />
      <ComponentC />
      </PhoneNumber.Provider>
      </CreateContext.Provider> */}
      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      {/* <MultipleReducers /> */}
      {/* <UseReducerWtihContext /> */}
      {/* <counterContext.Provider value={{counter:count,counterDispatch:dispatch}}>
        count-{count}
      <Componenta />
      <Componentb />
      <Componentc />
      </counterContext.Provider> */}
      <DataFechingReducer />
      
    </div>
  );
}

export default App;

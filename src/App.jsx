import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByValue, increment, incrementByValue } from "./feature/counterSlice";

const App = () => {

  const counter = useSelector((store) => store.counter.count);
  const greet = useSelector((store) => store.hello.greet);
  const dispatch  = useDispatch();
  console.log(counter,greet);

  return (
  <div>
    <h1>{counter}</h1>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(incrementByValue(10))}>IncrementByValue</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <button onClick={()=>dispatch(decrementByValue(10))}>DecrementByValue</button>
    </div>
  )
};

export default App;

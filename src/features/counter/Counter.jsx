import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc } from "./counterSlice";
import { dec } from "./counterSlice";

function Counter() {
    var {count}= useSelector(state=>state.counterR);
     var dispatch = useDispatch();
    return (
        <div className="border border-3 m-3 p-3 border-dark">
            <h1>Counter:{count}</h1>
            <button  style={{marginRight:"2%"}}onClick={()=>{dispatch(inc())}}>Increment</button>
            <button onClick={()=>{dispatch(dec())}}>Decrement</button>
        </div>
    )
}
export default Counter;
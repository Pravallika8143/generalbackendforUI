import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todolistSlice";


function TodoList(){
    var {todos}=useSelector(state=>state.todolistR);
    var dispatch= useDispatch();
    var [newTodo,setNewTodo]=React.useState("");
    return (
    <div className="border border-3 m-3 p-3 border-dark">
       <h1>Todolist</h1>
       <input style={{marginRight:"2px"}}type="text" onChange={(e)=>{setNewTodo(e.target.value)}}/>
       <button onClick={()=>{dispatch(addTodo(newTodo))}}>AddTodo</button>
       <ul>
        {
            todos.map((todo)=>{
                return <li>{todo}</li>
            })
        }
       </ul>
    </div>
  )
}
export default TodoList
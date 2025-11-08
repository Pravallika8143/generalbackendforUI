import { createSlice } from "@reduxjs/toolkit"


const initialState={
    todos:["Pravallika","Uma","Rajii","Bindhu","Sai"]
}

export const todolistSlice= createSlice({
    name:"counterS",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload);
        },
        deleteTodo:(state,action)=>{
            state.todos.splice(action.payload,1);
        },
    },
});

export const {addTodo,deleteTodo}=todolistSlice.actions;
export default todolistSlice.reducer;
import { createSlice} from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1, text: "hello redux"}]
}

const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id: new Date().getTime().toString(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=> todo.id !==action.payload);
        }
    }
});

export const {addTodo,removeTodo} =todoSlice.actions;
export default todoSlice.reducer;
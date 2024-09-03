import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoList: []
    },
    reducers: {
        addTodo: (state, action) => { 
            state.todoList = state.todoList.concat(action.payload)
         },
        checkChangeTodo: () => { },
        textChangeTodo: () => { },
        deleteTodo: () => { }
    }
})
export const { addTodo, checkChangeTodo, textChangeTodo, deleteTodo } = TodoSlice.actions

export default TodoSlice.reducer
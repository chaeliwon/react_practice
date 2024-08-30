import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: '',
    initialState: {
        count :0
    },
    reducers: {
        increment:()=>{
            console.log('증가');
            
        },
        decrement:()=>{
            console.log('감소');
            
        }
    }
})
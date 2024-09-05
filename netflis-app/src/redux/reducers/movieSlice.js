import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: 'movie',
    initialState: {
        popularMovies: [],
        topRatedMovies:[],
        upcomingMovies:[]
    },
    reducers: {
        initData:(state,action)=>{
            state.popularMovies = action.payload.popularMovies;
            state.topRatedMovies = action.payload.topRatedMovies;
            state.upcomingMovies = action.payload.upcomingMovies;
        },

    }
})

export const { initData } = MovieSlice.actions;

export default MovieSlice.reducer
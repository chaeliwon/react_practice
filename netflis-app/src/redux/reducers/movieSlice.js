import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: 'movie',
    initialState: {
        popularMovies: [],
        topRatedMovies:[],
        upcomingMovies:[]
    },
    reducers: {
        initData:(state,action)=>{},

    }
})

export default MovieSlice.reducer
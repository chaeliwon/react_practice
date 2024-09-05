import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        popularMovies: [],
        topRatedMovies: [],
        upcomingMovies: [],
        genreList: []  // 장르 목록 추가
    },
    reducers: {
        initData: (state, action) => {
            state.popularMovies = action.payload.popularMovies;
            state.topRatedMovies = action.payload.topRatedMovies;
            state.upcomingMovies = action.payload.upcomingMovies;
        },
        setGenreList: (state, action) => {
            state.genreList = action.payload;  // 장르 목록 저장
        }
    }
});

export const { initData, setGenreList } = movieSlice.actions;

export default movieSlice.reducer;

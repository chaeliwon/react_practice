import { createSlice } from "@reduxjs/toolkit";

const CommentSlice = createSlice({
    name: 'comment',
    initialState: {
        commentList: [],
        keyword: ''
    },
    reducers: {
        addComment: (state, action) => {
            console.log(action);

            //React state 값을 (push 같은 함수로) 직접적으로 수정할수 없다
            //-> push, shift, unshift 등과 같은 함수는 state를 새롭게 변경하는 동작이 아니다
            //-> concat, map, filter, slice 등과 같은 함수는 원본을 수정하지 않고 새로운 배열을 반환하기 때문에 리액트에서 좀더 권장하는 방식이다.
            state.commentList = state.commentList.concat(action.payload)
            
        },
        searchComment: (state, action) => {
            state.keyword = action.payload.keyword
        }
    }
})

export const { addComment, searchComment } = CommentSlice.actions

export default CommentSlice.reducer
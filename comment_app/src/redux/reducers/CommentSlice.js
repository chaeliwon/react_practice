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
            state.commentList = state.commentList.concat(action.payload)
            
        },
        searchComment: () => {

        }
    }
})

export const { addComment, searchComment } = CommentSlice.actions

export default CommentSlice.reducer
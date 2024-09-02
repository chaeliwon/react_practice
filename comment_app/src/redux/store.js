import { configureStore } from '@reduxjs/toolkit'
import CommentReucer from './reducers/CommentSlice'

export default configureStore({
    reducer:{
        comment:CommentReucer
    }
})
import React, { useEffect, useState } from 'react'
import CommentItem from './CommentItem'
import { useSelector } from 'react-redux'


const CommentList = () => {

  //[store의 state접근방법]
  //store내에 있는 reducer의 key ->state.comment
  //slice내에 정의된 state에 접근 -> state.comment.commentList
  // const commentList = useSelector(state=>state.comment.commentList)

  //접근해야 하는 state가 많을 경우, 아래와 같이 구조분해할당 문법으로 저장
  // *주의점 : 객체에 정의된 key이름과 동일한 변수명으로 정의를 해줘야 합니다!
  const { commentList, keyword } = useSelector(state => state.comment)

  //검색키워드 결과를 보관하는 state
  const [filter, setFilter] = useState([]);

  console.log(commentList, keyword);
  
  useEffect(()=>{

  },[commentList, keyword])

  return (
    <div>
      <div>댓글 수 :0</div>
      <hr />
      {commentList?.map((item) => (
        <CommentItem key={item.id} comment={item} />
      ))}

    </div>
  )
}

export default CommentList
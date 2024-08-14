import React from 'react'

//axios : 비동기 통신 라이브러리
import axios from 'axios'

const MyAxios = () => {
    const getData=()=>{
        //비동기 통신으로 데이터 가져오겠습니다.
        axios({
            // 통신 할때 필요한 정보
            url : '', //어디랑 통신 할 것인지
            method : '', //어떤 방식으로 통신할 것인지 (GET, POST)
            data : '' //요청시 전송할 데이터
        })

    }


  return (
    <div>
        <button onClick={getData}>정보 가져오기</button>
    </div>
  )
}

export default MyAxios
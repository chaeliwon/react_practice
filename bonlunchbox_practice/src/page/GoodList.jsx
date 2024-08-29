import React, { useEffect, useState } from 'react'
import axios from 'axios'


/*
실습 1) axios를 활용해서 도시락정보를 가진 URL로 데이터를 호출하시오.
실습 2) 받아온 데이터를 보관할 state를 생성하시오
        -콘솔창으로 데이터 출력해보기

*/
const GoodList = () => {
  const [goodsList, setGoodsList]=useState(null);

  const getGoodsList = async () => {
    const DATA_URL = 'http://localhost:3004/goods_list';
    const response = await axios.get(DATA_URL);
    const data = response.data;

    setGoodsList(data);
    console.log(data);
  }

  useEffect(()=>{
    getGoodsList()
  },[])


  return (
    <div>

    </div>
  )
}

export default GoodList
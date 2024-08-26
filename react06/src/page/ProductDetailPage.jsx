import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {

    // const prd_no = useParams();
    // 객체로 받아볼수 있게 하는기능 useParams
    const {prd_no} = useParams();
    // 중괄호를 쓰게되면 . 으로 하나더 접근 할 필요없이 그자체가 변수가 되기 때문에 바로 값을 받아올수 있다.

    console.log(prd_no);



    return (
        <div>
           <h1> ProductDetailPage</h1>
           <p>{prd_no}번 상품</p>
        </div>
    )
}

export default ProductDetailPage
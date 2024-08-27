import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductDetailPage2 = () => {
    const [query, setQuery] = useSearchParams();
    console.log('전달받은 데이터 :', query.get("prd_no"),query.get("cate"));
    //query.get()을 사용해야한다! useState 방식으로 [  ,  ] 사용해야한다!
    

    return (
        <div>
           <h1> ProductDetailPage2</h1>
           <p>{query.get("prd_no")}번 상품</p>
        </div>
    )
}

export default ProductDetailPage2
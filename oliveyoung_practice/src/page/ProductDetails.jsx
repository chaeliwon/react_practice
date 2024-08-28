import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
/*
실습1) axios를 활용하여 상품상세정보를 가진 URL로 데이터를 요청하세요.
     ( 넘겨받은 상품id 활용 )
     ex) http://localhost:3004/products/상품번호
         http://localhost:3004/products?id=상품번호

실습2) 받아온 정보를 보관하는 state에 저장하세요.

실습3) state에 저장된 정보를 화면에 출력하세요.
     ( 이미지경로, 브랜드, 상품명, 가격, 옵션메뉴 )

     * 옵션메뉴는 비워져있는 경우 -> 구매수량 UI
                     데이터가 있는 경우 -> Bootstrap의 Forms에 있는 Select컴포넌트로 출력

*/
const ProductDetails = () => {

  //URL 파라미터 방식으로 전달받은 값을 가져올 때 useParams()를 사용해야한다
  //쿼리스트링은 useSearchParams()를 사용한다.
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  

  const getProduct = async () => {
    const DATA_URL = `http://localhost:3004/products/${id}`
    const response = await axios.get(DATA_URL)
    const data = response.data
    
    setProduct(data);
  }

  useEffect(() => {
    getProduct()
  }, [])


  return (

    <Container>
      <Row>
        <Col key={id}>
          <img src={product?.prd_img} alt='상품이미지' />
        </Col>
        <Col>
          <p>{product?.prd_brand}</p>
          <p>{product?.prd_name}</p>
          <p>{product?.prd_price}원</p>
          <p>{product?.prd_options.length !==0 ? (
             <Form.Select aria-label="Default select example">
             {product?.prd_options.map((item,index)=>(
              <option key={index}>{item.prd_name}-{item.prd_price}원</option>
             ))}
           </Form.Select>
          ):(<div>
            구매수량
            </div>)}</p>
          <p>
            <Button variant='outline-danger'>장바구니</Button>{' '}
            <Button variant='danger'>바로구매</Button>
          </p>
        </Col>
      </Row>

    </Container>

  )
}

export default ProductDetails
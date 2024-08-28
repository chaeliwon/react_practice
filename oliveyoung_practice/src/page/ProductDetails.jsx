import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ProductDetails = () => {

  //URL 파라미터 방식으로 전달받은 값을 가져올 때 useParams()를 사용해야한다
  //쿼리스트링은 useSearchParams()를 사용한다.
  
  const [productList, setProductList] = useState([]);
  const { id } = useParams();

  console.log('상품번호 :', id);

  const getProductList = async () => {
    const DATA_URL = 'http://localhost:3004/products'
    const response = await axios.get(DATA_URL)
    const data = response.data

    setProductList(data);

    console.log(data);
  }


  return (

    <Container>
      <Row>
        <Col>
        <img src='' alt='' />
        </Col>
        <Col>
        <p>브랜드명</p>
        <p>상품명</p>
        <p>가격</p>
        <p>추가구매할 상품정보 or 구매수량</p>
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
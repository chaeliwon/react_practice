import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/*
  실습1) 화면이 최초에 랜더링이 되었을때, axios를 활용해서 화장품정보를 가진 URL로 데이터를 요청하시오.
  실습2) 받아온 데이터를 콘솔창에 출력하시오.
  실습3) state에 저장된 화장품 정보를 map 함수를 활용해서 출력하시오
          Card컴포넌트 : 상품이미지, 브랜드 명, 상품 명, 가격, 플래그
*/
const MainPage = () => {

  const [productList, setProductList] = useState([]);

  const getProductList = async () => {
    //json-server로 부터 정보 받아오기!
    const DATA_URL = 'http://localhost:3004/products'
    const response = await axios.get(DATA_URL)
    const data = response.data

    setProductList(data);

    console.log(data);
  }

  useEffect(() => {
    getProductList()
  }, [])

     
  return (
    <Container>
      <Row>
        {productList.map((product) => (
          <Col key={product.id}>
            <Card className='card'>
              <Card.Img variant="top" src={product.prd_img} />
              <Card.Body>
                <Card.Title className='card_title'>
                  <p>{product.prd_brand}</p>
                  <p className='card_prd_name'>{product.prd_name}</p>
                </Card.Title>
                <Card.Text className='card_text'>
                  {product.prd_price}
                </Card.Text>
                <p>
                  {product.prd_flag.map((flag) => (
                    <span
                      className='prd_flag rounded-pill'
                      style={{ backgroundColor: 
                        flag ==='세일'? '#f65c60':
                        flag ==='쿠폰'? '#9bce26':
                        flag ==='증정'? '#6fcff7': '#f374b7'
                       }}>
                      {flag}
                    </span>
                  ))}
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default MainPage
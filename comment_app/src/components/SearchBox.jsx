import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const SearchBox = () => {
  return (
    <div>
      <Form>
        <Row className='g-2'>
          <Col>
            <Form.Control type='text' placeholder='검색할 키워드를 입력해주세요' />
          </Col>
          <Col>
          <Button variant="warning">검색</Button></Col>
        </Row>
      </Form>
    </div>
  )
}

export default SearchBox
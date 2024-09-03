import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { searchComment } from '../redux/reducers/CommentSlice';


const SearchBox = () => {

  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleSearch =()=>{
    dispatch(searchComment({keyword:inputRef.current.value}))
  }

  return (
    <div>
      <Form>
        <Row className='g-2'>
          <Col>
            <Form.Control 
            type='text' 
            placeholder='검색할 키워드를 입력해주세요'
            ref={inputRef} />
          </Col>
          <Col>
          <Button variant="warning" onClick={handleSearch}>검색</Button></Col>
        </Row>
      </Form>
    </div>
  )
}

export default SearchBox
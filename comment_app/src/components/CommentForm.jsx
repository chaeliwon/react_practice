import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/reducers/CommentSlice';
import { v4 as uuidv4 } from 'uuid'


const CommentForm = () => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const dispatch = useDispatch();

  const handelSubmit = () => {
    console.log(inputRef1.current.value, inputRef2.current.value);
    dispatch(
      addComment(
        {
          id: uuidv4(),
          writer: inputRef1.current.value,
          content: inputRef2.current.value
        }));
  }

  return (
    <div>
      <Form>
        <Row className='g-2'>
          <Col lg='8'>
            <Form.Control type='text' placeholder='댓글 내용 작성' ref={inputRef1} />
          </Col>
          <Col lg='4'>
            <Form.Control type='text' placeholder='작성자 이름' ref={inputRef2} />
          </Col>
        </Row>
        <Row className='my-2'>
          <Col lg='12'>
            {/* w-숫자 : 너비값을 %로 지정 (0, 25, 50, 75, 100) */}
            <Button className='w-100' variant='warning' onClick={handelSubmit}>등록</Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default CommentForm
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'



const GoodDetail = () => {


  const [goods, setgoods] = useState(null);
  const { id } = useParams();

  const getGood = async () => {
    const DATA_URL = `http://localhost:3004/goods_list/${id}`;
    const response = await axios.get(DATA_URL);
    const data = response.data;
    setgoods(data)
  }

  useEffect(() => {
    getGood()
  }, [])


  return (
    <div className='goods-detail-box'>
      <div className='goods-detail-box-thumb' key={id}>
        <img src={goods?.detail.sub_thumb} alt='도시락썸네일' />
      </div>
      <div className='goods-detail-box-info'>
        <div className='goods-detail-title'>
          <div className='goods-icon'>
            {
              goods?.new ? <em className='goods-new'>New</em>
                : goods?.best ? <em className='goods-best'>Beest</em>
                  : ""
            }
          </div>
          <div className='goods-detail-name'> {goods?.name}</div>
          <div className='goods-detail-txt'>{goods?.detail.txt}</div>
          <div className='goods-detail-price-box'>
            <strong>{goods?.price}</strong>원
          </div>
        </div>
        <div className='goods-datail-summary'>
          {goods?.detail.summary}
        </div>
      </div>
    </div>
  )
}

export default GoodDetail
import React from 'react'

const GoodItem = () => {
  return (
    <div className='goods-item'>
      <div className='goods-item-icon'>
        <em className='goods-new'>New</em>
      </div>
      <div className='goods-thumb'>
        <img src='https://cdn.bonif.co.kr/cmdt/20230704_IfV_1688445795393_92Kb.jpg' alt='도시락 상품 이미지' />
      </div>
      <div className='goods-name'>
        <h4>탄두리 치킨&커리 반상</h4>
        <p>
          <span>11,600</span>원
        </p>
      </div>
    </div>
  )
}

export default GoodItem
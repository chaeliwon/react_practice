import React, { useState, useRef } from 'react'

const MyRef02 = () => {
    //배열 사용해서 이미지 데이터 다루기
    //useRef, useState 사용하기
    const imgRef = useRef();

    let pos = 0; //현재 이미지 위치!!

    const imgArray = ["/000101.png", "/014701.png", "/031201.png","/025501.png","/039301.png","/041701.png","/057201.png","/058701.png","/066101.png","/070001.png","/072201.png","/073101.png","/081301.png"]

    
    const Next = () => {
        pos++
        if(pos>imgArray.length-1){
            pos=0
        }
        imgRef.current.src='./img'+imgArray[pos]
    };
    const Before = () => {
        pos--
        if(pos<0){
            pos=imgArray.length-1
        }
        imgRef.current.src='./img'+imgArray[pos]
    };

    return (

        <div>
            <img src="img/000101.png" ref={imgRef}/>
            <br />
            <button onClick={Before}>Before</button>
            <button onClick={Next}>Next</button>
        </div>
    )
}

export default MyRef02
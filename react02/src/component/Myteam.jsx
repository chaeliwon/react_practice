import React from 'react'

const Myteam = (props) => {
  return (
    // JSX에서 inline style을 적용할때는 *객체 형식*으로 적용해야한다!!!!
    <div style={{border:"1px solid", textAlign:"center"}}>
        <p>
            {props.department}
            <br />
            {props.name}
        </p>
    </div>
  )
}

// defaultProps : 데이터를 전달받지 않을때 기본적으로 적용되는 데이터
Myteam.defaultProps = {
    name:"직원선별중"
}

export default Myteam
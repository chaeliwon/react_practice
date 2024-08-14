import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

const Right03 = () => {
    const data = useContext(AppContext);
    const chNum = ()=>{
        data.setState(data.state+1)
    }
    const mhNum = ()=>{
        data.setState(data.state-1)
    }
    const rhNum = ()=>{
        data.setState(data.state=0)
    }
    return (
        <div> 
            <h1>Right03</h1>
            <button onClick={chNum}>+1</button>
            <button onClick={mhNum}>-1</button>
            <button onClick={rhNum}>reset</button>
        </div>
    )
}

export default Right03
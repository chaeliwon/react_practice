import React from 'react'
import { useContext } from 'react'
import { ColorContext } from '../App'

const Result = () => {

    const color = useContext(ColorContext)
    return (
        <div>
            <div style={{
                width: "100px", 
                height: "100px", 
                backgroundColor: color.state, 
                display: "inline-block"
            }}></div>
        </div>
    )
}

export default Result
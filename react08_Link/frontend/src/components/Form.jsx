import React, { useState } from 'react'

const Form = () => {

    const [data, setDate] = useState('');

    const handleSubmit = ()=>{
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setDate(e.target.value)}/>
            <input type="submit" value='저장' />
        </form>
    </div>
  )
}

export default Form
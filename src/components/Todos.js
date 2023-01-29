import React, { useState } from 'react';

const Todos = () => {

    const [message ,setMessage] = useState('')
    
const changHandler=(event) =>{
    setMessage(event.target.value)
} 

    return ( 
        <div>
        <h2>{message}</h2>
        <input type='text' value={message} onChange={changHandler}/>
        <button>
        add</button>
        </div>
    
    );
}
 
export default Todos;
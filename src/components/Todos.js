import React, { useState } from 'react';

const Todos = () => {

    const [message ,setMessage] = useState('')
    
const changHandler=(event) =>{
    setMessage(event.target.value)
} 

const [tasks,setTask]=useState([])

const taskRemover=()=>{
setTask([])
}

const taskHandler=()=>{
setTask([...tasks,message])
setMessage("")
}    
return ( 
        <div>
        <input type="text" value={message} onChange={changHandler} />
      <button onClick={taskHandler}>Add</button>
      <button onClick={taskRemover}>Clear</button>
     {tasks.map((task)=>(
<li>{task}</li>

     ))}
      
        </div>
    
    );
}
 
export default Todos;

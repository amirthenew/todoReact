import React, { useState } from 'react';
import styles from '../components/Todos.module.css'
import Header from './Header';
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
        <div className={styles.box}>
        <Header/>
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

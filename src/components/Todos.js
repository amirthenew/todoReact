import React, { useState } from 'react';
import styles from '../components/Todos.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace, faTrash } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';

const trashIcon = <FontAwesomeIcon icon={faTrash}/>
const Todos = () => {

    const [message ,setMessage] = useState('')
    
const changHandler=(event) =>{
    setMessage(event.target.value)
} 

const [tasks,setTask]=useState([])

const taskRemover=()=>{
setTask({})
}

const taskHandler=()=>{
setTask([...tasks,{message:message,id:tasks.id}])
setMessage("")
}    
return ( 
        <div className={styles.box}>
        <Header/>
        <input type="text" value={message} onChange={changHandler} />
      <button onClick={taskHandler}>Add</button>
      <button onClick={taskRemover}>Clear</button>
      {tasks.map((task)=>(
        <li>{task.message}<i>{trashIcon}</i></li>
        
             ))}
             {console.log(tasks)}
        </div>
    
    );
}
 
export default Todos;



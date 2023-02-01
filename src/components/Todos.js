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
setTask([])
}
const taskHandler=()=>{
setTask([...tasks,{message}])
setMessage("")
}  
let deleteTask = (index)=>{

    const newTask = [...tasks]
    console.log(newTask);
    newTask.splice(index,1)
    setTask(newTask)
}



return ( 
    <div className={styles.box}>
    <Header/>
    <input type="text" value={message} onChange={changHandler} />
  <button onClick={taskHandler}>Add</button>
  <button onClick={taskRemover}>Clear</button>
  {tasks.map((task)=>(
    <li key={task.id}>{task.message}<i onClick={deleteTask}>{trashIcon}</i></li> 
         ))}
         {console.log(tasks)}
    </div>
)  
}


export default Todos;




// <li key={2}>{task.message}<i onClick={console.log('aasd')}>{trashIcon}</i></li>
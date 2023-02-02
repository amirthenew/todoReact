import React, { useState } from 'react';
import styles from '../components/Todos.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace, faTrash,faPlus } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';


const faTrashs = <FontAwesomeIcon icon={faTrash}/>
const plusIcon  = <FontAwesomeIcon icon={faPlus}/>
const Todos = () => {
const [text ,setText] = useState('') 
const [tasks,setTask]=useState([])
// const [editBtn,setEdit] = useState('Edit')
// const [status,setStatus]=useState(false)
const changHandler=(event) =>{
    setText(event.target.value)} 
const addTask=()=>{
setTask([...tasks,text])
setText("")
}  

const removeTask = ()=>{
setTask([])
}

return ( 
    <div className={styles.box}>
    <Header/>
    <input type="text" value={text} onChange={changHandler} />
  <button className={styles.addBtn} onClick={addTask} style={{padding:'0 .5rem'}}>{plusIcon}</button>
{tasks.map((task,id)=> <div key={id} className='todo'><span >{task}</span><i onClick={removeTask}>{faTrashs}</i></div>)}
  </div>)


}

export default Todos;

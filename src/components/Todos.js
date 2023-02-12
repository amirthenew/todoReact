import React, { useState,useEffect } from 'react';
import styles from '../components/Todos.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace, faTrash,faPlus } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';


const faTrashs = <FontAwesomeIcon icon={faTrash}/>
const plusIcon  = <FontAwesomeIcon icon={faPlus}/>
const Todos = () => {


  useEffect(()=>{
   getTask()
    },[])

  

    
const [text ,setText] = useState('') 
const [tasks,setTask]=useState([])
const [status,setStatus]=useState(false)


const getTask = ()=>{
const oldTasks = JSON.parse(localStorage.getItem('tasks'))
  if (oldTasks){
setTask([...oldTasks])
}}

const saveTask = ()=> {

const todoItem = [...tasks]
todoItem.push(text)
localStorage.setItem('tasks',JSON.stringify(todoItem))
}

const changHandler=(event) =>{
    setText(event.target.value)} 


const addTask=()=>{
setTask([...tasks,text])
saveTask()
setText("")
}  

const toggleClass = ()=>{
  
  setStatus(!status)

}

const removeTask = value=>{
console.log(tasks);
console.log(value);

setTask((oldValues)=>{
  console.log(oldValues);
  localStorage.setItem('tasks',JSON.stringify(oldValues))
 return oldValues.filter(task=>task !== value)

})



}

return ( 
    <div className={styles.box}>
    <Header/>
    <input className={styles.placeholder} placeholder='enter your task here ...' type="text" value={text} onChange={changHandler} />
    <button className={styles.addBtn} onClick={addTask} 
    style={{padding:'0 .5rem'}}>{plusIcon}</button>
    <button>clear</button>
  {tasks.map((task,id)=> 
    <div key={id} 
  className={styles.todo}><span className={status ? styles.completed : null} 
  onClick={toggleClass}>{id+1} : {task}</span>
  <i className={styles.trashIcon} onClick={()=>removeTask(task)}>{faTrashs}</i>

  </div>)}
  <i className={styles.hint}>{`you have ${tasks.length} tasks to do`}</i>

  
  </div>)}



export default Todos;



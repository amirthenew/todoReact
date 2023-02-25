import React, { useState,useEffect } from 'react';
import styles from '../components/Todos.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash,faPlus } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';


const faTrashs = <FontAwesomeIcon icon={faTrash}/>
const plusIcon  = <FontAwesomeIcon icon={faPlus}/>
const Todos = () => {

  useEffect(()=>{
   getTask()
    },[])
   
const [inputValue ,setInputValue] = useState('') 
const [tasks,setTask]=useState([])


const getTask = ()=>{
const oldTasks = JSON.parse(localStorage.getItem('tasks'))
  if (oldTasks){
setTask([...oldTasks])
}}

const saveTask = ()=> {

const todoItem = [...tasks]
todoItem.push(inputValue)
localStorage.setItem('tasks',JSON.stringify(todoItem))
}

const changHandler=(event) =>{
    setInputValue(event.target.value)
  } 


const addTask=()=>{
setTask([...tasks,{taskName:inputValue,completed : false}])
saveTask()
setInputValue('')
}  


const clearAll = ()=>{
setTask([])
localStorage.removeItem('tasks')
}

const removeTask = (index)=>{
const newTasks =[...tasks]
newTasks.splice(index,1)
setTask(newTasks)
localStorage.setItem('tasks',JSON.stringify(tasks))

}

const taskDone = (index)=>{
  const newTasks = [...tasks]
  newTasks[index].completed=true
  setTask(newTasks)
}

return ( 
    <div className={styles.box}>
    <Header/>
    <input 
    className={styles.placeholder} 
    placeholder='enter your task here ...' 
    type="text" 
    value={inputValue} 
    onChange={changHandler} />
    <button className={styles.addBtn} onClick={addTask} 
    style={{padding:'0 .5rem'}}>{plusIcon}</button>
    <button className={styles.trash} onClick={clearAll}>{faTrashs}</button>
  {tasks.map((task,index)=> 
    <div 
    key={index} 
  style={{textDecoration : task.completed ? 'line-through' : 'null'}}>
  
  <span onClick={()=>taskDone(index)} >{index+1} : {task.taskName}</span>
  <i className={styles.trashIcon} onClick={()=>removeTask(task)}>{faTrashs}</i>

  </div>)}
  <i className={styles.hint}>{`you have ${tasks.length} tasks to do`}</i>

  
  </div>)}



export default Todos;



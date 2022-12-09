import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import classes from './TaskItem.module.scss'

function TaskItem({task,deleteTask}) {
    const [isCompleted,setIsCompleted]=useState(task.completed)
    const [isLoading,setisLoading]=useState(false)
    const handleCheckbox=async()=>{
       try{
        setisLoading(true)
          await axios.put(`/api/tasks/${task._id}`,{
            completed:!isCompleted
          })
          setIsCompleted(!isCompleted)
          toast.success('Task updated successfully')
       }catch(err){
        console.log(err);
       }
       finally{
        setisLoading(false)
       }
    }

    return (
        <tr className={classes.task_item} >
            <td className={classes.task_name}>
            <div className={classes.checkbox} role={'checkbox'} aria-checked onChange={handleCheckbox} disabled={isLoading}>
                <input type="checkbox" checked={isCompleted} tabIndex={-1} readOnly disabled={isLoading} />
            </div>
            <p>{task.title}</p>
            </td>
            <td>{isCompleted ? 'completed':'incomplete'}</td>
            <td style={{width:"100px"}}>
                <button className={classes.deleteBtn} type="button" onClick={()=>deleteTask(task._id)}>Delete</button>
            </td>
        </tr>
  )
}

export default TaskItem
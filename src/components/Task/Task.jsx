import React from 'react';
import Options from '../Options/Options';
const statusOptions = ['todo','in progress','done','backlog'];
const priorityOptions = ['high','medium','low'];
function Task({id, title, description, assignee, priority, status,image, handleDelete, handleStatusChange,handlePriorityChange, handleEditClick}) {

    const handleChange = (e,action) => {
        if(action=== 'status'){
            handleStatusChange(id, e.target.value)
        } else{
            handlePriorityChange(id, e.target.value)
        }
      
    }
    return (
        <>
    <div className='task'>
        <h2>{title}</h2>
        <p className='assignee'>{assignee}</p>
        <p className='description'>{description}</p>
        <div className='options'>
        <Options onChange={(e) => handleChange(e,'status')} selectedOption={status} options={statusOptions} label='Status' />
        <Options onChange={(e) => handleChange(e,'priority')} selecetedOPtion={priority} options={priorityOptions} label='Priority'/>
        </div>
        <div className='edit-task'>
            <button onClick={() => handleEditClick(id)}>Edit</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    </div>
    </>

    )
}
export default Task;
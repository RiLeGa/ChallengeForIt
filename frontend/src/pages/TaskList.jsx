import React from 'react'
import useFetch from '../hooks/useFetch'
import { NavLink } from 'react-router-dom'

function TaskList() {
    const {data} = useFetch('http://localhost:3000/api/tasks')
  return (
    <>
        <ul>
            {
                !data ?
                ('Loading...') 
                : 
                (data.map(task => 
                    (
                        <NavLink to={`/TaskItem/${task.id}`} key={task.id}>
                                <h2>{task.id}</h2>
                                <h2>{task.title}</h2>
                                <h2>{task.description}</h2>
                        </NavLink>
                    )))
            }
        </ul>
    </> 
  )
}

export default TaskList
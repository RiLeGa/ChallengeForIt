import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function TaskItem() {
    const {id} = useParams()
    const {data} = useFetch(`http://localhost:3000/api/tasks/${id}`)
    console.log(data)
    return (
    <>
        {
            !data ?
            (
                'Loading...'
            ) 
            : 
            (
                <div key={data.task.id}>
                    <h2>{data.task.id}</h2>
                    <h2>{data.task.title}</h2>
                    <h2>{data.task.description}</h2>
                </div>
            )
        }
    </> 
    )
}

export default TaskItem
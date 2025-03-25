import React from 'react'
import useFetch from '../hooks/useFetch'
import { NavLink} from 'react-router-dom'

function TaskList() {
    const {data} = useFetch('http://localhost:3000/api/tasks')

    const handlerDelete = async (taskId) => {
        try {
            const response = await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                alert('Tarea eliminada');
                window.location.reload();
            } else {
                alert('No se pudo eliminar la tarea');
            }
        } catch (error) {
            console.error('Error al eliminar la tarea:', error);
            alert('Hubo un error al intentar eliminar la tarea');
        }
    }
  return (
    <>
        {
            !data || data === 0  ?
                <>
                    <div className='home'>
                        <h1>Bienvenido a TaskList</h1>
                        <h2>Lista de tareas</h2> 
                        <div className='formButtons'>
                            <NavLink className='builTaskButton' to={`/TaskCreate`}>Crear nueva tarea</NavLink>
                        </div>
                        <ul className='taskList'>
                            <h2 className='loadingMessage'>No hay tareas pendientes</h2>
                        </ul>
                    </div>
                </>
                :
                <>
                    <div className='home'>
                        <h1>Bienvenido a TaskList</h1>
                        <h2>Lista de tareas</h2> 
                        <div className='formButtons'>
                            <NavLink className='builTaskButton' to={`/TaskCreate`}>Crear nueva tarea</NavLink>
                        </div>
                        <ul className='taskList'>
                                {data.map(task => 
                                (
                                    <li key={task.id}>
                                        <NavLink className='task' to={`/TaskItem/${task.id}`} key={task.id}>
                                                <h2>{task.id}</h2>
                                                <h2>{task.title}</h2>
                                                <h2>{task.description}</h2>
                                        </NavLink>
                                        <button className='deleteButton' 
                                            onClick={() => handlerDelete(task.id)}>Eliminar tarea
                                        </button>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </>
        }       
    </> 
  )
}

export default TaskList
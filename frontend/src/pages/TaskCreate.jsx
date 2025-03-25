import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function TaskCreate() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async (e)=> {
        e.preventDefault()
        console.log("Presionaste el boton");

        if (!title || !description) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                    title,
                    description
                })
            })
            if (response.status === 200) {
                alert('Nueva tarea creada');
                setTitle('')
                setDescription('')
                navigate('/')
            } else {
                alert('Upss, No se pudo crear la tarea ')
            }
            
        } catch (error) {
            console.error('error al crear tarea', error);
            
        }
    }
    const handleCancel = () => {
        setTitle(""); 
        setDescription(""); 
    };

    return (
        <>
            <section className='formSection'>
                <form className='taskForm' onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <h2>Titulo de tarea</h2>
                        <input
                            placeholder="Título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="mb-3 d-flex flex-column">
                    <h2>Descripción</h2>
                        <input 
                        type='text'
                            placeholder="Descripcion"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className='formButtons'>
                        <button className='comfirmButton' type="submit">Crear Tarea</button>
                        <button className='cancelButton'type='button' onClick={handleCancel}>Cancelar</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default TaskCreate
let tasks = []


module.exports={
    taskList :  async (req, res) => {
        try {
            return res.send(tasks)
            return res.status(200).json({
                ok : true,
                msg :'Lista de Tareas'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss, hubo un error al obtener la Lista de Tareas'
            })
        }
    },
    taskDetail: async (req, res) => {
        try {
            const {id} = req.params
            console.log(id)
            const task = tasks.find(task => task.id === parseInt(id))
            if(!task) {
                return res.status(404).json({
                    ok: false,
                    msg: "Tarea no encontrada"
                })
            }
            return res.status(200).json({
                ok : true,
                msg :'Tarea encontrada',
                task:task
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss, la tarea que buscas no existe'
            })
        }
    },
    createTask : async (req, res) => {
        try {
            const { title, description, completed = false, creatAd } = req.body;

            let lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0

            console.log(lastId)

            let newTask = {
                id: lastId + 1,
                title,
                description,
                completed,
                creatAd: new Date().toDateString(),
            }
            tasks.push(newTask)
            return res.status(200).json({
                ok : true,
                msg :'Tarea agregada'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss, hubo un error al agregar la tarea'
            })
        }
    },
    updateTask: (req, res) => {
        try {
            const {id} = req.params
            const {title, description, completed} = req.body;
            console.log(id)
            const taskIndex = tasks.findIndex(task => task.id === parseInt(id))
            if(taskIndex === -1) {
                return res.status(404).json({
                    ok: false,
                    msg: "Tarea no encontrada"
                })
            }
            tasks[taskIndex] = {
                ...tasks[taskIndex],
                title,
                description,
                completed
            }
            return res.status(200).json({
                ok : true,
                msg :'Modificaste la tarea con exito'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss, hubo un error al modificar la tarea'
            })
        }   
    },
    deleteTask: (req, res) => {
        try {
            const {id} = req.params
            console.log(id)
            const taskIndex = tasks.findIndex(task => task.id === parseInt(id))
            if(taskIndex === -1) {
                return res.status(404).json({
                    ok: false,
                    msg: "Tarea no encontrada"
                })
            }
            tasks.splice(taskIndex, 1)
            return res.status(200).json({
                ok : true,
                msg :'Tarea eliminada exitosamente'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss, hubo un error al eliminar la tarea'
            })
        }
    }
}
const express = require('express');
const { taskList, createTask, deleteTask, updateTask } = require('../controllers/tasksController');
const router = express.Router();


/* GET tasklist. */
router.get('/tasks', taskList);
/* POST new task. */
router.post('/tasks', createTask );
/* PUT delete task. */
router.put('/tasks/:id', updateTask );
/* DELETE delete task. */
router.delete('/tasks/:id', deleteTask );



module.exports = router;
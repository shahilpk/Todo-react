import express from 'express'
import { createTask,getAllTask,getCurrentUserTask,updateTask,deleteTask } from '../controllers/task.js'

const router = express.Router()

router.post('/',createTask)
router.get('/all',getAllTask)
router.get('/myTasks',getCurrentUserTask)
router.put('/:taskId',updateTask)
router.delete('/:taskId',deleteTask)

export default router
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authenticate = require('../middleware/authMiddleware');

// All roles can view
router.get('/', authenticate(['Admin', 'Manager', 'Developer']), taskController.getTasks);
router.get('/:id', authenticate(['Admin', 'Manager', 'Developer']), taskController.getTaskById);

// Only Admin or Manager can create/delete
router.post('/', authenticate(['Admin', 'Manager','Developer']), taskController.createTask);
router.put('/:id', authenticate(['Admin', 'Manager', 'Developer']), taskController.updateTask);
router.delete('/:id', authenticate(['Admin', 'Manager', 'Developer']), taskController.deleteTask);

module.exports = router;

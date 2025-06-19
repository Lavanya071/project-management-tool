const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authenticate = require('../middleware/authMiddleware');

router.get('/', authenticate(['Admin', 'Manager', 'Developer']), projectController.getProjects);
router.get('/:id', authenticate(['Admin', 'Manager', 'Developer']), projectController.getProjectById);
router.post('/', authenticate(['Admin', 'Manager']), projectController.createProject);
router.put('/:id', authenticate(['Admin', 'Manager']), projectController.updateProject);
router.delete('/:id', authenticate(['Admin']), projectController.deleteProject);

module.exports = router;

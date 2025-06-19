const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authMiddleware');
const {
  getAllUserStories,
  getUserStoryById,
  updateUserStory,
  deleteUserStory,
  generateUserStories
} = require('../controllers/userStoryController');

// All roles can read
router.get('/', authenticate(['Admin', 'Manager', 'Developer']), getAllUserStories);
router.get('/:id', authenticate(['Admin', 'Manager', 'Developer']), getUserStoryById);

// Admin & Manager can create/update/delete
router.post('/', authenticate(['Admin', 'Manager','Developer']), generateUserStories);
router.put('/:id', authenticate(['Admin', 'Manager','Developer']), updateUserStory);
router.delete('/:id', authenticate(['Admin', 'Manager','Developer']), deleteUserStory);

module.exports = router;

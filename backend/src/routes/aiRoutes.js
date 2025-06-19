const express = require('express');
const router = express.Router();
const {
  generateUserStories,
  getUserStoriesByProjectId,
  updateUserStory,
  deleteUserStory
} = require('../controllers/aiController'); // ✅ Correct import

const authenticate = require('../middleware/authMiddleware');

// Routes
router.post('/stories', authenticate(['Admin', 'Manager']), generateUserStories);
router.get('/stories/:projectId', authenticate(['Admin', 'Manager', 'Developer']), getUserStoriesByProjectId);
router.put('/stories/:id', authenticate(['Admin', 'Manager']), updateUserStory);
router.delete('/stories/:id', authenticate(['Admin', 'Manager']), deleteUserStory);

module.exports = router;

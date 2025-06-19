const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authMiddleware');

router.get('/protected', authenticate(['Admin', 'Manager','Developer']), (req, res) => {
  res.json({ message: `Hello, ${req.user.role}! You accessed a protected route.` });
});

module.exports = router;

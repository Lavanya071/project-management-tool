const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');
const aiRoutes = require('./routes/aiRoutes');
const userStoryRoutes = require('./routes/userStoryRoutes'); // ✅ add this

const { sequelize } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/stories', userStoryRoutes); // ✅ mount route

// Health check route
app.get('/', (req, res) => {
  res.send('Project Management Tool Backend is running');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected.');
  } catch (err) {
    console.error('❌ Unable to connect to the database:', err);
  }
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

const { UserStory } = require('../models');

// ✅ Create user stories
const generateUserStories = async (req, res) => {
  try {
    const { projectName, features, projectId } = req.body;

    if (!projectName || !features || !Array.isArray(features) || !projectId) {
      return res.status(400).json({ error: 'projectName, features[], and projectId are required' });
    }

    const userStories = [];

    for (const feature of features) {
      const story = `As a user, I want to ${feature} in the ${projectName} project.`;
      const savedStory = await UserStory.create({ story, projectId });
      userStories.push(savedStory);
    }

    res.status(201).json({ userStories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get user stories by projectId
const getUserStoriesByProjectId = async (req, res) => {
  try {
    const { projectId } = req.params;
    const stories = await UserStory.findAll({ where: { projectId } });
    res.json(stories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update a user story
const updateUserStory = async (req, res) => {
  try {
    const { id } = req.params;
    const { story } = req.body;

    const userStory = await UserStory.findByPk(id);
    if (!userStory) return res.status(404).json({ message: 'User story not found' });

    userStory.story = story;
    await userStory.save();

    res.json({ message: 'User story updated successfully', userStory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a user story
const deleteUserStory = async (req, res) => {
  try {
    const { id } = req.params;

    const userStory = await UserStory.findByPk(id);
    if (!userStory) return res.status(404).json({ message: 'User story not found' });

    await userStory.destroy();
    res.json({ message: 'User story deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Export all functions
module.exports = {
  generateUserStories,
  getUserStoriesByProjectId,
  updateUserStory,
  deleteUserStory
};

const { UserStory } = require('../models');

const getAllUserStories = async (req, res) => {
  const stories = await UserStory.findAll();
  res.json(stories);
};

const getUserStoryById = async (req, res) => {
  const story = await UserStory.findByPk(req.params.id);
  if (!story) return res.status(404).json({ message: 'Not found' });
  res.json(story);
};

const updateUserStory = async (req, res) => {
  try {
    const story = await UserStory.findByPk(req.params.id);
    if (!story) return res.status(404).json({ message: 'Not found' });

    await story.update({ story: req.body.story });
    res.json(story);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteUserStory = async (req, res) => {
  try {
    const story = await UserStory.findByPk(req.params.id);
    if (!story) return res.status(404).json({ message: 'Not found' });

    await story.destroy();
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const generateUserStories = async (req, res) => {
  const { projectName, features, projectId } = req.body;
  const created = [];
  for (const f of features) {
    const story = `As a user, I want to ${f} in the ${projectName} project.`;
    created.push(await UserStory.create({ story, projectId }));
  }
  res.status(201).json({ userStories: created });
};

module.exports = {
  getAllUserStories,
  getUserStoryById,
  updateUserStory,
  deleteUserStory,
  generateUserStories
};

// src/services/projectService.js
import api from './api';

// Get all projects
const getProjects = async () => {
  const res = await api.get('/projects');
  return res.data;
};

// Create a new project
const createProject = async (projectData) => {
  const res = await api.post('/projects', projectData);
  return res.data;
};

// Update a project by ID
const updateProject = async (id, updatedData) => {
  const res = await api.put(`/projects/${id}`, updatedData);
  return res.data;
};

// Delete a project by ID
const deleteProject = async (id) => {
  const res = await api.delete(`/projects/${id}`);
  return res.data;
};

export default {
  getProjects,
  createProject,
  updateProject,
  deleteProject
};

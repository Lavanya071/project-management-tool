import api from './api';

const getTasks = async () => {
  const res = await api.get('/tasks');
  return res.data;
};

const createTask = async (taskData) => {
  const res = await api.post('/tasks', taskData);
  return res.data;
};

const updateTask = async (id, updatedData) => {
  const res = await api.put(`/tasks/${id}`, updatedData);
  return res.data;
};

const deleteTask = async (id) => {
  const res = await api.delete(`/tasks/${id}`);
  return res.data;
};

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask
};

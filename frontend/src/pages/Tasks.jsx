import React, { useEffect, useState } from 'react';
import taskService from '../services/taskService';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    try {
      const data = await taskService.getTasks();
      setTasks(data);
    } catch (err) {
      console.error(err);
      setError('Failed to load tasks. You might not be authorized.');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Tasks</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {tasks && tasks.length > 0 ? (
        tasks.map(task => (
          <div key={task.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Deadline: {task.deadline}</p>
            <p>Project ID: {task.projectId}</p>
            <p>Assigned To: {task.assignedTo}</p>
          </div>
        ))
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
};

export default Tasks;

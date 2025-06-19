// src/pages/UserStories.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const UserStories = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await api.get('/stories');
        setStories(res.data);
      } catch (err) {
        setError('Failed to fetch user stories');
        console.error(err);
      }
    };

    fetchStories();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>User Stories</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {stories.length > 0 ? (
        <ul>
          {stories.map((story) => (
            <li key={story.id}>{story.story}</li>
          ))}
        </ul>
      ) : (
        <p>No user stories found.</p>
      )}
    </div>
  );
};

export default UserStories;

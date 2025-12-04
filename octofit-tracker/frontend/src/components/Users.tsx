import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

const Users: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    console.log('Fetching Users from:', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        setUsers(results);
        console.log('Fetched Users:', data);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>{JSON.stringify(user)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

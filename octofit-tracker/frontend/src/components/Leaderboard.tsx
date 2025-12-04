import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

const Leaderboard: React.FC = () => {
  const [entries, setEntries] = useState<any[]>([]);

  useEffect(() => {
    console.log('Fetching Leaderboard from:', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        setEntries(results);
        console.log('Fetched Leaderboard:', data);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {entries.map((entry, idx) => (
          <li key={idx}>{JSON.stringify(entry)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;

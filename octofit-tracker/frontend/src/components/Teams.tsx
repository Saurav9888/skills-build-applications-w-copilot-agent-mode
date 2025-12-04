import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

const Teams: React.FC = () => {
  const [teams, setTeams] = useState<any[]>([]);

  useEffect(() => {
    console.log('Fetching Teams from:', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        setTeams(results);
        console.log('Fetched Teams:', data);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map((team, idx) => (
          <li key={idx}>{JSON.stringify(team)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;

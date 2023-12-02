import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchHistory: React.FC = () => {
  const [history, setHistory] = useState<any[]>([]);

  const fetchSearchHistory = async () => {
    try {
      const response = await axios.get('/history');
      setHistory(response.data);
    } catch (error) {
      console.error('Error fetching search history:', error);
    }
  };

  useEffect(() => {
    fetchSearchHistory();
  }, []);

  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {history.map((entry: any) => (
          <li key={entry.id}>{entry.city}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;

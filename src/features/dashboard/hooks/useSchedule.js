import { useState, useEffect } from 'react';
import { scheduleData } from '../data/schedule.data';

/**
 * Custom hook to fetch weekly schedule
 * Currently returns mock data, but can be easily updated to call API
 * 
 * Future API integration:
 * const response = await fetch('/api/schedule/weekly');
 * const data = await response.json();
 */
export const useSchedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        setLoading(true);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Return mock data (replace with API call)
        setSchedule(scheduleData);
        
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  return { schedule, loading, error };
};

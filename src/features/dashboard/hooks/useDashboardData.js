import { useState, useEffect } from 'react';
import { dashboardUserData } from '../data/dashboardUser.data';
import { statsData } from '../data/stats.data';

/**
 * Custom hook to fetch dashboard user data and statistics
 * Currently returns mock data, but can be easily updated to call API
 * 
 * Future API integration:
 * const response = await fetch('/api/dashboard');
 * const data = await response.json();
 */
export const useDashboardData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call delay
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Return mock data (replace this with actual API call later)
        setData({
          user: dashboardUserData,
          stats: statsData
        });
        
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

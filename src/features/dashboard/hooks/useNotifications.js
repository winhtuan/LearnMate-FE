import { useState, useEffect } from 'react';
import { notificationsData } from '../data/notifications.data';

/**
 * Custom hook to fetch recent notifications
 * Currently returns mock data, but can be easily updated to call API
 * 
 * Future API integration:
 * const response = await fetch('/api/notifications/recent');
 * const data = await response.json();
 */
export const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Return mock data (replace with API call)
        setNotifications(notificationsData);
        
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return { notifications, loading, error };
};

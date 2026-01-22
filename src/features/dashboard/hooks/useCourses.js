import { useState, useEffect } from 'react';
import { coursesData } from '../data/courses.data';

/**
 * Custom hook to fetch current courses
 * Currently returns mock data, but can be easily updated to call API
 * 
 * Future API integration:
 * const response = await fetch('/api/courses/current');
 * const data = await response.json();
 */
export const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Return mock data (replace with API call)
        setCourses(coursesData);
        
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, loading, error };
};

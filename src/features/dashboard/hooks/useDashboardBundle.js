import { useState, useEffect } from 'react';
import { dashboardDisplayData } from '../data/dashboardUser.data';
import { statsData } from '../data/stats.data';
import { coursesData } from '../data/courses.data';
import { scheduleData } from '../data/schedule.data';
import { notificationsData } from '../data/notifications.data';

/**
 * Fetches all dashboard data in parallel via Promise.all().
 * User identity (name, avatar, studyStreak) is NOT included here —
 * consume useAuth() for that.
 *
 * Future API integration — swap each mock Promise for real fetch calls:
 *   const [display, stats, courses, schedule, notifications] = await Promise.all([
 *     fetch('/api/dashboard/display').then(r => r.json()),
 *     fetch('/api/dashboard/stats').then(r => r.json()),
 *     fetch('/api/courses/current').then(r => r.json()),
 *     fetch('/api/schedule/weekly').then(r => r.json()),
 *     fetch('/api/notifications/recent').then(r => r.json()),
 *   ]);
 */
export const useDashboardBundle = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);

        const [display, stats, courses, schedule, notifications] = await Promise.all([
          new Promise(resolve => setTimeout(() => resolve(dashboardDisplayData), 100)),
          new Promise(resolve => setTimeout(() => resolve(statsData), 100)),
          new Promise(resolve => setTimeout(() => resolve(coursesData), 100)),
          new Promise(resolve => setTimeout(() => resolve(scheduleData), 100)),
          new Promise(resolve => setTimeout(() => resolve(notificationsData), 100)),
        ]);

        setData({ display, stats, courses, schedule, notifications });
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  return { data, loading, error };
};

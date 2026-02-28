import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

// Mock student — swap for a real /api/me fetch when backend is ready
const MOCK_USER = {
  name: "Alex Johnson",
  firstName: "Alex",
  role: "Student",
  status: "Active",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcBxWRUssd0B1giLhk-uuUyEThX-IH4vdgzJKbqGhL55iyl2-_e1Xz2ipAiRhi91xsagqC01eeVV-3pN41l_8X_rFkoXziCy9hkpJ5dFgj6VwDouGYVcS6yDHdXRMvOk6yCVPKJ7uwXThqfgtfcVaFrqe5wIYC-zA9KgZKMcxvSRTw1n5ExSgXGMbhGOh-tvVlMN7uXF98TKKlWKKXffqQXYBJ9_rw68k3uiQib243bgn8PAVurLtjhu-D5hXjqRoi9eQ-GH1QfyM",
  email: "alex.j@university.edu",
  phone: "+1 (555) 012-3456",
  dateJoined: "September 12, 2023",
  language: "English (US)",
  studyStreak: "12 Days 🔥",
};

export function AuthProvider({ children }) {
  const [user] = useState(MOCK_USER);
  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

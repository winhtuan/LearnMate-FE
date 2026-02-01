export const classOverviewData = {
  class: {
    title: "AP Calculus BC",
    period: "Period 4",
    room: "Room 204",
    semester: "Fall Semester"
  },
  
  breadcrumb: [
    { label: "Classes", href: "#", active: false },
    { label: "AP Calculus BC", href: "#", active: true }
  ],
  
  tabs: [
    { label: "Overview", route: "overview", active: true },
    { label: "Students", route: "students", active: false },
    { label: "Materials", route: "materials", active: false },
    { label: "Assignments", route: "assignments", active: false },
    { label: "Statistics", route: "statistics", active: false }
  ],
  
  statistics: [
    {
      id: 1,
      label: "Total Students",
      value: "28",
      trend: "2 this week",
      trendDirection: "up",
      trendColor: "green",
      subtitle: "Full capacity: 30"
    },
    {
      id: 2,
      label: "Average Grade",
      value: "87%",
      trend: "1.5% vs last week",
      trendDirection: "up",
      trendColor: "green",
      subtitle: "Class Median: 84%"
    },
    {
      id: 3,
      label: "Attendance Rate",
      value: "92%",
      trend: "0.8% vs last week",
      trendDirection: "down",
      trendColor: "red",
      subtitle: "Daily Average: 94%"
    }
  ],
  
  upcomingSession: {
    badge: "Upcoming Session",
    title: "Integration Applications Review",
    time: "Today, 2:00 PM — 3:30 PM (90 mins)",
    countdown: "45:12:08",
    buttons: [
      { label: "Start Session", type: "primary" },
      { label: "Edit Plan", type: "secondary" }
    ]
  },
  
  activityFeed: [
    {
      id: 1,
      type: "submission",
      studentName: "Sarah Miller",
      action: "submitted",
      item: "Unit 4: Definite Integrals Quiz",
      time: "10 minutes ago",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtJBbTy7UtvGnVR2Yby_4LfqEIZeUZ3XytMo-g6f_H_OnU6kqYVb0qZP9Gv3YZ8MNEvJ-oPOaYZsaUOU8EjDKaCt35wu8wPEb-bR9BtmnFukXr-zFxs-rlD3ScL41dYitZhLvMfLn_SMNfcjYx0zGSahicLAcsbEE7o40-QGiZJb1ImO5FFy8CXrXYjIlYAmJsGAS4BofhkcYh4Ok-U3je76cKp_Y68pWSicGi_wA-Gb_gJrN_nTLfA4BKOZg4911Y5RN31UVHU5A",
      score: "95/100"
    },
    {
      id: 2,
      type: "question",
      studentName: "James Lee",
      action: "posted a question in",
      item: "Homework Discussion",
      question: "Can someone explain the Fundamental Theorem part 2?",
      time: "2 hours ago",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO4jV6fEUOEOU_hy6j6jDTSS3doQBFtfrT-bhbWdFM78EGagVxl-Lf4FXmGl5OlxV5NR1VZseX54Z_1QGH11sqPB_jwsgsYKDI1IQNqjqt-pnkFXkFcZ1xRBcF5UFDOLADHkq414UwU_wgxx0bYqpJntb5yDQnvs9_YEiYw5kYx7CHTh3RDBNb0Vr4wOEcS1whFzrTAmgauD1De5bQVC764jXWOfMCcD6VqEIUkCsVhsquLzzrC9Nmprzcj1BXlHdvVjXzIMXHi60"
    },
    {
      id: 3,
      type: "extension",
      studentName: "Mia Wong",
      action: "requested a deadline extension for",
      item: "Project: Motion in Space",
      time: "4 hours ago",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCuYg_YLrmWimqgbM2jGDadY5MnPPV82fj223rw3qjGSRWydsaxviDTtSM8V09P2a6hdTnkD7iOYRRPQr5vlAF808CDP87zqSnvpe4Qm77OXob0o_E5kUfpWW7fHaNI5Ry4IxFQaNgLMdZZwqZfhvtawIVit2eJL99im8K_VcV1g7pMZjxmnFtlcHzxJsLxGeLGIAptY6ThE-du2BwjSsbOW7nCaZnM1mE1RK6rLeLg7WGAKCXhmxb62hU424qpW6fW3ldgM2awfg",
      hasActions: true
    },
    {
      id: 4,
      type: "device",
      studentName: "David Chen",
      action: "joined the class from a new device",
      time: "Yesterday at 5:30 PM",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQBj1JmUGtIEu_KliSuqlEUP4gj7B28wEMLPdiBPwWGdirOVd9ZPzp7tK9LIwvAUOxG0HIkf4dc2-Xi_2L6k8zOaAFa8q5Mj-n26EAgp9vUhWDA4D2uEw_rXTA2n0Zj1MALelBCkKjEMVLwpT-DFHZNTiu1dXN18s_wDtACEvimUoCc7jI-XI8ENN9VZzhhns-AJp_PWaVJ-0r937lgxJSEUli6Jp0BWowOYUo0abbT_-FfAiM076mbtCPqRhJB6mL79vO3LR2l-g"
    }
  ],
  
  needsAttention: [
    {
      id: 1,
      studentName: "Mia Wong",
      issue: "3 days inactive. Missing Midterm Review submission.",
      severity: "critical",
      action: "Remind",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCuYg_YLrmWimqgbM2jGDadY5MnPPV82fj223rw3qjGSRWydsaxviDTtSM8V09P2a6hdTnkD7iOYRRPQr5vlAF808CDP87zqSnvpe4Qm77OXob0o_E5kUfpWW7fHaNI5Ry4IxFQaNgLMdZZwqZfhvtawIVit2eJL99im8K_VcV1g7pMZjxmnFtlcHzxJsLxGeLGIAptY6ThE-du2BwjSsbOW7nCaZnM1mE1RK6rLeLg7WGAKCXhmxb62hU424qpW6fW3ldgM2awfg"
    },
    {
      id: 2,
      studentName: "James Lee",
      issue: "Drop in quiz performance noticed this week.",
      severity: "warning",
      action: "View Quiz",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO4jV6fEUOEOU_hy6j6jDTSS3doQBFtfrT-bhbWdFM78EGagVxl-Lf4FXmGl5OlxV5NR1VZseX54Z_1QGH11sqPB_jwsgsYKDI1IQNqjqt-pnkFXkFcZ1xRBcF5UFDOLADHkq414UwU_wgxx0bYqpJntb5yDQnvs9_YEiYw5kYx7CHTh3RDBNb0Vr4wOEcS1whFzrTAmgauD1De5bQVC764jXWOfMCcD6VqEIUkCsVhsquLzzrC9Nmprzcj1BXlHdvVjXzIMXHi60"
    }
  ],
  
  performance: {
    metrics: [
      {
        id: 1,
        label: "Assignment Completion",
        value: 84,
        color: "primary"
      },
      {
        id: 2,
        label: "Class Participation",
        value: 91,
        color: "green"
      },
      {
        id: 3,
        label: "Content Engagement",
        value: 68,
        color: "amber"
      }
    ],
    summary: {
      avgScore: "87.5",
      missing: "12"
    }
  },
  
  navigation: [
    { label: "Dashboard", href: "#", active: false },
    { label: "Classes", href: "#", active: true },
    { label: "Messages", href: "#", active: false },
    { label: "Resources", href: "#", active: false }
  ],
  
  user: {
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoDQATNfC8KZVK9FSGfs-3_LYefv49_9-AUT_6kWuE7NrqrzwiQwKc7JJKv1HrqlvC3Y-4B70KLiShdK_N5QbZvpydaUKfrP2D_Qx46ynLGLWvMK4ljDzooKS0QxSHd28WhDkgHFEadpHwrU_PhnjzQ_gLqnpsJj5zM7XyHADg77NzOUmP-0ESCxHj0TZUu2t6mgs5QNn-iTsFpsCUNEC8057PRLPpIFwdpdlSvMuH2bmZGnR1F9_gxORkcVk9I-kugI9F8q-bEuU"
  }
};

export const teacherPerformanceData = {
  header: {
    title: "Welcome back, Mr. Anderson",
    subtitle: "Here is your classroom performance overview for this semester.",
    currentDate: "Oct 12, 2023"
  },
  filters: [
    { label: "Last 30 Days", active: true },
    { label: "All Classes", active: false },
    { label: "Mathematics 101", active: false }
  ],
  kpiCards: [
    {
      title: "Assignment Completion",
      value: "88%",
      change: "+5.2%",
      trend: "up",
      icon: "assignment_turned_in",
      iconBg: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-primary",
      trendColor: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400"
    },
    {
      title: "Student Engagement",
      value: "92%",
      change: "+1.4%",
      trend: "up",
      icon: "group",
      iconBg: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-primary",
      trendColor: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400"
    },
    {
      title: "Class Average Grade",
      value: "87%",
      subValue: "(B+)",
      change: "-0.8%",
      trend: "down",
      icon: "grade",
      iconBg: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-primary",
      trendColor: "text-rose-500 bg-rose-50 dark:bg-rose-900/20 dark:text-rose-400"
    }
  ],
  charts: {
      lineChart: {
          title: "Academic Performance Trend",
          subtitle: "Sept - Dec Semester Overview",
          average: "84%",
          change: "+4.5% vs last term"
      },
      barChart: {
          title: "Attendance vs Engagement",
          subtitle: "Weekly Average Breakdown",
          average: "95%",
          change: "+2.1% this week"
      }
  },
  watchlist: [
    {
      studentName: "Sarah Johnson",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN3tKu009IlzNfZioQPbEGZOia-jt_ZrioZav7NrBJCLQgh8HGd-yhORVgf6JApAFDDx7Y3yvzQ2uMse5civgkItMoJNlVTM2qk1t93mFn4eIaNfRcJM7-KNhoWzHmhRC0qyNEiMvPhZT0hLNMGeWMNGOap48iE8z5zxblY-Jxh-KvBcfUYdkdj6Au4gSc--uuoK6Dy4kqNh_wMQGIN35eUKChM5CmKlF7bcbRq8KDaGkd6Wd87q6OduMUyVzAVftIAjXjQHaUqNk",
      className: "Math 101",
      attendance: 75,
      attendanceColor: "bg-yellow-500",
      assignmentAvg: "68% (C)",
      status: "At Risk",
      statusColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
    },
    {
      studentName: "Michael Chen",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDreP3Ek2Ik2ADjEcwbPW_uJnYr_-PSc2qtyLBQrDa0bINHcqLpJbOllYWo7tcVgkGaNuVb_aXjlJwTGTQjw0vccXIXASbe1MIH9Ny5ARnusxT2eIHCfo1VIJtallGN3px3bitEbht39k8rPtJzJaYI-ZqHDbmc5gnHhHq90SHi7bIUZkhDPT9vmaip7p3dVQm4GNNb7J34McuRzT8C6E7Iq5hYfBn4iKXnmOhO6duVzcSpefvDnmgnDso6gp5TuUXD6tPArjKAJOc",
      className: "Science 202",
      attendance: 95,
      attendanceColor: "bg-emerald-500",
      assignmentAvg: "92% (A)",
      status: "On Track",
      statusColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
    },
    {
      studentName: "Emily Davis",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxPRELVuMPJhmklvBA4YXRW_uyzD7yFqC4-Wtcq3jW9ocRdFQrNMYsLhdTNmz9b-NmiO2rvFHumIeYE5ZIV4ziZQejBC4ZNEjT503STM8XQxIYUa4-0lYQSlyLQHfp7Oh7OwfFsJA3on9Dvc9lqJ8BlUVUmzRS9FclY3wNC2v3xIi-sVOxZuxdESffcaxebLrKbSX9TYCAIBd4BdmnoMmvJ83hPqhjRKVb2RPqx3CdNWnUZaCXLtQywBOlaNyS2snXc4TvwhExDSg",
      className: "History 301",
      attendance: 45,
      attendanceColor: "bg-red-500",
      assignmentAvg: "72% (C+)",
      status: "Critical",
      statusColor: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
    }
  ]
};

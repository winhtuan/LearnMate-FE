export const earningData = {
  header: {
    title: "Financial Overview",
    subtitle: "Manage your earnings, view invoices, and track payouts.",
  },
  stats: [
    {
      label: "Total Earnings",
      value: "$12,450.00",
      icon: "attach_money",
      trend: "+12% vs last month",
      trendIcon: "trending_up",
      trendColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
      label: "Completed Sessions",
      value: "142",
      icon: "school",
      subtext: "Total hours: 213h"
    },
    {
      label: "Pending Payout",
      value: "$450.00",
      icon: "schedule",
      subtext: "Expected by Oct 31",
      isSpecial: true
    }
  ],
  transactions: [
    {
      id: "#SES-8921",
      date: "Oct 24, 2023",
      class: "Advanced Physics",
      student: "Alex M.",
      duration: "1h 30m",
      amount: "$45.00",
      status: "Paid",
      statusColor: "text-emerald-800 dark:text-emerald-300",
      statusBg: "bg-emerald-100 dark:bg-emerald-900/30",
      dotColor: "bg-emerald-500"
    },
    {
      id: "#SES-8840",
      date: "Oct 22, 2023",
      class: "Calculus I",
      student: "Sarah J.",
      duration: "1h 00m",
      amount: "$30.00",
      status: "Pending",
      statusColor: "text-yellow-800 dark:text-yellow-300",
      statusBg: "bg-yellow-100 dark:bg-yellow-900/30",
      dotColor: "bg-yellow-500"
    },
    {
      id: "#SES-8755",
      date: "Oct 20, 2023",
      class: "Chemistry Lab Prep",
      student: "David K.",
      duration: "2h 00m",
      amount: "$60.00",
      status: "Paid",
      statusColor: "text-emerald-800 dark:text-emerald-300",
      statusBg: "bg-emerald-100 dark:bg-emerald-900/30",
      dotColor: "bg-emerald-500"
    },
    {
      id: "#SES-8620",
      date: "Oct 18, 2023",
      class: "Intro to Python",
      student: "Group A",
      duration: "1h 00m",
      amount: "$40.00",
      status: "Paid",
      statusColor: "text-emerald-800 dark:text-emerald-300",
      statusBg: "bg-emerald-100 dark:bg-emerald-900/30",
      dotColor: "bg-emerald-500"
    },
    {
      id: "#SES-8511",
      date: "Oct 15, 2023",
      class: "Geometry Basics",
      student: "Emily R.",
      duration: "45m",
      amount: "$22.50",
      status: "Paid",
      statusColor: "text-emerald-800 dark:text-emerald-300",
      statusBg: "bg-emerald-100 dark:bg-emerald-900/30",
      dotColor: "bg-emerald-500"
    }
  ]
};

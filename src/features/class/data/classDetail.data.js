export const userData = {
  name: "Alex Doe",
  role: "Student",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDowOSvlZk9ccf5zSP5egVsWaHAEir6zofBVIxouVt0UDQDdoowleUwYXCFC2drs2sJa3OXs802jYcxWzhshWWbJZCcHvRraLc966Xa-WCI61lC-hVU_aQLXLiqVQfgVB0nEvJ4oyYtfmitjcpalc-tMZhD1vsTMgW9kyxlPlSlU28AqGrFOu95JXq7GH2bV6Ze-mx1fj4aaGReOC0KlWfA3sQFg-b0eYQGLTup_Y-ojp0h3nbGIKSQiMD1wOqlYcbiOdwWUuLr4Sc"
};

export const classDataMap = {
  1: {
    code: "MATH 101",
    status: "Active",
    name: "Advanced Calculus",
    description: "Understanding limits, derivatives, and integrals in higher dimensions with Prof. Sarah Smith.",
    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC16WruJdFA3tkKRjS6MecdoRWlb46A8AtN0Xw4xf7uvKzc1yf8DO2D10csN7ntdm47pwEmFwfqu7d6Zt34BCu76qvosK6YN7p4X3wWtkM4GZQwVtPxTqTkTFGQVlUOUpoWLGRqXseHOKQG2V3LKVUmzLRMsGcaJnfD7EzL-3SgdMu1T7A1eDuXMmCRWrYkWdqNgzdynR-LEeg9Dj_wp78rjOhosJBA_1jseIuM6rKKDsdz8OMpd0KMGB6vMwpla34qkraX3p2fWck"
  },
  2: {
    code: "HIST 202",
    status: "Active",
    name: "European History",
    description: "A deep dive into the Renaissance, Reformation, and Enlightenment eras with Prof. Alan Jones.",
    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJDpl-yzES2Bw1dklwscx8CpdGsPfM0NTQ1x9IRvkdcdv_rxMZyxAHp7CEgNNV7d1sGj8zXqlGs0Mb1I-Mgir63fHXheQbVaqpllZmV-pSZfba8uphDY-gGM39z6jqr_z0GhFkd57oB2NnbuiiPpiNiGxUNmMJFmIElq9KpSbaBTLH5kcmU7Pz6Lzx-Go4kgk-MevJ-RiovWjVGfzRRCvMKSTDr-FUz4r73IsCLmd_QzfACU7r882WcesnZi0IOAP0KnJywEUUl7o"
  },
  3: {
    code: "PSY 101",
    status: "Active",
    name: "Intro to Psychology",
    description: "Basics of human behavior, cognition, and emotional development with Dr. Emily Ray.",
    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOoSM2oqgBD6o8kzdIdvd2reUOnqs436xANZ5OmY8tatpfcTXk6Y4dMg3jySHyavaPnhyepy0e6us6KN92R2oTN00YLYvub1zlp5bUWkr-9fh87RRcSLyw4Kt-9y6_ZpoaGeXR3M43RHwhuYM-i8GgnWVZlcnjcFp7_KahwOl2iqz69NIj1HGE2I9n95D-6w_czNGzu3yJ9PlxAqgTh91vJuDY3ylIP0ilMozQOoN254noOKXj4c8e5JwNUBULUPlLEwulZPUNPmQ"
  },
  4: {
    code: "CS 305",
    status: "Upcoming",
    name: "Web Development",
    description: "Full stack development using modern frameworks and tools with Prof. David Kim.",
    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWRyL1S6p85xFDURdRWo6hSt4CzStU2xqBVOX7l1FP_6wqPSKzLuTY8Z_GqJEQto9M3itKA7DIiQaxXp_hhFw9Urlcbz7BvXn-N7SxRx2LN4eb6Sl3whCUOFllZgmb1wJDOUSbsebXILsSkkTYilnxFDy-x2a42i4qhlU4L1b51-nL9TJOuPNbZwD2l0Lwq8kquV8ZjF0ob6MxJ_rm7X-k-ZOFxlbfcOWbF4b4of8McJQxVtSyFsRP49g5HtaurByMGsUXlwiyMa8"
  }
};

export const breadcrumbItems = [
  { label: "Classes", href: "#" },
  { label: "Current Term", href: "#" },
  { label: "Advanced Calculus", href: "#", active: true }
];

export const tabItems = [
  { label: "Overview", active: true },
  { label: "Assignments", badge: "2", active: false },
  { label: "Materials", active: false },
  { label: "Schedule", active: false },
  { label: "Video Sessions", active: false }
];

export const tasksData = [
  {
    id: 1,
    title: "Vector Fields Practice",
    due: "Due Tomorrow at 11:59 PM",
    status: "Pending",
    icon: "assignment",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    locked: false
  },
  {
    id: 2,
    title: "Mid-Term Quiz",
    due: "Opens Oct 15 at 9:00 AM",
    status: "Locked",
    icon: "quiz",
    iconBg: "bg-blue-100",
    iconColor: "text-primary",
    locked: true
  }
];

export const assignmentsData = [
  {
    id: 1,
    title: "Problem Set 4: Multiple Integrals",
    due: "Due Oct 12",
    metadata: "10 Questions",
    status: "In Progress",
    statusColor: "text-orange-500",
    statusBg: "bg-orange-50",
    icon: "calculate",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    locked: false
  },
  {
    id: 2,
    title: "Lab Report: Surface Area",
    due: "Due Oct 15",
    metadata: "Peer Review",
    status: "Not Started",
    statusColor: "text-slate-500",
    statusBg: "bg-slate-100",
    icon: "science",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    locked: false
  },
  {
    id: 3,
    title: "Matlab Project: Visualizing 3D",
    due: "Opens Oct 20",
    metadata: "Code Submission",
    status: "Locked",
    statusColor: "text-slate-400",
    statusBg: "bg-slate-100",
    icon: "code",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    locked: true
  }
];

export const assignmentFilters = [
  { label: "All", active: true },
  { label: "Quizzes", active: false },
  { label: "Projects", active: false }
];

export const instructorData = {
  name: "Prof. Sarah Smith",
  department: "Department of Mathematics",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOoSM2oqgBD6o8kzdIdvd2reUOnqs436xANZ5OmY8tatpfcTXk6Y4dMg3jySHyavaPnhyepy0e6us6KN92R2oTN00YLYvub1zlp5bUWkr-9fh87RRcSLyw4Kt-9y6_ZpoaGeXR3M43RHwhuYM-i8GgnWVZlcnjcFp7_KahwOl2iqz69NIj1HGE2I9n95D-6w_czNGzu3yJ9PlxAqgTh91vJuDY3ylIP0ilMozQOoN254noOKXj4c8e5JwNUBULUPlLEwulZPUNPmQ"
};

export const resourcesData = [
  {
    id: 1,
    title: "Lecture 4 Slides.pdf",
    type: "pdf",
    metadata: "2.4 MB • Added Yesterday",
    icon: "picture_as_pdf",
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    href: "#"
  },
  {
    id: 2,
    title: "Wolfram Alpha Tools",
    type: "link",
    metadata: "External Link",
    icon: "link",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    href: "#"
  },
  {
    id: 3,
    title: "Week 3 Recorded Session",
    type: "video",
    metadata: "Video • 54 mins",
    icon: "smart_display",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
    href: "#"
  }
];

export const navigationItems = [
  { label: "Home", icon: "home", href: "/studentdashboard", active: false },
  { label: "Classes", icon: "book_2", href: "#", active: true },
  { label: "Schedule", icon: "calendar_month", href: "#", active: false },
  { label: "Messages", icon: "chat_bubble", href: "#", active: false }
];

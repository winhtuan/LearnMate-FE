export const classVideoData = {
  user: {
    name: "Alex Doe",
    role: "Student",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDowOSvlZk9ccf5zSP5egVsWaHAEir6zofBVIxouVt0UDQDdoowleUwYXCFC2drs2sJa3OXs802jYcxWzhshWWbJZCcHvRraLc966Xa-WCI61lC-hVU_aQLXLiqVQfgVB0nEvJ4oyYtfmitjcpalc-tMZhD1vsTMgW9kyxlPlSlU28AqGrFOu95JXq7GH2bV6Ze-mx1fj4aaGReOC0KlWfA3sQFg-b0eYQGLTup_Y-ojp0h3nbGIKSQiMD1wOqlYcbiOdwWUuLr4Sc"
  },
  
  navigation: [
    { icon: "home", label: "Home", href: "/", active: false },
    { icon: "book_2", label: "Classes", href: "/class", active: true, filled: true },
    { icon: "calendar_month", label: "Schedule", href: "/schedule", active: false },
    { icon: "chat_bubble", label: "Messages", href: "/messages", active: false },
    { icon: "settings", label: "Settings", href: "/settings", active: false }
  ],

  breadcrumbItems: [
    { label: "Classes", href: "/class", active: false },
    { label: "Current Term", href: "/class/current", active: false },
    { label: "Advanced Calculus", href: "#", active: true }
  ],

  classInfo: {
    code: "MATH 101",
    title: "Advanced Calculus",
    description: "Understanding limits, derivatives, and integrals in higher dimensions with Prof. Sarah Smith.",
    status: "Active",
    bannerImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC16WruJdFA3tkKRjS6MecdoRWlb46A8AtN0Xw4xf7uvKzc1yf8DO2D10csN7ntdm47pwEmFwfqu7d6Zt34BCu76qvosK6YN7p4X3wWtkM4GZQwVtPxTqTkTFGQVlUOUpoWLGRqXseHOKQG2V3LKVUmzLRMsGcaJnfD7EzL-3SgdMu1T7A1eDuXMmCRWrYkWdqNgzdynR-LEeg9Dj_wp78rjOhosJBA_1jseIuM6rKKDsdz8OMpd0KMGB6vMwpla34qkraX3p2fWck"
  },

  tabs: [
    { label: "Overview", active: false, badge: null },
    { label: "Assignments", active: false, badge: "2" },
    { label: "Materials", active: false, badge: null },
    { label: "Schedule", active: false, badge: null },
    { label: "Video Sessions", active: true, badge: null }
  ],

  liveSession: {
    status: "Starting Soon",
    statusType: "live", // live, upcoming, ended
    date: "Today, 2:00 PM EST",
    title: "Live: Multivariable Chain Rule",
    description: "Deep dive into complex differentiation scenarios. Please review Chapter 14.3 before joining.",
    host: {
      name: "Prof. Sarah Smith",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOoSM2oqgBD6o8kzdIdvd2reUOnqs436xANZ5OmY8tatpfcTXk6Y4dMg3jySHyavaPnhyepy0e6us6KN92R2oTN00YLYvub1zlp5bUWkr-9fh87RRcSLyw4Kt-9y6_ZpoaGeXR3M43RHwhuYM-i8GgnWVZlcnjcFp7_KahwOl2iqz69NIj1HGE2I9n95D-6w_czNGzu3yJ9PlxAqgTh91vJuDY3ylIP0ilMozQOoN254noOKXj4c8e5JwNUBULUPlLEwulZPUNPmQ"
    },
    studentsWaiting: 4
  },

  recordedLectures: [
    {
      id: 1,
      title: "Lecture 5: Partial Derivatives",
      duration: "1:12:45",
      date: "Recorded Oct 20",
      unit: "Unit 2",
      gradientFrom: "from-slate-800",
      gradientTo: "to-slate-950",
      accentGradient: "from-blue-600"
    },
    {
      id: 2,
      title: "Lecture 4: Vector Fields",
      duration: "58:20",
      date: "Recorded Oct 15",
      unit: "Unit 1",
      gradientFrom: "from-slate-900",
      gradientTo: "to-slate-800",
      accentGradient: "from-purple-600"
    },
    {
      id: 3,
      title: "Lecture 3: 3D Coordinate Systems",
      duration: "1:04:10",
      date: "Recorded Oct 08",
      unit: "Unit 1",
      gradientFrom: "from-gray-900",
      gradientTo: "to-slate-800",
      accentGradient: "from-emerald-600"
    }
  ]
};

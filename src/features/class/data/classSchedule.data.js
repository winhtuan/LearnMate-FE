export const classScheduleData = {
  user: {
    name: "Alex Doe",
    role: "Student",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDowOSvlZk9ccf5zSP5egVsWaHAEir6zofBVIxouVt0UDQDdoowleUwYXCFC2drs2sJa3OXs802jYcxWzhshWWbJZCcHvRraLc966Xa-WCI61lC-hVU_aQLXLiqVQfgVB0nEvJ4oyYtfmitjcpalc-tMZhD1vsTMgW9kyxlPlSlU28AqGrFOu95JXq7GH2bV6Ze-mx1fj4aaGReOC0KlWfA3sQFg-b0eYQGLTup_Y-ojp0h3nbGIKSQiMD1wOqlYcbiOdwWUuLr4Sc"
  },
  
  navigation: [
    { icon: "home", label: "Home", href: "/", active: false },
    { icon: "book_2", label: "Classes", href: "/classes", active: true, filled: true },
    { icon: "calendar_month", label: "Schedule", href: "/schedule", active: false },
    { icon: "chat_bubble", label: "Messages", href: "/messages", active: false }
  ],

  breadcrumbItems: [
    { label: "Classes", href: "/classes", active: false },
    { label: "Current Term", href: "/classes/current", active: false },
    { label: "Advanced Calculus", href: "#", active: true }
  ],

  classInfo: {
    code: "MATH 101",
    status: "Active",
    title: "Advanced Calculus",
    description: "Understanding limits, derivatives, and integrals in higher dimensions with Prof. Sarah Smith.",
    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC16WruJdFA3tkKRjS6MecdoRWlb46A8AtN0Xw4xf7uvKzc1yf8DO2D10csN7ntdm47pwEmFwfqu7d6Zt34BCu76qvosK6YN7p4X3wWtkM4GZQwVtPxTqTkTFGQVlUOUpoWLGRqXseHOKQG2V3LKVUmzLRMsGcaJnfD7EzL-3SgdMu1T7A1eDuXMmCRWrYkWdqNgzdynR-LEeg9Dj_wp78rjOhosJBA_1jseIuM6rKKDsdz8OMpd0KMGB6vMwpla34qkraX3p2fWck"
  },

  tabs: [
    { label: "Overview", active: false },
    { label: "Assignments", badge: "2", active: false },
    { label: "Materials", active: false },
    { label: "Schedule", active: true },
    { label: "Video Sessions", active: false }
  ],

  calendar: {
    month: "October",
    year: 2023,
    currentDay: 13,
    
    // Days array: day number, isPrevMonth/isNextMonth, isToday, events[]
    days: [
      { day: 24, isPrevMonth: true, events: [] },
      { day: 25, isPrevMonth: true, events: [] },
      { day: 26, isPrevMonth: true, events: [] },
      { day: 27, isPrevMonth: true, events: [] },
      { day: 28, isPrevMonth: true, events: [] },
      { day: 29, isPrevMonth: true, events: [] },
      { day: 30, isPrevMonth: true, events: [] },
      
      { day: 1, events: [] },
      { 
        day: 2, 
        events: [
          { type: "lecture", time: "10:00 AM", title: "Introduction" }
        ] 
      },
      { 
        day: 3, 
        events: [
          { type: "office", time: "2:00 PM", title: "Room 304" }
        ] 
      },
      { 
        day: 4, 
        events: [
          { type: "lecture", time: "10:00 AM", title: "Vectors" }
        ] 
      },
      { day: 5, events: [] },
      { 
        day: 6, 
        events: [
          { type: "lecture", time: "10:00 AM", title: "Dot Product" },
          { type: "deadline", time: "", title: "Quiz 1 Due" }
        ] 
      },
      { day: 7, events: [] },
      
      { day: 8, events: [] },
      { 
        day: 9, 
        events: [
          { type: "lecture", time: "10:00 AM", title: "Cross Prod." }
        ] 
      },
      { 
        day: 10, 
        events: [
          { type: "office", time: "2:00 PM", title: "Room 304" }
        ] 
      },
      { 
        day: 11, 
        events: [
          { type: "lecture", time: "10:00 AM", title: "Lines/Planes" }
        ] 
      },
      { day: 12, events: [] },
      { 
        day: 13, 
        isToday: true,
        events: [
          { type: "lecture", time: "10:00 AM", title: "Functions" },
          { type: "deadline", time: "", title: "Vector Fields Prac" }
        ] 
      },
      { day: 14, events: [] },
      
      { 
        day: 15, 
        events: [
          { type: "exam", time: "Opens 9:00 AM", title: "Mid-Term" }
        ] 
      },
      { 
        day: 16, 
        events: [
          { type: "lecture", time: "10:00 AM", title: "Partial Deriv" }
        ] 
      },
      { 
        day: 17, 
        events: [
          { type: "office", time: "2:00 PM", title: "Room 304" }
        ] 
      },
      { 
        day: 18, 
        events: [
          { type: "lecture", time: "10:00 AM", title: "Tangent Planes" }
        ] 
      },
      { day: 19, events: [] },
      { 
        day: 20, 
        events: [
          { type: "lecture", time: "10:00 AM", title: "Chain Rule" }
        ] 
      },
      { day: 21, events: [] },
      
      { day: 22, events: [] },
      { 
        day: 23, 
        events: [
          { type: "lecture", time: "10:00 AM", title: "Gradient" }
        ] 
      },
      { 
        day: 24, 
        events: [
          { type: "office", time: "2:00 PM", title: "Room 304" }
        ] 
      },
      { 
        day: 25, 
        events: [
          { type: "lecture", time: "10:00 AM", title: "Max/Min Values" }
        ] 
      },
      { day: 26, events: [] },
      { 
        day: 27, 
        events: [
          { type: "lecture", time: "10:00 AM", title: "Optimization" },
          { type: "deadline", time: "", title: "Assignment 2" }
        ] 
      },
      { day: 28, events: [] },
      
      { day: 29, events: [] },
      { 
        day: 30, 
        events: [
          { type: "lecture", time: "10:00 AM", title: "Lagrange" }
        ] 
      },
      { 
        day: 31, 
        events: [
          { type: "office", time: "2:00 PM", title: "Room 304" }
        ] 
      },
      { day: 1, isNextMonth: true, events: [] },
      { day: 2, isNextMonth: true, events: [] },
      { day: 3, isNextMonth: true, events: [] },
      { day: 4, isNextMonth: true, events: [] }
    ]
  },

  eventTypes: [
    { type: "lecture", label: "Lecture", color: "sky" },
    { type: "office", label: "Office Hours", color: "emerald" },
    { type: "deadline", label: "Deadlines", color: "rose" },
    { type: "exam", label: "Exams", color: "purple" }
  ]
};

export const classListData = {
  user: {
    name: "Alex Doe",
    role: "Student",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDowOSvlZk9ccf5zSP5egVsWaHAEir6zofBVIxouVt0UDQDdoowleUwYXCFC2drs2sJa3OXs802jYcxWzhshWWbJZCcHvRraLc966Xa-WCI61lC-hVU_aQLXLiqVQfgVB0nEvJ4oyYtfmitjcpalc-tMZhD1vsTMgW9kyxlPlSlU28AqGrFOu95JXq7GH2bV6Ze-mx1fj4aaGReOC0KlWfA3sQFg-b0eYQGLTup_Y-ojp0h3nbGIKSQiMD1wOqlYcbiOdwWUuLr4Sc"
  },
  navigation: [
    { icon: "home", label: "Home", href: "#", active: false },
    { icon: "book_2", label: "Classes", href: "#", active: true },
    { icon: "calendar_month", label: "Schedule", href: "#", active: false },
    { icon: "chat_bubble", label: "Messages", href: "#", active: false }
  ],
  stats: {
    coursesInProgress: "4",
    tasksCompleted: "12",
    nextClass: {
      title: "Advanced Calculus",
      time: "Starts in 45 mins"
    }
  },
  classes: [
    {
      id: 1,
      code: "MATH 101",
      title: "Advanced Calculus",
      professor: "Prof. Sarah Smith",
      description: "Understanding limits, derivatives, and integrals in higher dimensions.",
      nextClass: "Mon, 10:00 AM",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC16WruJdFA3tkKRjS6MecdoRWlb46A8AtN0Xw4xf7uvKzc1yf8DO2D10csN7ntdm47pwEmFwfqu7d6Zt34BCu76qvosK6YN7p4X3wWtkM4GZQwVtPxTqTkTFGQVlUOUpoWLGRqXseHOKQG2V3LKVUmzLRMsGcaJnfD7EzL-3SgdMu1T7A1eDuXMmCRWrYkWdqNgzdynR-LEeg9Dj_wp78rjOhosJBA_1jseIuM6rKKDsdz8OMpd0KMGB6vMwpla34qkraX3p2fWck",
      buttonText: "Resume",
      hasWarning: false
    },
    {
      id: 2,
      code: "HIST 202",
      title: "European History",
      professor: "Prof. Alan Jones",
      description: "A deep dive into the Renaissance, Reformation, and Enlightenment eras.",
      nextClass: "Tue, 02:00 PM",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJDpl-yzES2Bw1dklwscx8CpdGsPfM0NTQ1x9IRvkdcdv_rxMZyxAHp7CEgNNV7d1sGj8zXqlGs0Mb1I-Mgir63fHXheQbVaqpllZmV-pSZfba8uphDY-gGM39z6jqr_z0GhFkd57oB2NnbuiiPpiNiGxUNmMJFmIElq9KpSbaBTLH5kcmU7Pz6Lzx-Go4kgk-MevJ-RiovWjVGfzRRCvMKSTDr-FUz4r73IsCLmd_QzfACU7r882WcesnZi0IOAP0KnJywEUUl7o",
      buttonText: "Resume",
      hasWarning: false
    },
    {
      id: 3,
      code: "PSY 101",
      title: "Intro to Psychology",
      professor: "Dr. Emily Ray",
      description: "Basics of human behavior, cognition, and emotional development.",
      nextClass: "Wed, 11:30 AM",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOoSM2oqgBD6o8kzdIdvd2reUOnqs436xANZ5OmY8tatpfcTXk6Y4dMg3jySHyavaPnhyepy0e6us6KN92R2oTN00YLYvub1zlp5bUWkr-9fh87RRcSLyw4Kt-9y6_ZpoaGeXR3M43RHwhuYM-i8GgnWVZlcnjcFp7_KahwOl2iqz69NIj1HGE2I9n95D-6w_czNGzu3yJ9PlxAqgTh91vJuDY3ylIP0ilMozQOoN254noOKXj4c8e5JwNUBULUPlLEwulZPUNPmQ",
      buttonText: "Submit Task",
      hasWarning: true
    },
    {
      id: 4,
      code: "CS 305",
      title: "Web Development",
      professor: "Prof. David Kim",
      description: "Full stack development using modern frameworks and tools.",
      nextClass: null,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWRyL1S6p85xFDURdRWo6hSt4CzStU2xqBVOX7l1FP_6wqPSKzLuTY8Z_GqJEQto9M3itKA7DIiQaxXp_hhFw9Urlcbz7BvXn-N7SxRx2LN4eb6Sl3whCUOFllZgmb1wJDOUSbsebXILsSkkTYilnxFDy-x2a42i4qhlU4L1b51-nL9TJOuPNbZwD2l0Lwq8kquV8ZjF0ob6MxJ_rm7X-k-ZOFxlbfcOWbF4b4of8McJQxVtSyFsRP49g5HtaurByMGsUXlwiyMa8",
      buttonText: null,
      hasWarning: false,
      isUpcoming: true
    }
  ]
};

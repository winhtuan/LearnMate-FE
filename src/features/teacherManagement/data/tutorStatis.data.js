export const tutorStatisData = {
  classInfo: {
    title: "AP Calculus BC",
    period: "Period 4",
    semester: "Fall Semester 2023",
    room: "Room 304"
  },

  breadcrumbItems: [
    { label: "Dashboard", href: "/", active: false },
    { label: "Classes", href: "/classes", active: false },
    { label: "AP Calculus BC", href: "#", active: true }
  ],

  statsCards: [
    {
      id: 1,
      icon: "group",
      iconBgColor: "bg-blue-50",
      iconColor: "text-primary",
      iconRingColor: "ring-blue-100",
      label: "Total Students",
      value: "28",
      trend: "+2",
      trendDirection: "up",
      trendLabel: "vs last term",
      gradientColor: "from-blue-500 to-indigo-500"
    },
    {
      id: 2,
      icon: "grade",
      iconBgColor: "bg-violet-50",
      iconColor: "text-violet-600",
      iconRingColor: "ring-violet-100",
      label: "Average Grade",
      value: "87%",
      trend: "+5%",
      trendDirection: "up",
      trendLabel: "vs last week",
      gradientColor: "from-violet-500 to-purple-500"
    },
    {
      id: 3,
      icon: "calendar_month",
      iconBgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      iconRingColor: "ring-teal-100",
      label: "Attendance Rate",
      value: "92%",
      trend: "-1%",
      trendDirection: "down",
      trendLabel: "vs last week",
      gradientColor: "from-teal-500 to-emerald-500"
    }
  ],

  tabNavigation: [
    { label: "Students", href: "#", active: false },
    { label: "Assignments", href: "#", active: false },
    { label: "Materials", href: "#", active: false },
    { label: "Schedule", href: "#", active: false },
    { label: "Statistics", href: "#", active: true }
  ],

  chartData: {
    title: "Class Performance Trends",
    subtitle: "Average score comparisons over time",
    legend: [
      { label: "Class Avg", color: "bg-primary", active: true },
      { label: "District Avg", color: "bg-slate-300", active: false }
    ],
    yAxisLabels: ["100", "90", "80", "70", "60"],
    xAxisLabels: ["Week 1", "Week 4", "Week 8", "Week 12", "Current"],
    currentValue: "89%"
  },

  studentsNeedingAttention: [
    {
      id: 1,
      name: "Alex M.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYD-4VN3vg7vxobe7txk_tM3yNdNsF0QtSEgREBzAX2WnguZFxvo8wNtfUSSDCF6aJq0p6MZtUpy5r5dG2NJRWEFIZV4swPom4ktZPTxsq6e9yYVitP5yG9vqUH_gQhztALoNkAmiz0JC9Vb-QSufV0YgIzDcC18U3GoZZKEbZ4r09nAkEa9P82bhhUbdlDIz4kT1gM_fQmrx4pVJxAZExhCVbOiR20dXSQ2lbkVmy5tJ99Iz9efuNb-lt3oCNpjfZcJW_RLZtGcU",
      alertType: "missing",
      alertMessage: "Missing 2 Items",
      alertBgColor: "bg-rose-100",
      alertTextColor: "text-rose-600",
      hasStatusDot: true
    },
    {
      id: 2,
      name: "Sarah J.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZfAi7aFaNF3-IotYidaw2g37hKhagYbw2ZlXGbNfvu_8tEFXIl4_CcNTkBIzarv7fx9FkfHZNQz5hmAt51KHSwBWlBrE3MaHGARH3jQiyBitPBiiN52jlmadGeXzWy9_6yvghenbuoaF-VFSN5QScqHknyRfO9MvjtTU8EE-3a6qcUVE3ZySIQ_zmLY6mDlpNilnZ8mNKD__DeDHroPNWP6ZDD994HF2GohtHrfAd6SxAt6LEzBtv1VOyX4JS7T_Ko4YKP_MrZvc",
      alertType: "grade",
      alertMessage: "Grade Drop (-8%)",
      alertBgColor: "bg-amber-100",
      alertTextColor: "text-amber-700",
      hasStatusDot: false
    },
    {
      id: 3,
      name: "Michael B.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaO3zeRq1RFvV9PgI-b-eQjyRZ6365PrU8sw2xD36rft0R6qjn1gjx4SPQt5XrUXO8F1RentVmhegjzUC1jpBl_nEO-V_eJF_4nmGB4d90OGRXjRpCEkxzwkpLcpVae5POqmgL3K4C2_3Q7JfR4hnseYfYxzz7N57i-MS1FEhNjSHz_LkvRkGyuCegbeCHGlEuAsXe6jF3j7r9ts4eoaiZN66S30SY_KlZa9TgoKhXbw_jzlEaUCViqrY5pMl8ubsZUrJsu2At-4U",
      alertType: "attendance",
      alertMessage: "Low Attendance",
      alertBgColor: "bg-rose-100",
      alertTextColor: "text-rose-600",
      hasStatusDot: true
    }
  ],

  assignments: [
    {
      id: 1,
      name: "Unit 1 Quiz",
      completionRate: 95,
      barColor: "from-emerald-600 to-emerald-400",
      barColorHover: "from-emerald-500 to-emerald-300"
    },
    {
      id: 2,
      name: "Derivatives HW",
      completionRate: 88,
      barColor: "from-emerald-600 to-emerald-400",
      barColorHover: "from-emerald-500 to-emerald-300"
    },
    {
      id: 3,
      name: "Chain Rule",
      completionRate: 92,
      barColor: "from-emerald-600 to-emerald-400",
      barColorHover: "from-emerald-500 to-emerald-300"
    },
    {
      id: 4,
      name: "Midterm Prep",
      completionRate: 75,
      barColor: "from-amber-500 to-amber-300",
      barColorHover: "from-amber-400 to-amber-200"
    },
    {
      id: 5,
      name: "Integration Intro",
      completionRate: 45,
      barColor: "from-rose-500 to-rose-400",
      barColorHover: "from-rose-400 to-rose-300"
    }
  ],

  profileImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2ou_XRKvboTFwEMETh_VCNjpzx83GskQRnjsfzenN1m99hvynH7cuJ3FIY8wuDzG2d6KMRjJd-cVjaDAwfpjNwjiodicQAVbsCEMzIyw4lZ8l4IU9PNQS0G5Uj0oJseCxH_n5cyWIbrkbMya3-_g3K9nBl1ZVJYD17XaOO6S7XwJuA1COXn_A7LzNB4evfHOwMZRwMdnncnpr0H3d_FZe4fvz9HOATZjRml6mXjLQ6L_8OyS4EEUJIeRuHHpl_1Xcn5UlMJmB-c0"
};

export const assignmentsData = {
  upcoming: [
    {
      id: 1,
      title: "Vector Fields Practice",
      due: "Tomorrow, 11:59 PM",
      metadata: "Homework • 50 pts",
      status: "Pending",
      statusColor: "text-amber-700",
      statusBg: "bg-amber-100",
      icon: "assignment",
      iconBg: "bg-blue-50",
      iconColor: "text-primary",
      locked: false,
      highlighted: true
    },
    {
      id: 2,
      title: "Mid-Term Quiz",
      due: "Oct 15, 9:00 AM",
      metadata: "Quiz • 100 pts",
      status: "Locked",
      statusColor: "text-slate-600",
      statusBg: "bg-slate-100",
      icon: "quiz",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      locked: true,
      highlighted: false,
      dueLabel: "Starts"
    }
  ],
  missing: [
    {
      id: 3,
      title: "Partial Derivatives Set",
      due: "Yesterday",
      metadata: "Homework • 30 pts",
      status: "Missing",
      statusColor: "text-rose-700",
      statusBg: "bg-rose-100",
      icon: "warning",
      iconBg: "bg-rose-50",
      iconColor: "text-rose-500",
      locked: false,
      highlighted: false,
      dueColor: "text-rose-500"
    }
  ],
  completed: [
    {
      id: 4,
      title: "3D Coordinates Intro",
      due: "Sep 28",
      metadata: "Quiz • 20/20 pts",
      status: "Graded",
      statusColor: "text-emerald-700",
      statusBg: "bg-emerald-100",
      icon: "check_circle",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-500",
      locked: false,
      highlighted: false,
      completed: true,
      dueLabel: "Submitted"
    }
  ]
};

export const assignmentDetailData = {
  id: 1,
  title: "Vector Fields Practice",
  type: "Homework",
  dueDate: "Due Tomorrow",
  points: "50 Points",
  instructions: {
    text: "Complete the exercises on vector fields in 3D space. Please ensure you show all steps for the calculations of divergence and curl.",
    items: [
      "Problem Set 4.1 (Questions 1-5)",
      "Problem Set 4.2 (Questions 2, 4, 6)",
      "Verify your answers using the provided visualizer tool."
    ]
  },
  resources: [
    {
      id: 1,
      title: "Problem_Set_4.pdf",
      size: "1.2 MB",
      icon: "picture_as_pdf",
      iconBg: "bg-white",
      iconColor: "text-red-500",
      href: "#"
    }
  ],
  uploadInfo: {
    text: "Click to upload or drag & drop",
    subtext: "PDF, DOCX, or JPG (Max 10MB)"
  }
};

export const tabItems = [
  { label: "Overview", active: false },
  { label: "Assignments", badge: "2", active: true },
  { label: "Materials", active: false },
  { label: "Schedule", active: false },
  { label: "Video Sessions", active: false }
];

export const breadcrumbItems = [
  { label: "Classes", href: "/classes", active: false },
  { label: "Current Term", href: "#", active: false },
  { label: "Advanced Calculus", href: "#", active: true }
];

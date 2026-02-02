export const detailStudentData = {
  student: {
    id: "88231",
    name: "Alex Rivera",
    grade: "Grade 10",
    dob: "Apr 12, 2008",
    email: "alex.rivera@school.edu",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjGIExfEgzO_A8eZIMLg8McUVvVm-dwJwBgwnzjlxFnY1qToXCaPYbOziLFzNBkwuQy4zGQC5Vh_QBQ9JQ9LZLq_YqE2nQp6UhcubXaYswdclen94Wn8R62ib3aib2uDJLwOUFwxcKcNgPSC4acisAwX6_HtODo2B_warPBNXP5iWe_82jFTwNh5kJMYcyQsQNRnTYW51EcKkFPG54qe1O75yemDrUgq7Ntp6xt_W1LubrLWnYipTVzCxR36NrQsbOJqW1KC_g0Zs",
    status: "Active",
    learningStatus: {
      label: "On Track",
      status: "success" // for UI logic
    }
  },
  navigation: [
    { label: "Overview", href: "#", active: false },
    { label: "Assignments", href: "#", count: 2, active: false },
    { label: "Attendance", href: "#", active: false },
    { label: "Private Notes", href: "#", active: true, icon: "lock" }
  ],
  noteHistory: [
    {
      id: 1,
      author: "Mr. Anderson",
      role: "Math Dept",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsyASUbSvqNmZgUXR5lCdVqdTtNMFyFMsulRpCHqszsAVDDMW59rzTUIh5MDLPH4JKU6Mu1bUfrrpyVEkfU3aCB9F_lrSe_Y9tlQrr_VchSLMDtHwI3E4L_Ec6eeUGau8-w3p6VwL7zO0T0HIjLCkwL4xaSsFGZN4xC5WtHmeea84WkNPe44tP7tfcOqH_tVNfZPWMfcPd6rPSOcaOTPoda5PziDjVqL1E6o9gNV9TWI03nJBUVi6tDkAfRzvMVJaA6MM_RHTaJno",
      date: "Oct 24, 2023 at 2:30 PM",
      content: "Alex struggled with the core calculus concept today (Derivatives). He seemed distracted. I recommend a supplementary tutoring session next Tuesday to catch up before the mid-term.",
      tags: [{ label: "Academic Concern", type: "error" }],
      isPrivate: true
    },
    {
      id: 2,
      author: "Mrs. Sarah Jenkins",
      role: "Counselor",
      initials: "MS",
      initialsColor: "indigo",
      date: "Sep 10, 2023 at 9:15 AM",
      content: "Met with Alex's parents. We discussed behavioral goals for the semester. They are very supportive and requested weekly updates on his attendance.",
      isPrivate: true,
      isImportant: true
    },
    {
      id: 3,
      author: "Mr. Anderson",
      role: "Math Dept",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJBmybT4iLd1yauFGcNqZL2KmGIa14K5RYUFfDO9ZEfNoJ2NJlnNKMe_b55ZkUm81iTHIZkwNahf0zGSPscnlSzFJgvL3CV1s-V1S_pt0h8p5kI8VecvCjVKsczQb7lgw85ylEQaPuxhu-SCPHN4SThhAuSvCF-adix3nYs4m9XhXDN5NpjKxvMSyas8WGkOlsouBwkWh7DxtSLg5rNHCVjR7T6fd1KytfKhKos3p5fG3VXBEV5CnV-1rhyYVEDhi2owyM87GcqcU",
      date: "Sep 02, 2023 at 11:00 AM",
      content: "Initial assessment completed. Alex shows strong aptitude in geometry but needs review on algebra basics.",
      isPrivate: true
    }
  ],
  qualitativeInsights: {
    monthlyParticipation: {
        label: "Monthly Participation",
        value: 85,
        status: "High Engagement",
        note: "\"Often leads group discussions\""
    },
    keyStrengths: ["Geometry", "Visual Learner", "Peer Mentor", "Focus"]
  },
  focusAreas: [
    {
      id: 1,
      name: "Algebraic Logic",
      description: "Struggles with abstract variable manipulation. Needs more practice sheets.",
      icon: "psychology",
      color: "amber"
    },
    {
      id: 2,
      name: "Time Management",
      description: "Assignments often submitted last minute.",
      icon: "timer",
      color: "rose"
    }
  ],
  upcomingEvents: [
    {
      id: 1,
      month: "Oct",
      day: "28",
      title: "Mid-term Exam",
      subtitle: "Calculus • 9:00 AM"
    },
    {
      id: 2,
      month: "Nov",
      day: "02",
      title: "Parent Conference",
      subtitle: "Zoom • 4:30 PM"
    }
  ]
};

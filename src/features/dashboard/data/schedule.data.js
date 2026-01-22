// Mock schedule data - will be replaced with API call later
export const scheduleData = [
  {
    day: "Today",
    date: "Wed 25",
    isToday: true,
    classes: [
      { time: "10:00 AM", name: "Calculus II", room: "Rm 304", color: "primary" },
      { time: "02:00 PM", name: "History 101", room: "Lecture Hall B", color: "purple-500" }
    ]
  },
  {
    day: "Thu",
    date: "26",
    isToday: false,
    classes: [
      { time: "09:00 AM", name: "Physics Lab", room: "" },
      { time: "11:30 AM", name: "Study Group", room: "" }
    ]
  },
  {
    day: "Fri",
    date: "27",
    isToday: false,
    classes: []
  }
];

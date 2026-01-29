export const scheduleData = {
  header: {
    title: "Weekly Schedule",
    subtitle: "Manage your classes and availability for the upcoming week.",
    currentRange: "Oct 23 - Oct 29"
  },
  calendar: {
    days: [
      { day: "Mon", date: "23", active: false },
      { day: "Tue", date: "24", active: true },
      { day: "Wed", date: "25", active: false },
      { day: "Thu", date: "26", active: false },
      { day: "Fri", date: "27", active: false }
    ],
    timeSlots: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM"],
    events: [
      {
        dayIndex: 0, // Mon
        timeIndex: 0, // 09:00 AM
        title: "Math 101",
        type: "Class",
        location: "Room 302",
        color: "blue"
      },
      {
        dayIndex: 2, // Wed
        timeIndex: 0, // 09:00 AM
        title: "Math 101",
        type: "Class",
        location: "Room 302",
        color: "blue"
      },
      {
        dayIndex: 4, // Fri
        timeIndex: 0, // 09:00 AM
        title: "Mid-term Prep",
        type: "Exam",
        location: "Online",
        color: "red"
      },
      // ... more events matching HTML
      {
        dayIndex: 1, // Tue
        timeIndex: 1, // 10:00 AM
        title: "Trial Lesson",
        type: "New Student: Alex",
        color: "green"
      },
      {
        dayIndex: 2, // Wed
        timeIndex: 1, // 10:00 AM
        title: "AI Suggestion",
        subtitle: "High Demand",
        type: "ai-suggestion"
      },
       {
        dayIndex: 0, // Mon
        timeIndex: 2, // 11:00 AM
        title: "Science 404",
        type: "Class",
        location: "Lab A",
        color: "blue"
      },
      {
         dayIndex: 2, // Wed
        timeIndex: 2, // 11:00 AM
        title: "Science 404",
        type: "Class",
        location: "Lab A",
        color: "blue"
      },
      {
        dayIndex: 3, // Thu
        timeIndex: 2, // 11:00 AM
        title: "Trial Lesson",
        type: "New Student: Sarah",
        color: "green"
      },
      {
         dayIndex: 1, // Tue
         timeIndex: 4, // 01:00 PM
         title: "Physics Exam",
         type: "Exam",
         location: "Room 101",
         color: "red"
      },
      {
         dayIndex: 4, // Fri
         timeIndex: 4, // 01:00 PM
         title: "Office Hours",
         type: "Drop-in",
         color: "blue"
      }
    ],
    blockedSlots: [
       { dayIndex: 3, timeIndex: 0 } // Thu 9AM
    ],
    lunchBreaks: [
        { timeIndex: 3, label: "Lunch Break" } // 12:00 PM
    ]
  },
  availability: {
      defaultStart: "09:00 AM",
      defaultEnd: "05:00 PM",
      days: ["M", "T", "W", "T", "F", "S", "S"],
      activeDays: [0, 2, 4], // Active indices
      repeatWeekly: true
  },
  aiInsight: {
      text: "High student demand expected on Tuesday evenings (5 PM - 8 PM).",
      voicePlaceholder: "\"Block Friday afternoon...\""
  }
};

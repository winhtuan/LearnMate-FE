// User identity removed — now sourced from AuthContext via useAuth()
export const studentProfileData = {
    completedCourses: [
        {
            id: 1,
            title: "Advanced React Patterns",
            instructor: "Sarah Drasner",
            completedDate: "Oct 15, 2023",
            icon: "code",
            iconColorInfo: { bg: "bg-emerald-50", text: "text-emerald-600" }
        },
        {
            id: 2,
            title: "UI/UX Design Fundamentals",
            instructor: "Gary Simon",
            completedDate: "Sep 28, 2023",
            icon: "brush",
            iconColorInfo: { bg: "bg-blue-50", text: "text-blue-600" }
        },
        {
            id: 3,
            title: "Introduction to Data Science",
            instructor: "Andrew Ng",
            completedDate: "Aug 10, 2023",
            icon: "analytics",
            iconColorInfo: { bg: "bg-purple-50", text: "text-purple-600" }
        }
    ]
};

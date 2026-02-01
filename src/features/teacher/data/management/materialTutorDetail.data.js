export const materialTutorDetailData = {
    className: "AP Calculus BC",
    period: "Period 4",
    semester: "Fall Semester 2023",
    room: "Room 304",

    breadcrumbs: [
        { label: "Dashboard", href: "#" },
        { label: "Classes", href: "#" },
        { label: "AP Calculus BC", href: "#", active: true }
    ],

    navigation: [
        { label: "Dashboard", href: "#", active: false },
        { label: "Classes", href: "#", active: true },
        { label: "Messages", href: "#", active: false },
        { label: "Settings", href: "#", active: false }
    ],

    tabs: [
        { label: "Students", active: false },
        { label: "Assignments", active: false },
        { label: "Materials", active: true },
        { label: "Schedule", active: false },
        { label: "Statistics", active: false }
    ],

    materials: [
        {
            id: 1,
            name: "Syllabus - Calculus BC 2023.pdf",
            icon: "description",
            iconBgColor: "bg-rose-50",
            iconTextColor: "text-rose-600",
            iconRingColor: "ring-rose-100",
            uploadDate: "Sep 12, 2023",
            size: "1.2 MB",
            visibility: "public",
            isPublic: true
        },
        {
            id: 2,
            name: "Lecture 04 - Integration Rules.mp4",
            icon: "movie",
            iconBgColor: "bg-blue-50",
            iconTextColor: "text-blue-600",
            iconRingColor: "ring-blue-100",
            uploadDate: "Oct 05, 2023",
            size: "248.5 MB",
            visibility: "private",
            isPublic: false
        },
        {
            id: 3,
            name: "Midterm Review Guide.docx",
            icon: "article",
            iconBgColor: "bg-indigo-50",
            iconTextColor: "text-indigo-600",
            iconRingColor: "ring-indigo-100",
            uploadDate: "Nov 20, 2023",
            size: "45 KB",
            visibility: "public",
            isPublic: true
        },
        {
            id: 4,
            name: "Chain Rule Exercises.pdf",
            icon: "description",
            iconBgColor: "bg-rose-50",
            iconTextColor: "text-rose-600",
            iconRingColor: "ring-rose-100",
            uploadDate: "Oct 14, 2023",
            size: "890 KB",
            visibility: "public",
            isPublic: true
        },
        {
            id: 5,
            name: "Practice Exam - Unit 3.pdf",
            icon: "description",
            iconBgColor: "bg-rose-50",
            iconTextColor: "text-rose-600",
            iconRingColor: "ring-rose-100",
            uploadDate: "Nov 02, 2023",
            size: "2.1 MB",
            visibility: "private",
            isPublic: false
        }
    ],

    storage: {
        used: "1.4 GB",
        total: "5 GB",
        percentage: 28
    },

    totalFiles: 42,

    folders: [
        { id: 1, name: "All Materials", count: 42, active: true },
        { id: 2, name: "Unit 1: Limits", count: 12, active: false },
        { id: 3, name: "Unit 2: Derivatives", count: 15, active: false },
        { id: 4, name: "Unit 3: Integration", count: 8, active: false },
        { id: 5, name: "Exam Prep", count: 7, active: false }
    ],

    recentUploads: [
        {
            id: 1,
            name: "Final Project Guidelines.docx",
            icon: "article",
            iconBgColor: "bg-indigo-50",
            iconTextColor: "text-indigo-600",
            timeAgo: "2 hours ago"
        },
        {
            id: 2,
            name: "Integration Practice 4.pdf",
            icon: "description",
            iconBgColor: "bg-rose-50",
            iconTextColor: "text-rose-600",
            timeAgo: "Yesterday"
        },
        {
            id: 3,
            name: "Lab Session Recap.mp4",
            icon: "movie",
            iconBgColor: "bg-blue-50",
            iconTextColor: "text-blue-600",
            timeAgo: "2 days ago"
        }
    ],

    user: {
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2ou_XRKvboTFwEMETh_VCNjpzx83GskQRnjsfzenN1m99hvynH7cuJ3FIY8wuDzG2d6KMRjJd-cVjaDAwfpjNwjiodicQAVbsCEMzIyw4lZ8l4IU9PNQS0G5Uj0oJseCxH_n5cyWIbrkbMya3-_g3K9nBl1ZVJYD17XaOO6S7XwJuA1COXn_A7LzNB4evfHOwMZRwMdnncnpr0H3d_FZe4fvz9HOATZjRml6mXjLQ6L_8OyS4EEUJIeRuHHpl_1Xcn5UlMJmB-c0"
    }
};

export const classStudentViewData = {
    className: "AP Calculus BC",
    classStatus: "Active Semester",
    breadcrumbs: [
        { label: "Classes", href: "#" },
        { label: "AP Calculus BC", href: "#", active: true }
    ],
    tabs: [
        { label: "Overview", active: false },
        { label: "Students", active: true },
        { label: "Assignments", active: false },
        { label: "Statistics", active: false }
    ],
    attendance: {
        average: "94.2%",
        weekData: [
            { day: "Mon", percentage: 92, label: "Mon: 92%" },
            { day: "Tue", percentage: 96, label: "Tue: 96%" },
            { day: "Wed", percentage: 88, label: "Wed: 88%" },
            { day: "Thu", percentage: 98, label: "Thu: 98%" },
            { day: "Fri", percentage: 97, label: "Fri: 97%" },
            { day: "Sat", percentage: 0, label: "Sat" },
            { day: "Sun", percentage: 0, label: "Sun" }
        ]
    },
    students: [
        {
            id: 1,
            name: "Sarah Miller",
            email: "sarah.m@example.com",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtJBbTy7UtvGnVR2Yby_4LfqEIZeUZ3XytMo-g6f_H_OnU6kqYVb0qZP9Gv3YZ8MNEvJ-oPOaYZsaUOU8EjDKaCt35wu8wPEb-bR9BtmnFukXr-zFxs-rlD3ScL41dYitZhLvMfLn_SMNfcjYx0zGSahicLAcsbEE7o40-QGiZJb1ImO5FFy8CXrXYjIlYAmJsGAS4BofhkcYh4Ok-U3je76cKp_Y68pWSicGi_wA-Gb_gJrN_nTLfA4BKOZg4911Y5RN31UVHU5A",
            engagement: "High",
            engagementColor: "green",
            lastAttendance: "Today, 10:15 AM",
            assignmentsCompleted: 10,
            assignmentsTotal: 10,
            assignmentPercentage: 100
        },
        {
            id: 2,
            name: "James Lee",
            email: "j.lee@example.com",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO4jV6fEUOEOU_hy6j6jDTSS3doQBFtfrT-bhbWdFM78EGagVxl-Lf4FXmGl5OlxV5NR1VZseX54Z_1QGH11sqPB_jwsgsYKDI1IQNqjqt-pnkFXkFcZ1xRBcF5UFDOLADHkq414UwU_wgxx0bYqpJntb5yDQnvs9_YEiYw5kYx7CHTh3RDBNb0Vr4wOEcS1whFzrTAmgauD1De5bQVC764jXWOfMCcD6VqEIUkCsVhsquLzzrC9Nmprzcj1BXlHdvVjXzIMXHi60",
            engagement: "Steady",
            engagementColor: "amber",
            lastAttendance: "Yesterday",
            assignmentsCompleted: 8,
            assignmentsTotal: 10,
            assignmentPercentage: 80
        },
        {
            id: 3,
            name: "Mia Wong",
            email: "mia.wong@school.edu",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCuYg_YLrmWimqgbM2jGDadY5MnPPV82fj223rw3qjGSRWydsaxviDTtSM8V09P2a6hdTnkD7iOYRRPQr5vlAF808CDP87zqSnvpe4Qm77OXob0o_E5kUfpWW7fHaNI5Ry4IxFQaNgLMdZZwqZfhvtawIVit2eJL99im8K_VcV1g7pMZjxmnFtlcHzxJsLxGeLGIAptY6ThE-du2BwjSsbOW7nCaZnM1mE1RK6rLeLg7WGAKCXhmxb62hU424qpW6fW3ldgM2awfg",
            engagement: "Dropping",
            engagementColor: "red",
            lastAttendance: "3 days ago",
            assignmentsCompleted: 5,
            assignmentsTotal: 10,
            assignmentPercentage: 50
        },
        {
            id: 4,
            name: "David Chen",
            email: "d.chen@school.edu",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQBj1JmUGtIEu_KliSuqlEUP4gj7B28wEMLPdiBPwWGdirOVd9ZPzp7tK9LIwvAUOxG0HIkf4dc2-Xi_2L6k8zOaAFa8q5Mj-n26EAgp9vUhWDA4D2uEw_rXTA2n0Zj1MALelBCkKjEMVLwpT-DFHZNTiu1dXN18s_wDtACEvimUoCc7jI-XI8ENN9VZzhhns-AJp_PWaVJ-0r937lgxJSEUli6Jp0BWowOYUo0abbT_-FfAiM076mbtCPqRhJB6mL79vO3LR2l-g",
            engagement: "Steady",
            engagementColor: "green",
            lastAttendance: "Today, 8:45 AM",
            assignmentsCompleted: 9,
            assignmentsTotal: 10,
            assignmentPercentage: 90
        }
    ],
    alerts: [
        {
            id: 1,
            studentName: "Mia Wong",
            studentAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIZVygfCdX149JpNC86Na5tFxZvWo7U1BUR1rl8OL_s8CqPCH0Iiv0ORia9xl0Bpath4HpM9ZirMoFnd0KkGJrFH4eSyBxNZP1Ku6XXEqcfNYutun1UYdMbcB4_u-3-yJoCaX-UmyUxTbIZaE42d8oYc-ydhZL82brLwxyfXjhTPDJdT87bdcgq4DE7wUiGZZP9uVnt8VMxeGg7nUPs-lhsbc38D7OHwURjP5YJ6DhClwQ01M14rc9Btne5p1iJsMM35NGLsVJcRc",
            message: "3 days inactive. Missing Midterm Review submission.",
            severity: "high",
            action: "Remind"
        },
        {
            id: 2,
            studentName: "James Lee",
            studentAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBucBP-1TkR_XRIehDvOw9XdCPmF1_NzuZUzVhc51zPdqMf-doS6AG42q2tuFmtmFcc9arlpl4P5cAfTYJDMzNfRvNzXuNW_E91cUIhqaC37bk0uVqyJjQ2p4PaK0Ioni6zCoJu6Gl0xOo7vqE-cT7mQtp3CNN6IySVEceddSGgiSc9WKc86CN3ppCmzl9tBSzNeguZaRSdnoWQXc70K1FARoxQMYxnR5_4ivUBGervzkteEEC9Nr1ggAdKhd48IOCWqbaV3v2ujg4",
            message: "Drop in quiz performance noticed this week.",
            severity: "medium",
            action: "View Quiz"
        }
    ],
    quickStats: {
        enrolled: 28,
        atRisk: 2,
        avgGrade: "B+",
        participation: "88%"
    },
    totalStudents: 28,
    showingStudents: 4
};

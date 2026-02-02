export const teacherClassesData = {
    user: {
        name: "Sarah Wilson",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwMU86vplh1_wfkPPSrj1oTz7X7uQcYjIx27tnYVjtrpgkDQ6WPBOSFktUZ_2aBgwJINC2x5IFYSnY4bKyRAEINKrfr8yMbWnyG9fHkF_cVCB8JzzB2_aIQ26Z-nvUTe-a-WrU0g1tV5JupzlaRb1zBeLPpNmjl966hgiLlADVFm3f4lL_i13E-JK6JW04Hg_BfX5uGjv8vUEDGpYLwovQUXxCC5iISkjLtNfTMv9QqCRnuqQAczgq2FXggvyeff0Ndl8jSo21jSI"
    },
    pageTitle: "My Classes",
    pageDescription: "Manage your 6 active learning groups and curriculum.",
    classes: [
        {
            id: 1,
            title: "Advanced Math 101",
            schedule: "Mon, Wed, Fri • 10:00 AM",
            studentCount: 24,
            status: "Active",
            icon: "calculate",
            iconBg: "indigo"
        },
        {
            id: 2,
            title: "Literature & Comp",
            schedule: "Tue, Thu • 1:00 PM",
            studentCount: 30,
            status: "Active",
            icon: "menu_book",
            iconBg: "orange"
        },
        {
            id: 3,
            title: "Physics II",
            schedule: "Mon, Wed • 2:30 PM",
            studentCount: 18,
            status: "Active",
            icon: "science",
            iconBg: "blue"
        },
        {
            id: 4,
            title: "Intro to Art History",
            schedule: "Fri • 9:00 AM",
            studentCount: 42,
            status: "Active",
            icon: "palette",
            iconBg: "pink"
        },
        {
            id: 5,
            title: "Biology Lab A",
            schedule: "Last updated: 3 months ago",
            studentCount: 20,
            status: "Archived",
            icon: "biotech",
            iconBg: "emerald",
            opacity: true
        },
        {
            id: 6,
            title: "Computer Science",
            schedule: "Tue, Thu • 11:00 AM",
            studentCount: 28,
            status: "Active",
            icon: "terminal",
            iconBg: "purple"
        }
    ],
    navLinks: [
        { label: "Dashboard", href: "#", active: false },
        { label: "Classes", href: "#", active: true },
        { label: "Students", href: "#", active: false },
        { label: "Settings", href: "#", active: false }
    ]
};

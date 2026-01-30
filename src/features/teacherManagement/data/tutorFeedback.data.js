// Data for Tutor Feedback Grading Page

export const tutorFeedbackData = {
    // LearnMate Portal Info
    portal: {
        name: "LearnMate",
        subtitle: "Teacher Portal",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8DaTegW3BKql5B3l0w2VHJ3HHIUWYC1pHTOwONNHszcowcyhJnp6Wz4l4aBVQnoXA9BsUlwY1ecKtjDi3RcLsCiq5ke9oDTC27yITJxSaEqmln74kDQqZ1Gm2SiwA-XysfyDJqxbc20_Kpi1jZ0hf8sFkrUZ5vLgOeQVCHwOhJuHPIlqM7F2MnnHVkZzkGnYI8a39cG4yEwNQwyUjRVpQrOD5BW--cuBV4hAojFRh42omZybWGbyRBg4q_RxtVfYVJhyd0CMZtnk"
    },

    // Global Navigation
    globalNavigation: [
        { icon: "dashboard", label: "Dashboard", href: "#", active: false },
        { icon: "book_2", label: "Courses", href: "#", active: true, filled: true },
        { icon: "calendar_today", label: "Calendar", href: "#", active: false },
        { icon: "chat_bubble", label: "Messages", href: "#", active: false },
        { icon: "settings", label: "Settings", href: "#", active: false }
    ],

    // Current User
    currentUser: {
        name: "Alex Morgan",
        role: "Teacher",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL8MflF737F84UZ-k-7XfPUW7al2whquOAt19N8EydiappbsjzZ_1_5-_NtYduqps6NERuYTIVZvbyxVJYtGlMhqswJBicYdEpQvi-LJ2xvzP70bFvAvUK4RLtsuLGdBf_ehZUkQ-6xsKDI2yW7iPBx9PQaqGE8tewOqLJoVBdHdsUX0e-4LMjJ17Ij0OjNcYnudfZGq9L_NXZOJcW1qJupP1CJgWsDY_oc35CMIpZ2Df3GocTchwZYjhYCC84-aQmzEvUEGdciZk"
    },

    // Breadcrumbs
    breadcrumbs: [
        { label: "History 101", href: "#", active: false },
        { label: "Midterm Essay", href: "#", active: false },
        { label: "Jane Doe", href: "#", active: true }
    ],

    // Navigation Controls
    navigationControls: {
        currentIndex: 4,
        totalCount: 28
    },

    // Filter Chips
    filterChips: [
        { label: "All", active: false },
        { label: "Turned In", active: true },
        { label: "Missing", active: false }
    ],

    // Student Submissions
    students: [
        {
            id: 1,
            name: "Jane Doe",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSOkPRn2MI5Lqi16JrQ7lPrFXglyeqp1NISUDwIyWZg4jt4TC8TlhZIx2_--r67dnvTuwPpKzBB7ySPyxJkvc_uNtsCBGg_o1340l9CXJkipvqV_lNXFEOVyscZQYm_HOLpWKUZgqXLoeEelrXkGxPLL4RRdfQRNWNmygs3-QG6SgFoU6-3tLS7eW0rMAWV_6TDXptbAarsuTWsohWyaqtP_xDDEA7xr988upAXZ4aI6nZN1cfUJlqel-aeo40dP9I528LnhHqbqE",
            status: "Turned In",
            statusColor: "emerald",
            submissionDate: "Oct 12, 10:45 AM",
            active: true,
            hasIndicator: true
        },
        {
            id: 2,
            name: "John Smith",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7dC_mOpEeZoEsZTP_yttsthrW5xMEisQPYEfAIl8f3GDMHa8a-9at-Np5BEUhDCxNXUvJ8lesK8KFJDjXfeJcqi1mayF4ft4zqy7mmZ5327cKJgGaG2G_R3bdrL2z7e9W4Wz2DGkUUwA04KB2W23pv9y-vL7ZsccnqcQcCTKvCS035xkMFUIL6Lr9jeqPt4lJYO5CdXTF7SbJUq6nedo9LyTdSjvM2psoPTVlPb_Q9CTbINyp2uE87SVxwtExrxKV2YAJjvh6dAk",
            status: "Missing",
            statusColor: "rose",
            submissionDate: "Due: Oct 11, 11:59 PM",
            active: false,
            hasIndicator: false
        },
        {
            id: 3,
            name: "Alice Johnson",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE86-desvqapAWra02tG24QTcTMsETZYWCf6LSwMuSum8FMsx6somY5EqqFsCM_dCCoL5HTEw_9igTJjqxQ7lCZotvh-uVY5LtxSRg_u4MevCy034pLJzo5H3G6dMjeOQjdgs4r6IHChtDEfckyWgnYfEDFsbCF0Nt5ExkyAMqu5kM0cuJWmG8YlqHK2LuiK-q406aQ0mCnqi30TFJS81vuXXJiiSx4sRnsCa32cpVvGGtu9M4YOS6k8xUokiD6tPhbpeejzMixts",
            status: "Graded",
            statusColor: "slate",
            submissionDate: "Score: 88/100",
            active: false,
            hasIndicator: false,
            grayscale: true
        },
        {
            id: 4,
            name: "Michael Park",
            initials: "MP",
            avatar: null,
            status: "Turned In",
            statusColor: "emerald",
            submissionDate: "Submission: Oct 13, 9:00 AM",
            active: false,
            hasIndicator: false
        }
    ],

    // Current Document
    currentDocument: {
        filename: "History_Essay_Final.pdf",
        fileSize: "2.4 MB",
        fileType: "pdf",
        icon: "description",
        zoom: 100,
        content: {
            title: "The Industrial Revolution",
            subtitle: "Impact on Modern Society",
            author: "Jane Doe",
            course: "History 101",
            date: "October 12, 2023",
            paragraphs: [
                "The Industrial Revolution, a period of major industrialization that took place during the late 1700s and early 1800s, began in Great Britain and quickly spread throughout the world. This era saw the mechanization of agriculture and textile manufacturing and a revolution in power, including steam ships and railroads, that effected social, cultural and economic conditions.",
                "While the Industrial Revolution brought about an increased volume and variety of manufactured goods and an improved standard of living for some, it also resulted in often grim employment and living conditions for the poor and working classes. However, life for the average person was difficult, as incomes were meager, and malnourishment and disease were common."
            ],
            sections: [
                {
                    heading: "Technological Advancements",
                    figure: "[Figure 1: Steam Engine Mechanics]",
                    content: [
                        "The textile industry, in particular, was transformed by industrialization. Before mechanization and factories, textiles were made mainly in people's homes (giving rise to the term cottage industry), with merchants often providing the raw materials and basic equipment, and then picking up the finished product.",
                        "Workers set their own schedules under this system, which proved difficult for merchants to regulate and resulted in numerous inefficiencies. In the 1700s, a series of innovations led to ever-increasing productivity, while requiring less human energy."
                    ]
                }
            ]
        }
    },

    // Grading Data
    grading: {
        score: 92,
        maxScore: 100,
        passingThreshold: 70,
        feedback: {
            paragraphs: [
                "Great work on the introduction, Jane. You successfully captured the reader's attention and established the context for the Industrial Revolution clearly.",
                "However, please review the citation format in the second paragraph. Make sure to adhere to the Chicago Style as requested in the rubric."
            ],
            placeholder: "Type '/' for commands..."
        },
        privateNote: {
            title: "Private Note",
            description: "This feedback is visible only to other teachers and admins.",
            enabled: false
        },
        formattingTools: [
            { icon: "format_bold", label: "Bold" },
            { icon: "format_italic", label: "Italic" },
            { icon: "format_list_bulleted", label: "Bullet List" },
            { icon: "auto_awesome", label: "AI Assist", special: true }
        ]
    },

    // Action Buttons
    actions: {
        returnToStudent: "Return to Student",
        saveDraft: "Save Draft",
        saveGrade: "Save Grade"
    }
};

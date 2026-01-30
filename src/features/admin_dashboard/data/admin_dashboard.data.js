export const adminDashboardData = {
    user: {
        name: "Alex Morgan",
        role: "Head Admin",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1UIF528dAoYeM7DuqXzZ8FbU16JgcHlyjA5CxtyqytScs-pRivGha4GSylDI-n50m3OivBf5elVn__QV_kf63xEusdjI9Cwoc4TlBHruFQQ2yFHaCYLCRMRkamkIvWHJOJ6-jn8Z9T8PFrezWhNcI-_9W2J6P7Fr7gLc3ZRDgWc8GQ1dWXm21McklTsbsQ-XnIvqbeA4WdczsoxWdUUGw8JM9rGUsvSm9PKSqPRa4KO57eazv9Qj__dfvBqRPVSsfTVBZk-T8Omz_"
    },
    navigation: [
        { icon: "dashboard", label: "Dashboard", href: "/admin", active: true },
        { icon: "assignment_ind", label: "Teacher Approval", href: "/admin/approve" },
        { icon: "group", label: "User Management", href: "/admin/users" },
        { icon: "report_problem", label: "Class Violations", href: "/admin/violations", badge: 14 },
        { icon: "history_edu", label: "Audit Logs", href: "/admin/logs" },
        { icon: "analytics", label: "Reports & Analytics", href: "/admin/reports" },
        { icon: "settings", label: "Settings", href: "/admin/settings" }
    ],
    metrics: [
        {
            label: "Total Users",
            value: "12,450",
            trend: "+5.2%",
            trendUp: true,
            icon: "groups",
            color: "blue"
        },
        {
            label: "Active Users",
            value: "8,902",
            trend: "+2.1%",
            trendUp: true,
            icon: "person_check",
            color: "green"
        },
        {
            label: "Blocked Users",
            value: "42",
            trend: "-1.5%",
            trendUp: false,
            icon: "block",
            color: "red"
        },
        {
            label: "Total Classes",
            value: "1,205",
            trend: "+0.8%",
            trendUp: true,
            icon: "class",
            color: "indigo"
        },
        {
            label: "Violating Classes",
            value: "14",
            trend: "+12%",
            trendUp: true,
            icon: "warning",
            color: "orange",
            isAlert: true
        }
    ],
    auditLogs: [
        {
            date: "Oct 24, 2023",
            time: "14:22:01.342",
            actor: "Alex Rivera",
            actorEmail: "alex@learnmate.com",
            actorInitials: "AR",
            action: "User Login",
            status: "success",
            targetId: "USER-102-SEC",
            ipAddress: "192.168.1.45"
        },
        {
            date: "Oct 24, 2023",
            time: "13:45:12.110",
            actor: "Sarah Jenkins",
            actorEmail: "sarah.j@learnmate.com",
            actorInitials: "SJ",
            action: "Class Deleted",
            status: "warning",
            targetId: "CLS-902-ARCH",
            ipAddress: "203.0.113.19"
        },
        {
            date: "Oct 24, 2023",
            time: "12:30:05.901",
            actor: "System Engine",
            actorEmail: "internal_bot",
            actorInitials: "SY",
            action: "Permissions Updated",
            status: "info",
            targetId: "ROLE-42-AUTH",
            ipAddress: "192.168.1.45"
        }
    ],
    userStats: [
        { label: "Total Teachers", value: "84", icon: "school", color: "blue" },
        { label: "Active Students", value: "1,120", icon: "group", color: "emerald" },
        { label: "Pending Approvals", value: "12", icon: "pending_actions", color: "orange" }
    ],
    users: [
        {
            id: "#LM-4920",
            name: "Dr. Sarah Smith",
            email: "sarah.smith@learnmate.edu",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoY8edjjIjd7jVADp9dkkobdOhB9NWPTIFzR7Uew1vRbXsEmZbPe-e0Rp36UI0o_GGEbaJu_DA67xIHS5aUHH8W4CKZNGQEZ1Yoq-E66_UPL0rurzDKVRWCd2Y_A79OmWC0UmeKPDKfRdKNlxlLLsb5pys5xBR_f-Npzg6lbO66fbNuyVokIRFaQ8gwEottE749ieCDdDqLX23BUtYmQVd28_LHFyIbGNiSMWN6nWWdWwY6MHZH8iw6OceH_JK6lwZ4wgWkWcYo6Vl",
            role: "Teacher",
            status: "Active",
            statusType: "success",
            date: "Oct 12, 2023"
        },
        {
            id: "#LM-5104",
            name: "John Doe",
            email: "john.doe@student.edu",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW0YNojzaNq5_4ee-asyM99DoyLWT4u6HVmsk2eTUkar-pXmCg6MQM5r13L-auKn1OzJEJTs3RZqh4vHbC1tZ51yBMQJozuU1qV-V8SPUGMEdJg9KWMdAOwN3aehocDt5Lr3MbSwFy08YWtkgzKnsEiNmej3suxgIn6StHDOaPBaSw0V4GNfV-TSVSolA05Cvw97AtGDG2DerH1ulhReZhuMgmtY0riQ_Q5HCsWDREzgS3aKPr2tJi0hl2U9GeTa-KtplVhjo1tAGE",
            role: "Student",
            status: "Active",
            statusType: "success",
            date: "Nov 04, 2023"
        },
        {
            id: "#LM-3829",
            name: "Emily Rivera",
            email: "emily.rivera@admin.edu",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwurqw07qbNuv-4mZwVgzKzXYTwuwhGgeKSm8O_B8usWx7IqNSQ6r9n9e78yNS-Q8fdRRaWGUvaPxw2BsDOycnREGXsaz07znrsrcIgrhhMZ2XcHYEB9DhXVkEfyQASbVYpwevIdGXz491gKto5sS4HyJF3FwGod5mBu2JcHagS9NBS7B4y31YkxptbUAgK2CNys44OIEOQaJ6FHMTwUr_1uo55p0oEE-youI0IxbWl7X4_UcRZbZ0dKxSTpDWTtdM6ED2WcWeOcy-",
            role: "Admin",
            status: "Blocked",
            statusType: "warning",
            date: "Aug 21, 2023"
        }
    ],
    violationStats: [
        { label: "Total Pending", value: "24", icon: "pending_actions", color: "orange", trend: "+12%", trendUp: true },
        { label: "Resolved Today", value: "12", icon: "verified", color: "blue", trend: "-5%", trendUp: false },
        { label: "High-Risk Classes", value: "5", icon: "dangerous", color: "red", trend: "+2%", trendUp: true },
        { label: "Suspension Rate", value: "3.2%", icon: "block", color: "slate", trend: "-1%", trendUp: false }
    ],
    violations: [
        {
            id: "#CLS-8291",
            className: "Advanced Calculus III",
            instructor: "Dr. Jonathan Smith",
            instructorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvAWlf9aqMIfj5BhPcLsQdqkJvF9l1TJvdLnCQ6IqOJw8bkdOyJRCvKDyiTXayRis9Q55-SEFA2ZM8hBWNg86QZafP8omVOvbkf5SU_dxo8svjATX9v2W9GysFqPCpo2fm_elZOnwspo3ydc_8ZNW0j7Cg_sv2UWt91s6LskxDl_8PziqfT3B89RZbnAzJ0Bmgf2MbzQEO7qj74Cy7r3hohI8trFDfZMFgHV0nWD4bjjzgf87LXmpinixeGyX4ytO-vB34-SJK5jZs",
            type: "Copyright",
            date: "Oct 24, 2023",
            status: "Pending",
            statusType: "pending"
        },
        {
            id: "#CLS-1022",
            className: "Intro to Photography",
            instructor: "Jane Doe",
            instructorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGjMuW4rR0pFPwNdB-XN1n7dbWgxV_buyZLwr-Uia7zbAXQ-VI4FxPyeHVGIbEeLHHLz0TQ8lL4rQgW0_K9OLK7F9GLg_RdkoHyeYt9KoJtgxmRzGajItR3kujTOLIfpp5veHA-yDfZALmGd3u7hhRpl-Uam0Oh2eRHE0ftHHQ9tmyLaYKaewibqUpY_A1N8vWhOKrRvO7F6h3gaIE3Mb26jx1feOJwI48FkPCywt-0__GpoP--VnKyrIMQSj5fHi8bKVHGyRI7wG9",
            type: "Inappropriate",
            date: "Oct 23, 2023",
            status: "Suspended",
            statusType: "suspended"
        },
        {
            id: "#CLS-4451",
            className: "History of Cinema",
            instructor: "Michael Chen",
            instructorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCj1k3I0I994eGjW8167YzuuF1H7UotorisNuGaSDC8ZNFaTrawrVdBbH8QuTPPm2JYnb5aPRVARnYHQrVLzE0eD9PqfuTwRuaIhVvVvNiwj3fkWbU5sRULlFMuoSjjFVnhN81B1aIpBrlTL5a0Tm_Zzecn89-yohOLfkibeZQb52wb6SmgCMUv2AMiYIQ2WaSAM1InMXp-YA9yRjNGRBdEZbzMnToRgKXmJLgYgnIRGhcPAayRXYXmGgTWFvIHCSvHJAosh6Aa4r1",
            type: "Copyright",
            date: "Oct 22, 2023",
            status: "Resolved",
            statusType: "resolved"
        }
    ],
    reportMetrics: [
        { label: "Conversion Rate", value: "68.2%", trend: "+12.4%", color: "blue", progress: 68.2, icon: "trending_up" },
        { label: "Avg. Study Time", value: "4.2h", trend: "+5.2%", color: "orange", progress: 45, icon: "timer" },
        { label: "New Enrollments", value: "1,284", trend: "-2.1%", color: "purple", progress: 78, icon: "person_add" },
        { label: "Monthly Revenue", value: "$42,950", trend: "+18.7%", color: "emerald", progress: 92, icon: "payments" }
    ],
    engagementData: [
        { label: "Oct 01", value: 40 },
        { label: "Oct 05", value: 55 },
        { label: "Oct 10", value: 35 },
        { label: "Oct 15", value: 70 },
        { label: "Oct 20", value: 90 },
        { label: "Oct 25", value: 45 },
        { label: "Oct 30", value: 60 }
    ],
    topCourses: [
        { title: "Advanced JavaScript", enrolled: "4,203", rating: "4.9", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAChV5YF1nxD3MqnM1F6KGAULHqFOcxsqk7LfNleC7CqHxkSmD72ZTYCJgzb9rBMZKBGDnoYnzfrQMzSfgnd6O13FoTzagmTjcWtIuqxWbzWz3j2bHcJRuyQdh1i9oHzlGKh08-kOKqh9bZ9tF-AlxsKvwNyyd4r9_X40LMjZCOTNpkU0maPgGwxPV4Hin2vNUTjRbl-3PNkerPT8RVz2R3b4v21FYyquBvsxgg_5UecyBBOg6-mIb358IIAsD8O6umfs7ihmGC5Jvj" },
        { title: "Data Science Foundations", enrolled: "3,110", rating: "4.8", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBW7JqwyDoJeZgpx3nItxuTKeaIFd7_wPBteNqTmsC0BCr7mbiFz-yQ2p7u6JrzH20B8lHxHHNH9auZkVtqT37rJ9z2QRUVBIsrcyjWvWM22P79fsoP9p148pjfRBHo05pznkmcWkplmDJ6gIJMUb3Hcn2K-4ZxJ6JIczxqr3332LJm9TImQGJi_7U2V67StHwWpMVwFX1cOyHGxC0eHFUfAfkiJzTFx2GJb1Mf59vljehtauAnfhyRFVMKlNz6XgzHrFDKWwSbKHb2" },
        { title: "UI/UX Design Masterclass", enrolled: "2,845", rating: "4.7", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxdg_sBNHqdWyVZxlYiYO1gw39i_NEfy46ugDfOUhYU6vKC_mA56JgMw7fiz8gN9qjyI8Vm_Edzgi4dabfjTdFpk0MH96oO1cAPGK4qkM3jjer_Yl6afvFpOQYGAXwPJ4Kkfk8OYOt202NYaxv-FO2vp-2ejXbNwA1dXoeUVdj9Oyb4xvlsRcRp-VAG7x-Wkr1xqX7rJJn199Q_fHshDR6MPgX5tq8MW49oQePQc6PqA7dmMAPu_DN0HvEWl5Pm0jwShZ04nssEIKD" }
    ],
    userProgress: [
        { name: "Alex Johnson", email: "alex.j@example.com", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCca6A2v3pBFsfh6pDSH8QwMRISKSIf2UZS5yuw63Ke1l0W3iht10cLQXMa7UNAmV94QhxHvQ5PsYyAZlVZi-ywaHIBjvU7d-90XKfAuGpWM92h3D1s1XYNkq5aup3BhhhvYzA-T9XvqAVwgxn5_TP-X3ZsF0Is1fbo1BDXMmjJA7d66RqGfyN9apIpKtEfl-SE1SQ_J5IsQNKYDFQc1PxA6ExDmGK6kAXr8S5zOhCCDlV1H1RTjbl6DHjllVg3HzQP8zpWnL3ohveR", course: "Advanced React Patterns", progress: 85, score: 92, status: "Active" },
        { name: "Marcus Wu", email: "m.wu@design.io", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnwNBCpN8dCJesDUOckBf8pQv-yJamXTDKbgZS9thK3QkgdE_wgrZPeMRZAryLGScAAiVpXKNJyAEm1KeLXw9MC8Yo939MkilkV79CLid4bbJD-hT1dUEZG5hNJXAy8yHnZV_Fjg2pgqmhxQY9HllKNLxU8HpHi5F83KEhx8Hqiexp4KtdSAOroZR90yFBUPMVwgvK_tFpE_Q7O3YG-SPIrZeLxKONiesM1Ht2yC3FcYVWJZMv2uu2XeWT90WkB1zc0pe2YU_p73VB", course: "UI/UX Masterclass", progress: 100, score: 98, status: "Completed" }
    ],
    adminProfile: {
        name: "Alex Morgan",
        email: "alex.morgan@learnmate.edu",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1UIF528dAoYeM7DuqXzZ8FbU16JgcHlyjA5CxtyqytScs-pRivGha4GSylDI-n50m3OivBf5elVn__QV_kf63xEusdjI9Cwoc4TlBHruFQQ2yFHaCYLCRMRkamkIvWHJOJ6-jn8Z9T8PFrezWhNcI-_9W2J6P7Fr7gLc3ZRDgWc8GQ1dWXm21McklTsbsQ-XnIvqbeA4WdczsoxWdUUGw8JM9rGUsvSm9PKSqPRa4KO57eazv9Qj__dfvBqRPVSsfTVBZk-T8Omz_",
        lastPasswordChange: "3 months ago"
    },
    systemConfig: {
        appName: "LearnMate LMS",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCflGRoKmv2pYSUWV44SPC8aS4UCx5X4gDKeBduHuFirjnemf4v6QLuF92gC0S3dc1ewvikR9gnafxvXzUopteWqY8BG5kOJrMziti42ZN0IIJ9fyxxTYoHIqWbe7GuKsTopbqtRn7DpUOKViPvM2aTdUtp40Nl-LK6f_jClriZWW8HDAjUGdGnJcRt-UoLszNUHMO2Vn2-5nUlm34i0asiP2wpCz2qDsyr_VP-n3GjplDyCOsF5faUkP_qKGXxdDnLBeaeLZ-1ahmo",
        maintenanceMode: false,
        defaultLanguage: "English (US)",
        smtp: {
            host: "smtp.mailgun.org",
            port: "587",
            security: "TLS"
        },
        lastSync: "2 hours ago"
    },
    teacherCVs: [
        {
            id: "#CV-9021",
            name: "Robert Fox",
            email: "robert.fox@example.com",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCj1k3I0I994eGjW8167YzuuF1H7UotorisNuGaSDC8ZNFaTrawrVdBbH8QuTPPm2JYnb5aPRVARnYHQrVLzE0eD9PqfuTwRuaIhVvVvNiwj3fkWbU5sRULlFMuoSjjFVnhN81B1aIpBrlTL5a0Tm_Zzecn89-yohOLfkibeZQb52wb6SmgCMUv2AMiYIQ2WaSAM1InMXp-YA9yRjNGRBdEZbzMnToRgKXmJLgYgnIRGhcPAayRXYXmGgTWFvIHCSvHJAosh6Aa4r1",
            subject: "Computer Science",
            experience: "5 years",
            appliedDate: "Oct 24, 2023",
            status: "Pending",
            statusType: "pending",
            credentials: ["Master of Science in CS", "AWS Certified Solutions Architect", "Previous lecturer at Tech University"]
        },
        {
            id: "#CV-8822",
            name: "Jenny Wilson",
            email: "jenny.w@design.net",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGjMuW4rR0pFPwNdB-XN1n7dbWgxV_buyZLwr-Uia7zbAXQ-VI4FxPyeHVGIbEeLHHLz0TQ8lL4rQgW0_K9OLK7F9GLg_RdkoHyeYt9KoJtgxmRzGajItR3kujTOLIfpp5veHA-yDfZALmGd3u7hhRpl-Uam0Oh2eRHE0ftHHQ9tmyLaYKaewibqUpY_A1N8vWhOKrRvO7F6h3gaIE3Mb26jx1feOJwI48FkPCywt-0__GpoP--VnKyrIMQSj5fHi8bKVHGyRI7wG9",
            subject: "UI/UX Design",
            experience: "8 years",
            appliedDate: "Oct 22, 2023",
            status: "Approved",
            statusType: "approved",
            credentials: ["Bachelor of Fine Arts", "Senior UI/UX at Creative Agency", "Portfolio: behance.net/jennyw"]
        },
        {
            id: "#CV-7714",
            name: "Cody Fisher",
            email: "cody.f@math.edu",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvAWlf9aqMIfj5BhPcLsQdqkJvF9l1TJvdLnCQ6IqOJw8bkdOyJRCvKDyiTXayRis9Q55-SEFA2ZM8hBWNg86QZafP8omVOvbkf5SU_dxo8svjATX9v2W9GysFqPCpo2fm_elZOnwspo3ydc_8ZNW0j7Cg_sv2UWt91s6LskxDl_8PziqfT3B89RZbnAzJ0Bmgf2MbzQEO7qj74Cy7r3hohI8trFDfZMFgHV0nWD4bjjzgf87LXmpinixeGyX4ytO-vB34-SJK5jZs",
            subject: "Mathematics",
            experience: "3 years",
            appliedDate: "Oct 21, 2023",
            status: "Rejected",
            statusType: "rejected",
            credentials: ["PhD in Pure Mathematics", "Reason for rejection: Incomplete background check", "Re-applied after 6 months"]
        }
    ]
};

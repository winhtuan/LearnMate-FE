export const tutorDashboardData = {
    user: {
        name: "Sarah Wilson",
        greeting: "Good Morning, Sarah",
        subtitle: "Here is your daily overview and schedule.",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2QNH3jmyECG7WGDO4R6F52rYMTNk18plkgpaK-zZ0MaELI9dctvO1zt4BGnUJjVTu5xjUPaUAn0EotGA6mKHnGHQc_XFqC1dN2qA_aMiSTLEyqcIqYX3U28adANkaDmQoaW2FuhT-kK_77_poBggvTUpGBebdtK9GcUa_lkAmwJD7kvi_LcOOKcR2d7No9Q202LmdPKCkqXg3OCHPDc1tRyr00p8ytl7WcHCbk39JNx1QQLXNyHhxsmhCsUB4AOUtRQnw5Txfy1U"
    },
    metrics: [
        {
            id: 1,
            label: "Total Classes",
            value: "12",
            icon: "class",
            change: "+2",
            changeLabel: "this week",
            changeType: "positive"
        },
        {
            id: 2,
            label: "Active Students",
            value: "45",
            icon: "groups",
            change: "+5%",
            changeLabel: "vs last month",
            changeType: "positive"
        },
        {
            id: 3,
            label: "Hours Taught",
            value: "120h",
            icon: "schedule",
            change: null,
            changeLabel: "Target: 140h",
            changeType: "neutral"
        },
        {
            id: 4,
            label: "Pending Requests",
            value: "3",
            icon: "person_add",
            badge: "Action needed",
            badgeType: "warning",
            change: null,
            changeLabel: "Trial class requests",
            changeType: "neutral"
        }
    ],
    activeClass: {
        title: "Advanced Mathematics",
        time: "09:00 AM - 10:00 AM",
        description: "Chapter 4: Calculus",
        status: "Live Now",
        studentCount: 12,
        studentAvatars: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCfvmM5vfPLsRBoBFaed_OW9Vs0S2rwdyXftsG3ikSzx9eF6dKMz85yQyshtCwnVW2PumAteDPRis3YV2VlcOgJcLN5NKHAdbLAW93A1OaJzozMEq4V9UWc7KRvjY7_uoD1pfwSmjvePIZ0RaAx-jX-xZHTexvqZ8yz2LUGS5svH9hXGiEQ43hPy9NTae-M-8G6gLPzpShLN78kHv5vMdkliYxugFG1M3D7sWMfrO2sAEPM3clL-qw8KynHRIUPzdZD3PrvfSzXbjg",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAIybAdfp3irGsEQzpjpOo41x1btOP1f3PUcTfzkJTA3En9WqWk2Ys3Ao70zr1KSPRsdgUlgbQu-HteBfNHPdYTRtn1OWAJQFrgQROUC7KUznKYVXW4Z2xfcEK3KJPMbGP7u3cchRdnIwraOElxiwxD_9xnu2dt_qcbvE_s1k0jftgCv55mDPerQzFbzO4ahuo_bV8jSb-Z7fLbiwcYH20FxXptrWVWYRP4vCjyEsVhQR-5gcmNPImY6jYabPQu77ORa8_cetszSL4",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCT0lhWWUTphYBb0BRHfJ9fTXI1nHNaTCBQMJI7Uit_doYXAvQMwUZ0nSLG6JBMntyDkbzD8PhO5abfN7Y6USyU9fguX0iOEXganbFOoPEJWNcXRZMNe_bi5Nws9u9VlxjxUg2BM7wxiDEqWvw7m7O_egGPEfoCjcBYPDXjWRojZKCweDehBzNzRWXQ3P31NseTv3qU3tnoNZF36YmjlUW83rHVuYylvESLYssj1XUpCMoUTkwn2aQdEBn7QrY-vPShuLIY_PkCjiY"
        ],
        thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZJ4w-amJ0LH885zpI4kfHJ0NHxpnMXtnDLUqFZKKA7p0kBKUcbRkES_T-850yW9SKI_inXYjuGifDLUkL0eu7lK5bFAc-ZUZxmcMle4EpnsSH0LhsXvjyr_y_tuGmXt4vCWp7h7UXy1sh4-ZJQB0Yw2TxcrwUbNdCYQe_jFckFS-Hi5McQ9H6Sb4BoDBL7ZUgCGRw226Y_zdgiIiWz-rsBPoi8tlzcrPNg1MLljDxmql-C0eofBwZYPhmBtOplk9zNG7P9dN1pns"
    },
    upcomingClasses: [
        {
            id: 1,
            time: "11:00",
            period: "AM",
            title: "Physics 101: Mechanics",
            location: "Lecture Hall A",
            studentCount: 45
        },
        {
            id: 2,
            time: "02:00",
            period: "PM",
            title: "Geometry Consultation",
            type: "1-on-1",
            studentName: "Alex M."
        },
        {
            id: 3,
            time: "04:30",
            period: "PM",
            title: "Staff Meeting",
            type: "Weekly Sync",
            location: "Online"
        }
    ],
    quickActions: [
        { id: 1, label: "Create Class", icon: "add_circle", color: "blue" },
        { id: 2, label: "Post Assignment", icon: "assignment", color: "purple" },
        { id: 3, label: "Add Student", icon: "person_add", color: "orange" },
        { id: 4, label: "View Reports", icon: "bar_chart", color: "teal" }
    ],
    activities: [
        {
            id: 1,
            type: "submission",
            studentName: "Sarah J.",
            action: "submitted",
            item: "Algebra Homework",
            time: "10 minutes ago",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiXDTeesllcqIzQ7XhrpAkHVCKKH9CsmOz91HpXQYJ_C6WACJvh9Bh9DNql6_qVMiBUYAD19Qs0AbVxWU7onHcpm_f20rEbuhhwn5h82sGVhEl780OBkuTeG1UFP4ahOIqO5-witVCT5-WiBRxbHR8VUKjQqTHs1dmBvJXGECrt4oAF8CCk9FKPd6C51Yq3lSR0kfu5mYf9iX0Kt_rgfRXbb9Rh9hhYfBBzYDbIIVUtSi7AVcw-NBLiw3tz1qBeT_GS0AtINiM-ew"
        },
        {
            id: 2,
            type: "message",
            from: "Mr. Robinson",
            description: "(Parent)",
            time: "45 minutes ago",
            icon: "mail",
            iconBg: "blue"
        },
        {
            id: 3,
            type: "review",
            description: "New review: 5 Stars for Physics 101",
            time: "2 hours ago", icon: "star",
            iconBg: "yellow"
        },
        {
            id: 4,
            type: "request",
            studentName: "Mike T.",
            action: "requested a trial class",
            time: "3 hours ago",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCipG4JqDbw6QawBp4ggFbr2TWE6kwmDv3s4SUdVEL4Vr_hmpDBTC-8ZKTZEE427BSx8du-gqtm8Ha9t5DdCO44zbKVqs9oBwPLVkFRsOgUY2FONHjdXZfa1wV-HXcYQoxa0VytV2pxgyNQKUB1GDovcobFq0phrQ6f_vKInbWrORv3puHP_Np39ZtxFgFo86M2EKW3tlFTdMGKH0S4mUWMusOPAfNYtyo3YlHXuI97hQl7HnZiKN30qjz9gYVoymavqhzTVPfl-N0",
            hasActions: true
        }
    ]
};

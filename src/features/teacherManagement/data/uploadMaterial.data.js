// Data for Upload Material Page

export const uploadMaterialData = {
    // Navigation
    navigation: [
        { label: "Dashboard", href: "#", active: false },
        { label: "Resources", href: "#", active: false },
        { label: "Classes", href: "#", active: false },
    ],

    // User info
    user: {
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmJ4dUvLCf_lcm27JeQMNwWFBnM1dfGtFKtAEAV6gKK-rZZ1KeNTWWkTOvrh5XlqBiGTa_tObPI3shyXfDoTqnw1LAosEnanOFkTs9KYTDGr1pKNMHhHgZGvl7wGWxDg9MAYzaA68CXrQyc2L_NCo3O3puv2rMLOxPg_qZdUwF8NwStQz93KpBpyIfT9a0ZN7WXuLDwEkesKzYkZkDyGxpSGGzDuodfRbKe2C2kye4lW6aLyiY5zOAiSzDRf5ViRhA4XPSxO6NKMM"
    },

    // Breadcrumbs
    breadcrumbs: [
        { label: "Dashboard", href: "#", active: false },
        { label: "Upload Materials", href: "#", active: true }
    ],

    // Page heading
    pageTitle: "Material Upload Center",
    pageDescription: "UC-31: Prepare and publish educational content for your students.",

    // Upload zone info
    uploadZone: {
        title: "Click to browse or drag and drop files here",
        description: "Supports PDF, DOCX, JPG, and MP4 (Max 100MB per file)",
        buttonText: "Select Files"
    },

    // Pending uploads
    pendingUploads: [
        {
            id: 1,
            filename: "Lecture_Notes_Calculus_II.pdf",
            size: "2.4 MB",
            status: "80% uploaded",
            progress: 80,
            icon: "picture_as_pdf",
            iconBg: "bg-red-100",
            iconText: "text-red-600",
            category: "Reading Material",
            isComplete: false
        },
        {
            id: 2,
            filename: "Homework_Template_W1.docx",
            size: "1.1 MB",
            status: "Completed",
            progress: 100,
            icon: "description",
            iconBg: "bg-blue-100",
            iconText: "text-blue-600",
            category: "Assignment",
            isComplete: true
        },
        {
            id: 3,
            filename: "Introduction_to_Derivatives_Part1.mp4",
            size: "45.8 MB",
            status: "Processing...",
            progress: 45,
            icon: "movie",
            iconBg: "bg-purple-100",
            iconText: "text-purple-600",
            category: "Video Lecture",
            isComplete: false,
            isProcessing: true
        }
    ],

    // Material settings
    materialSettings: {
        targetClasses: [
            "Advanced Mathematics II",
            "Introduction to Calculus",
            "Statistics 101"
        ],
        defaultClass: "Advanced Mathematics II",

        categories: [
            "Reading Material",
            "Assignment",
            "Video Lecture"
        ],

        visibilityOptions: [
            {
                value: "published",
                label: "Published",
                description: "Visible to students immediately",
                checked: true
            },
            {
                value: "draft",
                label: "Draft",
                description: "Save for later without publishing",
                checked: false
            }
        ],

        notifyStudents: {
            label: "Notify Students",
            description: "Email & Push notification",
            defaultValue: true
        },

        helpText: "Ensure materials comply with intellectual property guidelines before publishing."
    },

    // Action bar
    actionBar: {
        statusMessage: "All files ready for publishing",
        statusIcon: "check_circle",
        statusIconColor: "text-green-500",
        cancelButtonText: "Cancel",
        publishButtonText: "Publish Materials",
        publishButtonIcon: "publish"
    }
};

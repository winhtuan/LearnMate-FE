export const tutorRegisterData = {
    steps: [
        { id: 1, label: "Basic Info", icon: "check_circle", status: "completed" },
        { id: 2, label: "Verification", icon: "verified_user", status: "active" },
        { id: 3, label: "Review", icon: "rate_review", status: "pending" }
    ],
    header: {
        title: "Complete Your Profile",
        subtitle: "Provide your professional credentials to unlock your teaching badge and start reaching students."
    },
    sections: {
        degree: {
            title: "Degree & Certification",
            subtitle: "Academic history and professional licenses",
            icon: "school"
        },
        expertise: {
            title: "Expertise",
            icon: "workspace_premium",
            experienceOptions: [
                { value: "", label: "Select range" },
                { value: "1-3", label: "1 - 3 Years" },
                { value: "4-7", label: "4 - 7 Years" },
                { value: "8-12", label: "8 - 12 Years" },
                { value: "13+", label: "13+ Years" }
            ]
        },
        identity: {
            title: "Identity",
            icon: "badge",
            description: "Government ID required to ensure platform safety and tutor authenticity."
        }
    },
    profilePreview: {
        name: "Mr. Anderson",
        role: "Mathematics Specialist",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwvOHPXYywUn8RgxMF5ajBWbA5Di5ebd1yS_Q9b04ZTk7PaEFj8xH03mYhuiRCBIytE-VKJE8qYu2agbAEm5CCPP0JcjnjQ18Gm7npAnA3lc97DGQjCSnUoWnA-GkICYFMxXHWuWSTHZC4g3wmGF7OhMMqqh3c6GDOu0GCQSGxF2Mgf5l4CeHCLfzPthoFmKDWBeluZzX-vWSDyuCHk4ou3-yvDDP0ILb5ho_CRQP1B34SR_CMCPH6YQ869RkfQTH9VYUXsqfy4YE",
        stats: [
            { icon: "history_edu", label: "Experience", value: "-- Years" },
            { icon: "id_card", label: "Identity", value: "In Progress", status: "pending" },
            { icon: "description", label: "Certificates", value: "0 Uploaded" }
        ],
        quote: "Expert mathematics educator dedicated to helping students achieve academic excellence through personalized tutoring."
    }
};

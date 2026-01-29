export const studentManageViewData = {
  header: {
    title: "Student Performance Overview",
    description: "Manage performance metrics and engagement across all active classes."
  },
  filters: {
    tabs: [
      { label: "All Students", active: true },
      { label: "At Risk", active: false },
      { label: "High Achievers", active: false }
    ],
    dropdowns: [
      { 
        label: "Class", 
        value: "All",
        options: ["All", "Advanced Calculus", "Basic Physics"] 
      },
      { 
        label: "Status", 
        value: "Active",
        options: ["Active", "Inactive"] 
      },
      { 
        label: "Time Range", 
        value: "Last 7 Days",
        options: ["Last 7 Days", "Last 30 Days"] 
      }
    ]
  },
  table: {
    columns: [
      { label: "Student Name", width: "30%" },
      { label: "Class Name", width: "20%" },
      { label: "Engagement Level", width: "25%" },
      { label: "Last Activity", width: "15%" },
      { label: "Actions", width: "10%", align: "right" }
    ],
    groups: [
      {
        className: "Advanced Calculus",
        studentCount: 2,
        students: [
          {
            id: "ST-2023-001",
            name: "Alice Freeman",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7jD6DimhzcyvhDBe44O3x1FEDCxf8y9kX9Er9O7ZYjz_MkUy10So933NE2wJ6jK4ugEg1EGpXarcKVBPJq3d0werXWl20kl5_539Y1qNKXR83bIZknSaqnGWPlyfmCAa6_8kiRi5DnM_KVsmvfemO5Ppp7eryISY-eh7XuDuNykv7TFM28n3QGyamXyjlI4rb_48ZIf_wstyhsO7Zbz2_bZxb0WSZ8oprTL8GmOJIaisOUzyVHEQtobHTuteaf-dBYPQvggWPjlQ",
            className: "Advanced Calculus",
            classColor: "blue",
            engagement: { label: "High", level: "high", color: "emerald", iconColor: "emerald" },
            lastActivity: "10m ago"
          },
          {
            id: "ST-2023-042",
            name: "Mark Twain",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo5S8nQvUUMVjCb5b0ngOOCiq0kGYhUYuDsi32AAzYVf1yYSOtrI7dRWwJYTnoLzZlrlR7MJ5E6Bbl607OojKTi5r921uRzBv4PHqApkoRaYhYex7i49JV83Cqa-nbHnbgXMVSR4H00HkCe6tP1WCgutkCHUJe6AFcCf3uRJioTRY1fujdqtYCM6Z8Ovp4FUXmB-GUrO5ipbuKUCK0anYIedJKRGLdwt_xxZEXLe0fqlCedJ69Phi2ozymNewJ283GYek4HPCGGbY",
            className: "Advanced Calculus",
            classColor: "blue",
            engagement: { label: "At Risk", level: "low", color: "rose", iconColor: "rose" },
            lastActivity: "2d ago"
          }
        ]
      },
      {
        className: "Basic Physics",
        studentCount: 3,
        students: [
          {
            id: "ST-2023-089",
            name: "Sarah Connor",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZzNmBqy0lVFyaxZk8wKKkQ99SNeCg03kdPytruxQL31WT3GDVroQxnbAfAoGKhjowWAirf6fqhGS-zjgkiiJ1XCy3o9f15O1KylPcoDSbNi_faFONkwrQTRZ7ePlquBXDgiNor9EzzP8dcQiwectoW5IIbEPrhdyX2YKxcdvJskie9pzjMtxEMnU4uRHIYqXi68qEN0hbyj3F9lNU941TW2c5G3mhPKUQncnevRB4N3vGUmJasL6ZcvUC02vgEGd70JnSKpXqYMM",
            className: "Basic Physics",
            classColor: "purple",
            engagement: { label: "High", level: "high", color: "emerald", iconColor: "emerald" },
            lastActivity: "5m ago"
          },
          {
            id: "ST-2023-112",
            name: "John Doe",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaiX9zvJ1BfSg1AM2K7gGI1QK_3V5xakLvpMK25tKZBcInpt1eY1HL_6w4t-Xnyxf6WmfDudJIsn9A8v6PZduYfRNpJDrgtHo2EWv3vFAuBsww1CvdRCSFM8qLfBHX0moOaMBmS4V3kzQXZiZqaXCuLzhp6aVXAfYTwLogNnZfhbKA-VCHlsQ5XqGr1d-OX0f2T-tgNyIsqJTSNa9mg2pn4AImmI8dLSV-Oo1nxhz1gY4GYRqAfpL8NKjsyrrI44B_HnZAzMLV4iI",
            className: "Basic Physics",
            classColor: "purple",
            engagement: { label: "Moderate", level: "medium", color: "indigo", iconColor: "indigo" },
            lastActivity: "1h ago"
          },
          {
            id: "ST-2023-019",
            name: "Emily Blunt",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMy5OG56SfAr7m2fen3gR-WVlzmDILwntetMPHcaDMF0rbgGi0d2GQ3mE2iozmt2IKtz-hYjFlAfQcBmoyWrPqDPNSDKnzeZhkHCbKea2aw5Bz3JlgavB-aKfASbPhQLFeOlrilUh-Vh9r63s3GgxC4PYz34TqG98LQwl4S6p_ptawBdvJQbI5mU_9kjaH5YAiIHs52AHjcMyrnTCXiawukMIjqdLnvjn18mTgckupdqjPuhP7hUFu6xFqTYtaWN8S1VBguYOjids",
            className: "Basic Physics",
            classColor: "purple",
            engagement: { label: "Low", level: "low", color: "amber", iconColor: "amber" },
            lastActivity: "3d ago"
          }
        ]
      }
    ],
    pagination: {
      from: 1,
      to: 5,
      total: 45
    }
  }
};

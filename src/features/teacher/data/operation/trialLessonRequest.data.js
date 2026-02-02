export const trialLessonRequestData = {
  header: {
    title: "Trial Lesson Requests",
    subtitle: "Manage and respond to your incoming student inquiries.",
    pendingCount: 3
  },
  filters: [
    { label: "Newest First", icon: "sort", active: false },
    { label: "Status: Pending", icon: "filter_list", active: true },
    { label: "Archive", icon: null, active: false }
  ],
  requests: [
    {
      id: "REQ-001",
      studentName: "Sarah Jenkins",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEMAGCI-P9PAIZKz5jl1R_i6ZxRFi5uqoU0EyVAHcv94F7gUkgc5Ga99BKbKR78cJJ9Wm3u2cirVk2rYwY_Uh30f5S4cktJSdZQbr6jLu3oxqOGGr1lK9QKzy0Amb6oPaAKU-wUBYxLU8ccIoL6_WX_sCG7wX2m-3-W6vB1QkKtxMao89irN0-Nm12ajH7VYBA9Fcs1_VbOuV_F-4xiKu6Fh4xBCTnEPNROaSDnCgLsoW0Di7j-hctb8eS0pdPY-8Jo-FCcYFfcuU",
      status: "Pending",
      isNew: true,
      details: {
        date: "Oct 24, 2023",
        time: "14:00 - 14:30 (30 min)",
        subject: "English Conversation • Beginner"
      }
    },
    {
      id: "REQ-002",
      studentName: "Michael Chen",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfA7hVyRyrlsPOQEeMHgevfZ2GXMThMetg29BSukAy8TD3fUGbgNSLTY32LrIXGcPB4UMO2z8BrHYR36YC5YKRF6fbfhgO5CmcTc_J0C13B75nJjDftZvMPKidDsLw7BP6EycUOKvrgFBiIH5IbLOzeWH3yZARhmHj0Yy3_Wz_xJcHrXmAlu30q2kUJXXPXp90n0CuvCtdRUNtKgyVw-UwvQEVxFgRocACxK45uh1YOLS1gljgb2e2xKRel1UVA6ZziMRcVFnCroY",
      status: "Pending",
      isNew: false,
      details: {
        date: "Oct 25, 2023",
        time: "10:00 - 11:00 (1 hour)",
        subject: "Business English • Advanced"
      }
    },
    {
      id: "REQ-003",
      studentName: "Emma Wilson",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG0I8piQiQzIKyOakYNotbgerby1NY0h_C8eiPhYHLhcSJ2hJVzG_64l_pYyXGvaAB6b7L71tslNMYHrg3K883w2Uu68-Y5DT9MoUb8wgiPUgQ2v-j6gQBcZknRuT3DBpt7YJU3gCzkM-qi2pUsVGR51SUgCk-LwAWf0scVh3xTz0mYFqd4iTEHC7h7oseSIE8GmIaoRruOmvOBvqGTMPi8Jj1QLc622VZYRqIxGMz2Mqi8WGwxfRLrUdsAVHPVb9dZkKZqprWd8k",
      status: "Pending",
      isNew: false,
      details: {
        date: "Oct 26, 2023",
        time: "16:00 - 16:30 (30 min)",
        subject: "IELTS Prep • Intermediate"
      },
      message: "\"Hi! I'd love to focus on speaking practice for my upcoming exam.\""
    }
  ]
};

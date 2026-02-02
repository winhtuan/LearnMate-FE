export const liveClassData = {
  header: {
    title: "Math 101 - Algebra",
    subtitle: "Advanced Calculus - Week 4",
    timer: "00:45:12"
  },
  teacher: {
    name: "Prof. Anderson",
    role: "Host",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0cxfKppFcm40B5-QnqWgne8qrDoQizcz7O9dehNfZGgiy2LkCVzUgaFUXu7eqU7kcFMpxcc-YznzmLvTChPtL7-X09R69QrqVct5YaDoJnaNmoN5u48Owd7LBLX8A1whmqPjX4s-L1Ly0FFS3l7NufX-QTsoI5jUQNkgzBiskVxfwfIqYDIcIrZmvvHyeA64wijT-B3kNfJ6lZOqugDg3M3maVs0keW8xwEIxdi958nrXfKRNV01ASImWDvG7LtDJjkIDYnsEhVk",
    screenShareImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1KN7RbVHRcME5dUtOQ6Os4S-B6pvZ8wipMHxmbN4s6jA1RYSd_ZFAQQrY8wxS7aqHhSoxOAq-xAQxv5POTm-vs2xwJNnW1JdX-EO6vnT7ebahaYPzEKZeGTtZrKCo5z3jk_v6xLkLZrcsuiZoGq2yAujeQ-O_VbI82TLdbQo5oX075b38-OqNoeE7HpBT-t50nS4Y4NLAoigKANXvAO4C44nSpH8hKgOvCLQtyAin3KPvrCoCEiMf4XgLYlfZmcUjgsKKuJf-Ubc"
  },
  participants: [
    {
      id: "p1",
      name: "Sarah J.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCq84ssNxuj8bdnbtXd17IvgTo9iRqryMoF787aPwsa4h74NIvt41cH-KjyUzLOvYELQjmVGy2LBcJDJpQ_1utlt9PNWwCtAbcIi3bsPnYmeAQ28TnJSo1Dp0YKKUOllwTX_TNnWizFklGXD3IvIe6iemDTx3JxhriG9POUojakY9PhNsz2HcSP1JDdvmOy1ZyNT0Uy2G53XxtBPzGuhK8QfFCEklt8YustwOUxNSY2CxnlIphwyNAfucmmkdd2F5HgwYAkCeWTWV8",
      isActiveSpeaker: true
    },
    {
      id: "p2",
      name: "Mike T.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuofq0y0XrTmbyq2Ct9TTlRQ2WpsDYA_3FWfH6KFTMpbUwDnb5mzDALSJwV0avL9EdAjGVKIotNB7YIsFOCizgDQFFTmH81nJxLqsHAicrFaAGykX1c0I8xPkGCVoAqBCEdzSXaGuZGLArv_NrETkb8ExSql7qae8Ot1N7tGFVXHY3dxphB-Cbyx6k6cvkB-mVdvceSfphqGsQ6kYGEGc_WAwnRgBpxNF-GTCNziNWwAfmNVvjTbRP21tzAL6qpyq_Z15GmZ39ep8",
      isMuted: true
    },
    {
      id: "p3",
      name: "Emily R.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc-5AWrTe6wD57XriueISveDAfNfWXjNLRkX75EeOsVoO8E3-KA1x2gIA3rLtW3679FH1_LfUptuBRgFH_YqKDMl8NNRTbBPokobSUn3Mrq8hK0t-CyiR0uWCcY4YYALgHN_xXs598OShe-tmcxAYgSahaGn9jIBYpG4IU62yl5VKRctfCLNiHRk6FvCYlobvZ-g681-2slcrzIGJPuyc1IWgN40vfkOGkH-vUaMaxREqCWhqlv3nRx1w1nUXtGN_FwUFYNvgVa60"
    },
    {
      id: "p4",
      name: "David K.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWU46iM1pM7AHkTw94YiEN3tvkmRwea4DEN6rhAa4TH_se8Te0Fl9qcY7zIQVK9ro7Wwn-3N36u3i0XUMxSfBV1G3FUmWLmMcViTMLRClPT7rX5plus7DbpkP1eoNe6SXSPmasn9kgS_CNisiywMID2OOAnVqaVRJhfvRyqSBun5yePr1fWZGwO0AwB_eC8aMWJVno2B2jsfDfXWUSwEnvJFcSnVtkzfYFGrBs_6f0jHGqMM2nLejmSBc8UZNH3xFiBm9R69atzhA"
    }
  ],
  sidebar: {
    tabs: ["Chat", "People", "Notes"],
    activeTab: "Notes",
    notes: {
      title: "Class Notes",
      subtitle: "Private to you",
      content: {
        heading: "Chapter 4 Review",
        points: [
          "Quadratic formula derivation",
          "Discuss midterm schedule (Next Tuesday!)"
        ],
        homework: "Exercises 4.1 - 4.5 due Friday.",
        footer: "Remember to upload the PDF solution to the portal after class ends."
      }
    },
    quickActions: [
      { label: "Assign Homework", icon: "assignment_add", colorClass: "text-primary", bgClass: "bg-blue-100 dark:bg-blue-900/30", arrowColorClass: "group-hover:text-primary" },
      { label: "Create Live Poll", icon: "poll", colorClass: "text-purple-600 dark:text-purple-400", bgClass: "bg-purple-100 dark:bg-purple-900/30", arrowColorClass: "group-hover:text-purple-500" }
    ]
  }
};

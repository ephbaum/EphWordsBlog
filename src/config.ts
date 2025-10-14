export const SITE = {
  website: "https://ephwords.com/",
  author: "Eph Baum",
  profile: "https://ephwords.com/",
  desc: "A place where I shout into the void.",
  title: "Eph Words",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 20,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Edit on GitHub",
    url: "https://github.com/ephbaum/EphWordsBlog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "America/Los_Angeles", // Pacific Time
} as const;

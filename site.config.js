const CONFIG = {
  // profile setting (required)
  profile: {
    name: "deeplake",
    image: "https://notion-avatar.vercel.app/api/img/eyJmYWNlIjo2LCJub3NlIjoxMCwibW91dGgiOjAsImV5ZXMiOjksImV5ZWJyb3dzIjoxNSwiZ2xhc3NlcyI6MCwiaGFpciI6MTksImFjY2Vzc29yaWVzIjowLCJkZXRhaWxzIjo5LCJiZWFyZCI6MCwiZmxpcCI6MCwiY29sb3IiOiJyZ2JhKDI1NSwgMCwgMCwgMCkiLCJzaGFwZSI6Im5vbmUifQ==", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "",
    bio: "",
    email: "devdeeplake@gmail.com",
    linkedin: "",
    github: "dev-deeplake",
    instagram: "",
  },
  projects: [
    {
      name: ``,
      href: "",
    },
  ],
  // blog setting (required)
  blog: {
    title: "deeplake-wiki",
    description: "Study Notes to Remember",
  },

  // CONFIG configration (required)
  link: "https://deeplake-wiki.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }

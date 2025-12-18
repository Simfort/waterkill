export default function sitemap() {
  return [
    {
      url: "https://waterkill-vdob.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://waterkill-vdob.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      name: "waterkill",
      short_name: "waterkill",
      icons: [
        { src: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
    },
    // ...другие страницы
  ];
}

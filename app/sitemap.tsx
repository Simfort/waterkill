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
    // ...другие страницы
  ];
}

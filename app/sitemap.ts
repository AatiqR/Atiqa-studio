// app/sitemap.ts
import { MetadataRoute } from "next";

export const revalidate = 0; // 🚀 ensures fresh fetch on every request

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://Mazwebstudio.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

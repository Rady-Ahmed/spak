import { MetadataRoute } from "next";
import { companyConfig } from "@/data/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      {
        userAgent: ["Googlebot", "bingbot", "Applebot", "YandexBot"],
        allow: "/",
      },
    ],
    sitemap: `${companyConfig.websiteUrl}/sitemap.xml`,
    host: companyConfig.websiteUrl,
  };
}

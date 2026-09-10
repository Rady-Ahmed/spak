import { MetadataRoute } from "next";
import { companyConfig } from "@/data/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${companyConfig.websiteUrl}/sitemap.xml`,
  };
}

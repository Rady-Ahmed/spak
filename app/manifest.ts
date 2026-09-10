import type { MetadataRoute } from "next";
import { companyConfig } from "@/data/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "سباك برو الطائف | خدمات سباكة 24/7",
    short_name: "سباك الطائف",
    description: "أفضل خدمات سباكة وصيانة طوارئ وكشف تسربات في الطائف 24 ساعة مع ضمان معتمد",
    start_url: "/",
    display: "standalone",
    background_color: "#070e1b",
    theme_color: "#070e1b",
    dir: "rtl",
    lang: "ar-SA",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

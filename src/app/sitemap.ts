import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/portfolio", "/a-propos", "/contact"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

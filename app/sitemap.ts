
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://biotictechnologies.in";

  const routes = [
    "",
    "/products/ring-compost",
    "/products/biogas-plant",
    "/products/incinerator",
    "/products/waste-burner",
    "/products/solar-systems",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

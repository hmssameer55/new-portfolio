import { MetadataRoute } from "next";

const WEBSITE_HOST_URL = 'https://www.hmssameer.xyz'

type changeFrequency =
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const routes = [
        {
            url: `${WEBSITE_HOST_URL}`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly" as changeFrequency,
        }
    ]

    return [...routes];
}

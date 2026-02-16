import { generateOgImage, ogSize, ogContentType } from "../lib/og-image";

export const runtime = "edge";
export const alt = "PG Ecom - Online Courses & School Management";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage({
    tagline: "Online Courses & School Management",
    badges: ["Drag & Drop Builder", "Auto Certificates", "White-Label"],
  });
}

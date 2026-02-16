import { generateOgImage, ogSize, ogContentType } from "../lib/og-image";

export const runtime = "edge";
export const alt = "PG Ecom - Global Mobile Top-Up & Airtime Platform";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage({
    tagline: "Global Mobile Top-Up Platform",
    badges: ["150+ Countries", "500+ Operators", "White-Label"],
  });
}

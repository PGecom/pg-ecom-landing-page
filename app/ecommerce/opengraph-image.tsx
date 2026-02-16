import { generateOgImage, ogSize, ogContentType } from "../lib/og-image";

export const runtime = "edge";
export const alt = "PG Ecom - Ecommerce Platform for Online Stores";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage({
    tagline: "Launch & Scale Your Online Store",
    badges: ["Multi-Shop", "Stripe & MonCash", "Print on Demand"],
  });
}

import { generateOgImage, ogSize, ogContentType } from "../lib/og-image";

export const runtime = "edge";
export const alt = "PG Ecom - Identity Verification & KYC Platform";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOgImage({
    tagline: "Identity Verification & KYC Platform",
    badges: ["Document OCR", "Biometric Match", "SOC 2 Compliant"],
  });
}

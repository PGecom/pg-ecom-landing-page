"use client";

import { useEffect } from "react";

const CRISP_WEBSITE_ID = "1b38e124-7b98-4652-9599-b45ff96e5e4c";

export default function CrispChat() {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";

export default function AsyncCssLoader() {
  useEffect(() => {
    // Load bootstrap-icons CSS asynchronously
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css";
    link.media = "print";
    link.onload = function () {
      if (this instanceof HTMLLinkElement) {
        this.media = "all";
      }
    };
    document.head.appendChild(link);
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";

export default function StudioStyles() {
  useEffect(() => {
    // Inject custom styles for publish button
    const styleId = "sanity-studio-custom-styles";

    // Remove existing style if present
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }

    // Create and inject style element
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      /* Custom Publish Button Styling - Brand Color #0079c0 with White Text */
      [data-testid="action-Publish"] button,
      [data-testid="action-Publish"] [data-ui="Button"],
      button[data-testid="action-Publish"],
      button[data-ui="Button"][data-testid="action-Publish"],
      button[aria-label*="Publish"],
      button[title*="Publish"],
      [data-ui="Button"][aria-label*="Publish"] {
        background-color: #0079c0 !important;
        color: #ffffff !important;
        border-color: #0079c0 !important;
      }

      [data-testid="action-Publish"] button:hover,
      [data-testid="action-Publish"] [data-ui="Button"]:hover,
      button[data-testid="action-Publish"]:hover,
      button[aria-label*="Publish"]:hover,
      button[title*="Publish"]:hover {
        background-color: #0069a8 !important;
        border-color: #0069a8 !important;
        color: #ffffff !important;
      }

      [data-testid="action-Publish"] button:focus,
      [data-testid="action-Publish"] [data-ui="Button"]:focus,
      button[data-testid="action-Publish"]:focus,
      button[aria-label*="Publish"]:focus,
      button[title*="Publish"]:focus {
        background-color: #0069a8 !important;
        border-color: #0069a8 !important;
        color: #ffffff !important;
        box-shadow: 0 0 0 3px rgba(0, 121, 192, 0.2) !important;
      }

      [data-testid="action-Publish"] button:active,
      [data-testid="action-Publish"] [data-ui="Button"]:active,
      button[data-testid="action-Publish"]:active,
      button[aria-label*="Publish"]:active,
      button[title*="Publish"]:active {
        background-color: #005a8f !important;
        border-color: #005a8f !important;
        color: #ffffff !important;
      }

      [data-testid="action-Publish"] button *,
      [data-testid="action-Publish"] [data-ui="Button"] *,
      button[aria-label*="Publish"] *,
      button[title*="Publish"] *,
      [data-testid="action-Publish"] button span,
      [data-testid="action-Publish"] [data-ui="Button"] span {
        color: #ffffff !important;
      }

      div[data-testid="action-Publish"] button,
      [data-testid="action-Publish"] > button,
      [data-testid="action-Publish"] > [data-ui="Button"] {
        background-color: #0079c0 !important;
        color: #ffffff !important;
        border-color: #0079c0 !important;
      }

      div[data-testid="action-Publish"] button:hover,
      [data-testid="action-Publish"] > button:hover,
      [data-testid="action-Publish"] > [data-ui="Button"]:hover {
        background-color: #0069a8 !important;
        border-color: #0069a8 !important;
        color: #ffffff !important;
      }
    `;

    document.head.appendChild(style);

    // Also observe for dynamically added publish buttons
    const observer = new MutationObserver(() => {
      const publishButtons = document.querySelectorAll(
        '[data-testid="action-Publish"] button, button[aria-label*="Publish"], button[title*="Publish"]'
      );
      publishButtons.forEach((button) => {
        if (button instanceof HTMLElement) {
          button.style.backgroundColor = "#0079c0";
          button.style.color = "#ffffff";
          button.style.borderColor = "#0079c0";
        }
      });
    });

    // Start observing after a short delay to ensure DOM is ready
    setTimeout(() => {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }, 1000);

    return () => {
      observer.disconnect();
      const styleEl = document.getElementById(styleId);
      if (styleEl) {
        styleEl.remove();
      }
    };
  }, []);

  return null;
}

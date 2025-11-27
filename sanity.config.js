/**
 * This configuration is used to for the Sanity Studio that's mounted on the `\src\app\studio\[[...tool]]\page.jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig, buildLegacyTheme } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

const brandColor = "#0079C0";

const lfesStudioTheme = buildLegacyTheme({
  "--brand-primary": brandColor,
  "--component-bg": "#f5fbff",
  "--component-text-color": "#1f2a37",
  "--default-button-color": "#ffffff",
  "--default-button-primary-color": brandColor,
  "--default-button-success-color": "#1aba77",
  "--default-button-warning-color": "#f4b400",
  "--default-button-danger-color": "#e53935",
  "--state-info-color": brandColor,
  "--state-success-color": "#1aba77",
  "--state-warning-color": "#f4b400",
  "--state-danger-color": "#e53935",
});

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  theme: lfesStudioTheme,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});

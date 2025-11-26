import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, token } from "../env";

// Write client for mutations (requires write token)
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Write operations should not use CDN
  token, // Write token from environment variables
});

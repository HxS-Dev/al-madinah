// lib/sanity.js
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '4i2xil9a',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2025-03-19',
  perspective: "published",
});

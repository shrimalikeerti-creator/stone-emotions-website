import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // 'published' content only, cached — fine for a public marketing site.
  // Set to false while editing if you want to see drafts instantly.
  useCdn: true,
});

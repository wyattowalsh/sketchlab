import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const { GET } = createFromSource(source, {
  // Enhance search functionality for accurate and relevant results
  searchOptions: {
    highlight: true,
    snippetLength: 100,
    maxResults: 20,
  },
});

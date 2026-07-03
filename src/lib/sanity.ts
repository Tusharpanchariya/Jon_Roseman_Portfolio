import { createClient } from '@sanity/client';
import { BRAND_DATA, BrandData } from '../data/content';

// Setup Sanity Client safely
export const sanityClient = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  ? createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2025-01-01',
      useCdn: true,
    })
  : null;

// Fetch all editable homepage data
export async function getPortfolioContent(): Promise<BrandData> {
  if (!sanityClient) {
    // Return mock static prefilled data if Sanity is not configured
    return BRAND_DATA;
  }

  try {
    const query = `*[_type == "portfolio"][0] {
      profile,
      timeline[] | order(year asc),
      stories[],
      services[],
      book,
      books[],
      projects[] | order(year desc),
      collaborations[],
      podcast,
      testimonials[]
    }`;
    const data = await sanityClient.fetch(query);
    return data || BRAND_DATA;
  } catch (error) {
    console.error("Failed to fetch content from Sanity. Falling back to local data.", error);
    return BRAND_DATA;
  }
}

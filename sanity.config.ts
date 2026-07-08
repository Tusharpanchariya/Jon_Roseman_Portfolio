import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schema';

export default defineConfig({
  name: 'default',
  title: 'Jon Roseman CMS Studio',
  basePath: '/studio',

  projectId: (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string) || 'mock_project_id',
  dataset: (process.env.NEXT_PUBLIC_SANITY_DATASET as string) || 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});

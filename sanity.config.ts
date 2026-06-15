import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schemaTypes';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Stone Emotions Content')
          .items([
            S.listItem()
              .title('Gallery Designs')
              .child(
                S.documentTypeList('galleryItem').title('Gallery Designs')
              ),
            // Future: Products, Materials, Projects go here as separate
            // list items in the same way.
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});

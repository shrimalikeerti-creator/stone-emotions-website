import { type SchemaTypeDefinition } from 'sanity';
import { galleryItem } from './galleryItem';

// As we build out Products, Materials and Projects in the next phases,
// import and add their schemas here too.

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryItem],
};

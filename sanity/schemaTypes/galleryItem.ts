import { defineField, defineType } from 'sanity';

// This schema defines the FORM your team sees in Sanity Studio (/studio)
// whenever they add or edit a gallery design.

export const galleryItem = defineType({
  name: 'galleryItem',
  title: 'Gallery Design',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Design Name',
      type: 'string',
      description: 'Shown as the title on the card and in the lightbox. e.g. "Backlit Lotus Field"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text (for SEO & screen readers)',
          type: 'string',
          description:
            'Describe what is in the photo and where it would be used. e.g. "CNC-carved marble jali screen with lotus pattern, room divider for luxury villa". This text helps Google Images and AI search tools (ChatGPT, Perplexity, Gemini) understand the photo.',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Category · Material label',
      type: 'string',
      description: 'Shown on the card and lightbox. e.g. "Sofa Wall · Sandstone" or "Jali Screen · Marble"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Filter categories',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Pick all that apply — controls which filter chips show this design.',
      options: {
        list: [
          { title: 'Mandir / Temple', value: 'mandir' },
          { title: 'Sofa Wall', value: 'sofa' },
          { title: 'Staircase Wall', value: 'staircase' },
          { title: 'Botanical / Floral', value: 'botanical' },
          { title: 'Texture / Material Sample', value: 'texture' },
          { title: 'Jali Screen', value: 'jali' },
          { title: 'Cladding', value: 'cladding' },
        ],
        layout: 'tags',
      },
      validation: (Rule) => Rule.min(1).error('Pick at least one category.'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: '1-2 sentences: what the design is and where it works best. Shown when someone clicks the photo.',
      validation: (Rule) => Rule.required().max(280),
    }),
    defineField({
      name: 'orderRank',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers show first in the gallery. Leave blank to show newest last.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tag',
      media: 'mainImage',
    },
  },
});

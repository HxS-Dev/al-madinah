import {DocumentsIcon} from '@sanity/icons/Documents'
import {defineField, defineType} from 'sanity'

export const islamicLiteratureType = defineType({
  name: 'islamicLiterature',
  title: 'Islamic Literature',
  type: 'document',
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'islamicLiteratureCategory'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'URL to the publication (PDF or webpage)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'note',
      title: 'Note',
      type: 'string',
      description: 'Optional note e.g. "Part 1"',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order (lower numbers appear first)',
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      category: 'category.title',
      order: 'order',
    },
    prepare(selection) {
      const {category, order} = selection
      return {
        ...selection,
        subtitle: [category, order != null ? `Order: ${order}` : null].filter(Boolean).join(' · '),
      }
    },
  },
})

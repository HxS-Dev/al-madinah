import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const articlesType = defineType({
  name: 'article',
  title: 'Articles',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      hidden: true,
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is New Featured?',
      type: 'boolean',
      description: 'Mark this if this is a featured.',
      initialValue: false,
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})

import {PlayIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const hajjAudioType = defineType({
  name: 'hajjAudio',
  title: 'Hajj Audio Resource',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'URL to the audio resource',
      validation: (rule) => rule.required(),
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
      order: 'order',
    },
    prepare(selection) {
      const {order} = selection
      return {
        ...selection,
        subtitle: `Order: ${order ?? '—'}`,
      }
    },
  },
})

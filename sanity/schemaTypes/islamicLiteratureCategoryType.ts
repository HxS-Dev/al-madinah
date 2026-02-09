import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const islamicLiteratureCategoryType = defineType({
  name: 'islamicLiteratureCategory',
  title: 'Literature Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order on the page (lower numbers appear first)',
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

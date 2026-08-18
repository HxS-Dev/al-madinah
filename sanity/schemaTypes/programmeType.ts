import {CalendarIcon} from '@sanity/icons/Calendar'
import {defineField, defineType} from 'sanity'

export const programmeType = defineType({
  name: 'programme',
  title: 'Programme',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Programme Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isNew',
      title: 'Is New Programme?',
      type: 'boolean',
      description: 'Mark this to highlight as a new/latest programme.',
      initialValue: false,
    }),
    defineField({
      name: 'programmeDate',
      title: 'Programme Date',
      type: 'string',
      description: 'The date when this programme will take place (e.g., "Saturday 15th June 2025")',
    }),
    defineField({
      name: 'programmeStartTime',
      title: 'Programme Start Time',
      type: 'string',
      description: 'Start time for the programme (e.g., "9:00 AM")',
    }),
    defineField({
      name: 'programmeEndTime',
      title: 'Programme End Time',
      type: 'string',
      description: 'End time for the programme (e.g., "5:00 PM")',
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
        }),
      ],
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
      date: 'programmeDate',
    },
    prepare(selection) {
      const {date} = selection
      return {
        ...selection,
        subtitle: date || '',
      }
    },
  },
})

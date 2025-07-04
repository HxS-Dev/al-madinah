import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const scheduleType = defineType({
  name: 'post',
  title: 'Programme schedule',
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
    }),
    defineField({
      name: 'isNewSchedule',
      title: 'Is New Schedule?',
      type: 'boolean',
      description: 'Mark this if this is a new schedule.',
      initialValue: false,
    }),
    defineField({
      name: 'programmeDate',
      title: 'Programme Date',
      type: 'string',
      description: 'The date when this programme will take place (e.g., "Saturday 15th June 2024")',
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
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
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
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
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
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})

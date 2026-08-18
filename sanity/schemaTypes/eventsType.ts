import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const eventsType = defineType({
  name: 'events',
  title: 'Events',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'isNew',
      title: 'Is New Events?',
      type: 'boolean',
      description: 'Mark this if this is a new events.',
      initialValue: false,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured?',
      type: 'boolean',
      description: 'Mark this if this is a featured.',
      initialValue: false,
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'datetime',
      description: 'The date of the event. Used to determine if the event has passed.',
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
      eventDate: 'eventDate',
      media: 'mainImage',
    },
    prepare(selection) {
      const {eventDate} = selection
      return {
        ...selection,
        subtitle: eventDate
          ? new Date(eventDate).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'})
          : 'No date set',
      }
    },
  },
})

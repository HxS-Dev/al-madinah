import {UsersIcon} from '@sanity/icons/Users'
import {defineField, defineType} from 'sanity'

export const adultStudiesType = defineType({
  name: 'adultStudies',
  title: 'Adult Islamic Studies',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'poster',
      title: 'Poster Image',
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
      description: 'Upload the Adult Islamic Studies poster image',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Adult Islamic Studies',
        subtitle: 'Poster',
      }
    },
  },
})

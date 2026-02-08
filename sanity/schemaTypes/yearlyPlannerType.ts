import {CalendarIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const yearlyPlannerType = defineType({
  name: 'yearlyPlanner',
  title: 'Yearly Planner',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Link to the planner (PDF or webpage). Leave blank if not yet available.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
    },
    prepare(selection) {
      const {title, url} = selection
      return {
        title,
        subtitle: url || 'No URL set',
      }
    },
  },
})

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
      name: 'plannerFile',
      title: 'Planner PDF',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      description: 'Upload the planner PDF here. This is used in preference to the URL below.',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description:
        'Optional. Link to a planner hosted elsewhere. Only used when no PDF is uploaded above. Leave both blank if not yet available.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
      file: 'plannerFile.asset',
    },
    prepare(selection) {
      const {title, url, file} = selection
      return {
        title,
        subtitle: file ? 'PDF uploaded' : url || 'No planner set',
      }
    },
  },
})

import {BookIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const hifzType = defineType({
  name: 'hifz',
  title: 'Hifz',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'plannerTitle',
      title: 'Planner Title',
      type: 'string',
      description: 'e.g. "Ḥifẓ Planner 2025/26"',
    }),
    defineField({
      name: 'plannerDescription',
      title: 'Planner Description',
      type: 'text',
      description: 'Short description shown on the planner download card',
    }),
    defineField({
      name: 'plannerFile',
      title: 'Planner PDF',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      description: 'Upload the Ḥifẓ Planner PDF',
    }),
    defineField({
      name: 'applicationFormTitle',
      title: 'Application Form Title',
      type: 'string',
      description: 'e.g. "Application Form"',
    }),
    defineField({
      name: 'applicationFormDescription',
      title: 'Application Form Description',
      type: 'text',
      description: 'Short description shown on the application form download card',
    }),
    defineField({
      name: 'applicationFormFile',
      title: 'Application Form PDF',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      description: 'Upload the Ḥifẓ Application Form PDF',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Hifz',
        subtitle: 'Planner & Application Form',
      }
    },
  },
})

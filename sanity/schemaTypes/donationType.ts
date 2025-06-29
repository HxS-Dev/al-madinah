import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const donationType = defineType({
  name: 'donation',
  title: 'Donation Progress',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Name of the donation campaign or fund',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description of the donation campaign',
    }),
    defineField({
      name: 'amountCollected',
      title: 'Amount Collected',
      type: 'number',
      description: 'Total amount collected so far',
    }),
    defineField({
      name: 'targetAmount',
      title: 'Target Amount',
      type: 'number',
      description: 'Total target amount for this campaign',
    }),
    defineField({
      name: 'numberOfDonors',
      title: 'Number of Donors',
      type: 'number',
      description: 'Total number of donors',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      description: 'When the donation campaign started',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
      description: 'When the donation campaign ends (optional)',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
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
      name: 'isActive',
      title: 'Is Active?',
      type: 'boolean',
      description: 'Is this donation campaign currently active?',
      initialValue: true,
    }),
  
  ],
})

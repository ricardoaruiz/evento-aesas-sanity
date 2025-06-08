import {defineType} from 'sanity'

export const calendarHeader = defineType({
  name: 'calendarHeader',
  title: 'Calendar Header',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: 'firstLine',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: 'secondLine',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    },
  ],
})

export const calendarBanner = defineType({
  name: 'calendarBanner',
  title: 'Calendar Banner',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: 'firstLine',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: 'secondLine',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    },
  ],
})

export const calendarType = defineType({
  name: 'calendar',
  title: 'Calendar',
  type: 'document',
  fields: [
    {
      name: 'slug',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      title: 'Header',
      name: 'header',
      type: 'reference',
      to: [{type: 'calendarHeader'}],
    },
    {
      title: 'Banner',
      name: 'banner',
      type: 'reference',
      to: [{type: 'calendarBanner'}],
    },
  ],
})

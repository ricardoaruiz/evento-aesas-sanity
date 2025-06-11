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
    {
      name: 'poster',
      type: 'image',
      title: 'Poster do calendário',
    },
    {
      title: 'Events',
      name: 'events',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'event'}]}],
    },
    {
      name: 'color',
      title: 'Cor do calendário',
      type: 'color',
      options: {
        colorList: [
          '#FF6900',
          {hex: '#FCB900'},
          {r: 123, g: 220, b: 181},
          {r: 0, g: 208, b: 132, a: 0.5},
          {h: 203, s: 95, l: 77, a: 1},
          {h: 202, s: 95, l: 46, a: 0.5},
          {h: 345, s: 43, v: 97},
          {h: 344, s: 91, v: 92, a: 0.5},
        ],
      },
    },
  ],
})

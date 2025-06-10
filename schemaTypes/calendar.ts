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
      type: 'string',
      title: 'Cor do calendário',
      description: 'Define a cor do calendário',
      initialValue: 'red',
      options: {
        list: [
          {title: 'Amarelo', value: 'yellow'},
          {title: 'Amber', value: 'amber'},
          {title: 'Azul', value: 'blue'},
          {title: 'Esmeralda', value: 'emerald'},
          {title: 'Cinza', value: 'gray'},
          {title: 'Laranja', value: 'orange'},
          {title: 'Roxo', value: 'purple'},
          {title: 'Vermelho', value: 'red'},
          {title: 'Verde', value: 'green'},
          {title: 'Violeta', value: 'violet'},
        ],
      },
      validation: (Rule) => Rule.optional(),
    },
  ],
})

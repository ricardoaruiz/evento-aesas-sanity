import {defineType} from 'sanity'

export const calendarHeader = defineType({
  name: 'calendarHeader',
  title: 'Cabeçalho (páginas do calendário e evento)',
  description: 'Cabeçalho das páginas do calendário e evento, onde tem o título e sub título',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Slug (title)',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: 'firstLine',
      title: 'Título do cabeçalho (firstLine)',
      description: 'Primeira linha do cabeçalho do calendário',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: 'secondLine',
      title: 'Título do subcabeçalho (secondLine)',
      description: 'Segunda linha do cabeçalho do calendário',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    },
  ],
})

export const calendarBanner = defineType({
  name: 'calendarBanner',
  title: 'Banner (página do calendário)',
  description: 'Banner da página de calendário, onde tem o título e sub título',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Slug (title)',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: 'firstLine',
      title: 'Título do banner (firstLine)',
      description: 'Primeira linha do banner do calendário',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: 'secondLine',
      title: 'Sub título do banner (secondLine)',
      description: 'Segunda linha do banner do calendário',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    },
  ],
})

export const calendar = defineType({
  name: 'calendar',
  title: 'Página calendário',
  description:
    'Página de calendário dos eventos. Nessa página são exibidos os cards de eventos com links para as páginas de cada evento',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug (slug)',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: 'header',
      title: 'Header do calendário (calendarHeader)',
      description: 'Cabeçalho do calendário onde tem o título e sub título',
      type: 'reference',
      to: [{type: 'calendarHeader'}],
    },
    {
      name: 'banner',
      title: 'Banner do calendário (calendarBanner)',
      description: 'Banner do calendário onde tem o título e sub título',
      type: 'reference',
      to: [{type: 'calendarBanner'}],
    },
    {
      name: 'poster',
      title: 'Poster do calendário (poster)',
      type: 'image',
    },
    {
      name: 'events',
      title: 'Eventos do calendário (events)',
      description: 'Eventos que pertencem a este calendário',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'event'}]}],
    },
    {
      name: 'color',
      title: 'Cor do calendário (color)',
      description: 'Cor do calendário, usada para destacar banner, eventos e rodapé da página',
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

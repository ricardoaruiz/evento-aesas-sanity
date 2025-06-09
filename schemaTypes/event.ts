import {defineType} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: 'month',
      type: 'string',
      description: 'Mês do evento',
      options: {
        list: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contentTitle',
      type: 'string',
      description: 'Título do conteúdo do evento',
      validation: (Rule) => Rule.required().min(1).max(50),
    },
    {
      name: 'contentDescription',
      type: 'string',
      description: 'Descrição do conteúdo do evento',
      options: {
        list: ['aulas on-line', 'aulas presenciais', 'aulas on-line e presenciais'],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'onlineTime',
      type: 'string',
      description: 'Horário do evento online',
      validation: (Rule) => Rule.required().min(1).max(20),
    },
    {
      name: 'onlineDates',
      type: 'string',
      description: 'Datas do evento online',
      validation: (Rule) => Rule.required().min(1).max(200),
    },
    {
      name: 'presencialTime',
      type: 'string',
      description: 'Horário do evento presencial',
      validation: (Rule) => Rule.optional().min(0).max(20),
    },
    {
      name: 'presencialDates',
      type: 'string',
      description: 'Datas do evento presencial',
      validation: (Rule) => Rule.optional().min(1).max(20),
    },
    {
      name: 'footerText',
      type: 'string',
      description: 'Texto que aparece no rodapé do evento',
      validation: (Rule) => Rule.required().min(1).max(50),
    },
    {
      name: 'contentTileSize',
      type: 'string',
      title: 'Content Tile Size',
      description: 'Define o tamanho da fonte do titulo do conteúdo',
      initialValue: 'medium',
      options: {
        list: [
          {title: 'Grande', value: 'large'},
          {title: 'Médio', value: 'medium'},
          {title: 'Pequeno', value: 'small'},
        ],
      },
      validation: (Rule) => Rule.optional(),
    },
    {
      name: 'tagText',
      type: 'string',
      validation: (Rule) => Rule.optional().min(1).max(8),
    },
    {
      name: 'tagTextSize',
      type: 'string',
      title: 'Tag Text Size',
      description: 'Define o tamanho da fonte do texto da tag',
      options: {
        list: [
          {title: 'Grande', value: 'large'},
          {title: 'Médio', value: 'medium'},
          {title: 'Pequeno', value: 'small'},
        ],
      },
      validation: (Rule) => Rule.optional(),
    },
    {
      name: 'tagVariant',
      type: 'string',
      title: 'Tag Variant',
      description: 'Define a variante da tag',
      options: {
        list: [
          {title: 'Dourado', value: 'gold'},
          {title: 'Prateado', value: 'silver'},
          {title: 'Bronze', value: 'bronze'},
        ],
      },
      validation: (Rule) => Rule.optional(),
    },
  ],
})

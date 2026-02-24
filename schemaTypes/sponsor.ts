import {defineType} from 'sanity'

export const sponsor = defineType({
  name: 'sponsor',
  title: 'Patrocinadores',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug (slug)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Nome (name)',
      description: 'Nome do patrocinador do evento',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Logo do patrocinador (image)',
      description: 'Logo do patrocinador do evento',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
})

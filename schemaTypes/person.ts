import {defineType} from 'sanity'

export const person = defineType({
  name: 'person',
  title: 'Pessoas (instrutoras ou palestrantes)',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug (slug)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Foto da pessoa (image)',
      description: 'Foto da pessoa instrutora ou palestrante',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Nome (name)',
      description: 'Nome completo da pessoa instrutora ou palestrante',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'organization',
      title: 'Empresa (organization)',
      description: 'Nome da empresa da pessoa instrutora ou palestrante',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
})

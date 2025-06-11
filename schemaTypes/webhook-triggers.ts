import {defineType} from 'sanity'

export const updateDevelop = defineType({
  name: 'update_develop',
  title: '* Update Develop',
  description:
    'Documento para atualizar dados em desenvolvimento. Ao ser publicado, irá atualizar os dados de desenvolvimento.',
  type: 'document',
  fields: [
    {
      name: 'trigger',
      type: 'string',
      title: 'Gatilho',
      description:
        'Modifique esse campo e publique o documento para atualizar os dados de desenvolvimento.',
      options: {
        list: [
          {title: 'Item 1', value: 'item1'},
          {title: 'Item 2', value: 'item2'},
        ],
      },
      validation: (Rule) => Rule.optional(),
    },
  ],
})

export const updateProdction = defineType({
  name: 'update_production',
  title: '* Update Production',
  description:
    'Documento para atualizar dados em produção. Ao ser publicado, irá atualizar os dados de produção.',
  type: 'document',
  fields: [
    {
      name: 'trigger',
      type: 'string',
      title: 'Gatilho',
      description:
        'Modifique esse campo e publique o documento para atualizar os dados de produção.',
      options: {
        list: [
          {title: 'Item 1', value: 'item1'},
          {title: 'Item 2', value: 'item2'},
        ],
      },
      validation: (Rule) => Rule.optional(),
    },
  ],
})

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig([
  {
    name: 'Production',
    title: 'EventosAesas [Prod]',
    basePath: '/eventos-aesas-production',

    projectId: 'ejmsm84f',
    dataset: 'production',

    plugins: [structureTool(), visionTool()],

    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'Develop',
    title: 'EventosAesas [Dev]',
    basePath: '/eventos-aesas-dev',

    projectId: 'ejmsm84f',
    dataset: 'develop',

    plugins: [structureTool(), visionTool()],

    schema: {
      types: schemaTypes,
    },
  },
])

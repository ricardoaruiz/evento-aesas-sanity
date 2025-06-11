import {colorInput} from '@sanity/color-input'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {media} from 'sanity-plugin-media'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig([
  {
    name: 'Production',
    title: 'EventosAesas [Prod]',
    basePath: '/eventos-aesas-production',
    projectId: 'ejmsm84f',
    dataset: 'production',
    plugins: [structureTool(), visionTool(), colorInput(), media()],
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
    plugins: [structureTool(), visionTool(), colorInput(), media()],
    schema: {
      types: schemaTypes,
    },
  },
])

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio_web',

  projectId: '1auy31dl',
  dataset: 'projects',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

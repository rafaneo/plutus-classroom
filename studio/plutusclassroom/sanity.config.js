import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'plutus_classroom',

  projectId: 'cusjuvl4',
  dataset: 'test',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes
  }
})
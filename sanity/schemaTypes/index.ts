import blog from './blog'
import tags from './tags'
import banner from './banner'
import { SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [blog, tags, banner],
}
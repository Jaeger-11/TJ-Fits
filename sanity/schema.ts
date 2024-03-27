import { type SchemaTypeDefinition } from 'sanity';
import products from './schemas/products';
import categories from './schemas/categories';
import heroTexts from './schemas/heroTexts';
import heroImages from './schemas/heroImages';
import featured from './schemas/featured';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, categories, heroTexts, heroImages, featured],
}
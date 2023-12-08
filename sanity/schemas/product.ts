export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product',
      price: 'number',
    },
    {
      name: 'images',
      types: 'array',
    },
  ],
}

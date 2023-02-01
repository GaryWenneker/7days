import { ID } from '../fields';

const collection = {
  name: 'rubrieken',
  label: 'Rubrieken',
  editor: {
    preview: false,
  },
  description: 'Rubrieken',
  folder: 'content/rubrieken',
  slug: '{{slug}}',
  summary: '{{title}}',
  create: true,
  fields: [
    ID,
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'rubriek',
    },
    {
      label: 'Name',
      name: 'title',
      widget: 'string',
      default: '',
    },
  ],
};

export default collection;

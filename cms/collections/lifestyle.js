import { PermalinkField } from '../fields/permalink-field';
import seo from '../fields/seo';
import { ID } from '../fields';

const collection = {
  name: 'lifestyle',
  label: 'Lifestyle',
  editor: {
    preview: false,
  },
  description: 'Lifestyle posts collection',
  folder: 'content/lifestyle',
  slug: '{{slug}}',
  summary:
    "{{title}} - {{date | date('YYYY-MM-DD')}} – {{body | truncate(40, '***')}}",
  create: true,
  fields: [
    ID,
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'lifestyle',
    },
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'post',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: '',
    },
    {
      label: 'Rubriek',
      name: 'rubriek',
      widget: 'relation',
      collection: 'rubrieken',
      default: '',
      search_fields: ['title'],
      display_fields: ['title'],
      value_field: 'title',
      required: false,
    },
    PermalinkField('lifestyle'),
    {
      label: 'Featured Image',
      name: 'thumbnail',
      widget: 'string',
      default: '',
      required: false,
    },
    {
      label: 'Date',
      name: 'date',
      widget: 'datetime',
      default: '',
      required: false,
    },
    {
      label: 'Auteur',
      name: 'auteur',
      widget: 'string',
      default: '',
    },
    {
      label: 'Author',
      name: 'author',
      widget: 'relation',
      collection: 'authors',
      default: '',
      search_fields: ['title'],
      display_fields: ['title'],
      value_field: 'id',
      required: false,
    },
    {
      label: 'Excerpt',
      name: 'excerpt',
      widget: 'markdown',
      default: '',
      required: false,
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
      default: '',
      required: false,
    },
    seo,
  ],
};

export default collection;
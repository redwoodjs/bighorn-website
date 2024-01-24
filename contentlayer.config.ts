import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const changelog = defineDocumentType(() => ({
  name: 'Changelog',
  contentType: 'mdx',
  filePathPattern: 'changelog/*.mdx',
  fields: {
    publishDate: {
      type: 'date',
      description: 'The publish date for the changelog',
      required: true,
    },
    published: {
      type: 'boolean',
      description: 'Whether the changelog is published',
      required: true,
    },
  },
}))

// const contributors = defineDocumentType(() => ({
//   name: 'Contributors',
//   contentType: 'mdx',
//   filePathPattern: 'contributors/*.mdx',
//   fields: {},
// }))

// const coreTeam = defineDocumentType(() => ({
//   name: 'Core Team',
//   contentType: 'mdx',
//   filePathPattern: 'core-team/*.mdx',
//   fields: {},
// }))

const events = defineDocumentType(() => ({
  name: 'Events',
  contentType: 'mdx',
  filePathPattern: 'events/*.mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the event',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the event',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the event',
      required: true,
    },
    rsvp: {
      type: 'string',
      description: 'The RSVP link for the event',
      required: true,
    },
  },
}))

const roadmap = defineDocumentType(() => ({
  name: 'Roadmap',
  contentType: 'mdx',
  filePathPattern: 'roadmap/*.mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the feature',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the feature',
      required: true,
    },
    status: {
      type: 'enum',
      options: ['planned', 'later', 'done', 'soon'],
      description: 'The status of the feature',
      required: true,
    },
    relatedPR: {
      type: 'string',
      options: 'string',
      description: 'The related PR for the feature',
      required: false,
    },
  },
}))

export default makeSource({
  documentTypes: [changelog, events, roadmap],
  contentDirPath: './content',
  disableImportAliasWarning: true,
})

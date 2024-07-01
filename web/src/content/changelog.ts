// Note(jgmw):
// This would actually be easier/nicer to deal with using RSC since we want to do some server side logic to
// produce a list of changelog entries.
// For now, due to sync client components, we have to list all these static imports and export them as something
// nicer to use.

import SomeChangelogEntry, {
  frontmatter as SomeChangelogEntryFrontmatter,
} from 'src/content/changelog/20240201.mdx'

export type ChangelogEntry = {
  frontmatter: {
    publishDate: string
  }
  Component: JSX.Element
}

export const changelog = [
  {
    frontmatter: SomeChangelogEntryFrontmatter,
    Component: SomeChangelogEntry,
  },
]

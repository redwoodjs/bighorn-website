import * as authors from './authors'
import type { Post } from './posts'

export interface Upgrade extends Post {}

const upgrades: Upgrade[] = [
  {
    slug: '8',
    title: 'v8 Upgrade Guide',
    brief:
      'Version 8 is out with some cool new features like background jobs! Upgrading should be easy with this guide to help you along the way.',
    tags: ['v8'],
    publishedAt: new Date('2024-08-23T12:00:00.000Z'),
    author: authors.JoshGMWalker,
  },
]

export function getUpgrades(): Upgrade[] {
  return upgrades
    .filter((upgrade) => {
      return upgrade.publishedAt <= new Date()
    })
    .sort((a, b) => {
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
    })
    .map((upgrade, index) => {
      return {
        ...upgrade,
        id: index,
      }
    })
}

export function getUpgradeBySlug(slug: string): Upgrade | undefined {
  return upgrades.find((upgrade) => upgrade.slug === slug)
}

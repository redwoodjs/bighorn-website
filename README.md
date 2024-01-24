# redwoodjs.com

This repo contains the latest iteration of [redwoodjs.com](https://redwoodjs.com), redesigned for our Bighorn launch.

## Development Quick Start

```
yarn install
```

### .env

You'll need to create a .env file. Start with this in the file:

```
DATABASE_URL=
SESSION_SECRET=
```

We're using the database to save Newsletter submissions.

The production database is using [Neon.tech](https://neon.tech/)

## Updating the Content on the Site

All the content on the site is controlled through markdown files in the `content` directory.

To preview the content changes you've made locally, you'll need to run:

```
yarn build:content
```

If everything runs successfully, you'll see a message like this:

![](/images/contentlayer-success.png)

Unfortunately, the displayed error message, is a known issue with Contentlayer. (See Issues [598](https://github.com/contentlayerdev/contentlayer/issues/598) and [495](https://github.com/contentlayerdev/contentlayer/issues/495))

This script generates a `.contentlayer` folder inside the project's root.

### Changelog

```
---
publishDate: 2024-02-01
published: true
---
```

Since we're using `mdx`, you can also include React components within the content. Right below the frontmatter, import the component, using an absolute path:

```
import Browser from 'web/src/components/Browser/Browser'
```

Then, you can use the component in the content:

```
<Browser><div>Some code</div></Browser>
```

I've created a couple of components that you can use:
- `<Browser />`
- `<Video />`

I've also installed [Prism.js](https://prismjs.com/) for formatting code blocks.

### Events

```
---
title: "Maker Hour"
date: 2024-01-24T18:00:00-05:00
description: "Each week, we meet to support each other and discuss projects we’re building on top of RedwoodJS."
rsvp: 'https://lu.ma/redwoodjs'
---
```

### Roadmap

```
---
title: "Autoscaling for dedicated PostgreSQL clusters"
description: "Access and work in your own configurable PostgreSQL cluster, complete with autoscaling support."
status: "soon"
---
```

Possible status values are: `soon`, `later`, `planned`, and `done`

## Icons

All the icons on the site are delivered through a generated SVG sprite. To add a new icon, add a 24x24 SVG file to the `scripts/svg-icons` directory. Then, run:

```
yarn build:icons
```

This will generate a new `icons/sprite.svg` file and a corresponding type file (`name.d.ts`) in the `web/public` directory.

The new icon will be available within the `Icon` component, using the same name as the SVG file. For example, `github.svg` can be displayed using:

```
<Icon id="github" />
```

## Blog Posts

Blog posts are written and managed inside [Hashnode](https://hashnode.com/).

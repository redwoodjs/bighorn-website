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

Blog posts are written and managed directly within this repo.

### Suggesting new blog posts

Please feel free to open an issue with the blog post suggestion you want us to consider.

### Authoring new blog posts

If you want to author a new blog post you can do so with a PR to this repository. The PR will have to do the following:
1. Update the `posts` list in `web/src/content/posts.ts` to include the metadata associated with your new post.
2. Add a new MDX document within the `web/src/content/posts` directory making sure to name it the same as the `slug` you used in your metadata `posts` entry.
3. If you want to include any images which aren't already hosted on some third party platform then please add then to a new directory within `web/public/images/blogs`. This new directory should again be named the same as the `slug`. You can name your image files whatever you like. You can then reference these images like so: `src="/images/blogs/your-new-slug/image_file_name.png`.
4. If this is your first time authoring a blog post here then you will also need to add your details to the `authors` list in `web/src/content/authors.ts`. Again if your profile picture is not already hosted on some third party platform then please add it into the `web/public/images/authors` directory.

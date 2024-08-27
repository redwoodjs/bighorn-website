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

---

# Writing a Blog Post
If you want to write a blog post, feel free to create an Issue with a `blog post` label and assign it to yourself. Once you've written the post, create a Pull Request.

All the blog posts are within the `web/src/content/posts` directory. The file should be an `.mdx` file, using the slug for there filename. For example, `my-blog-post.mdx`.

Currently, we're not using frontmatter.

Also, add the post to the `web/src/content/posts.ts` file. This is where we're storing the metadata for each post. Add an object with all your metadata
to the `posts` array:

```
{
  slug: 'bighorn-update',
  title: 'Bighorn Update',
  brief:
    "Nine months ago, the RedwoodJS team decided to go all-in on React Server Components. The first version of Redwood that fully supports RSC will begin the Bighorn epoch. Today I'm excited to bring you an update on our work towards that goal.",
  tags: ['redwoodjs'],
  publishedAt: new Date('2024-03-24T05:00:00.000Z'),
  author: authors.TomPrestonWerner,
},
```

The `slug` should match the filename of the `.mdx` file.

If you're not listed as an author, add yourself to the `authors.ts` file inside `web/src/content/authors.ts`.

Author avatars are saved inside the `web/public/images/authors` directory and should be at least 200x200 pixels.


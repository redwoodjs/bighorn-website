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

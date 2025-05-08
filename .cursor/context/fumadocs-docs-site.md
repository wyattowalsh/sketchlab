Directory structure:
└── content/
    ├── blog/
    │   ├── 2024-5-15.mdx
    │   ├── 2024-5-16.mdx
    │   ├── customise-ui.mdx
    │   ├── make-a-blog.mdx
    │   ├── mdx-v10-summary.mdx
    │   ├── mdx-v10.mdx
    │   ├── new-conventions.mdx
    │   ├── v12-after.mdx
    │   ├── v12.mdx
    │   ├── v13.mdx
    │   ├── v14.mdx
    │   ├── v15-2.mdx
    │   ├── v15.mdx
    │   └── why-docs.mdx
    ├── docs/
    │   ├── meta.json
    │   ├── cli/
    │   │   ├── index.mdx
    │   │   └── meta.json
    │   ├── headless/
    │   │   ├── custom-source.mdx
    │   │   ├── index.mdx
    │   │   ├── internationalization.mdx
    │   │   ├── meta.json
    │   │   ├── page-conventions.mdx
    │   │   ├── page-tree.mdx
    │   │   ├── props.ts
    │   │   ├── source-api.mdx
    │   │   ├── components/
    │   │   │   ├── breadcrumb.mdx
    │   │   │   ├── index.mdx
    │   │   │   ├── link.mdx
    │   │   │   ├── meta.json
    │   │   │   ├── sidebar.mdx
    │   │   │   ├── toc-example.tsx
    │   │   │   └── toc.mdx
    │   │   ├── content-collections/
    │   │   │   └── index.mdx
    │   │   ├── mdx/
    │   │   │   ├── headings.mdx
    │   │   │   ├── index.mdx
    │   │   │   ├── install.mdx
    │   │   │   ├── meta.json
    │   │   │   ├── rehype-code.mdx
    │   │   │   ├── remark-admonition.mdx
    │   │   │   ├── remark-image.mdx
    │   │   │   ├── remark-ts2js.mdx
    │   │   │   └── structure.mdx
    │   │   ├── search/
    │   │   │   ├── algolia.mdx
    │   │   │   ├── index.mdx
    │   │   │   ├── orama-cloud.mdx
    │   │   │   ├── orama.mdx
    │   │   │   └── trieve.mdx
    │   │   └── utils/
    │   │       ├── find-neighbour.mdx
    │   │       ├── get-toc.mdx
    │   │       ├── git-last-edit.mdx
    │   │       ├── index.mdx
    │   │       └── meta.json
    │   ├── mdx/
    │   │   ├── async.mdx
    │   │   ├── collections.mdx
    │   │   ├── global.mdx
    │   │   ├── include.mdx
    │   │   ├── index.mdx
    │   │   ├── last-modified.mdx
    │   │   ├── mdx.mdx
    │   │   ├── meta.json
    │   │   ├── page.mdx
    │   │   ├── performance.mdx
    │   │   ├── plugin.mdx
    │   │   └── props.ts
    │   ├── openapi/
    │   │   ├── index.mdx
    │   │   └── meta.json
    │   └── ui/
    │       ├── comparisons.mdx
    │       ├── customisation.mdx
    │       ├── index.mdx
    │       ├── internationalization.mdx
    │       ├── manual-installation.mdx
    │       ├── meta.json
    │       ├── page-conventions.mdx
    │       ├── props.ts
    │       ├── search.mdx
    │       ├── static-export.mdx
    │       ├── theme.client.tsx
    │       ├── theme.mdx
    │       ├── what-is-fumadocs.mdx
    │       ├── (integrations)/
    │       │   ├── feedback.mdx
    │       │   ├── llms.mdx
    │       │   ├── open-graph.mdx
    │       │   ├── python.mdx
    │       │   ├── typescript.mdx
    │       │   └── openapi/
    │       │       ├── configurations.mdx
    │       │       ├── index.mdx
    │       │       ├── meta.json
    │       │       └── proxy.mdx
    │       ├── components/
    │       │   ├── accordion.mdx
    │       │   ├── auto-type-table.mdx
    │       │   ├── banner.mdx
    │       │   ├── dynamic-codeblock.mdx
    │       │   ├── files.mdx
    │       │   ├── github-info.mdx
    │       │   ├── image-zoom.mdx
    │       │   ├── index.mdx
    │       │   ├── inline-toc.mdx
    │       │   ├── server-codeblock.tsx
    │       │   ├── steps.mdx
    │       │   ├── tabs.client.tsx
    │       │   ├── tabs.mdx
    │       │   └── type-table.mdx
    │       ├── layouts/
    │       │   ├── docs.mdx
    │       │   ├── home-layout.mdx
    │       │   ├── notebook.mdx
    │       │   ├── page.mdx
    │       │   └── root-provider.mdx
    │       ├── markdown/
    │       │   ├── index.mdx
    │       │   ├── math.mdx
    │       │   ├── mermaid.mdx
    │       │   └── twoslash.mdx
    │       ├── mdx/
    │       │   ├── codeblock.mdx
    │       │   └── index.mdx
    │       └── navigation/
    │           ├── index.mdx
    │           ├── links.mdx
    │           └── sidebar.mdx
    └── shared/
        ├── llms.ts
        └── page-conventions.i18n.mdx

================================================
FILE: apps/docs/content/blog/2024-5-15.mdx
================================================
---
title: How Fumadocs works
description: The framework for building documentation
author: Fuma Nama
---

1 year ago, I was having fun with Next.js App Rouer.
While experimenting it on my toy [No Deploy](https://nodeploy-neon.vercel.app), I planned to build a documentation.
However, Nextra does not support App Router.

To handle this, I implemented a small documentation site with solely Contentlayer and the new features from App Router.
It was working great, looks blazing-fast and minimal.
I cloned the logic from No Deploy and built this documentation framework.
With a few months of development, it soon became powerful and stable.

It was originally named `next-docs`, I renamed it to Fumadocs as it conflicts with Next.js Docs.

Thanks to the support from **Next.js** community, I've received a lot of suggestions along the way.
[Fumadocs](https://fumadocs.vercel.app) is now a framework used by my libraries and some other amazing projects.

## My Opinion

In Web development, most _"robust"_ frameworks/libraries are incredibly heavy and fabulous, but it indeed made our developer experience fancy.

On the top of Javascript, people built bundlers, transpilers, and even Typescript.
It feels very surprisingly that Javascript, a high-level scripting language, is more similar to assembly code in modern Web development.
We rarely use them without things like Webpack. This also applies to CSS, at least as my experience, I seldom use CSS without PostCSS.

While they might be necessary for compatibility and DX, the landing of React Server Component and Next.js App Router made the experience even more mindblowing.
It feels like magic. The cunning magical frameworks, and web development miracles.
This kind of design is insane, but it also makes us mindlessly forget the boundaries.

Beginners use Metadata API, while they have no idea how meta tag works.
They put server-side logic in a server component, while they have no idea how expensive the calculation is.
Even when we looked at the code, we can't predict the result without running it in production mode.
I saw too many of these misconceptions.

This happens on many frameworks, they are overly magical.
**I wanted to make it less-magic, and straightforward at least for most Next.js developers.**

## Fumadocs MDX

As the recommended content source, It is actually a webpack hack.
Since Next.js could only optimize static imports, it first transform your `.map.ts` to a file that roughly yields:

```ts
export default [import("./my/file.mdx"), ...];
```

And then transform MDX files with a custom loader. It makes all magic possible, but it doesn't have the ability of lazy-loading MDX files.
Comparing to Nextra, it might be a suboptimal approach.

Nextra does it even easier, it directly transforms MDX files into pages. Because the Pages Router adapts Javascript files as a single page, it is possible.
In App Router, this is not possible anymore. Therefore, I didn't take this approach.

## Fumadocs Core

The core of Fumadocs is a bunch of utilities and MDX plugins.

- **Source API** construct page trees from content source, integrated with other content providers.
- **Headless components** accelerate Fumadocs UI and other custom UI implementations.
- **MDX plugins** bring a perfect developer experience to all integrations.
- **Search utilities** make it way easier to implement document search.

In addition, it also established the definitions of Page Tree and Page Conventions.
Over all, it is not yet a framework without Fumadocs UI.

In my opinion, the most valuable part in the codebase are MDX plugins.
I learnt a lot more about ASTs and the eco-system of remark/rehype while working on them.
Absolutely an amazing experience.

## Fumadocs UI

The UI implementation of Fumadocs using Tailwind CSS and Radix UI.
Its design system was inspired by Shadcn UI, using CSS variables for color utilities.

Although the structure of Fumadocs UI is even simpler than core, I've used some subtle hacks to solve the problem of `"use client"` directive.
The bundler I am using, [TSX](https://github.com/privatenumber/tsx), can't handle nested structures like client components imported from a server component.
Therefore, I made a little hack to build server components and client components as an individual entry, then inject import statements after the process.

Also it took me some time to come up with the [preset approach](https://fumadocs.vercel.app/docs/ui/theme#docsui-plugin) for integrating Fumadocs UI with Tailwind CSS projects.

## Docs Generators

We have a few built-in integrations, like `fumadocs-openapi` which takes an OpenAPI schema and output MDX files.

For the OpenAPI one, it simply parse the schema and convert it to MDX file through string templates.

The Typescript integration does a bit more, it obtain type information with [Typescript Compiler API](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API). Based on the information, it yields MDX files.
You can use it inside a server component, which is how `<AutoTypeTable />` works.

## CL/CI

As a project with very few contributors, I built the CL/CI process as convenient as possible for a better efficiency.
The entire release process is handled by [Changesets](https://github.com/changesets/changesets), and I wrote the scripts to update [the template repository](https://github.com/fuma-nama/fumadocs-ui-template) automatically.
It worked great so far.

## Thanks

[The Github repository of Fumadocs](https://github.com/fuma-nama/fumadocs) has reached 300 stars in 2024 March, it is a new achievement for me.
Welcome to give it a star to support my work!

> Original
> https://fuma-nama.vercel.app/blog/fumadocs



================================================
FILE: apps/docs/content/blog/2024-5-16.mdx
================================================
---
title: 500 Stars
description: The first 500 stars of Fumadocs
author: Fuma Nama
---

It was surprising when I first saw [the video from Web Dev Cody](https://youtu.be/7HUmDAgXI2E?si=CR9fC-f3nysPJJCE), it feels like I've finally built something worth mentioning, instead of another neglected side project that nobody cares.

So far I've worked on this project about 1 year, and it is a precious experience to me. The best lecture that you can't find in an university.

## Open Source

I received many feedback, issues and questions. Some are brutal but straightforward, like _"please fix it, help me please"_ _"Support XXX please"_. Some are kind and helpful, willing to provide a PR.
I felt both the good and down sides of open source.

Sometimes, people are being eager and impulsive because of stress and may spread their frustration on the library maintainers.
Even myself, can be affected by stress or a bad mood.

People may hope for instant answers, and maintainers will face questions like _"Why are you running away from my questions?"_.
I understand a library performing bad can cause your precious time to be wasted, but even if we putted all the efforts in maintaining the library, it can't be flawless.

Since then, I feel I'm way more respectful to open-source project maintainers.
At least, I'll check my attribute before firing an issue on somebody else's Github repository, and try to be as respectful as I can ~~with my poor language skills~~.

### Issues

My favourite dev was [Anthony Shew](https://shew.dev), I mentioned him because [the issue he opened](https://github.com/fuma-nama/fumadocs/issues/264) is the best I've ever seen in my open-source career.
He actually cared about my vision and opinion about the API design, and gave a really concise and constructive feature request.

Obviously, I was not a perfect, neither an experienced library dev.
Fumadocs wasn't capable of many things, such a well-explained feature request and idea is powerful. His passion is inspiring.

Before setting up the YAML issue template, there were very few issues that actually followed the issue template, most of them don't even provide a reproducible repository, or an explanation.

**Open a proper issue, follow the instructions, and give maintainers some positive feedback.** This is the biggest motivation you can give to the maintainers without money.

## Docs

It's fun to work on the docs of fumadocs. When first building it, I had very less experience on authoring documentation and tutorial content.
Reading through the feedback from developers, the most common problem is that they can't find the docs of something.

I realized the entire docs is unfriendly for beginners to start with, my friends are senior Next.js devs, and of course they are fine with that.
However, not every dev could understand the docs.

So recently, I started to re-write some of the sections, making it more easier and appealing for beginners. Welcome to share your feedback on Github Discussions!

## What is Next?

Web Development is an ever-evolving industry, but I believe the spirit of open source won't disappear.
I don't know what will I be building in the future, and that doesn't matter.
Let's build a better web!



================================================
FILE: apps/docs/content/blog/customise-ui.mdx
================================================
---
title: Rethink how we customise UI
description: Deep dive on how Fumadocs UI is designed
author: Fuma Nama
date: 2025-04-15
---

## The Problem

Making a docs framework isn't challenging, the hardest problem is how I can make it perfect for everyone, from the perspective of users and developers.
Undoubtedly, this is **a dilemma** for all framework, or even library authors — You cannot write generic code that works out-of-the-box, there's no piece of software that is straight usable while being generic.

For example, headless UI libraries like **Radix UI** gave us the concept of generic UI components: bare UI primitives that we can customise according to our anesthetics.
However, you'll need time to tune them, these primitives are unusable without further customisations.

Yep it's 2025, **Shadcn UI** had led a "revolution" on Web Development. It's a great combination of headless UI and styled defaults that takes the extra step away!
But our problem remains unsolved, it might be preposterous that it becomes "unstyled" again when a vast majority of new sites adopted Shadcn UI.

Personally, I felt overwhelmed by nearly identical, ubiquitous flat designs that is obviously one of the default Shadcn UI styles. It has nothing to do with Shadcn UI, but the rest of developers who don't actually care about aesthetics and uniqueness.
Eventually, **Shadcn-like design became the default styles**, so once again, we will need to do a bit more to make it look stylish.

### What should we do?

As a docs framework started from **"being flexible"**, Fumadocs must be customisable, tuned to meet developer's preference.
We will need to take customisation seriously if DX is what we aim. And most importantly, **it should encourage developers with a sense of beauty to customise.**

## The Solution

Typically, there's two types of developers:

### those who wants a docs that just works

Fumadocs need to be opinionated by default such that it is immediately usable, and we only have to offer simplest options to change details. (e.g. colors, overriding components).

Most developers have no desire to install dozens of components just to change a tiny detail, that made the Shadcn approach suboptimal.

### those who needs the perfect docs tailored to their preferences

The kernel of Fumadocs, or the spirit we're pursuing is the latter one. I crafted Fumadocs CLI, a version of Shadcn UI dedicated for Fumadocs, the whole solution is now simplified into a single command:

```package-install
npx @fumadocs/cli customise
```

It considered for two types of needs:

- Customise the default styles when the exposed options are inadequate.
- Roll their own layout from scratch.

The first one is self-evident, people will always have their absurd needs that's not even considered by us.
We can install the original components, so it's simply identical to the default UI which they've been using.

The latter one is simpler, we can offer the minimal template they can start customising from.

This methodology inspired by ejection brings some nice advantages:

#### Don't break anything when you upgrade Fumadocs

Fumadocs need to be opinionated. Hence, we need to iterate the UI frequently which apparently will break people's hacky customisations.
The charm of Fumadocs CLI is that once you've installed the layout, it stays the same forever regardless of future iterations on Fumadocs UI.

It gives the courage for Fumadocs UI to iterate, and developers to customise unburnt by the fear of upgrading dependencies.

#### Looks Clean

Just like Shadcn UI and Radix UI, Fumadocs UI has a core package (`fumadocs-core`), most generic logic will be abstracted by core.

## What is Next?

The innovation of Shadcn UI is amazing, yet, I believe there's more problems Fumadocs can solve.

See [Flags SDK](https://flags-sdk.dev/frameworks/next) and [BetterAuth](https://www.better-auth.com/docs/introduction), you can't tell at the first glance if they're powered by Fumadocs.
I hope it can continue to be a breakable framework known for how customisable it is.



================================================
FILE: apps/docs/content/blog/make-a-blog.mdx
================================================
---
title: Making a Blog with Fumadocs
description: Fumadocs + Blog
author: Fuma Nama
date: 2024-12-15
---

Fumadocs is a docs framework, but it's also a powerful tool to manage content in Next.js. You can use Fumadocs to build a blog site along with docs, on a single Next.js app.

## Overview

This guide helps you to build a blog site with Fumadocs and Fumadocs MDX.

We will use Fumadocs MDX to manage the content, and implement our own UI with Tailwind CSS & Fumadocs UI.

### Configure Content

Define a `blogPosts` collection.

```ts title="source.config.ts"
import { defineCollections, frontmatterSchema } from 'fumadocs-mdx/config';

export const blogPosts = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  // add required frontmatter properties
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()),
  }),
});
```

Parse the output collection in `source.ts`:

```ts title="lib/source.ts"
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { blogPosts } from '@/.source';

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts),
});
```

You can now access the content from `blog`.

### Implement UI

Create an index page for blog posts.

By default, there should be a `(home)` route group with `<HomeLayout />` inside.
Let's put the blog pages under it, this way we can get the nice navbar on our blog site.

```tsx title="app/(home)/blog/page.tsx"
import Link from 'next/link';
import { blog } from '@/lib/source';

export default function Home() {
  const posts = blog.getPages();

  return (
    <main className="grow container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Latest Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="block bg-fd-secondary rounded-lg shadow-md overflow-hidden p-6"
          >
            <h2 className="text-xl font-semibold mb-2">{post.data.title}</h2>
            <p className="mb-4">{post.data.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
```

<Callout title='Good to Know'>

Colors like `text-fd-muted-foreground` are from the design system of Fumadocs UI, you may also use your own colors, or use Shadcn UI.

</Callout>

And create a page for blog posts.

Note that blog posts won't have nested slugs like `/slug1/slug2`, we don't need a catch-all route for blog posts.

```tsx title="app/(home)/blog/[slug]/page.tsx"
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { blog } from '@/lib/source';

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const Mdx = page.data.body;

  return (
    <>
      <div className="container rounded-xl border py-12 md:px-8">
        <h1 className="mb-2 text-3xl font-bold">{page.data.title}</h1>
        <p className="mb-4 text-fd-muted-foreground">{page.data.description}</p>
        <Link href="/blog">Back</Link>
      </div>
      <article className="container flex flex-col px-4 py-8">
        <div className="prose min-w-0">
          <InlineTOC items={page.data.toc} />
          <Mdx components={defaultMdxComponents} />
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <div>
            <p className="mb-1 text-fd-muted-foreground">Written by</p>
            <p className="font-medium">{page.data.author}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-fd-muted-foreground">At</p>
            <p className="font-medium">
              {new Date(page.data.date).toDateString()}
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
```

And configure metadata:

```tsx title="app/(home)/blog/[slug]/page.tsx"
import { notFound } from 'next/navigation';
import { blog } from '@/lib/source';

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
```

### Write Posts

The UI is now completed, you can write some blog posts under the `content/blog` directory, like:

```mdx title="content/blog/hello.mdx"
---
title: Hello World
author: Fuma Nama
date: 2024-12-15
---

## Hello World

This is an example!
```

Spinning up the development server with `next dev`, you should see the blog posts under `/blog` route.



================================================
FILE: apps/docs/content/blog/mdx-v10-summary.mdx
================================================
---
title: Fumadocs MDX v10 Summary
description: Migration Guide and Summary
date: 2024-11-24
author: Fuma Nama
---

## Features

- More customisations via `source.config.ts`, a new config file for your content.
- Introduced **collections**.
- Turbopack support.
- Build-time data validation support.

## Migrate from v9

### Refactor Imports

Refactor the import in `next.config`.

**From:**

```ts
import createMDX from 'fumadocs-mdx/config';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);
```

**To:**

```ts
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);
```

### Remove `mdx-components.tsx`

`mdx-components.tsx` is no longer used. It now allows only MDX components passed from `MDX` body's `components` prop.

```tsx
import defaultMdxComponents from 'fumadocs-ui/mdx';

const MDX = page.data.body;

// set your MDX components with `components` prop
<MDX components={{ ...defaultMdxComponents }} />;
```

This encouraged explicit import of MDX components.

Previously, `mdx-components.tsx` worked by injecting an import to every compiled Markdown/MDX file.
It's a little unnecessary because you can always import the components explicitly, or replace default HTML tags like `img` from MDX body's `components` prop.

### Define Collections

Collection is now introduced on source config file (`source.config.ts`).
It refers to a collection of files/content, like Markdown files, or JSON/YAML files.

Every collection has its own config, you can have customised Zod schema to validate its data, or collection-level MDX options for content collections.

You can create a source config file, and add the following:

```ts
import { defineDocs } from 'fumadocs-mdx/config';

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
});
```

`defineDocs` declares two collections, one with `doc` type that scans content files (e.g. `md/mdx`), one with `meta` type that scans meta files (e.g. `json`).

Now you can generate types using `fumadocs-mdx` command, it's recommended to set it as a `postinstall` script.

```json title="package.json"
{
  "scripts": {
    "postinstall": "fumadocs-mdx"
  }
}
```

Starting the development server, a `.source` folder will be generated, it contains all parsed collections/files.
You can add it to `.gitignore`, it will replace the old `.map` file.

To access the collections, import them from the folder with their original name in `source.config.ts`.

```ts
import { docs, meta } from '@/.source';
```

Now to integrate it with Fumadocs framework, change your `source.ts` from:

```ts
import { map } from '@/.map';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';

export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/docs',
  rootDir: 'docs',
  source: createMDXSource(map),
});
```

to:

```ts
import { docs, meta } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs, meta),
});
```

- we now recommend to export the output of `loader` directly as a single variable.
- schema option is no longer defined in `source.ts`, it's handled by `source.config.ts`.
- it takes two collections: `docs` (content) and `meta` (`meta.json`).
  You can leave `meta` as an empty array if it is unused, so you can define only a collection for `docs`.

### `page.data`

When using with `loader`, you no longer need `data.frontmatter` to access frontmatter data.
It is merged into the `page.data` object.

```ts
page.data.frontmatter.title; // [!code --]
page.data.title; // [!code ++]
```

### MDX Options

Instead of passing them to `next.config` file, define a global config in `source.config.ts`:

```ts
import { defineConfig } from 'fumadocs-mdx/config';

export default defineConfig({
  mdxOptions: {
    // here!
  },
});
```

### Collection Schema

The `schema` option of collection allow you to customise the validation schema, it accepts a Zod type.

For `defineDocs`, see [`schema`](/docs/mdx/collections#schema-1).

### Multiple Types

Same as before, you can call `loader` multiple times for different types (e.g. for docs and blog).

```ts
import { createMDXSource } from 'fumadocs-mdx';
import type { InferMetaType, InferPageType } from 'fumadocs-core/source';
import { loader } from 'fumadocs-core/source';
import { meta, docs, blog as blogPosts } from '@/.source';

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs, meta),
});

export const blog = loader({
  baseUrl: '/blog',
  // as mentioned before, you can leave `meta` an empty array
  source: createMDXSource(blogPosts, []),
});

export type DocsPage = InferPageType<typeof source>;
export type DocsMeta = InferMetaType<typeof source>;
```

and the corresponding `source.config.ts`:

```ts
import {
  defineDocs,
  defineCollections,
  frontmatterSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
});

export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()).optional(),
  }),
});
```

### Further Readings

You can read the latest docs of Fumadocs MDX for details.

<Cards>
  <Card href="/docs/mdx" title="Fumadocs MDX">
    The built-in content source, build a better content experience on Next.js.
  </Card>
</Cards>



================================================
FILE: apps/docs/content/blog/mdx-v10.mdx
================================================
---
title: Fumadocs MDX v10
description: Improvement over Fumadocs MDX, our built-in content source.
date: 2024-09-06
author: Fuma Nama
---

## The Problem

Fumadocs MDX worked great for docs. But we also want to prioritize flexibility and code organization.

Previously, it was a simple Webpack loader that turns **MDX** into **JavaScript**.
You pass the MDX processor options to the loader, it turns them into JavaScript files.
Then, a `.map.ts` will be exported:

```ts
export const map = {
  'docs/index.mdx': import('./docs/index.mdx'),
  'docs/guide.mdx': import('./docs/guide.mdx'),
};
```

Your Next.js app will import the map file, and access the available MDX files.

This model works, but we started to see some problems:

- **No built-in way to define multiple collections:**

  For example, we have a directory for blog posts and a directory for docs pages.

  On Fumadocs MDX, all these resources are transformed into a single object exported by `.map.ts`:

  ```ts
  export const map = {
    'blog/post.mdx': import('./blog/post.mdx'),
    'docs/index.mdx': import('./docs/index.mdx'),
  };
  ```

  We implemented a solution using Source API `rootDir` option, but this is not the ideal way.
  This also gave us another problem:

- **Different MDX Options for each collection:**

  Same as the above example, we have a `/blog` directory for blog posts.
  If we want to add a remark plugin that **only work on blog posts**, this is impossible with Fumadocs MDX.

  Once you apply a remark plugin, it's effective on all MDX files, including the MDX files in the docs directory.

- **Turbopack Compatibility:**

  Turbopack doesn't allow passing unserializable options to loaders.
  However, the entire MDX, remark and rehype ecosystem use functions for plugins.
  Functions are not serializable, we cannot migrate Fumadocs to Turbopack unless we find a seamless solution that supports Turbopack.

- **Compile-time validation:**

  All schema validation cannot be done during build time because the MDX loader actually, _doesn't know the collections you defined in `source.ts`._

  Furthermore, the Zod schema is passed to the source adapter in `source.ts` rather than the loader:

  ```ts
  import { loader } from 'fumadocs-core/source';
  import { createMDXSource } from 'fumadocs-mdx';

  export const source = loader({
    source: createMDXSource(map, {
      // schema
    }),
  });
  ```

  This loses some performance optimizations that can be possibly done on bundler level.

- **Untyped:**

  The exported `map` object from `.map.ts` file has a type of `unknown`, it is only typed when using it with Source API `loader`.

  This avoided the complexity to auto-generate types, but I wanted to make it typed and usable without Source API.

### The Solution

Taking some references from Content Collections and [Velite](https://velite.js.org), I found it would be great to have a config file for Fumadocs MDX.

#### `source.config.ts`

We can make the syntax similar to Content Collections and other tools, to make the adoption process easier.
To define a collection:

```ts
import { z } from 'zod';

export const blog = defineCollections({
  dir: './blog',
  schema: z.object({
    // the schema
  }),
  mdxOptions: {
    // remark plugins?
  },
});
```

The MDX loader reads the config file, find the corresponding collection of the file, validate, and compile it using the options from collection.

This allows us to pass MDX options normally without breaking Turbopack's rules.

### The Implementation

As the config file is written in TypeScript, we will need a bundler to read it.
I used esbuild, it is a performant bundler written in Go.

After bundling the config file, a dynamic import will work as expected.

```js
await import('./source.compiled.mjs');
```

#### `.map` file

We need a place to import the compiled collections.
Previously, we simply generate a `.map.ts` file with Webpack plugins.
It declares the types, with no actual data.

```ts
export declare const map: unknown;
```

A loader will be used to transform `.map.ts` file into the output aforementioned:

```ts
export const map = {
  'docs/index.mdx': import('./docs/index.mdx'),
  'docs/guide.mdx': import('./docs/guide.mdx'),
};
```

The generated `.map.ts` never changes because it doesn't depend on the config file.
No matter how you configure it, there'll be only a `map` object exported, with a type of `unknown`.

Now, we need to generate types for every collection, and the types may change as we change the collections.
The previous approach is no longer applicable.

I renamed the `.map.ts` file to `.source/index`, both `index.d.ts` and `index.js` are generated by Fumadocs MDX, instead of using a loader.

A map file generator is implemented, it reads the config file and generate output based on exported collections.

#### Auto-reload

We want to watch for changes:

- When a input file added/removed, add or remove relevant entries from the `.source/index.js` file.
- When the config file changed, re-compile affected files, and update generate types at `.source/index.d.ts`.

I chose chokidar to watch file changes, it worked well.
The file watcher lives on `next.config.mjs`, it's independent to the MDX loader.

To notify bundlers when config files changed, we added a **hash**.

```ts
export const collection1 = [import('./docs/index.mdx?hash=hashOfConfigFile')];
```

The file will be re-compiled as the config hash changes.

To optimize performance, we also added the collection name.

```ts
export const collection1 = [
  import('./docs/index.mdx?hash=hashOfConfigFile&collection=collection1'),
];
```

The loader obtains the collection of input file from resource query, without taking extra steps to detect its associated collection.

### Result

A `.source/index` file will be generated, it is fully typed.
The files will be re-compiled as you modify the config file.

- Turbopack supported, we have a small example in the repo using Turbopack.
- Multiple Collections, with its own MDX options.
- Runtime + Build-time validation & transformation.

### Questions

I think there is still room for improvement:

- Use a Turbopack-native thing to bundle the config file?
- Lazy bundle/import the main body of MDX file?

Please give me feedback about the redesign of Fumadocs MDX ;)



================================================
FILE: apps/docs/content/blog/new-conventions.mdx
================================================
---
title: Adding new Conventions
description: Some changes on the docs.
date: 2025-04-08
author: Fuma Nama
---

## `mdx-component.tsx`

Sometimes there's questions raised by beginners confused about where to add MDX components.
Although it's simply located in `page.tsx` which shouldn't be difficult to find, I think some kind of conventions may help, so I decided to add back `mdx-components.tsx`.

I love to have fewer files, but considering `create-fumadocs-app` should also act as a starting point for beginners who may not familiar with MDX, it's such more helpful to provide it by default.

### Existing Projects

The convention is optional (only to make the learning curve smoother).
For existing users, you probably knew how to pass MDX components, and no further change is needed.

But you can still make one:

```tsx title="mdx-components.tsx"
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
  };
}
```

And use it in your MDX component.

```tsx title="page.tsx"
import { getMDXComponents } from '@/mdx-components';

<MDXContent
  components={getMDXComponents({
    // extend it
  })}
/>;
```

## Deprecating `<I18nProvider />`

We now prefer a single `<RootProvider />` for everything, replacing the need of `<I18nProvider />` with a `i18n` prop.

```tsx
<RootProvider
  i18n={
    // i18n provider props
  }
>
  {children}
</RootProvider>
```

This allows Root Provider to handle the hierarchy correctly without revealing too much complexity, for example, the correct order should be:

```tsx
<FrameworkProvider>
  <ThemesProvider>
    <I18nProvider>
      <SidebarProvider>
        <SearchProvider>{children}</SearchProvider>
      </SidebarProvider>
    </I18nProvider>
  </ThemesProvider>
</FrameworkProvider>
```

Changing the hierarchy of different providers may result in problems since they actually rely on each other, now it is all integrated into `<RootProvider />`, including I18n configuration.

The new [Internationalization](/docs/ui/internationalization) guide requires Fumadocs 15.2.3 or above.



================================================
FILE: apps/docs/content/blog/v12-after.mdx
================================================
---
title: Fumadocs 12.0.5
description: After the release of Fumadocs 12
date: 2024-06-13
author: Fuma Nama
---

## Some Improvements

After releasing Fumadocs 12, some improvements are made to the new UI.

### TOC Popover

Previously, this was only available on larger devices. Now, it's collapsed to a popover on smaller devices.

<div className='mx-auto max-w-[400px]'>

![Preview](/blog/toc-popover.png)

</div>

### Links Menu

To make the sidebar looks even better, we moved navigation links to the links menu (the three-dots button at the top corner).

The recommended design is:

- Docs related links: Use `<RootToggle />` or include it in page trees.
- Other links: Use the Links API of docs layout.

<div className='mx-auto max-w-[400px]'>

![Preview](/blog/links-menu.png)

</div>

### Breadcrumbs

Removed the duplicated page name from breadcrumbs, now it only shows the folder names.
Also, you can enable `includeSeparators` to show separators on your breadcrumbs component.

The new breadcrumbs look cleaner and match the design even better.

## Adaption

Some docs sites such as https://yeecord.com and https://turbo.build adapted the new UI, I'm very excited about it.
Removing the navbar seemed to be a very risky move to me, almost no documentation framework had made it, and I was expecting some complaints about the new design.

Luckily, most people are satisfied about the new UI.
The new design was originally inspired by Arc, their sidebar looked very impressive to me.
Although I soon discovered the docs site of Linear also doesn't have a navbar, Arc is still the first inspiration of the redesign.

I'm grateful that many people gave me their feedback about the new design, so that I can keep making Fumadocs a better framework to use.
Let's make a better docs.



================================================
FILE: apps/docs/content/blog/v12.mdx
================================================
---
title: Fumadocs 12
description: Introduce Fumadocs v12
date: 2024-06-09
author: Fuma Nama
---

## What's New?

Fumadocs v12 mainly aims to improve the UI, prioritizing content and reading experience.

### New UI

After observing large docs sites like https://turbo.build, I found the navbar took too much space on the screen, while it only contains links to Blog, Showcase, GitHub, etc.
They are not necessarily related to the docs, placing them at the top of our screen doesn't bring a better reading experience.

All these links are now moved to sidebar, allowing a clean, minimal view of docs.

![Preview](/blog/v12.png)

I also noticed the docs start to look messy as your content grows. To ameliorate this, the sidebar now includes a border and background by default.
This helps readers to distinguish navigation elements and content easier.

The sidebar will always be placed at the left of screen, having a bigger space on large viewports.

I believe the new UI still has room for improvement. Welcome to report UI issues, or leave a feedback!

### Better Multi Page Trees

We supported multiple page trees at a very early version of Fumadocs. However, it lacks of proper explanations and guides to configure it.
In the past, you need to implement a navigation element to switch between page trees. And mark the folder as a root folder.

Now, you can use the `<RootToggle />` component directly, and docs has a better explanation of it.

<div className="flex flex-row justify-center mx-auto max-w-[300px]">
  ![Preview](/blog/v12-root-toggle.png)
</div>

### Page Tree Post Processors

You can now attach properties to page trees easily with the Source API.

```ts
import { loader } from 'fumadocs-core/source';

export const utils = loader({
  pageTree: {
    attachFile(node) {
      // modify the node
      return node;
    },
  },
});
```

### Improved i18n Support

The language switch is now added to Docs Layout.

```tsx
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DocsLayout i18n>{children}</DocsLayout>;
}
```

Note that `<LanguageSelect />` component is now replaced by `<LanguageToggle />`, make sure to remove references to the old component.

## Breaking

### UI

Remove deprecated option `enableThemeProvider` from Root Provider. Use `theme.enabled` instead.

### Core

Remove deprecated option `minWidth` from Sidebar component. Use `blockScrollingWidth` instead

## Fixes

### UI

- Fix problems with twoslash codeblocks
- Apply typography styles to headings
- Support translation for theme label

### OpenAPI

- Fix nullable types cannot be detected

### Core

- Remark Headings: Support code syntax in headings

### Create Fumadocs App

- Add `layout.config.tsx` file for sharing layout options



================================================
FILE: apps/docs/content/blog/v13.mdx
================================================
---
title: Fumadocs v13
description: Introducing Fumadocs v13
author: Fuma Nama
date: 2024-07-28
---

## Introduction

Fumadocs v13 has released. It aims to fix the CSS pollution problem and remove deprecated APIs.

## New Features

### Better Code Blocks

Supported to keep the original background generated by Shiki on `CodeBlock` component.

```tsx
import { Pre, CodeBlock } from 'fumadocs-ui/components/codeblock';

<MDX
  components={{
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock keepBackground {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
  }}
/>;
```

### Callout

Callout is now a default MDX component, you can use it in MDX files without an import, or manually adding it to MDX components.

```mdx
<Callout type="warn">Hello World</Callout>
```

### New Headless TOC

The headless component of Table of Contents (TOC) now separated the scroll container provider.

```tsx
import * as Base from 'fumadocs-core/toc';

return (
  <Base.AnchorProvider>
    <Base.ScrollProvider>
      <Base.TOCItem />
      <Base.TOCItem />
    </Base.ScrollProvider>
  </Base.AnchorProvider>
);
```

The anchor provider can be placed anywhere.

### Opt-out of Container

Supported to disable the default container styles of Tailwind CSS added by Fumadocs UI.

```js
import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    createPreset({
      modifyContainer: false,
    }),
  ],
};
```

### Admonition Syntax

In Docusaurus, there's an [Admonition syntax](https://docusaurus.io/docs/markdown-features/admonitions).

For people migrating from Docusaurus, you can enable the new remark plugin to support the Admonition syntax.

See [Remark Admonition](/docs/headless/mdx/remark-admonition).

## Breaking Changes

### Prefix to colors, animations, and utilities

Previously, the Tailwind CSS plugin of Fumadocs UI adds colors (including `primary`, `secondary`) which conflicts with Shadcn UI and other design systems.
A `fd-` prefix is added to them to allow the flexibility to have a separated design system on docs.

To use the Fumadocs UI colors on your primary app, enable the `addGlobalColors` option.

```js
import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    createPreset({
      addGlobalColors: true,
    }),
  ],
};
```

This adds the colors without the `fd-` prefix.

Or you can just reference them with the `fd-` prefix, like `bg-fd-background`.

### Tailwind CSS Plugin ESM-only

Since Tailwind CSS supported TypeScript configuration, it makes sense to migrate the entire plugin to ESM.

Use ESM syntax in your configuration.

```ts
import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{ts,tsx}',
    // others
  ],
  presets: [createPreset()],
};
```

### Remove `RollButton` component

`RollButton` was introduced because there were no "Table Of Contents" on mobile viewports.
Now users can use the TOC Popover to switch between headings, it is no longer a suitable design for Fumadocs UI.

You may copy the [last implementation of `RollButton`](https://github.com/fuma-nama/fumadocs/blob/fumadocs-ui%4012.5.6/packages/ui/src/components/roll-button.tsx).

### Better i18n

Now the `I18nProvider` component requires the `locale` prop instead of parsing it from pathname.
This fixed some bugs with the I18n middleware.

We also changed the usage of `translations` to reduce extra translations loaded on client side.
You have to pass the active translations directly.

`locales` is passed as the available options on the Language Select component.

```tsx
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import { I18nProvider } from 'fumadocs-ui/i18n';

export default function Layout({
  params: { lang },
  children,
}: {
  params: { lang: string };
  children: ReactNode;
}) {
  return (
    <html lang={lang}>
      <body>
        <I18nProvider
          locale={lang}
          // options
          locales={[
            {
              name: 'English',
              locale: 'en',
            },
            {
              name: 'Chinese',
              locale: 'cn',
            },
          ]}
          // translations
          translations={
            {
              cn: {
                toc: '目錄',
              },
            }[lang]
          }
        >
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
```

### Code Block Usage

The previous usage was confusing, some props are passed directly to `pre` while some are not.

With v13, pass all props to the `CodeBlock` component.
This also includes class names, you may change your custom styles if necessary.

```tsx
import { Pre, CodeBlock } from 'fumadocs-ui/components/codeblock';

<MDX
  components={{
    // HTML `ref` attribute conflicts with `forwardRef`
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
  }}
/>;
```

### Remove Deprecated APIs

- Remove deprecated `fumadocs-ui/components/api` components.
- Replace `secondary` link items with `icon` link items.
- Rename `id` prop on Tabs component to `groupId`.

## Bug Fixes

### UI

- Fixed empty folder animation problems caused by Radix UI.



================================================
FILE: apps/docs/content/blog/v14.mdx
================================================
---
title: Fumadocs v14
description: Introducing Fumadocs v14
author: Fuma Nama
date: 2024-09-19
---

## Why?

Taking some inspirations from [Shadcn UI](https://ui.shadcn.com), I decided to make Fumadocs easier to use, with more APIs that simplify the design.

This is a large update.

## New Features

### Fumadocs CLI

Clone Fumadocs UI components to your workspace and modify them.

```package-install
npm install @fumadocs/cli --save-dev
```

```bash
pnpm fumadocs add
```

See [docs](/docs/cli) for details.

### Sidebar Tabs

Previously, multiple page tree is implemented with Fumadocs UI `RootToggle` component.
You have to add it to the sidebar banner which isn't as intuitive as other APIs.

With Sidebar Tabs, by creating a root folder, Fumadocs will immediately add a tabs component to the sidebar.

```json title="meta.json"
{
  "root": true,
  "title": "Tab Name",
  "description": "Some text about the tab",
  "icon": "IconName"
}
```

### Orama

We migrated the built-in search from Flexsearch to Orama, the same search engine that powers the Node.js docs site.
It is open source, and also have their Cloud integration.

No changes required.
You can use our new `createFromSource` API to create the route handler, which offers i18n support without any configurations.

```ts
import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const { GET } = createFromSource(source);
```

In favour of this, the new search client of Fumadocs is introduced with support for different API clients.
This includes Algolia, Orama (static and dynamic with route handlers).

```ts
import { useDocsSearch } from 'fumadocs-core/search/client';

const client = useDocsSearch({
  type: 'static',
});
```

See [Search API](/docs/headless/search).

### Static Search

For sites with static export, you cannot use route handlers.
We now support client-side search using search indexes generated during build time.

See [Static Search](/docs/headless/search/orama#static-export).

### Less Dependencies

I'm always working to reduce the dependencies required for Fumadocs, that is one reason why we separated Fumadocs into different packages.

Fumadocs UI now bundles icons from `lucide-react`, for Next.js apps that is not using Lucide, they can avoid downloading the entire icon library.

And `swr` is no longer used for search client, we implemented a light `useQuery` hook with extra care on React performance optimization.

### New Metadata Image API

To improve code organization, we made a Metadata Image API on Fumadocs Core.
It is a tiny wrapper over Next.js Metadata API, composes seamlessly with Source API.

```ts title="lib/metadata.ts"
import { createMetadataImage } from 'fumadocs-core/server';
import { source } from '@/lib/source';

export const metadataImage = createMetadataImage({
  imageRoute: '/docs-og',
  source,
});
```

```ts title="route.ts"
import { generateOGImage } from 'fumadocs-ui/og';
import { metadataImage } from '@/lib/metadata';

export const GET = metadataImage.createAPI((page) => {
  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: 'My App',
  });
});

export function generateStaticParams() {
  return metadataImage.generateParams();
}
```

```tsx title="page.tsx"
import { source } from '@/lib/source';
import { metadataImage } from '@/lib/metadata';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return metadataImage.withImage(page.slugs, {
    title: page.data.title,
    description: page.data.description,
  });
}
```

In favour of this, the `getImageMeta` function from `fumadocs-ui/og` has been removed.

### Shorthands

As you may notice, we introduced more abstractions to reduce the setup steps required for enabling some features.
It is also required for the code generator from Fumadocs CLI to work.

Like the `generateParams` function, it enables zero-configuration i18n support for Next.js `generateStaticParams`.

```ts
import { source } from '@/lib/source';

export function generateStaticParams() {
  return source.generateParams();
}
```

### Better Card Component

Fumadocs UI Card can now support usage without `href`.
You can pass children as React node, Typography styles will be applied correctly.

```mdx
<Card icon={<Database />} title='Content Source'>

The input/source of your content, it can be a CMS, or local data layers like [Content Collections](https://www.content-collections.dev) and [Fumadocs MDX](/docs/mdx).

</Card>
```

### Better Category Component

The original `DocsCategory` component was copied from our official docs, which is a very simple implementation that doesn't take page tree into account.

Now it accepts the source object via `from` prop.

```tsx title="page.tsx"
import { source } from '@/lib/source';
import { DocsCategory } from 'fumadocs-ui/page';

const page = source.getPage(params.slug);

<DocsCategory page={page} from={source} />;
```

By default, it takes the `locale` property from `page` to find the corresponding page tree to traverse.
You can also force a page tree.

```tsx title="page.tsx (i18n enabled)"
import { source } from '@/lib/source';
import { DocsCategory } from 'fumadocs-ui/page';

const page = source.getPage(params.slug, params.lang);

<DocsCategory page={page} from={source} tree={source.pageTree['en']} />;
```

### OpenAPI Tag Display Name

Change the display name with `x-displayName`.

```yaml title="openapi.yaml"
tags:
  - name: test
    description: this is a tag.
    x-displayName: My Test Name
```

### Better TypeScript Docs Automation

The `AutoTypeTable` component now supports a `type` prop, you can use TypeScript inside the field:

```mdx
<AutoTypeTable
  path="file.ts"
  name="B"
  type={`
import { ReactNode } from "react"
export type B = ReactNode | { world: string }
`}
/>
```

And code highlighting in typedoc is also supported with Shiki.

We **highly recommend** to use `createTypeTable` instead of importing the component in MDX files, this allows a single instance of TypeScript Compiler API to be shared.
See [Auto Type Table](/docs/ui/components/auto-type-table).

### Next.js 15

Fumadocs v14 is compatible with Next.js 15, supporting sync and async usages of dynamic APIs.

<Callout type="info" title="Backward compatible">
  Next.js 14 is also supported, notice that guides/tutorials in the docs are
  mainly for Next.js 15.
</Callout>

## UI Improvements

### Navbar Links

The navigation menu on Home layout is redesigned, with better animation and flexibility.

See the [new API](/docs/ui/navigation).

![New Navbar](/blog/v14-navbar.png)

### Link Styles

You can escape Tailwind CSS Typography styles for the `a` tag with `data-card` attribute.

```jsx
<a data-card="">
  No styles applied <code>But it does</code>
</a>
```

### Disable Theme Switch

You can disable the default theme switcher with `disableThemeSwitch` on layouts.

## Breaking Changes

### Move `dir` option from `defineDocs`

```ts
import { defineDocs } from 'fumadocs-mdx/config';

export const { docs, meta } = defineDocs({
  dir: 'my/content/dir', // define once
});
```

### Refactor Imports

**Previous**

```ts
import { DocsLayout } from 'fumadocs-ui/layout';
import { HomeLayout } from 'fumadocs-ui/home-layout';
import { HomeLayoutProps } from 'fumadocs-ui/home-layout';
```

**New Import Path**

```ts
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
```

### Twoslash UI

We moved Twoslash UI components to `fumadocs-twoslash`.
This isolates some logic from Fumadocs UI, allowing a better code organization.

Import the CSS styles and `Popup` component differently.

```ts
import 'fumadocs-twoslash/twoslash.css';

import { Popup } from 'fumadocs-twoslash/ui';
```

<Callout>It requires Tailwind CSS.</Callout>

### Remove Deprecated APIs

The previous `createI18nSearchAPIExperimental` is now renamed to `createI18nSearchAPI`.
It takes the i18n config instead of scattering the options everywhere.

The types from `fumadocs-core/search/shared` is moved to `fumadocs-core/server`.



================================================
FILE: apps/docs/content/blog/v15-2.mdx
================================================
---
title: Fumadocs v15.2
description: From Next.js only to Next.js first.
date: 2025-03-28
author: Fuma Nama
---

## Overview

Fumadocs 15.2 introduces a layer over `fumadocs-core` to extend support to other React frameworks, including React Router and Tanstack Start. Other frameworks can also be supported using the `FrameworkProvider` from `fumadocs-core/framework/base`.

### Why?

The main focus of Fumadocs is flexibility, I aim to support more frameworks as long as it doesn't change the fundamentals of Fumadocs, like the separation of core and UI package.

The React.js ecosystem is a joy to work with, porting Fumadocs to other frameworks isn't as difficult as I thought.
It's also my goal to make it works not only for Next.js devs, but also everyone in the ecosystem who is using a SSR-compatible React framework.

### Breaking Changes

This is a minor release, it shouldn't break any previous usages unless you're relying on the lower level APIs from `fumadocs-core` without `fumadocs-ui`.

Fumadocs Core now requires a `FrameworkProvider`. It's as simple as wrapping it with appropriate provider:

```tsx
import { NextProvider } from 'fumadocs-core/framework/next';

export function Provider({ children }) {
  return <NextProvider>{children}</NextProvider>;
}
```

If you're using Fumadocs UI, there's no need to change. `RootProvider` included it by default, and allow you to provide your own framework with:

```tsx
import { RootProvider } from 'fumadocs-ui/provider/base';

export function Provider({ children }) {
  // now it doesn't add the Next.js provider
  return <RootProvider>{children}</RootProvider>;
}
```

Please report issues if you found any public APIs are broken unexpectedly.

### Compilation Time

15.2 also included some small performance improvements to Fumadocs, the time taken for Turbopack to start dev server and compile its first docs page is about 2-3 seconds.

This change also potentially allowed Fumadocs to run on Vite, production build of minimal React Router setup only takes around 4s on a Macbook.

## Try it out

Upgrade from your existing Next.js docs:

```bash
pnpm update -i -r
```

If you want to try the React Router example:

```bash
pnpm create fumadocs-app
```

### Future Plans

15.2 doesn't support Astro, and probably won't unless better React.js support is provided by Astro.

- `transition:presist` is needed for Fumadocs UI layouts, however this will also affect its children (e.g. MDX content), causing page content to be persisted even after navigation.
- React contexts cannot work across islands, this changes the usage of Fumadocs significantly and hence require a redesign of APIs.

Fumadocs will continue to be Next.js first, the docs won't be changed to generalize usages of other frameworks. Instead, a new docs site will be developed for other frameworks (planned).



================================================
FILE: apps/docs/content/blog/v15.mdx
================================================
---
title: Fumadocs v15
description: Tailwind CSS v4
author: Fuma Nama
date: 2025-01-24
---

## Overview

The purpose of v15 is mainly to support Tailwind CSS v4.
Tailwind CSS v4 is a complete redesign of its API and internals, to fully adhere the new CSS-first config style, a breaking change is required.

Fumadocs v15 has no other significant changes than migrating the config to Tailwind CSS v4.

## Breaking Changes

Before making the switch, upgrade your site to Tailwind CSS v4 following their [upgrade guide](https://tailwindcss.com/docs/upgrade-guide).
You can remove the unused `tailwind.config.js` file and fully rely on the new CSS-first config.

Add `@import` to the presets exported by Fumadocs UI, and include `fumadocs-ui` package into source.

```css title="Tailwind CSS"
@import 'tailwindcss';
@import 'fumadocs-ui/css/neutral.css';
@import 'fumadocs-ui/css/preset.css';

/* relative to the CSS file, make sure it's correct for your app */
@source '../node_modules/fumadocs-ui/dist/**/*.js';
```

Since v15, you will no longer pass options in JavaScript to customise plugins.
Instead, you can use the new alternatives in Tailwind CSS v4.

### `addGlobalColors: true`

Forward the colors again:

```css
@theme {
  --color-primary: var(--color-fd-primary);
  /* same for other colors */
}
```

### CSS Variables

Fumadocs no longer use `--fd-<color>` like `--fd-primary: 0 0% 0%` for colors, it directly defines and uses colors in `@theme`.
Instead of the previous format, it uses `hsl()`:

```css
@theme {
  --color-fd-primary: hsl(0, 0%, 100%);
}
```

### Steps

Previous Tailwind CSS utilities like `steps` & `steps` are renamed to `fd-steps` and `fd-step` to avoid conflicts.

### Typography

Typography utilities including `prose`, `prose-*` modifiers will continue to work. Please report problems if they are no longer working or have unexpected change in behaviours.

## Improvements

v15 also included some minor improvements to the UI and OpenAPI integration.

### Code Block Tabs

In the past, you need to write the `<Tabs />` manually when separating code blocks into tabs.

````mdx
<Tabs items={["Tab 1", "Tab 2"]}>

```ts tab="Tab 1"
console.log('Hello World');
```

```ts tab="Tab 2"
console.log('Hello World');
```

</Tabs>
````

Now you can do:

````mdx
```ts tab="Tab 1"
console.log('Hello World');
```

```ts tab="Tab 2"
console.log('Hello World');
```
````

Note that the previous usage still works for those who want to customise or pass props to the `<Tabs />` component.

### Reversed Items in `meta.json`

The rest item `...` in the `pages` property of `meta.json` now supports reversed order:

```json
{
  "pages": ["z...a"]
}
```

### OpenAPI Playground

v15 improved the playground UI (inspired by the minimalism of Scalar), and brought Scalar API Client support to Fumadocs OpenAPI.

You can enable the Scalar API Client using `useScalar` option in `createOpenAPI()`:

```ts
import { createOpenAPI } from 'fumadocs-openapi/server';
import { APIPlayground } from 'fumadocs-openapi/scalar';

export const openapi = createOpenAPI({
  renderer: {
    APIPlayground,
  },
});
```

And install & configure their `@scalar/api-client-react`:

```package-install
@scalar/api-client-react
```

```css title="global.css"
@import '@scalar/api-client-react/style.css' layer(base);
```

<Callout>
  Be careful that you must configure Tailwind CSS first, using the pre-built
  stylesheet of Fumadocs UI will conflict with their `style.css` because both
  libraries use Tailwind CSS for styling.
</Callout>

## Future Plans

This update should be a simple migration for most developers updating to Tailwind CSS v4.

In the future, we also want to make further improvements to Fumadocs MDX:

- remove `transform` API - you can easily do the same with `.map()` on runtime like:

```ts
import { blog } from "@/.source"

export const updatedBlog = blog.map(...)
```

- remove Manifest API - it was designed to export search indexes, but now it's recommended to implement using route handlers.

- Mention more about our [MDX Remote](/docs/headless/custom-source#mdx-remote) package, it will be the primary solution to handle large docs sites with performance needs that bundler couldn't do, including lazy compilation of MDX files.



================================================
FILE: apps/docs/content/blog/why-docs.mdx
================================================
---
title: Why do you need a docs?
description: You've read so many docs, but are they necessary?
date: 2024-05-26
author: Fuma Nama
---

People often ask me, do we really need a framework to build docs sites? Well, **You don't**.

Documentation sites are so important in software development,
an internal docs for developers in your company to understand the architecture,
a docs for frameworks,
a docs for web standards...

Building docs is simple, but difficult.

There are so many paradigms to build a docs, but writing a beginner-friendly docs could be difficult.
As a result, people tends to use powerful docs frameworks, making the docs site interactive and straightforward.

## Over-Engineered

For the docs of a small library/API service, you probably don't need to setup a Next.js site and spend time writing your site.
Neither Nextra nor Fumadocs could be better than GitHub wiki and Swagger docs in this case.

They offer a good, descent UI, basic functionalities, and a proper workflow of authoring docs.
The DX is good enough, I can't think of a reason to switch to a full-powered docs framework just to make your docs looks fancy.

I'll just recommend writing your docs in markdown, make it accessible on your GitHub repository.

## Why Framework?

Now you may wonder, why major services and frameworks have their own docs sites built with docs frameworks?

Of course, _Usually_ using things like GitHub Wiki is adequate, but it is not always true.
Let's take Component Library for example, you cannot showcase your components with Markdown.
You will constantly find an ordinary Markdown document lacks of capability and flexibility.

Documentation frameworks aim to solve this problem, with the ability to integrate with major libraries like **React.js** and **Vue.js**.
Good examples are Vitepress, Mintlify and Nextra - They made writing a docs more convenient and effective, while offering a better, dedicated experience to readers.

For anything more than a simple library or API service, **it is worth a try.**

### Reinvent the Wheels

I would never recommend building a "custom docs site" on your own, without a proper docs framework.
Despite the **Don't re-invent the wheels** principle, your hand-made docs site actually takes way more efforts to make it descent.

1. Document Search
2. A user-friendly navigation experience
3. Reading experience
4. UI/UX Design

Implementing them properly already sounds nerve-racking, right?

The docs itself, is definitely not your first priority. Never should you spend your precious time re-inventing the wheels - **it isn't worth**.

From my perspective, I'd rather use GitHub Wiki than re-inventing the wheels.
Why don't pick a descent solution? It saves your indispensable time, and help reducing the shitty docs sites on the internet.

## What we focus at Fumadocs?

I personally value reading experience more than a fancy eye-catching UI.
You may notice, we do not have animations everywhere, and we avoided many fancy designs.

Fanciness of UI should stay only in landing page, a docs site should focus on **content.**
Navigation elements are helpers to browse your site, never should they take up too much space on the screen.

One thing I hated the most is the design of _two sidebars_, it is confusing and meaningless.
You can just organize all items to a single, clean sidebar, but people instead added two hamburger buttons to the navbar.

<div className='mx-auto max-w-[400px]'>

![Next.js Docs](/blog/img.png)

</div>

My favourite docs site is still [Linear docs](https://linear.app/docs), looks good and simple.

## Conclusion

1. You don't need a full-powered docs framework for a small library
2. Don't make a docs site on your own, use a proper docs framework
3. Fumadocs focuses on reading experience
4. You should focus on content, too



================================================
FILE: apps/docs/content/docs/meta.json
================================================
{
  "pages": ["ui", "headless", "mdx", "cli", "openapi"]
}



================================================
FILE: apps/docs/content/docs/cli/index.mdx
================================================
---
title: User Guide
description: The CLI tool that automates setups and installing components.
---

## Installation

Initialize a config for CLI:

```package-install
npx @fumadocs/cli
```

You can change the output paths of components in the config.

### Components

Select and install components.

```package-install
npx @fumadocs/cli add
```

You can pass component names directly.

```package-install
npx @fumadocs/cli add banner files
```

#### How the magic works?

The CLI fetches the latest version of component from the GitHub repository of Fumadocs.
When you install the component, it is guaranteed to be up-to-date.

In addition, it also transforms import paths.
Make sure to use the latest version of CLI

> This is highly Inspired by Shadcn UI.

### Customise

A simple way to customise Fumadocs layouts.

```package-install
npx @fumadocs/cli customise
```

### Tree

Generate files tree for Fumadocs UI `Files` component, using the `tree` command from your terminal.

```package-install
npx @fumadocs/cli tree ./my-dir ./output.tsx
```

You can output MDX file too:

```package-install
npx @fumadocs/cli tree ./my-dir ./output.mdx
```

See help for further details:

```package-install
npx @fumadocs/cli tree -h
```

#### Example Output

```tsx title="output.tsx"
import { File, Folder, Files } from 'fumadocs-ui/components/files';

export default (
  <Files>
    <Folder name="app">
      <File name="layout.tsx" />
      <File name="page.tsx" />
      <File name="global.css" />
    </Folder>
    <Folder name="components">
      <File name="button.tsx" />
      <File name="tabs.tsx" />
      <File name="dialog.tsx" />
    </Folder>
    <File name="package.json" />
  </Files>
);
```



================================================
FILE: apps/docs/content/docs/cli/meta.json
================================================
{
  "root": true,
  "title": "Fumadocs CLI",
  "description": "The CLI tool for docs automation",
  "icon": "Terminal"
}



================================================
FILE: apps/docs/content/docs/headless/custom-source.mdx
================================================
---
title: Custom Source
description: Build your own content source
---

## Introduction

**Fumadocs is very flexible.** You can integrate with any content source, even without an official adapter.

> This guide assumes you are experienced with Next.js App Router.

### Examples

You can see examples to use Fumadocs with a CMS, which allows a nice experience on publishing content, and real-time update without re-building the app.

- [BaseHub](https://github.com/fuma-nama/fumadocs-basehub)
- [Sanity](https://github.com/fuma-nama/fumadocs-sanity)

For a custom content source implementation, you will need:

### Page Tree

You can either hardcode the page tree, or write some code to generate one.
See [Definitions of Page Tree](/docs/headless/page-tree).

Pass your Page Tree to `DocsLayout` (usually in a `layout.tsx`).

```tsx title="layout.tsx"
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      nav={{ title: 'Example Docs' }}
      tree={
        {
          /// your own tree
        }
      }
    >
      {children}
    </DocsLayout>
  );
}
```

The page tree is like a smarter "sidebar items", they will be referenced everywhere in the UI for navigation elements, such as the page footer.

### Docs Page

Same as a normal Next.js app, the code of your docs page is located in `[[...slug]]/page.tsx`.

#### SSG

Define the [`generateStaticParams`](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) function.
It should return a list of parameters (`params`) to populate the `[[...slug]]` catch-all route.

#### Body

In the main body of page, find the corresponding page according to the slug and render its content inside the `DocsPage` component.

You also need table of contents, which can be generated with your own implementation, or using the [`getTableOfContents`](/docs/headless/utils/get-toc) utility (Markdown/MDX only).

```tsx
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { getPage } from './my-content-source';
import { notFound } from 'next/navigation';

export default function Page({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug);
  if (!page) notFound();

  return (
    <DocsPage toc={page.tableOfContents}>
      <DocsBody>{page.render()}</DocsBody>
    </DocsPage>
  );
}
```

#### Metadata

Next.js offers a Metadata API for SEO, you can configure it with `generateMetadata` (similar as the code above).

### Document Search

This can be difficult considering your content may not be necessarily Markdown/MDX.
For Markdown and MDX, the built-in [Search API](/docs/headless/search/orama) is adequate for most use cases.
Otherwise, you will have to bring your own implementation.

We recommend 3rd party solutions like Algolia Search. They are more flexible than the built-in Search API, and is easier to integrate with remote sources.
Fumadocs offers a simple [Algolia Search Adapter](/docs/headless/search/algolia), which includes a search client to integrate with Fumadocs UI.

## MDX Remote

Fumadocs offers the **MDX Remote** package, it is a helper to integrate Markdown-based content sources with Fumadocs.
You can think it as a `next-mdx-remote` with built-in plugins for Fumadocs.

### Setup

```package-install
@fumadocs/mdx-remote
```

The main feature it offers is the MDX Compiler, it can compile MDX content to JSX nodes.
Since it doesn't use a bundler, there's some limitations:

- No imports and exports in MDX files.

It's compatible with Server Components. For example:

```tsx
import { compileMDX } from '@fumadocs/mdx-remote';
import { getPage } from './my-content-source';
import { DocsBody, DocsPage } from 'fumadocs-ui/page';
import { getMDXComponents } from '@/mdx-components';

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = getPage(params.slug);
  const compiled = await compileMDX({
    source: page.content,
  });

  const MdxContent = compiled.body;

  return (
    <DocsPage toc={compiled.toc}>
      <DocsBody>
        <MdxContent components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}
```

#### Images

On some platforms like Vercel, the original `public` folder (including static assets like images) will be removed after `next build`.
`compileMDX` might no longer be able to access local images in `public`.

When referencing images, make sure to use a URL.



================================================
FILE: apps/docs/content/docs/headless/index.mdx
================================================
---
title: Introduction
description: Getting started with core library
icon: Album
---

## What is this?

Fumadocs Core offers server-side functions and headless components to build docs on any React.js frameworks like Next.js.

- Search (built-in: Orama, Algolia Search)
- Breadcrumb, Sidebar, TOC Components
- Remark/Rehype Plugins
- Additional utilities

<Callout title="Tip">

    It can be used without Fumadocs UI, in other words, it's headless.

    For beginners and normal usages, use [Fumadocs UI](/docs/ui).

</Callout>

## Installation

No other dependencies required.

```package-install
fumadocs-core
```

For some components, a framework provider is needed:

```tsx tab="Next.js"
import type { ReactNode } from 'react';
import { NextProvider } from 'fumadocs-core/framework/next';

export function RootLayout({ children }: { children: ReactNode }) {
  // or if you're using Fumadocs UI, use `<RootProvider />`
  return <NextProvider>{children}</NextProvider>;
}
```

```tsx tab="React Router"
import type { ReactNode } from 'react';
import { ReactRouterProvider } from 'fumadocs-core/framework/react-router';

export function Root({ children }: { children: ReactNode }) {
  return <ReactRouterProvider>{children}</ReactRouterProvider>;
}
```

```tsx tab="Tanstack Start/Router"
import type { ReactNode } from 'react';
import { TanstackProvider } from 'fumadocs-core/framework/tanstack';

export function Root({ children }: { children: ReactNode }) {
  return <TanstackProvider>{children}</TanstackProvider>;
}
```

It offers simple document searching as well as components for building a
good docs.

<Cards>

<Card
  title="Breadcrumb"
  href="/docs/headless/components/breadcrumb"
  description="The navigation component at the top of screen"
/>

<Card
  title="TOC"
  href="/docs/headless/components/toc"
  description="A Table of Contents with active anchor observer"
/>

<Card
  title="Sidebar"
  href="/docs/headless/components/sidebar"
  description="The navigation bar at aside of viewport"
/>

<Card
  title="Search"
  href="/docs/headless/search"
  description="Implement document searching"
/>

</Cards>



================================================
FILE: apps/docs/content/docs/headless/internationalization.mdx
================================================
---
title: Internationalization
description: Support multiple languages in your documentation
---

## Introduction

Fumadocs core provides necessary middleware and options for i18n support.

You can define a config to share between utilities.

```json doc-gen:file
{
  "file": "../../examples/i18n/lib/i18n.ts",
  "codeblock": {
    "lang": "ts",
    "meta": "title=\"lib/i18n.ts\""
  }
}
```

### Hide Locale Prefix

To hide the locale prefix (e.g. `/en/page` -> `/page`), use the `hideLocale` option.

```ts
import type { I18nConfig } from 'fumadocs-core/i18n';

export const i18n: I18nConfig = {
  defaultLanguage: 'en',
  languages: ['en', 'cn'],
  hideLocale: 'default-locale',
};
```

| Mode             | Description                                        |
| ---------------- | -------------------------------------------------- |
| `always`         | Always hide the prefix, detect locale from cookies |
| `default-locale` | Only hide the default locale                       |
| `never`          | Never hide the prefix (default)                    |

<Callout type='warn' title={<>Using <code>always</code></>}>

On `always` mode, locale is stored as a cookie (set by the middleware), which isn't optimal for static sites.

This may cause undesired cache problems, and need to pay extra attention on SEO to ensure search engines can index your pages correctly.

</Callout>

### Middleware

Redirects users to appropriate locale, it can be customised from `i18n.ts`.

```json doc-gen:file
{
  "file": "../../examples/i18n/middleware.ts",
  "codeblock": {
    "lang": "ts",
    "meta": "title=\"middleware.ts\""
  }
}
```

> When `hideLocale` is enabled, it uses `NextResponse.rewrite` to hide locale prefixes.



================================================
FILE: apps/docs/content/docs/headless/meta.json
================================================
{
  "title": "Fumadocs Core",
  "description": "The headless library",
  "icon": "Library",
  "root": true,
  "pages": [
    "---Guide---",
    "index",
    "search",
    "---Writing---",
    "page-conventions",
    "---API References---",
    "page-tree",
    "internationalization",
    "components",
    "utils",
    "mdx",
    "---Sources---",
    "source-api",
    "content-collections/index",
    "contentlayer",
    "custom-source"
  ]
}



================================================
FILE: apps/docs/content/docs/headless/page-conventions.mdx
================================================
---
title: Routing
description: A shared convention for organizing your documents
---

<Callout title='Before reading'>

    This guide only applies for content sources that uses `loader()` API, such as Fumadocs MDX.

</Callout>

## Overview

While Next.js handles routing, Fumadocs generates **page slugs** and **sidebar items** (page tree) from your content directory using [`loader()`](/docs/headless/source-api).

You can define folders and pages similar to the file-system based routing of Next.js.

<Files>
  <Folder name="content/docs (content directory)" defaultOpen>
    <File name="index.mdx" />
    <File name="getting-started.mdx" />
  </Folder>
</Files>

## File

A [MDX](https://mdxjs.com) or Markdown file, you can customise its frontmatter.

```mdx
---
title: My Page
description: Best document ever
icon: HomeIcon
full: true
---

## Learn More
```

| name          | description                                        |
| ------------- | -------------------------------------------------- |
| `title`       | The title of page                                  |
| `description` | The description of page                            |
| `icon`        | The name of icon, see [Icons](#icons)              |
| `full`        | Fill all available space on the page (Fumadocs UI) |

<Callout title='Fumadocs MDX'>

    You can use the [`schema`](/docs/mdx/collections#schema-1) option to add frontmatter properties.

</Callout>

### Slugs

The slugs of a page are generated from its file path.

| path (relative to content folder) | slugs             |
| --------------------------------- | ----------------- |
| `./dir/page.mdx`                  | `['dir', 'page']` |
| `./dir/index.mdx`                 | `['dir']`         |

## Folder

Organize multiple pages, you can create a [Meta file](#meta) to customise folders.

### Folder Group

By default, putting a file into folder will change its slugs.
You can wrap the folder name in parentheses to avoid impacting the slugs of child files.

| path (relative to content folder) | slugs      |
| --------------------------------- | ---------- |
| `./(group-name)/page.mdx`         | `['page']` |

## Meta

Customise folders by creating a `meta.json` file in the folder.

```json title="meta.json"
{
  "title": "Display Name",
  "icon": "MyIcon",
  "pages": ["index", "getting-started"],
  "defaultOpen": true
}
```

| name          | description                           |
| ------------- | ------------------------------------- |
| `title`       | Display name                          |
| `icon`        | The name of icon, see [Icons](#icons) |
| `pages`       | Folder items (see below)              |
| `defaultOpen` | Open the folder by default            |

### Pages

By default, folder items are sorted alphabetically.

You can add or control the order of items using `pages`, items are not included unless they are listed inside.

```json title="meta.json"
{
  "title": "Name of Folder",
  "pages": ["guide", "components", "---My Separator---", "./nested/page"]
}
```

<Files>
  <File name="meta.json" />
  <File name="guide.mdx" />
  <File name="components.mdx" />
  <File name="nested/page.mdx" />
</Files>

#### Rest

Add a `...` item to include remaining pages (sorted alphabetically), or `z...a` for descending order.

```json title="meta.json"
{
  "pages": ["guide", "..."]
}
```

You can add `!name` to prevent an item from being included.

```json title="meta.json"
{
  "pages": ["guide", "...", "!components"]
}
```

#### Extract

You can extract the items from a folder with `...folder_name`.

```json title="meta.json"
{
  "pages": ["guide", "...nested"]
}
```

#### Link

Use the syntax `[Text](url)` to insert links, or `[Icon][Text](url)` to add icon.

```json title="meta.json"
{
  "pages": [
    "[Vercel](https://vercel.com)",
    "[Triangle][Vercel](https://vercel.com)"
  ]
}
```

## Icons

Since Fumadocs doesn't include an icon library, you have to convert the icon names to JSX elements in runtime, and render it as a component.

You can add an [`icon` handler](/docs/headless/source-api#icons) to `loader()`.

## Root Folder

Marks the folder as a root folder, only items in the opened root folder will be considered.

```json title="meta.json"
{
  "title": "Name of Folder",
  "description": "The description of root folder (optional)",
  "root": true
}
```

For example, when you are opening a root folder `framework`, the other folders (e.g. `headless`) are not shown on the sidebar and other navigation elements.

<Files>
  <Folder name="framework" defaultOpen>
    <File name="index.mdx" />
    <File
      name="current-page.mdx"
      className="!text-fd-primary !bg-fd-primary/10"
    />
    <File name="other-pages.mdx" />
  </Folder>
  <Folder name="headless (hidden)" className="opacity-50" disabled defaultOpen>
    <File name="my-page.mdx" />
  </Folder>
</Files>

<Callout title='Fumadocs UI'>

    Fumadocs UI renders root folders as [Sidebar Tabs](/docs/ui/navigation/sidebar#sidebar-tabs), which allows user to switch between them.

</Callout>

## Internationalization

<include>../../shared/page-conventions.i18n.mdx</include>



================================================
FILE: apps/docs/content/docs/headless/page-tree.mdx
================================================
---
title: Page Tree
description: The structure of page tree.
---

Page tree is a tree structure that describes all navigation links, with other items like separator and folders.

It will be sent to the client and being referenced in navigation elements including the sidebar and breadcrumb.
Hence, you shouldn't store any sensitive or large data in page tree.

<Callout title="Note">

By design, page tree only contains necessary information of all pages and folders.

Unserializable data such as functions can't be passed to page tree.

</Callout>

## Conventions

This is the definitions of Page Tree, you may refer to Page Conventions to learn how to structure your folders/pages.

Certain nodes contain a `$ref` property to link to its original page/meta file, they are optional when hardcoding it.

### Root

The initial root of page trees.

<AutoTypeTable path="./content/docs/headless/props.ts" name="PageTreeRoot" />

### Page

```json
{
  "type": "page",
  "name": "Quick Start",
  "url": "/docs"
}
```

> External urls are also supported

<AutoTypeTable path="./content/docs/headless/props.ts" name="PageTreeItem" />

### Folder

```json
{
    "type": "folder",
    "name": "Guide",
    "index": {
        "type": "page",
        ...
    }
    "children": [
        ...
    ]
}
```

<AutoTypeTable path="./content/docs/headless/props.ts" name="PageTreeFolder" />

#### As Root

To implement multiple page trees, you can add a `root` property to the folder node.
This will mark the folder as a root folder, and the nearest root folder of current page will be used as the root of page tree.
Instead of showing the entire page tree, navigation elements will be restricted within the current root.

### Separator

A label between items.

```json
{
  "type": "separator",
  "name": "Components"
}
```

<AutoTypeTable
  path="./content/docs/headless/props.ts"
  name="PageTreeSeparator"
/>

## Icons

Icon is a `ReactElement`, supported by pages and folders.

## Type Bindings

You can import the type from server package.

```ts
import type { PageTree } from 'fumadocs-core/server';

const tree: PageTree.Root = {
  // props
};
```



================================================
FILE: apps/docs/content/docs/headless/props.ts
================================================
import type * as Breadcrumb from 'fumadocs-core/breadcrumb';
import type * as TOC from 'fumadocs-core/toc';
import type * as Server from 'fumadocs-core/server';
import type * as Sidebar from 'fumadocs-core/sidebar';
import type { ElementType } from 'react';
import type * as MDX from 'fumadocs-core/mdx-plugins';

export type SortedResult = Server.SortedResult;

export type StructureOptions = MDX.StructureOptions;

export type BreadcrumbItem = Breadcrumb.BreadcrumbItem;

export type SidebarProviderProps = Sidebar.SidebarProviderProps;
export type SidebarContentProps = Sidebar.SidebarContentProps<ElementType>;
export type SidebarTriggerProps = Sidebar.SidebarTriggerProps<ElementType>;

export type ScrollProviderProps = TOC.ScrollProviderProps;
export type AnchorProviderProps = TOC.AnchorProviderProps;

export type TOCItemType = Server.TOCItemType;

export type PageTreeItem = Server.PageTree.Item;
export type PageTreeFolder = Server.PageTree.Folder;
export type PageTreeRoot = Server.PageTree.Root;
export type PageTreeSeparator = Server.PageTree.Separator;

export type RemarkImageOptions = MDX.RemarkImageOptions;



================================================
FILE: apps/docs/content/docs/headless/source-api.mdx
================================================
---
title: loader()
description: Turn a content source into a unified interface
---

## Usage

`loader()` provides an interface for Fumadocs to integrate with file-system based content sources.

### What it does?

- Generate page trees based on file system.
- Assign URL and slugs to each page.
- Output useful utilities to interact with content.

It doesn't rely on the real file system (zero `node:fs` usage), a virtual storage is also allowed.

You can use it with built-in content sources like Fumadocs MDX.

```ts
import { loader } from 'fumadocs-core/source';
import { docs } from '@/.source';

export const source = loader({
  source: docs.toFumadocsSource(),
});
```

### URL

You can override the base URL, or specify a function to generate URL for each page.

```ts
import { loader } from 'fumadocs-core/source';

loader({
  baseUrl: '/docs',
  // or you can customise it with function
  url(slugs, locale) {
    if (locale) return '/' + [locale, 'docs', ...slugs].join('/');
    return '/' + ['docs', ...slugs].join('/');
  },
});
```

### Icons

Load the [icon](/docs/headless/page-conventions#icons) property specified by pages and meta files.

```ts
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';

loader({
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});
```

### I18n

Pass the `i18n` config to loader.

```ts title="lib/source.ts"
import { i18n } from '@/lib/i18n';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  i18n, // [!code highlight]
});
```

With i18n enabled, loader will generate a page tree for every locale.

When looking for a page, it fallbacks to default locale if the page doesn't exist for specified locale.

## Output

The loader outputs a source object.

### Get Page

Get page with slugs.

```ts
import { source } from '@/lib/source';

source.getPage(['slug', 'of', 'page']);

// with i18n
source.getPage(['slug', 'of', 'page'], 'locale');
```

### Get Pages

Get a list of page available for locale.

```ts
import { source } from '@/lib/source';

// from default locale
source.getPages();

// for a specific locale
source.getPages('locale');
```

### Page Tree

```ts
import { source } from '@/lib/source';

// without i18n
source.pageTree;

// with i18n
source.pageTree['locale'];
```

### Get from Node

The page tree nodes contain references to their original file path.
You can find their original page or meta file from the tree nodes.

```ts
import { source } from '@/lib/source';

source.getNodePage(pageNode);
source.getNodeMeta(folderNode);
```

### Params

A function to generate output for Next.js `generateStaticParams`.
The generated parameter names will be `slug: string[]` and `lang: string` (i18n only).

```ts title="app/[[...slug]]/page.tsx"
import { source } from '@/lib/source';

export function generateStaticParams() {
  return source.generateParams();
}
```

### Language Entries

Get available languages and its pages.

```ts
import { source } from '@/lib/source';

// language -> pages
const entries = source.getLanguages();
```

## Deep Dive

As mentioned, Source API doesn't rely on real file systems.
During the process, your input source files will be parsed and form a virtual storage to avoid inconsistent behaviour between different OS.

### Transformer

To perform virtual file-system operations before processing, you can add a transformer.

```ts
import { loader } from 'fumadocs-core/source';

loader({
  transformers: [
    ({ storage }) => {
      storage.makeDir();
    },
  ],
});
```

### Page Tree

The page tree is generated from your file system, using the **Page Tree Builder**.
It also filters out some unnecessary information (e.g. unused frontmatter properties).

To customise the process, use the `pageTree` option.
You can attach custom properties to page tree nodes, like customising the display name of pages and folders.

```tsx
import React from 'react';
import { loader } from 'fumadocs-core/source';

loader({
  pageTree: {
    attachFile(node, file) {
      // you can access its file information
      console.log(file?.data);
      // JSX nodes are allowed
      node.name = <>Some JSX Nodes here</>;

      return node;
    },
  },
});
```

### Custom Source

To plug your own content source, create a `Source` object.

It includes a `files` property which is an array of virtual files.
Each virtual file must contain its file path and corresponding data.
You can check type definitions for more info.

Since Source API doesn't rely on file system, file paths cannot be absolute or relative (for example, `./file.mdx` and `D://content/file.mdx` are not allowed).
Instead, pass the file paths like `file.mdx` and `content/file.mdx`.

```ts
import { Source } from 'fumadocs-core/source';

export function createMySource(): Source<{
  metaData: { title: string; pages: string[] }; // Your custom type
  pageData: { title: string; description: string }; // Your custom type
}> {
  return {
    files: [],
  };
}
```



================================================
FILE: apps/docs/content/docs/headless/components/breadcrumb.mdx
================================================
---
title: Breadcrumb
description: The navigation component at the top of screen
---

A hook for implementing Breadcrumb in your documentation, it returns the path to
a page based on the given page tree.

> If present, the index page of a folder will be used as the item

## Usage

it exports a `useBreadcrumb` hook:

```ts twoslash
declare const tree: any;
// ---cut---
import { usePathname } from 'next/navigation';
import { useBreadcrumb } from 'fumadocs-core/breadcrumb';

const pathname = usePathname();
const items = useBreadcrumb(pathname, tree);
//    ^?
```

### Example

A styled example.

```tsx
'use client';
import { usePathname } from 'next/navigation';
import { useBreadcrumb } from 'fumadocs-core/breadcrumb';
import type { PageTree } from 'fumadocs-core/server';
import { Fragment } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function Breadcrumb({ tree }: { tree: PageTree.Root }) {
  const pathname = usePathname();
  const items = useBreadcrumb(pathname, tree);

  if (items.length === 0) return null;

  return (
    <div className="-mb-3 flex flex-row items-center gap-1 text-sm font-medium text-fd-muted-foreground">
      {items.map((item, i) => (
        <Fragment key={i}>
          {i !== 0 && (
            <ChevronRight className="size-4 shrink-0 rtl:rotate-180" />
          )}
          {item.url ? (
            <Link
              href={item.url}
              className="truncate hover:text-fd-accent-foreground"
            >
              {item.name}
            </Link>
          ) : (
            <span className="truncate">{item.name}</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
```

You can use it by passing the page tree via `tree` in a server component.

### Breadcrumb Item

<AutoTypeTable path="./content/docs/headless/props.ts" name="BreadcrumbItem" />



================================================
FILE: apps/docs/content/docs/headless/components/index.mdx
================================================
---
title: Components
index: true
description: Blocks for your docs
---



================================================
FILE: apps/docs/content/docs/headless/components/link.mdx
================================================
---
title: Link
description: A Link component that handles external links
---

A component that wraps `next/link` and handles external links in the document.
When an external URL is detected, it uses `<a>` instead of the Next.js Link
Component. `rel` property is automatically generated.

## Usage

Same as using `<a>`.

```mdx
import Link from 'fumadocs-core/link';

<Link href="/docs/components">Click Me</Link>
```

### External

You can force an URL to be external by passing an `external` prop.

### Dynamic hrefs

Dynamic hrefs are no longer supported in Next.js App Router. You can enable
dynamic hrefs by importing `dynamic-link` instead.

```mdx
import { DynamicLink } from 'fumadocs-core/dynamic-link';

<DynamicLink href="/[lang]/components">Click Me</DynamicLink>
```



================================================
FILE: apps/docs/content/docs/headless/components/meta.json
================================================
{
  "title": "Components",
  "pages": ["..."]
}



================================================
FILE: apps/docs/content/docs/headless/components/sidebar.mdx
================================================
---
title: Sidebar
description: The navigation bar at aside of viewport
---

A sidebar component which handles device resizing and remove scroll bar
automatically.

## Usage

```tsx
import * as Base from 'fumadocs-core/sidebar';

return (
  <Base.SidebarProvider>
    <Base.SidebarTrigger />
    <Base.SidebarList />
  </Base.SidebarProvider>
);
```

### Sidebar Provider

<AutoTypeTable
  path="./content/docs/headless/props.ts"
  name="SidebarProviderProps"
/>

### Sidebar Trigger

Opens the sidebar on click.

<AutoTypeTable
  path="./content/docs/headless/props.ts"
  name="SidebarTriggerProps"
/>

### Sidebar List

| Data Attribute | Values        | Description        |
| -------------- | ------------- | ------------------ |
| `data-open`    | `true, false` | Is sidebar opening |

<AutoTypeTable
  path="./content/docs/headless/props.ts"
  type="SidebarContentProps"
/>



================================================
FILE: apps/docs/content/docs/headless/components/toc-example.tsx
================================================
import { AnchorProvider, ScrollProvider, TOCItem } from 'fumadocs-core/toc';
import { type ReactNode, useRef } from 'react';
import type { TOCItemType } from 'fumadocs-core/server';

export function Page({
  items,
  children,
}: {
  items: TOCItemType[];
  children: ReactNode;
}) {
  const viewRef = useRef<HTMLDivElement>(null);

  return (
    <AnchorProvider toc={items}>
      <div ref={viewRef} className="overflow-auto">
        <ScrollProvider containerRef={viewRef}>
          {items.map((item) => (
            <TOCItem key={item.url} href={item.url}>
              {item.title}
            </TOCItem>
          ))}
        </ScrollProvider>
      </div>
      {children}
    </AnchorProvider>
  );
}



================================================
FILE: apps/docs/content/docs/headless/components/toc.mdx
================================================
---
title: TOC
description: Table of Content
---

A Table of Contents with active anchor observer and auto scroll.

## Usage

```tsx
import * as Base from 'fumadocs-core/toc';

return (
  <Base.AnchorProvider>
    <Base.ScrollProvider>
      <Base.TOCItem />
      <Base.TOCItem />
    </Base.ScrollProvider>
  </Base.AnchorProvider>
);
```

### Anchor Provider

Watch for the active anchor using the Intersection API.

<AutoTypeTable
  path="./content/docs/headless/props.ts"
  name="AnchorProviderProps"
/>

### Scroll Provider

Scrolls (the given scroll container) to the active anchor.

<AutoTypeTable
  path="./content/docs/headless/props.ts"
  name="ScrollProviderProps"
/>

### TOC Item

The anchor item to jump to the anchor.

| Data Attribute | Values        | Description      |
| -------------- | ------------- | ---------------- |
| `data-active`  | `true, false` | Is anchor active |

## Example

<include>./toc-example.tsx</include>



================================================
FILE: apps/docs/content/docs/headless/content-collections/index.mdx
================================================
---
title: Content Collections
description: Use Content Collections for Fumadocs
---

[Content Collections](https://www.content-collections.dev) is a library that transforms your content into type-safe data collections.

## Setup

Install the required packages.

```package-install
@fumadocs/content-collections @content-collections/core @content-collections/mdx @content-collections/next
```

After the installation, add a path alias for the generated collections to the `tsconfig.json`.

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
      "content-collections": ["./.content-collections/generated"]
    }
  }
}
```

In the Next.js configuration file, apply the plugin.

```js title="next.config.mjs"
import { withContentCollections } from '@content-collections/next';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withContentCollections(config);
```

To integrate with Fumadocs, add the following to your `content-collections.ts`.

```json doc-gen:file
{
  "file": "../../examples/content-collections/content-collections.ts",
  "codeblock": {
    "meta": "title=\"content-collections.ts\""
  }
}
```

And pass it to Source API.

```json doc-gen:file
{
  "file": "../../examples/content-collections/lib/source.ts",
  "codeblock": {
    "meta": "title=\"lib/source.ts\""
  }
}
```

Done! You can access the pages and generated page tree from Source API.

```ts
import { getPage } from '@/lib/source';

const page = getPage(slugs);

// MDX output
page?.data.body;

// Table of contents
page?.data.toc;

// Structured Data, for Search API
page?.data.structuredData;
```

### MDX Options

You can customise MDX options in the `transformMDX` function.

```ts
import { defineCollection } from '@content-collections/core';
import { transformMDX } from '@fumadocs/content-collections/configuration';

const docs = defineCollection({
  transform: (document, context) =>
    transformMDX(document, context, {
      // options here
    }),
});
```

### Import Components

To use components from other packages like Fumadocs UI, pass them to your `<MDXContent />` component.

```tsx
import { MDXContent } from '@content-collections/mdx/react';
import { getMDXComponents } from '@/mdx-components';

<MDXContent code="..." components={getMDXComponents()} />;
```

You can also import them in MDX Files, but it is not recommended.

<Callout title='Deep Dive: Why?'>
    Content Collections uses `mdx-bundler` to bundle MDX files.

    To support importing a package from node modules, Fumadocs added a default value to the `cwd` option of MDX Bundler.
    It works good, but we still **do not** recommend to import components in MDX files.

    Reasons:

    - It requires esbuild to bundle these components, while it should be done by the Next.js bundler (for features of Server Components)
    - You can refactor the import path of components without changing your MDX files.
    - With Remote Sources, it doesn't make sense to add an import in MDX files.

</Callout>



================================================
FILE: apps/docs/content/docs/headless/mdx/headings.mdx
================================================
---
title: Headings
description: Process headings from your document
---

## Remark Heading

Apply ids to headings.

```ts title="MDX Compiler"
import { compile } from '@mdx-js/mdx';
import { remarkHeading } from 'fumadocs-core/mdx-plugins';

await compile('...', {
  remarkPlugins: [remarkHeading],
});
```

> This plugin is included by default on Fumadocs MDX.

### Extract TOC

By default, it extracts the headings (table of contents) of a document to `vfile.data.toc`.
You can disable it with:

```ts
import { remarkHeading } from 'fumadocs-core/mdx-plugins';

export default {
  remarkPlugins: [[remarkHeading, { generateToc: false }]],
};
```

### Custom Ids [#custom-heading-id]

You can customise the heading id with `[#slug]`.

```md
# heading [#slug]
```

### Output

An array of `TOCItemType`.

<AutoTypeTable path="./content/docs/headless/props.ts" name="TOCItemType" />

## Rehype TOC

Export table of contents (an array of `TOCItemType`), it allows JSX nodes which is not possible with a Remark plugin.

> It requires MDX.js.

### Usage

```ts
import { rehypeToc } from 'fumadocs-core/mdx-plugins';

export default {
  rehypePlugins: [rehypeToc],
};
```

### Output

For a Markdown document:

```md
## Hello `code`
```

An export will be created:

```jsx
export const toc = [
  {
    title: (
      <>
        Hello <code>code</code>
      </>
    ),
    depth: 2,
    url: '#hello-code',
  },
];
```



================================================
FILE: apps/docs/content/docs/headless/mdx/index.mdx
================================================
---
title: MDX Plugins
index: true
description: Useful remark & rehype plugins for your docs.
---



================================================
FILE: apps/docs/content/docs/headless/mdx/install.mdx
================================================
---
title: Package Install
description: Generate code blocks for installing packages
---

## Usage

```package-install
fumadocs-docgen
```

Add the remark plugin.

```ts title="source.config.ts" tab="Fumadocs MDX"
import { remarkInstall } from 'fumadocs-docgen';
import { defineConfig } from 'fumadocs-mdx/config';

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkInstall],
  },
});
```

```ts tab="MDX Compiler"
import { compile } from '@mdx-js/mdx';
import { remarkInstall } from 'fumadocs-docgen';

await compile('...', {
  remarkPlugins: [remarkInstall],
});
```

Define the required components.

```tsx title="mdx-components.tsx (Fumadocs UI)"
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import defaultComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    Tab,
    Tabs,
    ...components,
  };
}
```

| Component |                                   |
| --------- | --------------------------------- |
| Tabs      | Accept an array of item (`items`) |
| Tab       | Accept the name of item (`value`) |

Create code blocks with `package-install` as language.

````mdx
```package-install
my-package
```

```package-install
npm i my-package -D
```
````

### Output

The following structure should be generated by the plugin.

```mdx
<Tabs items={['npm', 'pnpm', 'yarn', 'bun']}>
  <Tab value="npm">...</Tab>
  <Tab value="pnpm">...</Tab>
  <Tab value="yarn">...</Tab>
  <Tab value="bun">...</Tab>
<Tabs>
```

```package-install
my-package
```

## Options

### Persistent

When using with Fumadocs UI, you can enable persistent with the `persist` option.

```ts title="source.config.ts" tab="Fumadocs MDX"
import { remarkInstall } from 'fumadocs-docgen';
import { defineConfig } from 'fumadocs-mdx/config';

const remarkInstallOptions = {
  persist: {
    id: 'some-id',
  },
};

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [[remarkInstall, remarkInstallOptions]],
  },
});
```

```ts tab="MDX Compiler"
import { compile } from '@mdx-js/mdx';
import { remarkInstall } from 'fumadocs-docgen';

const remarkInstallOptions = {
  persist: {
    id: 'some-id',
  },
};

await compile('...', {
  remarkPlugins: [[remarkInstall, remarkInstallOptions]],
});
```

This will instead generate:

```mdx
<Tabs groupId="some-id" persist items={[...]}>
  ...
<Tabs>
```



================================================
FILE: apps/docs/content/docs/headless/mdx/meta.json
================================================
{
  "title": "MDX Plugins"
}



================================================
FILE: apps/docs/content/docs/headless/mdx/rehype-code.mdx
================================================
---
title: Rehype Code
description: Code syntax highlighter
---

A wrapper of [Shiki](https://shiki.style), the built-in syntax highlighter.

## Usage

Add the rehype plugin.

```ts title="MDX Compiler"
import { compile } from '@mdx-js/mdx';
import { rehypeCode } from 'fumadocs-core/mdx-plugins';

await compile('...', {
  rehypePlugins: [rehypeCode],
});
```

> This plugin is included by default on Fumadocs MDX.

### Output

A codeblock wrapped in `<pre />`.

```html
<pre>
<code>...</code>
</pre>
```

### Meta

It parses the `title` meta string, and add it to the `pre` element via attribute.

````mdx
```js title="Title"
console.log('Hello');
```
````

You may filter the meta string before processing it with the `filterMetaString` option.

### Inline Code

`console.log("hello world"){:js}` works.

See https://shiki.style/packages/rehype#inline-code.

### Icon

Add an icon according to the language of codeblock.
It outputs HTML, you might need to render it with React `dangerouslySetInnerHTML`.

```jsx
<pre icon="<svg />">...</pre>
```

Disable or customise icons with the `icon` option.

### More Options

see [Shiki](https://shiki.style).



================================================
FILE: apps/docs/content/docs/headless/mdx/remark-admonition.mdx
================================================
---
title: Remark Admonition
description: Use Admonition in Fumadocs
---

In Docusaurus, there's an [Admonition syntax](https://docusaurus.io/docs/markdown-features/admonitions).

For people migrating from Docusaurus, you can enable this remark plugin to support the Admonition syntax.

## Usage

```ts title="source.config.ts" tab="Fumadocs MDX"
import { remarkAdmonition } from 'fumadocs-core/mdx-plugins';
import { defineConfig } from 'fumadocs-mdx/config';

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkAdmonition],
  },
});
```

```ts tab="MDX Compiler"
import { compile } from '@mdx-js/mdx';
import { remarkAdmonition } from 'fumadocs-core/mdx-plugins';

await compile('...', {
  remarkPlugins: [remarkAdmonition],
});
```

### Input

```md
:::warning
Hello World
:::
```

### Output

```mdx
<Callout type='warn'>

Hello World

</Callout>
```

### When to use

We highly recommend to use the JSX syntax of MDX instead.
It's more flexible, some editors support intellisense in MDX files.

```mdx
<Callout type='warn'>

Hello World

</Callout>
```



================================================
FILE: apps/docs/content/docs/headless/mdx/remark-image.mdx
================================================
---
title: Remark Image
description: Make images compatible with Next.js Image Optimization
---

## Usage

Add it to your Remark plugins.

```ts title="MDX Compiler"
import { compile } from '@mdx-js/mdx';
import { remarkImage } from 'fumadocs-core/mdx-plugins';

await compile('...', {
  remarkPlugins: [remarkImage],
});
```

> This plugin is included by default on Fumadocs MDX.

Supported:

- Local Images
- External URLs
- Next.js static imports

### How It Works

It transforms your `![image](/test.png)` into Next.js Image usage, and add required props like `width` and `height`.

By default, it uses **static imports** to import local images, which supports the `placeholder` option of Next.js Image.
Next.js can handle image imports with its built-in image loader.

Otherwise, it uses the file system or an HTTP request to download the image and obtain its size.

### Options

<AutoTypeTable
  path="./content/docs/headless/props.ts"
  name="RemarkImageOptions"
/>

### Example: With Imports

```mdx
![Hello](/hello.png)
![Test](https://example.com/image.png)
```

Yields:

```mdx
import HelloImage from './public/hello.png';

<img alt="Hello" src={HelloImage} />
<img
  alt="Test"
  src="https://example.com/image.png"
  width="1980"
  height="1080"
/>
```

Where `./public/hello.png` points to the image in public directory.

### Example: Without Imports

You can disable Next.js static imports on local images.

```ts
import { remarkImage } from 'fumadocs-core/mdx-plugins';

export default {
  remarkPlugins: [[remarkImage, { useImport: false }]],
};
```

```mdx
![Hello](/hello.png)
![Test](https://example.com/image.png)
```

Yields:

```mdx
<img alt="Hello" src="/hello.png" width="1980" height="1080" />
<img
  alt="Test"
  src="https://example.com/image.png"
  width="1980"
  height="1080"
/>
```

### Example: Relative Paths

When `useImport` is enabled, you can reference local images using relative paths.

```mdx
![Hello](./hello.png)
```

Be careful that using it with `useImport` disabled **doesn't work**.
Next.js will not add the image to public assets unless you have imported it in code.
For images in public directory, you can just reference them without relative paths.

### Example: Public Directory

Customise the path of public directory

```ts
import { remarkImage } from 'fumadocs-core/mdx-plugins';
import path from 'node:path';

export default {
  remarkPlugins: [
    remarkImage,
    {
      publicDir: path.join(process.cwd(), 'dir'),
    },
  ],
};
```

You can pass a URL too.

```ts
import { remarkImage } from 'fumadocs-core/mdx-plugins';

export default {
  remarkPlugins: [
    remarkImage,
    {
      publicDir: 'http://localhost:3000/images',
    },
  ],
};
```



================================================
FILE: apps/docs/content/docs/headless/mdx/remark-ts2js.mdx
================================================
---
title: Remark TS to JS
description: A remark plugin to transform TypeScript codeblocks into two tabs of codeblock with its JavaScript variant.
---

## Usage

Install dependencies:

```package-install
fumadocs-docgen oxc-transform
```

Add `oxc-transform` to `serverExternalPackages` in `next.config.mjs`:

```js title="next.config.mjs"
import { createMDX } from 'fumadocs-mdx/next';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  serverExternalPackages: ['oxc-transform'],
};

const withMDX = createMDX();

export default withMDX(config);
```

Add the remark plugin:

```ts title="source.config.ts" tab="Fumadocs MDX"
import { remarkTypeScriptToJavaScript } from 'fumadocs-docgen/remark-ts2js';
import { defineConfig } from 'fumadocs-mdx/config';

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkTypeScriptToJavaScript],
  },
});
```

```ts tab="MDX Compiler"
import { remarkTypeScriptToJavaScript } from 'fumadocs-docgen/remark-ts2js';
import { compile } from '@mdx-js/mdx';

await compile('...', {
  remarkPlugins: [remarkTypeScriptToJavaScript],
});
```

Finally, make sure to define the required MDX components: `Tabs` and `Tab`.

```tsx title="mdx-components.tsx (Fumadocs UI)"
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import defaultComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    Tab,
    Tabs,
    ...components,
  };
}
```

You can now enable it on TypeScript/TSX codeblocks, like:

````md
```tsx ts2js
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
```
````

```tsx ts2js
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
```



================================================
FILE: apps/docs/content/docs/headless/mdx/structure.mdx
================================================
---
title: Remark Structure
description: Extract information from your documents, useful for implementing document search
---

## Usage

Add it as a remark plugin.

```ts title="MDX Compiler"
import { compile } from '@mdx-js/mdx';
import { remarkStructure } from 'fumadocs-core/mdx-plugins';

const vfile = await compile('...', {
  remarkPlugins: [remarkStructure],
});
```

> This plugin is included by default on Fumadocs MDX.

Extracted information could be found in `vfile.data.structuredData`, you may
write your own plugin to convert it into a MDX export.

### Options

<AutoTypeTable
  path="./content/docs/headless/props.ts"
  name="StructureOptions"
/>

### Output

A list of headings and contents. Paragraphs will be extracted to the `contents`
array, each item contains a `heading` prop indicating the heading of paragraph.

<Callout title="Note">A heading can have multiple paragraphs.</Callout>

#### Heading

| Prop      |                                      |
| --------- | ------------------------------------ |
| `id`      | unique identifier or slug of heading |
| `content` | Text content                         |

#### Content

| Prop      |                                 |
| --------- | ------------------------------- |
| `heading` | Heading of paragraph (nullable) |
| `content` | Text content                    |

## As a Function

Accepts MDX/markdown content and return structurized data.

```ts
import { structure } from 'fumadocs-core/mdx-plugins';

structure(page.body.raw);
```

<Callout title="Tip" className="mt-4">
If you have custom remark plugins enabled, such as
`remark-math`, you have to pass these plugins to the function. This avoids unreadable content on paragraphs.

```ts
import { structure } from 'fumadocs-core/mdx-plugins';
import remarkMath from 'remark-math';

structure(page.body.raw, [remarkMath]);
```

</Callout>

### Parameters

| Parameter       |                        |
| --------------- | ---------------------- |
| `content`       | MDX/markdown content   |
| `remarkPlugins` | List of remark plugins |
| `options`       | Custom options         |



================================================
FILE: apps/docs/content/docs/headless/search/algolia.mdx
================================================
---
title: Algolia Search
description: Integrate Algolia Search with Fumadocs
---

<Callout title="Notice">
  If you're using Algolia's free tier, you have to [display their logo on your
  search dialog](https://algolia.com/policies/free-services-terms).
</Callout>

## Introduction

The Algolia Integration automatically configures Algolia Search for document search.

It creates a record for **each paragraph** in your document, it is also recommended by Algolia.

Each record contains searchable attributes:

| Attribute | Description           |
| --------- | --------------------- |
| `title`   | Page Title            |
| `section` | Heading ID (nullable) |
| `content` | Paragraph content     |

The `section` field only exists in paragraphs under a heading. Headings and
paragraphs are indexed as an individual record, grouped by their page ID.

Notice that it expects the `url` property of a page to be unique, you shouldn't have two pages with the same
url.

## Setup

### Install Dependencies

```package-install
algoliasearch
```

### Sign up on Algolia

Sign up and obtain the app id and API keys for your search. Store these
credentials in environment variables.

### Sync Search Indexes

Export the search indexes from Next.js using a route handler, this way we can access the search indexes after production build:

```json doc-gen:file
{
  "file": "../../examples/next-mdx/app/static.json/algolia.ts",
  "codeblock": {
    "meta": "title=\"app/static.json/route.ts\""
  }
}
```

Make a script to sync search indexes:

```js title="update-index.mjs"
import algosearch from 'algoliasearch';
import { sync } from 'fumadocs-core/search/algolia';
import * as fs from 'node:fs';

const content = fs.readFileSync('.next/server/app/static.json.body');

/** @type {import('fumadocs-core/search/algolia').DocumentRecord[]} **/
const indexes = JSON.parse(content.toString());

const client = algosearch('id', 'key');

sync(client, {
  documents: indexes, // search indexes, can be provided by your content source too [!code highlight]
});
```

The `sync` function will update the index settings and sync search indexes.

Now run the script after build:

```json title="package.json"
{
  "scripts": {
    "build": "next build && node ./update-index.mjs"
  }
}
```

### Workflow

You may make it a script and manually sync with `node ./update-index.mjs`, or
integrate it with your CI/CD pipeline.

<Callout type="warn" title="Typescript Usage">
  If you are running the script with [TSX](https://github.com/privatenumber/tsx)
  or other similar Typescript executors, ensure to name it `.mts` for best ESM
  compatibility.
</Callout>

### Search UI

You can consider different options for implementing the UI:

- [Fumadocs UI Usage](/docs/ui/search#algolia)
- Build your own using the built-in search client hook:

  ```ts
  import algosearch from 'algoliasearch';
  import { useDocsSearch } from 'fumadocs-core/search/client';

  const index = algosearch('id', 'key').initIndex('document');

  const { search, setSearch, query } = useDocsSearch({
    type: 'algolia',
    index,
    distinct: 5,
    hitsPerPage: 10,
  });
  ```

## Options

### Tag Filter

To configure tag filtering, add a `tag` value to indexes.

```js
import algosearch from 'algoliasearch';
import { sync } from 'fumadocs-core/search/algolia';

const client = algosearch('id', 'key');

sync(client, {
  documents: indexes.map((index) => ({
    ...index,
    tag: 'value', // [!code highlight]
  })),
});
```

And update your search client:

- **Fumadocs UI**: Enable [Tag Filter](/docs/ui/search#tag-filter-1) on Search Dialog.
- **Search Client**: You can add the tag filter like:

  ```ts
  import algosearch from 'algoliasearch';
  import { useDocsSearch } from 'fumadocs-core/search/client';

  const index = algosearch('id', 'key').initIndex('document');

  const { search, setSearch, query } = useDocsSearch(
    {
      type: 'algolia',
      index,
    },
    undefined,
    '<your tag value>',
  );
  ```

The `tag` field is an attribute for faceting. You can also use the filter `tag:value` on Algolia search clients.

### Customise Attributes & Settings

While the default attributes might not suit your case, you can pass `extra_data`
to index options for adding extra fields to each record.

```js
import { sync } from 'fumadocs-core/search/algolia';

sync(client, {
  documents: indexes.map((docs) => ({
    ...docs,
    extra_data: {
      value: 'hello world',
    },
  })),
});
```

To customize the default index settings, set index settings, and update
documents with `updateDocuments(...)` separately.



================================================
FILE: apps/docs/content/docs/headless/search/index.mdx
================================================
---
title: Search
description: Configure Search in Fumadocs
icon: Search
index: true
---



================================================
FILE: apps/docs/content/docs/headless/search/orama-cloud.mdx
================================================
---
title: Orama Cloud
description: Integrate with Orama Cloud
---

To begin, create an account on Orama Cloud.

## REST API

REST API integration requires your docs to upload the indexes.

1. Create a new REST API index from Dashboard.
2. Use the following schema:

   ```json
   {
     "id": "string",
     "title": "string",
     "url": "string",
     "tag": "string",
     "page_id": "string",
     "section": "string",
     "section_id": "string",
     "content": "string"
   }
   ```

3. Then, using the private API key and index ID from dashboard, create a script to sync search indexes.

   ```json doc-gen:file
   {
     "file": "../../examples/next-mdx/scripts/sync-orama-cloud.mjs",
     "codeblock": {
       "lang": "js",
       "meta": "title=\"sync-index.mjs\""
     }
   }
   ```

4. Create a route handler in your Next.js app to export search indexes.

   ```json doc-gen:file
   {
     "file": "../../examples/next-mdx/app/static.json/orama-cloud.ts",
     "codeblock": {
       "meta": "title=\"app/static.json/route.ts\""
     }
   }
   ```

5. Run the script after `next build`.

### Search Client

To search documents on the client side, use [Fumadocs UI Search Dialog](/docs/ui/search#orama-cloud), or make your own implementation.

In addition, the headless search client of Fumadocs can handle state management for React.

```ts
import { useDocsSearch } from 'fumadocs-core/search/client';
import { OramaClient } from '@oramacloud/client';

const client = new OramaClient();

const { search, setSearch, query } = useDocsSearch({
  type: 'orama-cloud',
  client,
  params: {
    // search params
  },
});
```

## Web Crawler

1. Create a Crawler index from dashboard, and configure it correctly with the "Documentation" preset.
2. Copy the public API key and index ID from dashboard

### Search Client

Same as REST API integration, but make sure to set `index` to `crawler`.

```ts
import { useDocsSearch } from 'fumadocs-core/search/client';
import { OramaClient } from '@oramacloud/client';

const client = new OramaClient({
  endpoint: '<endpoint_url>',
  api_key: '<api_key>',
});

const { search, setSearch, query } = useDocsSearch({
  type: 'orama-cloud',
  index: 'crawler',
  client,
  params: {
    // optional search params
  },
});
```

It's same for Fumadocs UI:

```tsx
'use client';

import { OramaClient } from '@oramacloud/client';
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
import SearchDialog from 'fumadocs-ui/components/dialog/search-orama';

const client = new OramaClient({
  endpoint: '<endpoint_url>',
  api_key: '<api_key>',
});

export default function CustomSearchDialog(props: SharedProps) {
  return <SearchDialog {...props} index="crawler" client={client} />;
}
```



================================================
FILE: apps/docs/content/docs/headless/search/orama.mdx
================================================
---
title: Built-in Search
description: Built-in document search of Fumadocs
---

Fumadocs supports searching document based on Orama.

As the built-in search of Fumadocs, It is the default but also recommended
option since it's easier to setup and totally free.

## Setup

You can create the search route handler from the source object, or search indexes.

### From Source

Create a route handler from Source object.

```json doc-gen:file
{
  "file": "../../examples/next-mdx/app/api/search/route.ts",
  "codeblock": {
    "lang": "ts",
    "meta": "title=\"app/api/search/route.ts\""
  }
}
```

### From Search Indexes

Pass search indexes to the function.

Each index needs a `structuredData` field.
Usually, it has been provided by your content source (e.g. Fumadocs MDX).

```json doc-gen:file
{
  "file": "../../examples/next-mdx/app/api/search/route-full.ts",
  "codeblock": {
    "lang": "ts",
    "meta": "title=\"app/api/search/route.ts\""
  }
}
```

It can also be processed from Markdown/MDX document using the [Structure](/docs/headless/mdx/structure) remark plugin.

### Client

You can query it using:

- **Fumadocs UI**: The built-in [Search UI](/docs/ui/search) supports it out-of-the-box.
- **Search Client**:

  ```ts twoslash
  import { useDocsSearch } from 'fumadocs-core/search/client';

  const client = useDocsSearch({
    type: 'fetch',
  });
  ```

  <AutoTypeTable type='Extract<import("fumadocs-core/search/client").Client, { type: "fetch" }>' />

### Tag Filter

Support filtering by tag, it's useful for implementing multi-docs similar to this documentation.

```json doc-gen:file
{
  "file": "../../examples/next-mdx/app/api/search/route-tag.ts",
  "codeblock": {
    "lang": "ts",
    "meta": "title=\"app/api/search/route.ts\""
  }
}
```

and update your search client:

- **Fumadocs UI**:
  Configure [Tag Filter](/docs/ui/search#tag-filter) on Search UI.
- **Search Client**:
  pass a tag to the hook.

  ```ts
  import { useDocsSearch } from 'fumadocs-core/search/client';

  // Pass `tag` in your custom search dialog
  const client = useDocsSearch(
    {
      type: 'fetch',
    },
    undefined, // locale code, can be `undefined`
    'tag',
  );
  ```

### Index by Content

Index with the raw content of document (unrecommended).

```ts title="app/api/search/route.ts"
import { allDocs } from 'content-collections';
import { createSearchAPI } from 'fumadocs-core/search/server';

export const { GET } = createSearchAPI('simple', {
  indexes: allDocs.map((docs) => ({
    title: docs.title,
    content: docs.content, // Raw Content
    url: docs.url,
  })),
});
```

## Internationalization

```ts title="lib/source.ts" tab="createFromSource"
import { i18n } from '@/lib/i18n';
import { loader } from 'fumadocs-core/source';

// You only need i18n option on source object.
export const source = loader({
  i18n, // [!code highlight]
});
```

<include cwd meta='title="app/api/search/route.ts" tab="createI18nSearchAPI"'>
  ../../examples/i18n/app/api/search/route-full.ts
</include>

### Update Search Client

<Callout type="info" title="For Fumadocs UI">
  You can ignore this, Fumadocs UI handles this when you have i18n configured
  correctly.
</Callout>

Add `locale` to the search client, this will only allow pages with specified locale to be searchable by the user.

```ts
const { search, setSearch, query } = useDocsSearch(
  {
    type: 'fetch',
  },
  locale,
);
```

### Special Languages

If your language is not on the Orama [Supported Languages](https://docs.orama.com/open-source/supported-languages#officially-supported-languages) list, you have to configure them manually:

```json doc-gen:file
{
  "file": "../../examples/i18n/app/api/search/route.ts",
  "codeblock": {
    "lang": "ts",
    "meta": "title=\"app/api/search/route.ts\""
  }
}
```

See [Orama Docs](https://docs.orama.com/open-source/supported-languages/using-chinese-with-orama) for more details.

## Static Export

To work with Next.js static export, use `staticGET` from search server.

```ts title="app/api/search/route.ts"
import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// it should be cached forever
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source);
```

> `staticGET` is also available on `createSearchAPI`.

and update your search clients:

- **Fumadocs UI**: See [Static Export](/docs/ui/static-export#built-in-search) guide.

- **Search Client**:

  On your search client, use `static` instead of `fetch`.

  ```ts
  import { useDocsSearch } from 'fumadocs-core/search/client';

  const client = useDocsSearch({
    type: 'static',
  });
  ```

  <AutoTypeTable type='Extract<import("fumadocs-core/search/client").Client, { type: "static" }>' />

<Callout type='warn' title="Be Careful">

    Static Search requires clients to download the exported search indexes.
    For large docs sites, its size can be really big.

    Especially with i18n (e.g. Chinese tokenizers), the bundle size of tokenizers can exceed ~500MB.
    You should use 3rd party solutions like Algolia for these cases.

</Callout>

## Custom Algorithm

You can port your own search algorithm by returning a list of `SortedResult`
from your custom `/api/search/route.ts` route handler (API Endpoint). You can also integrate it
with Fumadocs UI.

<AutoTypeTable path="./content/docs/headless/props.ts" name="SortedResult" />

## Headless

You can host the search server on other backend such as Express and Elysia.

```ts
import { initAdvancedSearch } from 'fumadocs-core/search/server';

const server = initAdvancedSearch({
  // you still have to pass indexes
});

server.search('query', {
  // you can specify `locale` and `tag` here
});
```



================================================
FILE: apps/docs/content/docs/headless/search/trieve.mdx
================================================
---
title: Trieve Search
description: Integrate Trieve Search with Fumadocs
---

> This is a community maintained integration.

## Introduction

The Trieve Integration automatically configures Trieve Search for site search.

By default, it creates a chunk for **each paragraph** in your document, it is
officially recommended by Trieve.

## Setup

### Install Dependencies

```package-install
trieve-ts-sdk trieve-fumadocs-adapter
```

### Sign up on Trieve

Sign up and create a dataset. Then obtain 2 API keys where one has only read access and the other has admin access to create and delete chunks.
Store these credentials in environment variables.

<Callout title="Notice">
  One API Key should have only read access for the public facing search and the
  other should have admin access to create and delete chunks.
</Callout>

### Sync Dataset

You can export the search indexes from Next.js using a route handler:

```ts title="app/static.json/route.ts"
import { NextResponse } from 'next/server';
import { source } from '@/lib/source';
import { type TrieveDocument } from 'trieve-fumadocs-adapter/search/sync';

export const revalidate = false;

export function GET() {
  const results: TrieveDocument[] = [];

  for (const page of source.getPages()) {
    results.push({
      _id: page.url,
      structured: page.data.structuredData,
      url: page.url,
      title: page.data.title,
      description: page.data.description,
    });
  }

  return NextResponse.json(results);
}
```

Create a script, the `sync` function will sync search indexes.

```js title="update-index.mjs"
import * as fs from 'node:fs';
import { sync } from 'trieve-fumadocs-adapter/search/sync';
import { TrieveSDK } from 'trieve-ts-sdk';

const content = fs.readFileSync('.next/server/app/static.json.body');

// now you can pass it to `sync`
/** @type {import('trieve-fumadocs-adapter/search/sync').TrieveDocument[]} **/
const records = JSON.parse(content.toString());

const client = new TrieveSDK({
  apiKey: 'adminApiKey',
  datasetId: 'datasetId',
});

sync(client, records);
```

Make sure to run the script after build:

```json title="package.json"
{
  "scripts": {
    "build": "next build && node ./update-index.mjs"
  }
}
```

### Workflow

You may manually sync with `node ./update-index.mjs`, or
integrate it with your CI/CD pipeline.

<Callout type="info" title="Typescript Usage">
  You can use Bun or other JavaScript runtimes that supports TypeScript and ESM.
</Callout>

### Search UI

On Fumadocs UI, you can use the `SearchDialog` component:

```tsx title="components/search.tsx"
'use client';
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
import SearchDialog from 'trieve-fumadocs-adapter/components/dialog/search';
import { TrieveSDK } from 'trieve-ts-sdk';

const trieveClient = new TrieveSDK({
  apiKey: 'readOnlyApiKey',
  datasetId: 'datasetId',
});

export default function CustomSearchDialog(props: SharedProps) {
  return <SearchDialog trieveClient={trieveClient} {...props} />;
}
```

1. Replace `apiKey` and `datasetId` with your desired values.

2. [Replace the default search dialog](/docs/ui/search#replace-search-dialog) with your new component.

### Search Client

Add the `useTrieveSearch` hook:

```ts
import { TrieveSDK } from 'trieve-ts-sdk';
import { useTrieveSearch } from 'trieve-fumadocs-adapter/search/trieve';

const client = new TrieveSDK({
  apiKey: 'readOnlyApiKey',
  datasetId: 'datasetId',
});

const { search, setSearch, query } = useTrieveSearch(client);
```

## Options

### Tag Filter

To configure tag filtering, add a `tag` value to indexes.

```js
import { sync } from 'trieve-fumadocs-adapter/search/sync';
import { TrieveSDK } from 'trieve-ts-sdk';

const client = new TrieveSDK({
  apiKey: 'adminApiKey',
  datasetId: 'datasetId',
});

const documents = records.map((index) => ({
  ...index,
  tag: 'value', // [!code highlight]
}));

sync(client, documents);
```

#### Search UI

Enable Tag Filter.

```tsx title="components/search.tsx"
import SearchDialog from 'trieve-fumadocs-adapter/components/dialog/search';

<SearchDialog
  defaultTag="value"
  tags={[
    {
      name: 'Tag Name',
      value: 'value',
    },
  ]}
/>;
```

#### Search Client

The `tag_set` field is an attribute for filtering. To filter indexes by tag, use the filter on Trieve search clients.

```json
{
  "must": [
    {
      "field": "tag_set",
      "match": ["value"]
    }
  ]
}
```

Or with `useTrieveSearch` hook:

```ts
import { TrieveSDK } from 'trieve-ts-sdk';
import { useTrieveSearch } from 'trieve-fumadocs-adapter/search/trieve';

const client = new TrieveSDK({
  apiKey: 'readOnlyApiKey',
  datasetId: 'datasetId',
});

const { search, setSearch, query } = useTrieveSearch(
  client,
  undefined,
  '<your tag value>',
);
```



================================================
FILE: apps/docs/content/docs/headless/utils/find-neighbour.mdx
================================================
---
title: Find Neighbours
description: Find the neighbours of a page from the page tree
---

Find the neighbours of a page from the page tree, it returns the next and
previous page of a given page. It is useful for implementing a footer.

## Usage

It requires a page tree and the url of page.

```ts
import { findNeighbour } from 'fumadocs-core/server';
import { pageTree } from '@/lib/source';

const neighbours = findNeighbour(pageTree, '/url/to/page');
```

| Parameter | Type       | Description     |
| --------- | ---------- | --------------- |
| tree      | `PageTree` | The page tree   |
| url       | `string`   | The url of page |



================================================
FILE: apps/docs/content/docs/headless/utils/get-toc.mdx
================================================
---
title: Get TOC
description: Parse Table of contents from markdown/mdx content
---

Parse Table of contents from markdown/mdx content.

> [You can use the remark plugin directly](/docs/headless/mdx/headings)

## Usage

Note: If you're using a CMS, you should use the API provided by the CMS instead.

```ts
import { getTableOfContents } from 'fumadocs-core/server';

const toc = getTableOfContents('## markdown content');
```

### Output

An array of [`TOCItemType`](/docs/headless/mdx/headings#output) is returned.



================================================
FILE: apps/docs/content/docs/headless/utils/git-last-edit.mdx
================================================
---
title: Last Modified Time
description: Get the last edit time of a file in Github repository
---

## Usage

Pass your repository name, and the path to file.

```ts
import { getGithubLastEdit } from 'fumadocs-core/server';

const time = await getGithubLastEdit({
  owner: 'fuma-nama',
  repo: 'fumadocs',
  // example: "content/docs/index.mdx"
  path: `content/docs/${page.file.path}`,
});
```

### Github Token

Notice that you may easily reach the rate limit in development mode. Hence, you
should pass a Github token for a higher rate limit.

Learn more about
[Authenticating to the REST API](https://docs.github.com/en/rest/overview/authenticating-to-the-rest-api).

```ts
import { getGithubLastEdit } from 'fumadocs-core/server'

 const time = await getGithubLastEdit({
    ...,
    token: `Bearer ${process.env.GIT_TOKEN}`
  })
```

Also, you can skip this in development mode if you don't need that
functionality.

```ts
process.env.NODE_ENV === 'development'? null : getGithubLastEdit(...)
```



================================================
FILE: apps/docs/content/docs/headless/utils/index.mdx
================================================
---
title: Utilities
index: true
description: Utilities to provide extra functionality to your docs
---



================================================
FILE: apps/docs/content/docs/headless/utils/meta.json
================================================
{
  "title": "Utilities",
  "pages": ["..."]
}



================================================
FILE: apps/docs/content/docs/mdx/async.mdx
================================================
---
title: Async Mode
description: Runtime compilation of content files.
---

## Introduction

By default, all Markdown and MDX files need to be pre-compiled first, the same constraint also applies on development server.

This may result in longer dev server start time for large docs sites, you can enable Async Mode on `doc` collections to improve this.

### Setup

Install required dependencies.

```package-install
@fumadocs/mdx-remote shiki
```

Enable Async Mode.

```ts tab="Docs Collection"
import { defineDocs } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    async: true,
  },
});
```

```ts tab="Doc Collection"
import { defineCollections } from 'fumadocs-mdx/config';

export const doc = defineCollections({
  type: 'doc',
  dir: 'content/docs',
  async: true,
});
```

### Usage

Async Mode allows on-demand compilation of Markdown and MDX content, by moving the compilation process from build time to Next.js runtime.

However, you need to invoke the `load()` async function to load and compile content.

For example:

```tsx title="lib/source.ts"
import { loader } from 'fumadocs-core/source';
import { docs } from '@/.source';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});
```

```tsx title="page.tsx"
import { source } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';

const page = source.getPage(['...']);

if (page) {
  // frontmatter properties are available
  console.log(page.data);

  // Markdown content requires await
  const { body: MdxContent, toc } = await page.data.load();

  console.log(toc);

  return <MdxContent components={getMDXComponents()} />;
}
```

When using Async Mode, we highly recommend to use 3rd party services to implement search, which usually has a better capability to handle massive amount of content to index.

### Constraints

It comes with some limitations on MDX features.

- No import/export allowed in MDX files, for MDX components, pass them from the `components` prop instead.
- Images must be referenced with URL (e.g. `/images/test.png`). Don't use **file paths** like `./image.png`, you should locate your images in `public` folder, and reference them with URLs.



================================================
FILE: apps/docs/content/docs/mdx/collections.mdx
================================================
---
title: Collections
description: Collection of content data for your app
---

## Define Collections

Define a collection to parse a certain set of files.

```ts
import { defineCollections } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const blog = defineCollections({
  type: 'doc',
  dir: './content/blog',
  schema: z.object({
    // schema
  }),
  // other options
});
```

### `type`

The accepted type of collection.

```ts
import { defineCollections } from 'fumadocs-mdx/config';

// only scan for json/yaml files
export const metaFiles = defineCollections({
  type: 'meta',
  // options
});
```

- `type: meta`

  Accept JSON/YAML Files, available options:

  <AutoTypeTable path="./content/docs/mdx/props.ts" name="MetaCollection" />

- `type: doc`

  Markdown/MDX Documents, available options:

  <AutoTypeTable path="./content/docs/mdx/props.ts" name="DocCollection" />

### `dir`

Directories to scan input files.

### `schema`

The schema to validate file data (frontmatter on `doc` type, content on `meta` type).

```ts
import { defineCollections } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const blog = defineCollections({
  type: 'doc',
  dir: './content/blog',
  schema: z.object({
    name: z.string(),
  }),
});
```

> [Standard Schema](https://standardschema.dev) compatible libraries, including Zod are supported.

Note that the validation is done by build time, hence the output must be serializable.
You can also pass a function and receives the transform context.

```ts
import { defineCollections } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const blog = defineCollections({
  type: 'doc',
  dir: './content/blog',
  schema: (ctx) => {
    return z.object({
      name: z.string(),
      testPath: z.string().default(
        // original file path
        ctx.path,
      ),
    });
  },
});
```

### `mdxOptions`

Customise MDX options on collection level.

```ts title="source.config.ts"
import { defineCollections, getDefaultMDXOptions } from 'fumadocs-mdx/config';

export const blog = defineCollections({
  type: 'doc',
  mdxOptions: {
    // mdx options
  },
});
```

By design, this will remove all default settings applied by your global config and Fumadocs MDX.
You have full control over MDX options.

You can use `getDefaultMDXOptions` to apply default configurations, it accepts the [extended MDX Options](/docs/mdx/mdx#extended).

```ts title="source.config.ts"
import { defineCollections, getDefaultMDXOptions } from 'fumadocs-mdx/config';

export const blog = defineCollections({
  type: 'doc',
  mdxOptions: getDefaultMDXOptions({
    // extended mdx options
  }),
});
```

> This API only available on `doc` type.

## Define Docs

Define a collection for Fumadocs.

```ts
import { defineDocs } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: '/my/content/dir',
  docs: {
    // optional, options of `doc` collection
  },
  meta: {
    // optional, options of `meta` collection
  },
});
```

### `dir`

Instead of per collection, you should customise `dir` from `defineDocs`:

```ts
import { defineDocs } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'my/content/dir',
});
```

### `schema`

You can extend the default Zod schema of `docs` and `meta`.

```ts
import { frontmatterSchema, metaSchema, defineDocs } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema.extend({
      index: z.boolean().default(false),
    }),
  },
  meta: {
    schema: metaSchema.extend({
      // other props
    }),
  },
});
```



================================================
FILE: apps/docs/content/docs/mdx/global.mdx
================================================
---
title: Global Options
description: Customise Fumadocs MDX
---

## Global Options

Shared options of Fumadocs MDX.

```ts title="source.config.ts"
import { defineConfig } from 'fumadocs-mdx/config';

export default defineConfig({
  // global options
});
```

<AutoTypeTable path="./content/docs/mdx/props.ts" name="GlobalConfig" />

### MDX Options

Customise the MDX processor options for MDX files.

```ts title="source.config.ts"
import { defineConfig } from 'fumadocs-mdx/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath],
    // When order matters
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
});
```

Some default options are applied by Fumadocs MDX, see [Extended MDX Options](/docs/mdx/mdx#extended) for available options.



================================================
FILE: apps/docs/content/docs/mdx/include.mdx
================================================
---
title: Include
description: Reuse content from other files.
---

## Usage

### Markdown

Specify the target Markdown file path in `<include>` tag (relative to the Markdown file itself).

```mdx title="page.mdx"
<include>./another.mdx</include>
```

This will display the content from target file (e.g. `another.mdx`).

### CodeBlock

For other types of files, it will become a codeblock:

```mdx title="page.mdx"
<include>./script.ts</include>

<include lang="tsx" meta='title="lib.ts"'>
  ./script.ts
</include>
```

### `cwd`

Resolve relative paths from cwd instead of Markdown file:

```mdx
<include cwd lang="tsx" meta='title="lib.ts"'>
  ./script.ts
</include>
```



================================================
FILE: apps/docs/content/docs/mdx/index.mdx
================================================
---
title: Introduction
description: Learn how to use Fumadocs MDX in your documentation
icon: Album
---

## Introduction

Fumadocs MDX is the official content source of Fumadocs.

It provides the tool for Next.js to transform content into type-safe data, similar to Contentlayer and Content Collections.
This library isn't Fumadocs-only, you can use it to handle blog and other contents.

## Getting Started

Setup Fumadocs MDX for your Fumadocs application.

```package-install
fumadocs-mdx @types/mdx
```

Add the plugin to your `next.config.mjs` file.

```js
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);
```

<Callout title="ESM Only" type='warn' className="mt-4">

    The Next.js config must be a `.mjs` file since Fumadocs is ESM-only.

</Callout>

### Defining Collections

**Collection** refers to a collection containing a certain type of files, there's two types of collections:

- `doc`: Markdown/MDX documents
- `meta`: JSON files

For example, a `doc` collection will include only the `.md` and `.mdx` files:

<Files>
  <Folder name="folder" defaultOpen>
    <File name="ui.md" />
  </Folder>
  <File name="hello.md" />
  <File name="index.mdx" />
  <File
    name="meta.json"
    className="opacity-50 cursor-not-allowed"
    aria-disabled
  />
</Files>

Fumadocs MDX transforms collections into arrays of type-safe data, accessible in your Next.js app.

You can define collections by creating a `source.config.ts` file.

<Tabs items={["doc", "meta"]}>

    <Tab value='doc'>

        Markdown & MDX content will be compiled into a React Server Component, with other useful properties like **Table of Contents**.

```ts title="source.config.ts"
import { defineCollections } from 'fumadocs-mdx/config';

export const test = defineCollections({
  type: 'doc',
  dir: 'content/docs',
});
```

    </Tab>

    <Tab value='meta'>

        JSON data will be transformed with `JSON.parse` into an array of objects.

```ts title="source.config.ts"
import { defineCollections } from 'fumadocs-mdx/config';

export const test = defineCollections({
  type: 'meta',
  dir: 'content/docs',
});
```

    </Tab>

</Tabs>

For Fumadocs to work, you can define a `docs` collection:

```ts title="source.config.ts"
import { defineDocs } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    // options for `doc` collection
  },
  meta: {
    // options for `meta` collection
  },
});
```

The `docs` collection combines a `meta` and `doc` collection, which scans through all Markdown, MDX and JSON files under your `content/docs` directory.
They are needed for Fumadocs to work.

### Output Folder

Once you run `next dev` or `next build`, it generates a `.source` folder in root directory.

The folder contains all output data and its types, you should add it to `.gitignore`.

The `fumadocs-mdx` command generates types for `.source` folder without running Next.js, you can add it as a post install script to ensure types are always generated when initializing the project.

```json title="package.json"
{
  "scripts": {
    "postinstall": "fumadocs-mdx"
  }
}
```

### Accessing Collections

**Collection Output** is the generated data of a collection, it can have a different type/shape depending on the collection type and schema.

You can access the collection output from `.source` folder with its original name:

```ts
// source.config.ts
import { defineDocs } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    // options for `doc` collection
  },
  meta: {
    // options for `meta` collection
  },
});

// lib/source.ts
import { docs } from '@/.source';

console.log(docs);
```

In this guide, We will import the `.source` folder with `@/.source`, you can also change it to your own import alias.
Make sure you are importing from `.source` rather than `source.config.ts`.

To integrate with Fumadocs, you can use the `toFumadocsSource()` function of `docs` collection output.

```ts title="lib/source.ts"
import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});
```

And for other types of collections, the output may different, you can also log them to see the differences.

### Start Server

```bash
next dev
```

A `.source` folder should be created. You can log and see if it is loaded correctly.

### Usage

Generally, you'll interact with Fumadocs MDX through the [Source](/docs/headless/source-api#output) object (output of `loader`).

```tsx
import { source } from '@/lib/source';

const page = source.getPage(['slugs']);

if (page) {
  // access page data [!code highlight]
  console.log(page.data);

  // frontmatter properties are also inside [!code highlight]
  console.log(page.data.title);
}
```

To render the page, use `page.data.body` as a component.

```tsx
import { getMDXComponents } from '@/mdx-components';

const MDX = page.data.body;

// set your MDX components with `components` prop
return <MDX components={getMDXComponents()} />;
```

## FAQ

### Built-in Properties

These properties are exported from MDX files by default.

| Property         | Description                                     |
| ---------------- | ----------------------------------------------- |
| `frontmatter`    | Frontmatter                                     |
| `toc`            | Table of Contents                               |
| `structuredData` | Structured Data, useful for implementing search |

### Customise Frontmatter

Use the [`schema`](/docs/mdx/collections#schema-1) option to pass a validation schema to validate frontmatter and define its output properties.

### Syntax Highlighting

Use [`rehypeCodeOptions`](/docs/mdx/mdx#rehype-plugins) on global or collection-level config.

### MDX Plugins

For other customisation needs, see [MDX Options](/docs/mdx/mdx).

### Multiple Collections

You can define more collections, see [Collections](/docs/mdx/collections) for available options.

```ts title="source.config.ts"
import { defineDocs } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
});

export const blogPosts = defineDocs({
  dir: 'content/blog',
});
```

And use `loader` for a simple way to interact with collection output.

```ts title="lib/source.ts"
import { docs, blogPosts } from '@/.source';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});

export const blog = loader({
  baseUrl: '/blog',
  source: blogPosts.toFumadocsSource(),
});
```



================================================
FILE: apps/docs/content/docs/mdx/last-modified.mdx
================================================
---
title: Last Modified Time
description: Output the last modified time of a document
---

## Usage

This feature is not enabled by default, you can enable this from config file. Notice that it only supports Git as version control.
Please ensure you have Git installed on your machine, and **the repository is not shallow cloned**, as it relies on your local Git history.

```ts title="source.config.ts"
import { defineConfig } from 'fumadocs-mdx/config';

export default defineConfig({
  lastModifiedTime: 'git', // [!code highlight]
});
```

### Access the Property

After doing this, a `lastModified` number will be exported for each document, you can convert it to a JavaScript Date object.

```ts
import { source } from '@/lib/source';

const page = source.getPage(['...']);

console.log(new Date(page.data.lastModified));
// or with async mode:
const { lastModified } = await page.data.load();
console.log(new Date(lastModified));
```



================================================
FILE: apps/docs/content/docs/mdx/mdx.mdx
================================================
---
title: MDX Options
description: Configure MDX processor for Fumadocs MDX
---

## Customising MDX Processor

Fumadocs MDX uses [MDX Compiler](https://mdxjs.com/packages/mdx) to compile MDX files into JavaScript files.

You can customise it on [Global Config](/docs/mdx/global#mdx-options) or [Collection Config](/docs/mdx/collections#mdxoptions).

## Extended MDX Options [#extended]

Fumadocs MDX will apply some default MDX options, to make features like **syntax highlighting** work out of the box.

To allow overriding the defaults, Fumadocs MDX's `mdxOptions` option accepts **Extended MDX Options** on top of [`ProcessorOptions`](https://mdxjs.com/packages/mdx/#processoroptions).
You can see the additional options below:

### Remark Plugins

These plugins are applied by default:

- [Remark Image](/docs/headless/mdx/remark-image) - Handle images
- [Remark Heading](/docs/headless/mdx/headings) - Extract table of contents
- [Remark Structure](/docs/headless/mdx/structure) - Generate search indexes
- Remark Exports - Exports the output generated by remark plugins above

You can add other remark plugins with:

```ts tab="Global Config"
import { defineConfig } from 'fumadocs-mdx/config';
import { myPlugin } from './remark-plugin';

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [myPlugin],
    // You can also pass a function to control the order of remark plugins.
    remarkPlugins: (v) => [myPlugin, ...v],
  },
});
```

```ts tab="Collection Config"
import { defineCollections, getDefaultMDXOptions } from 'fumadocs-mdx/config';
import { myPlugin } from './remark-plugin';

export const blog = defineCollections({
  type: 'doc',
  mdxOptions: getDefaultMDXOptions({
    remarkPlugins: [myPlugin],
    // You can also pass a function to control the order of remark plugins.
    remarkPlugins: (v) => [myPlugin, ...v],
  }),
});
```

### Rehype Plugins

These plugins are applied by default:

- [Rehype Code](/docs/headless/mdx/rehype-code) - Syntax highlighting

Same as remark plugins, you can pass an array or a function to add other rehype plugins.

```ts tab="Global Config"
import { defineConfig } from 'fumadocs-mdx/config';
import { myPlugin } from './rehype-plugin';

export default defineConfig({
  mdxOptions: {
    rehypePlugins: (v) => [myPlugin, ...v],
  },
});
```

```ts tab="Collection Config"
import { defineCollections, getDefaultMDXOptions } from 'fumadocs-mdx/config';
import { myPlugin } from './rehype-plugin';

export const blog = defineCollections({
  type: 'doc',
  mdxOptions: getDefaultMDXOptions({
    rehypePlugins: (v) => [myPlugin, ...v],
  }),
});
```

### Customise Built-in Plugins

Customise the options of built-in plugins like:

```ts tab="Global Config"
import { defineConfig } from 'fumadocs-mdx/config';

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      // options
    },
    remarkImageOptions: {
      // options
    },
    remarkHeadingOptions: {
      // options
    },
  },
});
```

```ts tab="Collection Config"
import { defineCollections, getDefaultMDXOptions } from 'fumadocs-mdx/config';

export const blog = defineCollections({
  type: 'doc',
  mdxOptions: getDefaultMDXOptions({
    rehypeCodeOptions: {
      // options
    },
    remarkImageOptions: {
      // options
    },
    remarkHeadingOptions: {
      // options
    },
  }),
});
```

### Export Properties from `vfile.data`

Some remark plugins store their output in `vfile.data` (an compile-time memory) which cannot be accessed from your code.
Fumadocs MDX applies a remark plugin that turns `vfile.data` properties into ESM exports, so that you can access these properties when importing the MDX file.

You can define additional properties to be exported.

```ts tab="Global Config"
import { defineConfig } from 'fumadocs-mdx/config';

export default defineConfig({
  mdxOptions: {
    valueToExport: ['dataName'],
  },
});
```

```ts tab="Collection Config"
import { defineCollections, getDefaultMDXOptions } from 'fumadocs-mdx/config';

export const blog = defineCollections({
  type: 'doc',
  mdxOptions: getDefaultMDXOptions({
    valueToExport: ['dataName'],
  }),
});
```

By default, it includes:

- `toc` for the Remark Heading plugin
- `structuredData` for the Remark Structure Plugin
- `frontmatter` for the frontmatter of MDX (using `gray-matter`)



================================================
FILE: apps/docs/content/docs/mdx/meta.json
================================================
{
  "title": "Fumadocs MDX",
  "description": "The official content source",
  "icon": "Pencil",
  "root": true,
  "pages": [
    "---Guide---",
    "index",
    "performance",
    "---Configuration---",
    "collections",
    "global",
    "mdx",
    "plugin",
    "---Features---",
    "include",
    "last-modified",
    "manifest",
    "async",
    "..."
  ]
}



================================================
FILE: apps/docs/content/docs/mdx/page.mdx
================================================
---
title: Use as Page
description: Use MDX file as a page
---

## Setup

You can use `page.mdx` instead of `page.tsx` for creating a new page under the app directory.

However, it doesn't have MDX components by default so you have to provide them:

```tsx title="mdx-components.tsx"
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents, // for Fumadocs UI
    ...components,
  };
}

// export a `useMDXComponents()` that returns MDX components
export const useMDXComponents = getMDXComponents; // [!code ++]
```

```ts title="source.config.ts"
import { defineConfig } from 'fumadocs-mdx/config';

export default defineConfig({
  mdxOptions: {
    // Path to import your `mdx-components.tsx` above. [!code ++]
    providerImportSource: '@/mdx-components',
  },
});
```

### Usage

```mdx title="app/test/page.mdx"
{/* this will enable Typography styles of Fumadocs UI */}
export { withArticle as default } from 'fumadocs-ui/page';

## Hello World
```



================================================
FILE: apps/docs/content/docs/mdx/performance.mdx
================================================
---
title: Performance
description: The performance of Fumadocs MDX
icon: Rocket
---

## Overview

Fumadocs MDX is a bundler plugin, in other words, it has a higher performance bottleneck.
With bundlers like Webpack and Turbopack, it is enough for large docs sites with nearly 500+ MDX files, which is sufficient for almost all use cases.

Since Fumadocs MDX works with your bundler, you can import any files including client components in your MDX files.
This allows a high flexibility and ensures everything is optimized by default.

### Image Optimization

Fumadocs MDX resolves images into static imports with [Remark Image](/docs/headless/mdx/remark-image).
Therefore, your images will be optimized automatically by the Next.js Image API.

```mdx
![Hello](./hello.png)

or in public folder

![Hello](/hello.png)
```

Yields:

```mdx
import HelloImage from './hello.png';

<img alt="Hello" src={HelloImage} />
```

![Banner](/banner.png)

## Caveats

Although Fumadocs MDX can handle nearly 500+ files, it could be slow and inefficient.
A huge amount of MDX files can cause an extremely high memory usage during build and development mode.

This is because of:

- Bundlers do a lot of work under the hood to bundle MDX and JavaScript files and optimize performance.
- Bundlers are not supposed to compile hundreds of MDX files.

### Solutions

The main solution is to make the compilation on-demand, such that content is only loaded when it's being requested.

#### Remote Source

Remote sources don't need to pre-compile MDX files, it can compile them on-demand with SSG which can **highly increase your build speed.**
However, you cannot use import in MDX files anymore.

See [Custom Source](/docs/headless/custom-source) for configuring remote sources.

#### Async Mode

See [Async Mode](/docs/mdx/async).



================================================
FILE: apps/docs/content/docs/mdx/plugin.mdx
================================================
---
title: Next.js Loader
description: Customise the Next.js loader
---

## Plugin Options

Fumadocs MDX offers loaders and a Fumadocs [Source API](/docs/headless/source-api) adapter to integrate with Fumadocs.
You can configure the plugin by passing options to `createMDX` in `next.config.mjs`.

### Config Path

Customise the path of config file.

```ts
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX({
  configPath: './my-config.ts',
});
```

### Development Server

When running in development mode (`next dev`), a file watcher will be started to watch for changes.
It automatically re-generates the index file in `.source` folder, ensuring Next.js hot reload is working properly.



================================================
FILE: apps/docs/content/docs/mdx/props.ts
================================================
export type {
  GlobalConfig,
  DocCollection,
  MetaCollection,
} from 'fumadocs-mdx/config';



================================================
FILE: apps/docs/content/docs/openapi/index.mdx
================================================
---
title: List of Achievements
description: Retrieves the list of game achievements the user has earned.
full: true
_openapi:
  method: GET
  route: /api/game-link/achieve
  toc: []
  structuredData:
    headings: []
    contents:
      - content: Retrieves the list of game achievements the user has earned.
---

{/* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. */}

<APIPage
  document={'https://waktaverse.games/api-docs-json'}
  operations={[{ path: '/api/game-link/achieve', method: 'get' }]}
  webhooks={[]}
  hasHead={false}
/>



================================================
FILE: apps/docs/content/docs/openapi/meta.json
================================================
{
  "title": "OpenAPI Example",
  "description": "A demo for Fumadocs OpenAPI",
  "root": true,
  "icon": "Rocket"
}



================================================
FILE: apps/docs/content/docs/ui/comparisons.mdx
================================================
---
title: Comparisons
description: How is Fumadocs different from other existing frameworks?
icon: GitCompareArrows
---

## Nextra

Fumadocs is highly inspired by Nextra. For example, the Routing Conventions. That is why
`meta.json` also exists in Fumadocs.

Nextra is more opinionated than Fumadocs. Fumadocs is accelerated by App Router. As a result, It provides many server-side functions, and you have to
configure things manually compared to simply editing a configuration file.

Fumadocs works great if you want more control over everything, such as
adding it to an existing codebase or implementing advanced routing.

### Feature Table

| Feature             | Fumadocs     | Nextra                    |
| ------------------- | ------------ | ------------------------- |
| Static Generation   | Yes          | Yes                       |
| Cached              | Yes          | Yes                       |
| Light/Dark Mode     | Yes          | Yes                       |
| Syntax Highlighting | Yes          | Yes                       |
| Table of Contents   | Yes          | Yes                       |
| Full-text Search    | Yes          | Yes                       |
| i18n                | Yes          | Yes                       |
| Last Git Edit Time  | Yes          | Yes                       |
| Page Icons          | Yes          | Yes, via `_meta.js` files |
| RSC                 | Yes          | Yes                       |
| Remote Source       | Yes          | Yes                       |
| SEO                 | Via Metadata | Yes                       |
| Built-in Components | Yes          | Yes                       |
| RTL Layout          | Yes          | Yes                       |

### Additional Features

Features supported via 3rd party libraries like [TypeDoc](https://typedoc.org) will not be listed here.

| Feature                    | Fumadocs | Nextra |
| -------------------------- | -------- | ------ |
| OpenAPI Integration        | Yes      | No     |
| TypeScript Docs Generation | Yes      | No     |
| TypeScript Twoslash        | Yes      | Yes    |

## Mintlify

Mintlify is a documentation service, as compared to Fumadocs, it offers a free tier but isn't completely free and open source.

Fumadocs is not as powerful as Mintlify, for example, the OpenAPI integration of Mintlify.
As the creator of Fumadocs, I wouldn't recommend switching to Fumadocs from Mintlify if you're satisfied with the current way you build docs.
However, I believe Fumadocs is a suitable tool for all Next.js developers who want to have elegant docs.

## Docusaurus

Docusaurus is a powerful framework based on React.js. It offers many cool
features with plugins and custom themes.

### Better DX

Since Fumadocs is built on the top of Next.js, you'll have to start the Next.js dev
server every time to review changes, and initial boilerplate code is relatively more
compared to Docusaurus.

For a simple docs, Docusaurus might be a better choice if you don't need any Next.js specific functionality.

However, when you want to use Next.js, or seek extra customizability like tuning default UI components, Fumadocs could be a better choice.

### Plugins

You can easily achieve many things with plugins, their ecosystem is indeed larger and maintained by many contributors.

In comparison, the flexibility of Fumadocs allows you to implement them on your own, it may take longer to tune it to your satisfaction.



================================================
FILE: apps/docs/content/docs/ui/customisation.mdx
================================================
---
title: Overview
description: An overview of Fumadocs UI
---

## Architecture

<UiOverview />

|               |                                                         |
| ------------- | ------------------------------------------------------- |
| **Sidebar**   | Display site title and navigation elements.             |
| **Page Tree** | Passed by you, mainly rendered as the items of sidebar. |
| **Docs Page** | All content of the page.                                |
| **TOC**       | Navigation within the article.                          |

## Customisation

### Layouts

You can use the exposed options of different layouts:

<Cards>
  <Card title="Docs Layout" href="/docs/ui/layouts/docs">
    Layout for docs
  </Card>
  <Card title="Docs Page" href="/docs/ui/layouts/page">
    Layout for docs content
  </Card>
  <Card title="Notebook Layout" href="/docs/ui/layouts/notebook">
    A more compact version of Docs Layout
  </Card>
  <Card title="Home Layout" href="/docs/ui/layouts/home-layout">
    Layout for other pages
  </Card>
</Cards>

### Components

Fumadocs UI also offers styled components for interactive examples to enhance your docs, you can customise them with exposed props like `style` and `className`.

See [Components](/docs/ui/components).

### Design System

Since the design system is built on Tailwind CSS, you can customise it [with CSS Variables](/docs/ui/theme#colors).

### CLI

Fumadocs CLI is a tool that installs components to your codebase, similar to Shadcn UI.

```package-install
npx @fumadocs/cli
```

Use it to install Fumadocs UI components:

```package-install
npx @fumadocs/cli add
```

Or customise layouts:

```package-install
npx @fumadocs/cli customise
```



================================================
FILE: apps/docs/content/docs/ui/index.mdx
================================================
---
title: Quick Start
description: Getting Started with Fumadocs
icon: Album
---

## Introduction

Fumadocs <span className='text-fd-muted-foreground text-sm'>(Foo-ma docs)</span> is a **documentation framework** based on Next.js, designed to be fast, flexible,
and composes seamlessly into Next.js App Router.

Fumadocs has different parts:

<Cards>

<Card icon={<CpuIcon className="text-purple-300" />} title='Fumadocs Core'>

Handles most of the logic, including document search, content source adapters, and Markdown extensions.

</Card>

<Card icon={<PanelsTopLeft className="text-blue-300" />} title='Fumadocs UI'>

The default theme of Fumadocs offers a beautiful look for documentation sites and interactive components.

</Card>

<Card icon={<Database />} title='Content Source'>

The source of your content, can be a CMS or local data layers like [Fumadocs MDX](/docs/mdx) (the official content source).

</Card>

<Card icon={<Terminal />} title='Fumadocs CLI'>

A command line tool to install UI components and automate things, useful for customizing layouts.

</Card>

</Cards>

<Callout title="Want to learn more?">
  Read our in-depth [What is Fumadocs](/docs/ui/what-is-fumadocs) introduction.
</Callout>

### Terminology

**Markdown/MDX:** Markdown is a markup language for creating formatted text. Fumadocs supports Markdown and MDX (superset of Markdown) out-of-the-box.

Although not required, some basic knowledge of Next.js App Router would be useful for further customisations.

## Automatic Installation

A minimum version of Node.js 18 required, note that Node.js 23.1 might have problems with Next.js production build.

<Tabs groupId='package-manager' persist items={['npm', 'pnpm', 'yarn', 'bun']}>

```bash tab="npm"
npm create fumadocs-app
```

```bash tab="pnpm"
pnpm create fumadocs-app
```

```bash tab="yarn"
yarn create fumadocs-app
```

```bash tab="bun"
bun create fumadocs-app
```

</Tabs>

It will ask you:

- the React.js framework to use (the docs is only written for Next.js).
- the content source to use.

A new fumadocs app should be initialized. Now you can start hacking!

<Callout title='From Existing Codebase?'>

    You can follow the [Manual Installation](/docs/ui/manual-installation) guide to get started.

</Callout>

### Enjoy!

Create your first MDX file in the docs folder.

```mdx title="content/docs/index.mdx"
---
title: Hello World
---

## Yo what's up
```

Run the app in development mode and see http://localhost:3000/docs.

```package-install
npm run dev
```

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](/docs/headless/source-api) provides the interface to access your content.
- `app/layout.config.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Writing Content

For authoring docs, make sure to read:

<Cards>
  <Card href="/docs/ui/markdown" title="Markdown">
    Fumadocs has some additional features for authoring content.
  </Card>
  <Card href="/docs/ui/navigation" title="Navigation">
    Learn how to customise navigation links and sidebar items.
  </Card>
  <Card href="/docs/ui/page-conventions" title="Routing">
    Learn how to organise content.
  </Card>
</Cards>

### Content Source

Content source handles all your content, like compiling Markdown files and validating frontmatter.

<Tabs items={['Fumadocs MDX', 'Custom Source']}>

    <Tab value='Fumadocs MDX'>

        A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

        Read the [Introduction](/docs/mdx) for further details.

    </Tab>

    <Tab value='Custom Source'>

        Fumadocs is not Markdown-exclusive. For other sources like Sanity, you can build a [custom content source](/docs/headless/custom-source).

    </Tab>

</Tabs>

### Customise UI

See [Customisation Guide](/docs/ui/customisation).

## FAQ

Some common questions you may encounter.

<Accordions>
    <Accordion id='change-base-url' title="How to change the base route of /docs?">

You can change the base route of docs (e.g. from `/docs/page` to `/info/page`).
Since Fumadocs uses Next.js App Router, you can simply rename the route:

<Files>
  <Folder name="app/docs" defaultOpen className="opacity-50" disabled>
    <File name="layout.tsx" />
  </Folder>
  <Folder name="app/info" defaultOpen>
    <File name="layout.tsx" />
  </Folder>
</Files>

And tell Fumadocs to use the new route in `source.ts`:

```ts title="lib/source.ts"
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/info',
  // other options
});
```

    </Accordion>
    <Accordion id='dynamic-route' title="It uses Dynamic Route, will it be poor in performance?">

Next.js turns dynamic route into static routes when `generateStaticParams` is configured.
Hence, it is as fast as static pages.

You can enable Static Exports on Next.js to get a static build output. (Notice that Route Handler doesn't work with static export, you have to configure static search)

    </Accordion>
    <Accordion id='custom-layout-docs-page' title='How to create a page in /docs without docs layout?'>

Same as managing layouts in Next.js App Router, remove the original MDX file from content directory (`/content/docs`).
This ensures duplicated pages will not cause errors.

Now, You can add the page to another route group, which isn't a descendant of docs layout.

For example, to replace `/docs/test`:

<Files>
  <File name="(home)/docs/test/page.tsx" />
  <Folder name="docs">
    <File name="layout.tsx" />
    <File name="[[...slug]]/page.tsx" />
  </Folder>
</Files>

For `/docs`, you need to change the catch-all route to be non-optional:

<Files>
  <File name="(home)/docs/page.tsx" />
  <Folder name="docs" defaultOpen>
    <File name="layout.tsx" />
    <File name="[...slug]/page.tsx" />
  </Folder>
</Files>

    </Accordion>

    <Accordion id='multi-versions' title="How to implement docs with multi-version?">
        Use a separate deployment for each version.

        On Vercel, this can be done by creating another branch for a specific version on your GitHub repository.
        To link to the sites of other versions, use the Links API or a custom navigation component.
    </Accordion>

    <Accordion id='multi-docs' title="How to implement multi-docs?">
        We recommend to use [Sidebar Tabs](/docs/ui/navigation/sidebar#sidebar-tabs).
    </Accordion>

</Accordions>

## Learn More

New to here? Don't worry, we are welcome for your questions.

If you find anything confusing, please give your feedback on [Github Discussion](https://github.com/fuma-nama/fumadocs/discussions)!

<Cards>
  <Card
    href="/docs/ui/static-export"
    title="Configure Static Export"
    description="Learn how to enable static export on your docs"
  />
  <Card
    href="/docs/ui/search"
    title="Customise Search"
    description="Learn how to customise document search"
  />
  <Card
    href="/docs/ui/theme"
    title="Theming"
    description="Add themes to Fumadocs UI"
  />
  <Card
    href="/docs/ui/components"
    title="Components"
    description="See all available components to enhance your docs"
  />
</Cards>



================================================
FILE: apps/docs/content/docs/ui/internationalization.mdx
================================================
---
title: Internationalization
description: Support multiple languages in your documentation
---

<Callout title='Before you get started'>

    Fumadocs is not a full-powered i18n library, it manages only its own components and utilities.

    You can use other libraries like [next-intl](https://github.com/amannn/next-intl) for the rest of your app.
    Read the [Next.js Docs](https://nextjs.org/docs/app/building-your-application/routing/internationalization) to learn more about implementing I18n in Next.js.

</Callout>

## Manual Setup

Define the i18n configurations in a file, we will import it with `@/ilb/i18n` in this guide.

<include cwd meta='title="lib/i18n.ts"'>
  ../../examples/i18n/lib/i18n.ts
</include>

> See [customisable options](/docs/headless/internationalization).

Pass it to the source loader.

```ts title="lib/source.ts"
import { i18n } from '@/lib/i18n';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  i18n, // [!code highlight]
  // other options
});
```

And update Fumadocs UI layout options.

```tsx title="app/layout.config.tsx"
import { i18n } from '@/lib/i18n';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    // different props based on `locale`
  };
}
```

### Middleware

Create a middleware that redirects users to appropriate locale.

```json doc-gen:file
{
  "file": "../../examples/i18n/middleware.ts",
  "codeblock": {
    "lang": "ts",
    "meta": "title=\"middleware.ts\""
  }
}
```

<Callout title="Custom Middleware">

    The default middleware is optional, you can instead use your own middleware or the one provided by i18n libraries.

    When using custom middleware, make sure the locale is correctly passed to Fumadocs.
    You may also want to [customise page URLs](/docs/headless/source-api#url) from `loader()`.

</Callout>

### Routing

Create a `/app/[lang]` folder, and move all files (e.g. `page.tsx`, `layout.tsx`) from `/app` to the folder.

Provide UI translations and other config to `<RootProvider />`.
Note that only English translations are provided by default.

```tsx title="app/[lang]/layout.tsx"
import { RootProvider } from 'fumadocs-ui/provider';
import type { Translations } from 'fumadocs-ui/i18n';

const cn: Partial<Translations> = {
  search: 'Translated Content',
  // other translations
};

// available languages that will be displayed on UI
// make sure `locale` is consistent with your i18n config
const locales = [
  {
    name: 'English',
    locale: 'en',
  },
  {
    name: 'Chinese',
    locale: 'cn',
  },
];

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const lang = (await params).lang;

  return (
    <html lang={lang}>
      <body>
        <RootProvider
          i18n={{
            locale: lang,
            // available languages
            locales,
            // translations for UI
            translations: { cn }[lang],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
```

### Pass Locale

Pass the locale to Fumadocs in your pages and layouts.

```tsx title="/app/[lang]/(home)/layout.tsx" tab="Home Layout"
import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return <HomeLayout {...baseOptions(lang)}>{children}</HomeLayout>;
}
```

```tsx title="/app/[lang]/docs/layout.tsx" tab="Docs Layout"
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/app/layout.config';

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return (
    <DocsLayout {...baseOptions(lang)} tree={source.pageTree[lang]}>
      {children}
    </DocsLayout>
  );
}
```

```ts title="page.tsx" tab="Docs Page"
import { source } from '@/lib/source';

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const { slug, lang } = await params;
  // get page
  source.getPage(slug); // [!code --]
  source.getPage(slug, lang); // [!code ++]

  // get pages
  source.getPages(); // [!code --]
  source.getPages(lang); // [!code ++]
}
```

<Callout title={<>Using another name for <code>lang</code> dynamic segment?</>}>

If you're using another name like `app/[locale]`, you also need to update `generateStaticParams()` in docs page:

```tsx
export function generateStaticParams() {
  return source.generateParams(); // [!code --]
  return source.generateParams('slug', 'locale'); // [!code ++] new param name
}
```

</Callout>

### Search

Configure i18n on your search solution.

- **Built-in Search (Orama):**
  For [Supported Languages](https://docs.orama.com/open-source/supported-languages#officially-supported-languages), no further changes are needed.

  Otherwise, additional config is required (e.g. Chinese & Japanese). See [Special Languages](/docs/headless/search/orama#special-languages).

- **Cloud Solutions (e.g. Algolia):**
  They usually have official support for multilingual.

## Writing Documents

<include>../../shared/page-conventions.i18n.mdx</include>

## Navigation

Fumadocs only handles navigation for its own layouts (e.g. sidebar).
For other places, you can use the `useParams` hook to get the locale from url, and attend it to `href`.

```tsx
import Link from 'next/link';
import { useParams } from 'next/navigation';

const { lang } = useParams();

return <Link href={`/${lang}/another-page`}>This is a link</Link>;
```

In addition, the [`fumadocs-core/dynamic-link`](/docs/headless/components/link#dynamic-hrefs) component supports dynamic hrefs, you can use it to attend the locale prefix.
It is useful for Markdown/MDX content.

```mdx title="content.mdx"
import { DynamicLink } from 'fumadocs-core/dynamic-link';

<DynamicLink href="/[lang]/another-page">This is a link</DynamicLink>
```



================================================
FILE: apps/docs/content/docs/ui/manual-installation.mdx
================================================
---
title: Manual Installation
description: Add Fumadocs to existing projects.
---

Before continuing, make sure:

- Next.js 15 and Tailwind CSS 4 are configured.

## Getting Started

```package-install
fumadocs-ui fumadocs-core
```

### 1. MDX Components

<include cwd meta='title="mdx-components.tsx"'>
  ../../examples/next-mdx/mdx-components.tsx
</include>

### 2. Content Source

Fumadocs supports different content sources, including Fumadocs MDX and [Content Collections](/docs/headless/content-collections).

Fumadocs MDX is our official content source, you can configure it with:

```package-install
fumadocs-mdx @types/mdx
```

```js title="next.config.mjs"
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);
```

```ts title="source.config.ts"
import { defineDocs } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
});
```

Add a `postinstall` script to generate types:

```json title="package.json"
{
  "scripts": {
    "postinstall": "fumadocs-mdx"
  }
}
```

Finally, to access your content:

```ts title="lib/source.ts"
import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});
```

### 3. Root Layout

Wrap the entire application inside [Root Provider](/docs/ui/layouts/root-provider), and add required styles to `body`.

```tsx
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // you can use Tailwind CSS too
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
```

### 4. Styles

Add the following to `global.css`.

```css title="Tailwind CSS"
@import 'tailwindcss';
@import 'fumadocs-ui/css/neutral.css';
@import 'fumadocs-ui/css/preset.css';
```

> It doesn't come with a default font, you may choose one from `next/font`.

### 5. Layout

Create a `app/layout.config.tsx` file to put the shared options for our layouts.

```json doc-gen:file
{
  "file": "../../examples/next-mdx/app/layout.config.tsx",
  "codeblock": {
    "meta": "title=\"app/layout.config.tsx\""
  }
}
```

Create a folder `/app/docs` for our docs, and give it a proper layout.

```json doc-gen:file
{
  "file": "../../examples/next-mdx/app/docs/layout.tsx",
  "codeblock": {
    "meta": "title=\"app/docs/layout.tsx\""
  }
}
```

> `pageTree` refers to Page Tree, it should be provided by your content source.

### 6. Page

Create a catch-all route `/app/docs/[[...slug]]` for docs pages.

In the page, wrap your content in the [Page](/docs/ui/layouts/page) component.

<Tabs groupId='content-source' items={['Fumadocs MDX', 'Content Collections']}>

    <include cwd meta='title="app/docs/[[...slug]]/page.tsx" tab="Fumadocs MDX"'>../../examples/next-mdx/app/docs/[[...slug]]/page.tsx</include>

    <include cwd meta='title="app/docs/[[...slug]]/page.tsx" tab="Content Collections"'>../../examples/content-collections/app/docs/[[...slug]]/page.tsx</include>

</Tabs>

### 7. Search

Use the default document search based on Orama.

<include cwd meta='title="app/api/search/route.ts"'>
  ../../examples/next-mdx/app/api/search/route.ts
</include>

Learn more about [Document Search](/docs/headless/search).

### 8. Done

You can start the dev server and create MDX files.

```mdx title="content/docs/index.mdx"
---
title: Hello World
---

## Introduction

I love Anime.
```

## Deploying

It should work out-of-the-box with Vercel & Netlify.

### Docker Deployment

If you want to deploy your Fumadocs app using Docker with **Fumadocs MDX configured**, make sure to add the `source.config.ts` file to the `WORKDIR` in the Dockerfile.
The following snippet is taken from the official [Next.js Dockerfile Example](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile):

```zsh title="Dockerfile"
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* source.config.ts ./
```

This ensures Fumadocs MDX can access your configuration file during builds.



================================================
FILE: apps/docs/content/docs/ui/meta.json
================================================
{
  "title": "Framework",
  "description": "The docs framework",
  "icon": "Building2",
  "root": true,
  "pages": [
    "---Introduction---",
    "index",
    "what-is-fumadocs",
    "comparisons",
    "---Setup---",
    "manual-installation",
    "...",
    "(integrations)",
    "---Writing---",
    "page-conventions",
    "markdown",
    "navigation",
    "---UI---",
    "customisation",
    "theme",
    "search",
    "components",
    "mdx",
    "layouts"
  ]
}



================================================
FILE: apps/docs/content/docs/ui/page-conventions.mdx
================================================
---
title: Routing
description: A shared convention for organizing your documents
---

<include>../headless/page-conventions.mdx</include>



================================================
FILE: apps/docs/content/docs/ui/props.ts
================================================
import type { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import type { Callout } from 'fumadocs-ui/components/callout';
import type { File, Folder } from 'fumadocs-ui/components/files';
import type { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import type { TypeTable } from 'fumadocs-ui/components/type-table';
import type { Card } from 'fumadocs-ui/components/card';
import type { DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type {
  AnchorHTMLAttributes,
  ComponentPropsWithoutRef,
  HTMLAttributes,
} from 'react';
import type { DocsPageProps } from 'fumadocs-ui/page';
import type { AutoTypeTable } from 'fumadocs-typescript/ui';

export type AccordionsProps = Omit<
  ComponentPropsWithoutRef<typeof Accordions>,
  keyof ComponentPropsWithoutRef<'div'> | 'value' | 'onValueChange'
>;

export type AccordionProps = Omit<
  ComponentPropsWithoutRef<typeof Accordion>,
  keyof ComponentPropsWithoutRef<'div'>
>;

export type CalloutProps = Omit<
  ComponentPropsWithoutRef<typeof Callout>,
  keyof ComponentPropsWithoutRef<'div'>
>;

export type FileProps = Omit<
  ComponentPropsWithoutRef<typeof File>,
  keyof ComponentPropsWithoutRef<'div'>
>;

export type FolderProps = Omit<
  ComponentPropsWithoutRef<typeof Folder>,
  keyof ComponentPropsWithoutRef<'div'>
>;

export type InlineTOCProps = Omit<
  ComponentPropsWithoutRef<typeof InlineTOC>,
  keyof ComponentPropsWithoutRef<'div'>
>;

export type CardProps = Omit<
  ComponentPropsWithoutRef<typeof Card>,
  keyof Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>
>;

export type TypeTableProps = ComponentPropsWithoutRef<typeof TypeTable>;

export type ObjectTypeProps = ComponentPropsWithoutRef<
  typeof TypeTable
>['type'][string];

export type { DocsLayoutProps };

export type NavbarProps = NonNullable<DocsLayoutProps['nav']>;

export type SidebarProps = Omit<
  NonNullable<DocsLayoutProps['sidebar']>,
  keyof HTMLAttributes<HTMLElement>
>;

export type PageProps = DocsPageProps;

export type BreadcrumbProps = NonNullable<DocsPageProps['breadcrumb']>;

export type TOCProps = NonNullable<DocsPageProps['tableOfContent']>;
export type TOCPopoverProps = NonNullable<
  DocsPageProps['tableOfContentPopover']
>;

export type FooterProps = NonNullable<DocsPageProps['footer']>;

export type AutoTypeTableProps = ComponentPropsWithoutRef<typeof AutoTypeTable>;



================================================
FILE: apps/docs/content/docs/ui/search.mdx
================================================
---
title: Search
description: Implement document search in your docs
---

Fumadocs UI provides a good-looking search UI for your docs, the search functionality is instead provided and documented on Fumadocs Core.

See [Document Search](/docs/headless/search).

## Search UI

Open with <kbd>⌘</kbd> <kbd>K</kbd> or <kbd>Ctrl</kbd> <kbd>K</kbd>.

When not specified, it uses the Default [`fetch` Search Client](/docs/headless/search/orama) powered by Orama.

### Custom Links

Add custom link items to search dialog.
They are shown as fallbacks when the query is empty.

```tsx title="app/layout.tsx"
import { RootProvider } from 'fumadocs-ui/root-provider';

<RootProvider
  search={{
    links: [
      ['Home', '/'],
      ['Docs', '/docs'],
    ],
  }}
>
  {children}
</RootProvider>;
```

### Disable Search

To opt-out of document search, disable it from root provider.

```tsx
import { RootProvider } from 'fumadocs-ui/root-provider';

<RootProvider
  search={{
    enabled: false,
  }}
>
  {children}
</RootProvider>;
```

### Hot Keys

Customise the hot keys to trigger search dialog.

```tsx
import { RootProvider } from 'fumadocs-ui/root-provider';

<RootProvider
  search={{
    hotKey: [
      {
        display: 'K',
        key: 'k', // key code, or a function determining whether the key is pressed
      },
    ],
  }}
>
  {children}
</RootProvider>;
```

### Tag Filter

Add UI to change filters.
Make sure to configure [Tag Filter](/docs/headless/search/orama#tag-filter) on search server first.

```tsx
import { RootProvider } from 'fumadocs-ui/root-provider';

<RootProvider
  search={{
    options: {
      defaultTag: 'value',
      tags: [
        {
          name: 'Tag Name',
          value: 'value',
        },
      ],
    },
  }}
>
  {children}
</RootProvider>;
```

### Search Options

Pass options to the search client, like changing the API endpoint for Orama search server:

```tsx
import { RootProvider } from 'fumadocs-ui/root-provider';

<RootProvider
  search={{
    options: {
      api: '/api/search/docs',
    },
  }}
>
  {children}
</RootProvider>;
```

### Replace Search Dialog

You can replace the default Search Dialog with:

```tsx title="components/search.tsx"
'use client';
import SearchDialog from 'fumadocs-ui/components/dialog/search-default';
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';

export default function CustomDialog(props: SharedProps) {
  // your own logic here
  return <SearchDialog {...props} />;
}
```

To pass it to the Root Provider, you need a wrapper with `use client` directive.

```tsx title="provider.tsx"
'use client';
import { RootProvider } from 'fumadocs-ui/provider';
import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

const SearchDialog = dynamic(() => import('@/components/search')); // lazy load

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{
        SearchDialog,
      }}
    >
      {children}
    </RootProvider>
  );
}
```

Use it instead of your previous Root Provider

```tsx title="layout.tsx"
import { Provider } from './provider';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
```

## Other Solutions

### Algolia

For the setup guide, see [Integrate Algolia Search](/docs/headless/search/algolia).

While generally we recommend building your own search with their client-side
SDK, you can also plug the built-in dialog interface.

```tsx title="components/search.tsx"
'use client';
import algo from 'algoliasearch/lite';
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
import SearchDialog from 'fumadocs-ui/components/dialog/search-algolia';

const client = algo('appId', 'apiKey');
const index = client.initIndex('indexName');

export default function CustomSearchDialog(props: SharedProps) {
  return <SearchDialog index={index} {...props} />;
}
```

1. Replace `appId`, `apiKey` and `indexName` with your desired values.

2. [Replace the default search dialog](#replace-search-dialog) with your new component.

<Callout title="Note" className='mt-4'>

    The built-in implementation doesn't use instant search (their official
    javascript client).

</Callout>

#### Tag Filter

Same as default search client, you can configure [Tag Filter](/docs/headless/search/algolia#tag-filter) on the dialog.

```tsx title="components/search.tsx"
import SearchDialog from 'fumadocs-ui/components/dialog/search-algolia';

<SearchDialog
  defaultTag="value"
  tags={[
    {
      name: 'Tag Name',
      value: 'value',
    },
  ]}
/>;
```

### Orama Cloud

For the setup guide, see [Integrate Orama Cloud](/docs/headless/search/orama-cloud).

```tsx title="components/search.tsx"
'use client';

import { OramaClient } from '@oramacloud/client';
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
import SearchDialog from 'fumadocs-ui/components/dialog/search-orama';

const client = new OramaClient({
  endpoint: 'endpoint',
  api_key: 'apiKey',
});

export default function CustomSearchDialog(props: SharedProps) {
  return <SearchDialog {...props} client={client} showOrama />;
}
```

1. Replace `endpoint`, `apiKey` with your desired values.
2. [Replace the default search dialog](#replace-search-dialog) with your new component.

### Community Integrations

A list of integrations maintained by community.

- [Trieve Search](/docs/headless/search/trieve)

## Built-in UI

If you want to use the built-in search dialog UI instead of building your own,
you may use the `SearchDialog` component.

```tsx
import {
  SearchDialog,
  type SharedProps,
} from 'fumadocs-ui/components/dialog/search';

export default function CustomSearchDialog(props: SharedProps) {
  return <SearchDialog {...props} />;
}
```

<Callout type="warn" title="Unstable">
  It is an internal API, might break during iterations
</Callout>



================================================
FILE: apps/docs/content/docs/ui/static-export.mdx
================================================
---
title: Static Export
description: Enable static export with Fumadocs
---

## Overview

Fumadocs is fully compatible with Next.js static export, allowing you to export the app as a static HTML site without a Node.js server.

```js title="next.config.mjs"
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
};
```

See [Next.js docs](https://nextjs.org/docs/app/guides/static-exports) for limitations and details.

## Search

### Cloud Solutions

Since the search functionality is powered by remote servers, static export works without configuration.

### Built-in Search

You need to:

1. Build the search indexes statically using [`staticGET`](/docs/headless/search/orama#static-export).
2. Enable static mode on search client from Root Provider:

   ```tsx title="app/layout.tsx"
   import { RootProvider } from 'fumadocs-ui/provider';
   import type { ReactNode } from 'react';

   export default function RootLayout({ children }: { children: ReactNode }) {
     return (
       <html lang="en" suppressHydrationWarning>
         <body>
           <RootProvider
             search={{
               options: {
                 type: 'static', // [!code highlight]
               },
             }}
           >
             {children}
           </RootProvider>
         </body>
       </html>
     );
   }
   ```

This allows the route handler to be statically cached into a single file, and search will be computed on browser instead.



================================================
FILE: apps/docs/content/docs/ui/theme.client.tsx
================================================
'use client';
import { type ReactElement, useState } from 'react';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/components/ui/button';

export function WidthTrigger(): ReactElement {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant: 'secondary' }))}
      onClick={() => {
        setEnabled((prev) => !prev);
      }}
    >
      {enabled ? <style>{`:root { --fd-layout-width: 1400px; }`}</style> : null}
      Trigger Width:
      <span className="ms-1.5 text-fd-muted-foreground">
        {enabled ? '1400px' : 'default'}
      </span>
    </button>
  );
}



================================================
FILE: apps/docs/content/docs/ui/theme.mdx
================================================
---
title: Themes
description: Add Theme to Fumadocs UI
---

## Usage

Only Tailwind CSS v4 is supported, the preset will also include source to Fumadocs UI itself:

```css title="Tailwind CSS"
@import 'tailwindcss';
@import 'fumadocs-ui/css/neutral.css';
@import 'fumadocs-ui/css/preset.css';
```

### Preflight Changes

By using the Tailwind CSS plugin, or the pre-built stylesheet, your default border, text and background
colors will be changed.

### Light/Dark Modes

Fumadocs supports light/dark modes with [`next-themes`](https://github.com/pacocoursey/next-themes), it is included in Root Provider.

See [Root Provider](/docs/ui/layouts/root-provider#theme-provider) to learn more.

### RTL Layout

RTL (Right-to-left) layout is supported.

To enable RTL, set the `dir` prop to `rtl` in body and root provider (required for Radix UI).

```tsx
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body dir="rtl">
        <RootProvider dir="rtl">{children}</RootProvider>
      </body>
    </html>
  );
}
```

### Layout Width

Customise the max width of docs layout with CSS Variables.

```css
:root {
  --fd-layout-width: 1400px;
}
```

<WidthTrigger />

## Tailwind CSS Preset

Fumadocs UI adds its own colors, animations, and utilities with Tailwind CSS preset.

### Colors

It comes with many themes out-of-the-box, you can pick one you prefer.

```css
@import 'fumadocs-ui/css/<theme>.css';
@import 'fumadocs-ui/css/preset.css';
```

<Tabs items={['neutral', 'black', 'vitepress', 'dusk', 'catppuccin', 'ocean', 'purple']}>

    <Tab value='neutral'>

![Neutral](/themes/neutral.png)

    </Tab>

    <Tab value='black'>

![Black](/themes/black.png)

    </Tab>

    <Tab value='vitepress'>

![Vitepress](/themes/vitepress.png)

    </Tab>

    <Tab value='dusk'>

![Dusk](/themes/dusk.png)

    </Tab>

    <Tab value='Catppuccin'>

![Catppuccin](/themes/catppuccin.png)

    </Tab>

    <Tab value='ocean'>

![Ocean](/themes/ocean.png)

    </Tab>

    <Tab value='purple'>

![Purple](/themes/purple.png)

    </Tab>

</Tabs>

The design system was inspired by [Shadcn UI](https://ui.shadcn.com), you can also customize the colors using CSS variables.

```css title="global.css"
:root {
  --color-fd-background: hsl(0, 0%, 100%);
}

.dark {
  --color-fd-background: hsl(0, 0%, 0%);
}
```

For Shadcn UI, you can use the `shadcn` preset instead.
It uses colors from your Shadcn UI theme.

```css
@import 'tailwindcss';
@import 'fumadocs-ui/css/shadcn.css';
@import 'fumadocs-ui/css/preset.css';
```

### Typography

We have a built-in plugin forked from [Tailwind CSS Typography](https://tailwindcss.com/docs/typography-plugin).

The plugin adds a `prose` class and variants to customise it.

```tsx
<div className="prose">
  <h1>Good Heading</h1>
</div>
```

> The plugin works with and only with Fumadocs UI's MDX components, it may conflict with `@tailwindcss/typography`.
> If you need to use `@tailwindcss/typography` over the default plugin, [set a class name option](https://github.com/tailwindlabs/tailwindcss-typography/blob/main/README.md#changing-the-default-class-name) to avoid conflicts.



================================================
FILE: apps/docs/content/docs/ui/what-is-fumadocs.mdx
================================================
---
title: What is Fumadocs
description: Introducing Fumadocs, a docs framework that you can break.
icon: CircleHelp
---

Fumadocs was created because I wanted a more customisable experience for building docs, to be a docs framework that is not opinionated, **a "framework" that you can break**.

## Philosophy

**Less Abstraction:** Fumadocs expects you to write code and cooperate with the rest of your software.
While most frameworks are configured with a configuration file, they usually lack flexibility when you hope to tune its details.
You can’t control how they render the page nor the internal logic. Fumadocs shows you how the app works, instead of a single configuration file.

**Next.js Fundamentals:** It gives you the utilities and a good-looking UI.
You are still using features of Next.js App Router, like **Static Site Generation**. There is nothing new for Next.js developers, so you can use it with confidence.

**Opinionated on UI:** The only thing Fumadocs UI (the default theme) offers is **User Interface**. The UI is opinionated for bringing better mobile responsiveness and user experience.
Instead, we use a much more flexible approach inspired by Shadcn UI — [Fumadocs CLI](/docs/cli), so we can iterate our design quick, and welcome for more feedback about the UI.

## Why Fumadocs

Fumadocs is designed with flexibility in mind.

You can use `fumadocs-core` as a headless UI library and bring your own styles.
Fumadocs MDX is also a useful library to handle MDX content in Next.js. It also includes:

- Many built-in components.
- Typescript Twoslash, OpenAPI, and Math (KaTeX) integrations.
- Fast and optimized by default, natively built on App Router.
- Tight integration with Next.js, you can add it to an existing Next.js project easily.

You can read [Comparisons](/docs/ui/comparisons) if you're interested.

### Documentation

Fumadocs focuses on **authoring experience**, it provides a beautiful theme and many docs automation tools.

It helps you to iterate your codebase faster while never leaving your docs behind.
You can take this site as an example of docs site built with Fumadocs.

### Blog sites

Since Next.js is already a powerful framework, most features can be implemented with **just Next.js**.

Fumadocs provides additional tooling for Next.js, including syntax highlighting, document search, and a default theme (Fumadocs UI).
It helps you to avoid reinventing the wheels.

## When to use Fumadocs

For most of the web applications, vanilla React.js is no longer enough.
Nowadays, we also wish to have a blog, a showcase page, a FAQ page, etc. With a
fancy UI that's breathtaking, in these cases, Fumadocs can help you build the
docs easier, with less boilerplate.

Fumadocs is maintained by Fuma and many contributors, with care on the maintainability of codebase.
While we don't aim to offer every functionality people wanted, we're more focused on making basic features perfect and well-maintained.
You can also help Fumadocs to be more useful by contributing!



================================================
FILE: apps/docs/content/docs/ui/(integrations)/feedback.mdx
================================================
---
title: Feedback
description: Receive feedback from your users
---

## Overview

Feedback is crucial for knowing what your reader thinks, and help you to further improve documentation content.

## Installation

Add dependencies:

```package-install
class-variance-authority lucide-react
```

Copy the component:

```json doc-gen:file
{
  "file": "./components/rate.tsx",
  "codeblock": {
    "lang": "tsx",
    "meta": "title=\"components/rate.tsx\""
  }
}
```

The `@/lib/cn` import specifier may be different for your project, change it to import your `cn()` function if needed. (e.g. like `@/lib/utils`)

### How to Use

Now add the `<Rate />` component to your docs page:

```tsx
import { DocsPage } from 'fumadocs-ui/page';
import { Rate } from '@/components/rate';
import posthog from 'posthog-js';

export default async function Page() {
  return (
    <DocsPage toc={toc} full={page.data.full}>
      {/* at the bottom of page */}
      <Rate
        onRateAction={async (url, feedback) => {
          'use server';

          await posthog.capture('on_rate_docs', feedback);
        }}
      />
    </DocsPage>
  );
}
```

On above example, it reports user feedback by capturing a `on_rate_docs` event on PostHog.

You can specify your own server action to `onRateAction`, and report the feedback to different destinations like database, or GitHub Discussions via their API.

### Linking to GitHub Discussion

To report your feedback to GitHub Discussion, make a custom `onRateAction`.

You can copy this example as a starting point:

```json doc-gen:file
{
  "file": "./lib/github.ts",
  "codeblock": {
    "lang": "ts",
    "meta": "title=\"lib/github.ts\""
  }
}
```

- Create your own GitHub App and obtain its app ID and private key.
- Fill required environment variables.
- Replace constants like `owner`, `repo`, and `DocsCategory`.



================================================
FILE: apps/docs/content/docs/ui/(integrations)/llms.mdx
================================================
---
title: llms.txt
description: Output docs content for large language models
---

Create a route handler, modify it to include other remark plugins.

```json doc-gen:file
{
  "file": "./content/shared/llms.ts",
  "codeblock": {
    "meta": "title=\"app/llms.txt/route.ts\""
  }
}
```



================================================
FILE: apps/docs/content/docs/ui/(integrations)/open-graph.mdx
================================================
---
title: Metadata
description: Usage with Next.js Metadata API
---

## Introduction

Next.js provides an useful set of utilities, allowing a flexible experience with Fumadocs.
Fumadocs uses the Next.js Metadata API for SEO.

Make sure to read their [Metadata section](https://nextjs.org/docs/app/building-your-application/optimizing/metadata) for the fundamentals of Metadata API.

## Open Graph Image

For docs pages, Fumadocs has a built-in metadata image generator.

You will need a route handler to get started.

```json doc-gen:file
{
  "file": "../../examples/next-mdx/app/docs-og/[...slug]/route.tsx",
  "codeblock": {
    "meta": "title=\"app/docs-og/[...slug]/route.tsx\""
  }
}
```

> We need to append `image.png` to the end of slugs so that we can access it via `/docs-og/my-page/image.png`.

In your docs page, add the image to metadata.

```json doc-gen:file
{
  "file": "../../examples/next-mdx/app/docs/[[...slug]]/page.with-og-image.tsx",
  "codeblock": {
    "meta": "title=\"app/docs/[[...slug]]/page.tsx\""
  }
}
```

### Font

You can also customise the font, options for Satori are also available on the built-in generator.

```ts
import { generateOGImage } from 'fumadocs-ui/og';

generateOGImage({
  fonts: [
    {
      name: 'Roboto',
      // Use `fs` (Node.js only) or `fetch` to read the font as Buffer/ArrayBuffer and provide `data` here.
      data: robotoArrayBuffer,
      weight: 400,
      style: 'normal',
    },
  ],
});
```



================================================
FILE: apps/docs/content/docs/ui/(integrations)/python.mdx
================================================
---
title: Python
description: Generate docs from Python
---

<Callout type="warn" title="Experiemntal">
  Support for Python docgen is still experimental, please use it in caution.
</Callout>

## Setup

```package-install
fumadocs-python shiki
```

### Generate Docs

Install the Python command first, we need it to collect docs from your Python package.

```bash
pip install ./node_modules/fumadocs-python
```

Generate the docs as a JSON:

```bash
fumapy-generate your-package-name
# for example
fumapy-generate httpx
```

Use the following script to convert JSON into MDX:

```js title="scripts/generate-docs.mjs"
import { rimraf } from 'rimraf';
import * as Python from 'fumadocs-python';
import * as fs from 'node:fs/promises';

// output JSON file path
const jsonPath = './httpx.json';

async function generate() {
  const out = 'content/docs/(api)';
  // clean previous output
  await rimraf(out);

  const content = JSON.parse((await fs.readFile(jsonPath)).toString());
  const converted = Python.convert(content, {
    baseUrl: '/docs',
  });

  await Python.write(converted, {
    outDir: out,
  });
}

void generate();
```

<Callout type="warn" title="Be careful">
  While most docgens use Markdown or reStructuredText, Fumadocs uses **MDX**.
  Make sure your doc is valid in MDX syntax before running.
</Callout>

### MDX Components

Add the components.

```tsx
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import * as Python from 'fumadocs-python/components';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...Python,
    ...components,
  };
}
```

Add styles:

```css title="Tailwind CSS"
@import 'tailwindcss';
@import 'fumadocs-ui/css/neutral.css';
@import 'fumadocs-ui/css/preset.css';
/* [!code ++] */
@import 'fumadocs-python/preset.css';
```



================================================
FILE: apps/docs/content/docs/ui/(integrations)/typescript.mdx
================================================
---
title: Typescript
description: Generate docs from Typescript definitions
---

## Usage

```package-install
fumadocs-typescript
```

### UI Integration

It comes with the `AutoTypeTable` component. Learn more about [Auto Type Table](/docs/ui/components/auto-type-table).

### MDX Integration

You can use it as a remark plugin:

```ts title="source.config.ts" tab="Fumadocs MDX"
import { remarkAutoTypeTable, createGenerator } from 'fumadocs-typescript';
import { defineConfig } from 'fumadocs-mdx/config';

const generator = createGenerator();

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [[remarkAutoTypeTable, { generator }]],
  },
});
```

```ts tab="MDX Compiler"
import { remarkAutoTypeTable, createGenerator } from 'fumadocs-typescript';
import { compile } from '@mdx-js/mdx';

const generator = createGenerator();

await compile('...', {
  remarkPlugins: [[remarkAutoTypeTable, { generator }]],
});
```

It gives you a `auto-type-table` component.

You can use it like [Auto Type Table](/docs/ui/components/auto-type-table), but with additional rules:

- The value of attributes must be string.
- `path` accepts a path relative to the MDX file itself.
- You also need to add [`TypeTable`](/docs/ui/components/type-table) to MDX components.

```ts title="path/to/file.ts"
export interface MyInterface {
  name: string;
}
```

```mdx title="page.mdx"
<auto-type-table path="./path/to/file.ts" name="MyInterface" />
```

## Annotations

### Hide

Hide a field by adding `@internal` tsdoc tag.

```ts
interface MyInterface {
  /**
   * @internal
   */
  cache: number;
}
```

### Specify Type Name

You can specify the name of a type with the `@remarks` tsdoc tag.

```ts
interface MyInterface {
  /**
   * @remarks `timestamp` Returned by API. // [!code highlight]
   */
  time: number;
}
```

This will make the type of `time` property to be shown as `timestamp`.



================================================
FILE: apps/docs/content/docs/ui/(integrations)/openapi/configurations.mdx
================================================
---
title: Configurations
description: Customise Fumadocs OpenAPI
---

## File Generator

Pass options to the `generateFiles` function.

### Input

An array of input files.
Allowed:

- File Paths
- External URLs
- Wildcard

```ts
import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  input: ['./unkey.json'],
});
```

On Next.js server, the schema is dynamically fetched when the `APIPage` component renders.

<Callout type='warn' title='For Vercel'>

    If the schema is passed as a file path, ensure the page **will not** be re-rendered after build.

</Callout>

### Output

Path to the output directory.

```ts
import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  output: '/content/docs',
});
```

### Per

Customise how the page is generated, default to `operation`.

| mode      | Generate a page for                 |
| --------- | ----------------------------------- |
| tag       | each tag                            |
| file      | each schema                         |
| operation | each operation (method of endpoint) |

```ts
import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  per: 'tag',
});
```

### Group By

In `operation` mode, you can group output files with folders.

| Group by | Description                                                  |
| -------- | ------------------------------------------------------------ |
| tag      | `{tag}/{page}.mdx` (Each operation can only contain `1` tag) |
| route    | `{api-endpoint}/{page}.mdx`                                  |
| none     | `{page}.mdx` (default)                                       |

```ts
import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  per: 'operation',
  groupBy: 'tag',
});
```

### Name

A function that controls the output path of files.

```ts
import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  name: (type, file) => {
    return; // filename
  },
});
```

### Imports

Add additional imports on the top of MDX files.

```ts
import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  imports: [
    {
      names: ['Component1', 'Component2'],
      from: '@/components/ui/api',
    },
  ],
});
```

### Frontmatter

Customise the frontmatter of MDX files.

By default, it includes:

| property      | description                                      |
| ------------- | ------------------------------------------------ |
| `title`       | Page title                                       |
| `description` | Page description                                 |
| `full`        | Always true, added for Fumadocs UI               |
| `method`      | Available method of operation (`operation` mode) |
| `route`       | Route of operation (`operation` mode)            |

```ts
import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  input: ['./petstore.yaml'],
  output: './content/docs',
  frontmatter: (title, description) => ({
    myProperty: 'hello',
  }),
});
```

### Add Generated Comment

Add a comment to the top of generated files indicating they are auto-generated.

```ts
import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  input: ['./petstore.yaml'],
  output: './content/docs',
  // Add default comment
  addGeneratedComment: true,

  // Or provide a custom comment
  addGeneratedComment: 'Custom auto-generated comment',

  // Or disable comments
  addGeneratedComment: false,
});
```

### Tag Display Name

Adding `x-displayName` to OpenAPI Schema can control the display name of your tags.

```yaml title="openapi.yaml"
tags:
  - name: test
    description: this is a tag.
    x-displayName: My Test Name
```

## OpenAPI Server

The server to render pages.

### Generate Code Samples

Generate custom code samples for each API endpoint.

```ts
import { createOpenAPI } from 'fumadocs-openapi/server';

export const openapi = createOpenAPI({
  generateCodeSamples(endpoint) {
    return [
      {
        lang: 'js',
        label: 'JavaScript SDK',
        source: "console.log('hello')",
      },
    ];
  },
});
```

In addition, you can also specify code samples via OpenAPI schema.

```yaml
paths:
  /plants:
    get:
      x-codeSamples:
        - lang: js
          label: JavaScript SDK
          source: |
            const planter = require('planter');
            planter.list({ unwatered: true });
```

#### Disable Code Sample

You can disable the code sample for a specific language, for example, to disable cURL:

```ts
import { createOpenAPI } from 'fumadocs-openapi/server';

export const openapi = createOpenAPI({
  generateCodeSamples(endpoint) {
    return [
      {
        lang: 'curl',
        label: 'cURL',
        source: false,
      },
    ];
  },
});
```

### Renderer

Customise components in the page.

```ts
import { createOpenAPI } from 'fumadocs-openapi/server';

export const openapi = createOpenAPI({
  renderer: {
    Root(props) {
      // your own (server) component
    },
  },
});
```

## Advanced

### Using API Page

> This is not a public API, use it carefully.

To use the `APIPage` component in your MDX files:

```mdx
---
title: Delete Api
full: true
---

<APIPage
  document="./unkey.json"
  operations={[{ path: '/v1/apis.deleteApi', method: 'post' }]}
  hasHead={false}
/>
```

| Prop         | Description                               |
| ------------ | ----------------------------------------- |
| `document`   | OpenAPI Schema                            |
| `operations` | Operations (API endpoints) to be rendered |
| `hasHead`    | Enable to render the heading of operation |



================================================
FILE: apps/docs/content/docs/ui/(integrations)/openapi/index.mdx
================================================
---
title: OpenAPI
description: Generating docs for OpenAPI schema
---

## Manual Setup

Install the required packages.

```package-install
fumadocs-openapi shiki
```

### Generate Styles

Please note that you must have Tailwind CSS v4 configured.

```css title="Tailwind CSS"
@import 'tailwindcss';
@import 'fumadocs-ui/css/neutral.css';
@import 'fumadocs-ui/css/preset.css';
/* [!code ++] */
@import 'fumadocs-openapi/css/preset.css';
```

### Configure Pages

Create an OpenAPI instance on the server. Fumadocs OpenAPI renders the pages on server-side.

```ts title="lib/source.ts"
import { createOpenAPI, attachFile } from 'fumadocs-openapi/server';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  pageTree: {
    // [!code ++] adds a badge to each page item in page tree
    attachFile,
  },
});

export const openapi = createOpenAPI({
  // options
});
```

Add `APIPage` to your MDX Components, so that you can use it in MDX files.

```tsx title="mdx-components.tsx"
import defaultComponents from 'fumadocs-ui/mdx';
import { APIPage } from 'fumadocs-openapi/ui';
import { openapi } from '@/lib/source';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    APIPage: (props) => <APIPage {...openapi.getAPIPageProps(props)} />,
    ...components,
  };
}
```

> It is a React Server Component.

### Generate Files

You can generate MDX files directly from your OpenAPI schema.

Create a script:

```js title="scripts/generate-docs.mjs"
import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  input: ['./unkey.json'], // the OpenAPI schemas
  output: './content/docs',
  // we recommend to enable it
  // make sure your endpoint description doesn't break MDX syntax.
  includeDescription: true,
});
```

> Only OpenAPI 3.0 and 3.1 are supported.

Generate docs with the script:

```bash
node ./scripts/generate-docs.mjs
```

## Features

The official OpenAPI integration supports:

- Basic API endpoint information
- Interactive API playground
- Example code to send request (in different programming languages)
- Response samples and TypeScript definitions
- Request parameters and body generated from schemas

### Demo

[View demo](/docs/openapi).



================================================
FILE: apps/docs/content/docs/ui/(integrations)/openapi/meta.json
================================================
{
  "pages": ["configurations", "..."]
}



================================================
FILE: apps/docs/content/docs/ui/(integrations)/openapi/proxy.mdx
================================================
---
title: Creating Proxy
description: Avoid CORS problem
---

## Introduction

A proxy server is useful for executing HTTP (`fetch`) requests, as it doesn't have CORS constraints like on the browser.
We can use it for executing HTTP requests on the OpenAPI playground, when the target API endpoints do not have CORS configured correctly.

<Callout type="warn" title="Warning">
  Do not use this on unreliable sites and API endpoints, the proxy server will
  forward all received headers & body, including HTTP-only `Cookies` and
  `Authorization` header.
</Callout>

### Setup

Create a route handler for proxy server.

```ts title="/api/proxy/route.ts"
import { openapi } from '@/lib/source';

export const { GET, HEAD, PUT, POST, PATCH, DELETE } = openapi.createProxy();
```

> Follow the [Getting Started](/docs/ui/openapi) guide if `openapi` server is not yet configured.

And enable the proxy from `createOpenAPI`.

```ts title="lib/source.ts"
import { createOpenAPI } from 'fumadocs-openapi/server';

export const openapi = createOpenAPI({
  proxyUrl: '/api/proxy',
});
```



================================================
FILE: apps/docs/content/docs/ui/components/accordion.mdx
================================================
---
title: Accordion
description: Add Accordions to your documentation
preview: accordion
---

## Usage

Based on
[Radix UI Accordion](https://www.radix-ui.com/primitives/docs/components/accordion), useful for FAQ sections.

```mdx
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';

<Accordions type="single">
  <Accordion title="My Title">My Content</Accordion>
</Accordions>
```

### Accordions

<AutoTypeTable path="./content/docs/ui/props.ts" name="AccordionsProps" />

### Accordion

<AutoTypeTable path="./content/docs/ui/props.ts" name="AccordionProps" />

### Linking to Accordion

You can specify an `id` for accordion. The accordion will automatically open when the user is navigating to the page with the specified `id` in hash parameter.

```mdx
<Accordions>
<Accordion title="My Title" id="my-title">

My Content

</Accordion>
</Accordions>
```

> The value of accordion is same as title by default. When an id presents, it will be used as the value instead.



================================================
FILE: apps/docs/content/docs/ui/components/auto-type-table.mdx
================================================
---
title: Auto Type Table
description: Auto-generated type table
---

<Wrapper>

<div className="bg-fd-background p-4 rounded-xl">

<AutoTypeTable name="AutoTypeTableExample" type={`export interface AutoTypeTableExample {
    /**
     * Markdown syntax like links, \`code\` are supported.
     *
     * See https://fumadocs.vercel.app/docs/ui/components/type-table
     */
    name: string;

    /**
    * We love Shiki.
    *
    * \`\`\`ts
    * console.log("Hello World, powered by Shiki");
    * \`\`\`
    */
    options: Partial<{ a: unknown }>;

}`} />

</div>

</Wrapper>

It generates a table for your docs based on TypeScript definitions.

## Usage

```package-install
fumadocs-typescript
```

Initialize the TypeScript compiler and add it as a MDX component.

```tsx title="mdx-components.tsx"
import defaultComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { createGenerator } from 'fumadocs-typescript';
import { AutoTypeTable } from 'fumadocs-typescript/ui';

const generator = createGenerator();

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    AutoTypeTable: (props) => (
      <AutoTypeTable {...props} generator={generator} />
    ),
    ...components,
  };
}
```

### From File

It accepts a `path` prop that points to a typescript file, and `name` for the exported type name.

```ts title="path/to/file.ts"
export interface MyInterface {
  name: string;
}
```

```mdx
<AutoTypeTable path="./path/to/file.ts" name="MyInterface" />
```

The path is relative to your project directory (`cwd`), because `AutoTypeTable` is a React Server Component, it cannot access build-time information like MDX file path.

<Callout title="Server Component only" type="warn">

You cannot use this in a client component.

</Callout>

### From Type

You can specify the type to generate, without an actual TypeScript file.

```mdx
import { AutoTypeTable } from 'fumadocs-typescript/ui';

<AutoTypeTable type="{ hello: string }" />
```

When a `path` is given, it shares the same context as the TypeScript file.

```ts title="file.ts"
export type A = { hello: string };
```

```mdx
<AutoTypeTable path="file.ts" type="A & { world: string }" />
```

When `type` has multiple lines, the export statement and `name` prop are required.

```mdx
<AutoTypeTable
  path="file.ts"
  name="B"
  type={`
import { ReactNode } from "react"
export type B = ReactNode | { world: string }
`}
/>
```

### Functions

Notice that only object type is allowed. For functions, you should wrap them into an object instead.

```ts
export interface MyInterface {
  myFn: (input: string) => void;
}
```

### References

<auto-type-table path="../props.ts" name="AutoTypeTableProps" />

### File System

It relies on the file system, hence, the page referencing this component must be built in **build time**. Rendering the component on serverless runtime may cause problems.

### Deep Dive

Under the hood, it uses the [Typescript Compiler API](https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API) to extract type information.
Your `tsconfig.json` file in the current working directory will be loaded.

To change the compiler settings, pass a `options` prop to the component.

Learn more about [Typescript Docs Generation](/docs/ui/typescript).



================================================
FILE: apps/docs/content/docs/ui/components/banner.mdx
================================================
---
title: Banner
description: Add a banner to your site
preview: banner
---

## Usage

Put the element at the top of your root layout, you can use it for displaying announcements.

```tsx
import { Banner } from 'fumadocs-ui/components/banner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en">
      <body>
        <Banner>Hello World</Banner>
        {children}
      </body>
    </html>
  );
}
```

### Variant

Change the default variant.

```tsx
import { Banner } from 'fumadocs-ui/components/banner';

<Banner variant="rainbow">Hello World</Banner>;
```

### Change Layout

By default, the banner uses a `style` tag to modify Fumadocs layouts (e.g. reduce the sidebar height).
You can disable it with:

```tsx
import { Banner } from 'fumadocs-ui/components/banner';

<Banner changeLayout={false}>Hello World</Banner>;
```

### Close

To allow users to close the banner, give the banner an ID.

```tsx
import { Banner } from 'fumadocs-ui/components/banner';

<Banner id="hello-world">Hello World</Banner>;
```

The state will be automatically persisted.



================================================
FILE: apps/docs/content/docs/ui/components/dynamic-codeblock.mdx
================================================
---
title: Code Block (Dynamic)
description: A codeblock that also highlights code
preview: dynamicCodeBlock
---

## Usage

### Client Component

```tsx
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

<DynamicCodeBlock lang="ts" code='console.log("Hello World")' />;
```

Unlike the MDX [`CodeBlock`](/docs/ui/mdx/codeblock) component, this is a client component that can be used without MDX.
It highlights the code with Shiki and use the default component to render it.

Features:

- Can be pre-rendered on server
- load languages and themes on browser lazily

#### Options

```tsx
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

<DynamicCodeBlock
  lang="ts"
  code='console.log("Hello World")'
  options={{
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
    components: {
      // override components (e.g. `pre` and `code`)
    },
    // other Shiki options
  }}
/>;
```

### Server Component

For a server component equivalent, you can use the built-in utility from core:

<include>./server-codeblock.tsx</include>



================================================
FILE: apps/docs/content/docs/ui/components/files.mdx
================================================
---
title: Files
description: Display file structure in your documentation
preview: 'files'
---

## Usage

Wrap file components in `Files`.

```mdx
import { File, Folder, Files } from 'fumadocs-ui/components/files';

<Files>
  <Folder name="app" defaultOpen>
    <File name="layout.tsx" />
    <File name="page.tsx" />
    <File name="global.css" />
  </Folder>
  <Folder name="components">
    <File name="button.tsx" />
    <File name="tabs.tsx" />
    <File name="dialog.tsx" />
  </Folder>
  <File name="package.json" />
</Files>
```

### File

<AutoTypeTable path="./content/docs/ui/props.ts" name="FileProps" />

### Folder

<AutoTypeTable path="./content/docs/ui/props.ts" name="FolderProps" />



================================================
FILE: apps/docs/content/docs/ui/components/github-info.mdx
================================================
---
title: GitHub Info
description: Display your GitHub repository information
preview: githubInfo
---

## Usage

```tsx
import { GithubInfo } from 'fumadocs-ui/components/github-info';

<GithubInfo
  owner="fuma-nama"
  repo="fumadocs"
  // your own GitHub access token (optional)
  token={process.env.GITHUB_TOKEN}
/>;
```

It's recommended to add it to your docs layout with `links` option:

```tsx title="app/docs/layout.tsx"
import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { GithubInfo } from 'fumadocs-ui/components/github-info';

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  links: [
    {
      type: 'custom',
      children: (
        <GithubInfo owner="fuma-nama" repo="fumadocs" className="lg:-mx-2" />
      ),
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
```



================================================
FILE: apps/docs/content/docs/ui/components/image-zoom.mdx
================================================
---
title: Zoomable Image
description: Allow zoom-in images in your documentation
preview: zoomImage
---

## Usage

Replace `img` with `ImageZoom` in your MDX components.

```tsx title="mdx-components.tsx"
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import defaultComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    img: (props) => <ImageZoom {...(props as any)} />,
    ...components,
  };
}
```

Now image zoom will be automatically enabled on all images.

```mdx
![Test](/banner.png)
```

### Image Optimization

A default [`sizes` property](https://nextjs.org/docs/app/api-reference/components/image#sizes) will be defined for Next.js `<Image />` component if not specified.



================================================
FILE: apps/docs/content/docs/ui/components/index.mdx
================================================
---
title: Components
description: Additional components to improve your docs
index: true
---



================================================
FILE: apps/docs/content/docs/ui/components/inline-toc.mdx
================================================
---
title: Inline TOC
description: Add Inline TOC into your documentation
preview: inlineTOC
---

## Usage

Pass TOC items to the component.

```mdx
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';

<InlineTOC items={toc} />
```

### Use in Pages

You can add inline TOC into every page.

```tsx
<DocsPage>
  ...
  <InlineTOC items={toc} />
  ...
</DocsPage>
```

## Reference

<AutoTypeTable path="./content/docs/ui/props.ts" name="InlineTOCProps" />



================================================
FILE: apps/docs/content/docs/ui/components/server-codeblock.tsx
================================================
import * as Base from 'fumadocs-ui/components/codeblock';
import { highlight } from 'fumadocs-core/highlight';
import { type HTMLAttributes } from 'react';

export async function CodeBlock({
  code,
  lang,
  ...rest
}: HTMLAttributes<HTMLElement> & {
  code: string;
  lang: string;
}) {
  const rendered = await highlight(code, {
    lang,
    components: {
      pre: (props) => <Base.Pre {...props} />,
    },
    // other Shiki options
  });

  return <Base.CodeBlock {...rest}>{rendered}</Base.CodeBlock>;
}



================================================
FILE: apps/docs/content/docs/ui/components/steps.mdx
================================================
---
title: Steps
description: Adding steps to your docs
preview: steps
---

## Usage

Put your steps into the `Steps` container.

```mdx
import { Step, Steps } from 'fumadocs-ui/components/steps';

<Steps>
<Step>

### Hello World

</Step>

<Step>

### Hello World

</Step>
</Steps>
```

> We recommend using Tailwind CSS utility classes directly on Tailwind CSS projects.

### Without imports

You can use the Tailwind CSS utilities without importing it.

```mdx
<div className="fd-steps">
  <div className="fd-step" />
</div>
```

It supports adding step styles to only headings with arbitrary variants.

```mdx
<div className='fd-steps [&_h3]:fd-step'>

### Hello World

</div>
```

<div className='fd-steps [&_h3]:fd-step'>

### Hello World

You no longer need to use the step component anymore.

</div>



================================================
FILE: apps/docs/content/docs/ui/components/tabs.client.tsx
================================================
'use client';

import { useEffect, useState } from 'react';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/components/ui/button';

export function UrlBar() {
  const [url, setUrl] = useState('');
  useEffect(() => {
    const timer = setInterval(() => {
      setUrl(window.location.pathname + window.location.hash);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <pre className="rounded-lg border bg-card p-2 text-sm">{url}</pre>;
}

export function WithoutValueTest() {
  const [items, setItems] = useState(['Item 1', 'Item 2']);

  return (
    <>
      <Tabs items={items}>
        {items.map((item) => (
          <Tab key={item}>{item}</Tab>
        ))}
      </Tabs>
      <button
        className={cn(
          buttonVariants({
            variant: 'secondary',
          }),
        )}
        onClick={() => setItems(['Item 1', 'Item 3', 'Item 2'])}
      >
        Change Items
      </button>
    </>
  );
}



================================================
FILE: apps/docs/content/docs/ui/components/tabs.mdx
================================================
---
title: Tabs
description:
  A Tabs component built with Radix UI, with additional features such as
  persistent and shared value.
preview: tabs
---

## Usage

Import it in your MDX documents.

```mdx
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

<Tabs items={['Javascript', 'Rust']}>
  <Tab value="Javascript">Javascript is weird</Tab>
  <Tab value="Rust">Rust is fast</Tab>
</Tabs>
```

### Without `value`

Without a `value`, it detects from the children index. Note that it might cause errors on re-renders, it's not encouraged if the tabs might change.

```mdx
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

<Tabs items={['Javascript', 'Rust']}>
  <Tab>Javascript is weird</Tab>
  <Tab>Rust is fast</Tab>
</Tabs>
```

#### Demo with Re-renders

<Tabs items={['Javascript', 'Rust']}>
  <Tab>Javascript is weird</Tab>
  <Tab>Rust is fast</Tab>
</Tabs>

<WithoutValueTest />

### Shared Value

By passing an `groupId` property, you can share a value across all tabs with the same
id.

```mdx
<Tabs groupId="language" items={['Javascript', 'Rust']}>
  <Tab value="Javascript">Javascript is weird</Tab>
  <Tab value="Rust">Rust is fast</Tab>
</Tabs>
```

### Persistent

You can enable persistent by passing a `persist` property. The value will be
stored in `localStorage`, with its id as the key.

```mdx
<Tabs groupId="language" items={['Javascript', 'Rust']} persist>
  <Tab value="Javascript">Javascript is weird</Tab>
  <Tab value="Rust">Rust is fast</Tab>
</Tabs>
```

> Persistent only works if you have passed an `id`.

### Default Value

Set a default value by passing `defaultIndex`.

```mdx
<Tabs items={['Javascript', 'Rust']} defaultIndex={1}>
  <Tab value="Javascript">Javascript is weird</Tab>
  <Tab value="Rust">Rust is fast</Tab>
</Tabs>
```

### Link to Tab

Use HTML `id` attribute to link to a specific tab.

```mdx
<Tabs items={['Javascript', 'Rust', 'C++']}>
  <Tab value="Javascript">Javascript is weird</Tab>
  <Tab value="Rust">Rust is fast</Tab>
  <Tab id="tab-cpp" value="C++">
    `Hello World`
  </Tab>
</Tabs>
```

You can add the hash `#tab-cpp` to your URL and reload, the C++ tab will be activated.

<Tabs items={['Javascript', 'Rust', 'C++']}>
  <Tab value="Javascript">Javascript is weird</Tab>
  <Tab value="Rust">Rust is fast</Tab>
  <Tab id="tab-cpp" value="C++">
    `Hello World`
  </Tab>
</Tabs>

Additionally, the `updateAnchor` property can be set to `true` in the `Tabs` component
to automatically update the URL hash whenever time a new tab is selected:

```mdx
<Tabs items={['Javascript', 'Rust', 'C++']} updateAnchor>
  <Tab id="tab-js" value="Javascript">
    Javascript is weird
  </Tab>
  <Tab id="tab-rs" value="Rust">
    Rust is fast
  </Tab>
  <Tab id="tab-cpp" value="C++">
    `Hello World`
  </Tab>
</Tabs>
```

<UrlBar />

<Tabs items={['Hello', 'World']} updateAnchor>
  <Tab id="tab-hello" value="Hello">
    Hello!
  </Tab>
  <Tab id="tab-world" value="World">
    World!
  </Tab>
</Tabs>

### Advanced

You can use the styled Radix UI primitive directly from exported `Primitive`.

```mdx
import { Primitive } from 'fumadocs-ui/components/tabs';

<Primitive.Tabs>
  <Primitive.TabsList>
    <Primitive.TabsTrigger />
  </Primitive.TabsList>
  <Primitive.TabsContent />
</Primitive.Tabs>
```



================================================
FILE: apps/docs/content/docs/ui/components/type-table.mdx
================================================
---
title: Type Table
description: A table for documenting types
preview: typeTable
---

## Usage

It accepts a `type` property.

```mdx
import { TypeTable } from 'fumadocs-ui/components/type-table';

<TypeTable
  type={{
    percentage: {
      description:
        'The percentage of scroll position to display the roll button',
      type: 'number',
      default: 0.2,
    },
  }}
/>
```

## References

### Type Table

<AutoTypeTable path="./content/docs/ui/props.ts" name="TypeTableProps" />

### Object Type

<AutoTypeTable path="./content/docs/ui/props.ts" name="ObjectTypeProps" />



================================================
FILE: apps/docs/content/docs/ui/layouts/docs.mdx
================================================
---
title: Docs Layout
description: The layout of documentation
---

The layout of documentation pages, it includes a sidebar and mobile-only navbar.

> It is a server component, you should not reference it in a client component.

## Usage

Pass your page tree to the component.

```tsx title="layout.tsx"
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/app/layout.config';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...baseOptions} tree={tree}>
      {children}
    </DocsLayout>
  );
}
```

<AutoTypeTable
  path="./content/docs/ui/props.ts"
  type="Omit<DocsLayoutProps, 'children' | 'disableThemeSwitch'>"
/>

## Sidebar

```tsx title="layout.tsx"
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

<DocsLayout
  sidebar={{
    enabled: true,
    // replace the default sidebar
    // component:
  }}
/>;
```

> See [Sidebar Links](/docs/ui/navigation/sidebar) for customising sidebar items.

<AutoTypeTable path="./content/docs/ui/props.ts" name="SidebarProps" />

## Nav

A mobile-only navbar, we recommend to customise it from `baseOptions`.

<div className='max-w-[460px] mx-auto'>

![Docs Nav](/docs/docs-nav.png)

</div>

```tsx
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/fuma-nama/fumadocs',
  nav: {
    title: 'My App',
  },
};
```

<AutoTypeTable
  path="./content/docs/ui/props.ts"
  type="Omit<NavbarProps, 'children'>"
/>

### Transparent Mode

To make the navbar background transparent, you can configure transparent mode.

```tsx
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    transparentMode: 'top',
  },
};
```

| Mode     | Description                              |
| -------- | ---------------------------------------- |
| `always` | Always use a transparent background      |
| `top`    | When at the top of page                  |
| `none`   | Disable transparent background (default) |

### Replace Navbar

To replace the navbar in Docs Layout, set `nav.component` to your own component.

```tsx title="layout.tsx"
import { baseOptions } from '@/app/layout.config';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions}
      nav={{
        component: <CustomNavbar />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
```

Fumadocs uses **CSS Variables** to share the size of layout components, and fit each layout component into appropriate position.

You need to override `--fd-nav-height` to the exact height of your custom navbar, this can be done with a CSS stylesheet (e.g. in `global.css`):

```css
:root {
  --fd-nav-height: 80px !important;
}
```

## Advanced

### Disable Prefetching

By default, it uses the Next.js Link component with prefetch enabled.
When the link component appears into the browser viewport, the content (RSC payload) will be prefetched.

On Vercel, this may cause a high usage of serverless functions and Data Cache.
It can also hit the limits of some other hosting platforms.

You can disable prefetching to reduce the amount of RSC requests.

```tsx
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

<DocsLayout sidebar={{ prefetch: false }} />;
```



================================================
FILE: apps/docs/content/docs/ui/layouts/home-layout.mdx
================================================
---
title: Home Layout
description: Shared layout for other pages
---

## Usage

Add a navbar and search dialog across other pages.

```tsx title="/app/(home)/layout.tsx"
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}
```

Create a [Route Group](https://nextjs.org/docs/app/building-your-application/routing/route-groups) to share the same layout across multiple pages.

<Files>
  <Folder name="(home)" defaultOpen>
    <File name="page.tsx" />
    <File name="layout.tsx" />
  </Folder>
  <Folder name="/docs">
    <Folder name={'[[..slugs]]'}>
      <File name="page.tsx" />
    </Folder>
    <File name="layout.tsx" />
  </Folder>
</Files>

We recommend to customise it from [`baseOptions`](/docs/ui/navigation/links).



================================================
FILE: apps/docs/content/docs/ui/layouts/notebook.mdx
================================================
---
title: Notebook
description: A more compact version of Docs Layout
---

![Notebook](/docs/notebook.png)

## Usage

Enable the notebook layout with `fumadocs-ui/layouts/notebook`, it's a more compact layout than the default one.

```tsx title="layout.tsx"
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions}
      // the position of navbar
      nav={{ ...baseOptions.nav, mode: 'top' }}
      // the position of Sidebar Tabs
      tabMode="navbar"
      tree={source.pageTree}
    >
      {children}
    </DocsLayout>
  );
}
```

The options are inherited from [Docs Layout](/docs/ui/layouts/docs).



================================================
FILE: apps/docs/content/docs/ui/layouts/page.mdx
================================================
---
title: Docs Page
description: A page in your documentation
---

Page is the base element of a documentation, it includes Table of contents,
Footer, and Breadcrumb.

## Usage

```tsx title="page.tsx"
import {
  DocsPage,
  DocsDescription,
  DocsTitle,
  DocsBody,
} from 'fumadocs-ui/page';

<DocsPage>
  <DocsTitle>title</DocsTitle>
  <DocsDescription>description</DocsDescription>
  <DocsBody>...</DocsBody>
</DocsPage>;
```

<Callout type='info' title='Good to know'>

Instead of rendering the title with `DocsTitle` in `page.tsx`, you can put the title into MDX file.
This will render the title in the MDX body.

</Callout>

### Body

It applies the [Typography](/docs/ui/theme#typography) styles, wrap your content inside.

```tsx
import { DocsBody } from 'fumadocs-ui/page';

<DocsBody>
  <h1>This heading looks good!</h1>
</DocsBody>;
```

## Configurations

### Full Mode

To extend the page to fill up all available space, pass `full` to the page component.
This will force TOC to be shown as a popover.

```tsx
import { DocsPage } from 'fumadocs-ui/page';

<DocsPage full>...</DocsPage>;
```

### Table of Contents

An overview of all the headings in your article, it requires an array of headings.

For Markdown and MDX documents, You can obtain it using the
[TOC Utility](/docs/headless/utils/get-toc). Content sources like Fumadocs MDX offer this out-of-the-box.

```tsx
import { DocsPage } from 'fumadocs-ui/page';

<DocsPage toc={headings}>...</DocsPage>;
```

Customise or disable TOC from your documentation with the `tableOfContent` option.

```tsx
import { DocsPage } from 'fumadocs-ui/page';

<DocsPage tableOfContent={options}>...</DocsPage>;
```

<AutoTypeTable path="./content/docs/ui/props.ts" name="TOCProps" />

#### Style

You can choose another style for TOC, like `clerk` inspired by https://clerk.com:

```tsx
import { DocsPage } from 'fumadocs-ui/page';

<DocsPage
  tableOfContent={{
    style: 'clerk',
  }}
>
  ...
</DocsPage>;
```

#### Popover Mode

On smaller devices, it is shown on a popover instead.
Customise it with the `tableOfContentPopover` option.

```tsx
import { DocsPage } from 'fumadocs-ui/page';

<DocsPage tableOfContentPopover={options}>...</DocsPage>;
```

<AutoTypeTable path="./content/docs/ui/props.ts" name="TOCPopoverProps" />

### Last Updated Time

Display last updated time of the page.

```tsx
import { DocsPage } from 'fumadocs-ui/page';

<DocsPage lastUpdate={new Date(lastModifiedTime)} />;
```

Since you might have different version controls (e.g. Github) or it's from
remote sources like Sanity, Fumadocs UI doesn't display the last updated time by
default.

For Github hosted documents, you can use
the [`getGithubLastEdit`](/docs/headless/utils/git-last-edit) utility.

```tsx
import { DocsPage } from 'fumadocs-ui/page';
import { getGithubLastEdit } from 'fumadocs-core/server';

const time = await getGithubLastEdit({
  owner: 'fuma-nama',
  repo: 'fumadocs',
  path: `content/docs/${page.file.path}`,
});

<DocsPage lastUpdate={new Date(time)} />;
```

<Callout type='info' title='Note'>

    You can also specify the last updated time of documents (e.g. using frontmatter).
    Don't forget to [update the schema type](/docs/mdx/collections#schema) on Fumadocs MDX first.

</Callout>

### Edit on GitHub

Add "Edit on GitHub" button to the page.

```tsx
import { DocsPage } from 'fumadocs-ui/page';

<DocsPage
  editOnGithub={{
    owner: 'fuma-nama',
    repo: 'fumadocs',
    sha: 'main',
    // file path, make sure it's valid
    path: `content/docs/${page.file.path}`,
  }}
/>;
```

### Footer

Footer is a navigation element that has two buttons to jump to the next and previous pages. When not specified, it shows the neighbour pages found from page tree.

Customise the footer with the `footer` option.

```tsx
import { DocsPage, DocsBody } from 'fumadocs-ui/page';

<DocsPage footer={options}>
  <DocsBody>...</DocsBody>
</DocsPage>;
```

<AutoTypeTable path="./content/docs/ui/props.ts" name="FooterProps" />

### Breadcrumb

A navigation element, shown only when user is navigating in folders.

<AutoTypeTable path="./content/docs/ui/props.ts" name="BreadcrumbProps" />



================================================
FILE: apps/docs/content/docs/ui/layouts/root-provider.mdx
================================================
---
title: Root Provider
description: The context provider of Fumadocs UI.
---

The context provider of all the components, including `next-themes` and context
for search dialog. It should be located at the root layout.

## Usage

```jsx
import { RootProvider } from 'fumadocs-ui/provider';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
```

### Search Dialog

Customize or disable the search dialog with `search` option.

```jsx
<RootProvider
  search={{
    enabled: false,
  }}
>
  {children}
</RootProvider>
```

Learn more from [Search](/docs/ui/search).

### Theme Provider

Fumadocs supports light/dark modes with [`next-themes`](https://github.com/pacocoursey/next-themes).
Customise or disable it with `theme` option.

```jsx
<RootProvider
  theme={{
    enabled: false,
  }}
>
  {children}
</RootProvider>
```



================================================
FILE: apps/docs/content/docs/ui/markdown/index.mdx
================================================
---
title: Markdown
description: How to write documents
---

## Introduction

Fumadocs provides many useful extensions to MDX, a markup language. Here is a brief introduction to the default MDX syntax of Fumadocs.

> MDX is not the only supported format of Fumadocs. In fact, you can use any renderers such as `next-mdx-remote` or CMS.

## MDX

We recommend MDX, a superset of Markdown with JSX syntax.
It allows you to import components, and use them right in the document, or even export values.

See:

- [MDX Syntax](https://mdxjs.com/docs/what-is-mdx/#mdx-syntax).
- GFM (GitHub Flavored Markdown) is also supported, see [GFM Specification](https://github.github.com/gfm).

```mdx
---
title: This is a document
---

import { Component } from './component';

<Component name="Hello" />

# Heading

## Heading

### Heading

#### Heading

Hello World, **Bold**, _Italic_, ~~Hidden~~

1. First
2. Second
3. Third

- Item 1
- Item 2

> Quote here

![alt](/image.png)

| Table | Description |
| ----- | ----------- |
| Hello | World       |
```

### Images

Images are automatically optimized for `next/image`.

```mdx
![Image](/image.png)
```

### Auto Links

Internal links use the `next/link` component to allow prefetching and avoid hard-reload.

External links will get the default `rel="noreferrer noopener" target="_blank"` attributes for security.

```mdx
[My Link](https://github.github.com/gfm)

This also works: https://github.github.com/gfm.
```

### Cards

Useful for adding links.

```mdx
import { HomeIcon } from 'lucide-react';

<Cards>
  <Card
    href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating"
    title="Fetching, Caching, and Revalidating"
  >
    Learn more about caching in Next.js
  </Card>
  <Card title="href is optional">Learn more about `fetch` in Next.js.</Card>
  <Card icon={<HomeIcon />} href="/" title="Home">
    You can include icons too.
  </Card>
</Cards>
```

<Cards>
  <Card
    href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating"
    title="Fetching, Caching, and Revalidating"
  >
    Learn more about caching in Next.js
  </Card>
  <Card title="href is optional">Learn more about `fetch` in Next.js.</Card>
  <Card icon={<HomeIcon />} href="/" title="Home">
    You can include icons too.
  </Card>
</Cards>

#### "Further Reading" Section

You can do something like:

```tsx title="page.tsx"
import { getPageTreePeers } from 'fumadocs-core/server';
import { source } from '@/lib/source';

<Cards>
  {getPageTreePeers(source.pageTree, '/docs/my-page').map((peer) => (
    <Card key={peer.url} title={peer.name} href={peer.url}>
      {peer.description}
    </Card>
  ))}
</Cards>;
```

This will show the other pages in the same folder as cards.

<DocsCategory url="/docs/ui/navigation" />

### Callouts

Useful for adding tips/warnings, it is included by default. You can specify the type of callout:

- `info` (default)
- `warn`
- `error`

```mdx
<Callout>Hello World</Callout>

<Callout title="Title">Hello World</Callout>

<Callout title="Title" type="error">
  Hello World
</Callout>
```

<Callout>Hello World</Callout>

<Callout title="Title">Hello World</Callout>

<Callout title="Title" type="error">
  Hello World
</Callout>

### Headings

An anchor is automatically applied to each heading, it sanitizes invalid characters like spaces. (e.g. `Hello World` to `hello-world`)

```md
# Hello `World`
```

#### TOC Settings

The table of contents (TOC) will be generated based on headings, you can also customise the effects of headings:

```md
# Heading [!toc]

This heading will be hidden from TOC.

# Another Heading [toc]

This heading will **only** be visible in TOC, you can use it to add additional TOC items.
Like headings rendered in a React component:

<MyComp />
```

#### Custom Anchor

You can add `[#slug]` to customise heading anchors.

```md
# heading [#my-heading-id]
```

You can also chain it with TOC settings like:

```md
# heading [toc] [#my-heading-id]
```

To link people to a specific heading, add the heading id to hash fragment: `/page#my-heading-id`.

### Codeblock

Syntax Highlighting is supported by default using [Rehype Code](/docs/headless/mdx/rehype-code).

````mdx
```js
console.log('Hello World');
```
````

You can add a title to the codeblock.

````mdx
```js title="My Title"
console.log('Hello World');
```
````

#### Shiki Transformers

We support some of the [Shiki Transformers](https://shiki.style/packages/transformers), allowing you to highlight/style specific lines.

````md tab="Input"
```tsx
// highlight a line
<div>Hello World</div>  // [\!code highlight]

// highlight a word
// [\!code word:Fumadocs]
<div>Fumadocs</div>

// diff styles
console.log('hewwo'); // [\!code --]
console.log('hello'); // [\!code ++]
```
````

```tsx tab="Output"
// highlight a line
<div>Hello World</div>  // [!code highlight]

// highlight a word
// [!code word:Fumadocs]
<div>Fumadocs</div>

// diff styles:
console.log('hewwo'); // [!code --]
console.log('hello'); // [!code ++]
```

#### Tab Groups

You can use code blocks with the `<Tab />` component.

````mdx
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

```ts tab="Tab 1"
console.log('A');
```

```ts tab="Tab 2"
console.log('B');
```
````

> Note that you can add MDX components instead of importing them in MDX files.

```ts tab="Tab 1"
console.log('A');
```

```ts tab="Tab 2"
console.log('B');
```

### Include

> This is only available on **Fumadocs MDX**.

Reference another file (can also be a Markdown/MDX document).
Specify the target file path in `<include>` tag (relative to the MDX file itself).

```mdx title="page.mdx"
<include>./another.mdx</include>
```

See [other usages](/docs/mdx/include).

## Additional Features

You may be interested:

<DocsCategory />

### Package Install

Generate commands for installing packages via package managers.

````md tab="Input"
```package-install
npm i next -D
```
````

```package-install tab="Output"
npm i next -D
```

To enable, see [Remark Install](/docs/headless/mdx/install).



================================================
FILE: apps/docs/content/docs/ui/markdown/math.mdx
================================================
---
title: Math
description: Writing math equations in Markdown/MDX.
---

## Getting Started

```package-install
remark-math rehype-katex katex
```

### Add Plugins

Add the required remark/rehype plugins, the code might be vary depending on your content source.

```ts title="source.config.ts" tab="Fumadocs MDX"
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { defineConfig } from 'fumadocs-mdx/config';

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath],
    // Place it at first, it should be executed before the syntax highlighter
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
});
```

### Add Stylesheet

Add the following to root layout to make it looks great:

```tsx title="layout.tsx"
import 'katex/dist/katex.css';
```

### Done

Type some TeX expression in your documents, like the Pythagoras theorem:

````mdx
Inline: $$c = \pm\sqrt{a^2 + b^2}$$

```math
c = \pm\sqrt{a^2 + b^2}
```
````

Inline: $$c = \pm\sqrt{a^2 + b^2}$$

```math
c = \pm\sqrt{a^2 + b^2}
```

Taylor Expansion (expressing holomorphic function $$f(x)$$ in power series):

```math
\displaystyle {\begin{aligned}T_{f}(z)&=\sum _{k=0}^{\infty }{\frac {(z-c)^{k}}{2\pi i}}\int _{\gamma }{\frac {f(w)}{(w-c)^{k+1}}}\,dw\\&={\frac {1}{2\pi i}}\int _{\gamma }{\frac {f(w)}{w-c}}\sum _{k=0}^{\infty }\left({\frac {z-c}{w-c}}\right)^{k}\,dw\\&={\frac {1}{2\pi i}}\int _{\gamma }{\frac {f(w)}{w-c}}\left({\frac {1}{1-{\frac {z-c}{w-c}}}}\right)\,dw\\&={\frac {1}{2\pi i}}\int _{\gamma }{\frac {f(w)}{w-z}}\,dw=f(z),\end{aligned}}
```

<Callout title="Tip">

    You can actually copy equations on Wikipedia, they will be converted into a KaTeX string when you paste it.

```math
\displaystyle S[{\boldsymbol {q}}]=\int _{a}^{b}L(t,{\boldsymbol {q}}(t),{\dot {\boldsymbol {q}}}(t))\,dt.
```

</Callout>



================================================
FILE: apps/docs/content/docs/ui/markdown/mermaid.mdx
================================================
---
title: Mermaid
description: Rendering diagrams in your docs
---

Fumadocs doesn't have a built-in Mermaid wrapper provided, we recommend using `mermaid` directly.

## Setup

Install the required dependencies, `next-themes` is used with Fumadocs to manage the light/dark mode.

```package-install
mermaid next-themes
```

Create the Mermaid component:

<include cwd meta='title="components/mdx/mermaid.tsx"'>
  ./components/mdx/mermaid.tsx
</include>

> This is originally inspired by [remark-mermaid](https://github.com/the-guild-org/docs/blob/main/packages/remark-mermaid/src/mermaid.tsx).

Add the component as a MDX component:

```tsx title="mdx-components.tsx"
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Mermaid } from '@/components/mdx/mermaid';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Mermaid,
    ...components,
  };
}
```

## Usage

Use it in MDX files.

```mdx
<Mermaid
  chart="
graph TD;
subgraph AA [Consumers]
A[Mobile app];
B[Web app];
C[Node.js client];
end
subgraph BB [Services]
E[REST API];
F[GraphQL API];
G[SOAP API];
end
Z[GraphQL API];
A --> Z;
B --> Z;
C --> Z;
Z --> E;
Z --> F;
Z --> G;"
/>
```

<Mermaid
  chart="
graph TD;
subgraph AA [Consumers]
A[Mobile app];
B[Web app];
C[Node.js client];
end
subgraph BB [Services]
E[REST API];
F[GraphQL API];
G[SOAP API];
end
Z[GraphQL API];
A --> Z;
B --> Z;
C --> Z;
Z --> E;
Z --> F;
Z --> G;"
/>



================================================
FILE: apps/docs/content/docs/ui/markdown/twoslash.mdx
================================================
---
title: Twoslash
description: Use Typescript Twoslash in your docs
---

## Usage

Thanks to the Twoslash integration of [Shiki](https://github.com/shikijs/shiki), the default code syntax highlighter, it is as simple as adding a transformer.

```package-install
fumadocs-twoslash twoslash
```

Update your `serverExternalPackages` in Next.js config:

```js
import { createMDX } from 'fumadocs-mdx/next';

const config = {
  reactStrictMode: true,
  serverExternalPackages: ['typescript', 'twoslash'],
};

const withMDX = createMDX();

export default withMDX(config);
```

Add to your Shiki transformers.

```ts twoslash title="source.config.ts (Fumadocs MDX)"
import { defineConfig } from 'fumadocs-mdx/config';
import { transformerTwoslash } from 'fumadocs-twoslash';
import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash(),
      ],
    },
  },
});
```

Add styles, Tailwind CSS v4 is required.

```css title="Tailwind CSS"
@import 'fumadocs-twoslash/twoslash.css';
```

Add MDX components.

```tsx title="mdx-components.tsx"
import * as Twoslash from 'fumadocs-twoslash/ui';
import defaultComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...Twoslash,
    ...components,
  };
}
```

Now you can add `twoslash` meta string to codeblocks.

````md
```ts twoslash
console.log('Hello World');
```
````

### Example

Learn more about [Twoslash notations](https://twoslash.netlify.app/refs/notations).

```ts twoslash title="Test"
type Player = {
  /**
   * The player name
   * @default 'user'
   */
  name: string;
};

// ---cut---
// @noErrors
console.g;
//       ^|

// ---cut-start---
// ---cut-end---

// ---cut-start---
// ---cut-end---

// ---cut-start---
// ---cut-end---

// ---cut-start---
// ---cut-end---

const player: Player = { name: 'Hello World' };
//    ^?
```

```ts twoslash
const a = '123';

console.log(a);
//      ^^^
```

```ts twoslash
import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  input: ['./museum.yaml'],
  output: './content/docs/ui',
});
```

```ts twoslash
// @errors: 2588
const a = '123';

a = 132;
```

## Cache

You can enable filesystem cache with `typesCache` option:

```ts twoslash title="source.config.ts"
import { transformerTwoslash } from 'fumadocs-twoslash';
import { createFileSystemTypesCache } from 'fumadocs-twoslash/cache-fs';

transformerTwoslash({
  typesCache: createFileSystemTypesCache(),
});
```



================================================
FILE: apps/docs/content/docs/ui/mdx/codeblock.mdx
================================================
---
title: Code Block
description: Displaying Shiki highlighted code blocks
---

<Wrapper>
<div className="bg-fd-background rounded-lg prose-no-margin">

```js title="config.js"
import createMDX from 'fumadocs-mdx/config';

const withMDX = createMDX();

// [!code word:config]
/** @type {import('next').NextConfig} */
const config = {
  // [!code highlight]
  reactStrictMode: true, // [!code highlight]
}; // [!code highlight]

export default withMDX(config);
```

</div>
</Wrapper>

This is a MDX component to be used with [Rehype Code](/docs/headless/mdx/rehype-code) to display highlighted codeblocks.

Supported features:

- Copy button
- Custom titles and icons

> If you're looking for an equivalent with runtime syntax highlighting, see [Dynamic Code Block](/docs/ui/components/dynamic-codeblock).

## Usage

Wrap the pre element in `<CodeBlock />`, which acts as the wrapper of code block.

```tsx title="mdx-components.tsx"
import defaultComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    // HTML `ref` attribute conflicts with `forwardRef`
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre> {/* [!code highlight] */}
      </CodeBlock>
    ),
    ...components,
  };
}
```

See [Markdown](/docs/ui/markdown#codeblock) for usages.

### Keep Background

Use the background color generated by Shiki.

```tsx
import { Pre, CodeBlock } from 'fumadocs-ui/components/codeblock';

<CodeBlock keepBackground {...props}>
  <Pre>{props.children}</Pre>
</CodeBlock>;
```

### Icons

Specify a custom icon by passing an `icon` prop to `CodeBlock` component.

By default, the icon will be injected by the custom Shiki transformer.

```js title="config.js"
console.log('js');
```



================================================
FILE: apps/docs/content/docs/ui/mdx/index.mdx
================================================
---
title: MDX
description: Default MDX Components
---

## Usage

The default MDX components include Cards, Callouts, Code Blocks and Headings.

```ts
import defaultMdxComponents from 'fumadocs-ui/mdx';
```

### Relative Link

To support links with relative file path in `href`, override the default `a` component with:

```tsx title="app/docs/[[...slug]]/page.tsx"
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { source } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';

const page = source.getPage(['...']);

return (
  <MdxContent
    components={getMDXComponents({
      // override the `a` tag
      a: createRelativeLink(source, page),
    })}
  />
);
```

```mdx
[My Link](./file.mdx)
```

[Example: `../(integrations)/open-graph.mdx`](<../(integrations)/open-graph.mdx>)

<Callout type="warn">Server Component only.</Callout>



================================================
FILE: apps/docs/content/docs/ui/navigation/index.mdx
================================================
---
title: Navigation
description: Configure navigation in your Fumadocs app.
index: true
---



================================================
FILE: apps/docs/content/docs/ui/navigation/links.mdx
================================================
---
title: Layout Links
description: Customise the shared navigation links on all layouts.
---

## Overview

Fumadocs allows adding additional links to your layouts with a `links` prop, like linking to your "showcase" page.

<div className="not-prose grid gap-2 *:border max-sm:*:last:hidden sm:grid-cols-[2fr_1fr]">

<>![Nav](/docs/nav-layout-home.png)</>

<>![Nav](/docs/nav-layout-docs.png)</>

</div>

```tsx tab="Shared Options" title="app/layout.config.tsx"
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  links: [], // [!code highlight]
  // other options
};
```

```tsx tab="Docs Layout"
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions}
      tree={source.pageTree}
      links={[]} // [!code highlight]
    >
      {children}
    </DocsLayout>
  );
}
```

```tsx tab="Home Layout"
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions}
      links={[]} // [!code highlight]
    >
      {children}
    </HomeLayout>
  );
}
```

You can see all supported items below:

### Link Item

A link to navigate to a URL/href, can be external.

```tsx title="app/layout.config.tsx"
import { BookIcon } from 'lucide-react';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  links: [
    {
      icon: <BookIcon />,
      text: 'Blog',
      url: '/blog',
      // secondary items will be displayed differently on navbar
      secondary: false,
    },
  ],
};
```

#### Active Mode

The conditions to be marked as active.

| Mode         | Description                                                 |
| ------------ | ----------------------------------------------------------- |
| `url`        | When browsing the specified url                             |
| `nested-url` | When browsing the url and its child pages like `/blog/post` |
| `none`       | Never be active                                             |

```tsx title="app/layout.config.tsx"
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  links: [
    {
      text: 'Blog',
      url: '/blog',
      active: 'nested-url',
    },
  ],
};
```

### Icon Item

Same as link item, but is shown as an icon button.
Icon items are secondary by default.

```tsx title="app/layout.config.tsx"
import { BookIcon } from 'lucide-react';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  links: [
    {
      type: 'icon',
      label: 'Visit Blog', // `aria-label`
      icon: <BookIcon />,
      text: 'Blog',
      url: '/blog',
    },
  ],
};
```

### Navigation Menu

A navigation menu containing link items.

```tsx title="app/layout.config.tsx"
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  links: [
    {
      type: 'menu',
      text: 'Guide',
      items: [
        {
          text: 'Getting Started',
          description: 'Learn to use Fumadocs',
          url: '/docs',

          // (optional) Props for Radix UI Navigation Menu item in Home Layout
          menu: {
            className: 'row-span-2',
            // add banner to navigation menu card
            // can be an image or other elements
            banner: <div>Banner</div>,
          },
        },
      ],
    },
  ],
};
```

Note that the `description` field will only be displayed on the navbar in Home Layout.

### Custom Item

Display a custom component.

```tsx title="app/layout.config.tsx"
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  links: [
    {
      type: 'custom',
      children: <Button variant="primary">Login</Button>,
      secondary: true,
    },
  ],
};
```

### GitHub URL

There's also a shortcut for adding GitHub repository link item.

```tsx twoslash title="app/layout.config.tsx"
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com',
};
```



================================================
FILE: apps/docs/content/docs/ui/navigation/sidebar.mdx
================================================
---
title: Sidebar Links
description: Customise sidebar navigation links on Docs Layout.
---

## Overview

<div className='flex justify-center items-center *:max-w-[200px] bg-gradient-to-br from-fd-primary/10 rounded-xl border'>

    ![Sidebar](/docs/sidebar.png)

</div>

Sidebar items are rendered from the page tree you passed to `<DocsLayout />`.

For `source.pageTree`, it generates the tree from your file structure, you can see [Routing](/docs/ui/page-conventions) for available patterns.

```tsx title="layout.tsx"
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      // other props
    >
      {children}
    </DocsLayout>
  );
}
```

You may hardcode it too:

```tsx title="layout.tsx"
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={{
        name: 'docs',
        children: [],
      }}
      // other props
    >
      {children}
    </DocsLayout>
  );
}
```

### Sidebar Tabs

A navigation component to switch between tabs, it will be hidden unless one of its items is active.

<div className='flex justify-center items-center *:max-w-[360px] bg-gradient-to-br from-fd-primary/10 rounded-xl border'>

    ![Sidebar Tabs](/docs/sidebar-tabs.png)

</div>

You can add items from page tree by creating a `meta.json` file ([Root Folder](/docs/ui/page-conventions#root-folder)):

```json title="content/docs/my-folder/meta.json"
{
  "title": "Name of Folder",
  "description": "The description of root folder (optional)",
  "root": true
}
```

Or specify them explicitly:

```tsx title="/app/docs/layout.tsx"
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

<DocsLayout
  sidebar={{
    tabs: [
      {
        title: 'Components',
        description: 'Hello World!',
        // active for `/docs/components` and sub routes like `/docs/components/button`
        url: '/docs/components',

        // optionally, you can specify a set of urls which activates the item
        // urls: new Set(['/docs/test', '/docs/components']),
      },
    ],
  }}
/>;
```

Set it to `false` to disable:

```tsx
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

<DocsLayout sidebar={{ tabs: false }} />;
```

<Callout title="Want further customisations?">

You can specify a `banner` to the [Docs Layout](/docs/ui/layouts/docs) component.

```tsx
import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  sidebar: {
    banner: <div>Hello World</div>,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
```

</Callout>

#### Decoration

Change the icon/styles of tabs.

```tsx
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

<DocsLayout
  sidebar={{
    tabs: {
      transform: (option, node) => ({
        ...option,
        icon: 'my icon',
      }),
    },
  }}
/>;
```



================================================
FILE: apps/docs/content/shared/llms.ts
================================================
import * as fs from 'node:fs/promises';
import fg from 'fast-glob';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkStringify from 'remark-stringify';
import remarkMdx from 'remark-mdx';
import { remarkInclude } from 'fumadocs-mdx/config';

export const revalidate = false;

const processor = remark()
  .use(remarkMdx)
  // https://fumadocs.dev/docs/mdx/include
  .use(remarkInclude)
  // gfm styles
  .use(remarkGfm)
  // .use(your remark plugins)
  .use(remarkStringify); // to string

export async function GET() {
  // all scanned content
  const files = await fg(['./content/docs/**/*.mdx']);

  const scan = files.map(async (file) => {
    const fileContent = await fs.readFile(file);
    const { content, data } = matter(fileContent.toString());

    const processed = await processor.process({
      path: file,
      value: content,
    });

    return `file: ${file}
meta: ${JSON.stringify(data, null, 2)}
        
${processed}`;
  });

  const scanned = await Promise.all(scan);

  return new Response(scanned.join('\n\n'));
}



================================================
FILE: apps/docs/content/shared/page-conventions.i18n.mdx
================================================
You can add Markdown/meta files for different languages by attending `.{locale}` to your file name, like `page.cn.md` and `meta.cn.json`.

Make sure to create a file for the default locale first, the locale code is optional (e.g. both `get-started.mdx` and `get-started.en.mdx` are accepted).

<Files>
  <Folder name="content/docs" defaultOpen>
    <File name="meta.json" />
    <File name="meta.cn.json" />
    <File name="get-started.mdx" />
    <File name="get-started.cn.mdx" />
  </Folder>
</Files>



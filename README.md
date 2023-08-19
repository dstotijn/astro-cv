# astro-cv

Template for a CV website, built with Astro and Tailwind CSS. Includes a script
to generate a PDF.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/dstotijn/astro-cv/tree/main)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/dstotijn/astro-cv/tree/main)

## Installation

```
npm create astro@latest my-cv -- --template dstotijn/astro-cv
```

Alternatively, you can simply download or `git clone` the repository.

## Usage

The template comes with a few pre-defined content collections for job positions,
side projects and volunteering activities. See
[`src/content/config.ts`](src/content/config.ts) for more details.

The basic bio information (name, title, contact details, etcetera) are defined
as constants at the top of [`src/pages/index.astro`](src/pages/index.astro).

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run generate:pdf`    | Build site, and generate PDF in `./dist/cv.pdf`  |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

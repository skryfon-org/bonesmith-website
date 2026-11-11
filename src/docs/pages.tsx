import type { ReactNode } from 'react'
import { Link } from '../components/SiteLink'
import { CodeBlock } from '../components/CodeBlock'
import { H2, Note } from './Prose'
import { REPO } from '../lib/site'

export type DocPage = { slug: string; title: string; summary: string; keywords: string; body: ReactNode }

const FLAGS = `| Flag            | Options                                                    | Default                    |
| --------------- | ---------------------------------------------------------- | -------------------------- |
| --type          | app, library                                               | app                        |
| --toolchain     | vite, vite-plus                                            | vite-plus                  |
| --routing       | react-router, tanstack-router (app only)                   | react-router               |
| --state         | none, redux-toolkit, zustand (app only)                    | none                       |
| --ui            | none, shadcn, mui, mantine                                 | none                       |
| --styling       | tailwind, css-modules, css-in-js                           | tailwind                   |
| --pm            | pnpm, npm, yarn, bun                                       | the one running create     |
| -y, --yes       | use defaults, never prompt                                 |                            |`

const KIRO_TREE = `.kiro/
├── steering/
│   ├── product.md
│   ├── tech.md
│   ├── structure.md
│   ├── testing.md
│   └── routing.md, styling.md, ui.md   (one per chosen option)
├── agents/
│   ├── reviewer
│   ├── feature-builder
│   └── toolchain-expert, ui-expert, ...  (one per chosen option)
└── settings/
    └── mcp.json`

export const docs: DocPage[] = [
  {
    slug: 'introduction', title: 'Introduction',
    summary: 'What Bonesmith is and why it exists.',
    keywords: 'overview about react scaffold create generator boilerplate',
    body: (
      <>
        <p><strong>Bonesmith</strong> (<code>npm create bonesmith</code>, package <code>create-bonesmith</code>) is a CLI that scaffolds a ready-to-build React 19 repo. It generates either a client-side app or a publishable component library with Storybook.</p>
        <p>Instead of copying a template and untangling it by hand, you answer a few questions and get a project whose folder structure, configuration and installed dependencies already match your choices.</p>
        <H2>What you get</H2>
        <ul>
          <li>Your choice of project type, toolchain, UI library, styling and package manager, plus routing and state for apps.</li>
          <li>TypeScript in strict mode, Vitest with React Testing Library, and git.</li>
          <li>Every dependency pinned to an exact version.</li>
          <li>A <code>.kiro/</code> setup (steering, agents, MCP servers) that matches the stack you picked.</li>
        </ul>
        <H2>Next steps</H2>
        <p>Follow the <Link to="/docs/quick-start">Quick Start</Link>, then read the <Link to="/docs/options">Options reference</Link>.</p>
      </>
    ),
  },
  {
    slug: 'quick-start', title: 'Quick Start',
    summary: 'Scaffold your first project in one command.',
    keywords: 'install npm create run requirements node getting started',
    body: (
      <>
        <H2>Requirements</H2>
        <p>You need Node.js 24.11 or newer, and git. Nothing needs to be installed globally.</p>
        <H2>Create a project</H2>
        <CodeBlock code="npm create bonesmith@latest my-app" />
        <p>The CLI asks for the project type, toolchain, routing, state, UI library, styling and package manager. Then it:</p>
        <ol>
          <li>writes the project into <code>my-app/</code>,</li>
          <li>runs <code>git init</code> and installs dependencies,</li>
          <li>makes an initial commit,</li>
          <li>runs <code>build</code>, <code>lint</code> and <code>test</code> once to check the result.</li>
        </ol>
        <H2>Use another package manager</H2>
        <CodeBlock code={`pnpm create bonesmith my-app\nyarn create bonesmith my-app\nbun create bonesmith my-app`} />
        <H2>Skip the prompts</H2>
        <p>Pass <code>--yes</code> to take the default for every choice you did not give as a flag. It never prompts, which suits CI and scripts.</p>
        <CodeBlock code={`npm create bonesmith@latest my-app -- --yes --routing tanstack-router --state zustand --ui shadcn\nnpm create bonesmith@latest my-lib -- --yes --type library --ui mui --styling css-modules --pm pnpm`} />
        <Note>With <code>npm create</code>, put <code>--</code> before the flags so npm passes them to Bonesmith.</Note>
      </>
    ),
  },
  {
    slug: 'options', title: 'Options',
    summary: 'Every flag, its choices and its default.',
    keywords: 'flags toolchain routing state ui styling pm type yes defaults combinations',
    body: (
      <>
        <p>Any choice you do not pass as a flag is prompted.</p>
        <CodeBlock code={FLAGS} lang="text" title="flags" />
        <H2>Toolchain</H2>
        <ul>
          <li><code>vite-plus</code>: <code>vp</code> handles dev, build, test, lint (Oxlint) and format (Oxfmt) in one toolchain.</li>
          <li><code>vite</code>: plain Vite and Vitest, with ESLint and Prettier.</li>
        </ul>
        <H2>Routing and state</H2>
        <p>Apps only. Choose React Router v7 (data router) or TanStack Router (type-safe, code-based routes). State is React state only, Redux Toolkit (slices, a typed store and react-redux hooks) or Zustand (small hook-based stores).</p>
        <H2>UI and styling</H2>
        <ul>
          <li><code>shadcn</code>: copy-in Radix and Tailwind components.</li>
          <li><code>mui</code>: Material UI components.</li>
          <li><code>mantine</code>: Mantine components.</li>
          <li><code>none</code>: no component library.</li>
        </ul>
        <p>Styling is Tailwind v4, CSS Modules (scoped <code>.module.css</code> files) or styled-components.</p>
        <H2>Unsupported combinations</H2>
        <p>The CLI exits with the flag that fixes the problem.</p>
        <ul>
          <li><code>--styling css-in-js</code> cannot be combined with <code>--ui mui</code>.</li>
          <li><code>--styling tailwind</code> cannot be combined with <code>--ui mantine</code> or <code>--ui mui</code>.</li>
          <li><code>--ui shadcn</code> requires <code>--styling tailwind</code>.</li>
        </ul>
      </>
    ),
  },
  {
    slug: 'library-mode', title: 'Library Mode',
    summary: 'Generate a publishable ESM component package with Storybook.',
    keywords: 'library storybook component package esm vitest browser playwright publish',
    body: (
      <>
        <p><code>--type library</code> generates an ESM-only component package.</p>
        <CodeBlock code="npm create bonesmith@latest my-lib -- --type library" />
        <H2>What it includes</H2>
        <ul>
          <li>It builds with <code>vp pack</code> (Vite+) or Vite library mode. Output is <code>dist/index.js</code> and <code>dist/index.d.ts</code>, plus <code>./styles.css</code> when the styling option emits CSS.</li>
          <li><code>react</code> and <code>react-dom</code> are peer dependencies, as are MUI and Mantine when you pick them.</li>
          <li>Storybook is always included. Stories run as Vitest browser tests (Playwright Chromium) as part of <code>test</code>, and <code>build-storybook</code> builds the static site.</li>
        </ul>
        <Note>Routing and state are not used in library mode. Passing <code>--routing</code> or <code>--state</code> is an error.</Note>
      </>
    ),
  },
  {
    slug: 'kiro', title: 'Kiro Setup',
    summary: 'The .kiro folder generated to match your stack.',
    keywords: 'kiro steering agents mcp settings ai',
    body: (
      <>
        <p>Every generated project includes a <code>.kiro/</code> folder with content that matches the options you chose.</p>
        <CodeBlock code={KIRO_TREE} lang="text" title=".kiro" />
        <H2>Steering</H2>
        <p><code>product.md</code>, <code>tech.md</code>, <code>structure.md</code> and <code>testing.md</code>, plus one file per chosen option, such as <code>routing.md</code>, <code>styling.md</code> or <code>ui.md</code>.</p>
        <H2>Agents</H2>
        <p>A <code>reviewer</code> and a <code>feature-builder</code>, plus an expert for each chosen option, such as <code>toolchain-expert</code> or <code>ui-expert</code>. Libraries also get <code>library-expert</code> and <code>storybook-expert</code>.</p>
        <H2>MCP servers</H2>
        <p><code>settings/mcp.json</code> lists MCP servers for the chosen layers, each pinned to a version.</p>
        <Note>Options you did not choose add nothing.</Note>
      </>
    ),
  },
  {
    slug: 'development', title: 'Development',
    summary: 'Build, test and extend Bonesmith itself.',
    keywords: 'contribute develop test matrix template layer axis release pins',
    body: (
      <>
        <p>Work on Bonesmith in the <a href={REPO} target="_blank" rel="noreferrer">repository</a>.</p>
        <CodeBlock code={`npm ci\nnpm run build           # src/ -> dist/\nnpm run typecheck\nnpm run lint\nnpm test                # unit, render snapshots, template lint\nnpm run lint:templates  # every combination rendered in memory\nnpm run test:matrix     # real scaffold + install + build + lint + test (slow)\nnpm run check:pack      # check the npm tarball file list`} />
        <p>To try the CLI locally, run <code>npm run build</code>, then <code>node /path/to/bonesmith/dist/index.js my-app</code> from an empty directory.</p>
        <H2>Adding an option</H2>
        <p>Every option is a folder under <code>templates/&lt;axis&gt;/&lt;option&gt;/</code>, containing a <code>layer.json</code>, files and Kiro content. Adding an option means adding a folder; the core code does not change. Version pins and their reasons are listed in <code>templates/PINS.md</code>.</p>
        <H2>Releasing</H2>
        <p>Releases are published from CI only. Push a <code>v&lt;version&gt;</code> tag that matches <code>package.json</code>. The release workflow runs the full matrix for that commit, checks the tarball and runs <code>npm publish --provenance</code>.</p>
      </>
    ),
  },
  {
    slug: 'troubleshooting', title: 'Troubleshooting',
    summary: 'Fixes for the problems people hit most.',
    keywords: 'error fail node version git install rerun combination unsupported',
    body: (
      <>
        <H2>A step failed</H2>
        <p>The CLI prints the exact command to re-run and keeps the project. Fix the cause, run that command inside the project folder, and continue.</p>
        <H2>Unsupported Node.js version</H2>
        <p>Bonesmith needs Node.js 24.11 or newer. Check with <code>node --version</code>.</p>
        <H2>Git is not found</H2>
        <p>Bonesmith runs <code>git init</code> and makes an initial commit, so git must be installed and on your <code>PATH</code>.</p>
        <H2>The CLI rejects my flags</H2>
        <p>Some option pairs are not supported. Read the message: it names the flag to change. See <Link to="/docs/options">Options</Link> for the full list.</p>
        <H2>Flags are ignored with npm</H2>
        <p>Use <code>--</code> before the flags: <code>npm create bonesmith@latest my-app -- --yes</code>. pnpm, yarn and bun do not need it.</p>
      </>
    ),
  },
]

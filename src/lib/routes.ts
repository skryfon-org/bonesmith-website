import { docs } from '../docs/pages'

export const DEFAULT_TITLE = 'Bonesmith — Scaffold a React 19 repo in one command'
export const DEFAULT_DESC = 'Bonesmith (npm create bonesmith) scaffolds a ready-to-build React 19 app or publishable component library with Storybook, plus a matching .kiro setup.'
export const ABOUT_DESC = 'About Bonesmith: a CLI that scaffolds React 19 apps and component libraries from composable template layers.'
export const FAQ_DESC = 'Answers to common questions about Bonesmith: requirements, options, package managers, libraries and Kiro.'
export const CONTRIBUTING_DESC = 'How to report bugs, add template options and send pull requests to Bonesmith.'
export const CHANGELOG_DESC = 'Release history for Bonesmith, the React 19 scaffolder.'

export type RouteMeta = { path: string; title: string; description: string }

/** Every indexable route. Used at build time by scripts/prerender.mjs. */
export const routes: RouteMeta[] = [
  { path: '/', title: DEFAULT_TITLE, description: DEFAULT_DESC },
  { path: '/about', title: 'About — Bonesmith', description: ABOUT_DESC },
  { path: '/faq', title: 'FAQ — Bonesmith', description: FAQ_DESC },
  { path: '/contributing', title: 'Contributing — Bonesmith', description: CONTRIBUTING_DESC },
  { path: '/changelog', title: 'Changelog — Bonesmith', description: CHANGELOG_DESC },
  ...docs.map((d) => ({ path: `/docs/${d.slug}`, title: `${d.title} — Bonesmith`, description: d.summary })),
]

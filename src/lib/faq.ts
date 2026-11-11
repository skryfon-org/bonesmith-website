export type FaqItem = { q: string; a: string; link?: { to: string; label: string } }
export type FaqGroup = { title: string; items: FaqItem[] }

export const faq: FaqGroup[] = [
  {
    title: 'The basics',
    items: [
      {
        q: 'What is Bonesmith?',
        a: 'Bonesmith is an open-source CLI, run with npm create bonesmith, that scaffolds a ready-to-build React 19 repo: either a client-side app or a publishable component library with Storybook. It also writes a .kiro setup that matches the stack you picked.',
        link: { to: '/docs/introduction', label: 'Read the introduction' },
      },
      {
        q: 'Is Bonesmith free?',
        a: 'Yes. Bonesmith is MIT licensed. You can use it for personal and commercial projects.',
      },
      {
        q: 'What do I need installed?',
        a: 'Node.js 24.11 or newer, and git. The package manager you choose (pnpm, npm, yarn or bun) must also be available.',
        link: { to: '/docs/quick-start', label: 'Quick start' },
      },
      {
        q: 'What does it do after generating files?',
        a: 'It runs git init, installs dependencies at exactly pinned versions, makes an initial commit, then runs build, lint and test once to check the result.',
      },
    ],
  },
  {
    title: 'Options',
    items: [
      {
        q: 'What can I choose?',
        a: 'Project type (app or library), toolchain (Vite+ or Vite), routing (React Router or TanStack Router), state (none, Redux Toolkit or Zustand), UI library (none, shadcn, MUI or Mantine), styling (Tailwind, CSS Modules or styled-components) and package manager.',
        link: { to: '/docs/options', label: 'Options reference' },
      },
      {
        q: 'Why was my combination rejected?',
        a: 'Some pairs do not work together: shadcn requires Tailwind, MUI cannot be used with Tailwind or styled-components, and Mantine cannot be used with Tailwind. The CLI exits and names the flag that fixes it.',
      },
      {
        q: 'Can I run it without prompts?',
        a: 'Yes. Pass --yes to use the defaults for every choice you did not give as a flag. Nothing is prompted, so it works in CI and scripts.',
      },
      {
        q: 'Are routing and state available for libraries?',
        a: 'No. They apply to apps only, and passing --routing or --state with --type library is an error.',
        link: { to: '/docs/library-mode', label: 'Library mode' },
      },
    ],
  },
  {
    title: 'Kiro and the project',
    items: [
      {
        q: 'What is in the .kiro folder?',
        a: 'Steering files, agents and MCP server settings generated for your exact stack. Options you did not choose add nothing.',
        link: { to: '/docs/kiro', label: 'Kiro setup' },
      },
      {
        q: 'What happens if a step fails?',
        a: 'The CLI prints the exact command to re-run and keeps the project on disk, so you can fix the problem and continue.',
        link: { to: '/docs/troubleshooting', label: 'Troubleshooting' },
      },
      {
        q: 'How can I report a bug or contribute?',
        a: 'Open an issue or pull request on GitHub. Bug reports, new template options and documentation improvements are welcome.',
        link: { to: '/contributing', label: 'Contributing' },
      },
    ],
  },
]

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.flatMap((g) =>
    g.items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  ),
}

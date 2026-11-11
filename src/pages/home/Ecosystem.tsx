import { Section } from '../../components/Section'
import { Reveal } from '../../components/Reveal'

const groups = [
  { title: 'Toolchain', items: ['Vite+', 'Vite', 'Vitest', 'ESLint', 'Oxlint', 'Prettier', 'Oxfmt'] },
  { title: 'Routing', items: ['React Router v7', 'TanStack Router'] },
  { title: 'State', items: ['Redux Toolkit', 'Zustand'] },
  { title: 'UI and styling', items: ['shadcn/ui', 'MUI', 'Mantine', 'Tailwind v4', 'CSS Modules', 'styled-components'] },
  { title: 'Library mode', items: ['Storybook', 'Playwright', 'ESM package', 'TypeScript declarations'] },
]

export function Ecosystem() {
  return (
    <Section id="stack" eyebrow="Supported stack" title="Built on tools React teams already trust.">
      <div className="grid gap-10 md:grid-cols-2">
        {groups.map((g) => (
          <Reveal key={g.title}>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted">{g.title}</h3>
            <ul className="mt-5 flex flex-wrap gap-3">
              {g.items.map((s) => (
                <li key={s} className="inline-flex items-center gap-2.5 rounded-md border border-line px-4 py-2.5 font-mono text-sm text-fg">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {s}
                  <span className="sr-only">(supported)</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

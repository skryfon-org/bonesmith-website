import { Boxes, CheckCheck, FlaskConical, GitBranch, Layers, Library, Lock, Paintbrush, Route, Sparkles, Wrench, type LucideIcon } from 'lucide-react'
import { Section } from '../../components/Section'
import { Reveal } from '../../components/Reveal'

const features: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Boxes, title: 'App or library', body: 'A client-side React app, or a publishable ESM component package with Storybook built in.' },
  { icon: Wrench, title: 'Toolchain choice', body: 'Vite+ (vp) for dev, build, test, lint and format in one tool, or plain Vite with Vitest, ESLint and Prettier.' },
  { icon: Route, title: 'Routing', body: 'React Router v7 or TanStack Router, wired in and ready for your first route.' },
  { icon: Layers, title: 'State', body: 'Redux Toolkit, Zustand or plain React state. Only what you pick is generated.' },
  { icon: Paintbrush, title: 'UI and styling', body: 'Tailwind v4, CSS Modules or styled-components, with shadcn, MUI or Mantine on top.' },
  { icon: Lock, title: 'Pinned versions', body: 'Every dependency is pinned exactly, and the reasons are documented in templates/PINS.md.' },
  { icon: CheckCheck, title: 'Verified on creation', body: 'After installing, the CLI runs build, lint and test once. If a step fails, it prints the command to re-run.' },
  { icon: FlaskConical, title: 'Tests included', body: 'Vitest with React Testing Library. Library stories run as Vitest browser tests.' },
  { icon: Sparkles, title: 'Kiro-ready', body: 'A .kiro folder with steering, agents and MCP servers that match the exact stack you picked.' },
  { icon: GitBranch, title: 'Git from the start', body: 'git init and an initial commit, so your first diff is your first change.' },
  { icon: Library, title: 'Add an option with a folder', body: 'Every option is a folder of template files. New options need no core code changes.' },
]

export function Features() {
  return (
    <Section id="features" eyebrow="Features" title="Every decision made once, and made consistently." intro="Bonesmith composes small template layers, so each combination you pick is rendered, installed and tested the same way.">
      <ul className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <li key={f.title} className="border-b border-r border-line">
            <Reveal delay={(i % 3) * 70} className="h-full p-7">
              <f.icon size={20} className="text-accent" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="mt-5 text-base font-medium text-fg">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}

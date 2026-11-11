import { Link } from '../components/SiteLink'
import { ArrowRight, Code2, Compass, Layers, Scale, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { usePageTitle } from '../lib/hooks'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { NPM, REPO, VERSION } from '../lib/site'
import { ABOUT_DESC } from '../lib/routes'

const principles: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Layers, title: 'Composable layers', body: 'Each option is a folder of template files. Layers merge into one tree, so combinations stay consistent.' },
  { icon: Compass, title: 'Sensible defaults', body: 'Vite+, React Router, Tailwind and pinned versions are the defaults. Change any of them with a flag.' },
  { icon: Sparkles, title: 'Verified output', body: 'Every supported combination is meant to install, build, lint and test green from one command.' },
  { icon: Scale, title: 'Open and permissive', body: 'Bonesmith is MIT licensed. Read it, fork it, and send improvements back.' },
]

const stats = [
  { label: 'Runtime', value: 'Node 24+' },
  { label: 'Output', value: 'React 19' },
  { label: 'License', value: 'MIT' },
  { label: 'Version', value: VERSION },
]

export default function About() {
  usePageTitle('About', ABOUT_DESC)
  return (
    <>
      <header className="mx-auto max-w-6xl px-5 pb-20 pt-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            Forge the repo. Skip the setup.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            Bonesmith is a command-line tool that scaffolds a ready-to-build React 19 app or publishable component library, with the install, verification and Kiro setup done for you.
          </p>
        </Reveal>
        <dl className="mt-12 grid grid-cols-2 border-l border-t border-line sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-r border-line p-5">
              <dt className="text-xs uppercase tracking-widest text-muted">{s.label}</dt>
              <dd className="mt-2 font-mono text-lg text-fg">{s.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <Section eyebrow="Why Bonesmith" title="Every React repo starts with the same decisions." intro="Which toolchain? How is routing wired? Where does state live? Which versions work together? Bonesmith answers these once, consistently, so you spend your time on the product instead of the plumbing.">
        <ul className="grid border-l border-t border-line sm:grid-cols-2">
          {principles.map((p, i) => (
            <li key={p.title} className="border-b border-r border-line">
              <Reveal delay={(i % 2) * 70} className="h-full p-7">
                <p.icon size={20} className="text-accent" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-5 text-base font-medium text-fg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Open source" title="Built in the open." intro="Bonesmith is developed on GitHub. Issues, ideas and pull requests are welcome." tint>
        <div className="flex flex-wrap gap-3">
          <a href={REPO} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-[#1a0f05] transition hover:opacity-90"><Code2 size={16} /> View on GitHub</a>
          <Link to="/docs/introduction" className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium text-fg transition hover:bg-surface">Read the docs <ArrowRight size={16} /></Link>
        </div>
        <p className="mt-8 text-sm text-muted">
          npm package:{' '}
          <a href={NPM} target="_blank" rel="noreferrer" className="font-mono text-accent underline-offset-4 hover:underline">create-bonesmith</a>
        </p>
      </Section>
    </>
  )
}

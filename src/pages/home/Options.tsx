import { Link } from '../../components/SiteLink'
import { CodeBlock } from '../../components/CodeBlock'
import { Section } from '../../components/Section'
import { Reveal } from '../../components/Reveal'

const axes = [
  { name: '--type', desc: 'What to build.', opts: 'app (default) · library', example: 'npm create bonesmith@latest my-lib -- --type library' },
  { name: '--toolchain', desc: 'How it is built, tested and linted.', opts: 'vite-plus (default) · vite', example: 'npm create bonesmith@latest my-app -- --toolchain vite' },
  { name: '--routing / --state', desc: 'App only. How screens and data are organised.', opts: 'react-router · tanstack-router  /  none · redux-toolkit · zustand', example: 'npm create bonesmith@latest my-app -- --routing tanstack-router --state zustand' },
  { name: '--ui / --styling', desc: 'Components and CSS. Incompatible pairs exit with the flag that fixes them.', opts: 'shadcn · mui · mantine · none  /  tailwind · css-modules · css-in-js', example: 'npm create bonesmith@latest my-app -- --ui shadcn --styling tailwind' },
  { name: '--pm', desc: 'Which package manager installs and runs the project.', opts: 'pnpm · npm · yarn · bun', example: 'pnpm create bonesmith my-app --yes' },
]

export function Options() {
  return (
    <Section id="options" eyebrow="Options" title="Six choices, all flags, all optional." intro="Anything you don't pass is prompted. Add --yes to take the defaults and never prompt, which suits CI and scripts.">
      <div className="divide-y divide-line border-y border-line">
        {axes.map((c) => (
          <Reveal key={c.name} className="grid gap-6 py-10 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h3 className="font-mono text-base text-fg">{c.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.desc}</p>
              <p className="mt-5 text-xs uppercase tracking-widest text-muted">Options</p>
              <code className="mt-1.5 block break-words font-mono text-sm text-accent">{c.opts}</code>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-muted">Example</p>
              <CodeBlock code={c.example} />
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        See every flag and default in the <Link to="/docs/options" className="text-accent underline-offset-4 hover:underline">options reference</Link>.
      </p>
    </Section>
  )
}

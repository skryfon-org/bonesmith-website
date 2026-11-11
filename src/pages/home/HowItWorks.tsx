import { ArrowDown } from 'lucide-react'
import { CodeBlock } from '../../components/CodeBlock'
import { Section } from '../../components/Section'
import { Reveal } from '../../components/Reveal'
import { INSTALL_CMD } from '../../lib/site'

const steps = [
  { n: '01', title: 'Run the CLI', code: INSTALL_CMD },
  { n: '02', title: 'Answer the prompts', code: '? Project type › app\n? Toolchain › vite-plus\n? Routing › react-router\n? UI library › shadcn' },
  { n: '03', title: 'Start building', code: 'cd my-app\nnpm run dev' },
]

const pipeline = [
  { name: 'Resolve', body: 'Flags and answers are validated. Unsupported combinations exit with the flag that fixes them.' },
  { name: 'Render', body: 'Template layers for each axis are merged in memory into one file tree.' },
  { name: 'Install', body: 'The project is written, git is initialised, and dependencies install at exact versions.' },
  { name: 'Verify', body: 'build, lint and test run once. A failure prints the command to re-run and keeps the project.' },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works" eyebrow="How it works" title="Three steps from empty directory to running app." tint>
      <ol className="grid gap-6 lg:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.n}>
            <Reveal delay={i * 90}>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-accent">{s.n}</span>
                <h3 className="text-lg font-medium text-fg">{s.title}</h3>
              </div>
              <div className="mt-4"><CodeBlock code={s.code} lang={s.n === '02' ? 'text' : 'bash'} /></div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-24">
        <h3 className="text-xl font-semibold tracking-tight text-fg">What happens under the hood</h3>
        <p className="mt-2 max-w-2xl text-sm text-muted">Each option is a folder of template files. The core never changes when a new option is added.</p>
        <ol className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
          {pipeline.map((l, i) => (
            <li key={l.name} className="border-t border-line pt-4">
              <p className="flex items-center gap-2 font-mono text-sm text-fg">
                <span className="text-accent">{i + 1}</span> {l.name}
                {i < pipeline.length - 1 && <ArrowDown size={14} className="text-muted lg:hidden" aria-hidden="true" />}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{l.body}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  )
}

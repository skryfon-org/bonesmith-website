import { Link } from './SiteLink'
import { Logo } from './Logo'
import { NPM, REPO, VERSION } from '../lib/site'

export function Footer() {
  const a = 'text-sm text-muted transition hover:text-fg'
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            A CLI that scaffolds a ready-to-build React 19 app or component library, with a matching .kiro setup.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-medium uppercase tracking-widest text-fg">Resources</h2>
          <ul className="mt-4 space-y-2.5">
            <li><Link className={a} to="/docs/introduction">Documentation</Link></li>
            <li><Link className={a} to="/faq">FAQ</Link></li>
            <li><Link className={a} to="/about">About</Link></li>
            <li><Link className={a} to="/changelog">Changelog</Link></li>
            <li><Link className={a} to="/contributing">Contributing</Link></li>
            <li><a className={a} href={REPO} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a className={a} href={NPM} target="_blank" rel="noreferrer">npm package</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-medium uppercase tracking-widest text-fg">Project</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li><a className={a} href={`${REPO}/blob/main/LICENSE`} target="_blank" rel="noreferrer">MIT License</a></li>
            <li>Version <span className="font-mono">{VERSION}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-muted">Forged for developers who would rather build than configure.</p>
      </div>
    </footer>
  )
}

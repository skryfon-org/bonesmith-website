import { Link } from '../components/SiteLink'
import { Article } from '../components/Article'
import { H2 } from '../docs/Prose'
import { usePageTitle } from '../lib/hooks'
import { REPO } from '../lib/site'
import { CONTRIBUTING_DESC } from '../lib/routes'

export default function Contributing() {
  usePageTitle('Contributing', CONTRIBUTING_DESC)
  return (
    <Article eyebrow="Open source" title="Contributing" summary="How to report a bug, add a template option, or send a pull request.">
      <p>Bonesmith is MIT licensed and developed in the open. Bug reports, fixes, new template options and documentation improvements are all welcome.</p>

      <H2>Where to start</H2>
      <p>Everything happens in the <a href={REPO} target="_blank" rel="noreferrer">Bonesmith repository</a> on GitHub. Open issues and pull requests there.</p>

      <H2>Reporting a bug</H2>
      <p>Open an issue and include:</p>
      <ul>
        <li>The exact command you ran, with flags, and its output.</li>
        <li>Your Bonesmith version (<code>--version</code>), Node.js version and operating system.</li>
        <li>Which package manager you used.</li>
        <li>What you expected to happen instead.</li>
      </ul>
      <p>Check <Link to="/docs/troubleshooting">Troubleshooting</Link> and existing issues first.</p>

      <H2>Adding or changing an option</H2>
      <p>Every option is a folder under <code>templates/&lt;axis&gt;/&lt;option&gt;/</code> with a <code>layer.json</code>, files and Kiro content, so adding one does not touch the core code. See <Link to="/docs/development">Development</Link> for the commands that check your change.</p>

      <H2>Sending a pull request</H2>
      <ul>
        <li>Fork the repository and create a branch from <code>main</code>.</li>
        <li>Keep the change focused: one concern per pull request.</li>
        <li>Run <code>npm test</code>, <code>npm run lint</code> and <code>npm run typecheck</code>.</li>
        <li>Describe what changed and why.</li>
      </ul>
      <p>By contributing, you agree that your work is released under the project's <a href={`${REPO}/blob/main/LICENSE`} target="_blank" rel="noreferrer">MIT License</a>.</p>
    </Article>
  )
}

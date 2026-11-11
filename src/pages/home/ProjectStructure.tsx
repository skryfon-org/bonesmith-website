import { useMemo, useState } from 'react'
import { ChevronRight, File, Folder, FolderOpen } from 'lucide-react'
import { Section } from '../../components/Section'

type Node = { name: string; desc: string; children?: Node[] }

const tree: Node = {
  name: 'my-app', desc: 'Your project root, written by npm create bonesmith. Shown here for the default app: vite-plus, react-router, tailwind.',
  children: [
    { name: 'src', desc: 'Application code.', children: [
      { name: 'routes', desc: 'Route definitions for the router you picked (React Router v7 or TanStack Router). Apps only.' },
      { name: 'components', desc: 'Shared components, written for your styling and UI choices.' },
      { name: 'store', desc: 'Redux Toolkit slices or Zustand stores when you pick a state option. Absent for none.' },
      { name: 'main.tsx', desc: 'The entry point: mounts React and wires the router, store and providers you chose.' },
    ] },
    {
      name: '.kiro', desc: 'Kiro setup that matches your stack. Options you did not choose add nothing.',
      children: [
        { name: 'steering', desc: 'product.md, tech.md, structure.md and testing.md, plus one file per chosen option such as routing.md or ui.md.' },
        { name: 'agents', desc: 'A reviewer and a feature-builder, plus an expert for each chosen option.' },
        { name: 'settings', desc: 'mcp.json: MCP servers for the chosen layers, each pinned to a version.' },
      ],
    },
    { name: 'index.html', desc: 'The Vite HTML entry.' },
    { name: 'package.json', desc: 'Scripts and dependencies. Every version is pinned exactly, with no ranges.' },
    { name: 'tsconfig.json', desc: 'TypeScript in strict mode.' },
    { name: 'vite.config.ts', desc: 'Vite and Vitest configuration for the toolchain you chose.' },
    { name: '.gitignore', desc: 'Ignore rules. The CLI also runs git init and makes the first commit.' },
  ],
}

function Row({ node, path, depth, open, toggle, selected, select }: { node: Node; path: string; depth: number; open: Set<string>; toggle: (p: string) => void; selected: string; select: (p: string) => void }) {
  const isDir = !!node.children
  const isOpen = open.has(path)
  return (
    <li role="none">
      <button
        type="button"
        role="treeitem"
        aria-expanded={isDir ? isOpen : undefined}
        aria-selected={selected === path}
        onClick={() => { select(path); if (isDir) toggle(path) }}
        className={`flex w-full items-center gap-2 rounded px-2 py-1.5 text-left font-mono text-sm transition hover:bg-white/5 ${selected === path ? 'bg-white/5 text-[#fb923c]' : 'text-[#eee6de]'}`}
        style={{ paddingLeft: `${depth * 18 + 8}px` }}
      >
        {isDir ? <ChevronRight size={14} className={`shrink-0 transition ${isOpen ? 'rotate-90' : ''}`} aria-hidden="true" /> : <span className="w-3.5 shrink-0" />}
        {isDir ? (isOpen ? <FolderOpen size={15} className="shrink-0 text-[#f59e0b]" /> : <Folder size={15} className="shrink-0 text-[#f59e0b]" />) : <File size={15} className="shrink-0 text-[#8a7f75]" />}
        <span>{node.name}{isDir ? '/' : ''}</span>
      </button>
      {isDir && isOpen && (
        <ul role="group">
          {node.children!.map((c) => (
            <Row key={c.name} node={c} path={`${path}/${c.name}`} depth={depth + 1} open={open} toggle={toggle} selected={selected} select={select} />
          ))}
        </ul>
      )}
    </li>
  )
}

export function ProjectStructure() {
  const root = tree.name
  const [open, setOpen] = useState<Set<string>>(new Set([root, `${root}/internal`]))
  const [selected, setSelected] = useState(`${root}/internal`)
  const toggle = (p: string) => setOpen((s) => { const n = new Set(s); n.has(p) ? n.delete(p) : n.add(p); return n })

  const lookup = useMemo(() => {
    const m = new Map<string, Node>()
    const walk = (n: Node, p: string) => { m.set(p, n); n.children?.forEach((c) => walk(c, `${p}/${c.name}`)) }
    walk(tree, root)
    return m
  }, [root])
  const node = lookup.get(selected) ?? tree

  return (
    <Section id="structure" eyebrow="Project structure" title="A layout you can navigate on day one." intro="Click through the generated project. Folders expand, and every entry explains its role." tint>
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="code-surface rounded-lg p-3">
          <ul role="tree" aria-label="Generated project structure">
            <Row node={tree} path={root} depth={0} open={open} toggle={toggle} selected={selected} select={setSelected} />
          </ul>
        </div>
        <div className="lg:pt-3" aria-live="polite">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Selected</p>
          <p className="mt-2 font-mono text-xl text-fg">{node.name}{node.children ? '/' : ''}</p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{node.desc}</p>
        </div>
      </div>
    </Section>
  )
}

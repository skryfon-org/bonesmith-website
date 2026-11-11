import { useEffect, useRef, useState, useCallback } from 'react'
import { SITE_URL } from './site'

export function useCopy(text: string) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  useEffect(() => () => window.clearTimeout(timer.current), [])
  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 1800)
  }, [text])
  return { copied, copy }
}

export function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    typeof document !== 'undefined' && document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )
  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark'
      document.documentElement.dataset.theme = next
      try { localStorage.setItem('bonesmith-theme', next) } catch { /* ignore */ }
      return next
    })
  }, [])
  return { theme, toggle }
}

export function usePageTitle(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Bonesmith` : 'Bonesmith — Scaffold a React 19 repo in one command'
    const path = window.location.pathname.replace(import.meta.env.BASE_URL.replace(/\/$/, ''), '') || '/'
    const url = `${SITE_URL}${path === '/' ? '/' : path.replace(/\/$/, '') + '/'}`
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = url
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', url)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', document.title)
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description)
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    }
  }, [title, description])
}

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

'use client'

import { useEffect, useState } from 'react'
import { mdxImports } from './mdx-map'

type Section = {
  id: string
  title: string
}

const sections: Section[] = [
  { id: 'intro', title: 'Introduction' },
  { id: 'getting-started', title: 'Getting Started' },
  { id: 'faq', title: 'FAQ' },
]

type DocMeta = {
  id: string
  title: string
  group?: string
  order?: number
}

export default function Docs() {
  const [activeId, setActiveId] = useState<string>(sections[0].id)
  const activeSection = sections.find((s) => s.id === activeId) ?? sections[0]
  const [MdxComponent, setMdxComponent] = useState<React.ComponentType | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [docs, setDocs] = useState<DocMeta[] | null>(null)
  const [sidebarOpenGroups, setSidebarOpenGroups] = useState<Record<string, boolean>>({})

  useEffect(() => {
    let alive = true
    async function loadIndex() {
      try {
        const entries: DocMeta[] = []
        for (const [id, loader] of Object.entries(mdxImports)) {
          try {
            const mod = await loader()
            const meta = (mod.metadata || {}) as Partial<DocMeta>
            entries.push({ id, title: meta.title || id, group: meta.group, order: meta.order })
          } catch {
            entries.push({ id, title: id })
          }
        }
        if (!alive) return
        entries.sort((a, b) => {
          const ga = a.group || ''
          const gb = b.group || ''
          if (ga !== gb) return ga.localeCompare(gb)
          const oa = a.order ?? 0
          const ob = b.order ?? 0
          if (oa !== ob) return oa - ob
          return a.title.localeCompare(b.title)
        })
        setDocs(entries)
        const hash = typeof window !== 'undefined' ? window.location.hash.replace(/^#/, '') : ''
        if (hash && entries.some((d) => d.id === hash)) {
          setActiveId(hash)
          return
        }
        if (!entries.some((d) => d.id === activeId) && entries.length > 0) {
          setActiveId(entries[0].id)
        }
      } catch {
      }
    }
    loadIndex()
    return () => { alive = false }
  }, [activeId])

  useEffect(() => {
    function applyHash() {
      const hash = typeof window !== 'undefined' ? window.location.hash.replace(/^#/, '') : ''
      const ids = new Set<string>([
        ...sections.map((s) => s.id),
        ...(docs?.map((d) => d.id) || []),
      ])
      if (hash && ids.has(hash)) {
        setActiveId(hash)
      }
    }
    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [docs])

  useEffect(() => {
    let alive = true
    async function loadMdx() {
      setIsLoading(true)
      setError(null)
      try {
        const loader = mdxImports[activeId]
        if (!loader) throw new Error('Doc not found')
        const mod = await loader()
        if (!alive) return
        setMdxComponent(() => mod.default || null)
      } catch (e) {
        if (!alive) return
        setError('Could not load content.')
        console.log(e);
      } finally {
        if (alive) setIsLoading(false)
      }
    }
    loadMdx()
    return () => {
      alive = false
    }
  }, [activeId])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const currentHash = window.location.hash.replace(/^#/, '')
    if (currentHash !== activeId) {
      const url = new URL(window.location.href)
      url.hash = `#${activeId}`
      window.history.replaceState(null, '', url.toString())
    }
  }, [activeId])

  return (
    <section style={{ padding: '0', paddingTop: "3.5rem" }}>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '1rem', alignItems: 'start' }}>
        <aside style={{
          padding: '1rem',
          background: '#303030',
          position: 'sticky',
          top: '3.5rem',
          height: 'calc(100vh - 3.5rem)',
          overflow: 'auto',
        }}>
          {(() => {
            const items: DocMeta[] = docs && docs.length > 0 ? docs : sections
              .map((s) => ({ id: s.id, title: s.title }))
            const groups = new Map<string, DocMeta[]>()
            for (const item of items as DocMeta[]) {
              const group = item.group || 'Docs'
              if (!groups.has(group)) groups.set(group, [])
              groups.get(group)!.push(item)
            }
            return Array.from(groups.entries()).map(([group, entries]) => (
              <div key={group} style={{ marginBottom: '0.5rem' }}>
                <button
                  onClick={() => setSidebarOpenGroups((s) => ({ ...s, [group]: !s[group] }))}
                  aria-expanded={sidebarOpenGroups[group] ?? true}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: '#222',
                    borderRadius: '0.5rem',
                    marginBottom: '0.5rem',
                    padding: '0.5rem 0.75rem',
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}
                >
                  {group}
                </button>
                {(sidebarOpenGroups[group] ?? true) && (
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {entries.map((entry) => (
                      <li key={entry.id}>
                        <a
                          href={`#${entry.id}`}
                          onClick={(e) => {
                            e.preventDefault()
                            setActiveId(entry.id)
                          }}
                          aria-current={activeId === entry.id ? 'true' : undefined}
                          style={{
                            display: 'block',
                            padding: '0.375rem 1rem',
                            borderRadius: '8px',
                            marginTop: '0.375rem',
                            textDecoration: 'none',
                            color: activeId === entry.id ? '#ffffff' : '#e5e7eb',
                            background: activeId === entry.id ? '#1f2937' : 'transparent',
                            border: activeId === entry.id ? '1px solid #374151' : '1px solid transparent',
                            transition: 'background 120ms ease, border-color 120ms ease',
                          }}
                        >
                          {entry.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          })()}
        </aside>

        <article
          role="region"
          aria-labelledby={`section-${activeSection.id}`}
          style={{
            borderRadius: '12px',
            padding: '1rem',
            background: '#333'
          }}
        >
          <h2 id={`section-${activeSection.id}`} style={{ marginTop: 0 }}>
            
          </h2>
          <div className="prose prose-invert max-w-none">
            {isLoading ? (
              <p>Loading…</p>
            ) : error ? (
              <p style={{ color: '#dc2626' }}>{error}</p>
            ) : MdxComponent ? (
              <MdxComponent />
            ) : null}
          </div>
        </article>
      </div>
    </section>
  )
}



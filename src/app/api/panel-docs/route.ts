import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs/promises'
import matter from 'gray-matter'

type DocMeta = {
  id: string
  title: string
  group?: string
  order?: number
}

export async function GET() {
  try {
    const dir = path.join(process.cwd(), 'src', 'content', 'panel')
    const entries = await fs.readdir(dir, { withFileTypes: true })

    const docs: DocMeta[] = []
    for (const entry of entries) {
      if (!entry.isFile() || !entry.name.endsWith('.md')) continue
      const id = entry.name.replace(/\.md$/, '')
      const file = await fs.readFile(path.join(dir, entry.name), 'utf-8')
      const { data } = matter(file)
      docs.push({
        id,
        title: (data?.title as string) || id,
        group: (data?.group as string) || undefined,
        order: typeof data?.order === 'number' ? (data.order as number) : undefined,
      })
    }

    docs.sort((a, b) => {
      const ga = a.group || ''
      const gb = b.group || ''
      if (ga !== gb) return ga.localeCompare(gb)
      const oa = a.order ?? 0
      const ob = b.order ?? 0
      if (oa !== ob) return oa - ob
      return a.title.localeCompare(b.title)
    })

    return NextResponse.json({ docs })
  } catch (e) {
    return NextResponse.json({ docs: [] }), console.log(e)
  }
}



import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs/promises'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'

export async function GET(_request: NextRequest, _context: { params: Promise<{ id: string; }>; }) {
  try {
    const context = await _context.params
    const safeId = context.id.replace(/[^a-z0-9\-]/gi, '').toLowerCase()

    const filePath = path.join(process.cwd(), 'src', 'content', 'panel', `${safeId}.md`)
    const file = await fs.readFile(filePath, 'utf-8')

    const { content, data } = matter(file)

    const processed = await remark()
      .use(gfm)
      .use(html, { sanitize: false })
      .process(content)
    const contentHtml = String(processed)

    return NextResponse.json({
      id: safeId,
      frontmatter: data ?? {},
      html: contentHtml,
    })
  } catch (error: unknown) {
    return NextResponse.json(
      { error: 'Section not found' },
      { status: 404 }
    ), console.log(error);
  }
}



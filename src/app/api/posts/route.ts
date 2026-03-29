import { getSortedPosts } from '@/lib/posts'
import { NextResponse } from 'next/server'

export async function GET() {
  const posts = getSortedPosts()
  return NextResponse.json(posts)
}

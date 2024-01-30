import { NextResponse } from 'next/server'

const db = require('@/app/lib/db')

export async function GET() {
    try {
      const result = await db.query('SELECT * FROM files WHERE parent_folder IS NULL;')
      const res = await result[0]
      return NextResponse.json({ res }, { status: 200 })
    } catch (err) {
      return NextResponse.json({ error: err }, { status: 500 })
    }
}
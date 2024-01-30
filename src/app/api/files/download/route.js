import { NextResponse } from 'next/server';
import { readFile } from 'node:fs/promises';

const fs = require('node:fs')

export async function POST(req) {
  try {
    const body = await req.json();
    const { path, name, type } = body
    const fileName = name + '.' + type
    
    const buffer = await readFile(`${process.env.FILE_MANAGER}${path}${fileName}`)

    return NextResponse.json({ buffer: buffer }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
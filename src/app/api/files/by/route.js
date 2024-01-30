import { NextResponse } from 'next/server'

const db = require('@/app/lib/db')

export async function GET(req) {
  try {
    const url = new URL(req.url)
    const searchParams = new URLSearchParams(url.search)
    const paramParentFolder = searchParams.get("parentFolder")
    const paramFileId = searchParams.get("fileId")

    var result
    var res
    if(paramParentFolder !== null) {
      result =  await db.query(`SELECT * FROM files WHERE parent_folder = ${paramParentFolder};`)
      res = await result[0]
    }
    else if(paramFileId !== null) {
      result =  await db.query(`SELECT * FROM files WHERE file_id = ${paramFileId};`)
      res = await result[0]
    }
    else {
      res = [{ error:"Null Parameters" }]
    }
    return NextResponse.json({ res }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
import { NextResponse } from 'next/server'

const db = require('@/app/lib/db')

export async function GET() {
    try {
      const result = await db.query('SELECT * FROM folders WHERE parent_folder IS NULL;')
      const res = await result[0]
      return NextResponse.json({ res }, { status: 200 })
    } catch (err) {
      return NextResponse.json({ error: err }, { status: 500 })
    }
}

export async function POST(req) {
  try {
    const { folderName, folderBranch, parentFolder } = req.body
    
    var result
    if(parentFolder != 0) {
      result = await db.query('INSERT folders (folder_name,folder_branch,parent_folder) VALUES (?,?,?);',[folderName, folderBranch, parentFolder])
    } else {
      result = await db.query('INSERT folders (folder_name,folder_branch) VALUES (?,?);',[folderName, folderBranch])
    }
    
    const res = await result[0]
    return NextResponse.json({ res }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
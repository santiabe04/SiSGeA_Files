"use client"

import React from "react"
import {
  BsFileEarmark,
  BsFiletypeDoc,
  BsFiletypeDocx,
  BsFiletypeJpg,
  BsFiletypeMp3,
  BsFiletypeMp4,
  BsFiletypePdf,
  BsFiletypePng,
  BsFiletypePpt,
  BsFiletypePptx,
  BsFiletypeTxt,
  BsFiletypeXls,
  BsFiletypeXlsx
} from "react-icons/bs"
import { downloadFile } from "../lib/getters"

const types = {
  doc:BsFiletypeDoc,
  docx:BsFiletypeDocx,
  jpg:BsFiletypeJpg,
  mp3:BsFiletypeMp3,
  mp4:BsFiletypeMp4,
  pdf:BsFiletypePdf,
  png:BsFiletypePng,
  ppt:BsFiletypePpt,
  pptx:BsFiletypePptx,
  txt:BsFiletypeTxt,
  xls:BsFiletypeXls,
  xlsx:BsFiletypeXlsx
}

const branches = {
  0:"bg-purple-700",
  1:"bg-yellow-500",
  2:"bg-green-700",
  3:"bg-blue-700",
  4:"bg-red-700"
}

function FileCard({ file }) {
  const matchingIcon = types[file.file_type] || BsFileEarmark
  const branchesColor = branches[file.file_branch]

  const downloadFileHandler = async (path,name,type) => {
    const response = await downloadFile(path,name,type)

    console.log(response)

    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${name}.${type}`
    link.click()
  }

  return (
    <div className="p-4 border border-gray-300 mb-4 rounded-md hover:bg-gray-300 hover:bg-opacity-10 hover:cursor-pointer relative">
      {React.createElement(matchingIcon, { className: 'w-6 h-6 text-gray-300' })}
      <p className="font-bold">{file.file_name}</p>
      <p>ID: {file.file_id}</p>
      {types[file.file_type] == null && (
        <p>Tipo de Archivo: {file.file_type}</p>
      )}
      <div className="w-32 m-2 bg-blue-900 hover:bg-blue-500 flex items-center justify-center">
        <button type="button" onClick={() => downloadFileHandler(file.file_content, file.file_name, file.file_type)}>Descargar</button>
      </div>
      <div className={`absolute bottom-0 border border-gray-300 rounded-b-md left-0 w-full h-5 ${branchesColor}`}></div>
    </div>
  )
}

export default FileCard
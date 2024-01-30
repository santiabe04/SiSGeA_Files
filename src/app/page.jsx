import FolderView from "@/app/ui/FolderView"
import { getFiles, getFolders } from "./lib/getters"

export default async function Landing() {
  const files = await getFiles()

  const folders = await getFolders()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold">Inicio</h1>
      <br />
      <FolderView
        folders={folders}
        files={files}
      />
    </div>
  )
}
import FolderView from "@/app/ui/FolderView"
import { getFilesByParentFolder, getFoldersById, getFoldersByParentFolder } from "../lib/getters"

export default async function FolderPage ({ params }) {

    const files = await getFilesByParentFolder(params.folder)

    const folders = await getFoldersByParentFolder(params.folder)

    const currentFolder = await getFoldersById(params.folder)

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold">{currentFolder.folder_name}</h1>
            <br />
            <FolderView
                folders={folders}
                files={files}
            />
        </div>
    )
}
import FileCard from "@/app/ui/FileCard"
import FolderCard from "@/app/ui/FolderCard"

function FolderView({ folders, files }) {
  return (
    <>
      {folders && folders.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {
            folders.map((folder) => (
              <FolderCard key={folder.folder_id + folder.folder_name} folder={folder}/>
            ))
          }
        </div>
      )}
      {(folders && folders.length > 0) && (files && files.length > 0) && (
        <>
          <hr></hr>
          <br></br>
        </>
      )}
      {files && files.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {
            files.map((file) => (
              <FileCard key={file.file_id + file.file_name} file={file}/>
            ))
          }
        </div>
      )}
      {!(folders && folders.length > 0) && !(files && files.length > 0) && (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-xl font-bold mb-4">Esta carpeta está vacía</h1>
          </div>
        </div>
      )}
    </>
  )
}

export default FolderView
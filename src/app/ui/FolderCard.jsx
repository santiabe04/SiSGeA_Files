import Link from "next/link"
import { BsFolder } from "react-icons/bs"

const branches = {
  0:"bg-purple-700",
  1:"bg-yellow-500",
  2:"bg-green-700",
  3:"bg-blue-700",
  4:"bg-red-700"
}

function FolderCard({ folder }) {
  const branchesColor = branches[folder.folder_branch]

  return (
    <Link legacyBehavior href={`/[folder]`} as={`/${folder.folder_id}`}>
      <div className="p-4 border border-blue-500 mb-4 rounded-md hover:bg-blue-500 hover:bg-opacity-10 hover:cursor-pointer relative">
        <BsFolder className="w-6 h-6 text-blue-500" />
        <p className="font-bold">{folder.folder_name}</p>
        <p>ID: {folder.folder_id}</p>
        <br />
        <div className={`absolute bottom-0 border border-blue-500 rounded-b-md left-0 w-full h-5 ${branchesColor}`}></div>
      </div>
    </Link>
  )
}

export default FolderCard
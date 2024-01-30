export const getFiles = async () => {
    const filesOri = await fetch('http://localhost:3000/api/files')
    const files = await filesOri.json()
    return files.res
}

export const getFolders = async () => {
    const foldersOri = await fetch('http://localhost:3000/api/folders')
    const folders = await foldersOri.json()
    return folders.res
}

export const getFoldersByParentFolder = async (parentFolder) => {
    const foldersOri = await fetch(`http://localhost:3000/api/folders/by?parentFolder=${parentFolder}`)
    const folders = await foldersOri.json()
    return folders.res
}

export const getFilesByParentFolder = async (parentFolder) => {
    const filesOri = await fetch(`http://localhost:3000/api/files/by?parentFolder=${parentFolder}`)
    const files = await filesOri.json()
    return files.res
}

export const getFoldersById = async (folderId) => {
    const foldersOri = await fetch(`http://localhost:3000/api/folders/by?folderId=${folderId}`)
    const folders = await foldersOri.json()
    return folders.res[0]
}

export const downloadFile = async (filePath,fileName,fileType) => {
    const fileOri = await fetch('http://localhost:3000/api/files/download', {
        method: 'POST',
        body: JSON.stringify({ path:filePath, name:fileName, type:fileType }),
        headers: {
            'Content-Type':'application/json',
        }
    })
    const file = await fileOri.json()
    return file
}
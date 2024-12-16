'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from "@/components/ui/button"
import { UploadCloud, Trash2, FileIcon } from 'lucide-react'
import Image from 'next/image'
import myCloudIcon from "../../../public/Icon_upload.svg"


export default function FileUploadComponent() {
  const [files, setFiles] = useState<File[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prevFiles => [...prevFiles, ...acceptedFiles])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const removeFile = (fileToRemove: File) => {
    setFiles(files.filter(file => file !== fileToRemove))
  }

  return (
    <>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300 hover:border-primary'
        }`}
      >
        <input {...getInputProps()} />
        <Image src={myCloudIcon} alt="icone de nuage" className="mx-auto h-12 w-12 text-gray-300" />
        <p className="mt-2 text-sm text-gray-400">
          {isDragActive
            ? "Déposez le(s) fichier(s) ici"
            : "Faites glisser et déposez des fichiers ici, ou cliquez pour sélectionner des fichiers."}
        </p>
      </div>

      {files.length > 0 && (
        <div className="mt-6">
          <h3 className="label-form  mb-2">Document(s):</h3>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded max-w-md">
                <div className="flex items-center space-x-2">
                  <FileIcon className="h-4 w-4 text-gray-500" />
                  <span className="truncate max-w-[200px] text-gray-500">{file.name}</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFile(file)}
                  className="h-8 w-8"
                >
                  <Trash2 className="h-4 w-4 text-gray-500" />
                  <span className="sr-only">Remove file</span>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}


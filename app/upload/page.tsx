"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Upload, File, CheckCircle, AlertCircle, X, ArrowLeft, Cloud, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

interface UploadFile {
  id: string
  name: string
  size: number
  progress: number
  status: "uploading" | "completed" | "error"
}

const UploadZone = ({ onFileSelect }: { onFileSelect: (files: FileList) => void }) => {
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragOver(false)
      const files = e.dataTransfer.files
      if (files.length > 0) {
        onFileSelect(files)
      }
    },
    [onFileSelect],
  )

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files && files.length > 0) {
        onFileSelect(files)
      }
    },
    [onFileSelect],
  )

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
        isDragOver ? "border-orange-500 bg-orange-500/10 glow-orange" : "border-gray-600 hover:border-orange-500/50"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        multiple
        onChange={handleFileInput}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />

      <motion.div animate={{ y: isDragOver ? -10 : 0 }} transition={{ duration: 0.2 }}>
        <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Upload className="w-8 h-8 text-orange-500" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{isDragOver ? "Drop files here" : "Upload your files"}</h3>
        <p className="text-gray-400 mb-4">Drag and drop files here, or click to select files</p>
        <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">Select Files</Button>
      </motion.div>
    </motion.div>
  )
}

const FileItem = ({ file, onRemove }: { file: UploadFile; onRemove: (id: string) => void }) => {
  const getStatusIcon = () => {
    switch (file.status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "error":
        return <AlertCircle className="w-5 h-5 text-red-500" />
      default:
        return <File className="w-5 h-5 text-orange-500" />
    }
  }

  const getStatusColor = () => {
    switch (file.status) {
      case "completed":
        return "border-green-500/50"
      case "error":
        return "border-red-500/50"
      default:
        return "border-orange-500/50"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`glass-panel p-4 rounded-lg border ${getStatusColor()} transition-all duration-300`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          {getStatusIcon()}
          <div>
            <p className="font-medium truncate max-w-48">{file.name}</p>
            <p className="text-sm text-gray-400">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRemove(file.id)}
          className="text-gray-400 hover:text-red-500"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {file.status === "uploading" && (
        <div className="space-y-2">
          <Progress value={file.progress} className="h-2" />
          <p className="text-sm text-gray-400">{file.progress}% uploaded</p>
        </div>
      )}

      {file.status === "completed" && <p className="text-sm text-green-500">Upload completed successfully</p>}

      {file.status === "error" && <p className="text-sm text-red-500">Upload failed. Please try again.</p>}
    </motion.div>
  )
}

export default function UploadPage() {
  const [files, setFiles] = useState<UploadFile[]>([])

  const handleFileSelect = useCallback((fileList: FileList) => {
    const newFiles: UploadFile[] = Array.from(fileList).map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      progress: 0,
      status: "uploading" as const,
    }))

    setFiles((prev) => [...prev, ...newFiles])

    // Simulate upload progress
    newFiles.forEach((file) => {
      const interval = setInterval(() => {
        setFiles((prev) =>
          prev.map((f) => {
            if (f.id === file.id) {
              const newProgress = Math.min(f.progress + Math.random() * 20, 100)
              const newStatus = newProgress === 100 ? (Math.random() > 0.1 ? "completed" : "error") : "uploading"

              if (newProgress === 100) {
                clearInterval(interval)
              }

              return { ...f, progress: newProgress, status: newStatus }
            }
            return f
          }),
        )
      }, 500)
    })
  }, [])

  const handleRemoveFile = useCallback((id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id))
  }, [])

  const completedFiles = files.filter((f) => f.status === "completed").length
  const totalFiles = files.length

  return (
    <div className="min-h-screen animated-bg p-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link
            href="/dashboard"
            className="inline-flex items-center text-orange-500 hover:text-orange-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-glow">
              File <span className="text-orange-500">Upload</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Upload your files to the cloud with lightning-fast processing and military-grade security
            </p>
          </div>

          {/* Upload Stats */}
          {totalFiles > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-3 gap-6 mb-8"
            >
              <Card className="glass-panel p-6 text-center border-glow">
                <Cloud className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-2xl font-bold">{totalFiles}</p>
                <p className="text-gray-400">Total Files</p>
              </Card>
              <Card className="glass-panel p-6 text-center border-glow">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-2xl font-bold">{completedFiles}</p>
                <p className="text-gray-400">Completed</p>
              </Card>
              <Card className="glass-panel p-6 text-center border-glow">
                <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-2xl font-bold">
                  {totalFiles > 0 ? Math.round((completedFiles / totalFiles) * 100) : 0}%
                </p>
                <p className="text-gray-400">Success Rate</p>
              </Card>
            </motion.div>
          )}

          {/* Upload Zone */}
          <Card className="glass-panel p-8 mb-8 border-glow">
            <UploadZone onFileSelect={handleFileSelect} />
          </Card>

          {/* File List */}
          <AnimatePresence>
            {files.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <Card className="glass-panel p-6 border-glow">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <File className="w-5 h-5 mr-2 text-orange-500" />
                    Upload Queue ({files.length})
                  </h3>
                  <div className="space-y-4">
                    <AnimatePresence>
                      {files.map((file) => (
                        <FileItem key={file.id} file={file} onRemove={handleRemoveFile} />
                      ))}
                    </AnimatePresence>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

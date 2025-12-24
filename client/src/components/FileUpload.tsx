import { useState, useRef } from "react";
import { Upload, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface FileUploadProps {
  onUpload?: (url: string, fileName: string) => void;
  accept?: string;
  maxSize?: number; // in MB
  label?: string;
}

export function FileUpload({
  onUpload,
  accept = "image/*",
  maxSize = 5,
  label = "Upload File",
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    url: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const validateFile = (file: File): string | null => {
    if (file.size > maxSize * 1024 * 1024) {
      return `File size must be less than ${maxSize}MB`;
    }
    return null;
  };

  const uploadFile = async (file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append("file", file);

      // In a real implementation, you would upload to your S3 endpoint
      // For now, we'll create a local URL (this won't persist)
      const url = URL.createObjectURL(file);
      
      setUploadedFile({
        name: file.name,
        url,
      });

      onUpload?.(url, file.name);
    } catch (err) {
      setError("Failed to upload file");
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      uploadFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      uploadFile(files[0]);
    }
  };

  return (
    <Card className="bg-slate-800/50 border-gold/20 p-6">
      <h3 className="text-lg font-bold text-white mb-4">{label}</h3>

      {uploadedFile ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-slate-900/50 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-white font-medium">{uploadedFile.name}</p>
                <p className="text-xs text-gray-400">Upload successful</p>
              </div>
            </div>
            <button
              onClick={() => {
                setUploadedFile(null);
                if (fileInputRef.current) {
                  fileInputRef.current.value = "";
                }
              }}
              className="p-1 hover:bg-slate-800 rounded transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <Button
            onClick={() => {
              setUploadedFile(null);
              fileInputRef.current?.click();
            }}
            variant="outline"
            className="w-full"
          >
            Upload Another File
          </Button>
        </div>
      ) : (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragging
              ? "border-gold bg-gold/10"
              : "border-gold/30 hover:border-gold/50"
          }`}
        >
          <Upload className="w-12 h-12 text-gold mx-auto mb-3" />
          <p className="text-white font-medium mb-1">Drag and drop your file here</p>
          <p className="text-sm text-gray-400 mb-4">or click to select</p>
          <p className="text-xs text-gray-500">
            Maximum file size: {maxSize}MB
          </p>

          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            onChange={handleFileSelect}
            className="hidden"
          />

          <Button
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="mt-4"
          >
            {isUploading ? "Uploading..." : "Select File"}
          </Button>
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-900/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}
    </Card>
  );
}

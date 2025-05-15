import React, { useRef, useState } from "react";
import "./AvatarUpload.css";

export interface AvatarUploadProps {
  value?: string; // base64 or object URL
  onChange: (fileUrl: string | null) => void;
}

export const AvatarUpload: React.FC<AvatarUploadProps> = ({ value, onChange }) => {
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.match(/^image\/(jpeg|png)$/)) {
      setError("Only JPG or PNG files are allowed.");
      onChange(null);
      return;
    }
    if (file.size > 500 * 1024) {
      setError("Max file size is 500KB.");
      onChange(null);
      return;
    }
    setError(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      onChange(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div className="avatar-upload-root">
      <label className="avatar-upload-label">Upload Avatar</label>
      <div
        className="avatar-upload-box"
        onDrop={onDrop}
        onDragOver={e => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
      >
        {value ? (
          <img src={value} alt="avatar preview" className="avatar-upload-preview" />
        ) : (
          <>
            <span className="avatar-upload-icon">⬆️</span>
            <span className="avatar-upload-text">Drag and drop or click to upload</span>
          </>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/png, image/jpeg"
          style={{ display: "none" }}
          onChange={onChangeInput}
        />
      </div>
      <div className="avatar-upload-hint">
        <input type="radio" checked readOnly style={{ marginRight: 4 }} />
        Upload your photo (JPG or PNG, max size: 500KB).
      </div>
      {error && <div className="avatar-upload-error">{error}</div>}
    </div>
  );
};
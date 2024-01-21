// src/components/FileFolderItem.tsx
import React from "react";
import Image from "next/image";

interface FileFolderItemProps {
  name: string;
  type: "folder" | "file";
  icon: StaticImageData;
  lastModified: string;
}

export default function FileFolderItem({
  name,
  type,
  icon,
  lastModified,
}: FileFolderItemProps) {
  return (
    <div className="flex flex-col items-center p-4 text-center">
      <div className="mb-2">
        <Image src={icon} alt={name} width={50} height={50} />
      </div>
      <div className="text-sm font-medium truncate">{name}</div>
      <div className="text-xs text-gray-500">{lastModified}</div>
    </div>
  );
}

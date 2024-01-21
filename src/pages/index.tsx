// src/pages/index.tsx
import React from "react";
import FileFolderItem from "@/components/FileFolderItem";
import folderIcon from "@public/icons/folder-icon.png"; // Update the import path to where your icons are stored
import fileIcon from "@public/icons/file-icon.png"; // Update the import path to where your icons are stored

// A mock function to simulate the format of last modified date, you can replace it with actual data logic
const formatDate = (date: Date) => {
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const HomePage = () => {
  // This would be fetched from your backend or Google Drive API in a real scenario
  const items = [
    {
      name: "AppData",
      type: "folder",
      icon: folderIcon,
      lastModified: formatDate(new Date()),
    },
    {
      name: "Documents",
      type: "folder",
      icon: folderIcon,
      lastModified: formatDate(new Date()),
    },
    // ... add more items as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <FileFolderItem
            key={index}
            name={item.name}
            type={item.type}
            icon={item.icon}
            lastModified={item.lastModified}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

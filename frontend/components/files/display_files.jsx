import React from 'react';

export const DisplayFiles = ({fileName, fileType, fileUrl}) => {
  if (["image/jpeg", "image/gif", "image/png"].includes(fileType)) {
    return (
      <div className="attachment">
        <img src={ fileUrl || ''}>
        </img>
      </div>
    );
  } else {
    return (
      <div className="attachment">
        <a target="_blank" href={ fileUrl || ''}>Download {fileName}
        </a>
      </div>
    );
  }
};

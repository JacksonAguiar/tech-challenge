import React, { useState } from "react";
import API_ITEMS from "../API";
import { parseStringFileToData } from "../utils/file-parsing";

interface Props {
  onSubmit: Function;
}

const UploadButton: React.FC<Props> = ({ onSubmit, ...props }: Props) => {
  const [fileData, setFileData] = useState<String | ArrayBuffer | null>(null);

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) setFileData(e.target.result);
      };
      reader.readAsText(file);
    } else {
      setFileData(null);
    }
  };

  const handleUploadButtonClick = () => {
    if (fileData) {
      onSubmit(fileData.toString());
    }
  };

  return (
    <div>
      <label htmlFor="input">
        <input type="file" id="input" onChange={handleFileInputChange} />
        <span>selecionar</span>
      </label>
      <button onClick={handleUploadButtonClick}>Upload</button>
    </div>
  );
};

export default UploadButton;

import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

import "./styles.css";

interface Props {
  onSubmit: Function;
  onFileNotSelected: VoidFunction;
}

const UploadButtonComponent: React.FC<Props> = ({
  onSubmit,
  onFileNotSelected,
  ...props
}: Props) => {
  const [fileData, setFileData] = useState<String | ArrayBuffer | null>(null);
  const [fileName, setfileName] = useState<String>("");

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      setfileName(file.name);
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
    else{
      onFileNotSelected();
    }
  };

  return (
    <div className="upload-content">
      <label htmlFor="input" className={fileData ? "has-file" : ""}>
        <FiUpload />
        <input type="file" accept=".txt" id="input" onChange={handleFileInputChange} />
        <span>{fileData ? fileName : "Selecionar"}</span>
      </label>

      <button onClick={handleUploadButtonClick}>Enviar</button>
    </div>
  );
};

export default UploadButtonComponent;

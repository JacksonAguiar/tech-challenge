import React, { useState } from "react";
import API_ITEMS from "../API";
import { parseStringFileToData } from "../utils/file_parsing";

interface Props {
  onUploadSuccess: VoidFunction;
}

const UploadButton: React.FC<Props> = ({ onUploadSuccess, ...props }: Props) => {
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

      const items = parseStringFileToData(fileData.toString());

     API_ITEMS.create(items).then((res)=>{
        if(res.status === 200) onUploadSuccess()
      })
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleUploadButtonClick}>Upload</button>
    </div>
  );
};

export default UploadButton;

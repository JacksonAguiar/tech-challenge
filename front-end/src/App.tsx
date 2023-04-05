import React, { useState, useEffect } from "react";
import UploadButton from "./components/upload_button";
import "./App.css";
import API_ITEMS from "./API";

import Table from "./components/table";
import { parseStringFileToData } from "./utils/file-parsing";

function App() {
  const [list, setList] = useState<any[]>([]);

  const loadData = async () => {
    await API_ITEMS.fetchAll()
      .then((response) => {
        console.log(response);
        setList(response.data.sales);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmitItems = (data: any)=>{
    const items = parseStringFileToData(data.toString());
    if (items)
      API_ITEMS.create(items).then((res) => {
        if (res.status === 200) loadData();
      });
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container">
      <div className="content">
        <div className="form-upload">
          <h4>Carregar e adicionar a lista</h4>
          <UploadButton
            onSubmit={handleSubmitItems}
          />
        </div>
        <div className="list">
          <Table
            cols={["Tipo", "Data", "Produto", "Valor", "Vendedor"]}
            data={list}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

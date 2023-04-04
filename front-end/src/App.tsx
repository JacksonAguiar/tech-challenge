import React, { useState, useEffect } from "react";
import UploadButton from "./components/upload_button";
import "./App.css";
import API_ITEMS from "./API";

import Table from "./components/table";

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
  useEffect(() => {
    loadData();
  }, []);
 

  return (
    <div className="container">
      <div className="content">
        <div className="form-upload">
          <h4>Carregar e adicionar arquivo</h4>
          <UploadButton onUploadSuccess={loadData} />
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

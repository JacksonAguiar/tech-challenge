import { useState, useEffect } from "react";
import API_ITEMS from "../../API";

import { toast, ToastContainer } from "react-toastify";
import { parseStringFileToData } from "../../utils/file-parsing";

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

import TableComponent from "../../components/Table";
import PaginationComponent from "../../components/Pagination";
import UploadButton from "../../components/UploadButton";

function App() {
  const [list, setList] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const loadData = async (page = 1) => {
  
    await API_ITEMS.fetchAll(page)
      .then((response) => {

        setList(response.data.sales);
        setPage(response.data.page);
        setTotalPages(response.data.totalPages);
      })
      .catch((err) =>
        toast.error(err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      );
  };

  const handleSubmitItems = (data: any) => {
    const items = parseStringFileToData(data.toString());
    if (items)
      API_ITEMS.create(items)
        .then((res) => {
          if (res.status === 200) {
            loadData();
            toast.success("Dados adicionados com sucesso!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        })
        .catch((err) =>
          toast.error(err.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        );
  };

  const handleSimplePagination = (n:number)=>{
    setList([]);
    loadData(n);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container">
      <div className="content">
        <div className="form-upload">
          <h2>Adicionar relatorio a lista</h2>
          <br />
          <UploadButton onSubmit={handleSubmitItems} />
        </div>
        <br />
        <div className="list">
          {list && (
            <>
              <TableComponent
                cols={["Tipo", "Data", "Produto", "Valor", "Vendedor"]}
                data={list}
              />
              <br />
              <PaginationComponent current={page} onChange={(n: number)=>handleSimplePagination(n+1)} total={totalPages}/>
            </>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;

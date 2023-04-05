import axios from "axios";

const API_ITEMS = {
    fetchAll: (_page?: Number,_limit?: Number) => axios.get(`http://localhost:3000/sales`, { params: { limit: _limit, page: _page } }),
    create: (data: any[]) => axios.post("http://localhost:3000/sales", data),
  };
  
  export default API_ITEMS;
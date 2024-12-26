import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import BooksTable from "../../components/AdminComponents/booksTable/BooksTable";

function AdminBooks() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    try {
      setIsLoading(true);
      let res = await axios.get("http://localhost:5000/books");
      setData(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-28 mb-8 custom-container">
      {isLoading ? <Loader /> : <BooksTable data={data} />}
    </div>
  );
}

export default AdminBooks;

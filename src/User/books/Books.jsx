import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader";
import Header from "../../components/UserComponents/header/Header";
import BookItems from "../../components/UserComponents/books/BookItems";
import Search from "../../components/UserComponents/search/Search";
function Books() {
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
    <div className="section ">
      <Header>Books</Header>
      <Search />
      {isLoading ? <Loader /> : <BookItems data={data} />}
    </div>
  );
}

export default Books;

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BookDetailsCard from "../../components/UserComponents/bookDetailsCard/bookDetailsCard";

function BookDetail() {
  const { id } = useParams("id");
  const [book, setBook] = useState({});
  const navigate = useNavigate();
  async function getBook() {
    try {
      let res = await axios.get(`http://localhost:5000/books/${id}`);
      setBook(res.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div className="flex items-center justify-center ">
      <BookDetailsCard book={book} navigate={navigate} />
    </div>
  );
}

export default BookDetail;

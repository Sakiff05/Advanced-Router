import BookCard from "../../UserComponents/card/BookCard";
function BookItems({ data }) {
  return (
    <div className="custom-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center ">
      {data.map((book) => (
        <BookCard
          title={book.title}
          img={book.image}
          key={book.id}
          id={book.id}
        />
      ))}
    </div>
  );
}

export default BookItems;

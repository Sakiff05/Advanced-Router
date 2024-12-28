import SearchIcon from "@mui/icons-material/Search";
import { useContext, useState } from "react";
import { searchContext } from "../../../context/SearchProvider";
function Search({ data, setData, searcingData }) {
  const { search, setSearch } = useContext(searchContext);
  function handleSearch(e) {
    e.preventDefault();
    if (search == "") {
      setData([...searcingData]);
    } else {
      let filteredData = searcingData.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
      setData(filteredData);
    }
  }

  function handleSort() {
    let sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
    setData([...sortedData]);
  }
  return (
    <div className="flex justify-center items-center my-10 gap-2 ">
      <form className="flex justify-center items-center  gap-2 ">
        <input
          type="search"
          className=" rounded border border-gray-500 py-2 px-2 outline-none w-96 text-xl"
          placeholder="Search for books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="rounded py-0.5 px-3 bg-sky-600 text-white"
          onClick={(e) => handleSearch(e)}
        >
          <SearchIcon sx={{ fontSize: "2.5rem" }} />
        </button>
      </form>
      <button
        className="rounded py-2 px-3 bg-sky-600 text-white text-xl"
        onClick={handleSort}
      >
        Sort by name
      </button>
    </div>
  );
}

export default Search;

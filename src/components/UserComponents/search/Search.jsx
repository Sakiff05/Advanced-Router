import SearchIcon from "@mui/icons-material/Search";
function Search() {
  return (
    <div className="flex justify-center items-center my-10 gap-2 ">
      <form className="flex justify-center items-center  gap-2 ">
        <input
          type="search"
          className=" rounded border border-gray-500 py-2 px-2 outline-none w-96 text-xl"
          placeholder="Search for books..."
        />
        <button className="rounded py-0.5 px-3 bg-sky-600 text-white">
          <SearchIcon sx={{ fontSize: "2.5rem" }} />
        </button>
      </form>
      <button className="rounded py-2 px-3 bg-sky-600 text-white text-xl">
        Sort by name
      </button>
    </div>
  );
}

export default Search;

const SearchBar = ({ placeholder }) => {
  return (
    <div className="space-x-2 flex justify-center w-full">
      <search className="w-full">
        <input
          type="search"
          className="w-full bg-gray-100 text-gray-800 rounded-lg border-2 border-gray-200 py-2 px-3 focus:outline-none"
          placeholder="Search followers..."
        />
      </search>
      <button className="bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-600">
        <i className="fa-brands fa-searchengin"></i>
      </button>
    </div>
  );
};

export default SearchBar;

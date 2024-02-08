const SearchBar = ({ placeholder }) => {
  return (
    <div className="space-x-2 flex justify-center w-full">
      <search className="w-full">
        <input
          type="search"
          className="p-2 border rounded-md outline-none focus:border-blue-500 w-full"
          placeholder={placeholder}
        />
      </search>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        <i className="fa-brands fa-searchengin"></i>
      </button>
    </div>
  );
};

export default SearchBar;

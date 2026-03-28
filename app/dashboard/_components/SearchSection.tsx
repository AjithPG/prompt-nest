import { Search } from "lucide-react";

const SearchSection = ({
  onSearchInput,
}: {
  onSearchInput: (value: string) => void;
}) => {
  return (
    <div className="p-10 flex flex-col gap-2 justify-center items-center text-white bg-linear-to-r from-[#667EEA] to-[#764BA2]">
      <h2 className="text-3xl font-bold">Browse Templates</h2>
      <p className="">What would you like to create today</p>
      <div className="flex w-full justify-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-2 w-full md:w-1/2">
          <Search className="text-black" />
          <input
            type="text"
            placeholder="Search"
            className="w-full py-1 rounded-lg bg-white text-black outline-none"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;

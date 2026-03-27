import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="p-5 w-full shadow-sm border-b-2 flex items-center justify-between">
      <div className="flex items-center gap-2 p-2 border rounded-md max-w-md">
        <Search />
        <input
          type="search"
          placeholder="Search..."
          className="outline-none w-full"
        />
      </div>
      <h2 className="bg-primary p-2 rounded-full text-base text-white">
        Join the Community
      </h2>
    </div>
  );
};

export default Header;

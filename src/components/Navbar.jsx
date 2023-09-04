import { NavLink } from "react-router-dom";

export default function Navbar({
  searchItem,
  setSearchItem,
  inputref,
  searchingElement,
}) {
  const navActive = ({ isActive }) => {
    return {
      color: isActive ? "rgb(244 63 94)" : null,
    };
  };

  return (
    <div className="navber flex justify-between items-center container mx-auto py-8 flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="logo text-2xl font-bold lowercase italic">
        Food<span className=" text-rose-500">Evers</span>
      </h2>

      <form onSubmit={searchingElement}>
        <input
          
          ref={inputref}
         value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          type="text"
          placeholder="Search...."
          required
          // name="search"
          className=" bg-white/75 p-3 px-8 lg:w-96 rounded-full outline-none shadow-lg shadow-rose-100 focus:shadow-rose-200 duration-200 "
        />
      </form>
      <ul className="menu flex gap-5">
        <li>
          <NavLink
            style={navActive}
            end
            to="/"
            className=" text-gray-400 hover:text-gray-600 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={navActive}
            end
            to="/favorit"
            className=" text-gray-400 hover:text-gray-600 duration-300"
          >
            Foverites
            <span className="favCount font-bold text-sky-400">(1)</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

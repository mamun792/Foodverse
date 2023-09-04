import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Favorites from "./components/Favorites";
import { useState, useRef } from "react";

function App() {
  const [searchItem, setSearchItem] = useState("");
  const inputref = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchingElement = (e) => {
    e.preventDefault();

    getData(searchItem);
    setSearchItem("");
    inputref.current.blur();
  };

  const getData = async (searchItem) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${searchItem}`
      );

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const data = await res.json();
     
      setData(data.recipes);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <div className="App min-h-screen bg-rose-50 text-gray-600 text-lg ">
        <Navbar
          searchItem={searchItem}
          setSearchItem={setSearchItem}
          inputref={inputref}
          searchingElement={searchingElement}
        />
        <Routes>
          <Route
            path="/"
            element={<Home data={data} error={error} loading={loading} />}
          />
          <Route path="/favorit" element={<Favorites />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

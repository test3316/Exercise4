import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Data = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");

  async function logMovies() {
    const response = await fetch(
      "https://api.vendoo.ge/api/beta/catalog?url=technics%2Ftelefonebi%2Fmobiluri-telefonebi&sort=popular&sortDir=desc&page=1&limit=20"
    );
    const movies = await response.json();
    setFetchedData(movies);
  }
  useEffect(() => {
    logMovies();
  }, []);

  const filter = (e) => {
    setSearch(e.target.value);
  };

  const filtered = () => {
    if (filteredResult == fetchedData?.products.name) {
    }
  };

  return (
    <div>
      <input placeholder="Type here" onChange={filter}></input>
      <button onClick={filtered}>Filter</button>
      {fetchedData?.products
        ?.filter((text) => {
          return search.toLowerCase() === ""
            ? text
            : text.name.toLowerCase().includes(search);
        })
        .map((a, index) => (
          <div key={index}>
            <h2>Product: {a.name}</h2>
            <img src={a.thumb_img.files.file} alt="" />
            <p>ID:{a.id}</p>
            <a
              href={"https://vendoo.ge/details/" + a.url}
              target="_blank"
              rel="noopener"
            >
              Buy Now
            </a>
          </div>
        ))}
    </div>
  );
};

export default Data;

import React, { useState, useEffect } from "react";
import './App.css'; // Import the CSS file


function App() {
  const [api, setApi] = useState([]); 
  const [searchItem, setItem] = useState(""); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((val) => {
        console.log(val);
        setApi(val); 
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const Search = (e) => {
    setItem(e.target.value); 
  }

  const filterProd = api.filter((prod) =>
    prod.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="app-container">
       <div id="d1">
          <h1 id="heading">Stunning royalty-free images & royalty-free stock</h1>
          <p id="para">
            Over 5 million+ high quality stock images, videos, and music shared
            by our talented community.
          </p>
          <input
        type="text"
        placeholder="Search for a product..."
        value={searchItem}
        onChange={Search}
        id="search"
      />
        </div><br></br><br></br>
     
      <div className="product-grid">
        {filterProd.map((prod) => (
          <div className="product-card" key={prod.id}>
            <img
              src={prod.image}
              alt={prod.title}
              className="product-image"
            />
            <p className="product-title">{prod.title}</p>
            <p><button className="btnapi"> Add to cart </button> <button className="btnapi"> BuyNow </button></p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

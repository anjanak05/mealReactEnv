import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const [meal, setMeal] = useState("");

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = () => {
  
    return axios
      .get(`${process.env.REACT_APP_BASE_URL}?s=${meal}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App" >
      <input
        placeholder="enter meal"
        onChange={(e) => setMeal(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {data.meals?.map((e) => (
        <div key={e.id} >
          <h1>name: {e.strMeal}</h1>
          <h1>category: {e.strCategory}</h1>
          <img style={{width:"30", height:"200px"}} src={e.strMealThumb} />
        </div>
      ))}
    </div>
  );
}

export default App;

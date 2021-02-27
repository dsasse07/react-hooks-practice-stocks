import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [ stockData, setStockData ] = useState([])
  const API = "http://localhost:3001/stocks"

  useEffect( () => {
    fetch(API)
      .then( response => response.json() )
      .then( setStockData )
  }, [] )

  return (
    <div>
      <Header />
      <MainContainer stockData={stockData} />
    </div>
  );
}

export default App;

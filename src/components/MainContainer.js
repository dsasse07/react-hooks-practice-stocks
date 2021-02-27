import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stockData }) {

  const [portfolio, setPortfolio] = useState([])
  const [searchData, setSearchData] = useState({
    sort: "Price",
    filter: "Tech"
  })

  function handleSearchChange(event){
    const key = event.target.name
    const value = event.target.value
    setSearchData({...searchData, [key]:value })
  }

  function addToPortfolio(stock){
    setPortfolio([...portfolio, stock])
  }

  function removeFromPortfolio(removedStock){
    const updatedPortfolio = portfolio.filter( stock => {
      return stock.id !== removedStock.id
    })
    setPortfolio(updatedPortfolio)
  }

  return (
    <div>
      <SearchBar searchData={searchData} onSearchChange={handleSearchChange}/>
      <div className="row">
        <div className="col-8">
          <StockContainer searchData={searchData} stockData={stockData} onBuyStock={addToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onSellStock={removeFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

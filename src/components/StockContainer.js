import React from "react";
import Stock from "./Stock";

function StockContainer({ searchData:{sort, filter}, stockData, onBuyStock }) {

  const sortedStocks = stockData.sort( (stock1, stock2) => {
    if (sort === "Alphabetically") {
      return stock1.name.localeCompare(stock2.name)
    } else {
      return stock1.price - stock2.price
    }
  })

  const filteredStocks = sortedStocks.filter( stock => {
    return stock.type === filter
  })

  const stockComponents = filteredStocks.map( stock => {
    return <Stock stock={stock} key={stock.id} clickAction={onBuyStock}/>
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stockComponents}
    </div>
  );
}

export default StockContainer;

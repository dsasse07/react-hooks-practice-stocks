import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onSellStock }) {


  const stockComponents = portfolio && portfolio.map( stock => {
    return <Stock stock={stock} key={stock.id} clickAction={onSellStock}/>
  })


  return (
    <div>
      <h2>My Portfolio</h2>
      {
        stockComponents
      }
    </div>
  );
}

export default PortfolioContainer;

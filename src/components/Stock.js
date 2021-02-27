import React from "react";

function Stock({ stock:{id, name, type, price}, clickAction }) {

  function handleTrade(){
    clickAction({id, name, type, price})
  }

  return (
    <div>
      <div className="card" onClick={handleTrade}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

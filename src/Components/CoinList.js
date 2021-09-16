import React from "react";
import Coin from "./Coin";

function CoinList({ coins, changeDetails }) {
  return (
    <div className="coinlist">
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: "50px" }}></th>
            <th style={{ width: "200px" }}>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h Change</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((c) => {
            {
              return <Coin key={c.id} coin={c} changeDetails={changeDetails} />;
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CoinList;

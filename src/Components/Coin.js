import React from "react";
// import CoinDetails from "./CoinDetails";

function Coin({ coin, changeDetails }) {
  return (
    <tr>
      <td>
        <img src={coin.image} alt="" className="coin-logo" />
      </td>
      <td>
        <a
          onClick={() => {
            changeDetails(coin);
          }}
        >
          {coin.name}
        </a>
      </td>
      <td>{coin.symbol}</td>
      {coin.price_change_24h < 0 ? (
        <td style={{ color: "red" }}>₹{coin.current_price}</td>
      ) : (
        <td style={{ color: "green" }}>₹{coin.current_price}</td>
      )}
      {coin.price_change_percentage_1h_in_currency < 0 ? (
        <td style={{ color: "red" }}>
          ₹{coin.price_change_percentage_1h_in_currency.toFixed(3)}
        </td>
      ) : (
        <td style={{ color: "green" }}>
          ₹{coin.price_change_percentage_1h_in_currency.toFixed(3)}
        </td>
      )}
      {/* <td>{coin.price_change_percentage_1h_in_currency.toFixed(3)}</td> */}
    </tr>
  );
}
export default Coin;

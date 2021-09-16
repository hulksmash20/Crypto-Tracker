import "./App.css";
import axios from "axios";
import { react, useState, useEffect } from "react";
import Header from "./Components/Header";
import CoinList from "./Components/CoinList";
import Footer from "./Components/Footer";
import CoinDetails from "./Components/CoinDetails";

function App() {
  const [coin, setcoin] = useState([]);
  const [coinDetails, setcoinDetails] = useState();
  const [graphprices, setgraphprices] = useState([]);
  const [search, setsearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y"
      )
      .then((res) => {
        setcoin(res.data);
      })
      .catch((error) => alert(error));
  }, []);

  const changeSearch = (val) => {
    setsearch(val);
    // console.log(val);
  };

  const searchedCoins = coin.filter((c) =>
    c.name.toLowerCase().includes(search.toLocaleLowerCase())
  );
  // console.log(searchedCoins);
  const changeDetails = (c) => {
    setcoinDetails(c);
    const url =
      "https://api.coingecko.com/api/v3/coins/" +
      c.id +
      "/market_chart?vs_currency=inr&days=180&interval=daily";
    // var prices = [];
    axios
      .get(url)
      .then((res) => {
        setgraphprices(res.data.prices);
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="App">
      <Header changeSearch={changeSearch} />
      <div style={{ display: "flex" }}>
        <CoinList coins={searchedCoins} changeDetails={changeDetails} />
        <CoinDetails details={coinDetails} prices={graphprices} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

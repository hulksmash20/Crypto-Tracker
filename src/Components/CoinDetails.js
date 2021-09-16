import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function CoinDetails({ details, prices }) {
  if (details) {
    // console.log(prices);
    var data = [];
    // for (var i = 0; i < prices.length; i++){

    // }
    prices.map((d) => {
      var date = new Date(d[0]);
      var date =
        date.getDate() +
        "/" +
        (parseInt(date.getMonth()) + 1 + "/" + parseInt(date.getFullYear()));
      var x = { date: date, price: parseFloat(d[1]) };
      data.push(x);
    });
    // console.log(data);

    return (
      <div className="coindetails">
        <h3>{details.name}</h3>
        <div>
          <ResponsiveContainer width="95%" height="70%" aspect={3}>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid />
              <XAxis dataKey="date" />
              <YAxis />
              <Legend verticalAlign="bottom" height={1} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="price"
                stroke="blue"
                dot={{ r: 0 }}
                activeDot={{ r: 5 }}
                // margin={{ top: 10 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="facts">
          <div className="facts-sub-div">
            <div>
              24H High:
              <span style={{ color: "green" }}> ₹{details.high_24h}</span>
            </div>
            <div>
              24H Low: <span style={{ color: "red" }}> ₹{details.low_24h}</span>
            </div>
          </div>
          <div className="facts-sub-div">
            <div>Market Cap: ₹{details.market_cap}</div>
            <div>Total Volume: {details.total_volume}</div>
          </div>
          <div className="facts-sub-div">
            <div>
              {details.price_change_24h >= 0 ? (
                <p>
                  24H Price Change:{" "}
                  <span style={{ color: "green" }}>
                    {details.price_change_24h +
                      "(" +
                      details.price_change_percentage_24h +
                      "%)"}
                  </span>
                </p>
              ) : (
                <p>
                  24H Price Change:{" "}
                  <span style={{ color: "red" }}>
                    {details.price_change_24h +
                      "(" +
                      details.price_change_percentage_24h +
                      "%)"}
                  </span>
                </p>
              )}
            </div>
            <div>
              {details.market_cap_change_24h >= 0 ? (
                <p>
                  24H Market Cap Change:{" "}
                  <span style={{ color: "green" }}>
                    {details.market_cap_change_24h +
                      "(" +
                      details.market_cap_change_percentage_24h +
                      "%)"}
                  </span>
                </p>
              ) : (
                <p>
                  24H Price Change:{" "}
                  <span style={{ color: "red" }}>
                    {details.market_cap_change_24h +
                      "(" +
                      details.market_cap_change_percentage_24h +
                      "%)"}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default CoinDetails;

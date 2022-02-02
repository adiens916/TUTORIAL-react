import {useEffect, useState} from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [index, setIndex] = useState(0)

  const getData = async () => {
    const response = await fetch("https://api.coinpaprika.com/v1/tickers");
    const json = await response.json();
    setCoins(json);
    setLoading(false);
  };
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Coin Tracker!</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select onChange={onSelect}>
        {coins.map((coin, index) => (
          <option 
            value={index}
            key={coin.id}
          >
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
      <p>Selected: {index}</p>
    </div>
  );
}

export default CoinTracker;
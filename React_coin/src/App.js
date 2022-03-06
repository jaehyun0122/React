import { useEffect, useState } from "react";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoding] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoding(false);
      });
  }, []);
  console.log(search.toUpperCase());
  
  return (
    <div className="App">
      <h1>Coins Information</h1>
      {loading ? <strong>loading...</strong> : null}
          <select>
              {coins.map((coin) => (
                <option>{coin.name}  ({coin.symbol})   ${ coin.quotes.USD.price}</option>
              ))}
      </select>
      <h2>search</h2>
      <input value={search} placeholder={"search"} type={"text"}
        onChange={(event) => {
          setSearch(event.target.value);
      }}
      ></input>
      <ul>
          {coins.map((coin) => (
            coin.name.toUpperCase().includes(search.toUpperCase()) && search != ""? (
              <li>
                {coin.name}  ({coin.symbol})   ${ coin.quotes.USD.price}
              </li>
            ) : null
          ))}
      </ul>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [seed,setSeed] = useState(0);
  const onInputChange = (event) => {
    setSeed(event.target.value);
  };

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json)=> setCoins(json));
    setLoading(false);
  },[]);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `( ${coins.length} ) `}</h1>
      <input value={seed} type="number" placeholder="write your seed money!!"
      onChange={onInputChange} />
      <b>You entered... {seed}$</b>
      <hr />

      {loading ? (<strong>Loading</strong>)
      :
      (<select>
        {coins.map((coin)=> 
        <option>
          {coin.name} -- You can buy {coin.quotes.USD.price/seed} 
        </option>)
        }
      </select>)
      }
      
    </div>
  );
}

export default App;

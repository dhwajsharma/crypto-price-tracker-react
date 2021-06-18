import './App.css';
import axios from "axios"
import { useEffect } from 'react';
import { useState } from 'react';
import Coin from './components/Coin'


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(res => {
        setCoins(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="app">
      <div className="app__search">
        <h1 className="app__text">Search a Currency.</h1>
        <form>
          <input onChange={handleChange} type="text" placeholder="Search" className="app__input" />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        )
      })}
    </div>
  );
}

export default App;

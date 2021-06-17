import './App.css';
import axios from "axios"
import { useEffect } from 'react';
import { useState } from 'react';


function App() {

  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(res => {
        setCoins(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])


  return (
    <div className="app">

    </div>
  );
}

export default App;

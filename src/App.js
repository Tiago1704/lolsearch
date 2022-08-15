/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [player, setPlayer] = useState("");
  const [data, setData] = useState({});
  const API_KEY = "RGAPI-e2adb4a3-e165-4604-8dd4-dd5fc155af70"; //Si no te anda de primera probá pegar tu código propio que conseguís acá https://developer.riotgames.com/

  const searchPlayer = (e) => {
    //const API_CALL = "https://la2.api.riotgames.com"
    const API_CALL = "https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+player+"?api_key="+ API_KEY;
    axios.get(API_CALL).then((response) =>{
      setData(response.data);
    }).catch((error) => console.error(error));

  }

  return (
    <div className="App">
      <div className="container">
        <h5> LOL SEARCH</h5>
        <input onChange={(e) => setPlayer(e.target.value)} type="text"/>
        <button onClick={e => searchPlayer(e)}>
          Search
        </button>
      </div>
      {
        JSON.stringify(data) !== "{}" ?
        <>
          <h5>INVOCADOR: </h5>
          <img width="100" height="100" src={`http://ddragon.leagueoflegends.com/cdn/12.15.1/img/profileicon/${data.profileIconId}.png`} />
          <p>{data.name}</p>
          <p>{data.summonerLevel}</p>
        </>
        : <p> No se encontró a invocador </p>
      }
    </div>
  );
}

export default App;

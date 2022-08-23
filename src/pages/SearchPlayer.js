/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button } from '@mui/material';
import { createStyles, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => createStyles({
    container: {
        height: 'auto !important',
        overflow: 'visible'
    },    
    title: {
        textAlign: 'center',
        fontSize: 18,
        margin: 10,
        color: 'blue'
    },
    itemsOne: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    }
}));

const SearchPlayer = () => {
  const classes = useStyles();
  const [player, setPlayer] = useState("");
  const [data, setData] = useState({});
  const API_KEY = "RGAPI-8a885747-f616-4dc5-86ce-5d40708d5eb6"; //Si no te anda de primera probá pegar tu código propio que conseguís acá https://developer.riotgames.com/

  const searchPlayer = (e) => {
    const API_CALL = "https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+player+"?api_key="+ API_KEY;
    axios.get(API_CALL).then((response) =>{
      setData(response?.data);
      console.log(response?.data);
    }).catch((error) => console.error(error));

  }
  
  return (
    <>
    <Container className="App">
      <div className="container">
        <Typography className={classes.title}> LOL SEARCH</Typography>
        <div className={classes.itemsOne}>
            <TextField id="filled-basic" label="Filled" variant="filled" onChange={(e) => setPlayer(e.target?.value)}/>
            <Button variant="contained" onClick={e => searchPlayer(e)}>
                Search
            </Button>
        </div>
      </div>
      {
        JSON.stringify(data) !== "{}" ?
        <>
          <Typography>INVOCADOR: </Typography>
          <img width="100" height="100" src={`http://ddragon.leagueoflegends.com/cdn/12.15.1/img/profileicon/${data?.profileIconId}.png`} />
          <p>{data?.name}</p>
          <p>{data?.summonerLevel}</p>
        </>
        : <p> No se encontró a invocador </p>
      }
    </Container>
    {/* <ErrorModal ea={openModal} /> */}
    </>
  );
}

export default SearchPlayer;
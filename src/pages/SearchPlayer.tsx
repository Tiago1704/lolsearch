/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button } from '@mui/material';
import { createStyles, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => createStyles({
    container: {
        height: '100%',
        overflow: 'visible',
        backgroundColor: "#BDBDBD",
        minHeight: 770,
        width: '100%',
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
    },
    itemsTwo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 15
    },
    errorTitle: {
      textAlign: 'center',
      fontSize: 18,
      margin: 10,
      fontWeight: "bold",
    },
    boxError: {
      paddingTop: 10,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: "24",
      minHeight: 300,
      backgroundColor: "#CD5C5C",
    },
    errorMessage: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }
}));

const SearchPlayer = () => {
  const classes = useStyles();
  const [player, setPlayer] = useState("");
  const [data, setData] = useState<any>();
  const [apiKey, setApiKey] = useState("")
  const [error, setError] = useState(false)
 //Si no te anda de primera probá pegar tu código propio que conseguís acá https://developer.riotgames.com/

  const searchPlayer = (e: any) => {
    const API_CALL = "https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+player+"?api_key="+ apiKey;
    axios.get(API_CALL).then((response) =>{
      setData(response?.data);
    }).catch((error) => {
      setError(true)
    });
  }

  const confirmApiKey = (e: any) => {
    console.log(apiKey)
    const API_CALL = "https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+player+"?api_key="+ apiKey;
    axios.get(API_CALL).then((response) =>{
      setData(response?.data);
      setError(false)
    }).catch((error) => {
      setError(false)
    });
  }

  return (
    <>
    <Container className={classes.container}>
      <div style={{paddingBottom: 25}}>
        <Typography className={classes.title}> LOL SEARCH</Typography>
        <div className={classes.itemsOne}>
            <TextField id="filled-basic" label="Filled" variant="filled" onChange={(e) => setPlayer(e.target?.value)}/>
            <Button variant="contained" onClick={e => searchPlayer(e)}>
                Search
            </Button>
        </div>
      </div>
      {
        error === true ?
        <Container className={classes.boxError}>
          <Container style={{display: "flex"}} className={classes.errorMessage}>
            <Typography style={{fontWeight: "bold"}} className={classes.errorTitle}> Error, invocador </Typography>
            <img width="90" height="90" src={`https://i.pinimg.com/originals/1e/72/61/1e72616d6e3383bdeab0a73e8acbcbad.png`} />
            <Typography style={{paddingBottom: 25}} id="modal-modal-description" sx={{ mt: 2 }}>
              El código actual está vencido, por favor carga uno nuevo <a href= "https://developer.riotgames.com/"> aquí </a>
            </Typography>
          </Container>
          <div className={classes.itemsOne}>
            <TextField id="filled-error" variant="filled" onChange={(e) => setApiKey(e.target?.value)}/>
            <Button color="error" variant="contained" onClick={e => confirmApiKey(e)}>
              Aceptar
            </Button>
          </div>
        </Container>
        : null
      }
      {
        data && !error ?
        <div className={classes.itemsTwo}>
          <Typography>INVOCADOR: </Typography>
          <img width="100" height="100" src={`http://ddragon.leagueoflegends.com/cdn/12.15.1/img/profileicon/${data?.profileIconId}.png`} />
          <p>{data?.name}</p>
          <p>{data?.summonerLevel}</p>
        </div>
        : null
      }
    </Container>
    </>
  );
}

export default SearchPlayer;
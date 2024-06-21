import { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button } from '@mui/material';
import { createStyles, makeStyles } from "@material-ui/core"
import { User } from '../shared/interfaces';

const useStyles = makeStyles(() => createStyles({
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
  const [name, setName] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [data, setData] = useState<User>();
  const [apiKey, setApiKey] = useState<string>("RGAPI-8048f2f8-81ac-4b87-bce6-ee7d4dd694fa");
  const [error, setError] = useState<boolean>(false);
 //Si no te anda de primera probá pegar tu código propio que conseguís acá https://developer.riotgames.com/

 //EJEMPLO: https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/EhTiaguito/TITO?api_key=RGAPI-f11fbb8a-baff-4779-9008-d69a7f4dd21f
  const searchPlayer = () => {
    const API_CALL = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/EhTiaguito/TITO?api_key=RGAPI-8048f2f8-81ac-4b87-bce6-ee7d4dd694fa`;
    console.log(API_CALL)
    axios.get(API_CALL).then((response) =>{
    console.log(response)
      setData(response?.data);
    }).catch((error) => {
      setError(true)
      console.error(error)
    });
  }

  const confirmApiKey = () => {
    console.log(apiKey)
    const API_CALL = `https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`;
    axios.get(API_CALL).then((response) =>{
      setData(response?.data);
      setError(false)
    }).catch((error) => {
      setError(false)
      console.error(error)
    });
  }

  return (
    <>
    <Container className={classes.container}>
      <div style={{paddingBottom: 25}}>
        <Typography className={classes.title}> LOL SEARCH</Typography>
        <div className={classes.itemsOne}>
            <TextField id="filled-basic" label="Nombre" variant="filled" onChange={(e) => setName(e.target?.value)}/>
            <TextField id="filled-basic" label="TagName" variant="filled" onChange={(e) => setTag(e.target?.value)}/>
            <Button variant="contained" onClick={searchPlayer}>
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
            <Button color="error" variant="contained" onClick={confirmApiKey}>
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
import { ImageList, Modal, Container, ImageListItem, Stack, Pagination, ImageListItemBar, IconButton, Box, Typography, Button } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import React, {useEffect, useState} from "react";
import { createStyles, makeStyles } from "@material-ui/core"
import { champsArrays } from "../functions";

const useStyles = makeStyles((theme) => createStyles({
  container: {
      height: '100%',
      overflow: 'visible',
      backgroundColor: "#BDBDBD",
      minHeight: 770,
      width: '100%',
  },
  fileInf: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }    
}));

const ChampsPage = () => {
  const classes = useStyles();
  const [allChamp, setAllChamp]= useState()
    useEffect(() => { 
        champsArrays().then(response => setAllChamp(response))
    },[])
    console.log(allChamp)
        return(
        <Container className={classes.container}>
            {allChamp?.map((item, index) =>{
                return(
                    <ImageListItem key={index} >
                    <img //`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${item.id}_0.jpg`
                    height={item?.image?.h}  
                    width={item?.image?.w}  
                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${item.id}_0.jpg`}
                    srcSet={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${item.id}_0.jpg`}
                    alt={item?.name}
                    loading="lazily "
                    />
                    <ImageListItemBar 
                    //key= {`item-${index}`}
                    title={item.name}
                    className={classes.fileInf}
                    onClick={e=>console.log(e.target.value)}
                    />
                </ImageListItem>
                )
            })}
        </Container>
        );
}


export default ChampsPage;
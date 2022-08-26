import React from 'react';
import { Grid, Typography, Button,backgroundTint, imageListClasses } from '@mui/material'; //imports
import { createStyles, makeStyles } from "@material-ui/core"

// Los estilos se definen con el nombre del estilo, dos puntos, y llaves. Entre las llaves el estilo que vos quieras.
const useStyles = makeStyles(() => createStyles({
    footer1: {
        display: "flex",
        backgroundColor: "#F4D03F",
        minHeight: 130,
        alignItems: "flex-end",
        justifyContent: "center",
        
    },
    text:{
        color:"#B6BA64",
        padding: "20px",
        background: "#2E86C1",
    },
    botonPersonalizated: {
        fontWeight: "600",
        fontSize: "20px",
        color: "#DF1919",
        paddingTop:"15px",
        paddingBottom:"15px",
        paddingLeft: "40px",
        paddingRight: "40px",
        backgroundTint: "#FF0400",
        borderWidth: "3px",
        borderstyle: "solid"
    }, botonPersonalizated2: {
        fontWeight: "600",
        fontSize: "20px",
        color: "#ffffff",
        paddingTop:"15px",
        paddingBottom:"15px",
        paddingLeft: "40px",
        paddingRight: "40px",
        backgroundColor: "#f2595e",
        borderWidth: "3px",
        borderstyle: "solid"},
    textGroup:{
        display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    
}));
  
//estilos

  // Properties: Datos que el hijo hereda del padre. Las properties se definen en los parentesis al lado del signo = abajo de este mensaje.
const Footer = (title) => {
    const classes = useStyles();

    //ACÁ VA LA LÓGICA DE JAVASCRIPT
    
    return (
        <Grid  className={classes.footer1}>
            <Grid justifyContent={"space-between"} className={classes.textGroup}>
                <Button color='success' href="https://www.instagram.com/?hl=es-la" target="_blank" variant="contained" className={classes.botonPersonalizated}>INSTAGRAM</Button>
                <Button href="https://www.facebook.com/" target="_blank" variant="contained" className={classes.botonPersonalizated2}>facebook</Button>
                <img height="100" width="100" src={"https://w7.pngwing.com/pngs/20/558/png-transparent-league-of-legends-logo-riot-games-font-brand-league-of-legends-text-logo-legend.png"}/>
            </Grid>
        </Grid>
    )
}

export default Footer;
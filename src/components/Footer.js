/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Grid, IconButton } from '@mui/material'; //imports
import { createStyles, makeStyles } from "@material-ui/core"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

// Los estilos se definen con el nombre del estilo, dos puntos, y llaves. Entre las llaves el estilo que vos quieras.
const useStyles = makeStyles(() => createStyles({
    footer1: {
        display: "flow-root",
        backgroundColor: "#3f51b5",
        minHeight: 130,
        alignItems: "flex-end",
        justifyContent: "center",
        
    },
    textGroup:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    
}));

// Properties: Datos que el hijo hereda del padre. Las properties se definen en los parentesis al lado del signo = abajo de este mensaje.
const Footer = () => {
    const classes = useStyles();

    //ACÁ VA LA LÓGICA DE JAVASCRIPT
    
    return (
        <Grid className={classes.footer1}>
            <Grid justifyContent={"space-between"} className={classes.textGroup}>
                <Grid display="flex" >
                    <IconButton href="https://www.instagram.com/?hl=es-la" target="_blank" variant="contained">
                        <InstagramIcon />
                    </IconButton >
                    <IconButton href="https://www.facebook.com/" target="_blank" variant="contained">
                        <FacebookIcon />
                    </IconButton >
                    <IconButton href="https://www.twitter.com/" target="_blank" variant="contained">
                        <TwitterIcon />
                    </IconButton >
                </Grid>
                <Grid style={{paddingTop: 10}}>
                    <img height="100" width="100" src={"https://w7.pngwing.com/pngs/20/558/png-transparent-league-of-legends-logo-riot-games-font-brand-league-of-legends-text-logo-legend.png"}/>
                </Grid>
                <Grid style={{paddingTop: "3%"}}>
                    <p>Contáctanos. Todos los derechos reservados®.</p>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer;
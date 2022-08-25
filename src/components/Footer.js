import React from 'react';
import { getAppBarUtilityClass, Grid,Typography } from '@mui/material'; //imports
import { createStyles, makeStyles } from "@material-ui/core"
import { red } from '@mui/material/colors';

// Los estilos se definen con el nombre del estilo, dos puntos, y llaves. Entre las llaves el estilo que vos quieras.
const useStyles = makeStyles(() => createStyles({
    footer1: {
        display: "flex",
        backgroundColor: "#B8485E",
        minHeight: 130,
        alignItems: "flex-end",
        justifyContent: "center"
    }, 
    text:{
        color:"#B6BA64",
    },
    textGroup:{
        display:"flex",
        gap:700,
    }
}));
  
//estilos

  // Properties: Datos que el hijo hereda del padre. Las properties se definen en los parentesis al lado del signo = abajo de este mensaje.
const Footer = (title) => {
    const classes = useStyles();

    //ACÁ VA LA LÓGICA DE JAVASCRIPT
    return (
        <Grid  className={classes.footer1}>
            <Grid justifyContent={"space-between"} className={classes.textGroup}>
                <Typography className={classes.text}>isso é fácil</Typography>
                <Typography className={classes.text}>santee28</Typography>
            </Grid>
        </Grid>
    )
}

export default Footer;
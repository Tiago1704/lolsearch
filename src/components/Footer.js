import React from 'react';
import { Grid } from '@mui/material'; //imports
import { createStyles, makeStyles } from "@material-ui/core"

// Los estilos se definen con el nombre del estilo, dos puntos, y llaves. Entre las llaves el estilo que vos quieras.
const useStyles = makeStyles(() => createStyles({
    footer1: {
        backgroundColor: "blue"
    },  
    footer2: {
        backgroundColor: "red"
    }
}));
  
//estilos

  // Properties: Datos que el hijo hereda del padre. Las properties se definen en los parentesis al lado del signo = abajo de este mensaje.
const Footer = (title) => {
    const classes = useStyles();

    //ACÁ VA LA LÓGICA DE JAVASCRIPT
    return (
        <Grid className={classes.footer1}>
            {/* HACER EL HTML ACÁ */}
        </Grid>
    )
}

export default Footer;
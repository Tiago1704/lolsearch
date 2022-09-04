import React from "react";
import { Container, Typography, TextField, Button } from '@mui/material';
import { createStyles, makeStyles } from "@material-ui/core"
import Swipeable from "../components/Swipeable";

const useStyles = makeStyles((theme) => createStyles({    
    title: {
        textAlign: 'center',
        fontSize: 18,
        margin: 10,
        color: 'blue'
    },
    // agregar boton 
}));

const Inicio = () => {
    const classes = useStyles()
    //div hay que definir los tamaños, container no necesita
    return(
        <Container> 
            {/* estructura basica, se comenta con control y barra cerrada*/}
            <Typography className={classes.title}>
            Pagina de inicio
            </Typography>
            <Swipeable/>
        </Container>
    )
} 

export default Inicio;

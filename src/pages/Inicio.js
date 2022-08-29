import React from "react";
import { Container, Typography, TextField, Button } from '@mui/material';
import { createStyles, makeStyles } from "@material-ui/core"

//import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: "Imagen de prueba",
        imgPath: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },

];

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
        </Container>
    )
} 

export default Inicio;
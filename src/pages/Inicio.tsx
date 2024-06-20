import {useEffect, useState} from "react";
import { Container } from '@mui/material';
import { createStyles, makeStyles } from "@material-ui/core"
import Swipeable from "../components/Swipeable";
import { aFewChamps, champsArrays } from "../functions";

const useStyles = makeStyles((_theme) => createStyles({    
    root: {
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center'
    },
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
    const [champsList, setChampsList] = useState<any>([]);
    //div hay que definir los tamaños, container no necesita

  useEffect(() => {
    champsArrays().then(response => setChampsList(response))
  },[])


    return(
        <Container className={classes.root}> 
            {/* estructura basica, se comenta con control y barra cerrada*/}
            {/* <Typography className={classes.title}>
            Pagina de inicio
            </Typography> */}
            <Swipeable arrayGeneric={aFewChamps(champsList)}/>
        </Container>
    )
} 

export default Inicio;

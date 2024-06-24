import {useEffect, useState} from "react";
import { Container } from '@mui/material';
import { createStyles, makeStyles } from "@material-ui/core"
import Swipeable from "../components/Swipeable";
import { aFewChamps, champsArrays } from "../shared/functions";
import { Champion } from "../shared/interfaces";

const useStyles = makeStyles(() => createStyles({    
    root: {
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        margin: 10,
        color: 'red'
    }
}));

const Inicio = () => {
    const classes = useStyles()
    const [champsList, setChampsList] = useState<Champion[]>([]);

  useEffect(() => {
    champsArrays().then(response => setChampsList(response))
  },[])


    return(
        <Container className={classes.root}>
            <Swipeable arrayGeneric={aFewChamps(champsList)}/>
        </Container>
    )
} 

export default Inicio;

import { ImageList, Container, ImageListItem, Stack, Pagination, ImageListItemBar, IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import React, { useEffect, useState } from "react";
import { itemsArrays } from "../functions";
import { createStyles, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => createStyles({
    container: {
        height: '100%',
        overflow: 'visible',
        backgroundColor: "#BDBDBD",
        minHeight: 770,
        width: '100%',
    },    
}));

const ItemsPage = () => {
    const classes = useStyles();
    const [data, setData] = useState([])
    const [dataPag, setDataPag] = useState([])
    useEffect(() => {
        itemsArrays().then(response => {
            setData(response)
        })
    },[])
    const handleChange = (event, value) => {
        //console.log(data)
        let arrayAux = []
        const pag = 15*value
        const from = pag-15
        console.log(from, pag)
        for (let index = from; index < pag; index++) {
            //console.log(data[index])
            arrayAux.push(data[index]);
        }
        setDataPag(arrayAux)
    }
    
    return(
        <Container className={classes.container}>
            <Stack>
                <div>
                    carrusel
                </div>
                <ImageList style={{paddingLeft: '25%'}} variant="masonry" gap={15} cols={5} sx={{ width: "50%", height: "50%" }}>
                {/* <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">December</ListSubheader>
                </ImageListItem> */}
                    {dataPag.map((item, index) => {
                        return (
                        <>
                        <ImageListItem key={index}>
                            <img //`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${item.img}.png`
                            height={item?.image.h}  
                            width={item?.image.w}  
                            src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${item?.image.full}`}
                            srcSet={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${item?.image.full}`}
                            alt={item?.name}
                            loading="lazily "
                            />
                            <ImageListItemBar
                            title={item?.name}
                            actionIcon={
                                <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`${item?.name}`}
                                >
                                <InfoIcon />
                                </IconButton>
                            }
                            />
                        </ImageListItem>
                        </>
                    )
                    })}
                </ImageList>
                <Pagination style={{display: 'flex', justifyContent: 'center'}} size={"large"} count={17} color="primary" onChange={handleChange}/>
            </Stack>
        </Container>
      );
}

export default ItemsPage;
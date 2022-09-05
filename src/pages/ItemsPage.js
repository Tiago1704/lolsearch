import { ImageList, Modal, Container, ImageListItem, Stack, Pagination, ImageListItemBar, IconButton, Box, Typography } from "@mui/material";
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
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }  
}));

const ItemsPage = () => {
    const classes = useStyles();
    const [data, setData] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [dataPag, setDataPag] = useState([])
    const [itemModal, setItemModal] = useState([])

    const initialNav = (firstState) => {
        let arrayAux = []
        for (let i = 0; i < 15; i++) {
            arrayAux.push(firstState[i]);
        }
        return arrayAux
    }

    useEffect(() => {
        itemsArrays().then(response => {
            setData(response)
            setDataPag(initialNav(response))
        })
    },[])

    const handleChange = (event, value) => {
        let arrayAux = []
        const pag = 15*value
        const from = pag-15
        for (let index = from; index < pag; index++) {
            arrayAux.push(data[index]);
        }
        setDataPag(arrayAux)
    }
    //Acá definís la función
    const handleClick = (item) => {
        console.log(item)
        setItemModal(item)
        setOpenModal(true)
    }

    const handleClose = () => {
        setOpenModal(false)
    }
    
    return(
        <>
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
                                height={item?.image?.h}  
                                width={item?.image?.w}  
                                src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${item?.image.full}`}
                                srcSet={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${item?.image.full}`}
                                alt={item?.name}
                                loading="lazily "
                                />
                                <ImageListItemBar
                                title={item?.name}
                                //key= {`item-${index}`}
                                actionIcon={
                                    <IconButton
                                    //key= {`img-${index}`}
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`${item?.name}`}
                                    onClick={(e) => handleClick(item)} //acá llamas a la función enlazada con el return
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
            <Modal 
                open={openModal} //Acá está el efecto de la función
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                  <Box className={classes.modal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {itemModal.name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {itemModal.plaintext}
                    </Typography>
                    <img //`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${item.img}.png`
                        height={itemModal.image?.h}  
                        width={itemModal.image?.w}  
                        src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${itemModal.image?.full}`}
                        srcSet={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${itemModal.image?.full}`}
                        alt={itemModal.name}
                        loading="lazily "
                    />
                </Box>
            </Modal>
        </>
      );
}

export default ItemsPage;
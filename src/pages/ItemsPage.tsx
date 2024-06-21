import React, { useEffect, useState } from "react";
import { ImageList, Modal, Container, ImageListItem, Stack, Pagination, ImageListItemBar, IconButton, Box, Typography, TextField } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { makeStyles, createStyles } from "@material-ui/core";
import Swipeable from "../components/Swipeable";
import { aFewItems, itemsArrays } from "../shared/functions";
import { Item } from "../shared/interfaces";

const useStyles = makeStyles(() => createStyles({
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
    boxShadow: "24",
    p: 4,
  },
  swipeable: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

const ItemsPage = () => {
  const classes = useStyles();
  const [data, setData] = useState<Item[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [dataPag, setDataPag] = useState<Item[]>([]);
  const [itemModal, setItemModal] = useState<Item>();
  const [filter, setFilter] = useState<string>();

  const initialNav = (firstState: Item[]): Item[] => {
    const arrayAux = [];
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
  }, [])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(event, value)
    const arrayAux = []
    const pag = 15 * value
    const from = pag - 15
    for (let index = from; index < pag; index++) {
      arrayAux.push(data[index]);
    }
    setDataPag(arrayAux)
  }

  const filterInfo = (search: string): Item[] => {
    const filterArray = data.filter(i => i.name.includes(search))
    return search !== '' && filterArray.length > 0 ? initialNav(filterArray) : dataPag;
  }

  const handleClick = (item: Item) => {
    setItemModal(item)
    setOpenModal(true)
  }

  const handleClose = () => {
    setOpenModal(false)
  }

  return (
    <>
      <Container className={classes.container}>
        <div style={{ paddingTop: 5 }}>
          <TextField
            label="Filtro"
            id="outlined-size-small"
            defaultValue="Buscar"
            size="small"
            onChange={(e) => setFilter(e.target?.value)}
          />
        </div>
        <Stack>
          <div className={classes.swipeable}>
            <Swipeable arrayGeneric={aFewItems(data)} />
          </div>
          <ImageList style={{ paddingLeft: '25%' }} variant="masonry" gap={15} cols={5} sx={{ width: "50%", height: "50%" }}>
            {filterInfo(filter || "").map((item, index) => (
              <ImageListItem key={index}>
                <img
                  height={item?.image.h}
                  width={item?.image.w}
                  src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${item?.image.full}`}
                  srcSet={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${item?.image.full}`}
                  alt={item?.name}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item?.name}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`${item?.name}`}
                      onClick={() => handleClick(item)}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Pagination style={{ display: 'flex', justifyContent: 'center' }} size={"large"} count={17} color="primary" onChange={handleChange} />
        </Stack>
      </Container>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {itemModal?.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {itemModal?.plaintext}
          </Typography>
          <img
            height={itemModal?.image?.h}
            width={itemModal?.image?.w}
            src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${itemModal?.image?.full}`}
            srcSet={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${itemModal?.image?.full}`}
            alt={itemModal?.name}
            loading="lazy"
          />
        </Box>
      </Modal>
    </>
  );
}

export default ItemsPage;